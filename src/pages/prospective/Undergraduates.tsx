import { Calendar, FileText, Download, ArrowRight } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { faculties } from '@/data/university';

const steps = [
  { title: 'Choose a programme', text: 'Browse faculties below or use Course Finder. Match interests to career goals in teaching, business, ICT, nursing or social development.' },
  { title: 'Check entry requirements', text: 'Bachelor routes typically need two principal passes at A-Level or equivalent. Diploma and mature-age routes are described under Admissions.' },
  { title: 'Pick an intake', text: 'AVIU admits in January, May and August. August is often the largest intake promoted on aviu.ac.ug.' },
  { title: 'Prepare documents', text: 'Certified results, ID/passport, photos and any recommendations. Use the application checklist PDF.' },
  { title: 'Apply & follow up', text: 'Submit online or at Nabweru. Admissions confirms receipt and next steps within published timelines.' },
];

export function ProspectiveUndergraduates() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="Prospective students"
        title={<>Undergraduate <em>study</em></>}
        subtitle="Bachelor degrees accredited within the NCHE framework. Practical teaching, three intakes a year, Nabweru campus."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Undergraduates', path: '/prospective/undergraduates' }]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <p className="body-text">
              Undergraduate study at AVIU is built around professional competence: subject knowledge, continuous assessment, field or clinical exposure where required, and support through the student portal.
            </p>
            <p className="body-text">
              Programmes listed on this site reflect the university’s accredited Bachelor offering in Education & Humanities, Business Administration & ICT, Nursing & Health Sciences, and Social & Behavioural Sciences. Always confirm the latest status with Admissions.
            </p>
          </div>
          <img src="/images/classroom-students.jpg" alt="Undergraduate students in class" className="media-img" />
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Faculties</div>
            <h2>Academic <em>homes.</em></h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
          {faculties.map((f) => (
            <div key={f.id} className="info-card" style={{ padding: 24 }}>
              <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
                <div>
                  <strong style={{ fontSize: 15, display: 'block', marginBottom: 8 }}>{f.name}</strong>
                  <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{f.longDescription}</p>
                  <button type="button" className="btn btn-outline" style={{ fontSize: 13}} onClick={() => navigate('/study')}>
                    View on Study page
                  </button>
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  {f.programs.filter((p) => p.level === 'Bachelor').slice(0, 8).map((p) => (
                    <li key={p.name} style={{ marginBottom: 4 }}>{p.name} <span style={{ opacity: 0.7 }}>({p.duration})</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 40 }}>
          <img src="/images/lab-pharmacy.jpg" alt="Health sciences lab" className="media-img" />
          <img src="/images/campus-aviu-event-1.jpg" alt="Campus academic event" className="media-img" />
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Pathway</div>
            <h2>From interest to <em>enrolment.</em></h2>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 12, marginBottom: 32 }}>
          {steps.map((s, i) => (
            <div key={s.title} className="info-card" style={{ padding: 18, display: 'flex', gap: 12 }}>
              <span style={{
                flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'var(--purple-100)',
                color: 'var(--purple-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13}}>{i + 1}</span>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>{s.title}</strong>
                <p className="body-small">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-3" style={{ gap: 16, marginBottom: 28 }}>
          {[
            { icon: Calendar, title: 'Intakes', text: 'January · May · August' },
            { icon: FileText, title: 'Requirements', text: 'See Entry Requirements page' },
            { icon: Download, title: 'Materials', text: 'Prospectus & checklist PDFs' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 18, textAlign: 'center' }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block' }}>{x.title}</strong>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{x.text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => openApply()}>Apply online <ArrowRight size={16} /></button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/entry-requirements')}>Entry requirements</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/open-days')}>Open days</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/downloads')}>Downloads</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/fees')}>Fees (coming soon)</button>
        </div>
      </section>
    </div>
  );
}
