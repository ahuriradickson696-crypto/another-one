import React, { useState, useEffect } from 'react';
import { useRouter } from '@/router/Router';

const PURPLE = '#3D1A6B';
const PURPLE_LIGHT = '#5B2A9C';
const PURPLE_SOFT = '#f3eefb';
const BG = '#ffffff';
const TEXT = '#1d1d1f';
const TEXT_MUTED = '#6e6e73';
const BORDER = 'rgba(0,0,0,0.08)';

interface Person {
  id: string;
  name: string;
  title: string;
  image?: string;
  credentials: string;
  shortBio: string;
  stats?: { label: string; value: string }[];
  profile: { label: string; value: string }[];
  education?: { degree: string; institution: string; year: string }[];
  career?: { role: string; org: string; period: string }[];
  research?: { focus: string[]; publications?: string; citations?: string; note?: string };
  contact?: { email?: string; phone?: string; office?: string };
  expertise: string[];
  affiliations: string[];
  tier: 'executive' | 'dean';
}

const people: Person[] = [
  // ===== EXECUTIVE LEADERSHIP =====
  {
    id: 'gracious',
    name: 'Dr. Ariyo K. Gracious',
    title: 'Chairman, Board of Directors',
    image: '/images/board-chairman.jpg',
    credentials: 'PhD (CUN), MBA (Mak), BCom (Mak), DES (KYU)',
    shortBio: "Ugandan educationist, administrator, author and entrepreneur. A recognized researcher in strategic management and corporate governance, leading AVIU's Board with over two decades of experience.",
    stats: [{ label: 'Years in HE', value: '20+' }, { label: 'PhD Degrees', value: '2' }, { label: 'Publications', value: '40+' }, { label: 'Institutions', value: '3' }],
    profile: [
      { label: 'Full Name', value: 'Ariyo Kazaara Gracious' },
      { label: 'Date of Birth', value: 'August 1978' },
      { label: 'Place of Origin', value: 'Rukiga District, Western Uganda' },
      { label: 'Nationality', value: 'Ugandan' },
      { label: 'Profession', value: 'Educationist, University Administrator, Researcher, Entrepreneur' },
      { label: 'Current Role', value: 'Chairman, Board of Directors — Avance International University' },
    ],
    education: [
      { degree: 'PhD, Strategic Management', institution: 'University of Nicaragua', year: '2023' },
      { degree: 'PhD, Management', institution: 'Texila American University Consortium, Guyana', year: '2017–2020' },
      { degree: 'MBA, Finance', institution: 'Makerere University', year: '2013–2015' },
      { degree: 'Bachelor of Commerce, Accounting', institution: 'Makerere University', year: '2001–2005' },
      { degree: 'Diploma in Education, Secondary Business', institution: 'Kyambogo University', year: '1999–2001' },
    ],
    career: [
      { role: 'Chairman, Board of Directors', org: 'Avance International University', period: 'Present' },
      { role: 'University Secretary', org: 'Metropolitan International University', period: '2016 – Present' },
      { role: 'Principal', org: 'Makerere Metropolitan Management Institute', period: '2012 – 2014' },
      { role: 'Managing Director', org: 'Starlex Services Limited', period: '2008 – 2011' },
    ],
    research: { focus: ['Strategic Change Management', 'Corporate Governance', 'SME Taxation', 'SACCO Financial Performance', 'Education Administration'], publications: '40+ articles', citations: 'Thousands', note: 'Recognized as a top researcher in East Africa.' },
    contact: { email: 'chairman@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Strategic Management', 'Corporate Governance', 'HE Leadership', 'Entrepreneurship'],
    affiliations: ['Board of Directors, AVIU', 'Metropolitan International University', 'KASHI Business School Ltd.'],
    tier: 'executive',
  },
  {
    id: 'julius',
    name: 'Dr. Julius Arinaitwe',
    title: 'Chairperson, University Council',
    image: '/images/council-chairperson.jpg',
    credentials: 'PhD (KIU), MA (KAB), PGDE (UCU), BCom (MAK), CPA-K',
    shortBio: "Certified accountant and management scholar. Vice Chancellor & CEO of MIU and Chairperson of AVIU's University Council, providing strategic oversight across academic, administrative and financial affairs.",
    stats: [{ label: 'Research', value: '670+' }, { label: 'Chair Roles', value: '2' }, { label: 'Campuses', value: '3' }, { label: 'Certification', value: 'CPA-K' }],
    profile: [
      { label: 'Full Name', value: 'Dr. Julius Arinaitwe' },
      { label: 'Nationality', value: 'Ugandan' },
      { label: 'Base', value: 'Kampala, Uganda' },
      { label: 'Profession', value: 'Academic Administrator, Certified Accountant' },
    ],
    education: [
      { degree: 'PhD, Management Science', institution: 'Kampala International University', year: '' },
      { degree: 'MA, Education Planning and Management', institution: 'Kabale University', year: '' },
      { degree: 'PGDE', institution: 'Uganda Christian University', year: '' },
      { degree: 'Bachelor of Commerce', institution: 'Makerere University', year: '' },
      { degree: 'Certified Public Accountant', institution: 'CPA – Kenya', year: '' },
    ],
    career: [
      { role: 'Chairperson, University Council', org: 'Avance International University', period: 'Present' },
      { role: 'Vice Chancellor & CEO', org: 'Metropolitan International University', period: 'Present' },
      { role: 'Director', org: 'KASHI Business School Ltd.', period: 'Present' },
      { role: 'Field Chief Editor', org: 'Clinical Trials and Meta-analysis', period: 'Present' },
    ],
    research: { focus: ['Institutional Management', 'Finance & Taxation', 'Auditing', 'Curriculum Reform', 'Competence-Based Education'], publications: '670+ works', citations: 'Thousands', note: "Spearheaded MIU's charter process (Oct 2025, presented Feb 2026)." },
    contact: { email: 'council@aviu.ac.ug', phone: '+256 778 790977', office: 'MIU Kampala Campus / AVIU Main Campus' },
    expertise: ['University Governance', 'Financial Management', 'Academic Administration', 'Education Policy'],
    affiliations: ['University Council, AVIU', 'Senate, MIU', 'KASHI Business School Ltd.'],
    tier: 'executive',
  },
  {
    id: 'chancellor',
    name: 'Rt. Rev. James William Ssebaggala',
    title: 'Chancellor',
    image: '/images/chancellor.jpg',
    credentials: 'MA Org. Leadership (UCU), BD (MAK), Dip. Theology (UCU), Dip. Land Surveying',
    shortBio: 'Bishop Emeritus of Mukono Diocese and former Caretaker Bishop of Luweero Diocese. Installed as Chancellor of AVIU in September 2025, bringing decades of episcopal and academic leadership.',
    stats: [{ label: 'Episcopal Years', value: '15+' }, { label: 'Archdeaconries', value: '6 → 12' }, { label: 'Institutions', value: '2+' }, { label: 'Countries', value: '3' }],
    profile: [
      { label: 'Full Name', value: 'James William Ssebaggala Walusimbi' },
      { label: 'Title', value: 'Right Reverend, Bishop Emeritus of Mukono Diocese' },
      { label: 'Year of Birth', value: '1957 (Retired at 65 in 2022)' },
      { label: 'Place of Origin', value: 'Mukono District (Bugerere area)' },
      { label: 'Nationality', value: 'Ugandan' },
      { label: 'Family', value: 'Married to Maama Tezirah Ssebaggala (1991); four children' },
    ],
    education: [
      { degree: 'MA, Organisational Leadership and Management', institution: 'Uganda Christian University', year: '' },
      { degree: 'Bachelor of Divinity', institution: 'Makerere University', year: '' },
      { degree: 'Diploma in Theology', institution: 'Bishop Tucker Theological College', year: '' },
      { degree: 'Diploma in Land Surveying', institution: 'Entebbe', year: '' },
    ],
    career: [
      { role: 'Chancellor', org: 'Avance International University', period: '2025 – Present' },
      { role: 'Caretaker Bishop', org: 'Luweero Diocese', period: '2023 – 2024' },
      { role: '4th Bishop', org: 'Mukono Diocese', period: '2010 – 2023' },
      { role: 'Executive Director', org: 'Mission For All (MIFA) Uganda', period: '' },
    ],
    contact: { email: 'chancellor@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Episcopal Leadership', 'Organisational Management', 'Community Development', 'Theological Education'],
    affiliations: ['Chancellor, AVIU', 'Bishop Emeritus, Mukono Diocese', 'MIFA Uganda'],
    tier: 'executive',
  },
  {
    id: 'kato',
    name: 'Dr. Kato Kimata Joshua',
    title: 'Vice Chancellor',
    image: '/images/vc-profile.jpg',
    credentials: 'PhD (KYU), MEd (KYU), BA Ed (KYU)',
    shortBio: "Education specialist with expertise in educational planning and management. Leads AVIU's academic and administrative operations, with a strong research record in higher education governance.",
    stats: [{ label: 'Articles', value: '14+' }, { label: 'Works', value: '~20' }, { label: 'Years in Ed', value: '15+' }, { label: 'Research Areas', value: '6' }],
    profile: [
      { label: 'Full Name', value: 'Dr. Kato Kimata Joshua (PhD)' },
      { label: 'Nationality', value: 'Ugandan' },
      { label: 'Profession', value: 'Educator, Educational Planner, Researcher' },
      { label: 'Current Role', value: 'Vice Chancellor — Avance International University' },
    ],
    education: [
      { degree: 'PhD, Education (Planning & Management)', institution: 'Kyambogo University', year: '2018–2023' },
      { degree: 'MEd, Policy, Planning and Management', institution: 'Kyambogo University', year: '2011–2013' },
      { degree: 'Bachelor of Arts with Education', institution: 'Kyambogo University', year: '2005–2008' },
    ],
    career: [{ role: 'Vice Chancellor', org: 'Avance International University', period: 'Present' }],
    research: { focus: ['HE Governance', 'Academic Job Satisfaction', 'Emotional Intelligence', 'Organizational Commitment', 'Technology Acceptance', 'School Climate'], publications: '14+ articles', citations: '~20 tracked', note: 'Published across leading journals on Ugandan HE.' },
    contact: { email: 'vc@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Educational Planning', 'HE Leadership', 'Organizational Behavior', 'Research Methodology'],
    affiliations: ["Vice Chancellor's Office, AVIU", 'Kyambogo University Alumni'],
    tier: 'executive',
  },
  {
    id: 'betty',
    name: 'Dr. Betty Mategeko',
    title: 'Director of Quality Assurance',
    image: '/images/betty-matijiko.jpg',
    credentials: 'PhD (MUST), MA Dev. Studies (KAB), M.Sc. Sociology',
    shortBio: "Interdisciplinary scholar specializing in development studies, sociology and gender advocacy. Leads AVIU's quality assurance framework, ensuring academic standards meet national and international benchmarks.",
    stats: [{ label: 'Years in Academia', value: '17+' }, { label: 'Institutions', value: '4' }, { label: 'Publications', value: '10+' }, { label: 'Editorial', value: '1' }],
    profile: [
      { label: 'Full Name', value: 'Dr. Betty Mategeko (phonetically "Matijiko")' },
      { label: 'Gender', value: 'Female' },
      { label: 'Nationality', value: 'Ugandan' },
      { label: 'Base', value: 'South Western Uganda (Kabale, Mbarara) and Kampala' },
    ],
    education: [
      { degree: 'PhD, Interdisciplinary Studies', institution: 'Mbarara University of Science and Technology', year: '2025' },
      { degree: "Master's in Development Studies", institution: 'Kabale University', year: '' },
      { degree: 'Postgraduate Sociology Training', institution: 'African College of Commerce, Kabale', year: '' },
    ],
    career: [
      { role: 'Director of Quality Assurance', org: 'Avance International University', period: 'Present' },
      { role: 'Senior Lecturer', org: 'Kabale University', period: 'Since 2008' },
      { role: 'QA Specialist', org: 'Metropolitan International University', period: '' },
      { role: 'Editorial Board Member', org: 'AVIU Journals', period: '' },
    ],
    research: { focus: ['Gender & Career', 'STEM Leadership', "Women's Entrepreneurship", 'Remote Work Policy', 'HE Quality'], publications: '10+ articles', citations: 'Google Scholar', note: 'Doctoral thesis (2025) on Kikiga cultural norms and Bakiga women\'s career progression.' },
    contact: { email: 'qa@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Quality Assurance', 'Development Studies', 'Sociology', 'Gender Advocacy'],
    affiliations: ['QA Directorate, AVIU', 'Kabale University', 'AVIU Journals Editorial Board'],
    tier: 'executive',
  },

  // ===== DEANS & FACULTY HEADS (from staff directory) =====
  {
    id: 'nakalembe',
    name: 'Ms. Nakalembe Elizabeth',
    title: 'Dean, Faculty of Business',
    credentials: 'Head of Academic Department — Business & ICT',
    shortBio: 'Leads the Faculty of Business at AVIU, overseeing academic programmes in Business Administration, Accounting, Finance, and Management. Also serves as Head of Department for Business.',
    profile: [
      { label: 'Full Name', value: 'Nakalembe Elizabeth' },
      { label: 'Position', value: 'Dean, Faculty of Business' },
      { label: 'Additional Role', value: 'Head of Department — Business' },
      { label: 'Faculty', value: 'Business & ICT' },
      { label: 'Department Size', value: '22 members' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, Faculty of Business', org: 'Avance International University', period: 'Present' },
      { role: 'Head of Department — Business', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'business@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Business Administration', 'Faculty Leadership', 'Academic Programme Management'],
    affiliations: ['Faculty of Business & ICT, AVIU'],
    tier: 'dean',
  },
  {
    id: 'tusime',
    name: 'Ms. Tusime Phoebe',
    title: 'Dean, Faculty of Education',
    credentials: 'Head of Academic Faculty — Education',
    shortBio: 'Leads the Faculty of Education, AVIU\'s largest faculty with 69 members. Oversees programmes in Secondary Education, Primary Education, Early Childhood Development, Higher Education, and Humanities.',
    profile: [
      { label: 'Full Name', value: 'Tusime Phoebe' },
      { label: 'Position', value: 'Dean, Faculty of Education' },
      { label: 'Faculty', value: 'Education' },
      { label: 'Department Size', value: '69 members (largest faculty)' },
      { label: 'Programmes', value: 'Secondary, Primary, ECD, Higher Ed Cert, Humanities' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, Faculty of Education', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'education@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Teacher Education', 'Faculty Leadership', 'Curriculum Development', 'Education Policy'],
    affiliations: ['Faculty of Education, AVIU'],
    tier: 'dean',
  },
  {
    id: 'emorut',
    name: 'Dr. Emorut Simon Peter',
    title: 'Dean, School of Medicine',
    credentials: 'Doctoral Degree in Medicine',
    shortBio: 'Leads the School of Medicine at AVIU, overseeing medical education, clinical training, and health sciences programmes. Part of the 45-member Health Sciences faculty.',
    profile: [
      { label: 'Full Name', value: 'Dr. Emorut Simon Peter' },
      { label: 'Position', value: 'Dean, School of Medicine' },
      { label: 'Faculty', value: 'Health Sciences' },
      { label: 'Department Size', value: '45 members' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, School of Medicine', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'medicine@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Medical Education', 'Clinical Training', 'Health Sciences Leadership', 'Public Health'],
    affiliations: ['School of Medicine, AVIU', 'Health Sciences Faculty'],
    tier: 'dean',
  },
  {
    id: 'namirembe',
    name: 'Ms. Namirembe Christine',
    title: 'Dean, Allied Health Sciences',
    credentials: 'Head of Allied Health Sciences',
    shortBio: 'Leads the Allied Health Sciences department within AVIU\'s School of Health Sciences, overseeing programmes in nursing, pharmacy, laboratory sciences, and public health.',
    profile: [
      { label: 'Full Name', value: 'Namirembe Christine' },
      { label: 'Position', value: 'Dean, Allied Health Sciences' },
      { label: 'Faculty', value: 'Health Sciences' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, Allied Health Sciences', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'health@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Allied Health', 'Nursing Education', 'Public Health', 'Clinical Practice'],
    affiliations: ['School of Health Sciences, AVIU'],
    tier: 'dean',
  },
  {
    id: 'hanaba',
    name: 'Mr. Hanaba Bernard',
    title: 'Principal, School of Nursing',
    credentials: 'Principal — AVIU Nursing School',
    shortBio: 'Principal of the AVIU School of Nursing, overseeing nursing and midwifery training programmes at both certificate and diploma levels.',
    profile: [
      { label: 'Full Name', value: 'Hanaba Bernard' },
      { label: 'Position', value: 'Principal, School of Nursing' },
      { label: 'Faculty', value: 'Health Sciences' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Principal, School of Nursing', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'nursing@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Nursing Education', 'Midwifery', 'Clinical Training', 'Health Administration'],
    affiliations: ['School of Nursing, AVIU'],
    tier: 'dean',
  },
  {
    id: 'tomanya',
    name: 'Mr. Tomanya Elijah',
    title: 'Dean, Faculty of Engineering',
    credentials: 'Head of Faculty — Engineering & Technology',
    shortBio: 'Leads the Faculty of Engineering at AVIU, overseeing programmes in Engineering, Agriculture, and technical disciplines across a 7-member faculty.',
    profile: [
      { label: 'Full Name', value: 'Tomanya Elijah' },
      { label: 'Position', value: 'Dean, Faculty of Engineering' },
      { label: 'Faculty', value: 'Engineering' },
      { label: 'Department Size', value: '7 members' },
      { label: 'Programmes', value: 'Engineering, Agriculture, Technical' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, Faculty of Engineering', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'engineering@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Engineering Education', 'Technical Training', 'Agriculture', 'Faculty Leadership'],
    affiliations: ['Faculty of Engineering, AVIU'],
    tier: 'dean',
  },
  {
    id: 'mariam',
    name: 'CSL. Nabiwan de Mariam',
    title: 'Dean, School of Law',
    credentials: 'Counsel — Head of Law School',
    shortBio: 'Leads the AVIU School of Law, overseeing legal education and the professional training of future advocates. Heads an 8-member faculty of legal scholars and practitioners.',
    profile: [
      { label: 'Full Name', value: 'Nabiwan de Mariam' },
      { label: 'Title', value: 'Counsel (CSL.)' },
      { label: 'Position', value: 'Dean, School of Law' },
      { label: 'Faculty', value: 'Law' },
      { label: 'Department Size', value: '8 members' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Dean, School of Law', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'law@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Legal Education', 'Legal Practice', 'Constitutional Law', 'Faculty Leadership'],
    affiliations: ['School of Law, AVIU', 'Uganda Law Society'],
    tier: 'dean',
  },
  {
    id: 'onyango',
    name: 'Mr. Onyango Henry',
    title: 'HOD, ICT & Computing',
    credentials: 'Head of Department — Information & Communications Technology',
    shortBio: 'Heads the ICT Department within AVIU\'s Faculty of Business & ICT, overseeing Computing & IT programmes, digital infrastructure, and technology curriculum.',
    profile: [
      { label: 'Full Name', value: 'Onyango Henry' },
      { label: 'Position', value: 'Head of Department — ICT' },
      { label: 'Faculty', value: 'Business & ICT' },
      { label: 'Department Size', value: '22 members (shared)' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'HOD, Information & Communications Technology', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'ict@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Computing & IT', 'Digital Infrastructure', 'Curriculum Design', 'Technology Leadership'],
    affiliations: ['Faculty of Business & ICT, AVIU'],
    tier: 'dean',
  },
  {
    id: 'simbwa',
    name: 'Dr. Peter SSimbwa',
    title: 'Dean, Research & Publications',
    credentials: 'PhD — Lecturer & Research Lead',
    shortBio: 'Leads research strategy and publications at AVIU. Senior lecturer in the Faculty of Education, coordinating the university\'s research agenda, journal publications, and academic conferences.',
    profile: [
      { label: 'Full Name', value: 'Dr. Peter SSimbwa' },
      { label: 'Position', value: 'Dean, Research & Publications' },
      { label: 'Faculty', value: 'Education' },
      { label: 'Role', value: 'Lecturer & Research Lead' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    education: [
      { degree: 'Doctor of Philosophy (PhD)', institution: 'Ugandan University', year: '' },
    ],
    career: [
      { role: 'Dean, Research & Publications', org: 'Avance International University', period: 'Present' },
      { role: 'Lecturer', org: 'Faculty of Education, AVIU', period: 'Present' },
    ],
    contact: { email: 'research@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Research Management', 'Academic Publications', 'Education Research', 'Journal Editing'],
    affiliations: ['Research Directorate, AVIU', 'Faculty of Education'],
    tier: 'dean',
  },
  {
    id: 'kambedha',
    name: 'Ms. Kambedha Maria',
    title: 'Academic Registrar',
    credentials: 'Academic Registrar — Registry Department',
    shortBio: 'Heads the Academic Registrar\'s Office at AVIU. Responsible for student records, examinations, academic transcripts, and the enforcement of academic regulations.',
    profile: [
      { label: 'Full Name', value: 'Kambedha Maria' },
      { label: 'Position', value: 'Academic Registrar' },
      { label: 'Department', value: 'Management / Registry' },
      { label: 'Reports To', value: 'Vice Chancellor' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'Academic Registrar', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'registrar@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Academic Records', 'Student Affairs', 'Examinations', 'Academic Regulations'],
    affiliations: ["Academic Registrar's Office, AVIU"],
    tier: 'dean',
  },
  {
    id: 'niwahabwe',
    name: 'Ms. Niwahabwe Junior',
    title: 'University Bursar',
    credentials: 'University Bursar — Finance Department',
    shortBio: 'Heads the University Bursar\'s Office at AVIU. Responsible for financial planning, budgeting, fee collection, and financial compliance.',
    profile: [
      { label: 'Full Name', value: 'Niwahabwe Junior' },
      { label: 'Position', value: 'University Bursar' },
      { label: 'Department', value: 'Management / Finance' },
      { label: 'Reports To', value: 'Vice Chancellor' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'University Bursar', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'bursar@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Financial Management', 'Budgeting', 'Fee Collection', 'Compliance'],
    affiliations: ["Bursar's Office, AVIU"],
    tier: 'dean',
  },
  {
    id: 'kabanda',
    name: 'Mr. Kabanda Jeffrey',
    title: 'University Secretary',
    credentials: 'University Secretary — Governance & Secretariat',
    shortBio: 'Heads the University Secretariat at AVIU. Responsible for governance administration, board and council support, and institutional records.',
    profile: [
      { label: 'Full Name', value: 'Kabanda Jeffrey' },
      { label: 'Position', value: 'University Secretary' },
      { label: 'Department', value: 'Management / Secretariat' },
      { label: 'Reports To', value: 'Vice Chancellor / University Council' },
      { label: 'Nationality', value: 'Ugandan' },
    ],
    career: [
      { role: 'University Secretary', org: 'Avance International University', period: 'Present' },
    ],
    contact: { email: 'secretary@aviu.ac.ug', phone: '+256 700 670 691', office: 'AVIU Main Campus, Nabweru' },
    expertise: ['Governance Administration', 'Secretariat Management', 'Institutional Records', 'Board Support'],
    affiliations: ['University Secretariat, AVIU'],
    tier: 'dean',
  },
];

const executives = people.filter((p) => p.tier === 'executive');
const deans = people.filter((p) => p.tier === 'dean');

function initialsOf(name: string): string {
  // strip titles like "Dr.", "Ms.", "Mr.", "Prof.", "Rt. Rev.", "CSL.", "Rev."
  const clean = name
    .replace(/\b(Dr|Ms|Mr|Mrs|Prof|Rev|Rt\. Rev|CSL|Canon)\.?\s+/gi, '')
    .trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function ProfileDetail({ person, onBack }: { person: Person; onBack: () => void }) {
  return (
    <div className="profile-enter">
      <button
        className="back-btn"
        onClick={() => { onBack(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '10px', border: '1px solid ' + BORDER, background: '#fff', color: TEXT, fontSize: '14px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px', fontFamily: 'inherit' }}
      >
        ← Back
      </button>

      <div style={{ backgroundColor: '#fff', border: '1px solid ' + BORDER, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
        {/* HEADER */}
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '0', borderBottom: '1px solid ' + BORDER }}>
          <div style={{ padding: '32px', borderRight: '1px solid ' + BORDER, backgroundColor: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {person.image ? (
              <div className="image-large" style={{ width: '100%', maxWidth: '240px', aspectRatio: '4 / 5', borderRadius: '18px', overflow: 'hidden', backgroundColor: PURPLE_SOFT, border: '4px solid #fff', boxShadow: '0 12px 40px rgba(61,26,107,0.15)' }}>
                <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
            ) : (
              <div style={{ width: '100%', maxWidth: '240px', aspectRatio: '4 / 5', borderRadius: '18px', border: '4px solid #fff', boxShadow: '0 12px 40px rgba(61,26,107,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${PURPLE} 0%, ${PURPLE_LIGHT} 100%)`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.92, position: 'relative', zIndex: 1 }}>
                  <circle cx="12" cy="8" r="4" fill="#ffffff" />
                  <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            )}
          </div>
          <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: PURPLE, marginBottom: '10px' }}>{person.title}</div>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', margin: '0 0 12px 0', fontWeight: 700, color: TEXT, letterSpacing: '-0.025em', lineHeight: 1.2 }}>{person.name}</h1>
            <p style={{ fontSize: '13px', color: TEXT_MUTED, margin: '0 0 16px 0', fontWeight: 600 }}>{person.credentials}</p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#3a3a3c', margin: '0 0 20px 0' }}>{person.shortBio}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {person.expertise.map((tag, i) => (
                <span key={i} className="tag" style={{ fontSize: '11px', padding: '5px 12px', borderRadius: '8px', backgroundColor: PURPLE_SOFT, color: PURPLE, fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        {person.stats && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', borderBottom: '1px solid ' + BORDER }}>
            {person.stats.map((s, i) => (
              <div key={i} className="stat-box" style={{ padding: '20px 16px', textAlign: 'center', borderRight: i < (person.stats?.length || 0) - 1 ? '1px solid ' + BORDER : 'none' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: PURPLE, lineHeight: 1.1, marginBottom: '5px' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: TEXT_MUTED, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* BODY */}
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          <div style={{ padding: '32px 36px', borderRight: '1px solid ' + BORDER }}>
            <div style={{ marginBottom: '32px' }}>
              <h3 className="section-head">Profile Details</h3>
              {person.profile.map((row, i) => (
                <div key={i} className="data-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <span style={{ fontSize: '13px', color: TEXT_MUTED, fontWeight: 600, flexShrink: 0 }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: TEXT, fontWeight: 500, textAlign: 'right' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {person.contact && (
              <div style={{ marginBottom: '32px' }}>
                <h3 className="section-head">Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {person.contact.email && (
                    <a href={`mailto:${person.contact.email}`} className="contact-card" style={{ textDecoration: 'none', padding: '14px 16px', backgroundColor: '#fafafa', borderRadius: '10px', border: '1px solid ' + BORDER, display: 'block' }}>
                      <div style={{ fontSize: '10px', color: TEXT_MUTED, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>Email</div>
                      <div style={{ fontSize: '13px', color: PURPLE, fontWeight: 700 }}>{person.contact.email}</div>
                    </a>
                  )}
                  {person.contact.phone && (
                    <a href={`tel:${person.contact.phone.replace(/\s/g, '')}`} className="contact-card" style={{ textDecoration: 'none', padding: '14px 16px', backgroundColor: '#fafafa', borderRadius: '10px', border: '1px solid ' + BORDER, display: 'block' }}>
                      <div style={{ fontSize: '10px', color: TEXT_MUTED, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>Phone</div>
                      <div style={{ fontSize: '13px', color: PURPLE, fontWeight: 700 }}>{person.contact.phone}</div>
                    </a>
                  )}
                  {person.contact.office && (
                    <div style={{ padding: '14px 16px', backgroundColor: '#fafafa', borderRadius: '10px', border: '1px solid ' + BORDER }}>
                      <div style={{ fontSize: '10px', color: TEXT_MUTED, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>Office</div>
                      <div style={{ fontSize: '13px', color: TEXT, fontWeight: 500 }}>{person.contact.office}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {person.affiliations.length > 0 && (
              <div>
                <h3 className="section-head">Affiliations</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {person.affiliations.map((a, i) => (
                    <li key={i} style={{ padding: '8px 0 8px 18px', position: 'relative', fontSize: '13px', color: TEXT, borderBottom: i < person.affiliations.length - 1 ? '1px solid ' + BORDER : 'none' }}>
                      <span style={{ position: 'absolute', left: 0, top: '14px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: PURPLE }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div style={{ padding: '32px 36px' }}>
            {person.education && person.education.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 className="section-head">Education</h3>
                {person.education.map((e, i) => (
                  <div key={i} className="timeline-dot" style={{ position: 'relative', padding: '4px 0 16px 24px', borderLeft: `2px solid ${PURPLE_SOFT}` }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: TEXT, marginBottom: '3px' }}>{e.degree}</div>
                    <div style={{ fontSize: '12px', color: TEXT_MUTED }}>{e.institution}{e.year ? ` · ${e.year}` : ''}</div>
                  </div>
                ))}
              </div>
            )}

            {person.career && person.career.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 className="section-head">Career</h3>
                {person.career.map((c, i) => (
                  <div key={i} className="timeline-dot" style={{ position: 'relative', padding: '4px 0 16px 24px', borderLeft: `2px solid ${PURPLE_SOFT}` }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: TEXT, marginBottom: '3px' }}>{c.role}</div>
                    <div style={{ fontSize: '12px', color: TEXT_MUTED }}>{c.org}{c.period ? ` · ${c.period}` : ''}</div>
                  </div>
                ))}
              </div>
            )}

            {person.research && (
              <div>
                <h3 className="section-head">Research</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {person.research.focus.map((f, i) => (
                    <span key={i} style={{ fontSize: '11px', padding: '5px 11px', borderRadius: '6px', backgroundColor: PURPLE_SOFT, color: PURPLE, fontWeight: 600 }}>{f}</span>
                  ))}
                </div>
                {person.research.note && (
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#3a3a3c', margin: 0, padding: '12px 14px', backgroundColor: '#fafafa', borderRadius: '10px', borderLeft: `3px solid ${PURPLE}` }}>{person.research.note}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonCard({ person, onClick, index }: { person: Person; onClick: () => void; index: number }) {
  return (
    <div
      className="person-card card-enter"
      style={{ animationDelay: (index * 0.05) + 's', backgroundColor: '#fff', borderRadius: '18px', border: '1px solid ' + BORDER, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
      onClick={onClick}
    >
      {person.image ? (
        <div style={{ width: '100%', aspectRatio: '4 / 5', overflow: 'hidden', backgroundColor: PURPLE_SOFT }}>
          <img src={person.image} alt={person.name} className="person-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        </div>
      ) : (
        <div className="avatar-placeholder" style={{ width: '100%', aspectRatio: '4 / 5', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${PURPLE} 0%, ${PURPLE_LIGHT} 100%)`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.92, position: 'relative', zIndex: 1 }}>
            <circle cx="12" cy="8" r="4" fill="#ffffff" />
            <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      )}
      <div style={{ padding: '18px 18px 20px' }}>
        <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.9px', textTransform: 'uppercase', color: PURPLE, marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{person.title}</div>
        <h3 style={{ fontSize: '16px', margin: '0 0 6px 0', fontWeight: 700, color: TEXT, lineHeight: 1.3 }}>{person.name}</h3>
        <p style={{ fontSize: '11px', color: TEXT_MUTED, margin: '0 0 10px 0', fontWeight: 500, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{person.credentials}</p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 700, color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
          View Profile →
        </div>
      </div>
    </div>
  );
}

export function Leadership() {
  const { navigate } = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = people.find((p) => p.id === openId) || null;

  // Scroll to top whenever a profile opens or closes
  useEffect(() => {
    if (openId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [openId]);

  return (
    <div style={{ backgroundColor: BG, minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: TEXT }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .card-enter { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .person-card { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s; cursor: pointer; }
        .person-card:hover { transform: translateY(-5px); box-shadow: 0 18px 36px rgba(61,26,107,0.15); border-color: rgba(61,26,107,0.3); }
        .person-card:hover .person-img { transform: scale(1.05); }
        .person-card:hover .avatar-placeholder svg { transform: scale(1.08); }
        .avatar-placeholder svg { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .person-img { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .profile-enter { animation: fadeIn 0.35s ease both; }
        .badge { display: inline-block; padding: 5px 14px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.9px; text-transform: uppercase; background: ${PURPLE_SOFT}; color: ${PURPLE}; border: 1px solid rgba(61,26,107,0.15); }
        .section-head { font-size: 11px; font-weight: 800; letter-spacing: 1.3px; text-transform: uppercase; color: ${PURPLE}; margin: 0 0 14px 0; padding-bottom: 8px; border-bottom: 2px solid ${PURPLE_SOFT}; }
        .tag { transition: background 0.2s; }
        .tag:hover { background: #ebe3f7; }
        .back-btn { transition: background 0.2s, transform 0.2s; }
        .back-btn:hover { background: ${PURPLE_SOFT}; transform: translateX(-3px); }
        .contact-card { transition: border-color 0.2s, box-shadow 0.2s; }
        .contact-card:hover { border-color: rgba(61,26,107,0.3); box-shadow: 0 4px 12px rgba(61,26,107,0.08); }
        .timeline-dot::before { content: ''; position: absolute; left: 0; top: 16px; width: 10px; height: 10px; border-radius: 50%; background: ${PURPLE}; border: 2px solid #fff; box-shadow: 0 0 0 2px ${PURPLE_SOFT}; }
        .stat-box { transition: transform 0.2s, border-color 0.2s; }
        .stat-box:hover { transform: translateY(-2px); border-color: rgba(61,26,107,0.25); }
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .detail-grid > div { border-right: none !important; }
        }
        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center', borderBottom: '1px solid ' + BORDER, position: 'relative', overflow: 'hidden', backgroundColor: '#fafafa' }}>
        <div style={{ position: 'absolute', top: '-60%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(61,26,107,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="badge" style={{ marginBottom: '20px' }}>AVIU · Leadership &amp; Governance</div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', margin: '0 0 18px 0', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}>
            Leadership &amp; Governance
          </h1>
          <p style={{ fontSize: '19px', color: TEXT_MUTED, maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            The distinguished leaders guiding Avance International University. Click any card to view their full profile.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 100px' }}>
        {selected ? (
          <ProfileDetail person={selected} onBack={() => setOpenId(null)} />
        ) : (
          <>
            {/* EXECUTIVE LEADERSHIP */}
            <div style={{ marginBottom: '60px' }}>
              <div style={{ marginBottom: '28px', textAlign: 'center' }}>
                <div className="badge" style={{ marginBottom: '12px' }}>Top Governance &amp; Executive Management</div>
                <h2 style={{ fontSize: '32px', margin: 0, fontWeight: 700, letterSpacing: '-0.025em', color: TEXT }}>Executive Leadership</h2>
              </div>
              <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                {executives.map((leader, idx) => (
                  <PersonCard key={leader.id} person={leader} onClick={() => setOpenId(leader.id)} index={idx} />
                ))}
              </div>
            </div>

            {/* DEANS & FACULTY HEADS */}
            <div>
              <div style={{ marginBottom: '28px', textAlign: 'center' }}>
                <div className="badge" style={{ marginBottom: '12px' }}>Deans, Faculty Heads &amp; Senior Officers</div>
                <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', fontWeight: 700, letterSpacing: '-0.02em', color: TEXT }}>Academic &amp; Administrative Leadership</h2>
                <p style={{ color: TEXT_MUTED, margin: 0, fontSize: '15px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                  Names sourced from the AVIU Staff Directory. Click any card to view the full profile, role, and contact information.
                </p>
              </div>
              <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                {deans.map((leader, idx) => (
                  <PersonCard key={leader.id} person={leader} onClick={() => setOpenId(leader.id)} index={idx} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}