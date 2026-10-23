import { useEffect, useState } from 'react';
import { Home, GraduationCap, MessageCircle, Phone } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';

const WA = `https://wa.me/256700670691?text=${encodeURIComponent("Hello Avance International University, I'd like to know more about your programmes.")}`;

/**
 * App-style bottom navigation for phones. It replaces the four floating buttons that crowded the
 * screen on small devices (CSS hides those at ≤900px). Hidden while a text field is focused so the
 * on-screen keyboard never has a bar sitting on top of it.
 */
export function MobileTabBar() {
  const { path, navigate } = useRouter();
  const { openApply } = useApply();
  const [typing, setTyping] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const on = (e: FocusEvent) => { if ((e.target as HTMLElement)?.matches?.('input, textarea, select')) setTyping(true); };
    const off = () => setTyping(false);
    const onScroll = () => setShowTop(window.scrollY > 900);
    document.addEventListener('focusin', on);
    document.addEventListener('focusout', off);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('focusin', on);
      document.removeEventListener('focusout', off);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const buzz = () => { try { navigator.vibrate?.(8); } catch { /* not supported */ } };
  const active = path === '/' ? 0 : path.startsWith('/programs') || path.startsWith('/study') ? 1 : -1;

  return (
    <nav className={`tabbar ${typing ? 'is-hidden' : ''}`} aria-label="Quick navigation">
      <span className="tabbar-indicator" style={{ ['--i' as string]: Math.max(active, 0), opacity: active < 0 ? 0 : 1 }} />
      <button type="button" className={`tab ${active === 0 ? 'is-active' : ''}`} onClick={() => { buzz(); if (path === '/' && showTop) window.scrollTo({ top: 0, behavior: 'smooth' }); else navigate('/'); }}>
        <Home size={21} /><span>Home</span>
      </button>
      <button type="button" className={`tab ${active === 1 ? 'is-active' : ''}`} onClick={() => { buzz(); navigate('/programs'); }}>
        <GraduationCap size={21} /><span>Programmes</span>
      </button>
      <button type="button" className="tab tab-apply" onClick={() => { buzz(); openApply(); }} aria-label="Apply now">
        <span className="tab-apply-orb" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#ffffff',
          marginTop: '-22px',
          border: '3px solid #4c2585',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}>
          <img 
            src="/images/aviu-logo.png" 
            alt="AVIU Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} 
          />
        </span>
        <span>Apply</span>
      </button>
      <button type="button" className="tab" onClick={() => { buzz(); window.dispatchEvent(new CustomEvent('aviu:open-chat')); }}>
        <MessageCircle size={21} /><span>Ask AVIU</span>
      </button>
      <a className="tab" href={WA} target="_blank" rel="noopener noreferrer" onClick={buzz}>
        <Phone size={21} /><span>WhatsApp</span>
      </a>
    </nav>
  );
}
