// Vercel serverless function: receives the Apply form and stores it in Redis.
//
// Needs a Redis database (Upstash, added from Vercel → Storage → Marketplace). Vercel adds the
// connection variables for you. Optional: RESEND_API_KEY + FORMS_TO_EMAIL to also email each application.
//
// Redis layout:
//   applications:seq              counter used for reference numbers
//   application:<n>               JSON of one application
//   applications:index            sorted set (score = time) of application numbers, newest = highest
//   apply:dup:<email>|<intake>    stops the same person submitting twice within 3 days
//   apply:rl:<ip>                 rate limit counter (works across all serverless instances)
import { redisConfigured, pipeline, cmd } from './_redis.js';

const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  if (!redisConfigured) {
    res.status(503).json({ error: 'Applications are not configured' });
    return;
  }

  const body = req.body || {};
  if (body.website) { // hidden spam trap: real visitors never fill it in
    res.status(200).json({ ok: true });
    return;
  }

  const ip = String(req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  const app = {
    full_name: clean(body.full_name, 120),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 40),
    faculty: clean(body.faculty, 160),
    programme: clean(body.programme, 160),
    intake: clean(body.intake, 60),
    message: clean(body.message, 3000),
  };
  if (!app.full_name || app.full_name.length < 3) return res.status(400).json({ error: 'Please enter your full name.' });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(app.email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (app.phone.replace(/\D/g, '').length < 7) return res.status(400).json({ error: 'Please enter a valid phone / WhatsApp number.' });
  if (!app.faculty || !app.intake) return res.status(400).json({ error: 'Please choose a faculty and an intake.' });

  try {
    // 1. rate limit: 5 applications per 10 minutes per IP
    const [hitCount] = await pipeline([['INCR', `apply:rl:${ip}`], ['EXPIRE', `apply:rl:${ip}`, 600]]);
    if (hitCount > 5) {
      res.status(429).json({ error: 'Too many submissions. Please try again in a few minutes.' });
      return;
    }

    // 2. duplicate check
    const dupKey = `apply:dup:${app.email}|${app.intake}`;
    const existing = await cmd('GET', dupKey);
    if (existing) {
      res.status(200).json({ ok: true, reference: existing, duplicate: true });
      return;
    }

    // 3. save
    const n = await cmd('INCR', 'applications:seq');
    const reference = `AVIU-${new Date().getFullYear()}-${String(n).padStart(5, '0')}`;
    const record = { id: n, reference, status: 'new', submitted_at: new Date().toISOString(), ip, ...app };
    await pipeline([
      ['SET', `application:${n}`, JSON.stringify(record)],
      ['ZADD', 'applications:index', Date.now(), String(n)],
      ['SET', dupKey, reference, 'EX', 3 * 24 * 3600],
    ]);

    // 4. optional email notification (never blocks or fails the application)
    if (process.env.RESEND_API_KEY && process.env.FORMS_TO_EMAIL) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.FORMS_FROM_EMAIL || 'AVIU Website <onboarding@resend.dev>',
          to: process.env.FORMS_TO_EMAIL.split(',').map((s) => s.trim()),
          reply_to: app.email,
          subject: `New AVIU application ${reference} — ${app.full_name}`,
          text: `Reference: ${reference}\nName: ${app.full_name}\nEmail: ${app.email}\nPhone: ${app.phone}\nFaculty: ${app.faculty}\nProgramme: ${app.programme || '-'}\nIntake: ${app.intake}\n\n${app.message || ''}`,
        }),
      }).catch(() => {});
    }

    res.status(200).json({ ok: true, reference });
  } catch (err) {
    console.error('apply error', err);
    res.status(502).json({ error: 'Could not save your application. Please email info@aviu.ac.ug.' });
  }
}
