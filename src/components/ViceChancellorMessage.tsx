import { Quote } from "lucide-react";

export default function ViceChancellorMessage() {
  return (
    <section style={{ background: '#ffffff', padding: 'clamp(40px, 8vw, 100px) 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px rgba(61, 26, 107, 0.08)',
          overflow: 'hidden',
          border: '1px solid #f0e8fa'
        }}>
          {/* CSS Grid: auto-flips so image is on top on mobile, but right on desktop */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            {/* Content Box */}
            <div style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: '2' }}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontWeight: 700, color: '#2d1454', fontSize: 'clamp(24px, 3vw, 32px)', fontFamily: "'Playfair Display', Georgia, serif", margin: 0 }}>
                  Dr. Joshua Kato Kimata, PhD
                </h3>
                <div style={{ color: '#a78bfa', fontSize: '15px', fontWeight: 600, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Vice Chancellor
                </div>
              </div>

              <div style={{ borderTop: '2px solid #f0e8fa', paddingTop: '24px' }}>
                <Quote size={32} style={{ color: '#3d1a6b', opacity: 0.2, marginBottom: '16px' }} />
                <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.6, color: '#4a3b5c', fontWeight: 500, fontStyle: 'italic', margin: 0 }}>
                  It is my great pleasure to welcome you to Avance International University (AVIU). Whether you are a prospective student, a parent, or a partner, you are joining an institution built on innovation, excellence, and affordability. At AVIU we identify and nurture each student's strengths, shaping them to thrive in today's competitive world of work.
                </p>
              </div>
            </div>

            {/* Image Box */}
            <div style={{ minHeight: '350px', position: 'relative', order: '1' }}>
              <img 
                src="/images/vice-chancellor.jpg" 
                alt="Dr. Joshua Kato Kimata" 
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top center'
                }} 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
