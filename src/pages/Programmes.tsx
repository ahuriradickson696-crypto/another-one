import { useEffect, useState, useMemo } from 'react';
import { Search, ArrowRight, GraduationCap, Award, BookOpen } from 'lucide-react';
import { useApply } from '@/components/ApplyContext';
import { programmesData } from '@/data/programmes';

const LEVEL_ORDER = ['PhD', 'Masters', 'Postgraduate Diploma', 'Bachelor', 'Diploma', 'Certificate', 'HEC'];
const LEVEL_META = {
  'PhD': { label: 'PhD', emoji: '🏆' },
  'Masters': { label: 'Masters', emoji: '🎓' },
  'Postgraduate Diploma': { label: 'Postgraduate Diploma', emoji: '📘' },
  'Bachelor': { label: 'Bachelor', emoji: '🎓' },
  'Diploma': { label: 'Diploma', emoji: '📜' },
  'Certificate': { label: 'Certificate', emoji: '🏅' },
  'HEC': { label: 'Higher Education Access', emoji: '📋' },
};

export function Programmes() {
  const [search, setSearch] = useState('');
  const [activeLevel, setActiveLevel] = useState('All');
  const { openApply } = useApply();

  const counts = useMemo(() => {
    const c = { All: programmesData.length };
    LEVEL_ORDER.forEach((l) => { c[l] = programmesData.filter((p) => p.level === l).length; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const t = search.trim().toLowerCase();
    return programmesData.filter((p) => {
      const mS = !t || p.name.toLowerCase().includes(t) || p.schoolName.toLowerCase().includes(t) || (p.description || '').toLowerCase().includes(t);
      const mL = activeLevel === 'All' || p.level === activeLevel;
      return mS && mL;
    });
  }, [search, activeLevel]);

  const grouped = useMemo(() => {
    const g = {};
    LEVEL_ORDER.forEach((l) => { g[l] = filtered.filter((p) => p.level === l); });
    return g;
  }, [filtered]);

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ background: '#2d1454', padding: '56px 20px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', margin: '0 0 12px', fontFamily: 'Playfair Display, serif', lineHeight: 1.2, fontWeight: 500 }}>Browse our full programme catalogue</h1>
        <p style={{ fontSize: '15px', color: '#c4b5fd', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>{programmesData.length} NCHE-accredited programmes across all levels and schools</p>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto 28px' }}>
          <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
          <input type='text' placeholder='Search by programme, school or keyword...' value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '14px 16px 14px 46px', borderRadius: '10px', border: '1px solid #e0d4ee', fontSize: '15px', outline: 'none', boxSizing: 'border-box', background: '#fff' }} />
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          <button onClick={() => setActiveLevel('All')} style={{ padding: '10px 18px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 700, background: activeLevel === 'All' ? '#3d1a6b' : '#fff', color: activeLevel === 'All' ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>All <span style={{ opacity: 0.75, marginLeft: '4px' }}></span></button>
          {LEVEL_ORDER.filter((l) => counts[l] > 0).map((l) => (<button key={l} onClick={() => setActiveLevel(l)} style={{ padding: '10px 18px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 700, background: activeLevel === l ? '#3d1a6b' : '#fff', color: activeLevel === l ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>{LEVEL_META[l].emoji} {LEVEL_META[l].label} <span style={{ opacity: 0.75, marginLeft: '4px' }}></span></button>))}
        </div>
        <p style={{ textAlign: 'center', color: '#8a7fa0', marginBottom: '32px', fontSize: '14px' }}>Showing <strong style={{ color: '#3d1a6b' }}>{filtered.length}</strong> of {programmesData.length} programmes</p>
        {LEVEL_ORDER.filter((l) => grouped[l].length > 0).map((lvl) => (
          <section key={lvl} style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #c8a14a' }}>
              <span style={{ fontSize: '28px' }}>{LEVEL_META[lvl].emoji}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#2d1454', margin: 0, fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>{LEVEL_META[lvl].label}</h2>
                <p style={{ fontSize: '13px', color: '#8a7fa0', margin: '4px 0 0' }}>{grouped[lvl].length} programmes</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {grouped[lvl].map((p) => (<article key={p.id} style={{ background: '#fff', borderRadius: '14px', padding: '22px', border: '1px solid #e0d4ee', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ background: '#f0e8fa', color: '#3d1a6b', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>{p.schoolName}</span>
                  {p.isNew && (<span style={{ background: '#fef3c7', color: '#92400e', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>NEW</span>)}
                </div>
                <h3 style={{ fontSize: '17px', color: '#2d1454', margin: 0, lineHeight: 1.35, fontWeight: 700 }}>{p.name}</h3>
                <p style={{ fontSize: '14px', color: '#5a4b6b', margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{p.description || 'Programme details available on request.'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f0e8fa' }}>
                  <span style={{ color: '#3d1a6b', fontSize: '13px', fontWeight: 700 }}>{p.duration}</span>
                  <span style={{ color: '#8a7fa0', fontSize: '11px' }}>NCHE Accredited</span>
                </div>
                <button type='button' onClick={() => openApply(p.name)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: '#3d1a6b', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Apply for this programme <ArrowRight size={16} /></button>
              </article>))}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (<div style={{ textAlign: 'center', padding: '60px 20px', color: '#8a7fa0' }}><p style={{ fontSize: '18px' }}>No programmes match your filters.</p><button onClick={() => { setSearch(''); setActiveLevel('All'); }} style={{ marginTop: '12px', padding: '10px 20px', borderRadius: '8px', background: '#3d1a6b', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>Reset filters</button></div>)}
      </div>
    </div>
  );
}