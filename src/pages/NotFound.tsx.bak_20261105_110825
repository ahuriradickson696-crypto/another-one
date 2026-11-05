import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/router/Router';

export function NotFound() {
  const { navigate, path } = useRouter();

  // Tell search engines not to list this address
  useEffect(() => {
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex';
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  const links = [
    { label: 'Programmes', path: '/programs' },
    { label: 'How to apply', path: '/admissions/how-to-apply' },
    { label: 'Fees & payment', path: '/fees' },
    { label: 'News', path: '/news' },
    { label: 'Contact us', path: '/contact' },
  ];

  return (
    <div className="page-content">
      <section className="section-pad not-found">
        <div className="eyebrow"><span className="eyebrow-line" /> Error 404</div>
        <h1>Page <em>not found.</em></h1>
        <p>
          We couldn’t find <code>{path}</code>. It may have moved, or the address may have a typo.
          Try one of these instead, or use the search icon at the top of the page.
        </p>
        <div className="not-found-actions">
          <button type="button" className="button button-primary" onClick={() => navigate('/')}>
            Back to home <ArrowRight size={16} />
          </button>
        </div>
        <ul className="not-found-links">
          {links.map((l) => (
            <li key={l.path}>
              <a href={l.path} onClick={(e) => { e.preventDefault(); navigate(l.path); }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
