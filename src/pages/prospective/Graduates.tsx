import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function ProspectiveGraduates() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.research}
        eyebrow="Prospective students"
        title={<>Postgraduate &amp; <em>research</em></>}
        subtitle="Advance your expertise through research culture, conferences and forthcoming doctoral pathways."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Graduates', path: '/prospective/graduates' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              AVIU’s research agenda focuses on technology and innovation, health and medicine, education and social sciences, and entrepreneurship — themes that matter to East African development.
            </p>
            <p className="body-text">
              Postgraduate diplomas and further awards are developed under the Academic Programmes Development &amp; Review Policy and NCHE processes. <strong>PhD programmes are coming soon</strong>; register interest via the Research Office.
            </p>
          </div>
          <img src="/images/lab-herbal.jpg" alt="Research laboratory" className="media-img" />
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { title: 'Research centres', text: 'Explore organised research activity and collaboration opportunities.', path: '/research/centres' },
            { title: 'Conferences', text: 'Annual Research Conference, Innovation Fair and thematic symposia.', path: '/research/conferences' },
            { title: 'Journals & repository', text: 'Publication pathways and institutional research outputs.', path: '/research/journals' },
            { title: 'PhD opportunities', text: 'Status of doctoral recruitment and how to register interest.', path: '/research/phd-opportunities' },
            { title: 'Publications', text: 'Browse the repository and recent outputs.', path: '/research/publications' },
            { title: 'Postgraduate study page', text: 'Overview of PG pathways as they expand.', path: '/study/postgraduate' },
          ].map((x) => (
            <button key={x.title} type="button" className="info-card" style={{ padding: 18, textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(x.path)}>
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{x.text}</span>
            </button>
          ))}
        </div>
        <div className="grid-2" style={{ gap: 16, marginBottom: 24 }}>
          <img src="/images/lab-microscope.jpg" alt="Microscope research" className="media-img" />
          <img src="/images/conference-audience.jpg" alt="Research conference" className="media-img" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/research')}>Research overview</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/research/phd-opportunities')}>PhD coming soon</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact')}>Contact Research Office</button>
        </div>
      </section>
    </div>
  );
}
