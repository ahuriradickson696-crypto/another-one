// Tiny Redis client for Vercel functions. Talks to Upstash Redis over HTTPS (no extra packages).
// Works with either variable naming that Vercel / Upstash creates:
//   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
//   KV_REST_API_URL        + KV_REST_API_TOKEN
const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

export const redisConfigured = Boolean(URL_ && TOKEN);

/** Run several commands in one round trip. Returns an array of results (throws on any error). */
export async function pipeline(commands) {
  const r = await fetch(`${URL_.replace(/\/$/, '')}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error(`Redis HTTP ${r.status}`);
  const out = await r.json();
  return out.map((o) => {
    if (o.error) throw new Error(`Redis: ${o.error}`);
    return o.result;
  });
}

export async function cmd(...args) {
  return (await pipeline([args]))[0];
}
