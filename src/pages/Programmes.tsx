import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { programmesData } from '@/data/programmes';

// Levels exactly as they appear in programmesData
const LEVELS = [
  'All',
  'Graduate Degree',
  'Undergraduate Degree',
  'Undergraduate Diploma',
  'Health Sciences Certificate',
  'UBTEB Certificate',
];

const FACULTIES = [
  'All',
  'Education & Humanities',
  'Business & ICT',
  'Health Sciences',
  'Social Sciences',
];

export function Programmes() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All');
  const [faculty, setFaculty] = useState('All');
  const { navigate } = useRouter();
  const { openApply } = useApply();

  const filtered = programmesData.filter((p) => {
    const term = search.trim().toLowerCase();
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.faculty.toLowerCase().includes(term) ||
      (p.description || '').toLowerCase().includes(term);
    const matchesLevel = level === 'All' || p.level === level;
    const matchesFaculty = faculty === 'All' || p.faculty === faculty;
    return matchesSearch && matchesLevel && matchesFaculty;
  });

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '60px' }}>
      <div style={{ background: '#2d1454', padding: '60px 20px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '40px', margin: '0 0 12px', fontFamily: "'Playfair Display', serif" }}>
          Browse our full programme catalogue
        </h1>
        <p style={{ fontSize: '17px', color: '#c4b5fd', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          {programmesData.length} NCHE-accredited programmes across 4 faculties.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 24px' }}>
          <Search size={20} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
          <input
            type="text"
            placeholder="Search by programme, faculty or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '10px', border: '1px solid #e0d4ee', fontSize: '15px', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '12px' }}>
          {FACULTIES.map((f) => (
            <button
              key={f}
              onClick={() => setFaculty(f)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
                background: faculty === f ? '#3d1a6b' : '#fff',
                color: faculty === f ? '#fff' : '#3d1a6b',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.15s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: '1px solid #e0d4ee',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 600,
                background: level === l ? '#f0e8fa' : '#fff',
                color: '#3d1a6b',
                transition: 'all 0.15s',
              }}
            >
              {l}
            </button>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#8a7fa0', marginBottom: '24px', fontSize: '14px' }}>
          Showing {filtered.length} of {programmesData.length} programmes
          {level !== 'All' ? ' · ' + level : ''}
          {faculty !== 'All' ? ' · ' + faculty : ''}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => openApply(p.name)}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid #e0d4ee',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px rgba(61,26,107,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', gap: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: '#3d1a6b', color: '#fff', padding: '4px 10px', borderRadius: '6px' }}>{p.level}</span>
                <span style={{ background: '#f0e8fa', color: '#3d1a6b', padding: '4px 10px', borderRadius: '6px' }}>{p.faculty}</span>
              </div>
              <h3 style={{ fontSize: '18px', color: '#2d1454', margin: '0 0 10px', lineHeight: 1.3, fontWeight: 700 }}>{p.name}</h3>
              {p.description && (
                <p style={{ fontSize: '14px', color: '#5a4b6b', margin: '0 0 16px', lineHeight: 1.5, flexGrow: 1 }}>{p.description}</p>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid #f0e8fa', fontSize: '13px' }}>
                <span style={{ color: '#3d1a6b', fontWeight: 700 }}>{p.duration}</span>
                <span style={{ color: '#8a7fa0', fontSize: '11px' }}>NCHE Accredited</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8a7fa0' }}>
            <p style={{ fontSize: '18px' }}>No programmes match your filters.</p>
            <button
              onClick={() => { setSearch(''); setLevel('All'); setFaculty('All'); }}
              style={{ marginTop: '12px', padding: '10px 20px', borderRadius: '8px', background: '#3d1a6b', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}