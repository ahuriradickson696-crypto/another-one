import { ArrowRight } from 'lucide-react';
import { useApply } from '@/components/ApplyContext';

export function FloatingApplyButton() {
  const { openApply } = useApply();

  return (
    <button
      onClick={() => openApply()}
      aria-label="Open Application Form"
      style={{
        position: 'fixed',
        /* Stacked safely above the Video button */
        bottom: 'calc(220px + env(safe-area-inset-bottom, 0px))', 
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
        zIndex: 9997,
      }}
    >
      <ArrowRight size={22} />
    </button>
  );
}
