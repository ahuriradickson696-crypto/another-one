import { useEffect, useState } from 'react';
import { Home, GraduationCap, Search, Users, MessageCircle } from 'lucide-react';
import { useRouter } from '@/router/Router';

const tabs = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: GraduationCap, label: 'Programs', path: '/study' },
  { icon: Search, label: 'Search', path: '/gallery' },
  { icon: Users, label: 'Student Life', path: '/student-life' },
  { icon: MessageCircle, label: 'Contact', path: '/contact' },
];

export function MobileTabBar() {
  const { navigate, pathname } = useRouter();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (y < 80) {
          setHidden(false);
        } else if (delta > 8) {
          setHidden(true);
        } else if (delta < -8) {
          setHidden(false);
        }
        setLastY(y);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className={`mobile-tab-bar ${hidden ? 'is-hidden' : ''}`}
      aria-label="Quick navigation"
    >
      {tabs.map((tab) => {
        const active =
          pathname === tab.path ||
          (tab.path !== '/' && pathname?.startsWith(tab.path));
        const Icon = tab.icon;
        return (
          <button
            key={tab.path}
            type="button"
            className={`mobile-tab ${active ? 'is-active' : ''}`}
            onClick={() => navigate(tab.path)}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}