import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function Teachers() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Outreach"
        title={<>Teachers &amp; <em>counsellors</em></>}
        subtitle="Partner with AVIU to guide secondary students into NCHE-accredited Bachelor programmes."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Teachers', path: '/teachers' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Career teachers and school counsellors are essential partners. Share accurate information on programmes, intakes and entry requirements so learners choose pathways that fit their strengths.
            </p>
            <p className="body-text">
              AVIU admits in <strong>January, May and August</strong>. Education degrees prepare future teachers; other faculties open routes into business, ICT, nursing and social services.
            </p>
          </div>
          <img src="/images/classroom-anatomy.jpg" alt="Teaching and learning" className="media-img" />
        </div>
        <div className="info-card" style={{ padding: 24, marginBottom: 28 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 18}}>Checklist for advising sessions</h3>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
            <li>Programme list on the Study page / prospectus PDF</li>
            <li>Entry Requirements and mature-age notes</li>
            <li>Intake calendar (Jan / May / Aug)</li>
            <li>Open day or campus visit booking</li>
            <li>Application checklist and contact numbers</li>
            <li>Fees: direct students to Admissions/Bursar (schedules coming soon on site)</li>
          </ul>
        </div>
        <img src="/images/classroom-students.jpg" alt="Students learning" className="media-img" style={{ marginBottom: 24 }} />
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 16 }}>
          Request a school visit or bulk prospectus copies via info@aviu.ac.ug with your school name, district and preferred dates.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/downloads')}>Downloads</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/open-days')}>Open days</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/prospective/undergraduates')}>Undergraduate guide</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions/entry-requirements')}>Entry requirements</button>
        </div>
      </section>
    </div>
  );
}
