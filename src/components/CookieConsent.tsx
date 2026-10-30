import { useState, useEffect } from 'react';
import { useRouter } from '@/router/Router';

const KEY = 'aviu-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = (all: boolean) => {
    try {
      localStorage.setItem(KEY, all ? 'all' : 'essential');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '16px 20px',
        boxShadow: '0 -8px 32px rgba(0,0,0,.35)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, maxWidth: 640 }}>
        We use essential cookies to run this site and optional cookies to improve it. See our{' '}
        <button type="button" onClick={() => navigate('/legal/cookies')} style={{ background: 'none', border: 'none', color: '#93c5fd', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}>
          Cookie settings
        </button>{' '}
        and{' '}
        <button type="button" onClick={() => navigate('/legal/privacy')} style={{ background: 'none', border: 'none', color: '#93c5fd', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}>
          Privacy Policy
        </button>
        .
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button type="button" className="btn btn-outline" style={{ color: '#fff', borderColor: '#64748b' }} onClick={() => accept(false)}>
          Essential only
        </button>
        <button type="button" className="btn btn-primary" onClick={() => accept(true)}>
          Accept all
        </button>
      </div>
    </div>
  );
}
