import { MapPin, Navigation, Building2, Phone, Clock } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';

const zones = [
  { name: 'Teaching blocks', detail: 'Lecture rooms and seminar spaces for Education, Business, ICT and Social Sciences modules.' },
  { name: 'Health & simulation', detail: 'Nursing and related practical training areas including simulation equipment where available.' },
  { name: 'Library & ICT', detail: 'Library and Information Resources plus student computing access; e-library available online after enrolment.' },
  { name: 'Administration', detail: 'Academic Registrar, Admissions, Bursar, University Secretary and related offices — start at reception.' },
  { name: 'Student services', detail: 'Guild, student affairs and notice boards for timetables and circulars.' },
  { name: 'Outdoor & events', detail: 'Spaces used for Cultural Day, sports, exhibitions and open-day gatherings.' },
];

export function CampusMap() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Visit"
        title={<>Campus <em>map</em></>}
        subtitle="Orient yourself at Nabweru — teaching spaces, administration and student services."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Map', path: '/map' }]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, marginBottom: 36, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>How to find AVIU</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 14 }}>
              <MapPin size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              {universityInfo.address}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 12 }}>
              Approach via the Nansana–Hoima Road corridor and follow local signage toward Nabweru. For turn-by-turn navigation, enter the campus address in Google Maps, Apple Maps or another preferred app.
            </p>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 16 }}>
              <li><Phone size={14} style={{ display: 'inline' }} /> {universityInfo.phone} / {universityInfo.phoneAlt}</li>
              <li><Clock size={14} style={{ display: 'inline' }} /> Book visits on weekdays where possible</li>
              <li><Building2 size={14} style={{ display: 'inline' }} /> Report to reception on first arrival</li>
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/visitors')}>Visitor guide</button>
              <button type="button" className="btn btn-outline" onClick={() => navigate('/open-days')}>Open days</button>
              <button type="button" className="btn btn-outline" onClick={() => navigate('/access-guide')}>Access guide</button>
            </div>
          </div>
          <div>
            <div className="map-embed" style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', marginBottom: 12 }}>
              <iframe
                title="AVIU Nabweru area map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=32.50%2C0.32%2C32.60%2C0.42&amp;layer=mapnik"
                style={{ border: 0, width: '100%', minHeight: 320, display: 'block' }}
                loading="lazy"
              />
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
              <Navigation size={12} style={{ display: 'inline' }} /> Map data © OpenStreetMap contributors ·{' '}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Avance International University, Nabweru, Wakiso, Uganda')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 700 }}
              >
                Get directions
              </a>
            </p>
          </div>
        </div>

        <img src="/images/campus-aerial.jpg" alt="Aerial view of campus area" className="media-img" style={{ marginBottom: 36 }} />

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Directory</div>
            <h2>Campus <em>zones.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 14, marginBottom: 28 }}>
          {zones.map((z) => (
            <div className="info-card" key={z.name} style={{ padding: 18 }}>
              <strong style={{ display: 'block', marginBottom: 6 }}>{z.name}</strong>
              <p className="body-small">{z.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16 }}>
          <img src="/images/campus-building.jpg" alt="Campus building" className="media-img" />
          <img src="/images/university-gate.jpg" alt="Campus gate" className="media-img" />
        </div>
      </section>
    </div>
  );
}
