import { Target, Compass, TrendingUp, Users, FlaskConical, Building2, Award, ArrowRight } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';
import { MomentsStrip } from '@/components/MomentsStrip';

const pillars = [
  { icon: Target, title: 'Academic excellence', text: 'Deliver NCHE-aligned Bachelor programmes with competence-based teaching, continuous assessment and curriculum review across Education, Business & ICT, Nursing and Social Sciences. Maintain programme accreditation cycles and internal moderation of assessment.' },
  { icon: FlaskConical, title: 'Research & innovation', text: 'Build a culture of inquiry through the Annual Research Conference, Innovation Fair, student projects and faculty publications. Expand research centres and prepare doctoral pathways (PhD coming soon).' },
  { icon: Users, title: 'Student success & access', text: 'Support learners through three annual intakes (January, May, August), orientation, academic advising, e-learning, guild life and career services. Widen participation with clear entry pathways and merit support.' },
  { icon: Building2, title: 'Campus & infrastructure', text: 'Develop Nabweru teaching spaces, nursing simulation capacity, library and ICT infrastructure so facilities match programme needs and student numbers.' },
  { icon: TrendingUp, title: 'Quality & governance', text: 'Operate under Council, Senate and Board oversight with Quality Assurance aligned to NCHE. Publish policies, annual reports and transparent admissions information.' },
  { icon: Compass, title: 'Community & partnerships', text: 'Deepen engagement with schools, health facilities, local government and industry through placements, consultancy and community engagement days.' },
];

const timeline = [
  { phase: 'Near term', items: ['Consolidate Bachelor portfolio and accreditation status', 'Strengthen e-learning and student portal experience', 'Publish clear fee guidance when schedules are finalised', 'Grow open days ahead of August and other intakes'] },
  { phase: 'Medium term', items: ['Expand research outputs and conference participation', 'Launch structured PhD opportunities', 'Enhance simulation labs and library collections', 'Formalise more industry and school partnerships'] },
  { phase: 'Long term', items: ['Recognise AVIU as a regional reference for applied, innovative higher education', 'Sustainable campus operations and inclusive access', 'Strong alumni networks across East Africa'] },
];

export function StrategicPlan() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About AVIU"
        title={<>Strategic <em>Plan</em></>}
        subtitle="Vision, mission and multi-year priorities for Avance International University — quality teaching, research growth and community impact at Nabweru."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Strategic Plan', path: '/strategic-plan' }]}
      />

      <MomentsStrip keys={['partnership','dignitaries']} eyebrow="Strategic partnership" title="Official launch" />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Foundation</div>
            <h2 style={{ marginBottom: 16 }}>Mission &amp; <em>vision.</em></h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 14 }}>
              <strong>Mission:</strong> {universityInfo.mission}
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 14 }}>
              <strong>Vision:</strong> {universityInfo.vision}
            </p>
            <p className="body-text">
              AVIU is a private university registered and accredited by the <strong>National Council for Higher Education (NCHE)</strong>. Strategy is implemented under the University Council, Senate and management, with verification of the sector available at{' '}
              <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>unche.or.ug</a>.
            </p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img className="media-img" src="/images/campus-aerial.jpg" alt="AVIU campus aerial view" />
          </div>
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Priorities</div>
            <h2>Six strategic <em>pillars.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 40 }}>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div className="info-card" key={p.title} style={{ padding: 22 }}>
                <Icon size={26} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
                <strong style={{ display: 'block', marginBottom: 8, fontSize: 15}}>{p.title}</strong>
                <p className="body-small">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="grid-2" style={{ gap: 24, marginBottom: 40 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img className="media-img" src="/images/senate-meeting.jpg" alt="University governance meeting" />
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img className="media-img" src="/images/classroom-discussion.jpg" alt="Students in classroom discussion" />
          </div>
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Horizon</div>
            <h2>Planning <em>horizons.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 36 }}>
          {timeline.map((t) => (
            <div className="info-card" key={t.phase} style={{ padding: 22 }}>
              <strong style={{ display: 'block', marginBottom: 12, color: 'var(--purple-700)', fontSize: 15}}>{t.phase}</strong>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                {t.items.map((i) => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="info-card" style={{ padding: 28, background: 'var(--purple-50)', border: '1px solid var(--border)' }}>
          <Award size={28} style={{ color: 'var(--purple-600)', marginBottom: 12 }} />
          <h3 style={{ margin: '0 0 10px', fontSize: 22}}>Values that guide decisions</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            {universityInfo.coreValues.join(' · ')}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/about/annual-reports')}>Annual reports <ArrowRight size={16} /></button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/organisation')}>Governance structure</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/policies')}>Policy framework</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/leadership')}>Leadership</button>
        </div>
      </section>
    </div>
  );
}
