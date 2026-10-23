import { Clock, Download, AlertCircle } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const tables = [
  {
    name: 'Teaching Timetable (General)',
    period: 'Current semester',
    note: 'Lecture and tutorial slots by faculty and year. Room numbers are confirmed on the student portal and faculty notice boards. Provisional drafts may change in the first two weeks.',
    href: '/downloads/timetable-teaching.pdf',
  },
  {
    name: 'Tests / CAT Timetable',
    period: 'Mid-semester',
    note: 'Continuous Assessment Test windows. Course leaders may issue module-specific times that sit inside the published CAT period.',
    href: '/downloads/timetable-tests.pdf',
  },
  {
    name: 'Final Examinations Timetable',
    period: 'End of semester',
    note: 'Issued by the Academic Registrar. Bring student ID to every paper. Unauthorised materials are prohibited. End-of-semester examinations for new and continuing students are scheduled each term (e.g. notice board references mid-November windows in recent cycles).',
    href: '/downloads/timetable-exams.pdf',
  },
  {
    name: 'Academic Calendar',
    period: 'Full year',
    note: 'Registration windows, Cultural Day, orientation for January / May / August intakes, and examination periods.',
    href: '/academic-calendar',
    isPage: true,
  },
];

export function Timetables() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentLife || pageImages.home}
        eyebrow="Student Life"
        title={<>Teaching &amp; Exam <em>Timetables</em></>}
        subtitle="Official schedules from the Academic Registrar — teaching, continuous assessment and final examinations."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Life', path: '/student-life' },
          { label: 'Timetables', path: '/student-life/timetables' },
        ]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Timetables are published each semester by the Office of the Academic Registrar and faculty offices. Always use the latest PDF or portal version — printed copies on notice boards can lag behind updates.
            </p>
            <div className="info-card" style={{ padding: 16, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <AlertCircle size={20} style={{ color: 'var(--purple-600)', flexShrink: 0, marginTop: 2 }} />
              <p className="body-small">
                Registration memos (including end of normal registration) and bursar notices are posted on the university notice board and website. Late registration may attract administrative consequences as set out in academic regulations.
              </p>
            </div>
          </div>
          <img src="/images/classroom-students.jpg" alt="Students in scheduled class" className="media-img" />
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          {tables.map((t) => (
            <div className="info-card" key={t.name} style={{ padding: 22 }}>
              <Clock size={22} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 4 }}>{t.name}</strong>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--purple-600)' }}>{t.period}</span>
              <p style={{ margin: '10px 0 14px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{t.note}</p>
              {t.isPage ? (
                <button type="button" className="btn btn-outline" onClick={() => navigate(t.href)}>View calendar</button>
              ) : (
                <a href={t.href} download className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Download size={14} /> Download PDF
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="info-card" style={{ padding: 24 }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 18}}>Clinical &amp; school practice schedules</h3>
          <p className="body-small">
            Nursing clinical rotations and Education teaching practice follow faculty-issued schedules that sit alongside the general timetable. Check with your Head of Department and the e-learning portal. Portal: <a href="https://elearning.aviu.ac.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>elearning.aviu.ac.ug</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
