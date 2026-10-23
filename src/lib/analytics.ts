/**
 * Google Analytics 4, loaded only when:
 *   1. VITE_GA_MEASUREMENT_ID is set (for example G-XXXXXXXXXX), and
 *   2. the visitor accepted all cookies in the cookie banner.
 * With no ID set this does nothing at all.
 */
const ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const CONSENT_KEY = 'aviu-cookie-consent';
let loaded = false;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function loadAnalytics() {
  if (loaded || !ID) return;
  try {
    if (localStorage.getItem(CONSENT_KEY) !== 'all') return;
  } catch {
    return;
  }
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', ID, { send_page_view: false, anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`;
  document.head.appendChild(s);
  trackPageview(window.location.pathname);
}

export function trackPageview(path: string) {
  if (!loaded || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path, page_title: document.title, page_location: window.location.href });
}
