import { Briefcase, FlaskConical, Users, Handshake, Award, Building2 } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { MomentsStrip } from '@/components/MomentsStrip';

export function Business() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Partnerships"
        title={<>Business &amp; <em>industry</em></>}
        subtitle="Partner with AVIU on talent pipelines, applied research, consultancy and community impact."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Business', path: '/business' }]}
      />

      <MomentsStrip keys={['partnership','dignitaries']} eyebrow="Partnerships" title="Strategic partnership launch" />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <p className="body-text">
              Organisations work with Avance International University to access emerging talent, co-design projects and tap faculty expertise across business, ICT, education, nursing and social development.
            </p>
            <p className="body-text">
              Engagements range from short guest lectures and internship host arrangements to formal MoUs and consultancy assignments via the AVIU Consultancy Bureau.
            </p>
          </div>
          <img src="/images/mou-signing.jpg" alt="Partnership MoU signing" className="media-img" />
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          {[
            { icon: Users, title: 'Talent & internships', text: 'Host industrial training and recruit graduates from Accounting, Business Administration, IT, Computer Science, Education, Nursing, Social Work and related programmes. Share role profiles with Career Services or faculty offices.' },
            { icon: FlaskConical, title: 'Research collaboration', text: 'Sponsor applied studies, contribute data or co-supervise student projects. Present findings at the Annual Research Conference and Innovation Fair.' },
            { icon: Briefcase, title: 'Consultancy Bureau', text: 'Commission short studies, training or advisory work through the university consultancy structure supported by academic departments.' },
            { icon: Handshake, title: 'MoUs & strategic partners', text: 'Formalise multi-year cooperation on training, curriculum input, equipment support or community programmes. Routed via University Secretary / management.' },
            { icon: Award, title: 'Events & visibility', text: 'Exhibit at innovation events, offer prizes for student competitions or sponsor public symposia aligned with your CSR goals.' },
            { icon: Building2, title: 'Facilities & short courses', text: 'Discuss use of campus spaces for professional workshops subject to scheduling and university policy.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 22 }}>
              <x.icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 8 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          <img src="/images/partnership-bathspa.jpg" alt="Partnership event" className="media-img" />
          <img src="/images/conference-audience.jpg" alt="Conference audience" className="media-img" />
        </div>

        <div className="info-card" style={{ padding: 24, marginBottom: 24 }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 18}}>Start a conversation</h3>
          <p className="body-small">
            Email info@aviu.ac.ug with your organisation name, proposed activity and preferred timelines. You may also contact the relevant Dean or the Consultancy Bureau through Offices &amp; Directorates. All formal agreements follow university governance and procurement rules.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/offices')}>Offices &amp; Consultancy</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/research')}>Research</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/student-life/innovation-hub')}>Innovation Hub</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact')}>Contact</button>
        </div>
      </section>
    </div>
  );
}
