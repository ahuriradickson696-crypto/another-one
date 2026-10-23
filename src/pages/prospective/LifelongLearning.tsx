import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function LifelongLearning() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="Prospective students"
        title={<>Lifelong <em>learning</em></>}
        subtitle="Upgrade pathways, mature-age entry and professional development at AVIU."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Lifelong learning', path: '/prospective/lifelong-learning' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Not every learner arrives straight from A-Level. AVIU supports diploma holders upgrading to degrees, nurses completing Bachelor pathways, and mature applicants bringing workplace experience.
            </p>
            <p className="body-text">
              Three intakes — <strong>January, May and August</strong> — make it easier to start when your work and family schedule allow.
            </p>
          </div>
          <img src="/images/medical-facility-tour.jpg" alt="Professional training context" className="media-img" />
        </div>
        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          {[
            { title: 'Completion & upgrade routes', text: 'Example: Bachelor of Nursing Sciences – Completion for diploma nurses. Other upgrade paths depend on faculty assessment of prior qualifications.' },
            { title: 'Recognition of Prior Learning (RPL)', text: 'Documented work experience or prior study may attract credit under Credit Transfer & RPL policy, subject to limits and faculty decision.' },
            { title: 'Mature-age applicants', text: 'Applicants aged 21+ may be considered under mature-age schemes where published. Bring certificates, CV and identification to Admissions.' },
            { title: 'Professional short engagement', text: 'Through the Consultancy Bureau and faculties, organisations can request tailored workshops subject to capacity.' },
          ].map((x) => (
            <div key={x.title} className="info-card" style={{ padding: 20 }}>
              <strong style={{ display: 'block', marginBottom: 8 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>
        <img src="/images/guest-lecture.jpg" alt="Professional lecture" className="media-img" style={{ marginBottom: 24 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/admissions')}>Admissions overview</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/credit-transfer')}>Credit transfer &amp; RPL</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/study')}>Programmes</button>
        </div>
      </section>
    </div>
  );
}
