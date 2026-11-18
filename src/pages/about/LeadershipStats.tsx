import { Users, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import { StaffDirectory } from '@/components/StaffDirectory';
import { staffDirectory } from '@/data/staffDirectory';

export function LeadershipStats() {
  return (
    <div className="page-content" style={{ background: '#f9f6fd', paddingBottom: '60px' }}>
      
      <section style={{ 
        position: 'relative', 
        backgroundImage: 'linear-gradient(rgba(61,26,107,0.85), rgba(61,26,107,0.85)), url(/images/programmes-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: '#fff', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Playfair Display', serif", margin: 0 }}>Leadership & Institutional Stats</h1>
        <p style={{ opacity: 0.9, marginTop: 12, fontSize: 18, maxWidth: 600, margin: '12px auto 0' }}>Data-driven insights into the academic structure of AVIU.</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '-40px auto 40px', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', position: 'relative', zIndex: 10 }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#f0e8fa', padding: '16px', borderRadius: '50%', color: '#3d1a6b' }}><Users size={28} /></div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#2d1454' }}>{staffDirectory.length}</div>
            <div style={{ fontSize: '14px', color: '#8a7fa0', fontWeight: 600 }}>Total Staff Members</div>
          </div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#f0e8fa', padding: '16px', borderRadius: '50%', color: '#3d1a6b' }}><GraduationCap size={28} /></div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#2d1454' }}>21</div>
            <div style={{ fontSize: '14px', color: '#8a7fa0', fontWeight: 600 }}>PhD Holders</div>
          </div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#f0e8fa', padding: '16px', borderRadius: '50%', color: '#3d1a6b' }}><BookOpen size={28} /></div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#2d1454' }}>40+</div>
            <div style={{ fontSize: '14px', color: '#8a7fa0', fontWeight: 600 }}>Accredited Programmes</div>
          </div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#f0e8fa', padding: '16px', borderRadius: '50%', color: '#3d1a6b' }}><Briefcase size={28} /></div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#2d1454' }}>7</div>
            <div style={{ fontSize: '14px', color: '#8a7fa0', fontWeight: 600 }}>Faculties & Schools</div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#2d1454', fontSize: '32px', fontFamily: "'Playfair Display', serif", margin: 0 }}>Full Staff Directory</h2>
          <p style={{ color: '#8a7fa0', marginTop: 10 }}>Search for any of our {staffDirectory.length} staff members by name, role, or department.</p>
        </div>
        <StaffDirectory />
      </section>

    </div>
  );
}
