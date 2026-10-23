import { ArrowRight } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const governance = [
  { group: 'Corporate', members: [
    { role: 'General Meeting', detail: 'Founding company members - appoint Directors and set the institutional mandate.' },
    { role: 'Board of Directors', detail: 'Fiduciary and strategic oversight of the university company.' },
    { role: 'Chancellor', detail: 'Ceremonial head; confers degrees and represents AVIU at official functions.' },
  ]},
  { group: 'Council & Executive', members: [
    { role: 'University Council', detail: 'Policy-making body; approves budgets, senior appointments and institutional strategy.' },
    { role: 'Vice Chancellor', detail: 'Chief executive academic and administrative officer; reports to Council.' },
    { role: 'Deputy Vice Chancellor', detail: 'Supports VC on academic and student affairs.' },
    { role: 'University Secretary', detail: 'Secretary to Council; custodian of institutional records and legal affairs.' },
  ]},
  { group: 'Academic', members: [
    { role: 'Senate', detail: 'Supreme academic authority; approves programmes, awards and examination results.' },
    { role: 'College / Faculty Boards', detail: 'Programme-level academic quality and curriculum.' },
    { role: 'Departmental Boards', detail: 'Course delivery, assessment moderation and staff development.' },
  ]},
];

export function OrgChart() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>University <em>Organisation</em></>}
        subtitle="Governance and academic structure of Avance International University (AVIU)."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Organisation', path: '/about/organisation' }]}
      />
      <section className="section-pad">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Leadership hierarchy</div><h2>Our <em>governance structure.</em></h2></div></div>
        <p style={{ maxWidth: 720, marginBottom: 32, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>AVIU balances corporate oversight with academic self-governance. The General Meeting appoints the Board of Directors, which works alongside the University Council and Senate to ensure quality teaching, research and student experience.</p>
        <div style={{ width: '100%', maxWidth: 900, margin: '0 auto 40px', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,.08)', background: '#fff' }}>
          <img src="/images/governance-structure.jpg" alt="AVIU governance structure diagram" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, margin: '0 auto 40px' }}>
          {governance.map((section) => (
            <div key={section.group} className="info-card" style={{ padding: 24 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 20, fontFamily: "'Playfair Display', Georgia, serif" }}>{section.group}</h3>
              <table className="aviu-table" style={{ minWidth: 0 }}>
                <thead><tr><th style={{ width: '38%' }}>Body / Role</th><th>Responsibility</th></tr></thead>
                <tbody>
                  {section.members.map((m) => (<tr key={m.role}><td><strong>{m.role}</strong></td><td>{m.detail}</td></tr>))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 20, borderRadius: 12, background: 'var(--purple-50)', border: '1px solid var(--border)' }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}><strong style={{ color: 'var(--purple-900)' }}>Verification:</strong> AVIU is registered and accredited by the National Council for Higher Education (NCHE). Confirm the institution and its programmes at <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)', fontWeight: 700 }}>unche.or.ug</a>.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28, justifyContent: 'center' }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/about/leadership')}>Leadership profiles <ArrowRight size={16} /></button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/policies')}>Policy framework</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/staff')}>Staff directory</button>
        </div>
      </section>
    </div>
  );
}
