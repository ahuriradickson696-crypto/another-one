import { useState, useEffect } from 'react';
import { X, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { Countdown } from '@/components/Countdown';

export function IntakePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useRouter();
  const { openApply } = useApply();

  // Show on every page load — no localStorage check
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  const handleApply = () => { close(); openApply(); };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99999,
        background: '#ffffff',
        borderRadius: '12px',
        maxWidth: '320px',
        width: 'calc(100% - 40px)',
        boxShadow: '0 10px 40px rgba(45, 20, 84, 0.25)',
        border: '1px solid #f3f0fa',
        overflow: 'hidden',
        animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 480px) {
          .intake-popup { bottom: 10px !important; right: 10px !important; left: 10px !important; width: auto !important; max-width: none !important; }
        }
      `}</style>

      <div className="intake-popup" style={{ position: 'relative' }}>
        <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid #f3f0fa' }}>
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'transparent',
              border: 'none',
              color: '#2d1454',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              opacity: 0.7,
            }}
          >
            <X size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <GraduationCap size={16} color="#2d1454" />
            <span style={{ color: '#2d1454', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Admissions Open
            </span>
          </div>

          <h3 style={{
            fontSize: '15px',
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: '#2d1454',
            lineHeight: 1.25,
            paddingRight: '20px',
          }}>
            January 2027 Intake
          </h3>
        </div>

        <div style={{ padding: '10px 16px 14px' }}>
          <p style={{ fontSize: '12px', color: '#2d1454', lineHeight: 1.5, margin: '0 0 10px' }}>
            Applications now open across all schools and faculties.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2d1454', marginBottom: '4px', fontSize: '11px' }}>
            <Calendar size={13} color="#2d1454" />
            <span><strong>Intake:</strong> January 2027</span>
          </div>

          <Countdown />

          <div style={{ display: 'flex', gap: '6px', marginTop: '14px' }}>
            <button
              onClick={handleApply}
              style={{
                background: '#2d1454',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                flex: 1,
              }}
            >
              Apply <ArrowRight size={13} />
            </button>
            <button
              onClick={() => { close(); navigate('/programmes'); }}
              style={{
                background: '#ffffff',
                color: '#2d1454',
                padding: '8px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                border: '1px solid #2d1454',
                cursor: 'pointer',
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}