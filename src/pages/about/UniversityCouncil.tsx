import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from '@/router/Router';

export function UniversityCouncil() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'bio' | 'publications' | 'contact'>('bio');

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      
      {/* HEADER SECTION */}
      <div style={{ backgroundColor: '#1a0b2e', color: '#ffffff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span 
            onClick={() => navigate('/about/leadership')} 
            style={{ color: '#d4af37', cursor: 'pointer', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' }}
          >
            &larr; Back to Leadership
          </span>
          <span style={{ display: 'block', color: '#d4af37', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px' }}>
            Top Governance
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', margin: '0 0 24px 0', fontWeight: 800, lineHeight: 1.2 }}>
            University Council
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The supreme governing body responsible for overseeing the operations and strategic direction of Avance International University.
          </p>
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
                src="/images/council-chairperson.jpg" 
                alt="Dr. Julius Arinaitwe" 
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }} 
              />
            </div>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', margin: '0 0 8px 0', color: '#111', fontWeight: 700 }}>Dr. Julius Arinaitwe</h2>
              <p style={{ color: '#8a1b1b', margin: 0, fontWeight: 600, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Chairperson, University Council</p>
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
                  Dr. Julius Arinaitwe serves as the Chairperson of the University Council at Avance International University. In this role, he leads the supreme governing body of the University, ensuring that AVIU fulfills its mission and operates in accordance with the highest standards of governance.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '20px' }}>
                  The University Council is responsible for overseeing the management of the University's finances, property, and affairs. Under Dr. Arinaitwe's leadership, the Council works closely with the Board of Directors and the University Management to ensure the long-term sustainability and academic excellence of the institution.
                </p>
              </div>
            )}

            {/* TAB CONTENT: PUBLICATIONS */}
            {activeTab === 'publications' && (
              <div>
                <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Publication details for the Chairperson are currently being updated.</p>
              </div>
            )}

            {/* TAB CONTENT: CONTACTS */}
            {activeTab === 'contact' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '50%' }}><Mail size={24} color="#1a0b2e" /></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#666' }}>Email</h4>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>council@aviu.ac.ug</p>
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
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Council Chambers, AVIU Main Campus</p>
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