import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function ModernSlavery() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Policies"
        title={<>Modern Slavery <em>Statement</em></>}
        subtitle="Ethical procurement and opposition to forced labour in university operations and supply chains."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Policies', path: '/about/policies' }, { label: 'Modern Slavery', path: '/modern-slavery-statement' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Our position</h2>
          <p>
            Avance International University opposes modern slavery, forced labour and human trafficking. We expect staff and suppliers to act lawfully and ethically in recruitment, contracting and campus services.
          </p>
          <h2>Operations &amp; supply chain</h2>
          <p>
            Finance and Procurement policies govern purchasing, tendering and supplier relationships. Contractors providing security, catering, construction or professional services are expected to comply with labour law and contractual standards. Where risks are identified, the university may require corrective action or end a relationship.
          </p>
          <h2>Employment practices</h2>
          <p>
            Staff recruitment is managed through Human Resource policies, including fair selection and documented contracts. Student work placements and internships must comply with relevant programme and legal requirements.
          </p>
          <h2>Reporting concerns</h2>
          <p>
            Staff, students or suppliers who suspect exploitation connected to university activity should contact the University Secretary, Directorate of Internal Audit and Risk, or HR. Reports are handled confidentially to the extent permitted by law and procedure.
          </p>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/policies')}>Related policies</button>
          <button type="button" className="btn btn-outline" style={{ marginLeft: 8 }} onClick={() => navigate('/offices')}>Offices &amp; contacts</button>
        </div>
      </section>
    </div>
  );
}
