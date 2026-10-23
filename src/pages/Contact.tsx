import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check, Clock, Globe2 } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { submitForm } from '@/lib/forms';

export function Contact() {
  const { openApply } = useApply();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'email'>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '', website: '' });
  const [consent, setConsent] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    try {
      const topic = sessionStorage.getItem('aviu-contact-topic');
      if (topic) { setForm((f) => ({ ...f, topic })); sessionStorage.removeItem('aviu-contact-topic'); }
    } catch { /* storage unavailable */ }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setError('Please agree to the data processing statement before submitting.'); return; }
    setStatus('sending');
    setError('');
    try {
      const result = await submitForm('contact', form);
      setStatus(result);
    } catch (err) {
      setStatus('idle');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please email info@aviu.ac.ug.');
    }
  };

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.contact}
        eyebrow="Get in touch"
        title={<>Contact <em>AVIU</em></>}
        subtitle="Have a question about admissions, programmes, or visiting campus? Reach out and our team will respond within two business days."
      />

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Reach us</div>
            <h2>We would love to <em>hear from you.</em></h2>
            <p>Whether you are a prospective student, a partner, or simply curious about AVIU, our team is ready to answer your questions.</p>
            <div className="contact-info">
              <div className="contact-item"><span className="contact-icon"><Mail size={18} /></span><div><strong>Email</strong><span>{universityInfo.email}</span></div></div>
              <div className="contact-item"><span className="contact-icon"><Phone size={18} /></span><div><strong>Phone</strong><span>{universityInfo.phone}</span><span>{universityInfo.phoneAlt}</span></div></div>
              <div className="contact-item"><span className="contact-icon"><MapPin size={18} /></span><div><strong>Address</strong><span>{universityInfo.address}</span></div></div>
              <div className="contact-item"><span className="contact-icon"><Globe2 size={18} /></span><div><strong>Website</strong><span>{universityInfo.website}</span></div></div>
              <div className="contact-item"><span className="contact-icon"><Clock size={18} /></span><div><strong>Office Hours</strong><span>Mon - Fri: 8:00 AM - 5:00 PM</span><span>Sat: 9:00 AM - 1:00 PM</span></div></div>
            </div>
          </div>
          <div className="col-half">
            {status === 'sent' || status === 'email' ? (
              <div className="contact-success">
                <span className="success-icon"><Check size={25} /></span>
                {status === 'email' ? (
                  <><h3>One last step: send the email.</h3><p>Your email app should have opened with your message filled in. Please press Send. If nothing opened, email us at info@aviu.ac.ug or call us directly.</p></>
                ) : (
                  <><h3>Message sent.</h3><p>Thank you for reaching out. We will respond within two business days.</p></>
                )}
                <button className="button button-primary" onClick={() => { setStatus('idle'); setConsent(false); setForm({ name: '', email: '', phone: '', topic: '', message: '', website: '' }); }}>Send another <ArrowRight size={16} /></button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>Full name<input required name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={set('name')} /></label>
                <label>Email address<input required name="email" autoComplete="email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} /></label>
                <label>Phone number<input name="phone" autoComplete="tel" type="tel" placeholder="+256 ..." value={form.phone} onChange={set('phone')} /></label>
                <label>Subject<select required name="topic" value={form.topic} onChange={set('topic')}><option value="" disabled>Select a topic</option><option value="admissions">Admissions enquiry</option><option value="programmes">Programme information</option><option value="fees">Fees &amp; tuition</option><option value="research">Research collaboration</option><option value="library">Library services</option><option value="events">Events</option><option value="other">Other</option></select></label>
                <label>Message<textarea required name="message" rows={5} placeholder="Your message..." value={form.message} onChange={set('message')} /></label>
                <label className="hp-field" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} /></label>
                <label className="consent-row" style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start', textTransform: 'none', letterSpacing: 0, fontWeight: 400, fontSize: 13, lineHeight: 1.5 }}>
                  <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }} />
                  <span>I agree that AVIU may process the personal data I have submitted to respond to my enquiry, in line with the <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)', fontWeight: 700 }}>Privacy Policy</a> and the Uganda Data Protection and Privacy Act, 2019.</span>
                </label>
                {error && <p className="form-error" role="alert">{error}</p>}
                <button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'} <ArrowRight size={16} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Visit campus</div><h2>Come and see <em>for yourself.</em></h2></div></div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>Our campus is at Nabweru in Wakiso District, just outside Kampala, Uganda.</p>
            <p>To schedule a campus visit, contact us or call our admissions office directly.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button className="button button-primary" onClick={openApply}>Apply to AVIU <ArrowRight size={17} /></button>
              <a className="button button-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Avance International University, Nabweru, Wakiso, Uganda')}`} target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Get directions</a>
            </div>
          </div>
          <div className="col-half">
            <div className="contact-departments">
              <div className="contact-dept"><strong>Admissions Office</strong><span>admissions@aviu.ac.ug</span><span>+256 700 670 691</span></div>
              <div className="contact-dept"><strong>Academic Registrar</strong><span>registrar@aviu.ac.ug</span><span>+256 766 751 763</span></div>
              <div className="contact-dept"><strong>Library Services</strong><span>library@aviu.ac.ug</span></div>
              <div className="contact-dept"><strong>Bursar&apos;s Office</strong><span>bursar@aviu.ac.ug</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Find us</div><h2>Nabweru <em>campus.</em></h2></div></div>
        <p style={{ maxWidth: 560, marginBottom: 24 }}>1 km off Nansana-Hoima Road, Nabweru, Wakiso District, Uganda.</p>
        <div className="map-embed">
          <iframe title="Avance International University location" src="https://www.google.com/maps?q=Nabweru+Wakiso+Uganda&output=embed" width="100%" height="400" style={{ border: 0, borderRadius: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </div>
  );
}
