// Vercel serverless function: keeps the Gemini API key on the server.
// Set GEMINI_API_KEY in Vercel → Settings → Environment Variables.
// gemini-2.0-flash was shut down on 1 June 2026 and gemini-2.5-flash is scheduled to follow on 16 Oct 2026,
// so the current model comes first. Optionally set GEMINI_MODEL in Vercel to override without a code change.
const MODELS = [process.env.GEMINI_MODEL, 'gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-2.5-flash'].filter(Boolean);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'Chat is not configured' });
    return;
  }

  const { system, contents } = req.body || {};
  if (
    typeof system !== 'string' || system.length > 20000 ||
    !Array.isArray(contents) || contents.length === 0 || contents.length > 30 ||
    JSON.stringify(contents).length > 12000
  ) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const body = {
    system_instruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { temperature: 0.4, maxOutputTokens: 2048 },
  };

  let lastErr = 'No response from Gemini';
  for (const model of MODELS) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
          body: JSON.stringify(body),
        }
      );
      if (!r.ok) {
        lastErr = `Gemini error ${r.status}`;
        continue;
      }
      const data = await r.json();
      const text = (data?.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
      if (text) {
        res.status(200).json({ text });
        return;
      }
    } catch {
      lastErr = 'Network error';
    }
  }
  res.status(502).json({ error: lastErr });
}
