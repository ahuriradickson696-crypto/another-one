import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './animations.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
/* FORCE-PURPLE-STATS-START */
// Force the stats section to be purple at runtime.
// Runs after every render, so React re-renders cannot undo it.
;(function forcePurpleStats() {
  if (typeof window === 'undefined') return;

  const apply = () => {
    const sections = document.querySelectorAll<HTMLElement>(
      'section.stats-strip, section.stats-institutional, .stats-strip, .stats-institutional'
    );
    sections.forEach((el) => {
      el.style.setProperty('background', '#4c2585', 'important');
      el.style.setProperty('background-color', '#4c2585', 'important');
      el.style.setProperty('background-image', 'linear-gradient(135deg, #2d1454 0%, #4c2585 100%)', 'important');
      el.style.setProperty('padding', 'clamp(40px, 6vw, 72px) clamp(20px, 6vw, 80px)', 'important');
      el.style.setProperty('color', '#ffffff', 'important');

      // Turn it into a grid so facts line up
      el.style.setProperty('display', 'grid', 'important');
      el.style.setProperty('grid-template-columns', 'repeat(auto-fit, minmax(150px, 1fr))', 'important');
      el.style.setProperty('gap', 'clamp(18px, 2.5vw, 36px)', 'important');
      el.style.setProperty('max-width', '1200px', 'important');
      el.style.setProperty('margin', '0 auto', 'important');

      // Style each fact
      el.querySelectorAll<HTMLElement>('.stat-item, .stats-institutional-item').forEach((item) => {
        item.style.setProperty('display', 'flex', 'important');
        item.style.setProperty('flex-direction', 'column', 'important');
        item.style.setProperty('gap', '8px', 'important');
        item.style.setProperty('padding-left', '20px', 'important');
        item.style.setProperty('border-left', '3px solid #c4b5fd', 'important');
        item.style.setProperty('background', 'transparent', 'important');

        // Number
        const number = item.querySelector<HTMLElement>('.count-up, .stats-institutional-number, strong');
        if (number) {
          number.style.setProperty('color', '#ffffff', 'important');
          number.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
          number.style.setProperty('font-family', "'Playfair Display', Georgia, serif", 'important');
          number.style.setProperty('font-size', 'clamp(2rem, 3.4vw, 2.8rem)', 'important');
          number.style.setProperty('line-height', '1', 'important');
          number.style.setProperty('font-weight', '500', 'important');
          number.style.setProperty('text-shadow', '0 2px 6px rgba(0,0,0,0.35)', 'important');
        }

        // Label
        const label = item.querySelector<HTMLElement>('.stat-label, .stats-institutional-label, span:not(.count-up):not(.stat-icon)');
        if (label) {
          label.style.setProperty('color', 'rgba(255,255,255,0.92)', 'important');
          label.style.setProperty('font-family', "'Inter', system-ui, sans-serif", 'important');
          label.style.setProperty('font-size', '0.85rem', 'important');
          label.style.setProperty('line-height', '1.45', 'important');
          label.style.setProperty('font-weight', '500', 'important');
          label.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.35)', 'important');
        }

        // Hide any icon circle that was there
        const icon = item.querySelector<HTMLElement>('.stat-icon');
        if (icon) icon.style.setProperty('display', 'none', 'important');
      });
    });
  };

  // Run on load, on every DOM change, and after every React render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }

  // Re-apply whenever the DOM changes (React re-renders, route changes, etc.)
  const observer = new MutationObserver(() => apply());
  observer.observe(document.body, { childList: true, subtree: true });

  // Also re-apply on scroll, click, and every 500ms for the first 5 seconds
  window.addEventListener('scroll', apply, { passive: true });
  window.addEventListener('click', apply, { passive: true });
  let count = 0;
  const interval = setInterval(() => {
    apply();
    count++;
    if (count >= 10) clearInterval(interval);
  }, 500);
})();
/* FORCE-PURPLE-STATS-END */