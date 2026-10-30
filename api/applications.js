// Admissions-only: list applications stored in Redis.
//   GET /api/applications               → latest 100 as JSON
//   GET /api/applications?format=csv    → download as a CSV file (opens in Excel)
//   GET /api/applications?limit=500     → up to 1000
// Send the header  Authorization: Bearer <ADMIN_TOKEN>  (set ADMIN_TOKEN in Vercel to a long random string).
import { timingSafeEqual } from 'node:crypto';
import { redisConfigured, cmd } from './_redis.js';

const safeEqual = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
};
// stop spreadsheet formula injection (a cell starting with = + - @ would run as a formula)
const csvCell = (v) => {
  let s = String(v ?? '');
  if (/^([=@\t\r]|[+-](?![\d\s]))/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const token = process.env.ADMIN_TOKEN;
  if (!token || !redisConfigured) return res.status(503).json({ error: 'Not configured' });
  const given = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!safeEqual(given, token)) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const limit = Math.min(1000, Math.max(1, parseInt(req.query?.limit, 10) || 100));
    const ids = await cmd('ZREVRANGE', 'applications:index', 0, limit - 1);
    const rows = ids.length ? (await cmd('MGET', ...ids.map((i) => `application:${i}`))) : [];
    const apps = rows.filter(Boolean).map((r) => JSON.parse(r));
    const total = await cmd('ZCARD', 'applications:index');

    if (req.query?.format === 'csv') {
      const cols = ['reference', 'submitted_at', 'status', 'full_name', 'email', 'phone', 'faculty', 'programme', 'intake', 'message'];
      const csv = [cols.join(','), ...apps.map((a) => cols.map((c) => csvCell(a[c])).join(','))].join('\n');
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="aviu-applications.csv"');
      return res.status(200).send('\ufeff' + csv);
    }
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ total, count: apps.length, applications: apps });
  } catch (err) {
    console.error('applications error', err);
    res.status(502).json({ error: 'Could not read applications' });
  }
}
