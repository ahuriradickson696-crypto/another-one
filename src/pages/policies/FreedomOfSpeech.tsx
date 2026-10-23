import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function FreedomOfSpeech() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Policies"
        title={<>Freedom of <em>Speech</em></>}
        subtitle="Academic freedom and responsible expression within the law and university statutes."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Policies', path: '/about/policies' }, { label: 'Freedom of Speech', path: '/freedom-of-speech' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Academic freedom</h2>
          <p>
            Avance International University supports the freedom of academic staff and students to teach, learn, research and debate ideas. Inquiry and discussion are central to a university education, including programmes in education, social sciences, business, ICT and health sciences.
          </p>
          <h2>Lawful and responsible speech</h2>
          <p>
            Freedom of expression is exercised within the Constitution of Uganda, other applicable law, and university regulations on student conduct, staff conduct and events. Speech that is unlawful (including threats, harassment or incitement to violence) is not protected. Respect for the dignity of others is expected in classrooms, online platforms and public events.
          </p>
          <h2>Events and external speakers</h2>
          <p>
            Public lectures, guild events and conferences are organised under university procedures. Organisers should allow reasonable time for planning, risk assessment and security where needed. The university may set conditions to protect safety and lawful order while preserving legitimate debate.
          </p>
          <h2>Related policies</h2>
          <p>
            Student Affairs policies, ICT acceptable-use rules and the Policy &amp; Legal Framework provide further detail. Concerns about academic freedom or event approvals may be raised with the relevant Dean, the Academic Registrar or the University Secretary.
          </p>
          <button type="button" className="btn btn-outline" style={{ marginTop: 12 }} onClick={() => navigate('/about/policies')}>
            Policy &amp; Legal Framework
          </button>
        </div>
      </section>
    </div>
  );
}
