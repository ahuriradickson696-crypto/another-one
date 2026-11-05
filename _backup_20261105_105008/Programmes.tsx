import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { programmesData } from '@/data/programmes';

export function Programmes() {
  const [search, setSearch] = useState('');
  const [facultyFilter, setFacultyFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');

  const filteredProgs = programmesData.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || (p.description && p.description.toLowerCase().includes(search.toLowerCase()));
    const matchesFaculty = facultyFilter === 'All' || p.faculty === facultyFilter;
    const matchesLevel = levelFilter === 'All' || p.level === levelFilter;
    return matchesSearch && matchesFaculty && matchesLevel;
  });

  return (
    <div className="page-content" style={{ background: '#f9f6fd', paddingBottom: '80px' }}>
      <section className="section-pad" style={{ background: '#2d1454', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Playfair Display', serif", margin: 0 }}>Our Programmes</h1>
        <p style={{ opacity: 0.8, marginTop: 12, fontSize: 18 }}>Accredited programmes across our four faculties.</p>
      </section>

      <section style={{ maxWidth: '1100px', margin: '40px auto 0', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
            <input type="text" placeholder="Search programmes..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '8px', border: '1px solid #e0d4ee', outline: 'none' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
          {['All', 'Education & Humanities', 'Business & ICT', 'Health Sciences', 'Social Sciences'].map(f => (
            <button key={f} onClick={() => setFacultyFilter(f)} style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, background: facultyFilter === f ? '#3d1a6b' : '#fff', color: facultyFilter === f ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
          {['All', 'Certificate', 'Diploma', 'Bachelor', 'Masters', 'PhD'].map(l => (
            <button key={l} onClick={() => setLevelFilter(l)} style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #e0d4ee', cursor: 'pointer', fontSize: '12px', fontWeight: 600, background: levelFilter === l ? '#f0e8fa' : '#fff', color: '#3d1a6b' }}>{l}</button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '30px', color: '#8a7fa0' }}>
          Showing {filteredProgs.length} of {programmesData.length} programmes
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {filteredProgs.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#8a7fa0' }}>No results found</div>
          ) : (
            filteredProgs.map((p, i) => (
              <div key={i} style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e0d4ee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#3d1a6b', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>
                  <BookOpen size={16} /> {p.level}
                </div>
                <h3 style={{ color: '#2d1454', fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>{p.name}</h3>
                <p style={{ color: '#5a4b6b', fontSize: '14px', margin: '0 0 16px' }}>{p.faculty} · {p.duration}</p>
                {p.description && <p style={{ color: '#8a7fa0', fontSize: '13px', margin: 0 }}>{p.description}</p>}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
