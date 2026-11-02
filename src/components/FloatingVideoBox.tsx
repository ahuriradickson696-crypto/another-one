import { useState } from 'react';
import { X, Play, Video, ChevronLeft } from 'lucide-react';

// All your videos from the Gallery
const videoPlaylist = [
  { id: 'XPQdBYI9vcU', title: 'Campus highlights' },
  { id: 'qqWsn74VlT0', title: 'Student life' },
  { id: 'cQWuuKjoh44', title: 'Academic excellence' },
  { id: 'aTqd3eX377U', title: 'Campus tour' },
  { id: 'gOdpEUC96vY', title: 'Graduation moments' },
  { id: '7bcnZQhDfzM', title: 'AVIU community' },
  { id: '-Z3M-jtCSDU', title: 'Research & innovation' },
  { id: 'AS6sHqFZek4', title: 'Student voices' },
];

export function FloatingVideoBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Close and reset
  const handleClose = () => {
    setIsOpen(false);
    setActiveVideo(null);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Watch AVIU Videos"
          style={{
            position: 'fixed',
            bottom: 'calc(160px + env(safe-area-inset-bottom, 0px))', 
            right: '16px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#3d1a6b',
            color: '#fff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 9996,
          }}
        >
          <Video size={22} />
        </button>
      )}

      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: 'calc(100px + env(safe-area-inset-bottom, 0px))',
            right: '16px', 
            width: 'clamp(260px, 85vw, 320px)', 
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            zIndex: 9999,
            overflow: 'hidden',
            border: '1px solid #e0d4ee',
            animation: 'slideUp 0.3s ease-out',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#3d1a6b', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {activeVideo && (
                <button onClick={() => setActiveVideo(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', padding: 0 }}>
                  <ChevronLeft size={18} />
                </button>
              )}
              <span style={{ fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                {activeVideo ? 'Now Playing' : 'AVIU Videos'}
              </span>
            </div>
            <button 
              onClick={handleClose}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', padding: 0 }}
            >
              <X size={18} />
            </button>
          </div>

          {/* If a video is selected, show the player */}
          {activeVideo ? (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="AVIU Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                referrerPolicy="origin"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          ) : (
            /* If no video selected, show the playlist */
            <div style={{ maxHeight: '300px', overflowY: 'auto', background: '#f9f6fd' }}>
              {videoPlaylist.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideo(vid.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', width: '100%', 
                    padding: '10px', background: 'transparent', border: 'none', 
                    borderBottom: '1px solid #e0d4ee', cursor: 'pointer', textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f0e8fa'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${vid.id}/default.jpg`} 
                    alt={vid.title} 
                    style={{ width: '60px', height: '34px', objectFit: 'cover', borderRadius: '4px' }} 
                  />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#2d1454', lineHeight: 1.2 }}>
                    {vid.title}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
