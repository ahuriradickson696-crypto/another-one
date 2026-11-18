import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap, ChevronRight } from 'lucide-react';
import { faculties } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';

export function FacultyDetail() {
  const { facultyId } = useParams<{ facultyId: string }>();
  const faculty = faculties.find((f) => f.id === facultyId);
  if (!faculty) return <Navigate to="/study" replace />;
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study ?? pageImages.admissions}
        eyebrow={`Faculty · ${faculty.shortName}`}
        title={<>{faculty.name}</>}
        subtitle={faculty.description}
      />
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Programmes offered</div>
            <h2>{faculty.programs.length} programmes in <em>{faculty.shortName}</em></h2>
          </div>
          <Link to="/study" className="button button-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            All faculties <ChevronRight size={16} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24, marginTop: 32 }}>
          {faculty.programs.map((p, i) => (
            <article key={i} style={{ border: '1px solid #e0d4ee', borderRadius: 16, padding: '28px 24px', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#3d1a6b', marginBottom: 12 }}>
                <GraduationCap size={20} />
                <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>{p.level ?? 'Bachelor'}</span>
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: 20, color: '#3d1a6b' }}>{p.name}</h3>
              {p.description && <p style={{ margin: '0 0 16px', color: '#5a4b6b', fontSize: 14 }}>{p.description}</p>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#3d1a6b', marginBottom: 16 }}>
                <Clock size={15} /> {p.duration}
              </div>
              <Link to="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 999, background: '#3d1a6b', color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
                Apply for this programme <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
