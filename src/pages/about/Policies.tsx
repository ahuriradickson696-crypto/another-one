import { Download, FileText, Scale, BookOpen, FlaskConical, Users, Briefcase, Wallet, Building2, Monitor, BadgeCheck, Heart, Landmark } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const policyCategories = [
  {
    title: 'Governance & Compliance Policies',
    icon: Scale,
    description: 'Statutes, council instruments, board procedures and compliance frameworks that guide university leadership.',
  },
  {
    title: 'Teaching & Learning Policies',
    icon: BookOpen,
    description: 'Standards for curriculum delivery, student support and quality of the learning experience.',
  },
  {
    title: 'Teaching, Learning & Assessment Policies',
    icon: FileText,
    description: 'Assessment regulations, examination rules, continuous assessment and academic integrity.',
  },
  {
    title: 'Research & Innovation Policies',
    icon: FlaskConical,
    description: 'Research ethics, intellectual property, publication and innovation support.',
  },
  {
    title: 'Student Affairs Policies',
    icon: Users,
    description: 'Student conduct, welfare, guild relations, accommodation and discipline.',
  },
  {
    title: 'Human Resources Policies',
    icon: Briefcase,
    description: 'Recruitment, performance, staff development, welfare and employment conditions.',
  },
  {
    title: 'Finance and Procurement Policies',
    icon: Wallet,
    description: 'Financial management, procurement, audit and resource stewardship.',
  },
  {
    title: 'Infrastructure Policies',
    icon: Building2,
    description: 'Campus facilities, safety, maintenance and capital development.',
  },
  {
    title: 'ICT & Library Policies',
    icon: Monitor,
    description: 'ICT use, data protection, e-learning and library access and resources.',
  },
  {
    title: 'Quality Assurance Policies',
    icon: BadgeCheck,
    description: 'Internal quality systems aligned with NCHE standards and continuous improvement.',
  },
  {
    title: 'Constitutions of Associations',
    icon: Users,
    description: 'Constitutions of staff associations, student guild and recognised societies.',
  },
  {
    title: 'Community Engagement Policies',
    icon: Heart,
    description: 'Outreach, partnerships and community service frameworks.',
  },
  {
    title: 'National Policy and Legal Framework',
    icon: Landmark,
    description: 'Alignment with Universities and Other Tertiary Institutions Act and NCHE regulations.',
  },
];

const downloadablePolicies = [
  { name: 'AVIU Academic Handbook Policy (2026)', href: '/downloads/academic-handbook-2026.pdf' },
  { name: 'AVIU Admissions and Credit Transfer Policy (2026)', href: '/downloads/admissions-credit-transfer-2026.pdf' },
  { name: 'AVIU Academic Programmes Development & Review Policy (2024)', href: '/downloads/programmes-development-review-2024.pdf' },
  { name: 'AVIU Prospectus – Academic Year 2026–2027', href: '/downloads/prospectus-2026-2027.pdf' },
  { name: 'AVIU Application Checklist', href: '/downloads/application-form-checklist.pdf' },
  { name: 'AVIU Teaching Timetable (current)', href: '/downloads/timetable-teaching.pdf' },
  { name: 'AVIU Final Examinations Timetable', href: '/downloads/timetable-exams.pdf' },
  { name: 'AVIU Graduation List 2026 (provisional)', href: '/downloads/graduation-list-2026.pdf' },
];

export function Policies() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Governance"
        title={<>University Policy &amp; <em>Legal Framework</em></>}
        subtitle="Avance International University (AVIU) operates under clear policies aligned with the National Council for Higher Education (NCHE) and national higher education law. Explore policy areas and download key documents."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Policy & Legal Framework', path: '/about/policies' },
        ]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Policy areas</div>
            <h2>Governance, teaching, research &amp; <em>more.</em></h2>
          </div>
        </div>
        <p style={{ maxWidth: 720, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          Policies guide how AVIU is governed, how teaching and assessment are conducted, how research is supported, and how students and staff are treated. They sit within Uganda’s national higher education legal framework and NCHE requirements. Official verification of institutions: {' '}
          <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>unche.or.ug</a>.
        </p>
        <div className="grid-3" style={{ gap: 16 }}>
          {policyCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div className="info-card" key={cat.title} style={{ padding: 20 }}>
                <Icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
                <strong style={{ display: 'block', marginBottom: 6, fontSize: 15}}>{cat.title}</strong>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>{cat.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Documents</div>
            <h2>Policy <em>downloads.</em></h2>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14}}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '12px 16px' }}>Policy Name</th>
                <th style={{ padding: '12px 16px', width: 120 }}>Download</th>
              </tr>
            </thead>
            <tbody>
              {downloadablePolicies.map((row) => (
                <tr key={row.name} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '14px 16px' }}>{row.name}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <a href={row.href} download className="btn btn-outline" style={{ fontSize: 13, padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <Download size={14} /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--ink-soft)' }}>
          Full policy documents are maintained by the University Secretary and Quality Assurance Directorate. Contact <a href="mailto:info@aviu.ac.ug" style={{ color: 'var(--purple-600)' }}>info@aviu.ac.ug</a> for official copies where a placeholder is shown.
        </p>
      </section>

      <section className="section-pad">
        <div className="cta-band">
          <div>
            <h2>Related governance</h2>
            <p>Organisation chart, leadership and statute on governance &amp; management.</p>
          </div>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary" onClick={() => navigate('/about/organisation')}>Organisation chart</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/about/leadership')}>Leadership</button>
          </div>
        </div>
      </section>

    </div>
  );
}
