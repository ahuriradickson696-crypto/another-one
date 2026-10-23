import { useState } from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { faculties, type Faculty } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { MomentsStrip } from '@/components/MomentsStrip';

const levelFilters = ['All', 'Certificate', 'Diploma', 'Bachelor', 'Postgraduate Diploma', 'Masters', 'PhD'] as const;

export function Study() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [activeFaculty, setActiveFaculty] = useState<Faculty | null>(null);
  const [levelFilter, setLevelFilter] = useState<string>('All');

  const allProgrammes = faculties.flatMap((f) =>
    f.programs.map((p) => ({ ...p, facultyName: f.shortName, facultyId: f.id }))
  );

  const filteredProgrammes =
    levelFilter === 'All'
      ? allProgrammes
      : allProgrammes.filter((p) => p.level === levelFilter);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.study}
        eyebrow="Academics"
        title={<>Programmes at <em>AVIU</em></>}
        subtitle="Accredited Bachelor programmes across Education, Business & ICT, Nursing & Health Sciences, and Social Sciences. Research-oriented teaching, practical placements and clear pathways. PhD programmes coming soon. Download programme guides from the Downloads page."
      />

      <MomentsStrip keys={['camStage','camRibbon','class2026']} eyebrow="New programme launch" title="Complementary and Alternative Medicine" />

      <section className="section-pad">
        <p style={{ maxWidth: 760, marginBottom: 28, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          Avance International University (AVIU) offers a focused portfolio of Bachelor-level programmes accredited for delivery at our Nabweru campus in Wakiso District, Kampala region. Each programme includes structured teaching, continuous assessment, and opportunities for practical experience. Detailed module outlines and course materials are provided to enrolled students; overview guides are available under Downloads. Tuition fee schedules are coming soon — contact Admissions for current guidance. Doctoral (PhD) programmes are under development and will be announced on the Research pages.
        </p>
        <p style={{ maxWidth: 760, marginBottom: 28, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
          <strong>NCHE accreditation:</strong> Programmes shown below are aligned with accreditation by the National Council for Higher Education (NCHE). Verify institutions and programmes at{' '}
          <a href="https://unche.or.ug/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-600)' }}>unche.or.ug</a>.
        </p>
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Our Faculties
            </div>
            <h2>
              Four faculties. <em>Endless possibility.</em>
            </h2>
          </div>
        </div>
        <div className="faculty-grid">
          {faculties.map((faculty, index) => (
            <article
              className="faculty-card"
              key={faculty.id}
              onClick={() => setActiveFaculty(faculty)}
            >
              <span className="school-index">0{index + 1}</span>
              <faculty.icon size={28} strokeWidth={1.5} />
              <strong>{faculty.name}</strong>
              <p>{faculty.description}</p>
              <div className="faculty-meta">
                <span className="faculty-level">{faculty.level}</span>
                <span className="faculty-count">{faculty.programs.length} programmes</span>
              </div>
              <ArrowRight className="school-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> All Programs
            </div>
            <h2>
              Browse our <em>full program catalogue.</em>
            </h2>
          </div>
        </div>
        <div className="news-filters">
          {levelFilters.map((level) => (
            <button
              key={level}
              className={`filter-chip ${levelFilter === level ? 'chip-active' : ''}`}
              onClick={() => setLevelFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="programme-catalogue">
          {filteredProgrammes.map((prog, index) => (
            <article className="programme-row" key={`${prog.name}-${index}`}>
              <div className="programme-row-main">
                <strong>{prog.name}</strong>
                <span className="programme-faculty-tag">{prog.facultyName}</span>
              </div>
              <p className="programme-desc">{prog.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">{prog.level}</span>
                <span className="programme-duration"><Clock size={12} /> {prog.duration}</span>
                {prog.discipline && <span className="programme-level-tag">{prog.discipline}</span>}
                {prog.lastAccreditation && (
                  <span className="programme-duration">NCHE accred. {prog.lastAccreditation} · review {prog.reviewYear}</span>
                )}
                {prog.campus && <span className="programme-duration">{prog.campus}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Programme Details
            </div>
            <h2>
              Explore by <em>faculty.</em>
            </h2>
          </div>
        </div>
        <div className="programme-list">
          {faculties.map((faculty) => (
            <div className="programme-faculty" key={faculty.id}>
              <div className="programme-faculty-header">
                <faculty.icon size={20} strokeWidth={1.5} />
                <h3>{faculty.name}</h3>
              </div>
              <p className="faculty-long-desc">{faculty.longDescription}</p>
              <ul>
                {faculty.programs.map((program) => (
                  <li key={program.name}>
                    <span className="programme-bullet">
                      <Check size={13} />
                    </span>
                    <div className="programme-list-item">
                      <span className="programme-list-name">{program.name}</span>
                      <span className="programme-list-meta">
                        {program.level} · {program.duration}
                        {program.lastAccreditation ? ` · NCHE ${program.lastAccreditation} (review ${program.reviewYear})` : ''}
                      </span>
                      {program.description && <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65}}>{program.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      
      <section className="section-pad" id="graduate-studies">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Graduate Studies</div>
            <h2>Postgraduate &amp; <em>doctoral pathways.</em></h2>
          </div>
        </div>
        <p style={{ maxWidth: 760, marginBottom: 20, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
          AVIU is expanding graduate education under NCHE programme development processes.
          Postgraduate diplomas and further awards are developed faculty by faculty.
          <strong> PhD by research programmes are coming soon</strong> — register interest via the Research Office.
          Graduate study aligns with the university&apos;s CEBAT-informed focus on competence, enterprise, and applied learning.
        </p>
        <div className="grid-3" style={{ gap: 16, marginBottom: 20 }}>
          {[
            { t: 'Postgraduate pathways', d: 'Diploma-to-degree upgrades and emerging PG awards. Confirm current offers with Admissions.', path: '/programs/postgraduate' },
            { t: 'Research & conferences', d: 'Annual Research Conference, Innovation Fair, centres and publication routes.', path: '/research' },
            { t: 'PhD opportunities', d: 'Doctoral recruitment status and how to register interest.', path: '/research/phd-opportunities' },
          ].map((x) => (
            <button key={x.t} type="button" className="info-card" style={{ padding: 20, textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(x.path)}>
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.t}</strong>
              <span style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{x.d}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Ready to apply?
          </div>
          <h2>Start your journey.</h2>
          <p>Applications are now open for all intakes — January, May, and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>

      {activeFaculty && (
        <div className="modal-backdrop" onClick={() => setActiveFaculty(null)}>
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveFaculty(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <activeFaculty.icon size={32} strokeWidth={1.5} />
            <h3>{activeFaculty.name}</h3>
            <p className="modal-desc">{activeFaculty.longDescription}</p>
            <div className="modal-programmes">
              <strong>Programmes offered:</strong>
              <ul>
                {activeFaculty.programs.map((p) => (
                  <li key={p.name}>
                    <Check size={14} /> {p.name}{' '}
                    <span className="modal-prog-meta">
                      — {p.level}, {p.duration}
                      {p.lastAccreditation ? ` · NCHE ${p.lastAccreditation}` : ''}
                    </span>
                    <span style={{ display: 'block', fontSize: 13, color: 'var(--ink-soft)', marginLeft: 22, marginTop: 2 }}>{p.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="button button-primary"
              onClick={() => {
                setActiveFaculty(null);
                openApply();
              }}
            >
              Apply to this faculty <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
