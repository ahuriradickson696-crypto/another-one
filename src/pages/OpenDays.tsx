import { Calendar, MapPin, Users, Clock, BookOpen, Phone } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const agenda = [
  { time: 'Morning', title: 'Registration & welcome', detail: 'Check-in at reception, welcome pack, short introduction to AVIU mission, NCHE accreditation and Nabweru campus.' },
  { time: 'Mid-morning', title: 'Faculty programme sessions', detail: 'Parallel talks for Education, Business & ICT, Nursing and Social Sciences — courses, careers and entry tips.' },
  { time: 'Late morning', title: 'Campus walking tour', detail: 'Teaching rooms, nursing simulation areas, library, student services and outdoor spaces with student ambassadors.' },
  { time: 'Midday', title: 'Admissions clinic', detail: 'January, May and August intakes; documents; how to apply online or on campus; scholarships guidance.' },
  { time: 'Afternoon', title: 'Student life & Q&A', detail: 'Guild, clubs, accommodation options, e-learning portal and open questions with staff and students.' },
];

const tips = [
  'Bring copies of academic results if you want an informal eligibility chat.',
  'Parents and school counsellors are welcome.',
  'Wear comfortable shoes for the campus tour.',
  'Follow AVIU channels for the next confirmed open-day date.',
];

export function OpenDays() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Admissions"
        title={<>Open <em>Days</em></>}
        subtitle="Spend a day on campus. Meet faculty, tour facilities and plan your application for the January, May or August intake."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'Open Days', path: '/open-days' }]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 16 }}>
              Open days are designed for prospective undergraduates, diploma applicants, parents and teachers. You will see how AVIU combines classroom teaching, practical work and student support — and leave with clear next steps for application.
            </p>
            <p className="body-text">
              The official website highlights the <strong>August intake</strong> strongly each cycle, alongside <strong>January</strong> and <strong>May</strong> entry points. Open days are scheduled to help you meet those deadlines with confidence.
            </p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img className="media-img" src="/images/campus-aviu-students-1.jpg" alt="Students on AVIU campus" />
          </div>
        </div>

        <div className="grid-3" style={{ gap: 16, marginBottom: 40 }}>
          {[
            { icon: Calendar, label: 'When', text: 'Announced before major intakes on aviu.ac.ug, Events and social media. Booking recommended.' },
            { icon: MapPin, label: 'Where', text: 'Nabweru campus, 1 km off Nansana–Hoima Road, Wakiso District. Signage from the main road.' },
            { icon: Users, label: 'Who should come', text: 'S.6 leavers, diploma holders upgrading, mature applicants, parents and career teachers.' },
            { icon: Clock, label: 'Duration', text: 'Typically a half-day or full-day programme; exact times on your invitation.' },
            { icon: BookOpen, label: 'What to prepare', text: 'Questions about your preferred programme and a notebook; optional academic documents.' },
            { icon: Phone, label: 'Book', text: 'Call +256 700 670 691 / +256 766 751 763 or use Contact / Campus Visits.' },
          ].map((x) => (
            <div className="info-card" key={x.label} style={{ padding: 20 }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.label}</strong>
              <p className="body-small">{x.text}</p>
            </div>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Programme</div>
            <h2>Sample open-day <em>agenda.</em></h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 800, marginBottom: 36 }}>
          {agenda.map((a) => (
            <div key={a.title} className="info-card" style={{ padding: 18, display: 'grid', gridTemplateColumns: '100px 1fr', gap: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple-600)', textTransform: 'uppercase' }}>{a.time}</span>
              <div>
                <strong>{a.title}</strong>
                <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          <img src="/images/lab-microscope.jpg" alt="Laboratory facilities" className="media-img" />
          <img src="/images/guest-lecture.jpg" alt="Guest lecture session" className="media-img" />
        </div>

        <div className="info-card" style={{ padding: 24, marginBottom: 28 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 18}}>Tips for a useful visit</h3>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
            {tips.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/admissions/campus-visits')}>Campus visits</button>
          <button type="button" className="btn btn-outline" onClick={() => openApply()}>Apply online</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/prospective/undergraduates')}>Undergraduate guide</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact')}>Contact Admissions</button>
        </div>
      </section>
    </div>
  );
}
