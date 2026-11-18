import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function Gdpr() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Policies"
        title={<>Data Protection <em>&amp; Privacy</em></>}
        subtitle="How AVIU collects, uses and safeguards personal information."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Legal', path: '/legal/privacy' }, { label: 'Data Protection', path: '/gdpr' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Why we process data</h2>
          <p>
            Avance International University processes personal data to manage applications and admissions, student records, teaching and assessment, research (where appropriate consent or legal basis exists), staff employment, security, finance and legitimate institutional communications.
          </p>
          <h2>Types of information</h2>
          <p>
            This may include identity and contact details, academic history, assessment results, financial transactions related to fees, and technical logs when you use university systems or the website. Special-category data is handled only where necessary and with heightened care.
          </p>
          <h2>Your rights &amp; contacts</h2>
          <p>
            Subject to applicable Ugandan data protection law, you may request access to or correction of personal data held about you. Admissions and registry queries go to the Academic Registrar; staff queries to HR; website privacy and cookies are described under Legal. Email <a href="mailto:info@aviu.ac.ug" style={{ color: 'var(--purple-600)' }}>info@aviu.ac.ug</a> for general enquiries.
          </p>
          <h2>Security</h2>
          <p>
            ICT Services and relevant offices apply technical and organisational measures to protect systems. Users must follow acceptable-use rules and keep credentials confidential. Breaches should be reported promptly to ICT and the University Secretary.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/legal/privacy')}>Privacy Policy</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/legal/cookies')}>Cookie settings</button>
          </div>
        </div>
      </section>
    </div>
  );
}
