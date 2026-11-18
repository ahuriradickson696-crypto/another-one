import { BookOpen } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function Journals() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.research}
        eyebrow="Research"
        title={<>Journals &amp; <em>Publications</em></>}
        subtitle="AVIU supports scholarly publication through faculty research, student projects and the institutional repository."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'Journals', path: '/research/journals' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 720, marginBottom: 24, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          Faculty and postgraduate researchers publish in peer-reviewed outlets. The university maintains an institutional repository of theses, project reports and open research outputs. A dedicated open-access journal series is under development to showcase work in education, technology management, health and social development.
        </p>
        <div className="info-card" style={{ padding: 24, maxWidth: 560 }}>
          <BookOpen size={28} style={{ color: 'var(--purple-600)', marginBottom: 12 }} />
          <strong style={{ display: 'block', marginBottom: 8 }}>Institutional repository</strong>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Access publications and research outputs via the Research publications page. For submission guidelines contact the Research Office.
          </p>
          <button type="button" className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => navigate('/research/publications')}>
            Publications &amp; repository
          </button>
        </div>
      </section>
    </div>
  );
}
