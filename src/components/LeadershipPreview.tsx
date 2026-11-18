import React from 'react';

const PURPLE = '#3D1A6B';
const PURPLE_LIGHT = '#5B2A9C';
const PURPLE_SOFT = '#f3eefb';
const TEXT = '#1d1d1f';
const TEXT_MUTED = '#6e6e73';
const BORDER = 'rgba(0,0,0,0.08)';

const featuredLeaders = [
  {
    id: 'ariyo',
    name: 'Dr. Ariyo K. Gracious',
    title: 'Chairman, Board of Directors',
    image: '/images/board-chairman.jpg',
    credentials: 'PhD (CUN), MBA (Mak), BCom (Mak), DES (KYU)',
    blurb: 'A distinguished educationist, researcher and entrepreneur leading the University Board with over two decades of higher education experience.',
  },
  {
    id: 'julius',
    name: 'Dr. Julius Arinaitwe',
    title: 'Chairperson, University Council',
    image: '/images/council-chairperson.jpg',
    credentials: 'PhD (KIU), MA (KAB), PGDE (UCU), BCom (MAK), CPA-K',
    blurb: 'Certified accountant and management scholar providing strategic oversight of academic, administrative and financial affairs.',
  },
  {
    id: 'betty',
    name: 'Dr. Betty Mategeko',
    title: 'Director of Quality Assurance',
    image: '/images/betty-matijiko.jpg',
    credentials: 'PhD (MUST), MA Dev. Studies (KAB), M.Sc. Sociology',
    blurb: 'Interdisciplinary scholar leading AVIU\'s quality assurance framework, ensuring standards meet national and international benchmarks.',
  },
];

export function LeadershipPreview() {
  return (
    <section style={{ padding: '96px 24px', backgroundColor: '#fafafa', borderTop: '1px solid ' + BORDER, borderBottom: '1px solid ' + BORDER }}>
      <style>{`
        .lp-card { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.35s; cursor: pointer; text-decoration: none; display: block; color: inherit; }
        .lp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(61,26,107,0.15); border-color: rgba(61,26,107,0.3); }
        .lp-card:hover .lp-img { transform: scale(1.06); }
        .lp-img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .lp-cta { transition: gap 0.2s; }
        .lp-card:hover .lp-cta { gap: 10px; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', background: PURPLE_SOFT, color: PURPLE, border: '1px solid rgba(61,26,107,0.15)', marginBottom: '16px' }}>
            University Leadership
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '0 0 16px 0', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: TEXT }}>
            Guided by Visionary Leadership
          </h2>
          <p style={{ fontSize: '18px', color: TEXT_MUTED, maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Meet the leaders who shape AVIU&apos;s academic excellence, governance and quality standards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {featuredLeaders.map((leader) => (
            <a key={leader.id} href="/about/leadership" className="lp-card" style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid ' + BORDER, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '100%', aspectRatio: '4 / 5', overflow: 'hidden', backgroundColor: PURPLE_SOFT }}>
                <img src={leader.image} alt={leader.name} className="lp-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
              <div style={{ padding: '24px 22px 26px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: PURPLE, marginBottom: '8px' }}>{leader.title}</div>
                <h3 style={{ fontSize: '20px', margin: '0 0 8px 0', fontWeight: 700, color: TEXT, lineHeight: 1.3 }}>{leader.name}</h3>
                <p style={{ fontSize: '12px', color: TEXT_MUTED, margin: '0 0 12px 0', fontWeight: 600, lineHeight: 1.5 }}>{leader.credentials}</p>
                <p style={{ fontSize: '14px', color: '#3a3a3c', margin: '0 0 16px 0', lineHeight: 1.6 }}>{leader.blurb}</p>
                <div className="lp-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  View Profile →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/about/leadership" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', backgroundColor: PURPLE, color: '#fff', fontSize: '14px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.3px' }}>
            View All Leadership →
          </a>
        </div>
      </div>
    </section>
  );
}