import { UserCog, Calculator, GraduationCap, Users, BadgeCheck, Library, Shield, Monitor, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useRouter } from '@/router/Router';

const offices = [
  { name: 'Office of the University Secretary', icon: UserCog, role: 'Governance support, legal affairs, Council secretariat and institutional records.' },
  { name: 'Office of the Academic Registrar', icon: GraduationCap, role: 'Admissions administration, registration, examinations, transcripts and academic records.' },
  { name: 'Office of the University Controller', icon: Calculator, role: 'Financial management, budgeting, bursar functions and fee administration.' },
  { name: 'Directorate of Human Resource and Administration', icon: Users, role: 'Staff recruitment, development, welfare and administrative services.' },
  { name: 'Directorate of Quality Assurance', icon: BadgeCheck, role: 'Internal quality systems, programme review and NCHE compliance support.' },
  { name: 'Department of Library and Information Resources', icon: Library, role: 'Print and digital collections, e-library, information literacy and study spaces.' },
  { name: 'Directorate of Internal Audit and Risk', icon: Shield, role: 'Independent assurance, risk management and internal controls.' },
  { name: 'Department of ICT Services', icon: Monitor, role: 'Networks, student systems, e-learning platform and campus technology.' },
  { name: 'AVIU Consultancy Bureau', icon: Briefcase, role: 'Applied consultancy, short courses and partnerships with industry and government.' },
];

export function Offices() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Administration"
        title={<>Offices &amp; <em>Directorates</em></>}
        subtitle="Key administrative units that support teaching, research and student services at Avance International University."
      />
      <section className="section-pad">
        <div className="grid-3" style={{ gap: 16 }}>
          {offices.map((o) => {
            const Icon = o.icon;
            return (
              <div className="info-card" key={o.name} style={{ padding: 20 }}>
                <Icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
                <strong style={{ display: 'block', marginBottom: 6, fontSize: 15}}>{o.name}</strong>
                <p className="body-small">{o.role}</p>
              </div>
            );
          })}
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: 'var(--ink-soft)' }}>
          For contacts, see the Staff Directory. Governance structure is under About → Organisation.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/staff')}>Staff directory</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact/directory')}>Department directory</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/organisation')}>Organisation chart</button>
        </div>
      </section>
    </div>
  );
}
