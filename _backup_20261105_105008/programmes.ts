// src/data/programmes.ts
// Source: Avance International University 5th Graduation Book 2026
// (FINAL GRADUATION BOOK AVAS-6.pdf, pages 6-8 – Admissions Office list)

export type ProgrammeLevel =
  | "Graduate Degree"
  | "Undergraduate Degree"
  | "Undergraduate Diploma"
  | "Health Sciences Certificate"
  | "UBTEB Certificate";

/** Shape used by src/pages/Programmes.tsx */
export interface Programme {
  id: string;
  name: string;
  level: ProgrammeLevel;
  faculty: string;
  duration: string;
  description?: string;
}

const FACULTY_EDU    = "Education & Humanities";
const FACULTY_BICT   = "Business & ICT";
const FACULTY_HEALTH = "Health Sciences";
const FACULTY_SOC    = "Social Sciences";

export const programmesData: Programme[] = [
  // GRADUATE DEGREE
  { id: "msc-it",   name: "Master of Science in Information Technology", level: "Graduate Degree", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "pgd-epm",  name: "Post Graduate Diploma in Education Planning & Management", level: "Graduate Degree", faculty: FACULTY_EDU, duration: "1 year" },
  { id: "pgde",     name: "Post Graduate Diploma in Education", level: "Graduate Degree", faculty: FACULTY_EDU, duration: "1 year" },

  // UNDERGRADUATE DEGREE
  { id: "bed",        name: "Bachelor of Education", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "ba-ed",      name: "Bachelor of Arts with Education", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "becd",       name: "Bachelor of Early Childhood Education", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "bed-primary-direct", name: "Bachelor of Education Primary (Direct)", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "bbs-ed",     name: "Bachelor of Business Studies with Education", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bsc-agri-ed",name: "Bachelor of Science in Agriculture with Education", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "bba",        name: "Bachelor of Business Administration", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bba-af",     name: "Bachelor of Business in Accounting & Finance", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bhrm",       name: "Bachelor of Human Resource Management", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bplm",       name: "Bachelor of Procurement & Logistics Management", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bit",        name: "Bachelor of Information Technology", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bib",        name: "Bachelor of International Business", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bcs",        name: "Bachelor of Computer Science", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bari",       name: "Bachelor of Agricultural & Rural Innovations", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "3 years" },
  { id: "bsse",       name: "Bachelor of Science in Software Engineering", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "4 years" },
  { id: "bsw",        name: "Bachelor of Social Work", level: "Undergraduate Degree", faculty: FACULTY_SOC, duration: "3 years" },
  { id: "bpam",       name: "Bachelor of Public Administration & Management", level: "Undergraduate Degree", faculty: FACULTY_SOC, duration: "3 years" },
  { id: "bahtm",      name: "Bachelor of Arts in Hotel & Tourism Management", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "llb",        name: "Bachelor of Laws", level: "Undergraduate Degree", faculty: FACULTY_SOC, duration: "4 years" },
  { id: "blpm",       name: "Bachelor of Land & Property Management", level: "Undergraduate Degree", faculty: FACULTY_SOC, duration: "3 years" },
  { id: "bgcd",       name: "Bachelor of Graphics and Communication Design", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bndc",       name: "Bachelor of Networking and Data Communication", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "bns-direct", name: "Bachelor of Nursing Science (Direct)", level: "Undergraduate Degree", faculty: FACULTY_HEALTH, duration: "4 years" },
  { id: "bns-ext",    name: "Bachelor of Nursing Science (Extension)", level: "Undergraduate Degree", faculty: FACULTY_HEALTH, duration: "3 years" },
  { id: "bms-ext",    name: "Bachelor of Midwifery Science (Extension)", level: "Undergraduate Degree", faculty: FACULTY_HEALTH, duration: "3 years" },
  { id: "bms-direct", name: "Bachelor of Midwifery Science (Direct)", level: "Undergraduate Degree", faculty: FACULTY_HEALTH, duration: "4 years" },
  { id: "bsm",        name: "Bachelor of Science in Marketing", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "biad",       name: "Bachelor of Industrial Art & Design", level: "Undergraduate Degree", faculty: FACULTY_BICT, duration: "3 years" },
  { id: "hec-bio",    name: "Higher Education Access Certificate (Biological)", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "1 year" },
  { id: "hec-phy",    name: "Higher Education Access Certificate (Physical)", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "1 year" },
  { id: "hec-hum",    name: "Higher Education Access Certificate (Humanities)", level: "Undergraduate Degree", faculty: FACULTY_EDU, duration: "1 year" },

  // UNDERGRADUATE DIPLOMA
  { id: "dpam",       name: "Diploma in Public Administration & Management", level: "Undergraduate Diploma", faculty: FACULTY_SOC, duration: "2 years" },
  { id: "dba",        name: "Diploma in Business Administration", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "daf",        name: "Diploma in Accounting & Finance", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "dswsa",      name: "Diploma in Social Work & Social Administration", level: "Undergraduate Diploma", faculty: FACULTY_SOC, duration: "2 years" },
  { id: "dit",        name: "Diploma in Information Technology", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "des",        name: "Diploma in Education Secondary", level: "Undergraduate Diploma", faculty: FACULTY_EDU, duration: "2 years" },
  { id: "dep",        name: "Diploma in Education Primary", level: "Undergraduate Diploma", faculty: FACULTY_EDU, duration: "2 years" },
  { id: "decd",       name: "Diploma in Early Childhood", level: "Undergraduate Diploma", faculty: FACULTY_EDU, duration: "2 years" },
  { id: "dthm",       name: "Diploma in Tourism & Hotel Management", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "dcmch",      name: "Diploma in Clinical Medicine & Community Health", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "3 years" },
  { id: "dpharm",     name: "Diploma in Pharmacy", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "3 years" },
  { id: "dlt",        name: "Diploma in Laboratory Technology", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "2 years" },
  { id: "dplm",       name: "Diploma in Procurement & Logistics Management", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "dagri",      name: "Diploma in Agriculture", level: "Undergraduate Diploma", faculty: FACULTY_EDU, duration: "2 years" },
  { id: "ndee",       name: "National Diploma in Electrical Engineering", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "nda",        name: "National Diploma in Architecture", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "ndce",       name: "National Diploma in Civil Engineering", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "diad",       name: "Diploma in Industrial Art & Design", level: "Undergraduate Diploma", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "dns-direct", name: "Diploma in Nursing Science – Direct", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "3 years" },
  { id: "dns-ext",    name: "Diploma in Nursing Science – Extension", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "2 years" },
  { id: "dmw-ext",    name: "Diploma in Midwifery – Extension", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "2 years" },
  { id: "dmw-direct", name: "Diploma in Midwifery – Direct", level: "Undergraduate Diploma", faculty: FACULTY_HEALTH, duration: "3 years" },

  // HEALTH SCIENCES CERTIFICATES
  { id: "cert-nursing",   name: "Certificate in Nursing", level: "Health Sciences Certificate", faculty: FACULTY_HEALTH, duration: "1 year" },
  { id: "cert-midwifery", name: "Certificate in Midwifery", level: "Health Sciences Certificate", faculty: FACULTY_HEALTH, duration: "1 year" },
  { id: "cecd",           name: "Certificate in Early Childhood Development", level: "Health Sciences Certificate", faculty: FACULTY_EDU, duration: "1 year" },

  // UBTEB CERTIFICATE
  { id: "ncba",      name: "National Certificate in Business Administration", level: "UBTEB Certificate", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "nca",       name: "National Certificate in Accountancy", level: "UBTEB Certificate", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "ncagri",    name: "National Certificate in Agriculture", level: "UBTEB Certificate", faculty: FACULTY_EDU, duration: "2 years" },
  { id: "ncsw",      name: "National Certificate in Social Work", level: "UBTEB Certificate", faculty: FACULTY_SOC, duration: "2 years" },
  { id: "nctourism", name: "National Certificate in Tourism", level: "UBTEB Certificate", faculty: FACULTY_BICT, duration: "2 years" },
  { id: "ncpa",      name: "National Certificate in Public Administration", level: "UBTEB Certificate", faculty: FACULTY_SOC, duration: "2 years" },
  { id: "ncit",      name: "National Certificate in Information Technology", level: "UBTEB Certificate", faculty: FACULTY_BICT, duration: "2 years" },
];

export const PROGRAMME_GROUPS: { title: ProgrammeLevel; items: Programme[] }[] = [
  "Graduate Degree",
  "Undergraduate Degree",
  "Undergraduate Diploma",
  "Health Sciences Certificate",
  "UBTEB Certificate",
].map((level) => ({
  title: level as ProgrammeLevel,
  items: programmesData.filter((p) => p.level === level),
}));