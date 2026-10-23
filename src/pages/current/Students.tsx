import { BookOpen, Calendar, Clock, GraduationCap, Heart, Home, Library, Wallet, Users, Lightbulb, Megaphone, Shield } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const links = [
  { icon: BookOpen, title: 'E-learning portal', path: 'https://elearning.aviu.ac.ug/', external: true, text: 'Live classes, resources, submissions and marks interface after ICT activation.' },
  { icon: Calendar, title: 'Academic calendar', path: '/academic-calendar', text: 'Intakes, registration windows, Cultural Day, exams and key milestones.' },
  { icon: Clock, title: 'Timetables', path: '/student-life/timetables', text: 'Teaching, CAT and final examination schedules (PDF downloads).' },
  { icon: Library, title: 'Library', path: '/library', text: 'Opening hours, collections, e-library and study spaces.' },
  { icon: Home, title: 'Accommodation', path: '/student-life/accommodation', text: 'On-campus and recommended housing guidance.' },
  { icon: Heart, title: 'Health & wellbeing', path: '/student-life/health', text: 'Student support and wellbeing services.' },
  { icon: Users, title: 'Student Guild', path: '/student-life/guild', text: 'Representation, clubs and campus voice.' },
  { icon: Lightbulb, title: 'Innovation Hub', path: '/student-life/innovation-hub', text: 'Projects, pitches and prototyping support.' },
  { icon: Megaphone, title: 'Community engagement', path: '/student-life/community-engagement', text: 'Outreach and service learning.' },
  { icon: GraduationCap, title: 'Graduation lists', path: '/student-life/graduation-lists', text: 'Ceremony dates and provisional lists.' },
  { icon: Wallet, title: 'Fees', path: '/fees', text: 'Schedules coming soon — contact Bursar for current guidance.' },
  { icon: Shield, title: 'Campus safety', path: '/contact/campus-safety', text: 'Safety contacts and guidance.' },
];

export function CurrentStudents() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentLife || pageImages.home}
        eyebrow="Student hub"
        title={<>Current <em>students</em></>}
        subtitle="Everything you need after enrolment — portal, calendar, timetables, welfare and student life at AVIU."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Current students', path: '/current/students' }]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Welcome to the student hub. Use this page as your shortcut to academic administration and campus life. Official circulars from the Academic Registrar and Bursar still take precedence when dates change.
            </p>
            <p className="body-text">
              New students should complete registration, collect ID, activate the e-learning account and attend orientation for their <strong>January, May or August</strong> intake cohort.
            </p>
          </div>
          <img src="/images/campus-aviu-students-2.jpg" alt="AVIU students on campus" className="media-img" />
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Services</div>
            <h2>Academic &amp; campus <em>shortcuts.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 14, marginBottom: 40 }}>
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <button
                key={l.title}
                type="button"
                className="info-card"
                style={{ padding: 18, textAlign: 'left', cursor: 'pointer', border: '1px solid var(--border)', background: 'transparent' }}
                onClick={() => (l.external ? window.open(l.path, '_blank') : navigate(l.path))}
              >
                <Icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
                <strong style={{ display: 'block', marginBottom: 6, fontSize: 15}}>{l.title}</strong>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{l.text}</span>
              </button>
            );
          })}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          <img src="/images/graduates-group.jpg" alt="AVIU graduates" className="media-img" />
          <img src="/images/campus-aviu-event-2.jpg" alt="Student campus event" className="media-img" />
        </div>

        <div className="info-card" style={{ padding: 24 }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 18}}>Need help?</h3>
          <p className="body-small">
            Academic records and registration: Academic Registrar · Fees: Bursar · Portal login: ICT Services · Welfare: Student Affairs · Representation: Guild office.
            General line: +256 700 670 691 / +256 766 751 763 · info@aviu.ac.ug
          </p>
        </div>
      </section>
    </div>
  );
}
