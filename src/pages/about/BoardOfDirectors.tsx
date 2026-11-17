import React, { useState } from 'react';
import { useRouter } from '@/router/Router';
import { Mail, Phone, MapPin, BookOpen, GraduationCap, Shield, Briefcase } from 'lucide-react';

export function BoardOfDirectors() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'bio' | 'publications' | 'contact'>('bio');

  // Data based on the MIU benchmark for Dr. Ariyo
  const publications = [
    { title: "Strategic change management in higher institutions of learning a case of Kyambogo University", authors: "Dr. Ariyo Gracious Kazaara", link: "http://makir.mak.ac.ug/handle/10570/5959" },
    { title: "Analysis of Students’ Enrollment and Graduation Rates in Gulu University in Uganda. A Case Study of Gulu University", authors: "Nabaasa Mark, Dr Ariyo Gracious Kazaara, et al." },
    { title: "The Impact of Broadcast Media on the Promotion of Human Rights in Uganda", authors: "Asiimwe Flavia, Dr Ariyo Gracious Kazaara, et al." },
    { title: "The Effect of Covid-19 Pandemic on the Education System and Institutions in Wakiso District", authors: "Barigye Brighton, Dr Ariyo Gracious Kazaara, et al." },
    { title: "Peer Pressure and Early Marriages among School Going Children in Uganda", authors: "Asiimwe Shivan, Dr Ariyo Gracious Kazaara, et al." },
    { title: "Taxation and the Development of Small Businesses in Uganda", authors: "Batuka Ramadhan, Dr Ariyo Gracious Kazaara, et al." }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      
      {/* HEADER SECTION */}
      <div style={{ backgroundColor: '#1a0b2e', color: '#ffffff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span onClick={() => navigate('/about/leadership')} style={{  color: '#d4af37', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' , cursor: 'pointer' }}>
            &larr; Back to Leadership
          </span>
          <span style={{ display: 'block', color: '#d4af37', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px' }}>
            Top Governance
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', margin: '0 0 24px 0', fontWeight: 800, lineHeight: 1.2 }}>
            Board of Directors
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        
        {/* PROFILE CARD SECTION */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '40px' }}>
          
          {/* Left: Image & Title */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '100%', minHeight: '400px' }}>
              <img 
                src="/images/board-chairman.jpg" 
                alt="Dr. Ariyo K. Gracious" 
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }} 
              />
            </div>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', margin: '0 0 8px 0', color: '#111', fontWeight: 700 }}>Dr. Ariyo K. Gracious (PhD)</h2>
              <p style={{ color: '#8a1b1b', margin: 0, fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4 }}>
                DES (KYU), BCom(Mak), MBA(MaK), PhD(CUN)<br/>
                <span style={{ color: '#555', marginTop: '8px', display: 'block' }}>Chairman, Board of Directors</span>
              </p>
            </div>
          </div>

          {/* Right: Tabs Content */}
          <div style={{ flex: '2 1 500px' }}>
            
            {/* TAB BUTTONS */}
            <div style={{ display: 'flex', borderBottom: '2px solid #eaeaea', marginBottom: '32px', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('bio')}
                style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'bio' ? '3px solid #1a0b2e' : '3px solid transparent', color: activeTab === 'bio' ? '#1a0b2e' : '#666', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
              >
                Biography
              </button>
              <button 
                onClick={() => setActiveTab('publications')}
                style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'publications' ? '3px solid #1a0b2e' : '3px solid transparent', color: activeTab === 'publications' ? '#1a0b2e' : '#666', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
              >
                Publications
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'contact' ? '3px solid #1a0b2e' : '3px solid transparent', color: activeTab === 'contact' ? '#1a0b2e' : '#666', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
              >
                Contacts
              </button>
            </div>

            {/* TAB CONTENT: BIOGRAPHY */}
            {activeTab === 'bio' && (
              <div>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '20px' }}>
                  Dr. Ariyo K. Gracious is currently the Chairman of the Board of Directors at Avance International University. With over 20 years of experience in the field of Business, Administration, and Management, Dr. Gracious is a seasoned administrator who is committed to ensuring the smooth operation and strategic growth of the university.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '20px' }}>
                  Prior to his appointment, Dr. Gracious held several positions in academia, including Principal of Makerere Metropolitan Management Institute (MMMI) and Campus Director of Multitech Business School, Kampala. He has also published articles in various publications and has presented at conferences on the topic of effective administration.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
                  In addition to his professional work, Dr. Gracious is involved in various community initiatives and is passionate about making a positive impact on society.
                </p>
              </div>
            )}

            {/* TAB CONTENT: PUBLICATIONS */}
            {activeTab === 'publications' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {publications.map((pub, index) => (
                  <div key={index} style={{ paddingBottom: '20px', borderBottom: '1px solid #eaeaea' }}>
                    <h4 style={{ fontSize: '16px', color: '#1a0b2e', margin: '0 0 8px 0', fontWeight: 600 }}>{pub.title}</h4>
                    <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>Authors: {pub.authors}</p>
                    {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#8a1b1b', fontWeight: 600, textDecoration: 'none' }}>Read Publication &rarr;</a>}
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: CONTACTS */}
            {activeTab === 'contact' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '50%' }}><Mail size={24} color="#1a0b2e" /></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#666' }}>Email</h4>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>board@aviu.ac.ug</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '50%' }}><Phone size={24} color="#1a0b2e" /></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#666' }}>Phone</h4>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>+256 700 670 691</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '50%' }}><MapPin size={24} color="#1a0b2e" /></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#666' }}>Office</h4>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>1km off Nansana-Hoima Road, Nabweru</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}