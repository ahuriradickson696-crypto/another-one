import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { Music } from 'lucide-react';

export function Anthem() {
  return (
    <div className="page-content" style={{ background: '#f9f6fd', paddingBottom: '80px' }}>
      <SubPageHero
        images={pageImages.about}
        eyebrow="University Heritage"
        title={<>AVIU <em>Anthem</em></>}
        subtitle="The official anthem of Avance International University. 'Enhancing Innovations.'"
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Anthem', path: '/anthem' }
        ]}
      />

      <section className="section-pad" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        
        <div style={{ background: '#fff', padding: 'clamp(30px, 5vw, 60px)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(61,26,107,0.08)', border: '1px solid #e0d4ee' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ background: '#f0e8fa', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Music size={40} color="#3d1a6b" />
            </div>
            <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif", margin: 0 }}>Avance International University Anthem</h2>
            <p style={{ color: '#8a7fa0', marginTop: '8px' }}>Official Lyrics</p>
          </div>

          <div style={{ color: '#2d1454', lineHeight: 2, fontSize: '18px', textAlign: 'center', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
            {`Avance, Avance our International University
Enhancing innovation to make our nation proud
Advance our education transform the noble cause
To conquer the great heights and tower of learning.

Chorus (x2):
Avance, Avance arise now, Defend the noble cause
Avance, Avance enhance the learner's future with
Innovative skills, equip them with skills to sustain our motherland.

Avance we train and mentor, empower all graduates
To function in a science and technology world
To stimulate our cultural and intellectual life
We'll transform and sustain our dear motherland.

Chorus (x2):
Avance, Avance arise now, Defend the noble cause
Avance, Avance enhance the learner's future with
Innovative skills, equip them with skills to sustain our motherland.

We will pursue the quest to enhance our values
With excellence and respect as our major creed
We will be empowered to develop our skills
With God as our guide we'll benefit the world.

Chorus (x2):
Avance, Avance arise now, Defend the noble cause
Avance, Avance enhance the learner's future with
Innovative skills, equip them with skills to sustain our motherland.`}
          </div>

        </div>

      </section>
    </div>
  );
}
