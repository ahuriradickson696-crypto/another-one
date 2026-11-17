import { useState, useEffect } from 'react';
import { ArrowRight, Mail, X, Check, AlertCircle, Loader2 } from 'lucide-react';
import { faculties } from '@/data/university';

const intakes = [
  { name: 'January Intake', status: 'Open' },
  { name: 'May Intake', status: 'Open' },
  { name: 'August Intake', status: 'Open Now' },
];

const ADMISSIONS_EMAIL = 'info@aviu.ac.ug';
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + ADMISSIONS_EMAIL;

export function ApplyModal({
  open,
  onClose,
  programmeName,
}: {
  open: boolean;
  onClose: () => void;
  programmeName?: string;
}) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    faculty: '',
    programme: '',
    intake: '',
    message: '',
    consent: false,
  });
  const [step, setStep] = useState<'form' | 'choose' | 'done'>('form');
  const [opening, setOpening] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (open && programmeName) {
      setForm((f) => ({ ...f, programme: programmeName }));
    }
  }, [open, programmeName]);

  if (!open) return null;

  const update = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const validate = () => {
    if (!form.full_name.trim()) return 'Full name is required.';
    if (!form.email.trim()) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.phone.trim()) return 'Phone number is required.';
    if (!form.programme.trim()) return 'Please select a programme.';
    if (!form.intake) return 'Please select a preferred intake.';
    if (!form.consent) return 'Please accept the privacy notice to continue.';
    return '';
  };

  const buildEmailBody = () => {
    return [
      'NEW APPLICATION SUBMISSION',
      '========================================',
      '',
      'PERSONAL DETAILS',
      '----------------------------------------',
      'Full Name:        ' + form.full_name,
      'Email Address:    ' + form.email,
      'Phone Number:     ' + form.phone,
      'Country:          ' + (form.country || 'Not specified'),
      '',
      'ACADEMIC DETAILS',
      '----------------------------------------',
      'Faculty:          ' + (form.faculty || 'Not specified'),
      'Programme:        ' + form.programme,
      'Preferred Intake: ' + form.intake,
      '',
      'ADDITIONAL MESSAGE',
      '----------------------------------------',
      form.message || 'None',
      '',
      '========================================',
      'Submitted:        ' + new Date().toLocaleString('en-GB', {
        dateStyle: 'full',
        timeStyle: 'short',
      }),
      'Source:           AVIU Official Website - Apply Form',
      'Consent:          Applicant has accepted the privacy notice.',
    ].join('\n');
  };

  const openGmail = () => {
    setOpening(true);
    setValidationError('');
    const subject = 'Application: ' + form.full_name + ' - ' + form.programme;
    const body = buildEmailBody();
    const url =
      GMAIL_COMPOSE_URL +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    window.open(url, '_blank');
    setTimeout(() => { setOpening(false); setStep('done'); }, 1200);
  };

  const openDefaultMail = () => {
    setOpening(true);
    setValidationError('');
    const subject = 'Application: ' + form.full_name + ' - ' + form.programme;
    const body = buildEmailBody();
    window.location.href =
      'mailto:' + ADMISSIONS_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    setTimeout(() => { setOpening(false); setStep('done'); }, 1200);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setValidationError(err); return; }
    setValidationError('');
    setStep('choose');
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed', inset: 0, background: 'rgba(29,10,68,0.72)', zIndex: 9999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '16px', overflowY: 'auto', backdropFilter: 'blur(4px)',
  };

  const modalStyle: React.CSSProperties = {
    background: '#fff', borderRadius: '20px', maxWidth: '620px', width: '100%',
    padding: '36px', boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
    maxHeight: '92vh', overflowY: 'auto', position: 'relative',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 15px', borderRadius: '10px',
    border: '1px solid #e0d4ee', fontSize: '14px', outline: 'none',
    fontFamily: 'inherit', boxSizing: 'border-box', background: '#fff',
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '11px', fontWeight: 700, color: '#3d1a6b',
    marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.7px',
  };

  const stepIndicator = (current: number) => (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', justifyContent: 'center' }}>
      {[1, 2, 3].map((n) => (
        <div key={n} style={{
          width: current >= n ? '36px' : '8px',
          height: '6px',
          borderRadius: '3px',
          background: current >= n ? '#3d1a6b' : '#e0d4ee',
          transition: 'all 0.3s',
        }} />
      ))}
    </div>
  );

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 18, right: 18, background: '#f9f6fd', border: 'none', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', color: '#8a7fa0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <>
            {stepIndicator(1)}
            <h2 style={{ fontSize: '26px', color: '#2d1454', margin: '0 0 6px', fontWeight: 800 }}>
              Apply to AVIU
            </h2>
            <p style={{ color: '#8a7fa0', fontSize: '14px', margin: '0 0 24px', lineHeight: 1.6 }}>
              Complete the form below. Next, you'll choose how to send your application.
            </p>

            {programmeName && (
              <div style={{ background: '#f0e8fa', borderLeft: '4px solid #3d1a6b', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', color: '#3d1a6b' }}>
                <strong>Selected Programme:</strong> {programmeName}
              </div>
            )}

            {validationError && (
              <div style={{ background: '#fee2e2', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px', color: '#991b1b', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <AlertCircle size={16} /> {validationError}
              </div>
            )}

            <form onSubmit={handleContinue}>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" required value={form.full_name} onChange={(e) => update('full_name', e.target.value)} style={inputStyle} placeholder="e.g. John Doe" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} style={inputStyle} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} style={inputStyle} placeholder="+256 700 000 000" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Country</label>
                    <input type="text" value={form.country} onChange={(e) => update('country', e.target.value)} style={inputStyle} placeholder="e.g. Uganda" />
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Intake *</label>
                    <select required value={form.intake} onChange={(e) => update('intake', e.target.value)} style={inputStyle}>
                      <option value="">Select intake</option>
                      {intakes.map((i) => <option key={i.name} value={i.name}>{i.name} - {i.status}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Faculty</label>
                  <select value={form.faculty} onChange={(e) => update('faculty', e.target.value)} style={inputStyle}>
                    <option value="">Select a faculty</option>
                    {faculties.map((f) => <option key={f.name} value={f.name}>{f.name}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Programme *</label>
                  <input type="text" required value={form.programme} onChange={(e) => update('programme', e.target.value)} style={{ ...inputStyle, background: programmeName ? '#f0e8fa' : '#fff', fontWeight: programmeName ? 600 : 400 }} placeholder="Select or type the programme name" readOnly={!!programmeName} />
                </div>

                <div>
                  <label style={labelStyle}>Additional Message (optional)</label>
                  <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Any questions or additional information..." />
                </div>

                <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '12px', color: '#5a4b6b', lineHeight: 1.5, cursor: 'pointer' }}>
                  <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} style={{ marginTop: '2px', width: '16px', height: '16px', cursor: 'pointer' }} />
                  <span>
                    I consent to AVIU processing the personal information above for admission purposes, in line with data protection laws.
                  </span>
                </label>

                <button type="submit" style={{ background: '#3d1a6b', color: '#fff', padding: '15px 24px', borderRadius: '10px', border: 'none', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '4px' }}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </>
        )}

        {/* STEP 2: CHOOSE SEND METHOD */}
        {step === 'choose' && (
          <>
            {stepIndicator(2)}
            <h2 style={{ fontSize: '24px', color: '#2d1454', margin: '0 0 6px', fontWeight: 800 }}>
              Choose How to Send
            </h2>
            <p style={{ color: '#8a7fa0', fontSize: '14px', margin: '0 0 24px', lineHeight: 1.6 }}>
              Select how you'd like to send your application to our Admissions Office.
            </p>

            <div style={{ display: 'grid', gap: '12px' }}>
              <button
                onClick={openGmail}
                disabled={opening}
                style={{ background: '#fff', border: '2px solid #e0d4ee', borderRadius: '12px', padding: '20px', cursor: opening ? 'wait' : 'pointer', display: 'flex', gap: '16px', alignItems: 'center', textAlign: 'left', transition: 'all 0.2s', fontFamily: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ea4335'; e.currentTarget.style.background = '#fff5f5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0d4ee'; e.currentTarget.style.background = '#fff'; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px', fontWeight: 900, color: '#ea4335' }}>M</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#2d1454', marginBottom: '2px' }}>Open in Gmail</div>
                  <div style={{ fontSize: '13px', color: '#8a7fa0' }}>Recommended — works on any device, no setup required</div>
                </div>
                <ArrowRight size={20} color="#3d1a6b" />
              </button>

              <button
                onClick={openDefaultMail}
                disabled={opening}
                style={{ background: '#fff', border: '2px solid #e0d4ee', borderRadius: '12px', padding: '20px', cursor: opening ? 'wait' : 'pointer', display: 'flex', gap: '16px', alignItems: 'center', textAlign: 'left', transition: 'all 0.2s', fontFamily: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3d1a6b'; e.currentTarget.style.background = '#f9f6fd'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0d4ee'; e.currentTarget.style.background = '#fff'; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: '#f0e8fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} color="#3d1a6b" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#2d1454', marginBottom: '2px' }}>Open in Default Email App</div>
                  <div style={{ fontSize: '13px', color: '#8a7fa0' }}>Outlook, Apple Mail, or your device's email app</div>
                </div>
                <ArrowRight size={20} color="#3d1a6b" />
              </button>

              <button
                onClick={() => setStep('form')}
                style={{ background: 'none', border: 'none', color: '#8a7fa0', fontSize: '13px', cursor: 'pointer', padding: '8px', textDecoration: 'underline', fontFamily: 'inherit' }}
              >
                ← Edit my details
              </button>
            </div>

            {opening && (
              <div style={{ marginTop: '16px', padding: '12px', background: '#f0e8fa', borderRadius: '8px', fontSize: '13px', color: '#3d1a6b', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Opening your email...
              </div>
            )}
          </>
        )}

        {/* STEP 3: DONE */}
        {step === 'done' && (
          <>
            {stepIndicator(3)}
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div style={{ width: 72, height: 72, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Check size={36} color="#16a34a" />
              </div>
              <h2 style={{ fontSize: '24px', color: '#2d1454', margin: '0 0 12px', fontWeight: 800 }}>
                Ready to Send
              </h2>
              <p style={{ color: '#5a4b6b', fontSize: '15px', lineHeight: 1.6, margin: '0 0 8px' }}>
                Your application email has been prepared in a new tab, addressed to:
              </p>
              <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '17px', margin: '12px 0 20px' }}>
                {ADMISSIONS_EMAIL}
              </p>
              <p style={{ color: '#8a7fa0', fontSize: '13px', marginBottom: '24px', lineHeight: 1.6 }}>
                Just click <strong>Send</strong> in your email to complete your application. You'll hear back within 2 business days.
              </p>
              <button onClick={onClose} style={{ background: '#3d1a6b', color: '#fff', padding: '12px 32px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                Done
              </button>
            </div>
          </>
        )}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
