import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';

const guildMembers = [
  // Top Leadership
  { name: 'HE. Muhumuza Muhusin', role: 'Guild President', category: 'Executive' },
  { name: 'Hon. Bujasi James', role: 'Prime Minister', category: 'Executive' },
  { name: 'Hon. Wasswa Hassan', role: 'Guild Speaker', category: 'Parliament' },
  { name: 'Hon. Ahabwe Alvin', role: 'Deputy Prime Minister', category: 'Executive' },
  { name: 'Hon. Mirembe Rashidah', role: 'Deputy Speaker', category: 'Parliament' },
  { name: 'Hon. Kasande Evas Verina', role: 'Vice President', category: 'Executive' },
  
  // Ministers
  { name: 'Hon. Bakunzi Brian', role: 'Sports Minister', category: 'Ministers' },
  { name: 'Hon. Babiye Sandra', role: 'Min. for Justice & Constitutional Affairs', category: 'Ministers' },
  { name: 'Hon. Tibeita Chrispus', role: 'Minister of Disciplinary Affairs', category: 'Ministers' },
  { name: 'Hon. Tusime Mackline', role: 'Min. for External Affairs', category: 'Ministers' },
  { name: 'Hon. Lukwago Racheal', role: 'Finance Minister', category: 'Ministers' },
  { name: 'Hon. Atwijukire Corad', role: 'Minister for Internal Affairs', category: 'Ministers' },
  { name: 'Hon. Namirimu Hafiswa', role: 'Information Minister', category: 'Ministers' },
  { name: 'Hon. Talemwa Godfry', role: 'Minister for Health', category: 'Ministers' },
  { name: 'Hon. Mabiriizi Asuman', role: 'Entertainment Minister', category: 'Ministers' },
  { name: 'Hon. Nalubega Genevieve', role: 'Min. Gender & Integrity', category: 'Ministers' },
  { name: 'Hon. Sengendo Micheal', role: 'Religious Minister', category: 'Ministers' },
  
  // Representatives & Clerks
  { name: 'Hon. Nakabugo Maria Ritah', role: 'Guild Clerk', category: 'Parliament' },
  { name: 'Hon. Ankwasize Annnet', role: 'GRC Day Students', category: 'Representatives' },
  { name: 'Hon. Tenywa Faizo', role: 'GRC In-Service', category: 'Representatives' },
  { name: 'Hon. Naluwu Hindu', role: 'GRC Business & IT Faculty', category: 'Representatives' },
  { name: 'Hon. Kasozi Valetine', role: 'GRC Weekend Students', category: 'Representatives' },
  { name: 'Hon. Clarion', role: 'Students Representative', category: 'Representatives' },
];

export function GuildCabinet() {
  const getInitials = (name: string) => {
    return name.replace(/Hon\.|HE\./g, '').trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="page-content" style={{ background: '#f9f6fd', paddingBottom: '80px' }}>
      <SubPageHero
        images={pageImages.studentLife || pageImages.about}
        eyebrow="Student Leadership"
        title={<>The Guild <em>Cabinet</em></>}
        subtitle="Meet the elected student leaders of Avance International University for the 2026/2027 academic year."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Life', path: '/student-life' },
          { label: 'Guild Cabinet', path: '/guild' }
        ]}
      />

      <section className="section-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* EXECUTIVE COUNCIL */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif" }}>Guild Executive Council</h2>
            <div style={{ width: '60px', height: '3px', background: '#3d1a6b', margin: '16px auto' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {guildMembers.filter(m => m.category === 'Executive' || m.category === 'Parliament').map((member, i) => (
              <div key={i} style={{ background: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e0d4ee', transition: 'transform 0.3s' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #3d1a6b, #a78bfa)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 700, margin: '0 auto 20px', border: '4px solid #f0e8fa' }}>
                  {getInitials(member.name)}
                </div>
                <h3 style={{ color: '#2d1454', fontSize: '20px', fontWeight: 700, margin: '0 0 8px' }}>{member.name}</h3>
                <p style={{ color: '#8a7fa0', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MINISTERS */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif" }}>Guild Ministers</h2>
            <div style={{ width: '60px', height: '3px', background: '#3d1a6b', margin: '16px auto' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
            {guildMembers.filter(m => m.category === 'Ministers').map((member, i) => (
              <div key={i} style={{ background: '#fff', padding: '24px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #e0d4ee' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f0e8fa', color: '#3d1a6b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>
                  {getInitials(member.name)}
                </div>
                <div>
                  <h4 style={{ color: '#2d1454', fontSize: '16px', fontWeight: 700, margin: '0 0 4px' }}>{member.name}</h4>
                  <p style={{ color: '#8a7fa0', fontSize: '13px', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REPRESENTATIVES */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif" }}>Faculty & Student Representatives</h2>
            <div style={{ width: '60px', height: '3px', background: '#3d1a6b', margin: '16px auto' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
            {guildMembers.filter(m => m.category === 'Representatives').map((member, i) => (
              <div key={i} style={{ background: '#fff', padding: '24px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #e0d4ee' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f0e8fa', color: '#3d1a6b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>
                  {getInitials(member.name)}
                </div>
                <div>
                  <h4 style={{ color: '#2d1454', fontSize: '16px', fontWeight: 700, margin: '0 0 4px' }}>{member.name}</h4>
                  <p style={{ color: '#8a7fa0', fontSize: '13px', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
