import { GraduationCap, Download, Calendar, CheckCircle } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { MomentsStrip } from '@/components/MomentsStrip';

const ceremonies = [
  {
    title: '5th Graduation Ceremony — Class of 2026',
    date: '25 September 2026',
    note: 'Conferment of degrees, diplomas and certificates for the class of 2026. Venue, dress code and guest rules are issued by the Academic Registrar. A commencement lecture for students due for graduation is scheduled in the same period (see notice board — e.g. 22 September 2026 in the current cycle).',
    listHref: '/downloads/graduation-list-2026.pdf',
  },
  {
    title: 'Previous graduation lists (archive)',
    date: 'On request',
    note: 'Past lists are retained by the Academic Registrar for verification of awards. Write with full name, programme, year of completion and contact details.',
    listHref: '/downloads/graduation-list-archive.pdf',
  },
];

const steps = [
  'Ensure all results are approved and any retakes completed.',
  'Clear fees, library and departmental obligations.',
  'Confirm your name is correct on the provisional graduation list.',
  'Follow the Registrar’s circular on gowns, rehearsal and ceremony day.',
  'Collect certificate / transcript according to published collection windows.',
];

export function GraduationLists() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.home}
        eyebrow="Student Life"
        title={<>Graduation <em>Lists</em></>}
        subtitle="Ceremony information and lists of graduands — issued under the authority of Senate and the Academic Registrar."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Life', path: '/student-life' },
          { label: 'Graduation Lists', path: '/student-life/graduation-lists' },
        ]}
      />

      <MomentsStrip keys={['class2026','celebrating','seated','parents','dignitaries']} eyebrow="5th Graduation" title="Photos from the ceremony" />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Graduation is the public celebration of academic awards approved by Senate. Provisional lists are published so graduands can check spelling and programme details before the final list is locked.
            </p>
            <p className="body-text">
              Dates below reflect the university notice board for the <strong>2026</strong> cycle (5th Graduation Ceremony). Always confirm against the latest circular.
            </p>
          </div>
          <img src="/images/graduation-ceremony.jpg" alt="AVIU graduation ceremony" className="media-img" />
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          {ceremonies.map((c) => (
            <div className="info-card" key={c.title} style={{ padding: 22 }}>
              <GraduationCap size={26} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 4 }}>{c.title}</strong>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--purple-600)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Calendar size={14} /> {c.date}
              </span>
              <p style={{ margin: '12px 0 14px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{c.note}</p>
              <a href={c.listHref} download className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Download size={14} /> Download list
              </a>
            </div>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Checklist</div>
            <h2>Before ceremony <em>day.</em></h2>
          </div>
        </div>
        <div style={{ maxWidth: 640, marginBottom: 28 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: 'flex', gap: 12, marginBottom: 12, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
              <CheckCircle size={18} style={{ color: 'var(--purple-600)', flexShrink: 0, marginTop: 2 }} />
              <span><strong style={{ color: 'var(--purple-900)' }}>{i + 1}.</strong> {s}</span>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          <img src="/images/graduates-group.jpg" alt="Graduates group" className="media-img" />
          <img src="/images/graduand-portrait.jpg" alt="Graduand portrait" className="media-img" />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Academic Registrar</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/academic-calendar')}>Academic calendar</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/gallery')}>Graduation gallery</button>
        </div>
      </section>
    </div>
  );
}
