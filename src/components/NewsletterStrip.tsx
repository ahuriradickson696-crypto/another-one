import { useState } from 'react';
import { Mail } from 'lucide-react';
import { submitForm } from '@/lib/forms';

export function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState<false | 'sent' | 'email'>(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  return (
    <section className="newsletter-strip">
      <div className="newsletter-inner">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <span className="eyebrow-line" style={{ background: 'rgba(255,255,255,0.5)' }} /> Stay informed
          </div>
          <h2>AVIU news &amp; intake reminders</h2>
          <p>January · May · August intakes · open days · research events. Unsubscribe anytime.</p>
        </div>
        {done ? (
          <p className="newsletter-thanks">
            {done === 'email'
              ? 'Almost done — press Send in the email that just opened to finish subscribing.'
              : `Thank you — we will be in touch at ${email}.`}
          </p>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email.includes('@') || busy) return;
              setBusy(true);
              setError('');
              try {
                setDone(await submitForm('newsletter', { email, website: '' }));
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
              } finally {
                setBusy(false);
              }
            }}
          >
            <Mail size={18} />
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? 'Sending…' : 'Subscribe'}</button>
          </form>
        )}
        {error && <p className="form-error newsletter-error" role="alert">{error}</p>}
      </div>
    </section>
  );
}
