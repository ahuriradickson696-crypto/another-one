import { Lightbulb, Rocket, Cpu, Users } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function InnovationHub() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentLife || pageImages.home}
        eyebrow="Student Life"
        title={<>Innovation <em>Hub</em></>}
        subtitle="Space, mentorship and resources for AVIU students to prototype ideas, start ventures and apply classroom learning to real problems."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Innovation Hub', path: '/student-life/innovation-hub' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 720, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          The AVIU Innovation Hub supports student startups, project teams and research commercialisation. It connects learners in Business, ICT, Education, Nursing and Social Sciences with mentors, labs and the annual Innovation Fair and pitch competitions.
        </p>
        <div className="grid-3" style={{ gap: 16 }}>
          {[
            { icon: Lightbulb, title: 'Ideation & design', text: 'Workshops on problem framing, design thinking and user research.' },
            { icon: Cpu, title: 'Labs & tools', text: 'Access to prototyping space, computing resources and collaboration zones.' },
            { icon: Rocket, title: 'Venture support', text: 'Pitch training, pitch competitions and links to industry partners.' },
            { icon: Users, title: 'Community', text: 'Cross-faculty teams and peer networks for sustained innovation culture.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 20 }}>
              <x.icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/research')}>Research &amp; innovation</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/events')}>Events &amp; fairs</button>
        </div>
      </section>
    </div>
  );
}
