import { useEffect } from 'react';
import { useRouter } from '@/router/Router';

/**
 * Site-wide motion engine. Mount once (App.tsx). It adds, without touching individual pages:
 *  - a gold scroll-progress bar
 *  - a header that condenses + blurs once you scroll
 *  - scroll-reveal with staggering for headings, cards, images and grids
 *  - pointer spotlight + gentle 3D tilt on cards (mouse only)
 *  - parallax on hero / feature imagery
 *  - magnetic buttons
 * Everything is skipped for visitors who prefer reduced motion.
 */

const REVEAL_UP =
  '.section-heading, .section-intro, .school-card, .news-card, .event-card, .partner-card, .feature-item, ' +
  '.info-card, .faculty-card, .programme-row, .research-card, .research-project-card, .staff-card, .step-card, ' +
  '.student-life-card, .value-card, .mission-card, .governance-card, .library-card, .intake-card, ' +
  '.accreditation-card, .timeline-item, .faq-item, .gallery-item, .highlight-item, .leadership-item, ' +
  '.testimonial-item, .contact-item, .programme-faculty, .programme-list-item, .stat-item, .feature-stat, ' +
  '.currency-box, .calendar-date-row, .tuition-row, .cta-section > div, .cta-section > button, ' +
  '.program-search-inner, .media-img-card, figure, .col-half, .news-grid, .school-grid';
const REVEAL_LEFT = '.feature-large, .quote-image';
const REVEAL_RIGHT = '.feature-tall, .quote-copy';

const GLOW =
  '.school-card, .news-card, .event-card, .partner-card, .info-card, .faculty-card, .staff-card, .value-card, ' +
  '.student-life-card, .research-card, .research-project-card, .step-card, .mission-card, .governance-card, ' +
  '.library-card, .intake-card, .accreditation-card, .feature-stat, .highlight-item, .programme-faculty';
const TILT = '.partner-card, .staff-card, .value-card, .intake-card, .mission-card, .student-life-card';
const MAGNET = '.button-primary, .button-light, .button-outline, .nav-apply, .top-meta-apply';

export function MotionEffects() {
  const { path } = useRouter();

  /* ---------- scroll progress + header condense + parallax (once) ---------- */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    const bar = document.getElementById('scroll-progress');
    let ticking = false;

    const frame = () => {
      ticking = false;
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      root.toggleAttribute('data-scrolled', y > 24);
      if (reduce) return;
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > window.innerHeight + 100) return;
        const speed = parseFloat(el.dataset.parallax || '0.15');
        const offset = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
        el.style.setProperty('--py', `${offset.toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* ---------- reveal observer, re-armed on every page change and DOM change ---------- */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add('rv-in', 'is-seen');
          // hand control back to the element's own hover transitions once the reveal is over
          window.setTimeout(() => el.classList.remove('rv', 'rv-in', 'rv-left', 'rv-right'), 1100);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const tag = (root: ParentNode) => {
      const groups: [string, string][] = [[REVEAL_UP, ''], [REVEAL_LEFT, 'rv-left'], [REVEAL_RIGHT, 'rv-right']];
      groups.forEach(([sel, variant]) => {
        root.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          if (el.dataset.rv || el.closest('.welcome-splash, .header, .footer, .modal, .search-panel')) return;
          el.dataset.rv = '1';
          const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(sel)) : [];
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.setProperty('--rv-d', `${Math.min(idx, 9) * 70}ms`);
          el.classList.add('rv');
          if (variant) el.classList.add(variant);
          io.observe(el);
        });
      });
      // imagery inside pages gets a soft parallax
      root
        .querySelectorAll<HTMLElement>('.hero-video, .quote-image img, .page-hero .bg-carousel, .feature-large img')
        .forEach((el) => {
          if (!el.dataset.parallax) el.dataset.parallax = el.matches('.hero-video') ? '0.12' : '0.08';
        });
    };

    tag(document);
    let pending = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(() => tag(document));
    });
    const main = document.getElementById('main-content');
    if (main) mo.observe(main, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(pending);
    };
  }, [path]);

  /* ---------- pointer effects: spotlight, tilt, magnetic buttons (mouse only) ---------- */
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t || !t.closest) return;

      const glow = t.closest<HTMLElement>(GLOW);
      if (glow) {
        const r = glow.getBoundingClientRect();
        if (!glow.classList.contains('fx-glow')) {
          if (getComputedStyle(glow).position === 'static') glow.style.position = 'relative';
          glow.classList.add('fx-glow');
        }
        glow.style.setProperty('--mx', `${e.clientX - r.left}px`);
        glow.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
      const tilt = t.closest<HTMLElement>(TILT);
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.classList.add('fx-tilt');
        tilt.style.setProperty('--ry', `${(px * 7).toFixed(2)}deg`);
        tilt.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
      }
      const mag = t.closest<HTMLElement>(MAGNET);
      if (mag) {
        const r = mag.getBoundingClientRect();
        mag.classList.add('fx-magnet');
        mag.style.setProperty('--tx', `${((e.clientX - (r.left + r.width / 2)) * 0.18).toFixed(1)}px`);
        mag.style.setProperty('--ty', `${((e.clientY - (r.top + r.height / 2)) * 0.28).toFixed(1)}px`);
      }
    };
    const onLeave = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t || !t.closest) return;
      const tilt = t.closest<HTMLElement>(TILT);
      if (tilt && !tilt.contains(e.relatedTarget as Node)) {
        tilt.style.setProperty('--rx', '0deg');
        tilt.style.setProperty('--ry', '0deg');
      }
      const mag = t.closest<HTMLElement>(MAGNET);
      if (mag && !mag.contains(e.relatedTarget as Node)) {
        mag.style.setProperty('--tx', '0px');
        mag.style.setProperty('--ty', '0px');
      }
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerout', onLeave, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onLeave);
    };
  }, []);

  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />;
}
