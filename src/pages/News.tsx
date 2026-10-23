import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsItems } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { MomentsStrip } from '@/components/MomentsStrip';

export function News() {
  const { navigate } = useRouter();
  const categories = ['All', ...Array.from(new Set(newsItems.map((n) => n.category)))];
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.news}
        eyebrow="News & stories"
        title={<>What's happening at <em>AVIU</em></>}
        subtitle="Stay up to date with the latest announcements, events, and stories from across our campus. From research breakthroughs to student achievements, there is always something happening at Avance International University."
      />

      <MomentsStrip keys={['partnership','camStage','camRibbon','celebrating']} eyebrow="In pictures" title="Recent highlights" />

      <section className="section-pad">
        <div className="news-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? 'chip-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="news-grid">
          {filtered.map((item) => (
            <article className="news-card news-card-clickable" key={item.id} onClick={() => navigate(`/news/${item.id}`)}>
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">
                  <Calendar size={12} /> {item.date}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a className="text-link" href={`/news/${item.id}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/news/${item.id}`); }}>
                Read more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.news} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Stay informed
          </div>
          <h2>Never miss a story.</h2>
          <p>Check back regularly for the latest updates, or get in touch and we will keep you informed.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>
          Get in touch <ArrowRight size={17} />
        </button>
      </section>

    </div>
  );
}
