import { useState, useMemo } from 'react';
import { Search, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { useApply } from '@/components/ApplyContext';
import { useRouter } from '@/router/Router';
import { programmesData, SCHOOLS } from '@/data/programmes';

const ALL = 'All';
const LEVELS = ['Masters', 'Postgraduate Diploma', 'Bachelor', 'Diploma', 'Certificate', 'HEC'];

export function SchoolProgrammes({ schoolId }: { schoolId: string }) {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState(ALL);
  const { openApply } = useApply();
  const { navigate } = useRouter();

  const school = SCHOOLS.find((s) => s.id === schoolId);
  const schoolProgrammes = useMemo(() => programmesData.filter((p) => p.school === schoolId), [schoolId]);

  const filtered = useMemo(() => {
    return schoolProgrammes.filter((p) => {
      const t = search.trim().toLowerCase();
      const mS = !t || p.name.toLowerCase().includes(t) || (p.description || '').toLowerCase().includes(t);
      const mL = level === ALL || p.level === level;
      return mS && mL;
    });
  }, [schoolProgrammes, search, level]);

  if (!school) {
    return (<div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', color: '#2d1454' }}>School not found</h1>
      <button onClick={() => navigate('/programmes')} style={{ marginTop: '16px', padding: '12px 24px', background: '#3d1a6b', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: 600 }}>Back to all programmes</button>
    </div>);
  }

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ background: '#2d1454', padding: '24px 20px 8px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#c4b5fd', flexWrap: 'wrap' }}>
          <a href='/' style={{ color: '#c4b5fd', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={12} />
          <a href='/programmes' style={{ color: '#c4b5fd', textDecoration: 'none' }}>Programmes</a>
          <ChevronRight size={12} />
          <span style={{ color: '#fff' }}>{school.name}</span>
        </div>
      </div>
      <div style={{ background: '#2d1454', padding: '32px 20px 56px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <button onClick={() => navigate('/programmes')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'transparent', color: '#c4b5fd', border: '1px solid #c4b5fd40', borderRadius: '999px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', marginBottom: '20px' }}>
            <ArrowLeft size={14} /> Back to all schools
          </button>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', margin: '0 0 12px', fontFamily: 'Playfair Display, serif', lineHeight: 1.2, fontWeight: 500, color: '#fff' }}>{school.name}</h1>
          <p style={{ fontSize: '15px', color: '#c4b5fd', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>{school.description}</p>
          <p style={{ fontSize: '13px', color: '#a78bfa', marginTop: '12px' }}>{schoolProgrammes.length} programmes</p>
        </div>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 16px' }}>
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto 20px' }}>
          <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
          <input type='text' placeholder={'Search ' + school.shortName + ' programmes...'} value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: '8px', border: '1px solid #e0d4ee', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '28px' }}>
          <button onClick={() => setLevel(ALL)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #e0d4ee', cursor: 'pointer', fontSize: '12px', fontWeight: 600, background: level === ALL ? '#f0e8fa' : '#fff', color: '#3d1a6b' }}>All Levels</button>
          {LEVELS.map((l) => (<button key={l} onClick={() => setLevel(l)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #e0d4ee', cursor: 'pointer', fontSize: '12px', fontWeight: 600, background: level === l ? '#f0e8fa' : '#fff', color: '#3d1a6b' }}>{l}</button>))}
        </div>
        <p style={{ textAlign: 'center', color: '#8a7fa0', marginBottom: '32px', fontSize: '14px' }}>Showing <strong style={{ color: '#3d1a6b' }}>{filtered.length}</strong> of {schoolProgrammes.length} programmes</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filtered.map((p) => (<article key={p.id} style={{ background: '#fff', borderRadius: '14px', padding: '22px', border: '1px solid #e0d4ee', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ background: '#3d1a6b', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>{p.level}</span>
              {p.isNew && (<span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>NEW</span>)}
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
        {filtered.length === 0 && (<div style={{ textAlign: 'center', padding: '60px 20px', color: '#8a7fa0' }}><p style={{ fontSize: '18px' }}>No programmes match your filters.</p></div>)}
      </div>
    </div>
  );
}