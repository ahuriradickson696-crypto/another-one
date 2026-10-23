import { CheckCircle, GraduationCap, Globe2, UserCheck, FileText } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const levels = [
  {
    title: 'Bachelor degree programmes',
    icon: GraduationCap,
    items: [
      'Uganda Advanced Certificate of Education (UACE) with at least two principal passes in relevant subjects, or equivalent qualification recognised for university entry in Uganda.',
      'Uganda Certificate of Education (UCE) with at least five passes including English, or equivalent.',
      'Certified academic documents (results slips / certificates).',
      'Copy of national ID or valid passport and recent passport-size photographs.',
      'Completed AVIU application form (online or paper).',
    ],
  },
  {
    title: 'Diploma holders upgrading to Bachelor',
    icon: FileText,
    items: [
      'Relevant diploma from a recognised institution, with transcripts.',
      'May be considered for credit transfer / advanced standing under AVIU Credit Transfer & RPL policy (limits apply).',
      'Example pathway: diploma nurses applying to Bachelor of Nursing Sciences – Completion.',
      'Faculty assessment determines placement year and any bridging requirements.',
    ],
  },
  {
    title: 'Mature-age entry',
    icon: UserCheck,
    items: [
      'Applicants aged 21 years and above who do not meet standard A-Level points may be considered under mature-age schemes where offered.',
      'Evidence of prior learning, work experience and capacity for degree study may be required.',
      'Contact Admissions early with CV, certificates and identification.',
    ],
  },
  {
    title: 'International applicants',
    icon: Globe2,
    items: [
      'Secondary / high school qualifications equivalent to UACE, with certified transcripts and translations if not in English.',
      'Proof of English proficiency where prior instruction was not in English (e.g. IELTS / TOEFL / institutional assessment — confirm current thresholds with Admissions).',
      'Valid passport and, after offer, support letters for immigration processes as applicable.',
      'Fee and payment guidance: contact Admissions (published schedules coming soon).',
    ],
  },
];

export function EntryRequirements() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Admissions"
        title={<>Entry <em>requirements</em></>}
        subtitle="What you need to apply for Bachelor and related pathways at Avance International University (AVIU), Nabweru campus."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Admissions', path: '/admissions' },
          { label: 'Entry Requirements', path: '/admissions/entry-requirements' },
        ]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              AVIU admits students in <strong>January, May and August</strong>. Requirements below are typical for Bachelor programmes listed under NCHE-aligned accreditation. Individual programmes (especially Nursing) may set additional professional conditions.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              Always submit <strong>certified</strong> copies. The Academic Registrar may request original documents for verification at registration. Official verification of the institution: <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>unche.or.ug</a>.
            </p>
          </div>
          <img src="/images/admission-poster.jpeg" alt="AVIU admissions information" className="media-img" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
          {levels.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="info-card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <Icon size={24} style={{ color: 'var(--purple-600)' }} />
                  <h3 style={{ margin: 0, fontSize: 18}}>{block.title}</h3>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {block.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--purple-600)', flexShrink: 0, marginTop: 3 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="info-card" style={{ padding: 24, marginBottom: 24, background: 'var(--purple-50)' }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 18}}>Documents checklist (all applicants)</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Application form · Certified academic transcripts/certificates · National ID or passport · Passport photos · 
            Any recommendation letters requested · Proof of application fee if applicable. Download the application checklist PDF under Downloads.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => openApply()}>Apply online</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/how-to-apply')}>How to apply</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/joining-instructions')}>Joining instructions</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/downloads')}>Download checklist</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/study')}>View programmes</button>
        </div>
      </section>
    </div>
  );
}
