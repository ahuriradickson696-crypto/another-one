import { Mail, Phone, MapPin } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';

const columns = [
  {
    title: 'Study & Admissions',
    links: [
      { label: 'All programmes', path: '/programs' },
      { label: 'Undergraduate', path: '/prospective/undergraduates' },
      { label: 'Postgraduate', path: '/prospective/graduates' },
      { label: 'How to apply', path: '/admissions/how-to-apply' },
      { label: 'Fees & funding', path: '/fees-and-funding' },
      { label: 'Open days', path: '/open-days' },
    ],
  },
  {
    title: 'About AVIU',
    links: [
      { label: 'Our story', path: '/about' },
      { label: 'Leadership', path: '/about/leadership' },
      { label: 'Campus', path: '/about/campus' },
      { label: 'Careers', path: '/about/careers' },
      { label: 'Alumni', path: '/alumni' },
      { label: 'Strategic plan', path: '/strategic-plan' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Library', path: '/libraries' },
      { label: 'Research', path: '/research' },
      { label: 'News', path: '/news' },
      { label: 'Events', path: '/events' },
      { label: 'Downloads', path: '/downloads' },
      { label: 'Contact us', path: '/contact' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Student Portal', path: 'https://elearning.aviu.ac.ug/', external: true },
      { label: 'Staff Portal', path: 'https://staff.aviu.ac.ug/', external: true },
      { label: 'E-Library', path: 'https://library.aviu.ac.ug/', external: true },
      { label: 'Campus Map', path: '/map' },
      { label: 'Accessibility', path: '/legal/accessibility' },
      { label: 'Report an issue', path: '/contact' },
    ],
  },
];

export function Footer() {
  const { navigate } = useRouter();

  const go = (path: string, external?: boolean) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (external) window.open(path, '_blank', 'noopener,noreferrer');
    else navigate(path);
  };

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #e0d4ee', padding: '60px 0 20px', color: '#2d1454' }}>
      <div className="footer-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* TOP SECTION: Logo, Contact & Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          
          {/* Brand & Contact */}
          <div>
            <a href="/" onClick={go('/')} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <img src="/images/aviu-logo.png" alt="AVIU" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '18px', letterSpacing: '.18em', color: '#2d1454', lineHeight: 1 }}>AVIU</strong>
                <small style={{ fontSize: '0.6rem', letterSpacing: '.12em', fontWeight: 700, color: '#5e3399' }}>INTERNATIONAL UNIVERSITY</small>
              </div>
            </a>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5a4a6e', marginBottom: '20px' }}>
              NCHE-accredited private university. Intakes: January, May & August.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#5a4a6e' }}>
              <span style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><MapPin size={16} style={{ marginTop: '2px', color: '#4c2585' }} /> {universityInfo.address}</span>
              <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Phone size={16} style={{ color: '#4c2585' }} /> {universityInfo.phone}</span>
              <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Mail size={16} style={{ color: '#4c2585' }} /> {universityInfo.email}</span>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px', color: '#2d1454' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a 
                      href={l.path} 
                      onClick={go(l.path, l.external)}
                      style={{ fontSize: '13px', color: '#5a4a6e', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#4c2585'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#5a4a6e'}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div style={{ borderTop: '1px solid #e0d4ee', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '12px', color: '#5a4a6e' }}>
          <span>© 2026 Avance International University (AVIU)</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/legal/privacy" onClick={go('/legal/privacy')} style={{ color: '#5a4a6e', textDecoration: 'none' }}>Privacy</a>
            <a href="/legal/cookies" onClick={go('/legal/cookies')} style={{ color: '#5a4a6e', textDecoration: 'none' }}>Cookies</a>
            <a href="/legal/accessibility" onClick={go('/legal/accessibility')} style={{ color: '#5a4a6e', textDecoration: 'none' }}>Accessibility</a>
            <a href="/terms" onClick={go('/terms')} style={{ color: '#5a4a6e', textDecoration: 'none' }}>Terms</a>
          </div>
          <span>NCHE Accredited · <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: '#4c2585', textDecoration: 'none' }}>unche.or.ug</a></span>
        </div>

      </div>
    </footer>
  );
}