import { Users, MapPin, Calendar, HandHeart, Building2, Stethoscope, BookOpen } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

const activities = [
  { icon: HandHeart, title: 'Community Engagement Day', detail: 'Campus-wide service in Nabweru and greater Kampala — health education, literacy support, environmental clean-ups and partnership activities with local leaders.' },
  { icon: Stethoscope, title: 'Health outreach', detail: 'Nursing and health sciences students participate in community health awareness under faculty supervision, aligned with professional training requirements.' },
  { icon: BookOpen, title: 'Education partnerships', detail: 'Education students undertake school practice and support activities in partner primary and secondary schools as part of teacher preparation.' },
  { icon: Users, title: 'Social work practice', detail: 'Social Work and Public Administration learners engage agencies and communities through supervised fieldwork placements.' },
  { icon: Building2, title: 'Institutional partnerships', detail: 'MoUs and collaborations with district authorities, facilities and industry partners expand placement and research opportunities.' },
  { icon: Calendar, title: 'Semester engagement chart', detail: 'Guild, faculties and Student Affairs schedule outreach windows each semester so service learning is planned, not ad hoc.' },
];

export function CommunityEngagement() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentLife || pageImages.home}
        eyebrow="Student Life"
        title={<>Community <em>Engagement</em></>}
        subtitle="Connecting AVIU teaching and research with Nabweru, Wakiso and wider Ugandan communities."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Life', path: '/student-life' },
          { label: 'Community Engagement', path: '/student-life/community-engagement' },
        ]}
      />

      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p className="body-text">
              Community engagement is embedded in AVIU’s mission to provide transformative higher education that meets societal needs. Students apply classroom learning in real settings; communities gain services and partnership.
            </p>
            <p className="body-text">
              Activities are guided by Community Engagement policies within the University Policy &amp; Legal Framework and by professional codes in Nursing, Education and Social Work.
            </p>
          </div>
          <img src="/images/campus-aviu-event-1.jpg" alt="Community and campus event" className="media-img" />
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 36 }}>
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div className="info-card" key={a.title} style={{ padding: 22 }}>
                <Icon size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
                <strong style={{ display: 'block', marginBottom: 6 }}>{a.title}</strong>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{a.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 28 }}>
          <img src="/images/medical-facility-tour.jpg" alt="Health training outreach context" className="media-img" />
          <img src="/images/mou-signing.jpg" alt="Community partnership agreement" className="media-img" />
        </div>

        <div className="info-card" style={{ padding: 24, marginBottom: 24 }}>
          <MapPin size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
          <h3 style={{ margin: '0 0 8px', fontSize: 18}}>Geography of impact</h3>
          <p className="body-small">
            Primary focus is Nabweru and Wakiso District, with activities extending into greater Kampala as programmes and partners require. International and regional collaborations are developed through research and formal MoUs.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/student-life/guild')}>Student Guild</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/about/policies')}>Engagement policies</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/business')}>Partner with AVIU</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/events')}>Events calendar</button>
        </div>
      </section>
    </div>
  );
}
