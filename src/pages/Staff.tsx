import { useState } from 'react';
import { Search, Users } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { staffDirectory } from '@/data/staffDirectory';

export function Staff() {
  const [search, setSearch] = useState('');

  const allDepts = Array.from(new Set(staffDirectory.map((s) => s.dept)));
  const [activeDept, setActiveDept] = useState('All');

  const filtered = staffDirectory.filter((s) => {
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || s.name.toLowerCase().includes(term) || s.role.toLowerCase().includes(term);
    const matchesDept = activeDept === 'All' || s.dept === activeDept;
    return matchesSearch && matchesDept;
  });

  const grouped = filtered.reduce((acc: any, member: any) => {
    if (!acc[member.dept]) acc[member.dept] = [];
    acc[member.dept].push(member);
    return acc;
  }, {});

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '60px' }}>
      <SubPageHero
        images={pageImages.about}
        eyebrow="Our People"
        title={<>Staff <em>Directory</em></>}
        subtitle={`${staffDirectory.length} dedicated academic and administrative staff members serving across ${allDepts.length} departments and units.`}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Staff', path: '/staff' },
        ]}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#3d1a6b' }}>{staffDirectory.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Staff</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#3d1a6b' }}>{allDepts.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Departments</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#3d1a6b' }}>21+</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PhD Holders</div>
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <Search size={20} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
          <input
            type="text"
            placeholder="Search staff by name or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '10px', border: '1px solid #e0d4ee', fontSize: '15px', outline: 'none', background: '#fff' }}
          />
        </div>

        {/* DEPARTMENT FILTERS */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <button
            onClick={() => setActiveDept('All')}
            style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, background: activeDept === 'All' ? '#3d1a6b' : '#fff', color: activeDept === 'All' ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            All Departments
          </button>
          {allDepts.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, background: activeDept === dept ? '#3d1a6b' : '#fff', color: activeDept === dept ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
            >
              {dept}
            </button>
          ))}
        </div>

        <p style={{ color: '#8a7fa0', fontSize: '14px', marginBottom: '24px' }}>
          Showing <strong style={{ color: '#3d1a6b' }}>{filtered.length}</strong> of {staffDirectory.length} staff members
        </p>

        {/* GROUPED STAFF BY DEPARTMENT */}
        {Object.keys(grouped).map((dept) => (
          <div key={dept} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', color: '#2d1454', margin: '0 0 16px', paddingBottom: '12px', borderBottom: '2px solid #3d1a6b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={20} color="#3d1a6b" />
              {dept}
              <span style={{ fontSize: '13px', color: '#8a7fa0', fontWeight: 400, marginLeft: 'auto' }}>
                {grouped[dept].length} {grouped[dept].length === 1 ? 'member' : 'members'}
              </span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {grouped[dept].map((member: any) => (
                <div key={member.name} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e0d4ee' }}>
                  <h3 style={{ fontSize: '15px', color: '#2d1454', margin: '0 0 6px', fontWeight: 700 }}>{member.name}</h3>
                  <p style={{ fontSize: '13px', color: '#3d1a6b', margin: 0, fontWeight: 600 }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8a7fa0' }}>
            <Users size={40} style={{ margin: '0 auto 12px', opacity: 0.4 }} />
            <p style={{ fontSize: '18px' }}>No staff match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
