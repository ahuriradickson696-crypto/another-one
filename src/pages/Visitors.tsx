import { MapPin, Clock, Car, Phone, Calendar, Camera, BookOpen, Shield, Users } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';

export function Visitors() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Visitors"
        title={<>Visit <em>AVIU</em></>}
        subtitle="Plan a trip to Nabweru campus — open days, meetings, partnerships and community guests."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Visitors', path: '/visitors' }]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <p className="body-text">
              Avance International University welcomes prospective students, families, school groups, researchers and partners. Booking ahead ensures you meet the right office — Admissions, a faculty, or the University Secretary.
            </p>
            <p className="body-text">
              <strong>Address:</strong> {universityInfo.address}
            </p>
          </div>
          <img src="/images/university-gate.jpg" alt="University campus entrance" className="media-img" />
        </div>

        <div className="grid-3" style={{ gap: 16, marginBottom: 36 }}>
          {[
            { icon: MapPin, title: 'Location', text: 'Nabweru, Wakiso District — off Nansana–Hoima Road. See Campus Map for orientation.' },
            { icon: Phone, title: 'Contact before you travel', text: `${universityInfo.phone} · ${universityInfo.phoneAlt} · ${universityInfo.email}` },
            { icon: Clock, title: 'Office hours', text: 'Administration generally operates on weekdays. Confirm appointments for Deans or directors.' },
            { icon: Car, title: 'Arrival', text: 'Allow time for local traffic. Ask reception for parking guidance on arrival.' },
            { icon: Calendar, title: 'Best days to visit', text: 'Open days and booked campus tours; avoid major examination weeks if you need staff time.' },
            { icon: Shield, title: 'Safety', text: 'Sign in at reception. Follow campus safety guidance and staff instructions during drills or events.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 18 }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p className="body-small">{x.text}</p>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          <img src="/images/campus-building.jpg" alt="Campus buildings" className="media-img" />
          <img src="/images/campus-aerial.jpg" alt="Campus aerial" className="media-img" />
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Reasons to visit</div>
            <h2>What brings people to <em>campus.</em></h2>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 14, marginBottom: 28 }}>
          {[
            { icon: BookOpen, title: 'Admissions & open days', text: 'Programme talks, facility tours and application advice for January, May and August intakes.', path: '/open-days' },
            { icon: Camera, title: 'Events & ceremonies', text: 'Graduations, conferences, Cultural Day and public lectures listed under Events.', path: '/events' },
            { icon: Users, title: 'Partnerships', text: 'MoUs, school outreach and industry meetings via Offices / Business pages.', path: '/business' },
            { icon: MapPin, title: 'Maps & access', text: 'Campus map and access guide for navigation and accessibility planning.', path: '/map' },
          ].map((x) => (
            <button key={x.title} type="button" className="info-card" style={{ padding: 18, textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(x.path)}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p className="body-small">{x.text}</p>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/open-days')}>Open days</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/map')}>Campus map</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/campus')}>Campus information</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact')}>Contact us</button>
        </div>
      </section>
    </div>
  );
}
