import { Download, FileText, Image, BookOpen, GraduationCap, ClipboardList } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const resources = [
  {
    title: 'Programmes prospectus 2026–2027',
    description: 'Overview of accredited Bachelor programmes, intakes (January, May, August) and campus information.',
    href: '/downloads/prospectus-2026-2027.pdf',
    type: 'PDF',
    icon: GraduationCap,
  },
  {
    title: 'Academic Handbook Policy (2026)',
    description: 'Academic regulations, assessment and student responsibilities.',
    href: '/downloads/academic-handbook-2026.pdf',
    type: 'PDF',
    icon: BookOpen,
  },
  {
    title: 'Admissions & Credit Transfer Policy',
    description: 'Entry pathways, RPL and credit transfer aligned with NCHE.',
    href: '/downloads/admissions-credit-transfer-2026.pdf',
    type: 'PDF',
    icon: ClipboardList,
  },
  {
    title: 'Application checklist',
    description: 'Documents required for undergraduate and other applications.',
    href: '/downloads/application-form-checklist.pdf',
    type: 'PDF',
    icon: FileText,
  },
  {
    title: 'Teaching timetable',
    description: 'Current semester teaching timetable (confirm on student portal).',
    href: '/downloads/timetable-teaching.pdf',
    type: 'PDF',
    icon: FileText,
  },
  {
    title: 'Examination timetable',
    description: 'Final examinations schedule issued by the Academic Registrar.',
    href: '/downloads/timetable-exams.pdf',
    type: 'PDF',
    icon: FileText,
  },
  {
    title: 'Graduation list 2026 (provisional)',
    description: 'Provisional graduands list for the Class of 2026 ceremony.',
    href: '/downloads/graduation-list-2026.pdf',
    type: 'PDF',
    icon: GraduationCap,
  },
  {
    title: 'Admission poster',
    description: 'Current intake visual for sharing and display.',
    href: '/images/admission-poster.jpeg',
    type: 'Image',
    icon: Image,
  },
  {
    title: 'Apply online',
    description: 'Submit your application. Admissions will follow up with next steps.',
    href: '#apply',
    type: 'Application',
    icon: BookOpen,
    isApply: true,
  },
];

export function Downloads() {
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.admissions}
        eyebrow="Resources"
        title={<>Downloads &amp; <em>Materials</em></>}
        subtitle="Download programme guides, posters and application materials for Avance International University. For official prospectuses contact Admissions at Nabweru campus."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Resources
            </div>
            <h2>
              Course materials &amp; <em>downloads.</em>
            </h2>
          </div>
        </div>
        <p style={{ maxWidth: 720, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          Documents reflect AVIU programmes aligned with National Council for Higher Education (NCHE) accreditation records (campus: Nabweru / Kampala region). Last accreditation and review years are shown on the Study programme catalogue. Below you will find downloadable overviews for our accredited Bachelor programmes. Detailed module handbooks and course outlines are provided to enrolled students via the student portal. Tuition fee schedules will be published shortly; until then please contact the Admissions or Bursar’s office.
        </p>
        <div className="library-grid">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <div className="library-card" key={r.title}>
                <span className="library-icon">
                  <Icon size={22} />
                </span>
                <strong>{r.title}</strong>
                <p>{r.description}</p>
                <span style={{ fontSize: 13, color: 'var(--purple-600)', fontWeight: 600 }}>{r.type}</span>
                {r.isApply ? (
                  <button type="button" className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => openApply()}>
                    Apply now <Download size={14} />
                  </button>
                ) : (
                  <a href={r.href} download className="btn btn-outline" style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Download <Download size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
