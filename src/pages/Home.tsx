import { useEffect, useState } from 'react';
import { ArrowRight, Check, Calendar, Clock, MapPin } from 'lucide-react';
import { faculties, homeStats, testimonials, universityInfo, newsItems, events, partners } from '@/data/university';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { MomentsStrip } from '@/components/MomentsStrip';
import { CountUp } from '@/components/CountUp';
import { FloatingParticles } from '@/components/FloatingParticles';
import { SplitWords } from '@/components/SplitWords';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { t, defaultLanguage, type LanguageCode } from '@/lib/i18n';

const PURPLE_DARK = '#2d1454';
const PURPLE_SOFT = '#c4b5fd';
const WHITE = '#ffffff';

export function Home() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lang, setLang] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') return defaultLanguage;
    try { return (localStorage.getItem('aviu-lang') as LanguageCode) || defaultLanguage; }
    catch { return defaultLanguage; }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('aviu-lang', lang); } catch { /* ignore */ }
  }, [lang]);

  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="page-content">
      {/* HERO */}
      <section style={{ position: 'relative', color: WHITE, padding: 'clamp(56px, 9vh, 110px) clamp(20px, 8vw, 140px)', minHeight: 'clamp(700px, 90vh, 850px)', flexDirection: 'column', justifyContent: 'center', display: 'flex', alignItems: 'center', isolation: 'isolate', overflow: 'hidden' }}>
        <HeroSlideshow />
        <FloatingParticles count={14} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', /* Aligns everything to the left */
          textAlign: 'left',
          marginRight: 'auto',      /* Pushes the block to the left side */
          marginLeft: 0,
          paddingRight: '20px',
        }}>
          <div style={{ marginBottom: 18, alignSelf: 'flex-start' }}>
            <LanguageSwitcher current={lang} onChange={setLang} />
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: PURPLE_SOFT, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
            <span style={{ width: 28, height: 1, background: PURPLE_SOFT, display: 'inline-block' }} />
            Est. 2016 · NCHE-accredited · Nabweru, Uganda
          </div>
          <h1 className="hero-h1" style={{ color: WHITE, textAlign: 'left', margin: '20px 0 18px', fontSize: 'clamp(2rem, 4.2vw, 3.1rem)', lineHeight: 1.05, letterSpacing: '-0.03em', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}>
            <SplitWords text={t('hero.tagline', lang).split('.')[0]} start={0.1} /><br />
            <em style={{ color: PURPLE_SOFT, fontStyle: 'italic' }}>
              <SplitWords text={t('hero.tagline', lang).split('.')[1] || 'innovations.'} start={0.3} />
            </em>
          </h1>
          <p style={{ color: WHITE, textAlign: 'left', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, margin: 0 }}>{t('hero.subtitle', lang)}</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: 560, marginTop: 12 }}>Bachelor degrees in Education, Business &amp; ICT, Nursing, and Social Sciences. January, May and August intakes.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 28, justifyContent: 'flex-start' }}>
            <button type="button" onClick={() => navigate('/programs')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 22px', fontSize: 13, fontWeight: 700, background: WHITE, color: PURPLE_DARK, border: '1px solid ' + WHITE, cursor: 'pointer' }}>
              {t('hero.findProgramme', lang)} <ArrowRight size={17} />
            </button>
            <button type="button" onClick={() => navigate('/admissions/how-to-apply')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 22px', fontSize: 13, fontWeight: 700, background: 'transparent', color: WHITE, border: '1px solid ' + WHITE, cursor: 'pointer' }}>
              How to apply
            </button>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.85)', marginTop: 24, fontSize: 14 }}>{t('hero.intakes', lang)}</div>
        </div>
      </section>

      {/* STATS */}
      

      {/* FACULTIES */}
      {/* STATS SECTION WITH IMAGE BACKGROUND */}
      

      <section className="schools-section section-pad" id="study">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Explore your future</div>
            <h2>Find your <em>direction.</em></h2>
          </div>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/programs'); }}>View all programmes <ArrowRight size={16} /></a>
        </div>
        <div className="school-grid">
          {faculties.map(({ id, name, icon: Icon, programs }, index) => (
            <a className="school-card" key={id} onClick={(e) => { e.preventDefault(); navigate('/programs'); }}>
              <span className="school-index">0{index + 1}</span>
              <Icon size={24} strokeWidth={1.5} />
              <strong>{name}</strong>
              <span className="school-count">{programs.length} programmes</span>
              <ArrowRight className="school-arrow" size={19} />
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="quote-section" id="campus-life">
        <div className="quote-image"><img src="/images/campus-building.jpg" alt="AVIU students on campus" /></div>
        <div className="quote-copy">
          <BackgroundCarousel images={pageImages.home} overlay={0.9} />
          <span className="quote-mark">&quot;</span>
          <blockquote key={'q' + testimonialIndex} className="quote-anim">{testimonials[testimonialIndex].quote}</blockquote>
          <div className="quote-person quote-anim" key={'p' + testimonialIndex}>
            <span className="person-initials">{testimonials[testimonialIndex].initials}</span>
            <div><strong>{testimonials[testimonialIndex].name}</strong><small>{testimonials[testimonialIndex].program}</small></div>
          </div>
          <div className="quote-controls">
            <span>0{testimonialIndex + 1} <i /> 0{testimonials.length}</span>
            <div>
              <button aria-label="Previous" onClick={() => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}><ArrowRight size={17} className="arrow-back" /></button>
              <button aria-label="Next" onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}><ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section-pad">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Why AVIU</div>
            <h2>An education built on <em>innovation.</em></h2>
          </div>
        </div>
        <div className="features-grid">
          {universityInfo.features.map((feature) => (
            <div className="feature-item" key={feature}><span className="feature-check"><Check size={16} /></span><span>{feature}</span></div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Latest news</div>
            <h2>What&apos;s happening at <em>AVIU.</em></h2>
          </div>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>All news <ArrowRight size={16} /></a>
        </div>
        <div className="news-grid">
          {latestNews.map((item) => (
            <article className="news-card news-card-clickable" key={item.id} onClick={() => navigate('/news/' + item.id)}>
              <div className="news-meta"><span className="news-category">{item.category}</span><span className="news-date"><Calendar size={12} /> {item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a className="text-link" href={'/news/' + item.id} onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/news/' + item.id); }}>Read more <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Upcoming events</div>
            <h2>Mark your <em>calendar.</em></h2>
          </div>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/events'); }}>All events <ArrowRight size={16} /></a>
        </div>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.id} onClick={() => navigate('/events')}>
              <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
              <div className="event-body">
                <span className="news-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta"><span><Clock size={13} /> {event.time}</span><span><MapPin size={13} /> {event.location}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-pad alt-bg">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Our partners</div>
            <h2>Together we <em>do more.</em></h2>
          </div>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.name}><strong>{partner.name}</strong><span>{partner.type}</span></div>
          ))}
        </div>
      </section>

      {/* MOMENTS — now at the end, just before the final CTA */}
      <MomentsStrip keys={['partnership','celebrating','camStage','dignitaries']} eyebrow="Moments at AVIU" title="Graduation and launch day" />

      {/* CTA */}
      <section className="cta-section">
        <BackgroundCarousel images={pageImages.home} overlay={0.9} />
        <FloatingParticles count={12} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Your next chapter starts here</div>
          <h2>Make your move.</h2>
          <p>Ready to find out what you can become? Our admissions team is here to help you take the first step.</p>
        </div>
        <button className="button button-light button-pulse" onClick={openApply}>Start your application <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}