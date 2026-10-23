import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';
import { MomentsStrip } from '@/components/MomentsStrip';

export function Media() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Media"
        title={<>Media <em>centre</em></>}
        subtitle="Facts, contacts and story leads for journalists covering Avance International University."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Media', path: '/media' }]}
      />

      <MomentsStrip keys={['partnership','camStage','celebrating','dignitaries']} eyebrow="Media" title="Photos from recent events" />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>About AVIU (boilerplate)</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
              Avance International University (AVIU) is a private university located at Nabweru, Wakiso District, Uganda. It is accredited by the National Council for Higher Education (NCHE) and offers Bachelor programmes in Education &amp; Humanities, Business Administration &amp; ICT, Nursing &amp; Health Sciences, and Social &amp; Behavioural Sciences. The university admits students in <strong>January, May and August</strong> each year and operates an e-learning platform for enrolled learners.
            </p>
          </div>
          <img src="/images/graduation-ceremony.jpg" alt="Graduation ceremony" className="media-img" />
        </div>

        <div className="info-card" style={{ padding: 24, marginBottom: 28 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 18}}>Press desk</h3>
          <p style={{ margin: '0 0 8px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Email: <a href={'mailto:' + universityInfo.email} style={{ color: 'var(--purple-600)' }}>{universityInfo.email}</a>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Phone: {universityInfo.phone} / {universityInfo.phoneAlt}
          </p>
          <p className="body-small">
            Please include your outlet, deadline and topic. Campus filming requires prior written approval and coordination with security.
          </p>
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Story areas</div>
            <h2>Frequent media <em>angles.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 14, marginBottom: 28 }}>
          {[
            'Admissions and intake announcements (Jan / May / Aug)',
            'Graduation ceremonies and alumni outcomes',
            'Nursing simulation and health training',
            'Education and teacher preparation',
            'Student innovation and research conference',
            'Community engagement in Wakiso',
            'Leadership appointments and governance',
            'Partnerships and MoUs',
            'NCHE quality and programme accreditation context',
          ].map((t) => (
            <div key={t} className="info-card" style={{ padding: 16, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{t}</div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          <img src="/images/board-meeting.jpg" alt="Leadership meeting" className="media-img" />
          <img src="/images/graduates-laughing.jpg" alt="Graduates celebrating" className="media-img" />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/news')}>News room</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/events')}>Events</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/gallery')}>Photo &amp; video gallery</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about')}>About AVIU</button>
        </div>
      </section>
    </div>
  );
}
