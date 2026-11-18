// Vercel serverless function: receives the Contact form and the newsletter sign-up.
//
// Set ONE of these in Vercel → Settings → Environment Variables:
//   Email via Resend (https://resend.com):  RESEND_API_KEY, FORMS_TO_EMAIL  (optional: FORMS_FROM_EMAIL)
//   Or a webhook (Zapier / Make / Slack):   FORMS_WEBHOOK_URL
// If neither is set this returns 503 and the website falls back to the visitor's email app.

const hits = new Map(); // very small per-instance rate limit
const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const ip = String(req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 8) {
    res.status(429).json({ error: 'Too many submissions. Please try again in a few minutes.' });
    return;
  }
  hits.set(ip, [...recent, now]);

  const body = req.body || {};
  if (body.website) { // hidden spam trap field: real visitors never fill it in
    res.status(200).json({ ok: true });
    return;
  }

  const kind = body.kind === 'newsletter' ? 'newsletter' : 'contact';
  const email = clean(body.email, 200);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }
  const fields = {
    name: clean(body.name, 120),
    email,
    phone: clean(body.phone, 40),
    topic: clean(body.topic, 60),
    message: clean(body.message, 4000),
  };
  if (kind === 'contact' && (!fields.name || !fields.message)) {
    res.status(400).json({ error: 'Please fill in your name and message.' });
    return;
  }

  const subject = kind === 'newsletter' ? 'AVIU newsletter sign-up' : `AVIU website enquiry${fields.topic ? ` — ${fields.topic}` : ''}`;
  const text = kind === 'newsletter'
    ? `New newsletter sign-up: ${fields.email}`
    : `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || '-'}\nTopic: ${fields.topic || '-'}\n\n${fields.message}`;

  try {
    if (process.env.RESEND_API_KEY && process.env.FORMS_TO_EMAIL) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.FORMS_FROM_EMAIL || 'AVIU Website <onboarding@resend.dev>',
          to: process.env.FORMS_TO_EMAIL.split(',').map((s) => s.trim()),
          reply_to: fields.email,
          subject,
          text,
        }),
      });
      if (!r.ok) throw new Error(`Resend ${r.status}`);
    } else if (process.env.FORMS_WEBHOOK_URL) {
      const r = await fetch(process.env.FORMS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, subject, text, ...fields, text_slack: `*${subject}*\n${text}` }),
      });
      if (!r.ok) throw new Error(`Webhook ${r.status}`);
    } else {
      res.status(503).json({ error: 'Forms are not configured' });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('forms error', err);
    res.status(502).json({ error: 'Could not send your message. Please email info@aviu.ac.ug.' });
  }
}
