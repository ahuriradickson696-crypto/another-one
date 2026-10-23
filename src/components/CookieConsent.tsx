import { useState, useEffect, useRef } from 'react';
import { Cookie, ShieldCheck, Check } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { loadAnalytics } from '@/lib/analytics';

const KEY = 'aviu-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [thanks, setThanks] = useState<'all' | 'essential' | null>(null);
  const { navigate } = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!visible) { root.style.removeProperty('--cookie-h'); return; }
    const update = () => {
      const h = boxRef.current?.offsetHeight ?? 0;
      root.style.setProperty('--cookie-h', `${h + 16}px`);
    };
    update();
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('resize', update); root.style.removeProperty('--cookie-h'); };
  }, [visible]);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch { /* ignore */ }
    if (stored) return;
    let seen = false;
    try { seen = sessionStorage.getItem('aviu-splash') === '1'; } catch { /* ignore */ }
    const t = window.setTimeout(() => setVisible(true), seen ? 700 : 3700);
    return () => window.clearTimeout(t);
  }, []);

  const accept = (all: boolean) => {
    try { localStorage.setItem(KEY, all ? 'all' : 'essential'); } catch { /* ignore */ }
    if (all) loadAnalytics();
    setThanks(all ? 'all' : 'essential');
    window.setTimeout(() => setLeaving(true), 900);
    window.setTimeout(() => setVisible(false), 1500);
  };

  if (!visible) return null;

  return (
    <div ref={boxRef} role="dialog" aria-label="Cookie consent" className={`cookie-box ${leaving ? 'is-leaving' : ''} ${thanks ? 'is-thanks' : ''}`}>
      <span className="cookie-glow" aria-hidden="true" />
      <div className="cookie-main">
        <div className="cookie-icon" aria-hidden="true">
          <span className="cookie-icon-ring" />
          {thanks ? <Check size={24} /> : <Cookie size={24} />}
        </div>
        <p className="cookie-text">
          <strong>{thanks ? 'Thank you!' : 'A quick note about cookies'}</strong>
          {thanks
            ? (thanks === 'all' ? ' Your preference is saved.' : ' Only essential cookies will be used.')
            : (<> We use essential cookies to run this site. If you accept all, we may also use optional analytics cookies (including Google Analytics, when configured). See our <button type="button" className="cookie-link" onClick={() => navigate('/legal/cookies')}>Cookie settings</button> and <button type="button" className="cookie-link" onClick={() => navigate('/legal/privacy')}>Privacy Policy</button>.</>)}
        </p>
      </div>
      {!thanks && (
        <div className="cookie-actions">
          <button type="button" className="cookie-btn cookie-btn-ghost" onClick={() => accept(false)}><ShieldCheck size={15} /> Reject optional</button>
          <button type="button" className="cookie-btn cookie-btn-solid" onClick={() => accept(true)}><Check size={15} /> Accept all</button>
        </div>
      )}
      {thanks && <span className="cookie-thanks-bar" aria-hidden="true" />}
    </div>
  );
}
