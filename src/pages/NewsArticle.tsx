import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Link2, Mail, Share2 } from 'lucide-react';
import { newsItems } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { NotFound } from '@/pages/NotFound';

export function NewsArticle({ id }: { id: string }) {
  const { navigate, path } = useRouter();
  const { openApply } = useApply();
  const item = newsItems.find((n) => n.id === id);
  const [copied, setCopied] = useState(false);

  // Structured data so Google can show the story properly
  useEffect(() => {
    if (!item) return;
    const parsed = new Date(item.date);
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: item.title,
      description: item.excerpt,
      articleSection: item.category,
      ...(isNaN(parsed.getTime()) ? {} : { datePublished: parsed.toISOString().slice(0, 10) }),
      mainEntityOfPage: `https://aviu.ac.ug/news/${item.id}`,
      publisher: { '@type': 'CollegeOrUniversity', name: 'Avance International University', url: 'https://aviu.ac.ug' },
    };
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(ld);
    document.head.appendChild(el);
    return () => el.remove();
  }, [item]);

  if (!item) return <NotFound />;

  const url = typeof window !== 'undefined' ? window.location.href : `https://aviu.ac.ug/news/${item.id}`;
  const text = `${item.title} — Avance International University`;
  const related = [
    ...newsItems.filter((n) => n.id !== item.id && n.category === item.category),
    ...newsItems.filter((n) => n.id !== item.id && n.category !== item.category),
  ].slice(0, 3);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.news}
        eyebrow={`News · ${item.category}`}
        title={item.title}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'News', path: '/news' },
          { label: 'Story', path },
        ]}
      />

      <section className="section-pad">
        <article className="news-article">
          <div className="news-meta">
            <span className="news-category">{item.category}</span>
            <span className="news-date"><Calendar size={12} /> {item.date}</span>
          </div>
          <p className="news-article-lead">{item.excerpt}</p>
          <p className="news-article-body">{item.fullContent}</p>

          <div className="news-share" aria-label="Share this story">
            <span><Share2 size={15} /> Share</span>
            <a href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">X</a>
            <a href={`mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(`${text}\n${url}`)}`}><Mail size={14} /> Email</a>
            <button type="button" onClick={copy}><Link2 size={14} /> {copied ? 'Link copied' : 'Copy link'}</button>
          </div>

          <div className="news-article-actions">
            <button type="button" className="button button-primary" onClick={() => openApply()}>
              Apply to AVIU <ArrowRight size={16} />
            </button>
            <a className="text-link" href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>
              <ArrowLeft size={15} /> All news
            </a>
          </div>
        </article>
      </section>

      {related.length > 0 && (
        <section className="section-pad section-alt">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Keep reading</div>
              <h2>More from <em>AVIU.</em></h2>
            </div>
          </div>
          <div className="news-grid">
            {related.map((r) => (
              <article className="news-card news-card-clickable" key={r.id} onClick={() => navigate(`/news/${r.id}`)}>
                <div className="news-meta">
                  <span className="news-category">{r.category}</span>
                  <span className="news-date"><Calendar size={12} /> {r.date}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.excerpt}</p>
                <a className="text-link" href={`/news/${r.id}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/news/${r.id}`); }}>
                  Read more <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
