import { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

const videoCategories = [
  { title: 'Campus highlights', id: 'XPQdBYI9vcU' },
  { title: 'Student life', id: 'qqWsn74VlT0' },
  { title: 'Academic excellence', id: 'cQWuuKjoh44' },
  { title: 'Campus tour', id: 'aTqd3eX377U' },
  { title: 'Graduation moments', id: 'gOdpEUC96vY' },
  { title: 'AVIU community', id: '7bcnZQhDfzM' },
  { title: 'Research & innovation', id: '-Z3M-jtCSDU' },
  { title: 'Student voices', id: 'AS6sHqFZek4' },
];

export function CampusVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-pad alt-bg">
      <div className="section-heading centered">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> Campus videos</div>
          <h2>Watch life at <em>AVIU.</em></h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, maxWidth: 1200, margin: '40px auto 0', padding: '0 24px' }}>
        {videoCategories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setActiveVideo(cat.id)}
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              background: 'linear-gradient(135deg, #3d1a6b, #5b2c91)',
              borderRadius: '16px',
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(61,26,107,0.15)'
            }}
          >
            <img 
              src={`https://img.youtube.com/vi/${cat.id}/hqdefault.jpg`} 
              alt={cat.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, backdropFilter: 'blur(4px)' }}>
                <Play size={28} fill="#fff" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 900, position: 'relative', background: '#000', borderRadius: 16, overflow: 'hidden' }}>
            <button
              onClick={() => setActiveVideo(null)}
              style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            {/* THE FIX: referrerPolicy="origin" solves the localhost playback error */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="AVIU Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="origin" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>

            {/* Fallback link in case it still fails */}
            <div style={{ padding: '16px', textAlign: 'center', background: '#111' }}>
              <a 
                href={`https://www.youtube.com/watch?v=${activeVideo}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#a78bfa', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
              >
                Video not playing? Watch directly on YouTube <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
