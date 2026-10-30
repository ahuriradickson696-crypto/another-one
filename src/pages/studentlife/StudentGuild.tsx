import { Users, Megaphone, Heart, Calendar } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function StudentGuild() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentLife || pageImages.home}
        eyebrow="Student Life"
        title={<>Student <em>Guild</em></>}
        subtitle="The AVIU Student Guild represents students, organises campus life and partners with management on welfare, sports, culture and leadership development."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Student Guild', path: '/student-life/guild' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 720, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          The Guild is the official student government of Avance International University. Elected leaders advocate for student interests, coordinate clubs and societies, and run events such as Cultural Day, sports competitions and community engagement projects.
        </p>
        <div className="grid-3" style={{ gap: 16 }}>
          {[
            { icon: Users, title: 'Representation', text: 'Channel student views to Senate, Council and management on academic and welfare matters.' },
            { icon: Megaphone, title: 'Campus voice', text: 'Organise forums, debates and feedback sessions so every student can be heard.' },
            { icon: Heart, title: 'Welfare & inclusion', text: 'Support peer mentoring, inclusion initiatives and student wellness partnerships.' },
            { icon: Calendar, title: 'Events & culture', text: 'Lead cultural gala, sports days, clubs fair and community service activities.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 20 }}>
              <x.icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: 'var(--ink-soft)' }}>
          Guild constitution and election guidelines form part of the University Policy &amp; Legal Framework. Contact Student Affairs or the Guild office on campus for current office bearers.
        </p>
        <button type="button" className="btn btn-outline" style={{ marginTop: 16 }} onClick={() => navigate('/about/policies')}>
          Policy &amp; Legal Framework
        </button>
      </section>
    </div>
  );
}
