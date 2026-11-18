import React from 'react';
import { useRouter } from '@/router/Router';
import { Mail, Phone, MapPin, BookOpen, GraduationCap, ShieldCheck, Users } from 'lucide-react';

export function OfficeOfTheViceChancellor() {
  const { navigate } = useRouter();
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      
      {/* HEADER SECTION */}
      <div style={{ backgroundColor: '#1a0b2e', color: '#ffffff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span onClick={() => navigate('/about/leadership')} style={{  color: '#d4af37', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' , cursor: 'pointer' }}>
            &larr; Back to Leadership
          </span>
          <span style={{ display: 'block', color: '#d4af37', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px' }}>
            Executive Management
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', margin: '0 0 24px 0', fontWeight: 800, lineHeight: 1.2 }}>
            Office of the Vice Chancellor
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Providing strategic leadership to advance academic excellence, research capacity, and student experience at Avance International University.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        
        {/* PROFILE CARD SECTION */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eaeaea' }}>
          
          {/* Left: Image & Title */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '100%', minHeight: '400px' }}>
              <img 
                src="/images/vc-profile.jpg" 
                alt="Dr. Joshua Kato Kimata" 
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }} 
              />
            </div>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', margin: '0 0 8px 0', color: '#111', fontWeight: 700 }}>Dr. Joshua Kato Kimata</h2>
              <p style={{ color: '#8a1b1b', margin: 0, fontWeight: 600, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Vice Chancellor</p>
            </div>
          </div>

          {/* Right: Text Bio */}
          <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '24px', color: '#1a0b2e', margin: '0 0 24px 0', fontWeight: 700 }}>About the Office</h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '20px' }}>
              The Vice Chancellor is the Chief Executive Officer and the principal academic and administrative leader of Avance International University (AVIU). The key purpose of this office is to ensure the effective management and efficient use of the University’s human, financial, and physical resources in full compliance with Ugandan law, University regulations, and the Strategic Plan.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '20px' }}>
              In accordance with Section 31 of the Universities and Other Tertiary Institutions Act (2001, as amended), the Vice Chancellor is responsible for the academic, administrative, and financial affairs of the University. In the absence of the Chancellor, the Vice Chancellor presides over ceremonial assemblies, confers degrees, and awards other academic titles and distinctions of the University.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
              As the head of the University’s Management Team, the Vice Chancellor provides strategic leadership that strengthens AVIU’s academic excellence, research capacity, student experience, and global competitiveness. The Vice Chancellor is directly responsible to the University Council and serves as the Chairperson of the Senate.
            </p>
          </div>
        </div>

        {/* DUTIES & RESPONSIBILITIES SECTION */}
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '2 1 600px' }}>
            <h2 style={{ fontSize: '32px', color: '#111', marginBottom: '32px', fontWeight: 800, borderBottom: '2px solid #1a0b2e', paddingBottom: '16px', display: 'inline-block' }}>
              Duties & Responsibilities
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '16px', borderLeft: '4px solid #8a1b1b' }}>
                <h3 style={{ fontSize: '20px', color: '#111', margin: '0 0 16px 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BookOpen size={24} color="#8a1b1b" /> Policy and Planning Formulation
                </h3>
                <ul style={{ margin: 0, paddingLeft: '24px', color: '#444', lineHeight: 1.8, fontSize: '15px' }}>
                  <li>Spearheads the development and review of policies, strategic plans and interventions designed to achieve growth, academic and professional excellence in University programs.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '16px', borderLeft: '4px solid #1a0b2e' }}>
                <h3 style={{ fontSize: '20px', color: '#111', margin: '0 0 16px 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <GraduationCap size={24} color="#1a0b2e" /> Management and Fiscal Control
                </h3>
                <ul style={{ margin: 0, paddingLeft: '24px', color: '#444', lineHeight: 1.8, fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>As the Chief Executive, maintains efficiency, effectiveness, and good governance of the University.</li>
                  <li>Provides leadership through the implementation of strategic management plans and Council decisions.</li>
                  <li>Directs and supervises the Senior Management Team (academic, financial, and administrative functions).</li>
                  <li>Mobilizes internal and external resources for the implementation of University plans and programs.</li>
                  <li>Oversees the fair allocation of resources to various academic and administrative bodies.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '16px', borderLeft: '4px solid #2d1454' }}>
                <h3 style={{ fontSize: '20px', color: '#111', margin: '0 0 16px 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={24} color="#2d1454" /> Responsibility to the University Council
                </h3>
                <ul style={{ margin: 0, paddingLeft: '24px', color: '#444', lineHeight: 1.8, fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>Is a Member of the University Council and presents recommendations on issues requiring Council intervention.</li>
                  <li>Causes to be prepared and submits specific reports to Council as instructed.</li>
                  <li>Responsible to the Council for the general conduct and discipline of University staff and students.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '16px', borderLeft: '4px solid #3d1a6b' }}>
                <h3 style={{ fontSize: '20px', color: '#111', margin: '0 0 16px 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={24} color="#3d1a6b" /> Responsibility to the Senate
                </h3>
                <ul style={{ margin: 0, paddingLeft: '24px', color: '#444', lineHeight: 1.8, fontSize: '15px' }}>
                  <li>As Chairperson of the Senate, directs the implementation of Senate decisions and oversees the academic direction of the University.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* SIDEBAR CONTACT INFO */}
          <div style={{ flex: '1 1 250px' }}>
            <div style={{ backgroundColor: '#1a0b2e', padding: '32px', borderRadius: '24px', color: '#fff', position: 'sticky', top: '24px' }}>
              <h3 style={{ fontSize: '20px', color: '#fff', margin: '0 0 24px 0', fontWeight: 700 }}>Contact the Office</h3>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <MapPin size={24} style={{ flexShrink: 0, color: '#d4af37' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#aaa' }}>Address</h4>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5 }}>1km off Nansana-Hoima Road, Nabweru, Wakiso District, Uganda</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <Phone size={24} style={{ flexShrink: 0, color: '#d4af37' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#aaa' }}>Phone</h4>
                  <p style={{ margin: 0, fontSize: '15px' }}>+256 700 670 691</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Mail size={24} style={{ flexShrink: 0, color: '#d4af37' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#aaa' }}>Email</h4>
                  <p style={{ margin: 0, fontSize: '15px' }}>info@aviu.ac.ug</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}