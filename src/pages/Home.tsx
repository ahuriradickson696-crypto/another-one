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
import { CatalogImage } from '@/components/CatalogImage';
import { LiveClock } from '@/components/LiveClock';
import ViceChancellorMessage from "@/components/ViceChancellorMessage";
import ChancellorMessage from "@/components/ChancellorMessage";

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
        <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          
          {/* Top line */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#c4b5fd" }}></span>
            <span style={{ color: "#c4b5fd", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
              Est. 2016  Â·  NCHE-accredited  Â·  Nabweru, Uganda
            </span>
          </div>

          {/* Live date & time */}
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", marginBottom: 20, fontWeight: 500, letterSpacing: "0.02em" }}>
            <LiveClock />
          </div>

          {/* Main headline */}
          <h1 style={{ color: "#ffffff", fontSize: "clamp(2.1rem, 4.5vw, 3.3rem)", lineHeight: 1.1, letterSpacing: "-0.03em", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, margin: "0 0 18px 0" }}>
            Enhancing <em style={{ color: "#c4b5fd", fontStyle: "italic" }}>innovations</em>
          </h1>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 540, margin: "0 0 12px 0" }}>
            At Avance International University we identify, analyse and focus on each student's strengths, shaping them to thrive in today's competitive world of work.
          </p>

          {/* Extra line */}
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 520, margin: "0 0 32px 0" }}>
            Bachelor degrees in Education, Business & ICT, Nursing and Social Sciences.<br />
            January Â· May Â· August intakes.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <button type="button" onClick={() => navigate("/study")} style={{ background: "#ffffff", color: "#2d1454", padding: "14px 26px", borderRadius: 8, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "0.95rem" }}>
              Find your programme ?
            </button>
            <button type="button" onClick={() => openApply()} style={{ background: "transparent", color: "#ffffff", padding: "14px 26px", borderRadius: 8, fontWeight: 600, border: "2px solid rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "0.95rem" }}>
              How to apply
            </button>
          </div>
        </div>
      </section>

      <ChancellorMessage />

      <ViceChancellorMessage />


      {/* PROGRAMMES */}
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Explore your future</div>
            <h2>Find your <em>direction.</em></h2>
          </div>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/study'); }}>View all programmes <ArrowRight size={16} /></a>
        </div>
        <div className="school-grid">
          {faculties.map(({ id, name, icon: Icon, programs }, index) => (
            <a className="school-card" key={id} onClick={(e) => { e.preventDefault(); navigate('/study'); }}>
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
        <div className="quote-image">
          <img 
            key={testimonialIndex}
            src={testimonials[testimonialIndex]?.image || '/images/graduates-laughing.jpg'} 
            alt={testimonials[testimonialIndex]?.name || 'Student'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="quote-copy">
          <BackgroundCarousel images={pageImages.home} overlay={0.9} />
          <span className="quote-mark">&quot;</span>
          <blockquote key={'q' + testimonialIndex} className="quote-anim">{testimonials[testimonialIndex]?.quote}</blockquote>
          <div className="quote-person quote-anim" key={'p' + testimonialIndex}>
            <span className="person-initials">{testimonials[testimonialIndex]?.initials}</span>
            <div><strong>{testimonials[testimonialIndex]?.name}</strong><small>{testimonials[testimonialIndex]?.program}</small></div>
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
          {[
            'Accredited by the National Council for Higher Education (NCHE) â€” unche.or.ug',
            'Hands-on, competence-based teaching with field attachments',
            'Bachelor programmes across Education, Business & ICT, Nursing and Social Sciences',
            'Technology-enhanced learning and e-learning platform',
            'Research-oriented training across all programmes',
            'Student engagement in start-ups, community and industry projects',
            'Three main intakes per year: January, May and August',
            'Merit scholarships and support options (details from Admissions)',
            'Nabweru campus, Wakiso District â€” accessible from Kampala',
          ].map((item, i) => (
            <div className="feature-item" key={i}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="section-pad bg-alt">
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
            <article className="event-card" key={event.id}>
              <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
              <div className="event-body">
                <span className="event-type">{event.type}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta"><span><Clock size={13} /> {event.time}</span><span><MapPin size={13} /> {event.location}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-pad bg-alt">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Our partners</div>
            <h2>Together we do <em>more.</em></h2>
          </div>
        </div>
        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner-card" key={p.name} title={p.name}>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  style={{ display: "block", maxHeight: "80px", maxWidth: "180px", width: "auto", height: "auto", objectFit: "contain", margin: "0 auto" }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MOMENTS */}
      <MomentsStrip keys={["installationGroup","installationCake","partnership","celebrating","camStage","dignitaries"]} eyebrow="Moments at AVIU" title="Graduation and launch day" />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> Your next chapter starts here</div>
          <h2>Make your <em>move.</em></h2>
          <p>Ready to find out what you can become? Our admissions team is here to help you take the first step.</p>
          <button type="button" className="btn-primary" onClick={() => openApply()}>Start your application <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  );
}





