import { Heart, Scale, Users, Shield, BookOpen, Ear } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';

export function EqualityPolicy() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Policies"
        title={<>Equality &amp; <em>Inclusion</em></>}
        subtitle="Building a respectful university community where students and staff can thrive."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Policies', path: '/about/policies' }, { label: 'Equality', path: '/equality-policy' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              AVIU’s values — {universityInfo.coreValues.map((v) => v.split('—')[0].trim()).join(', ')} — shape how we admit students, teach, employ staff and engage communities.
            </p>
            <p className="body-text">
              Equality does not mean treating every case identically; it means removing unfair barriers and applying transparent criteria in admissions, assessment and employment.
            </p>
          </div>
          <img src="/images/campus-aviu-students-3.jpg" alt="Diverse student community" className="media-img" />
        </div>
        <div className="grid-2" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { icon: Users, title: 'Inclusive learning environment', text: 'Classrooms, clinics and online spaces should allow participation without harassment. Lecturers are expected to model respect and academic fairness.' },
            { icon: Scale, title: 'Fair decisions', text: 'Admissions, marking and hiring follow published criteria. Appeals and complaints routes are described in academic and HR policies.' },
            { icon: Heart, title: 'Student welfare', text: 'Student Affairs and the Guild help students access support. Peer mentoring and orientation reduce isolation for new intakes.' },
            { icon: Shield, title: 'Protection from discrimination', text: 'Discrimination and harassment are incompatible with university membership. Reports can be made to Student Affairs, HR or the University Secretary.' },
            { icon: BookOpen, title: 'Curriculum & representation', text: 'Programmes in education, social work and public administration explicitly address equity in society; all faculties are encouraged to use inclusive examples.' },
            { icon: Ear, title: 'Listening channels', text: 'Feedback through course evaluations, guild forums and suggestion routes informs continuous improvement.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 20 }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>
        <img src="/images/poetry-presentation.jpg" alt="Student presentation" className="media-img" style={{ marginBottom: 24 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/policies')}>Policy framework</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/access-guide')}>Access guide</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/freedom-of-speech')}>Freedom of speech</button>
        </div>
      </section>
    </div>
  );
}
