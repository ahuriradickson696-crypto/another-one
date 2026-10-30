export type LanguageCode = 'en' | 'sw' | 'fr';

export const languages: { code: LanguageCode; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'sw', label: 'Swahili', nativeLabel: 'Kiswahili' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
];

export const defaultLanguage: LanguageCode = 'en';

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    'hero.tagline': 'Enhancing innovations.',
    'hero.subtitle': "At Avance International University we identify, analyse, and focus on each student's strengths, shaping them to thrive in today's competitive world of work.",
    'hero.findProgramme': 'Find your programme',
    'hero.watchVideo': 'See AVIU in action',
    'hero.intakes': 'January · May · August intakes open — apply today',
    'apply.cta': 'Apply now',
    'lang.switch': 'Switch language',
  },
  sw: {
    'hero.tagline': 'Kuimarisha ubunifu.',
    'hero.subtitle': 'Katika Chuo Kikuu cha Avance International, tunatambua, kuchambua, na kuzingatia nguvu za kila mwanafunzi, kuwashape ili wafanikiwe katika ulimwengu wa leo wenye ushindani wa kazi.',
    'hero.findProgramme': 'Pata programu yako',
    'hero.watchVideo': 'Tazama AVIU kwa vitendo',
    'hero.intakes': 'Januari · Mei · Agosti nafasi za kujiunga zimefunguliwa — omba leo',
    'apply.cta': 'Omba sasa',
    'lang.switch': 'Badilisha lugha',
  },
  fr: {
    'hero.tagline': "Renforcer l'innovation.",
    'hero.subtitle': "À l'Université Internationale Avance, nous identifions, analysons et nous concentrons sur les forces de chaque étudiant, en les façonnant pour qu'ils prospèrent dans le monde compétitif du travail d'aujourd'hui.",
    'hero.findProgramme': 'Trouvez votre programme',
    'hero.watchVideo': 'Voir AVIU en action',
    'hero.intakes': 'Janvier · Mai · Août admissions ouvertes — postulez aujourd\'hui',
    'apply.cta': 'Postuler',
    'lang.switch': 'Changer de langue',
  },
};

export function t(key: string, lang: LanguageCode = defaultLanguage): string {
  return translations[lang]?.[key] ?? translations[defaultLanguage]?.[key] ?? key;
}