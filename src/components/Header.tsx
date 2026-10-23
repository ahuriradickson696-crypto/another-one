import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, ChevronDown, Compass } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { navGroups, type NavGroup } from '@/data/nav';
import { SiteSearch } from '@/components/SiteSearch';
import { useRouter } from '@/router/Router';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useApply } from '@/components/ApplyContext';
import { LiveClock } from '@/components/LiveClock';

const announcements = [
  'AVIU — NCHE-accredited university at Nabweru, Wakiso · January, May & August intakes open',
  'Apply now for the August intake · Admissions: +256 700 670 691 / +256 766 751 763',
  'Bachelor programmes in Education, Business & ICT, Nursing, and Social Sciences',
  '5th Graduation Ceremony — Class of 2026 · 25 September 2026 · see Graduation Lists',
  'Campus Open Days & visits · Book via Admissions · Nabweru campus tours welcome',
  'E-learning portal for enrolled students · elearning.aviu.ac.ug',
  'Nursing Science · simulation labs & clinical pathways · Faculty of Nursing & Health Sciences',
  'Teacher education degrees · Primary, Early Childhood, Arts & Science with Education',
  'Business, Accounting, IT & Computer Science degrees · Faculty of Business Administration & ICT',
  'Social Work, Public Administration & Arts and Social Science · community-focused study',
  'Credit transfer & Recognition of Prior Learning (RPL) · upgrade diploma pathways available',
  'PhD programmes coming soon · register interest with the Research Office',
  'Annual Research Conference & Innovation Fair · student projects on display',
  'Student Guild, clubs, accommodation guidance & community engagement at Nabweru',
  'Downloads: prospectus, handbook, application checklist · see Downloads page',
  'International applicants welcome · English proficiency & certified transcripts required',
  'Mature-age entry (21+) and diploma-to-degree upgrade routes · contact Admissions',
  'Verify AVIU on the National Council for Higher Education · unche.or.ug',
  'Fees schedules coming soon · contact Bursar / Admissions for current guidance',
  'Library, ICT Services, Academic Registrar & Quality Assurance · full campus support',
  'Partnerships & consultancy · industry internships and MoUs via AVIU offices',
  'info@aviu.ac.ug · Nabweru, 1 km off Nansana–Hoima Road, Wakiso District',
];



const adMessages = [
  'August intake open — Apply now · Admissions: +256 700 670 691',
  'January intake now accepting applications — apply today',
  'May intake open — speak to an advisor on WhatsApp',
  'NCHE-accredited · Nabweru campus, Wakiso District',
  'Bachelor degrees in Education, Business & ICT, Nursing and Social Sciences',
  'Open Days: book a campus visit through Admissions',
  'E-learning portal live for enrolled students — elearning.aviu.ac.ug',
];
export function Header() {
  const [adIndex, setAdIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAdIndex((i) => (i + 1) % adMessages.length), 4000);
    return () => clearInterval(t);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { path, navigate } = useRouter();
  const { openApply } = useApply();

  const go = useCallback((to: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate(to);
  }, [navigate]);

  const isActive = (group: NavGroup) =>
    group.items.some((item) => path === item.path);

  return (
    <>
      <div className="top-meta-bar">
        <LiveClock />
        <button type="button" className="top-meta-apply" onClick={openApply}>Apply now</button>
      </div>
      <div className="notice-bar" role="region" aria-label="Notices">
        <div className="notice-bar-inner">
          <span className="notice-dot" aria-hidden="true" />
          <span className="notice-text">
            <strong>August intake open</strong> — Apply now · Admissions: +256 700 670 691
          </span>
          <div className="notice-links">
            <a href="/admissions/how-to-apply" onClick={(e) => { e.preventDefault(); go('/admissions/how-to-apply'); }}>How to apply</a>
            <a href="/fees" onClick={(e) => { e.preventDefault(); go('/fees'); }}>Fees</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); }}>Contact</a>
          </div>
        </div>
      </div>
      <header
        className="header"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <a
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
          aria-label={`${universityInfo.name} home`}
        >
          <img src="/images/aviu-logo.png" alt="Avance International University logo" />
          <span>
            <strong>AVIU</strong>
            <small>INTERNATIONAL UNIVERSITY</small>
          </span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-nav">
          {navGroups.map((group) => {
            const hasChildren = group.items.length > 1;
            const isOpen = openDropdown === group.label;
            return (
              <div
                className={`nav-group ${isOpen ? 'dropdown-open' : ''}`}
                key={group.label}
                onMouseEnter={() => {
                  if (window.matchMedia('(min-width: 961px)').matches) {
                    setOpenDropdown(group.label);
                  }
                }}
              >
                <a
                  href={`${group.items[0].path}`}
                  className={isActive(group) ? 'nav-active' : ''}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    if (hasChildren) {
                      // Mobile & desktop: toggle submenu; second intent can open first item via chevron area
                      setOpenDropdown((prev) => (prev === group.label ? null : group.label));
                    } else {
                      go(group.items[0].path);
                    }
                  }}
                >
                  {group.label}
                  {hasChildren && (
                    <ChevronDown
                      size={13}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : undefined,
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  )}
                </a>
                {hasChildren && isOpen && (
                  <div className="nav-dropdown">
                    {group.items.map((item) => (
                      <a
                        key={item.path}
                        href={`${item.path}`}
                        className={path === item.path ? 'dropdown-active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item.path);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={19} />
          </button>
          <ThemeToggle />
          <a
            className="nav-apply"
            href="https://elearning.aviu.ac.ug/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            Portal
          </a>

          <button
            type="button"
            className="nav-icon-btn"
            aria-label="Course finder"
            title="Course finder"
            onClick={() => go('/programs/course-finder')}
          >
            <Compass size={18} />
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {searchOpen && <SiteSearch onClose={() => setSearchOpen(false)} />}
    </>
  );
}
