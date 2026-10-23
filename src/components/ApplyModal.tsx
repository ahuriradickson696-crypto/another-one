import { useState } from 'react';
import { ArrowRight, Check, X, Loader2, AlertCircle } from 'lucide-react';
import { faculties } from '@/data/university';

const intakes = [
  { name: 'January Intake', period: 'January - April', applications: 'October - December', status: 'Open' },
  { name: 'May Intake', period: 'May - August', applications: 'February - April', status: 'Open' },
  { name: 'August Intake', period: 'August - December', applications: 'May - July', status: 'Open Now' },
];

export function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void; }) {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', faculty: '', programme: '', intake: '', message: '', website: '' });
  const [consent, setConsent] = useState(false);
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [viaEmail, setViaEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setErrorMsg('Please agree to the data processing statement before submitting.'); setStatus('error'); return; }
    setStatus('submitting');
    setErrorMsg('');
    try {
      let saved = false;
      try {
        const res = await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
        if (res.ok) { const data = (await res.json().catch(() => ({}))) as { reference?: string }; setReference(data.reference ?? ''); saved = true; }
        else if (res.status === 400 || res.status === 429) { const data = (await res.json().catch(() => ({}))) as { error?: string }; throw new Error(data.error || 'Please check your details and try again.'); }
      } catch (err) {
        if (err instanceof Error && err.message && !/fetch|network|load failed|json/i.test(err.message)) throw err;
      }
      if (saved) { setViaEmail(false); }
      else {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const apiUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/submit-application` : '';
        setViaEmail(!apiUrl);
        if (apiUrl) {
          const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}` }, body: JSON.stringify(form) });
          if (!response.ok) throw new Error('Submission failed. Please email info@aviu.ac.ug or call Admissions.');
        } else {
          const body = encodeURIComponent(`Name: ${form.full_name}\nEmail: ${form.email}\nPhone: ${form.phone}\nFaculty: ${form.faculty}\nProgramme: ${form.programme}\nIntake: ${form.intake}\nMessage: ${form.message}`);
          window.location.href = `mailto:info@aviu.ac.ug?subject=AVIU Application - ${encodeURIComponent(form.full_name)}&body=${body}`;
        }
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const handleClose = () => {
    setStatus('idle'); setErrorMsg(''); setConsent(false);
    setForm({ full_name: '', email: '', phone: '', faculty: '', programme: '', intake: '', message: '', website: '' });
    setReference(''); onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close"><X size={19} /></button>
        {status === 'success' ? (
          <div className="success-state">
            <span className="success-icon"><Check size={25} /></span>
            {viaEmail ? (
              <><h3>One last step: send the email.</h3><p>Thank you, {form.full_name.split(' ')[0]}. Your email app should have opened with your details filled in. Please press Send to complete your application.</p></>
            ) : (
              <><h3>Application received.</h3><p>Thank you, {form.full_name.split(' ')[0]}. Your application has been submitted successfully.</p>
                {reference && (<p className="apply-ref">Your reference number: <strong>{reference}</strong><small>Keep this number when you contact Admissions.</small></p>)}
              </>
            )}
            <button className="button button-primary" onClick={handleClose}>Done <ArrowRight size={16} /></button>
          </div>
        ) : (
          <>
            <div className="eyebrow"><span className="eyebrow-line" /> Begin your journey</div>
            <h3>Tell us a little<br /><em>about yourself.</em></h3>
            <p>Our admissions team will help you find the right path at AVIU.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => update('website', e.target.value)} style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
              <label>Full name<input required placeholder="Your full name" value={form.full_name} onChange={(e) => update('full_name', e.target.value)} /></label>
              <label>Email address<input required type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} /></label>
              <label>Phone / WhatsApp number<input required type="tel" placeholder="+256 700 000 000" value={form.phone} onChange={(e) => update('phone', e.target.value)} /></label>
              <label>What would you like to study?<select required value={form.faculty} onChange={(e) => update('faculty', e.target.value)}><option value="" disabled>Select a faculty</option>{faculties.map((f) => (<option key={f.id} value={f.name}>{f.name}</option>))}</select></label>
              <label>Specific programme (optional)<input placeholder="e.g. Bachelor of Business Administration" value={form.programme} onChange={(e) => update('programme', e.target.value)} /></label>
              <label>Preferred intake<select required value={form.intake} onChange={(e) => update('intake', e.target.value)}><option value="" disabled>Select an intake</option>{intakes.map((i) => (<option key={i.name} value={i.name}>{i.name} ({i.status})</option>))}</select></label>
              <label>Message (optional)<textarea rows={3} placeholder="Tell us anything else..." value={form.message} onChange={(e) => update('message', e.target.value)} /></label>
              <label className="consent-row" style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start', textTransform: 'none', letterSpacing: 0, fontWeight: 400, fontSize: 13, lineHeight: 1.5 }}>
                <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }} />
                <span>I agree that AVIU may process the personal data I have entered for the purpose of handling my application, in line with the <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)', fontWeight: 700 }}>Privacy Policy</a> and the Uganda Data Protection and Privacy Act, 2019.</span>
              </label>
              {status === 'error' && (<div className="form-error"><AlertCircle size={16} /><span>{errorMsg}</span></div>)}
              <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? (<>Submitting... <Loader2 size={16} className="animate-spin" /></>) : (<>Submit application <ArrowRight size={16} /></>)}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
