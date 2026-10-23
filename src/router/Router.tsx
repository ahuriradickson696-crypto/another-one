import { loadAnalytics, trackPageview } from '@/lib/analytics';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

function normalise(p: string): string {
  const clean = p.split('?')[0].split('#')[0] || '/';
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
}

function readPath(): string {
  if (typeof window === 'undefined') return '/';
  // Old bookmarks like /#/study are upgraded to /study
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    const legacy = normalise(hash.slice(1));
    window.history.replaceState(null, '', legacy);
    return legacy;
  }
  return normalise(window.location.pathname);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onPop = () => {
      setPath(readPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Keep the browser tab title, description and canonical URL in step with the page
  useEffect(() => {
    let tracked = false;
    const SITE = 'AVIU';
    const ORIGIN = 'https://aviu.ac.ug';
    const home = 'Avance International University (AVIU) — NCHE Accredited | Uganda';
    const setMeta = (sel: string, attr: string, val: string) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    const apply = () => {
      const h1 = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim();
      const title = path === '/' || !h1 ? home : `${h1} | ${SITE}`;
      document.title = title;
      const desc = document.querySelector('.page-hero-text')?.textContent?.replace(/\s+/g, ' ').trim();
      if (path !== '/' && desc) setMeta('meta[name="description"]', 'content', desc.slice(0, 200));
      const url = ORIGIN + (path === '/' ? '/' : path);
      setMeta('link[rel="canonical"]', 'href', url);
      setMeta('meta[property="og:url"]', 'content', url);
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
      const ready = Boolean(h1) || path === '/';
      if (ready && !tracked) {
        tracked = true;
        trackPageview(path);
      }
      return ready;
    };
    // pages load lazily, so retry briefly until the heading exists
    loadAnalytics();
    const timers = [0, 150, 400, 900, 1800].map((ms) => window.setTimeout(apply, ms));
    return () => timers.forEach(window.clearTimeout);
  }, [path]);

  const navigate = (to: string) => {
    const next = normalise(to.startsWith('/') ? to : `/${to}`);
    if (next !== window.location.pathname) window.history.pushState(null, '', next);
    setPath(next);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRouter() {
  return useContext(RouterContext);
}
