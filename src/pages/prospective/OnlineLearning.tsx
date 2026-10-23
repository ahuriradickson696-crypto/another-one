import { Monitor, Wifi, Shield, BookOpen, Video, Headphones } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function ProspectiveOnline() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="Prospective students"
        title={<>Online &amp; <em>blended learning</em></>}
        subtitle="How the AVIU e-learning platform supports live classes, resources and assessment."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Online learning', path: '/prospective/online-learning' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Digital learning is part of the AVIU experience. After registration, ICT Services activates accounts on the institutional platform so you can join live sessions, download materials and submit coursework.
            </p>
            <p className="body-text">
              Programme delivery may be face-to-face, blended or online-supported depending on the faculty design. Confirm the mode for your course when you receive an offer.
            </p>
          </div>
          <img src="/images/classroom-discussion.jpg" alt="Interactive learning" className="media-img" />
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { icon: Monitor, title: 'Portal access', text: 'https://elearning.aviu.ac.ug — credentials after enrolment and ICT orientation.' },
            { icon: Video, title: 'Live classes', text: 'Scheduled sessions with lecturers; recordings may be provided for revision where enabled.' },
            { icon: BookOpen, title: 'Resources', text: 'Reading lists, slides, announcements and assignment briefs in one place.' },
            { icon: Wifi, title: 'Connectivity', text: 'Stable broadband recommended. Mobile data works for lighter tasks; exams may require campus presence.' },
            { icon: Headphones, title: 'Support', text: 'Module lecturers for academic issues; ICT Services for login and technical faults.' },
            { icon: Shield, title: 'Integrity', text: 'Plagiarism checks and exam rules apply equally online and on campus.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 18 }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p className="body-small">{x.text}</p>
            </div>
          ))}
        </div>
        <img src="/images/staff-booth.jpg" alt="Student services support" className="media-img" style={{ marginBottom: 24 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="https://elearning.aviu.ac.ug/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open e-learning</a>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/study/online')}>Online study overview</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/current/students')}>Student hub</button>
        </div>
      </section>
    </div>
  );
}
