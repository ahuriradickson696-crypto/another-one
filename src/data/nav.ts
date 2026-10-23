export type NavGroup = {
  label: string;
  items: { label: string; path: string }[];
};

export const navGroups: NavGroup[] = [
  {
    label: 'Programs',
    items: [
      { label: 'All Programs', path: '/programs' },
      { label: 'Undergraduate', path: '/programs/undergraduate' },
      { label: 'Postgraduate & Doctoral', path: '/programs/postgraduate' },
      { label: 'Online & Flexible', path: '/programs/online' },
      { label: 'International Study', path: '/programs/international' },
      { label: 'Course Finder', path: '/programs/course-finder' },
      { label: 'Fees & Payment', path: '/fees' },
    ],
  },
  {
    label: 'Admissions',
    items: [
      { label: 'Admissions Overview', path: '/admissions' },
      { label: 'How to Apply', path: '/admissions/how-to-apply' },
      { label: 'Entry Requirements', path: '/admissions/entry-requirements' },
      { label: 'Joining Instructions', path: '/admissions/joining-instructions' },
      { label: 'International Applicants', path: '/admissions/international' },
      { label: 'Credit Transfer & RPL', path: '/admissions/credit-transfer' },
      { label: 'Scholarships & Financial Aid', path: '/admissions/scholarships' },
      { label: 'Campus Visits & Open Days', path: '/admissions/campus-visits' },
      { label: 'Downloads & Forms', path: '/downloads' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Research Overview', path: '/research' },
      { label: 'Research Centres', path: '/research/centres' },
      { label: 'PhD Opportunities', path: '/research/phd-opportunities' },
      { label: 'Publications & Repository', path: '/research/publications' },
      { label: 'Conferences', path: '/research/conferences' },
      { label: 'Journals', path: '/research/journals' },
    ],
  },
  {
    label: 'Student Life',
    items: [
      { label: 'Student Life Overview', path: '/student-life' },
      { label: 'Accommodation & Housing', path: '/student-life/accommodation' },
      { label: 'Student Guild', path: '/student-life/guild' },
      { label: 'Innovation Hub', path: '/student-life/innovation-hub' },
      { label: 'Community Engagement', path: '/student-life/community-engagement' },
      { label: 'Timetables', path: '/student-life/timetables' },
      { label: 'Graduation Lists', path: '/student-life/graduation-lists' },
      { label: 'Health & Wellbeing', path: '/student-life/health' },
      { label: 'Sports & Recreation', path: '/student-life/sports' },
      { label: 'Career Services', path: '/student-life/careers' },
      { label: 'Library', path: '/library' },
      { label: 'Events', path: '/events' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About AVIU', path: '/about' },
      { label: 'Leadership & Governance', path: '/about/leadership' },
      { label: 'University Organisation', path: '/about/organisation' },
      { label: 'Policy & Legal Framework', path: '/about/policies' },
      { label: 'Annual Reports', path: '/about/annual-reports' },
      { label: 'Campus & Visitor Info', path: '/about/campus' },
      { label: 'Alumni & Donors', path: '/about/alumni' },
      { label: 'Careers / Jobs', path: '/about/careers' },
      { label: 'Offices & Directorates', path: '/offices' },
      { label: 'Staff Directory', path: '/staff' },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Staff & Department Directory', path: '/contact/directory' },
      { label: 'Campus Safety', path: '/contact/campus-safety' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
    ],
  },
];
