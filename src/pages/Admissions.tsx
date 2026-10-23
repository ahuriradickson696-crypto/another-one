import { useState } from 'react';
import { ArrowRight, Check, FileText, ClipboardList, UserCheck, ChevronDown } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { admissionFAQs } from '@/data/university';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { MomentsStrip } from '@/components/MomentsStrip';

const steps = [
  {
    icon: FileText,
    title: 'Choose programme & intake',
    description:
      'Select a Bachelor programme from the Study catalogue and your preferred intake: January, May or August. Review entry requirements and the prospectus PDF.',
  },
  {
    icon: ClipboardList,
    title: 'Submit application & documents',
    description:
      'Apply online at aviu.ac.ug or at Nabweru Admissions. Provide certified transcripts, ID/passport, photos and any other items on the checklist. Keep originals for registration.',
  },
  {
    icon: UserCheck,
    title: 'Offer, clearance & registration',
    description:
      'Successful applicants receive an offer. Complete any fee guidance from the Bursar, then register with the Academic Registrar and activate the e-learning portal before classes begin.',
  },
];

const requirements = [
  'Completed online or paper application form',
  'Certified academic transcripts and certificates',
  'Copy of national ID or valid passport',
  'Two passport-size photographs',
  'Personal statement (for postgraduate applicants)',
  'Application fee payment receipt',
  'Two letters of recommendation (postgraduate programmes)',
  'Proof of English proficiency (international applicants)',
  'Curriculum vitae (for Masters and PhD applicants)',
  'Research proposal (for PhD applicants)',
];


const intakes = [
  { name: 'January Intake', period: 'January – April', applications: 'October – December', status: 'Open' },
  { name: 'May Intake', period: 'May – August', applications: 'February – April', status: 'Open' },
  { name: 'August Intake', period: 'August – December', applications: 'May – July', status: 'Open Now' },
];

export function Admissions() {
  const { openApply } = useApply();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.admissions}
        eyebrow="Join AVIU"
        title={<>Begin your <em>application.</em></>}
        subtitle="We welcome students from all backgrounds to Nabweru campus. Admissions is transparent and aligned with NCHE-accredited Bachelor programmes. AVIU runs three intakes each year — January, May and August — as promoted on aviu.ac.ug (August intake is currently featured for 2026)."
      />

      <MomentsStrip keys={['class2026','celebrating','seated']} eyebrow="Join them" title="Your graduation day starts here" />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> How to apply
            </div>
            <h2>
              Three simple <em>steps.</em>
            </h2>
          </div>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <step.icon size={28} strokeWidth={1.5} />
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Intake schedule
            </div>
            <h2>
              Three intakes <em>per year.</em>
            </h2>
          </div>
        </div>
        <div className="intake-grid">
          {intakes.map((intake) => (
            <div className={`intake-card ${intake.status === 'Open Now' || intake.status === 'Open' ? 'intake-active' : ''}`} key={intake.name}>
              <strong>{intake.name}</strong>
              <span>{intake.period}</span>
              <p>Applications: {intake.applications}</p>
              <span className={`intake-status ${intake.status.includes('Open') ? 'status-open' : 'status-closed'}`}>
                {intake.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> What you need
            </div>
            <h2>
              Entry <em>requirements.</em>
            </h2>
            <p>
              Please ensure you have the following documents ready before
              beginning your application. Incomplete applications may delay the
              review process. Requirements may vary by programme level.
            </p>
          </div>
          <div className="col-half">
            <ul className="requirements-list">
              {requirements.map((req) => (
                <li key={req}>
                  <span className="programme-bullet">
                    <Check size={13} />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Tuition &amp; fees
            </div>
            <h2>
              An affordable <em>education.</em>
            </h2>
          </div>
        </div>
        <div className="tuition-table">
          <div className="tuition-row tuition-header">
            <span>Programme Type</span>
            <span>Tuition</span>
            <span>Frequency</span>
          </div>
          {/* Fee schedules coming soon — contact Admissions */}
        </div>
        <p className="tuition-note">
          Fees are indicative and subject to annual review. Flexible payment
          plans and scholarships are available for qualifying students. See our
          full fee structure on the Fees page.
        </p>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Questions?
            </div>
            <h2>
              Frequently asked <em>questions.</em>
            </h2>
          </div>
        </div>
        <div className="faq-list">
          {admissionFAQs.map((faq, index) => (
            <div className={`faq-item ${openFAQ === index ? 'faq-open' : ''}`} key={index}>
              <button
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={18} className={`faq-chevron ${openFAQ === index ? 'faq-chevron-open' : ''}`} />
              </button>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Take the first step
          </div>
          <h2>Apply today.</h2>
          <p>Applications are now open for all intakes — January, May and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Start application <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
