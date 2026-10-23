import { Calendar } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const events = [
  { name: 'AVIU Annual Research Conference', when: 'October each year', detail: 'Faculty and postgraduate presentations across education, health, ICT, business and social sciences.' },
  { name: 'Innovation Fair', when: 'September', detail: 'Student projects, prototypes and startup pitches open to the public and partners.' },
  { name: 'Public Health Symposium', when: 'November', detail: 'Focus on East African health challenges with nursing and community partners.' },
];

export function Conferences() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.research}
        eyebrow="Research"
        title={<>Conferences &amp; <em>Events</em></>}
        subtitle="Academic conferences, symposia and innovation events hosted by Avance International University."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'Conferences', path: '/research/conferences' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 16 }}>
          {events.map((e) => (
            <div className="info-card" key={e.name} style={{ padding: 22 }}>
              <Calendar size={22} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 4 }}>{e.name}</strong>
              <span style={{ fontSize: 13, color: 'var(--purple-600)', fontWeight: 600 }}>{e.when}</span>
              <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{e.detail}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: 'var(--ink-soft)' }}>
          Call for papers and registration details are announced on the News and Events pages. PhD pathways are coming soon.
        </p>
        <button type="button" className="btn btn-outline" style={{ marginTop: 12 }} onClick={() => navigate('/events')}>All events</button>
      </section>
    </div>
  );
}
