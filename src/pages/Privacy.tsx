import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';

export function Privacy() {
  return (
    <div className="page-content">
      <PageHero images={pageImages.about} eyebrow="Legal" title={<>Privacy &amp; <em>Terms</em></>} subtitle="How Avance International University handles your personal data and the terms that apply when you use this website and our services." />

      <section className="section-pad">
        <div className="prose-block">
          <h2>Privacy notice</h2>
          <p>{universityInfo.name} (&quot;we&quot;, &quot;us&quot;) collects and processes personal information that you provide when you apply for admission, enquire about programmes, subscribe to our newsletter, or contact us. This may include your name, email, phone number, academic history, and other details needed for admissions and student support.</p>
          <p>We process personal data in accordance with the <strong>Uganda Data Protection and Privacy Act, 2019</strong> and its regulations. Where you consent (for example when you submit an application form), we will process your data for the specific purposes described at the point of collection.</p>
          <p>We use this information to process applications, respond to enquiries, improve our services, and (where you have consented) send updates about admissions, events, and university news. We do not sell your personal data.</p>

          <h2>Data Protection Officer</h2>
          <p>AVIU has designated a Data Protection Officer to oversee compliance. For access, correction or deletion requests, or to raise a concern about how your data is handled, write to:</p>
          <ul>
            <li><strong>Email:</strong> dpo@aviu.ac.ug</li>
            <li><strong>Postal:</strong> Data Protection Officer, {universityInfo.name}, {universityInfo.address}</li>
            <li><strong>Telephone:</strong> {universityInfo.phone}</li>
          </ul>
          <p>You may also lodge a complaint with the <strong>Personal Data Protection Office (PDPO)</strong> of Uganda at <a href="https://pdpo.go.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>pdpo.go.ug</a>.</p>

          <h2>Retention</h2>
          <p>We retain application and student records for as long as needed for academic, legal, and archival purposes, in line with university records-management policy and applicable law.</p>

          <h2>Terms of use</h2>
          <p>This website is provided for information about {universityInfo.name}. Programme details, fees, and dates are indicative and may change; always confirm with the Admissions Office or Academic Registrar.</p>
          <p>Application submissions and other forms are subject to university regulations. Providing false information may lead to rejection of an application or disciplinary action.</p>
          <p>For questions about privacy or these terms, contact: {universityInfo.email} - {universityInfo.phone} - {universityInfo.address}.</p>
        </div>
      </section>
    </div>
  );
}
