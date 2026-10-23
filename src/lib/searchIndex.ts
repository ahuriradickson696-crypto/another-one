import { navGroups } from '@/data/nav';
import { newsItems, faculties, staffMembers, events } from '@/data/university';

export type SearchEntry = { title: string; section: string; path: string; haystack: string };

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/programs?\b|programmes\b/g, 'programme')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

// Words people type that are not in the page titles
const synonyms: Record<string, string> = {
  '/fees': 'tuition cost costs payment pay price bursar money',
  '/admissions/how-to-apply': 'apply application register registration join enrol enroll',
  '/admissions': 'admission intake join apply',
  '/admissions/entry-requirements': 'requirements qualifications grades points',
  '/downloads': 'prospectus forms pdf handbook brochure download',
  '/library': 'books journals e-resources reading borrow',
  '/student-life/accommodation': 'hostel housing room residence stay',
  '/student-life/health': 'clinic medical counselling doctor wellbeing',
  '/contact': 'phone email address location call reach',
  '/about/campus': 'directions map visit nabweru location',
  '/academic-calendar': 'term dates semester intake calendar',
  '/admissions/scholarships': 'bursary financial aid funding sponsorship',
  '/student-life/graduation-lists': 'graduation graduate ceremony',
  '/programs/course-finder': 'course degree diploma certificate find',
  '/student-life/timetables': 'timetable schedule lectures',
  '/research/phd-opportunities': 'doctorate doctoral phd',
};

const entries: SearchEntry[] = [];
const seen = new Set<string>();
const add = (title: string, section: string, path: string, keywords = '') => {
  const key = `${path}|${title}`;
  if (seen.has(key)) return;
  seen.add(key);
  entries.push({ title, section, path, haystack: norm(`${title} ${section} ${keywords}`) });
};

add('Home', 'AVIU', '/', 'avance international university welcome');
for (const g of navGroups) for (const i of g.items) add(i.label, g.label, i.path, synonyms[i.path] ?? '');
for (const n of newsItems) add(n.title, `News · ${n.date}`, `/news/${n.id}`, `${n.category} ${n.excerpt}`);
for (const f of faculties) {
  add(f.name, 'Faculty', '/study', `${f.shortName} ${f.description}`);
  for (const p of f.programs) add(p.name, `${p.level} · ${f.shortName}`, '/study', `${p.discipline ?? ''} ${p.description}`);
}
for (const e of events) add(e.title, `Event · ${e.date}`, '/events', `${e.category} ${e.location} ${e.description}`);
for (const s of staffMembers) add(s.name, s.role, '/staff', s.qualification);

export const popularSearches: SearchEntry[] = [
  ['How to apply', 'Admissions', '/admissions/how-to-apply'],
  ['Programmes', 'Study', '/programs'],
  ['Fees & payment', 'Costs', '/fees'],
  ['Academic calendar', 'Dates', '/academic-calendar'],
  ['Contact us', 'Get in touch', '/contact'],
  ['Library', 'Student life', '/library'],
].map(([title, section, path]) => ({ title, section, path, haystack: '' }));

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const tokens = norm(query).split(' ').filter(Boolean);
  if (!tokens.length) return [];
  const scored: { e: SearchEntry; s: number }[] = [];
  for (const e of entries) {
    const title = norm(e.title);
    let s = 0;
    let ok = true;
    for (const t of tokens) {
      if (!e.haystack.includes(t)) { ok = false; break; }
      s += title.startsWith(t) ? 6 : title.includes(t) ? 4 : 1;
    }
    if (ok) scored.push({ e, s });
  }
  return scored.sort((a, b) => b.s - a.s).slice(0, limit).map((x) => x.e);
}
