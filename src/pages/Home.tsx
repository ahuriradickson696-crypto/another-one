import { useEffect, useState } from 'react';
import { ArrowRight, Check, Calendar, Clock, MapPin } from 'lucide-react';
import { faculties, testimonials, universityInfo, newsItems, events, partners } from '@/data/university';
import { programmesData } from '@/data/programmes';
import { staffDirectory } from '@/data/staffDirectory';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { MomentsStrip } from '@/components/MomentsStrip';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { LiveClock } from '@/components/LiveClock';
import { useCountUp } from '@/hooks/useCountUp';
import ViceChancellorMessage from '@/components/ViceChancellorMessage';
import ChancellorMessage from '@/components/ChancellorMessage';

const WHITE = '#ffffff';

function AnimatedStatCard({ target, label, sub, delay }: { target: number; label: string; sub: string; delay: number }) {
  const { value, ref } = useCountUp(target, 2000);
  const { navigate } = useRouter();
  return (
    <div
      ref={ref}
      onClick={() => navigate('/staff')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/staff'); }}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #e0d4ee',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(61,26,107,0.12)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)'; }}
    >
      <div style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 800, color: '#3d1a6b', lineHeight: 1, marginBottom: '8px', fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      <div style={{ fontSize: '13px', color: '#2d1454', fontWeight: 700, marginBottom: '2px' }}>{label}</div>
      <div style={{ fontSize: '11px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{sub}</div>
      <div style={{ marginTop: '10px', fontSize: '11px', color: '#3d1a6b', fontWeight: 700, opacity: 0.7 }}>
        View staff â†’
      </div>
    </div>
  );
}


export function Home() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="page-content">
{/* HERO */}
      <section style={{ position: 'relative', color: WHITE, padding: 'clamp(56px, 9vh, 110px) clamp(20px, 8vw, 140px)', minHeight: 'clamp(700px, 90vh, 850px)', flexDirection: 'column', justifyContent: 'center', display: 'flex', alignItems: 'center', isolation: 'isolate', overflow: 'hidden' }}>
        <HeroSlideshow />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: '#c4b5fd' }} />
            <span style={{ color: '#c4b5fd', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>Est. 2016 Â· NCHE-accredited Â· Nabweru, Uganda</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: 20, fontWeight: 500 }}><LiveClock /></div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.1rem, 4.5vw, 3.3rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, margin: '0 0 18px 0' }}>Enhancing <em style={{ color: '#c4b5fd', fontStyle: 'italic' }}>innovations</em></h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', lineHeight: 1.65, maxWidth: 540, margin: '0 0 12px 0' }}>At Avance International University we identify, analyse and focus on each student's strengths, shaping them to thrive in today's competitive world of work.</p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 520, margin: '0 0 32px 0' }}>Bachelor degrees in Education, Business & ICT, Nursing and Social Sciences.<br />January Â· May Â· August intakes.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <button type="button" onClick={() => navigate('/programmes')} style={{ background: '#ffffff', color: '#2d1454', padding: '14px 26px', borderRadius: 8, fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>Find your programme</button>
            <button type="button" onClick={() => openApply()} style={{ background: 'transparent', color: '#ffffff', padding: '14px 26px', borderRadius: 8, fontWeight: 600, border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '0.95rem' }}>How to apply</button>
          </div>
        </div>
      </section>

      {/* WHY AVIU */}
      <section className="features-section section-pad">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Why AVIU</div>
            <h2>An education built on <em>innovation.</em></h2>
          </div>
        </div>
        <div className="features-grid">
          {['Accredited by the National Council for Higher Education (NCHE) â€” unche.or.ug', 'Hands-on, competence-based teaching with field attachments', 'Bachelor programmes across Education, Business & ICT, Nursing and Social Sciences', 'Technology-enhanced learning and e-learning platform', 'Research-oriented training across all programmes', 'Student engagement in start-ups, community and industry projects', 'Three main intakes per year: January, May and August', 'Merit scholarships and support options (details from Admissions)', 'Nabweru campus, Wakiso District â€” accessible from Kampala'].map((item, i) => (
            <div className="feature-item" key={i}><Check size={18} /><span>{item}</span></div>
          ))}
        </div>
      </section>

      {/* EXPLORE PROGRAMMES */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>World-Class Education</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#2d1454', margin: '8px 0 12px', lineHeight: 1.2, fontFamily: "'Playfair Display', serif" }}>Explore our programmes</h2>
              <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>{programmesData.length} NCHE-accredited programmes across all levels â€” from Certificates and Diplomas to Bachelors, Masters and Postgraduate Diplomas.</p>
            </div>
            <a onClick={(e) => { e.preventDefault(); navigate('/programmes'); }} href="/programmes" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3d1a6b', fontWeight: 700, fontSize: '15px', textDecoration: 'none', padding: '12px 20px', borderRadius: '8px', border: '2px solid #3d1a6b', cursor: 'pointer', whiteSpace: 'nowrap' }}>Browse all {programmesData.length} <ArrowRight size={18} /></a>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[{ label: 'Diploma', emoji: '' }, { label: 'Bachelor', emoji: '' }, { label: 'Postgraduate Diploma', emoji: '' }, { label: 'Masters', emoji: '' }, { label: 'Certificate', emoji: '' }, { label: 'HEC', emoji: '' }].map(({ label, emoji }) => {
              const count = programmesData.filter((p) => p.level === label).length;
              if (count === 0) return null;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => navigate('/programmes?level=' + encodeURIComponent(label))}
                  style={{ padding: '10px 16px', borderRadius: '999px', background: '#f0e8fa', color: '#3d1a6b', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#3d1a6b'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f0e8fa'; e.currentTarget.style.color = '#3d1a6b'; }}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {programmesData.slice(0, 6).map((p) => (
              <article key={p.id} style={{ background: '#f9f6fd', borderRadius: '14px', padding: '22px', border: '1px solid #e0d4ee', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#3d1a6b', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>{p.level}</span>
                  <span style={{ background: '#fff', color: '#3d1a6b', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>{p.schoolName}</span>
                </div>
                <h3 style={{ fontSize: '17px', color: '#2d1454', margin: 0, lineHeight: 1.35, fontWeight: 700 }}>{p.name}</h3>
                <p style={{ fontSize: '14px', color: '#5a4b6b', margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{p.description || 'Programme details available on request.'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #e0d4ee' }}>
                  <span style={{ color: '#3d1a6b', fontSize: '13px', fontWeight: 700 }}>{p.duration}</span>
                  <span style={{ color: '#8a7fa0', fontSize: '11px' }}>NCHE Accredited</span>
                </div>
                <button type="button" onClick={() => openApply(p.name)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: '#3d1a6b', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Apply for this programme <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a onClick={(e) => { e.preventDefault(); navigate('/programmes'); }} href="/programmes" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3d1a6b', fontWeight: 700, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>See all {programmesData.length} programmes <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section style={{ background: '#f9f6fd', padding: 'clamp(60px, 8vh, 90px) 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>Our People</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>A University Built by <em>Experts</em></h2>
            <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>From the Chancellor's office to every faculty and department, AVIU is powered by {staffDirectory.length} dedicated professionals working together for our students.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <AnimatedStatCard target={staffDirectory.length} label="Total staff" sub="Academic Â· Admin Â· Support" delay={0} />
            <AnimatedStatCard target={7} label="Departments" sub="Across every faculty" delay={150} />
            <AnimatedStatCard target={staffDirectory.filter(s => s.role.includes('Dean') && s.role !== 'Dean of Students').length} label="Deans & Directors" sub="Leading each faculty" delay={300} />
            <AnimatedStatCard target={staffDirectory.filter(s => s.role.startsWith('HOD') || s.role.includes('Head of')).length} label="Heads of Department" sub="Programme leadership" delay={450} />
          </div>
        </div>
      </section>

      <ChancellorMessage />
      <ViceChancellorMessage />

      {/* TESTIMONIAL */}
      <section className="quote-section" id="campus-life">
        <div className="quote-image">
          <img key={testimonialIndex} src={testimonials[testimonialIndex]?.image || '/images/graduates-laughing.jpg'} alt={testimonials[testimonialIndex]?.name || 'Student'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

      {/* NEWS */}
      <section className="section-pad bg-alt">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Latest news</div>
            <h2>What's happening at <em>AVIU.</em></h2>
          </div>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>All news <ArrowRight size={16} /></a>
        </div>
        <div className="news-grid">
          {latestNews.map((item) => (
            <article className="news-card news-card-clickable" key={item.id} onClick={() => navigate('/news/' + item.id)}>
              <div className="news-meta"><span className="news-category">{item.category}</span><span className="news-date"><Calendar size={12} /> {item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
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
              {p.image && <img src={p.image} alt={p.name} loading="lazy" style={{ display: 'block', maxHeight: '80px', maxWidth: '180px', objectFit: 'contain', margin: '0 auto' }} />}
            </div>
          ))}
        </div>
      </section>

      <MomentsStrip keys={['installationGroup', 'installationCake', 'partnership', 'celebrating', 'camStage', 'dignitaries']} eyebrow="Moments at AVIU" title="Graduation and launch day" />

      {/* FINAL CTA */}
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
