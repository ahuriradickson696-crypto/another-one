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

  return (
    <nav className="mobile-tab-bar" aria-label="Quick navigation">
      {tabs.map((tab) => {
        const active = pathname === tab.path || (tab.path !== '/' && pathname?.startsWith(tab.path));
        const Icon = tab.icon;
        return (
          <button
            key={tab.path}
            type="button"
            className={`mobile-tab ${active ? 'is-active' : ''}`}
            onClick={() => navigate(tab.path)}
          >
            <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
