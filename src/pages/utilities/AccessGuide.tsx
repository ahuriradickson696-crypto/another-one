import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function AccessGuide() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Accessibility"
        title={<>Access <em>guide</em></>}
        subtitle="Planning an accessible visit or study experience at AVIU."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Access guide', path: '/access-guide' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Before you visit</h2>
          <p>
            If you or a family member require assistance with mobility, sensory needs or other access requirements, contact Student Affairs or the University Secretary before your visit. We will do our best to arrange reasonable support with the notice available.
          </p>
          <h2>On campus</h2>
          <p>
            Campus buildings vary in age and layout. Staff at reception can advise on the most suitable routes to Admissions, the library and teaching areas. During open days, marshals can assist with wayfinding.
          </p>
          <h2>Digital access</h2>
          <p>
            The website aims to be usable with keyboard navigation and screen readers. Report barriers via the Accessibility statement. The e-learning platform has its own support channel through ICT Services after enrolment.
          </p>
          <h2>Academic adjustments</h2>
          <p>
            Enrolled students who need assessment or learning adjustments should speak early with their Head of Department and Student Affairs so arrangements can be considered under academic policy.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/contact')}>Contact us</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/legal/accessibility')}>Accessibility statement</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/map')}>Campus map</button>
          </div>
        </div>
      </section>
    </div>
  );
}
