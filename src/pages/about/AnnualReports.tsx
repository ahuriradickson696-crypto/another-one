import { FileText, Mail } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';

const reports = [
  { year: '2025', title: 'AVIU Annual Report 2025', note: 'Highlights of academic year, enrolment, research and community engagement.' },
  { year: '2024', title: 'AVIU Annual Report 2024', note: 'Progress on quality assurance, programmes and campus development.' },
];

export function AnnualReports() {
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>Annual <em>Reports</em></>}
        subtitle="Published reports on the performance and direction of Avance International University."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Annual Reports', path: '/about/annual-reports' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 680, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>Annual reports summarise academic performance, student numbers, research activity, financial stewardship and strategic priorities. Electronic copies of the most recent reports are available on request from the University Secretary&apos;s office. Print copies can be consulted in the library.</p>
        <div className="grid-2" style={{ gap: 16 }}>
          {reports.map((r) => (
            <div className="info-card" key={r.year} style={{ padding: 22 }}>
              <FileText size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 4 }}>{r.title}</strong>
              <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--ink-soft)' }}>{r.note}</p>
              <a href={`mailto:secretary@aviu.ac.ug?subject=${encodeURIComponent(`Request: ${r.title}`)}`} className="btn btn-outline" style={{ fontSize: 13, display: 'inline-flex', gap: 6, alignItems: 'center' }}><Mail size={14} /> Request a copy</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
