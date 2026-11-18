import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function LegalAccessibility() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Legal"
        title={<>Accessibility <em>statement</em></>}
        subtitle="Our commitment to an accessible website and how to report barriers."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Accessibility', path: '/legal/accessibility' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Commitment</h2>
          <p>
            Avance International University aims to make public web content perceivable, operable and understandable. We use semantic structure, readable contrast where possible, and responsive layouts for mobile and desktop devices.
          </p>
          <h2>Known limitations</h2>
          <p>
            Some older PDF documents or embedded third-party media (including video platforms) may not meet the same standard as core HTML pages. We improve assets as they are updated.
          </p>
          <h2>Feedback</h2>
          <p>
            If you find content difficult to use, email <a href="mailto:info@aviu.ac.ug" style={{ color: 'var(--purple-600)' }}>info@aviu.ac.ug</a> with the page address and a short description of the problem. We will acknowledge and prioritise fixes where feasible.
          </p>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/access-guide')}>Campus access guide</button>
          <button type="button" className="btn btn-outline" style={{ marginLeft: 8 }} onClick={() => navigate('/contact')}>Contact</button>
        </div>
      </section>
    </div>
  );
}
