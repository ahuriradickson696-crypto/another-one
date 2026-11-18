import { ArrowRight, Clock, Mail, Microscope } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function PhdOpportunities() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.research}
        eyebrow="Research"
        title={<>PhD <em>Opportunities</em></>}
        subtitle="Doctoral programmes at Avance International University are under development. Full PhD offerings and funded studentships will be announced soon."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'PhD Opportunities', path: '/research/phd-opportunities' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Coming soon</div>
            <h2>PhD programmes <em>coming soon.</em></h2>
          </div>
        </div>

        <div className="coming-soon-card" style={{
          maxWidth: 680,
          margin: '0 auto',
          textAlign: 'center',
          padding: '48px 32px',
          background: 'var(--purple-50)',
          borderRadius: 16,
          border: '1px solid var(--border)',
        }}>
          <Clock size={48} style={{ color: 'var(--purple-600)', marginBottom: 20 }} />
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, marginBottom: 12, color: 'var(--purple-900)' }}>
            Doctoral studies launching soon
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 20 }}>
            Avance International University is expanding its research capacity. PhD by research programmes across Education, Business &amp; ICT, Nursing &amp; Health Sciences, and related fields are planned. Details on entry requirements, supervisors, and funding will be published here.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 24 }}>
            In the meantime, explore our current research centres, publications, and undergraduate/postgraduate pathways. Prospective doctoral candidates may register interest with the Research Office.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href="mailto:research@aviu.ac.ug"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Mail size={16} /> Register interest
            </a>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/research/centres')}>
              Research centres <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Research culture</div>
            <h2>Building a culture of <em>inquiry.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 20 }}>
          <div className="info-card">
            <Microscope size={28} style={{ color: 'var(--purple-600)', marginBottom: 12 }} />
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Supervised research</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              Future PhD candidates will work under experienced supervisors aligned with our research centres in technology, health, education and entrepreneurship.
            </p>
          </div>
          <div className="info-card">
            <Microscope size={28} style={{ color: 'var(--purple-600)', marginBottom: 12 }} />
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Industry &amp; community</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              Projects will address real challenges in East Africa — digital transformation, public health, education quality and sustainable enterprise.
            </p>
          </div>
          <div className="info-card">
            <Microscope size={28} style={{ color: 'var(--purple-600)', marginBottom: 12 }} />
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Publication pathway</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              Students will be supported to publish in peer-reviewed outlets and present at the Annual Research Conference.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
