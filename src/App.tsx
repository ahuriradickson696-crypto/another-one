import { lazy, Suspense } from 'react';
import { RouterProvider, useRouter } from '@/router/Router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ApplyProvider } from '@/components/ApplyContext';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { WelcomeSplash } from '@/components/WelcomeSplash'
import { GeminiChatbot } from '@/components/GeminiChatbot'
import { NewsletterStrip } from '@/components/NewsletterStrip'
import { ApplyFab } from '@/components/ApplyFab';
import { MotionEffects } from '@/components/MotionEffects';
import { MobileTabBar } from '@/components/MobileTabBar';
import { InstallPrompt } from '@/components/InstallPrompt';
const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const Study = lazy(() => import('@/pages/Study').then((m) => ({ default: m.Study })));
const Admissions = lazy(() => import('@/pages/Admissions').then((m) => ({ default: m.Admissions })));
const Research = lazy(() => import('@/pages/Research').then((m) => ({ default: m.Research })));
const StudentLife = lazy(() => import('@/pages/StudentLife').then((m) => ({ default: m.StudentLife })));
const Staff = lazy(() => import('@/pages/Staff').then((m) => ({ default: m.Staff })));
const Library = lazy(() => import('@/pages/Library').then((m) => ({ default: m.Library })));
const Fees = lazy(() => import('@/pages/Fees').then((m) => ({ default: m.Fees })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const News = lazy(() => import('@/pages/News').then((m) => ({ default: m.News })));
const Events = lazy(() => import('@/pages/Events').then((m) => ({ default: m.Events })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));

const UndergraduateStudy = lazy(() => import('@/pages/study/UndergraduateStudy').then((m) => ({ default: m.UndergraduateStudy })));
const PostgraduateStudy = lazy(() => import('@/pages/study/PostgraduateStudy').then((m) => ({ default: m.PostgraduateStudy })));
const OnlineLearning = lazy(() => import('@/pages/study/OnlineLearning').then((m) => ({ default: m.OnlineLearning })));
const InternationalStudy = lazy(() => import('@/pages/study/InternationalStudy').then((m) => ({ default: m.InternationalStudy })));
const CourseFinder = lazy(() => import('@/pages/study/CourseFinder').then((m) => ({ default: m.CourseFinder })));

const HowToApply = lazy(() => import('@/pages/admissions/HowToApply').then((m) => ({ default: m.HowToApply })));
const EntryRequirements = lazy(() => import('@/pages/admissions/EntryRequirements').then((m) => ({ default: m.EntryRequirements })));
const InternationalAdmissions = lazy(() => import('@/pages/admissions/InternationalAdmissions').then((m) => ({ default: m.InternationalAdmissions })));
const CreditTransfer = lazy(() => import('@/pages/admissions/CreditTransfer').then((m) => ({ default: m.CreditTransfer })));
const Scholarships = lazy(() => import('@/pages/admissions/Scholarships').then((m) => ({ default: m.Scholarships })));
const CampusVisits = lazy(() => import('@/pages/admissions/CampusVisits').then((m) => ({ default: m.CampusVisits })));

const ResearchCentres = lazy(() => import('@/pages/research/ResearchCentres').then((m) => ({ default: m.ResearchCentres })));
const PhdOpportunities = lazy(() => import('@/pages/research/PhdOpportunities').then((m) => ({ default: m.PhdOpportunities })));
const Publications = lazy(() => import('@/pages/research/Publications').then((m) => ({ default: m.Publications })));

const Accommodation = lazy(() => import('@/pages/studentlife/Accommodation').then((m) => ({ default: m.Accommodation })));
const HealthWellbeing = lazy(() => import('@/pages/studentlife/HealthWellbeing').then((m) => ({ default: m.HealthWellbeing })));
const SportsRecreation = lazy(() => import('@/pages/studentlife/SportsRecreation').then((m) => ({ default: m.SportsRecreation })));
const CareerServices = lazy(() => import('@/pages/studentlife/CareerServices').then((m) => ({ default: m.CareerServices })));

const Leadership = lazy(() => import('@/pages/about/Leadership').then((m) => ({ default: m.Leadership })));
const Campus = lazy(() => import('@/pages/about/Campus').then((m) => ({ default: m.Campus })));
const Alumni = lazy(() => import('@/pages/about/Alumni').then((m) => ({ default: m.Alumni })));
const Careers = lazy(() => import('@/pages/about/Careers').then((m) => ({ default: m.Careers })));
const OrgChart = lazy(() => import('@/pages/about/OrgChart').then((m) => ({ default: m.OrgChart })));

const Directory = lazy(() => import('@/pages/contact/Directory').then((m) => ({ default: m.Directory })));
const CampusSafety = lazy(() => import('@/pages/contact/CampusSafety').then((m) => ({ default: m.CampusSafety })));
const Gallery = lazy(() => import('@/pages/Gallery').then((m) => ({ default: m.Gallery })));
const AcademicCalendar = lazy(() => import('@/pages/AcademicCalendar').then((m) => ({ default: m.AcademicCalendar })));
const Privacy = lazy(() => import('@/pages/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('@/pages/Terms').then((m) => ({ default: m.Terms })));
const Policies = lazy(() => import('@/pages/about/Policies').then((m) => ({ default: m.Policies })));
const AnnualReports = lazy(() => import('@/pages/about/AnnualReports').then((m) => ({ default: m.AnnualReports })));
const JoiningInstructions = lazy(() => import('@/pages/admissions/JoiningInstructions').then((m) => ({ default: m.JoiningInstructions })));
const StudentGuild = lazy(() => import('@/pages/studentlife/StudentGuild').then((m) => ({ default: m.StudentGuild })));
const InnovationHub = lazy(() => import('@/pages/studentlife/InnovationHub').then((m) => ({ default: m.InnovationHub })));
const Conferences = lazy(() => import('@/pages/research/Conferences').then((m) => ({ default: m.Conferences })));
const Journals = lazy(() => import('@/pages/research/Journals').then((m) => ({ default: m.Journals })));
const Offices = lazy(() => import('@/pages/offices/Offices').then((m) => ({ default: m.Offices })));
const CommunityEngagement = lazy(() => import('@/pages/studentlife/CommunityEngagement').then((m) => ({ default: m.CommunityEngagement })));
const Timetables = lazy(() => import('@/pages/studentlife/Timetables').then((m) => ({ default: m.Timetables })));
const GraduationLists = lazy(() => import('@/pages/studentlife/GraduationLists').then((m) => ({ default: m.GraduationLists })));


const Downloads = lazy(() => import('@/pages/Downloads').then((m) => ({ default: m.Downloads })));


const StrategicPlan = lazy(() => import('@/pages/strategic/StrategicPlan').then((m) => ({ default: m.StrategicPlan })));
const Museums = lazy(() => import('@/pages/Museums').then((m) => ({ default: m.Museums })));
const OpenDays = lazy(() => import('@/pages/OpenDays').then((m) => ({ default: m.OpenDays })));
const Glossary = lazy(() => import('@/pages/Glossary').then((m) => ({ default: m.Glossary })));
const EqualityPolicy = lazy(() => import('@/pages/policies/EqualityPolicy').then((m) => ({ default: m.EqualityPolicy })));
const FreedomOfSpeech = lazy(() => import('@/pages/policies/FreedomOfSpeech').then((m) => ({ default: m.FreedomOfSpeech })));
const ModernSlavery = lazy(() => import('@/pages/policies/ModernSlavery').then((m) => ({ default: m.ModernSlavery })));
const Gdpr = lazy(() => import('@/pages/policies/Gdpr').then((m) => ({ default: m.Gdpr })));
const ProspectiveUndergraduates = lazy(() => import('@/pages/prospective/Undergraduates').then((m) => ({ default: m.ProspectiveUndergraduates })));
const ProspectiveGraduates = lazy(() => import('@/pages/prospective/Graduates').then((m) => ({ default: m.ProspectiveGraduates })));
const LifelongLearning = lazy(() => import('@/pages/prospective/LifelongLearning').then((m) => ({ default: m.LifelongLearning })));
const ProspectiveOnline = lazy(() => import('@/pages/prospective/OnlineLearning').then((m) => ({ default: m.ProspectiveOnline })));
const CurrentStudents = lazy(() => import('@/pages/current/Students').then((m) => ({ default: m.CurrentStudents })));
const CurrentStaff = lazy(() => import('@/pages/current/StaffPortal').then((m) => ({ default: m.CurrentStaff })));
const Visitors = lazy(() => import('@/pages/Visitors').then((m) => ({ default: m.Visitors })));
const Media = lazy(() => import('@/pages/Media').then((m) => ({ default: m.Media })));
const Teachers = lazy(() => import('@/pages/Teachers').then((m) => ({ default: m.Teachers })));
const Business = lazy(() => import('@/pages/Business').then((m) => ({ default: m.Business })));
const CampusMap = lazy(() => import('@/pages/utilities/Map').then((m) => ({ default: m.CampusMap })));
const AccessGuide = lazy(() => import('@/pages/utilities/AccessGuide').then((m) => ({ default: m.AccessGuide })));
const Giving = lazy(() => import('@/pages/utilities/Giving').then((m) => ({ default: m.Giving })));
const LegalAccessibility = lazy(() => import('@/pages/legal/Accessibility').then((m) => ({ default: m.LegalAccessibility })));
const LegalCookies = lazy(() => import('@/pages/legal/Cookies').then((m) => ({ default: m.LegalCookies })));
import { CookieConsent } from '@/components/CookieConsent';
import { BackToTop } from '@/components/BackToTop';
import { NotFound } from '@/pages/NotFound';
import { NewsArticle } from '@/pages/NewsArticle';

function Routes() {
  const { path } = useRouter();

  const renderPage = () => {
    const article = path.match(/^\/news\/([a-z0-9-]+)$/);
    if (article) return <NewsArticle id={article[1]} />;
    switch (path) {
      case '/programs':
      case '/study':
        return <Study />;
      case '/programs/undergraduate':
      case '/study/undergraduate':
        return <UndergraduateStudy />;
      case '/programs/postgraduate':
      case '/study/postgraduate':
        return <PostgraduateStudy />;
      case '/programs/online':
      case '/study/online':
        return <OnlineLearning />;
      case '/programs/international':
      case '/study/international':
        return <InternationalStudy />;
      case '/programs/course-finder':
      case '/study/course-finder':
        return <CourseFinder />;

      case '/admissions':
        return <Admissions />;
      case '/admissions/how-to-apply':
        return <HowToApply />;
      case '/admissions/entry-requirements':
        return <EntryRequirements />;
      case '/admissions/international':
        return <InternationalAdmissions />;
      case '/admissions/credit-transfer':
        return <CreditTransfer />;
      case '/admissions/scholarships':
        return <Scholarships />;
      case '/admissions/campus-visits':
        return <CampusVisits />;

      case '/research':
        return <Research />;
      case '/research/centres':
        return <ResearchCentres />;
      case '/research/phd-opportunities':
        return <PhdOpportunities />;
      case '/research/publications':
        return <Publications />;

      case '/student-life':
        return <StudentLife />;
      case '/student-life/accommodation':
        return <Accommodation />;
      case '/student-life/health':
        return <HealthWellbeing />;
      case '/student-life/sports':
        return <SportsRecreation />;
      case '/student-life/careers':
        return <CareerServices />;

      case '/staff':
        return <Staff />;
      case '/library':
        return <Library />;
      case '/fees':
        return <Fees />;

      case '/about':
        return <About />;
      case '/about/leadership':
        return <Leadership />;
      case '/about/campus':
        return <Campus />;
      case '/about/alumni':
        return <Alumni />;
      case '/about/careers':
        return <Careers />;
      case '/about/organisation':
        return <OrgChart />;
      case '/about/policies':
        return <Policies />;
      case '/about/annual-reports':
        return <AnnualReports />;
      case '/admissions/joining-instructions':
        return <JoiningInstructions />;
      case '/student-life/guild':
        return <StudentGuild />;
      case '/student-life/innovation-hub':
        return <InnovationHub />;
      case '/student-life/community-engagement':
        return <CommunityEngagement />;
      case '/student-life/timetables':
        return <Timetables />;
      case '/student-life/graduation-lists':
        return <GraduationLists />;

      case '/research/conferences':
        return <Conferences />;
      case '/research/journals':
        return <Journals />;
      case '/offices':
        return <Offices />;


      case '/news':
        return <News />;
      case '/events':
        return <Events />;

      case '/contact':
        return <Contact />;
      case '/contact/directory':
        return <Directory />;
      case '/contact/campus-safety':
        return <CampusSafety />;

      case '/gallery':
        return <Gallery />;
      case '/academic-calendar':
        return <AcademicCalendar />;
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/downloads':
        return <Downloads />;

      
      case '/strategic-plan':
        return <StrategicPlan />;
      case '/museums':
        return <Museums />;
      case '/open-days':
        return <OpenDays />;
      case '/glossary':
        return <Glossary />;
      case '/equality-policy':
        return <EqualityPolicy />;
      case '/freedom-of-speech':
        return <FreedomOfSpeech />;
      case '/modern-slavery-statement':
        return <ModernSlavery />;
      case '/gdpr':
        return <Gdpr />;
      case '/prospective/undergraduates':
        return <ProspectiveUndergraduates />;
      case '/prospective/graduates':
        return <ProspectiveGraduates />;
      case '/prospective/lifelong-learning':
        return <LifelongLearning />;
      case '/prospective/online-learning':
        return <ProspectiveOnline />;
      case '/current/students':
        return <CurrentStudents />;
      case '/current/staff':
        return <CurrentStaff />;
      case '/visitors':
        return <Visitors />;
      case '/media':
        return <Media />;
      case '/teachers':
        return <Teachers />;
      case '/business':
        return <Business />;
      case '/map':
        return <CampusMap />;
      case '/access-guide':
        return <AccessGuide />;
      case '/giving':
        return <Giving />;
      case '/legal/privacy':
        return <Privacy />;
      case '/legal/accessibility':
        return <LegalAccessibility />;
      case '/legal/cookies':
        return <LegalCookies />;
      case '/fees-and-funding':
        return <Fees />;
      case '/libraries':
        return <Library />;
      case '/jobs':
        return <Careers />;
      case '/term-dates':
        return <AcademicCalendar />;
      case '/alumni':
        return <Alumni />;

      case '/':
        return <Home />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const m = document.getElementById('main-content');
          m?.focus();
          m?.scrollIntoView();
        }}
      >
        Skip to main content
      </a>
      
      <MotionEffects />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <NewsletterStrip />
      <Footer />
      <BackToTop />
      <ApplyFab />
      <MobileTabBar />
      <InstallPrompt />
      <WhatsAppButton />
      <CookieConsent />
      <GeminiChatbot />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <ApplyProvider>
        <Routes />
      </ApplyProvider>
    </RouterProvider>
  );
}

export default App;
