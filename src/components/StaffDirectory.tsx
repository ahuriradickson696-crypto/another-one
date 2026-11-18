import { useState } from 'react';
import { staffDirectory } from '@/data/staffDirectory';

export function StaffDirectory() {
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState('All');
  
  const departments = ['All', 'Management', 'Education', 'Business & ICT', 'Health Sciences', 'Engineering', 'Law', 'Support'];
  
  const filteredStaff = staffDirectory.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(search.toLowerCase()) || staff.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = activeDept === 'All' || staff.dept === activeDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '30px', justifyContent: 'center' }}>
        <input type="text" placeholder="Search by name or role..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #e0d4ee', width: '100%', maxWidth: '400px', fontSize: '15px' }} />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {departments.map(dept => (
            <button key={dept} onClick={() => setActiveDept(dept)} style={{ padding: '10px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, background: activeDept === dept ? '#3d1a6b' : '#f0e8fa', color: activeDept === dept ? '#fff' : '#3d1a6b', transition: 'all 0.2s' }}>
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ overflowX: 'auto', maxHeight: '600px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ position: 'sticky', top: 0, background: '#3d1a6b', color: '#fff', zIndex: 1 }}>
              <tr>
                <th style={{ padding: '16px', fontSize: '14px' }}>Name</th>
                <th style={{ padding: '16px', fontSize: '14px' }}>Role / Title</th>
                <th style={{ padding: '16px', fontSize: '14px' }}>Department</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.length > 0 ? (
                filteredStaff.map((staff, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0e8fa', background: i % 2 === 0 ? '#fff' : '#f9f6fd' }}>
                    <td style={{ padding: '16px', fontWeight: 600, color: '#2d1454' }}>{staff.name}</td>
                    <td style={{ padding: '16px', color: '#5a4b6b' }}>{staff.role}</td>
                    <td style={{ padding: '16px', color: '#5a4b6b' }}><span style={{ background: '#f0e8fa', padding: '4px 10px', borderRadius: '99px', fontSize: '12px', fontWeight: 600 }}>{staff.dept}</span></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ padding: '40px', textAlign: 'center', color: '#8a7fa0' }}>No staff found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
