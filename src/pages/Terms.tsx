import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useRouter } from '@/router/Router';

export function Terms() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Legal"
        title={<>Terms &amp; <em>Conditions</em></>}
        subtitle="Please read these terms carefully before using the Avance International University website or applying for admission. By accessing this site you agree to these terms."
      />

      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>1. Acceptance of terms</h2>
          <p>
            These Terms and Conditions govern your use of the official website of Avance International University (AVIU), including all pages, forms, and online services. By browsing, applying, or submitting information you accept these terms and our Privacy Policy.
          </p>

          <h2>2. About the university</h2>
          <p>
            Avance International University is a private higher education institution in Uganda, registered and accredited by the National Council for Higher Education (NCHE). Programme accreditation status is maintained in accordance with NCHE requirements. Official verification of institutions and programmes can be done via the NCHE website at{' '}
            <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>
              unche.or.ug
            </a>
            .
          </p>

          <h2>3. Use of the website</h2>
          <p>
            Content on this site is provided for general information about programmes, admissions, research, student life and campus services. We strive for accuracy but do not guarantee that all information is complete or up to date at all times. Programme details, intake dates and academic calendars may change; always confirm with Admissions or the Academic Registrar.
          </p>
          <p>
            You may not misuse the site (including attempting unauthorised access, scraping content for commercial reuse without permission, or submitting false information on application forms).
          </p>

          <h2>4. Applications and admissions</h2>
          <p>
            Submitting an online application does not guarantee admission. Offers are made subject to meeting entry requirements, programme capacity, and any additional conditions set by the university. Documents submitted must be genuine; false information may lead to withdrawal of an offer or expulsion.
          </p>
          <p>
            Tuition fee schedules and payment terms will be published separately. Until then, applicants should contact Admissions or the Bursar’s office for guidance. Any bursaries or scholarships are subject to published criteria and availability.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            Logos, text, images, videos and other materials on this site are owned by or licensed to Avance International University unless otherwise stated. You may share links for non-commercial purposes; reproduction of substantial content requires prior written permission.
          </p>

          <h2>6. Third-party links and embeds</h2>
          <p>
            The site may include links to NCHE, partner organisations, and embedded YouTube or other media. We are not responsible for the content or practices of third-party sites. Use of those services is subject to their own terms.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Avance International University is not liable for any indirect or consequential loss arising from use of this website or reliance on its content. Academic and administrative decisions remain subject to university statutes and NCHE regulations.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update these Terms from time to time. The version published on this page is the current version. Continued use of the site after changes constitutes acceptance.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions about these Terms, Privacy, or official university information:
            <br />
            Email: <a href="mailto:info@aviu.ac.ug" style={{ color: 'var(--purple-600)' }}>info@aviu.ac.ug</a>
            <br />
            Phone: +256 700 670 691 / +256 766 751 763
            <br />
            Address: 1 km off Nansana–Hoima Road, Nabweru, Wakiso District, Uganda
          </p>
          <p style={{ marginTop: 24 }}>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/privacy')}>
              View Privacy Policy
            </button>
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 32 }}>
            Last updated: September 2026 · Avance International University
          </p>
        </div>
      </section>
    </div>
  );
}
