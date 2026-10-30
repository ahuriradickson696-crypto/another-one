import { Calendar, GraduationCap, Church, BookOpen } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { useRouter } from '@/router/Router';

function buildIntakeYears(start = 2026, end = 2040) {
  const rows: { year: number; jan: string; may: string; aug: string }[] = [];
  for (let y = start; y <= end; y++) {
    rows.push({
      year: y,
      jan: `January ${y} intake — teaching block Jan–Apr`,
      may: `May ${y} intake — teaching block May–Aug`,
      aug: `August ${y} intake — teaching block Aug–Dec`,
    });
  }
  return rows;
}

const annualFixed = [
  { icon: Church, title: 'Prayer Day', when: 'Published each academic year (see notice board)', detail: 'Institutional Prayer Day for staff, students and the wider community. Exact date announced in the annual calendar circular.' },
  { icon: GraduationCap, title: 'Graduation Day', when: '25 September (annual reference)', detail: 'Primary graduation ceremony date used on the AVIU notice board (e.g. 5th Graduation Ceremony — Class of 2026 on 25 September 2026). Confirm each year with the Academic Registrar.' },
  { icon: BookOpen, title: 'Registration windows', when: 'Before each intake', detail: 'Normal registration closes per Registrar memo. Late registration may attract administrative conditions.' },
  { icon: Calendar, title: 'Examinations', when: 'End of each teaching block', detail: 'Final examination timetables are issued by the Academic Registrar each semester.' },
];

export function AcademicCalendar() {
  const { navigate } = useRouter();
  const intakes = buildIntakeYears(2026, 2040);

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Academic year"
        title={<>Academic <em>Calendar</em></>}
        subtitle="January, May and August intakes projected through 2040 · Prayer Day · Graduation Day 25 September."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Academic Calendar', path: '/academic-calendar' }]}
      />

      <section className="section-pad">
        <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 28 }}>
          AVIU structures the year around <strong>three admission intakes</strong>: January, May and August.
          Special institutional dates include <strong>Prayer Day</strong> and <strong>Graduation Day on 25 September</strong>.
          Always confirm the current circular from the Academic Registrar — this page provides the planning framework.
        </p>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Fixed observances</div>
            <h2>Institutional <em>highlights.</em></h2>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 16, marginBottom: 40 }}>
          {annualFixed.map((x) => {
            const Icon = x.icon;
            return (
              <div className="info-card" key={x.title} style={{ padding: 22 }}>
                <Icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
                <strong style={{ display: 'block', marginBottom: 4 }}>{x.title}</strong>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--purple-600)' }}>{x.when}</span>
                <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> 2026 – 2040</div>
            <h2>Projected intake <em>framework.</em></h2>
          </div>
        </div>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table className="aviu-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>January intake</th>
                <th>May intake</th>
                <th>August intake</th>
              </tr>
            </thead>
            <tbody>
              {intakes.map((r) => (
                <tr key={r.year}>
                  <td><strong>{r.year}</strong></td>
                  <td>{r.jan}</td>
                  <td>{r.may}</td>
                  <td>{r.aug}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/student-life/timetables')}>Timetables</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/student-life/graduation-lists')}>Graduation lists</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions')}>Admissions</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/term-dates')}>Term dates</button>
        </div>
      </section>
    </div>
  );
}
