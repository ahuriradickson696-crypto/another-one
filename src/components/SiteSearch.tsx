import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { searchSite, popularSearches } from '@/lib/searchIndex';

/** Header search: finds pages, programmes, news, events and staff. */
export function SiteSearch({ onClose }: { onClose: () => void }) {
  const { navigate } = useRouter();
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchSite(q), [q]);
  const list = q.trim() ? results : popularSearches;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const go = (path: string) => {
    navigate(path);
    onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(list.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && list[active]) {
      e.preventDefault();
      go(list[active].path);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="search-panel" role="search">
      <div className="search-bar">
        <Search size={16} aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setActive(0); }}
          onKeyDown={onKeyDown}
          placeholder="Search programmes, research, news..."
          aria-label="Search the AVIU website"
          role="combobox"
          aria-expanded="true"
          aria-controls="site-search-results"
          aria-activedescendant={list[active] ? `search-opt-${active}` : undefined}
          autoComplete="off"
        />
        <button type="button" onClick={onClose}>Close</button>
      </div>
      <ul id="site-search-results" className="search-results" role="listbox" aria-label={q.trim() ? 'Search results' : 'Popular searches'}>
        {!q.trim() && <li className="search-results-label" role="presentation">Popular searches</li>}
        {list.map((r, i) => (
          <li
            key={`${r.path}-${r.title}`}
            id={`search-opt-${i}`}
            role="option"
            aria-selected={i === active}
            className={i === active ? 'is-active' : ''}
            onMouseEnter={() => setActive(i)}
            onClick={() => go(r.path)}
          >
            <span className="search-result-title">{r.title}</span>
            <span className="search-result-section">{r.section}</span>
            <ArrowRight size={14} aria-hidden="true" />
          </li>
        ))}
        {q.trim() && results.length === 0 && (
          <li className="search-empty" role="presentation">
            No results for “{q.trim()}”. Try “apply”, “fees”, “nursing” or{' '}
            <a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); }}>contact us</a>.
          </li>
        )}
      </ul>
    </div>
  );
}
