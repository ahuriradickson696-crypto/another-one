import { useState } from 'react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { staffMembers } from '@/data/university';
import { Users, Award, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

export function Leadership() {
  const administrative = staffMembers.filter((s: any) => s.category === 'Administrative');
  const academic = staffMembers.filter((s: any) => s.category === 'Academic' || s.category === 'Academics');
  const deans = staffMembers.filter((s: any) => s.role && s.role.includes('Dean'));
  const hods = staffMembers.filter((s: any) => s.role && s.role.includes('HOD'));
  const directors = staffMembers.filter((s: any) => s.role && s.role.includes('Director'));
  const coordinators = staffMembers.filter((s: any) => s.role && s.role.includes('Coordinator'));

  const chartData = [
    { label: 'Executive', count: administrative.length, color: '#2d1454' },
    { label: 'Deans', count: deans.length, color: '#3d1a6b' },
    { label: 'Directors', count: directors.length, color: '#4c1d95' },
    { label: 'HODs', count: hods.length, color: '#5b21b6' },
    { label: 'Coordinators', count: coordinators.length, color: '#6d28d9' },
    { label: 'Academic Staff', count: academic.length, color: '#7c3aed' },
  ];

  const maxCount = Math.max(...chartData.map((d) => d.count), 1);

  const renderCard = (member: any, featured = false) => (
    <div
      key={member.name + member.role}
      style={{
        background: featured ? '#2d1454' : '#fff',
        color: featured ? '#fff' : '#2d1454',
        borderRadius: '16px',
        padding: '24px',
        border: featured ? 'none' : '1px solid #e0d4ee',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.2s',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: featured ? 'rgba(255,255,255,0.15)' : '#f0e8fa',
          color: featured ? '#fff' : '#3d1a6b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 800,
          marginBottom: '16px',
        }}
      >
        {member.initials || member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
      </div>
      <h3 style={{ fontSize: '17px', margin: '0 0 6px', fontWeight: 700, lineHeight: 1.3 }}>
        {member.name}
      </h3>
      <p style={{ fontSize: '13px', color: featured ? '#c4b5fd' : '#8a7fa0', margin: '0 0 4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {member.role}
      </p>
      {member.qualification && (
        <p style={{ fontSize: '12px', color: featured ? '#a78bfa' : '#5a4b6b', margin: '4px 0 0' }}>
          {member.qualification}
        </p>
      )}
    </div>
  );

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '60px' }}>
      <SubPageHero
        images={pageImages.about}
        eyebrow="About AVIU"
        title={<>Leadership &amp; <em>Governance</em></>}
        subtitle="Guided by NCHE standards, our leadership team brings decades of academic, administrative and industry expertise to steer AVIU's mission."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Leadership', path: '/about/leadership' },
        ]}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>

        {/* KEY STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '50px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <Users size={32} color="#3d1a6b" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#3d1a6b' }}>{staffMembers.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Staff</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <GraduationCap size={32} color="#3d1a6b" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#3d1a6b' }}>{deans.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Faculty Deans</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <Briefcase size={32} color="#3d1a6b" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#3d1a6b' }}>{hods.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>HODs</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <Award size={32} color="#3d1a6b" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#3d1a6b' }}>{directors.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Directors</div>
          </div>
        </div>

        {/* CHART: STAFF DISTRIBUTION */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', marginBottom: '50px', border: '1px solid #e0d4ee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <TrendingUp size={24} color="#3d1a6b" />
            <h2 style={{ fontSize: '22px', color: '#2d1454', margin: 0, fontFamily: "'Playfair Display', serif" }}>
              Staff Distribution by Role
            </h2>
          </div>

          {/* Horizontal bar chart */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {chartData.map((item, i) => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '14px', color: '#2d1454', fontWeight: 600 }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '13px', color: '#8a7fa0' }}>
                    {item.count} {item.count === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <div style={{ height: '28px', background: '#f0e8fa', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${(item.count / maxCount) * 100}%`,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '12px',
                      transition: 'width 0.8s ease',
                      minWidth: item.count > 0 ? '40px' : '0',
                    }}
                  >
                    {item.count > 0 && (
                      <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #f0e8fa' }}>
            {chartData.map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: item.color }} />
                <span style={{ fontSize: '12px', color: '#5a4b6b' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE LEADERSHIP */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
            Executive Leadership
          </p>
          <h2 style={{ fontSize: '32px', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
            The people steering AVIU
          </h2>
          <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Appointed by the University Council and Board of Directors, in accordance with the Universities and Other Tertiary Institutions Act.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {administrative.slice(0, 9).map((member: any, idx: number) => renderCard(member, idx === 1))}
        </div>

        {/* FACULTY DEANS */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#3d1a6b', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
            Academic Leadership
          </p>
          <h2 style={{ fontSize: '32px', color: '#2d1454', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
            Deans of Faculties
          </h2>
          <p style={{ color: '#5a4b6b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Senior academics responsible for curriculum, research, and academic quality within their faculties.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {deans.map((member: any) => renderCard(member))}
        </div>

      </div>
    </div>
  );
}
