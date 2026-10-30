import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';

const terms = [
  { t: 'AVIU', d: 'Avance International University — private university at Nabweru, Wakiso District, Uganda.' },
  { t: 'NCHE', d: 'National Council for Higher Education — the statutory regulator of higher education in Uganda. Institutions and programmes may be verified at unche.or.ug.' },
  { t: 'Senate', d: 'The principal academic body responsible for teaching standards, examinations, awards and academic policy.' },
  { t: 'University Council', d: 'Governing body providing strategic and fiduciary oversight of the university.' },
  { t: 'Board of Directors', d: 'Corporate governance body of the founding company, working alongside Council on institutional direction.' },
  { t: 'Intake', d: 'A defined admission and start period. AVIU runs three intakes each year: January, May and August.' },
  { t: 'CAT', d: 'Continuous Assessment Test — mid-semester assessment contributing to the final course mark.' },
  { t: 'RPL', d: 'Recognition of Prior Learning — assessment of prior study or experience for possible academic credit.' },
  { t: 'Credit transfer', d: 'Movement of completed academic credits from another recognised institution toward an AVIU programme, subject to policy limits.' },
  { t: 'Guild', d: 'The official student government representing student interests and organising campus activities.' },
  { t: 'Academic Registrar', d: 'Office responsible for admissions administration, registration, examinations, transcripts and graduation lists.' },
  { t: 'Quality Assurance', d: 'Internal systems ensuring programmes and services meet NCHE and institutional standards.' },
  { t: 'E-learning portal', d: 'Online learning environment (elearning.aviu.ac.ug) for live classes, resources and assessments.' },
  { t: 'Prospectus', d: 'Published overview of programmes, admissions and campus information for an academic year.' },
  { t: 'Graduation list', d: 'Official or provisional list of students approved to graduate at a ceremony, issued by the Academic Registrar.' },
];

export function Glossary() {
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>Academic <em>Glossary</em></>}
        subtitle="Definitions of terms used across AVIU admissions, academic administration and student life."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Glossary', path: '/glossary' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 720, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          This glossary supports students, applicants and partners reading AVIU policies, calendars and web pages. For formal definitions in statutes or programme regulations, refer to the Academic Handbook and Policy &amp; Legal Framework.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 800 }}>
          {terms.map((item) => (
            <div key={item.t} style={{ padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--purple-900)', fontSize: 15}}>{item.t}</strong>
              <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
