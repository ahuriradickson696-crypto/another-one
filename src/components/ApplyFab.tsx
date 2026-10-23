import { useApply } from '@/components/ApplyContext';

export function ApplyFab() {
  const { openApply } = useApply();
  return (
    <button
      type="button"
      className="apply-fab"
      onClick={openApply}
      aria-label="Apply Now to AVIU"
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <img 
        src="/images/aviu-logo.png" 
        alt="AVIU Logo" 
        style={{ 
          width: '24px', 
          height: '24px', 
          objectFit: 'contain', 
          background: '#fff', 
          borderRadius: '50%', 
          padding: '2px' 
        }} 
      />
      <span className="apply-fab-label">Apply Now</span>
    </button>
  );
}