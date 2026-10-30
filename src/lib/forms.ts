export type FormKind = 'contact' | 'newsletter';

/**
 * Sends a form to /api/forms (see api/forms.js).
 * Returns 'sent' when the server accepted it, or 'email' when no server is set up and the
 * visitor's email app was opened with the details filled in instead.
 */
export async function submitForm(kind: FormKind, fields: Record<string, string>): Promise<'sent' | 'email'> {
  try {
    const res = await fetch('/api/forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, ...fields }),
    });
    if (res.ok) return 'sent';
    if (res.status === 400 || res.status === 429) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || 'Please check your details and try again.');
    }
  } catch (err) {
    if (err instanceof Error && err.message && !/fetch|network|load failed/i.test(err.message)) throw err;
  }
  // Server not set up (or unreachable): fall back to the visitor's email app
  const subject = kind === 'newsletter' ? 'AVIU newsletter sign-up' : `AVIU website enquiry${fields.topic ? ` — ${fields.topic}` : ''}`;
  const body = Object.entries(fields)
    .filter(([k, v]) => v && k !== 'website')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:info@aviu.ac.ug?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'email';
}
