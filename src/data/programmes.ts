// src/data/programmes.ts
// Source: Avance International University 5th Graduation Book 2026
// (FINAL GRADUATION BOOK AVAS-6.pdf, pages 6-8 – Admissions Office list)
// HARD REPLACEMENT — contains ONLY the 66 programmes from the PDF.

export type ProgrammeLevel =
  | "Graduate Degree"
  | "Undergraduate Degree"
  | "Undergraduate Diploma"
  | "Health Sciences Certificate"
  | "UBTEB Certificate";

export interface Programme {
  id: string;
  name: string;
  level: ProgrammeLevel;
  faculty: string;
  duration: string;
  description?: string;
}

const EDU    = "Education & Humanities";
const BICT   = "Business & ICT";
const HEALTH = "Health Sciences";
const SOC    = "Social Sciences";

export const programmesData: Programme[] = [
  // ── GRADUATE DEGREE (3) ──
  { id: "msc-it",  name: "Master of Science in Information Technology", level: "Graduate Degree", faculty: BICT, duration: "2 years" },
  { id: "pgd-epm", name: "Post Graduate Diploma in Education Planning & Management", level: "Graduate Degree", faculty: EDU, duration: "1 year" },
  { id: "pgde",    name: "Post Graduate Diploma in Education", level: "Graduate Degree", faculty: EDU, duration: "1 year" },

  // ── UNDERGRADUATE DEGREE (31) ──
  { id: "bed",         name: "Bachelor of Education", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "ba-ed",       name: "Bachelor of Arts with Education", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "becd",        name: "Bachelor of Early Childhood Education", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "bed-prim-d",  name: "Bachelor of Education Primary (Direct)", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "bbs-ed",      name: "Bachelor of Business Studies with Education", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bsc-agri-ed", name: "Bachelor of Science in Agriculture with Education", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "bba",         name: "Bachelor of Business Administration", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bba-af",      name: "Bachelor of Business in Accounting & Finance", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bhrm",        name: "Bachelor of Human Resource Management", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bplm",        name: "Bachelor of Procurement & Logistics Management", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bit",         name: "Bachelor of Information Technology", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bib",         name: "Bachelor of International Business", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bcs",         name: "Bachelor of Computer Science", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bari",        name: "Bachelor of Agricultural & Rural Innovations", level: "Undergraduate Degree", faculty: EDU, duration: "3 years" },
  { id: "bsse",        name: "Bachelor of Science in Software Engineering", level: "Undergraduate Degree", faculty: BICT, duration: "4 years" },
  { id: "bsw",         name: "Bachelor of Social Work", level: "Undergraduate Degree", faculty: SOC, duration: "3 years" },
  { id: "bpam",        name: "Bachelor of Public Administration & Management", level: "Undergraduate Degree", faculty: SOC, duration: "3 years" },
  { id: "bahtm",       name: "Bachelor of Arts in Hotel & Tourism Management", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "llb",         name: "Bachelor of Laws", level: "Undergraduate Degree", faculty: SOC, duration: "4 years" },
  { id: "blpm",        name: "Bachelor of Land & Property Management", level: "Undergraduate Degree", faculty: SOC, duration: "3 years" },
  { id: "bgcd",        name: "Bachelor of Graphics and Communication Design", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bndc",        name: "Bachelor of Networking and Data Communication", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "bns-d",       name: "Bachelor of Nursing Science (Direct)", level: "Undergraduate Degree", faculty: HEALTH, duration: "4 years" },
  { id: "bns-e",       name: "Bachelor of Nursing Science (Extension)", level: "Undergraduate Degree", faculty: HEALTH, duration: "3 years" },
  { id: "bms-e",       name: "Bachelor of Midwifery Science (Extension)", level: "Undergraduate Degree", faculty: HEALTH, duration: "3 years" },
  { id: "bms-d",       name: "Bachelor of Midwifery Science (Direct)", level: "Undergraduate Degree", faculty: HEALTH, duration: "4 years" },
  { id: "bsm",         name: "Bachelor of Science in Marketing", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "biad",        name: "Bachelor of Industrial Art & Design", level: "Undergraduate Degree", faculty: BICT, duration: "3 years" },
  { id: "hec-bio",     name: "Higher Education Access Certificate (Biological)", level: "Undergraduate Degree", faculty: EDU, duration: "1 year" },
  { id: "hec-phy",     name: "Higher Education Access Certificate (Physical)", level: "Undergraduate Degree", faculty: EDU, duration: "1 year" },
  { id: "hec-hum",     name: "Higher Education Access Certificate (Humanities)", level: "Undergraduate Degree", faculty: EDU, duration: "1 year" },

  // ── UNDERGRADUATE DIPLOMA (22) ──
  { id: "dpam",       name: "Diploma in Public Administration & Management", level: "Undergraduate Diploma", faculty: SOC, duration: "2 years" },
  { id: "dba",        name: "Diploma in Business Administration", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "daf",        name: "Diploma in Accounting & Finance", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "dswsa",      name: "Diploma in Social Work & Social Administration", level: "Undergraduate Diploma", faculty: SOC, duration: "2 years" },
  { id: "dit",        name: "Diploma in Information Technology", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "des",        name: "Diploma in Education Secondary", level: "Undergraduate Diploma", faculty: EDU, duration: "2 years" },
  { id: "dep",        name: "Diploma in Education Primary", level: "Undergraduate Diploma", faculty: EDU, duration: "2 years" },
  { id: "decd",       name: "Diploma in Early Childhood", level: "Undergraduate Diploma", faculty: EDU, duration: "2 years" },
  { id: "dthm",       name: "Diploma in Tourism & Hotel Management", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "dcmch",      name: "Diploma in Clinical Medicine & Community Health", level: "Undergraduate Diploma", faculty: HEALTH, duration: "3 years" },
  { id: "dpharm",     name: "Diploma in Pharmacy", level: "Undergraduate Diploma", faculty: HEALTH, duration: "3 years" },
  { id: "dlt",        name: "Diploma in Laboratory Technology", level: "Undergraduate Diploma", faculty: HEALTH, duration: "2 years" },
  { id: "dplm",       name: "Diploma in Procurement & Logistics Management", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "dagri",      name: "Diploma in Agriculture", level: "Undergraduate Diploma", faculty: EDU, duration: "2 years" },
  { id: "ndee",       name: "National Diploma in Electrical Engineering", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "nda",        name: "National Diploma in Architecture", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "ndce",       name: "National Diploma in Civil Engineering", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "diad",       name: "Diploma in Industrial Art & Design", level: "Undergraduate Diploma", faculty: BICT, duration: "2 years" },
  { id: "dns-d",      name: "Diploma in Nursing Science – Direct", level: "Undergraduate Diploma", faculty: HEALTH, duration: "3 years" },
  { id: "dns-e",      name: "Diploma in Nursing Science – Extension", level: "Undergraduate Diploma", faculty: HEALTH, duration: "2 years" },
  { id: "dmw-e",      name: "Diploma in Midwifery – Extension", level: "Undergraduate Diploma", faculty: HEALTH, duration: "2 years" },
  { id: "dmw-d",      name: "Diploma in Midwifery – Direct", level: "Undergraduate Diploma", faculty: HEALTH, duration: "3 years" },

  // ── HEALTH SCIENCES CERTIFICATES (3) ──
  { id: "cert-nursing",   name: "Certificate in Nursing", level: "Health Sciences Certificate", faculty: HEALTH, duration: "1 year" },
  { id: "cert-midwifery", name: "Certificate in Midwifery", level: "Health Sciences Certificate", faculty: HEALTH, duration: "1 year" },
  { id: "cecd",           name: "Certificate in Early Childhood Development", level: "Health Sciences Certificate", faculty: EDU, duration: "1 year" },

  // ── UBTEB CERTIFICATE (7) ──
  { id: "ncba",      name: "National Certificate in Business Administration", level: "UBTEB Certificate", faculty: BICT, duration: "2 years" },
  { id: "nca",       name: "National Certificate in Accountancy", level: "UBTEB Certificate", faculty: BICT, duration: "2 years" },
  { id: "ncagri",    name: "National Certificate in Agriculture", level: "UBTEB Certificate", faculty: EDU, duration: "2 years" },
  { id: "ncsw",      name: "National Certificate in Social Work", level: "UBTEB Certificate", faculty: SOC, duration: "2 years" },
  { id: "nctourism", name: "National Certificate in Tourism", level: "UBTEB Certificate", faculty: BICT, duration: "2 years" },
  { id: "ncpa",      name: "National Certificate in Public Administration", level: "UBTEB Certificate", faculty: SOC, duration: "2 years" },
  { id: "ncit",      name: "National Certificate in Information Technology", level: "UBTEB Certificate", faculty: BICT, duration: "2 years" },
];