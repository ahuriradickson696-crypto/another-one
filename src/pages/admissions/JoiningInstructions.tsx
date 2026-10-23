import { ArrowRight } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const steps = [
  { title: 'Accept your offer', detail: 'Confirm acceptance of the admission offer within the stated deadline and pay any required acceptance deposit if applicable.' },
  { title: 'Complete registration', detail: 'Register for the semester with the Academic Registrar’s office. Bring original academic documents for verification.' },
  { title: 'Pay fees / arrange payment', detail: 'Tuition schedules are published when available. Contact the Bursar for current guidance and payment plans. Fees page: coming soon details.' },
  { title: 'Orientation', detail: 'Attend orientation for your intake (January, May or August). You will meet faculty, student services and learn about campus facilities.' },
  { title: 'Get your student ID & portal access', detail: 'Collect student identity card and activate e-learning / student portal credentials for timetable, results and library access.' },
  { title: 'Settle into accommodation', detail: 'If using university or recommended housing, complete accommodation formalities and safety briefing.' },
];

export function JoiningInstructions() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Admissions"
        title={<>Joining <em>Instructions</em></>}
        subtitle="What to do after you receive an offer from Avance International University (AVIU). Three intakes per year: January, May and August."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Admissions', path: '/admissions' },
          { label: 'Joining Instructions', path: '/admissions/joining-instructions' },
        ]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> After admission</div>
            <h2>From offer to <em>first day.</em></h2>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 16 }}>
          {steps.map((s, i) => (
            <div className="info-card" key={s.title} style={{ padding: 20, display: 'flex', gap: 14 }}>
              <span style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                background: 'var(--purple-100)', color: 'var(--purple-700)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14}}>{i + 1}</span>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>{s.title}</strong>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Intakes</div>
            <h2>Three intakes a <em>year.</em></h2>
          </div>
        </div>
        <p style={{ maxWidth: 680, marginBottom: 20, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          Students at AVIU can enrol for programmes in <strong>January, May and August</strong>. Choose the intake that fits your timeline. Application deadlines are published on the Admissions pages and academic calendar.
        </p>
        <div className="cta-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => openApply()}>Apply online <ArrowRight size={16} /></button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/entry-requirements')}>Admission requirements</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/fees')}>Fees (coming soon)</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/downloads')}>Download forms &amp; brochures</button>
        </div>
      </section>

    </div>
  );
}
