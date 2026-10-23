import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function CurrentStaff() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.staff || pageImages.about}
        eyebrow="Staff hub"
        title={<>Current <em>staff</em></>}
        subtitle="Directory, directorates, policies and vacancies for AVIU academic and administrative colleagues."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Staff', path: '/current/staff' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Staff deliver teaching, research support, student services and institutional operations under the Vice Chancellor, Deans and professional directorates.
            </p>
            <p className="body-text">
              Governance instruments — Council, Senate, Board and the Policy &amp; Legal Framework — define roles, quality expectations and conduct standards.
            </p>
          </div>
          <img src="/images/senate-meeting.jpg" alt="Staff governance meeting" className="media-img" />
        </div>
        <div className="grid-3" style={{ gap: 14, marginBottom: 28 }}>
          {[
            { title: 'Staff directory', path: '/staff', text: 'Filter Academic and Administrative profiles.' },
            { title: 'Offices & directorates', path: '/offices', text: 'Registrar, HR, QA, ICT, Library, Audit, Consultancy.' },
            { title: 'Policies', path: '/about/policies', text: 'Teaching, HR, finance, ICT and quality policies.' },
            { title: 'Jobs & careers', path: '/jobs', text: 'Current vacancies and application guidance.' },
            { title: 'Research support', path: '/research', text: 'Centres, conferences and publication routes.' },
            { title: 'Organisation chart', path: '/about/organisation', text: 'Governance structure diagram.' },
          ].map((x) => (
            <button key={x.title} type="button" className="info-card" style={{ padding: 18, textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(x.path)}>
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{x.text}</span>
            </button>
          ))}
        </div>
        <div className="grid-2" style={{ gap: 16, marginBottom: 24 }}>
          <img src="/images/board-meeting.jpg" alt="Board meeting" className="media-img" />
          <img src="/images/staff-booth.jpg" alt="Staff at campus event" className="media-img" />
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
          HR handles contracts, leave and development. ICT supports accounts and classroom technology. Quality Assurance coordinates programme review and NCHE compliance support.
        </p>
      </section>
    </div>
  );
}
