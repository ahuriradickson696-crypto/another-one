import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';

type Member = {
  name: string;
  role: string;
  initials?: string;
  tier: 'executive' | 'cabinet' | 'grc';
};

const GUILD_CABINET: Member[] = [
  // Executive
  { name: 'HE. Muhumuza Muhusin', role: 'Guild President', initials: 'MM', tier: 'executive' },
  { name: 'Hon. Kasande Evas Verina', role: 'Vice President', initials: 'KV', tier: 'executive' },
  { name: 'Hon. Wasswa Hassan', role: 'Guild Speaker', initials: 'WH', tier: 'executive' },
  { name: 'Hon. Mirembe Rashidah', role: 'Deputy Speaker', initials: 'MR', tier: 'executive' },
  { name: 'Hon. Bujasi James', role: 'Prime Minister', initials: 'BJ', tier: 'executive' },
  { name: 'Hon. Ahabwe Alvin', role: 'Deputy Prime Minister', initials: 'AA', tier: 'executive' },
  { name: 'Hon. Nakabugo Maria Ritah', role: 'Guild Clerk', initials: 'NM', tier: 'executive' },

  // Cabinet Ministers
  { name: 'Hon. Lukwago Racheal', role: 'Finance Minister', initials: 'LR', tier: 'cabinet' },
  { name: 'Hon. Atwijukire Corad', role: 'Minister for Internal Affairs', initials: 'AC', tier: 'cabinet' },
  { name: 'Hon. Namirimu Hafiswa', role: 'Information Minister', initials: 'NH', tier: 'cabinet' },
  { name: 'Hon. Babirye Sandra', role: 'Minister for Justice & Constitutional Affairs', initials: 'BS', tier: 'cabinet' },
  { name: 'Hon. Talemwa Godfry', role: 'Minister for Health', initials: 'TG', tier: 'cabinet' },
  { name: 'Hon. Bakunzi Brian', role: 'Sports Minister', initials: 'BB', tier: 'cabinet' },
  { name: 'Hon. Tibelta Chrispus', role: 'Minister of Disciplinary Affairs', initials: 'TC', tier: 'cabinet' },
  { name: 'Hon. Tusiime Mackline', role: 'Minister for External Affairs', initials: 'TM', tier: 'cabinet' },
  { name: 'Hon. Mabiriizi Asuman', role: 'Entertainment Minister', initials: 'MA', tier: 'cabinet' },
  { name: 'Hon. Nalubega Genevieve', role: 'Minister for Gender & Integrity', initials: 'NG', tier: 'cabinet' },
  { name: 'Hon. Sengendo Micheal', role: 'Religious Minister', initials: 'SM', tier: 'cabinet' },

  // GRC — Government Representative Council
  { name: 'Hon. Ankwasize Annet', role: 'GRC — Day Students', initials: 'AA', tier: 'grc' },
  { name: 'Hon. Tenywa Faizo', role: 'GRC — In-Service Students', initials: 'TF', tier: 'grc' },
  { name: 'Hon. Naluwu Hindu', role: 'GRC — Business & IT Faculty', initials: 'NH', tier: 'grc' },
  { name: 'Hon. Kasozi Valetine', role: 'GRC — Weekend Students', initials: 'KV', tier: 'grc' },
  { name: 'Hon. Clariton', role: 'Students Representative', initials: 'C', tier: 'grc' },
];

export function GuildCabinet() {
  const renderCard = (member: Member, featured = false) => (
    <div
      key={`${member.name}-${member.role}`}
      style={{
        background: featured ? 'linear-gradient(135deg, #2d1454 0%, #4c1d95 100%)' : '#fff',
        color: featured ? '#fff' : '#2d1454',
        borderRadius: '16px',
        padding: '24px 20px',
        border: featured ? 'none' : '1px solid #e0d4ee',
        boxShadow: featured ? '0 12px 32px rgba(45,20,84,0.18)' : '0 4px 15px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.2s',
      }}
    >
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: featured ? 'rgba(255,255,255,0.18)' : '#f0e8fa',
        color: featured ? '#fff' : '#3d1a6b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: 800,
        marginBottom: '14px',
        letterSpacing: '0.5px',
      }}>
        {member.initials}
      </div>
      <h3 style={{
        fontSize: '16px',
        margin: '0 0 6px',
        fontWeight: 700,
        lineHeight: 1.3,
        color: featured ? '#fff' : '#2d1454',
      }}>
        {member.name}
      </h3>
      <p style={{
        fontSize: '12px',
        color: featured ? '#c4b5fd' : '#8a7fa0',
        margin: 0,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        lineHeight: 1.4,
      }}>
        {member.role}
      </p>
    </div>
  );

  const executive = GUILD_CABINET.filter((m) => m.tier === 'executive');
  const cabinet = GUILD_CABINET.filter((m) => m.tier === 'cabinet');
  const grc = GUILD_CABINET.filter((m) => m.tier === 'grc');

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '60px' }}>
      <SubPageHero
        images={pageImages.about}
        eyebrow="Student Government"
        title={<>AVIU <em>Guild Cabinet</em></>}
        subtitle="Elected student leaders representing every faculty, programme and residence hall. Serving the student body for the 2025/2026 academic year."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Life', path: '/student-life' },
          { label: 'Guild Cabinet', path: '/student-life/guild' },
        ]}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>

        {/* Executive */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>
            Executive
          </p>
          <h2 style={{ fontSize: '32px', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
            Guild <em>Executive</em>
          </h2>
          <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The President, Vice President, Speaker, Prime Minister and Clerk lead the Guild Government.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {executive.map((m, i) => renderCard(m, i === 0))}
        </div>

        {/* Cabinet Ministers */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>
            Cabinet
          </p>
          <h2 style={{ fontSize: '32px', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
            Cabinet <em>Ministers</em>
          </h2>
          <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Ministers responsible for finance, information, health, sports, discipline, gender and external affairs.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {cabinet.map((m) => renderCard(m))}
        </div>

        {/* GRC */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>
            Representatives
          </p>
          <h2 style={{ fontSize: '32px', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
            Government <em>Representative Council</em>
          </h2>
          <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Faculty, day, weekend and in-service representatives who voice student concerns to the Guild Cabinet.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {grc.map((m) => renderCard(m))}
        </div>

        {/* Contact / Footer citation */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #e0d4ee',
          textAlign: 'center',
        }}>
          <p style={{ color: '#5a4b6b', fontSize: '14px', margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: '#2d1454' }}>Source:</strong> AVIU 5th Graduation Book 2026, pages 4–5 (Guild Cabinet).{' '}
            For updates or corrections, contact the Dean of Students at{' '}
            <a href="mailto:info@aviu.ac.ug" style={{ color: '#3d1a6b', fontWeight: 600 }}>info@aviu.ac.ug</a>.
          </p>
        </div>

      </div>
    </div>
  );
}