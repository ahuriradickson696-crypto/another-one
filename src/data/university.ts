import { BookOpen, BriefcaseBusiness, HeartPulse, GraduationCap, Microscope, Lightbulb, Users, Globe2, Award, Cpu, Building2, Calendar, Library, Trophy, Beaker, Stethoscope, Presentation, HandHeart } from 'lucide-react';

export type Faculty = {
  id: string;
  name: string;
  shortName: string;
  icon: typeof BookOpen;
  description: string;
  longDescription: string;
  programs: Programme[];
  level: 'Undergraduate' | 'Postgraduate' | 'Certificate' | 'All Levels';
};

export type Programme = {
  name: string;
  level: 'Certificate' | 'Diploma' | 'Bachelor' | 'Postgraduate Diploma' | 'Masters' | 'PhD';
  duration: string;
  description: string;
  discipline?: string;
  lastAccreditation?: string;
  reviewYear?: string;
  campus?: string;
};

export const faculties: Faculty[] = [
  {
    id: 'education',
    name: 'Faculty of Education & Humanities',
    shortName: 'Education',
    icon: BookOpen,
    description:
      'Training the next generation of educators, researchers, and thought leaders who shape society through teaching and scholarship.',
    longDescription:
      'The Faculty of Education & Humanities at Avance International University prepares teachers and education leaders for primary, secondary and early-childhood settings across Uganda and East Africa. Programmes combine subject mastery with pedagogy, classroom practice, inclusive education and research methods. Graduates are equipped to teach, design curriculum, support early childhood development and contribute to education policy. Accreditation is current for all listed Bachelor programmes; detailed module handbooks are available to enrolled students and via the Downloads page.',
    programs: [
      { name: 'Bachelor of Arts with Education', level: 'Bachelor', duration: '3 Years', description: 'Prepares secondary school teachers with dual subject specialisation and professional education studies. Includes teaching practice placements.' ,
        discipline: 'Education',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Early Childhood Development', level: 'Bachelor', duration: '3 Years', description: 'Focuses on child development, play-based learning, family engagement and quality early years provision for ages 0–8.' ,
        discipline: 'Education',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Education Early Childhood Development', level: 'Bachelor', duration: '3 Years', description: 'Professional teaching qualification for early childhood educators, combining theory, practicum and assessment for young learners.' ,
        discipline: 'Education',
        lastAccreditation: '2023-04-17',
        reviewYear: '2028',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Education-Primary -Arts', level: 'Bachelor', duration: '3 Years', description: 'Primary teacher education with emphasis on arts subjects, literacy, numeracy and inclusive classroom practice.' ,
        discipline: 'Education',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Primary Education', level: 'Bachelor', duration: '3 Years', description: 'Comprehensive primary teaching degree covering curriculum, assessment, classroom management and subject content for primary schools.' ,
        discipline: 'Education',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Science with Education', level: 'Bachelor', duration: '3 Years', description: 'Trains secondary science teachers with strong subject knowledge in sciences and professional education studies including school practice.' ,
        discipline: 'Education',
        lastAccreditation: '2026-02-13',
        reviewYear: '2033',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Divinity', level: 'Bachelor', duration: '3 Years', description: 'Theological education combining biblical studies, pastoral care, ethics and community leadership for church and faith-based organisations.' ,
        discipline: 'Arts and Humanities',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Graphics and Communication Design', level: 'Bachelor', duration: '3 Years', description: 'Creative and technical training in visual communication, branding, digital design and media production for the creative industries.' ,
        discipline: 'Arts and Humanities',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
    ],
    level: 'All Levels',
  },
  {
    id: 'business',
    name: 'Faculty of Business Administration & ICT',
    shortName: 'Business & ICT',
    icon: BriefcaseBusiness,
    description:
      'Equipping future leaders with the business acumen and technological fluency to thrive in a competitive global economy.',
    longDescription:
      'The Faculty of Business Administration & ICT offers accredited Bachelor programmes in accounting, agribusiness, general business administration, records management, tourism and hospitality, information technology, computer science and information systems. Teaching emphasises practical projects, industry attachments, entrepreneurship and digital skills. Students gain exposure to real business environments in Kampala and beyond. Programme guides and module outlines are available under Downloads; tuition details will be published shortly.',
    programs: [
      { name: 'Bachelor of Accounting and Finance', level: 'Bachelor', duration: '3 Years', description: 'Prepares graduates for careers in accounting, auditing, financial management and related professional pathways with strong analytical skills.' ,
        discipline: 'Business',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Agribusiness Management', level: 'Bachelor', duration: '3 Years', description: 'Combines agricultural value chains, farm management, marketing and agribusiness entrepreneurship for the agro-economy.' ,
        discipline: 'Business',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Business Administration', level: 'Bachelor', duration: '3 Years', description: 'Broad management education covering marketing, HR, operations, strategy and entrepreneurship for private and public sectors.' ,
        discipline: 'Business',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Business Administration and Management', level: 'Bachelor', duration: '3 Years', description: 'Management-focused degree with emphasis on organisational leadership, decision-making and contemporary business practice.' ,
        discipline: 'Business',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Records and Information Management', level: 'Bachelor', duration: '3 Years', description: 'Trains professionals in records systems, archives, information governance and digital records management for organisations.' ,
        discipline: 'Business',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Tourism and Hospitality Management', level: 'Bachelor', duration: '3 Years', description: 'Prepares graduates for tourism, hotels, events and destination management with practical industry exposure.' ,
        discipline: 'Business',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Information Technology', level: 'Bachelor', duration: '3 Years', description: 'Covers networks, systems administration, cybersecurity foundations, databases and IT support for organisational digital infrastructure.' ,
        discipline: 'Physical Sciences and Mathematics',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Science in Computer Science', level: 'Bachelor', duration: '3 Years', description: 'Core computer science including programming, algorithms, software engineering, data structures and applied computing projects.' ,
        discipline: 'Physical Sciences and Mathematics',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Science in Information System', level: 'Bachelor', duration: '3 Years', description: 'Focuses on information systems analysis, design, enterprise systems and the alignment of IT with business goals.' ,
        discipline: 'Physical Sciences and Mathematics',
        lastAccreditation: '2023-04-17',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Tourism and Conservation Management', level: 'Bachelor', duration: '3 Years', description: 'Integrates tourism development with environmental conservation, sustainable tourism and natural resource management.' ,
        discipline: 'Physical Sciences and Mathematics',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
    ],
    level: 'All Levels',
  },
  {
    id: 'nursing',
    name: 'Faculty of Nursing & Health Sciences',
    shortName: 'Nursing',
    icon: HeartPulse,
    description:
      'Developing compassionate, skilled healthcare professionals ready to serve communities across Uganda and the region.',
    longDescription:
      'The Faculty of Nursing & Health Sciences delivers Bachelor of Nursing Science and the Nursing Sciences Completion programme. Curriculum integrates clinical skills, simulation-based learning, community health, research and professional ethics. Students train in modern simulation labs and partner clinical sites. Accreditation status is current; detailed clinical placement information is provided upon admission. PhD pathways in health sciences are planned (coming soon).',
    programs: [
      { name: 'Bachelor of Nursing Science', level: 'Bachelor', duration: '4 Years', description: 'Full professional nursing degree with clinical rotations, simulation lab practice, community health and research methods.' ,
        discipline: 'Medicine and Health Sciences',
        lastAccreditation: '2022-08-22',
        reviewYear: '2027',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Nursing Sciences - Completion', level: 'Bachelor', duration: '2–3 Years', description: 'Upgrade pathway for diploma-holding nurses seeking a Bachelor qualification while continuing professional practice.' ,
        discipline: 'Medicine and Health Sciences',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Complementary Medicine (Pending Relevant Laws)', level: 'Bachelor', duration: '3–4 Years', description: 'Integrative and complementary medicine programme (subject to relevant regulatory frameworks). Combines traditional and evidence-based approaches.' ,
        discipline: 'Law',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
    ],
    level: 'All Levels',
  },
  {
    id: 'social',
    name: 'Faculty of Social & Behavioural Sciences',
    shortName: 'Social Sciences',
    icon: Users,
    description:
      'Understanding society, governance and human behaviour to build stronger communities and public institutions.',
    longDescription:
      'This faculty offers Bachelor programmes in Arts and Social Science, Public Administration, Social Work and Social Work & Social Administration. Students engage with research methods, policy analysis, community development and professional practice placements. Graduates work in government, NGOs, social services and development organisations. Programme materials are available under Downloads.',
    programs: [
      { name: 'Bachelor of Arts and Social Science', level: 'Bachelor', duration: '3 Years', description: 'Interdisciplinary social sciences covering sociology, development studies, research methods and critical analysis of society.' ,
        discipline: 'Social and Behavioral Sciences',
        lastAccreditation: '2023-10-13',
        reviewYear: '2030',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Public Administration', level: 'Bachelor', duration: '3 Years', description: 'Prepares administrators for public sector management, policy implementation, local government and public service ethics.' ,
        discipline: 'Social and Behavioral Sciences',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Social Work', level: 'Bachelor', duration: '3 Years', description: 'Professional social work education with casework, community practice, ethics and supervised field placements.' ,
        discipline: 'Social and Behavioral Sciences',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
      { name: 'Bachelor of Social Work and Social Administration', level: 'Bachelor', duration: '3 Years', description: 'Combines social work practice with social administration and policy for leadership roles in social services.' ,
        discipline: 'Social and Behavioral Sciences',
        lastAccreditation: '2025-04-25',
        reviewYear: '2032',
        campus: 'Nabweru, Kampala region' },
    ],
    level: 'All Levels',
  },
];

export type Stat = {
  value: string;
  label: string;
  icon: typeof Users;
};

export const stats: Stat[] = [
  { value: '4', label: 'Academic Faculties', icon: BookOpen },
  { value: '25+', label: 'NCHE-Aligned Programmes', icon: GraduationCap },
  { value: '3', label: 'Intakes (Jan · May · Aug)', icon: Calendar },
  { value: 'NCHE', label: 'Accredited by Council', icon: Award },
];

export const homeStats: Stat[] = [
  { value: '2016', label: 'Year established', icon: Calendar },
  { value: '25+', label: 'Bachelor programmes', icon: GraduationCap },
  { value: '4', label: 'Academic faculties', icon: BookOpen },
  { value: '1,200+', label: 'Students enrolled', icon: Users },
  { value: '3', label: 'Intakes per year', icon: Calendar },
  { value: 'NCHE', label: 'Accredited institution', icon: Award },
];

export type ResearchArea = {
  title: string;
  description: string;
  icon: typeof Microscope;
};

export const researchAreas: ResearchArea[] = [
  {
    title: 'Technology & Innovation',
    description:
      'Research spanning computer science, networking, artificial intelligence, and digital transformation to solve real-world challenges in East Africa.',
    icon: Cpu,
  },
  {
    title: 'Health & Medicine',
    description:
      'Pioneering integrative medicine research that bridges traditional healing practices with evidence-based clinical care and public health policy.',
    icon: Stethoscope,
  },
  {
    title: 'Social Sciences & Education',
    description:
      'Exploring education policy, community development, governance, and the social dynamics shaping East Africa and the Global South.',
    icon: Users,
  },
  {
    title: 'Business & Entrepreneurship',
    description:
      'Engaging students in start-up ventures, market research, and applied business innovation with measurable economic impact.',
    icon: BriefcaseBusiness,
  },
];

export type ResearchProject = {
  title: string;
  lead: string;
  faculty: string;
  status: 'Ongoing' | 'Completed' | 'Recruiting';
  description: string;
};

export const researchProjects: ResearchProject[] = [
  {
    title: 'Efficacy of Traditional Herbal Medicine in Treating Malaria',
    lead: 'Dr. Robert Kato',
    faculty: 'Faculty of Alternative Medicine & Health Sciences',
    status: 'Ongoing',
    description: 'A clinical study comparing traditional herbal remedies with standard antimalarial treatments in rural Ugandan communities.',
  },
  {
    title: 'AI-Powered Crop Disease Detection for Smallholder Farmers',
    lead: 'Dr. Samuel Wamala',
    faculty: 'Faculty of Business Administration & ICT',
    status: 'Ongoing',
    description: 'Developing a mobile application using machine learning to help farmers identify and treat crop diseases in real time.',
  },
  {
    title: 'Inclusive Education Practices in Ugandan Primary Schools',
    lead: 'Dr. Esther Namaganda',
    faculty: 'Faculty of Education & Humanities',
    status: 'Completed',
    description: 'A two-year study examining the effectiveness of inclusive education policies in government-aided primary schools across four districts.',
  },
  {
    title: 'Nursing Simulation Training Outcomes',
    lead: 'Prof. Janet Amongi',
    faculty: 'Faculty of Nursing',
    status: 'Completed',
    description: 'Evaluating the impact of simulation-based learning on clinical competence among nursing students.',
  },
  {
    title: 'Digital Financial Inclusion in East Africa',
    lead: 'Prof. David Ssali',
    faculty: 'Faculty of Business Administration & ICT',
    status: 'Recruiting',
    description: 'Investigating the role of mobile money and digital platforms in expanding financial access for unbanked populations.',
  },
  {
    title: 'Community Health Outreach Impact Assessment',
    lead: 'Dr. Alice Nabwire',
    faculty: 'Faculty of Alternative Medicine & Health Sciences',
    status: 'Ongoing',
    description: 'Measuring the health outcomes of community engagement outreach programmes in underserved Kampala neighbourhoods.',
  },
];

export type ResearchCentre = {
  name: string;
  description: string;
  icon: typeof Microscope;
};

export const researchCentres: ResearchCentre[] = [
  {
    name: 'Centre for Innovation & Technology',
    description: 'A hub for applied technology research, prototyping, and student-led innovation projects.',
    icon: Cpu,
  },
  {
    name: 'Institute of Public Health',
    description: 'Advancing community health research and policy with a focus on preventive care and health equity.',
    icon: Stethoscope,
  },
  {
    name: 'Centre for Education Research',
    description: 'Conducting studies on teaching methodology, education policy, and learning outcomes.',
    icon: BookOpen,
  },
  {
    name: 'Entrepreneurship & Business Lab',
    description: 'Supporting student start-ups, market research, and applied business innovation.',
    icon: BriefcaseBusiness,
  },
];

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 'august-2026-admissions-open',
    date: '14 May 2026',
    category: 'Admissions',
    title: 'Admissions for 2026 August Intake Are Open',
    excerpt:
      'The doors of Avance International University are open for all eligible applicants. Apply now for Certificate, Diploma, Bachelor and Postgraduate programmes. Contact Admissions for current support options.',
    fullContent:
      'Admission for the August 2026 Intake is now open. Avance International University invites all eligible applicants to begin their academic journey with an institution committed to excellence, innovation, and practical skills. Programmes are offered across faculties and schools including Education, Business and Computer Science, Nursing & Midwifery, Allied Health Sciences, Law, and Vocational Studies. Nabweru Campus – Wakiso District. Call +256 700 670 691 / +256 766 751 763 or apply online at aviu.ac.ug.',
  },
  {
    id: 'august-intake-2026',
    date: '28 Aug 2026',
    category: 'Admissions',
    title: 'August 2026 Intake Now Open for Applications',
    excerpt:
      'Avance International University announces admissions for the August 2026 intake across all faculties and programme levels. Prospective students are encouraged to apply early.',
    fullContent:
      'The Office of the Academic Registrar invites applications from suitably qualified candidates for the August 2026 intake. Programmes are available at Certificate, Diploma, Bachelor, Postgraduate Diploma, and Masters levels across all faculties and schools. Applications can be submitted online or in person at the admissions office. Prospective students are encouraged to apply early to secure their place and access available scholarships and discounts.',
  },
  {
    id: 'tuition-payment-memo',
    date: '22 Aug 2026',
    category: 'Student Notice',
    title: 'Memo from the Bursar on Registration & Payment',
    excerpt:
      'Important information regarding registration timelines and payment guidance. Detailed fee schedules are coming soon.',
    fullContent:
      'All students are reminded that full tuition payment must be completed before the registration period closes. A surcharge will be applied to all late registrations as outlined in the academic calendar. Students experiencing financial difficulties are encouraged to contact the bursar\u2019s office to discuss available payment plans. The university remains committed to making education affordable and accessible to all qualifying students.',
  },
  {
    id: 'innovation-centre-launch',
    date: '15 Aug 2026',
    category: 'Campus',
    title: 'New Innovation Centre Opens Its Doors',
    excerpt:
      'The fully equipped innovation centre provides students with hands-on access to modern laboratories, technology-enhanced learning, and collaborative project spaces.',
    fullContent:
      'Avance International University has officially opened its new Innovation Centre, a state-of-the-art facility designed to foster creativity, collaboration, and hands-on learning. The centre features modern laboratories, computer stations, prototyping equipment, and flexible project spaces. It will serve as the home for student start-up ventures, faculty research projects, and community engagement initiatives. The innovation centre represents a significant investment in the future of our students and the communities we serve.',
  },
  {
    id: 'nursing-simulation-lab',
    date: '02 Aug 2026',
    category: 'Academics',
    title: 'Nursing Faculty Launches Advanced Simulation Lab',
    excerpt:
      'The Faculty of Nursing unveils a state-of-the-art simulation laboratory, giving students real clinical experience in a controlled learning environment.',
    fullContent:
      'The Faculty of Nursing has unveiled its new advanced simulation laboratory, equipped with high-fidelity patient manikins, clinical monitoring equipment, and interactive learning stations. The lab allows nursing students to practice clinical procedures, emergency response, and patient care scenarios in a safe, controlled environment before working with real patients. This investment significantly enhances the quality of clinical training and better prepares graduates for the realities of modern healthcare practice.',
  },
  {
    id: 'research-grant-awarded',
    date: '20 Jul 2026',
    category: 'Research',
    title: 'AVIU Researchers Awarded Grant for Integrative Medicine Study',
    excerpt:
      'A team from the Faculty of Alternative Medicine has received funding to study the efficacy of traditional healing practices alongside modern clinical methods.',
    fullContent:
      'A research team led by Dr. Robert Kato from the Faculty of Alternative Medicine & Health Sciences has been awarded a significant grant to conduct a clinical study on the efficacy of traditional herbal medicine in treating malaria. The two-year study will compare outcomes of traditional remedies with standard antimalarial treatments in rural Ugandan communities. The research has the potential to influence public health policy and expand access to affordable treatment options.',
  },
  {
    id: 'business-startup-fair',
    date: '10 Jul 2026',
    category: 'Events',
    title: 'Student Startup Fair Showcases Entrepreneurial Talent',
    excerpt:
      'Students from the Faculty of Business Administration presented their ventures to industry leaders at the annual startup fair.',
    fullContent:
      'The annual Student Startup Fair brought together over 200 students, faculty, and industry leaders to celebrate student entrepreneurship. Twenty student teams pitched their business ventures to a panel of investors and industry experts, with three teams receiving funding commitments. The event highlighted the university\u2019s commitment to fostering innovation and entrepreneurship as core components of the student experience.',
  },
  {
    id: 'moot-court-success',
    date: '28 Jun 2026',
    category: 'Achievement',
    title: 'AVIU Students Excel at Inter-University Moot Court Competition',
    excerpt:
      'Our students demonstrated outstanding legal reasoning and advocacy skills at the regional moot court competition.',
    fullContent:
      'A team of students from the Faculty of Education & Humanities represented Avance International University at the annual Inter-University Moot Court Competition, finishing in the top three among twelve participating institutions. The team was praised for their legal reasoning, oral advocacy, and teamwork. This achievement reflects the university\u2019s commitment to producing graduates who excel in critical thinking and public communication.',
  },
  {
    id: 'community-health-outreach',
    date: '15 Jun 2026',
    category: 'Community',
    title: 'Nursing Students Lead Community Health Outreach in Kampala',
    excerpt:
      'Final-year nursing students provided free health screenings and education to over 500 community members.',
    fullContent:
      'Final-year nursing students from the Faculty of Nursing organised a community health outreach programme in Kawempe Division, Kampala. The initiative provided free blood pressure screening, diabetes testing, health education, and first aid training to over 500 community members. The outreach is part of the university\u2019s commitment to community engagement and gives students valuable real-world clinical experience while serving underserved populations.',
  },
  {
    id: 'partnership-signing',
    date: '01 Jun 2026',
    category: 'Partnership',
    title: 'AVIU Signs Partnership with Regional Health Authority',
    excerpt:
      'The partnership will create new clinical placement opportunities for nursing and health sciences students.',
    fullContent:
      'Avance International University has signed a memorandum of understanding with the Regional Health Authority to create structured clinical placement opportunities for nursing and health sciences students. The partnership will give students access to regional hospitals and health centres for their practical training, enhancing the quality of clinical education and strengthening the university\u2019s links with the healthcare sector.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  program: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Studying Information Technology has equipped me with practical skills in programming, networking, and system management. The hands-on projects have prepared me to solve real-world tech challenges with confidence.',
    name: 'Kaaya Wycliffe',
    program: 'BSc Information Technology',
    initials: 'KW',
  },
  {
    quote:
      'Choosing Information Technology was the best decision for my future. I have gained technical expertise, innovation skills, and the confidence to build digital solutions that make a difference.',
    name: 'Kirawusi Vian',
    program: 'BSc Information Technology',
    initials: 'KV',
  },
  {
    quote:
      'Studying Business has opened my mind to endless opportunities. The practical approach to learning, case studies, and real-world projects have prepared me to confidently step into the corporate world.',
    name: 'Nakibuuka Maria Immy',
    program: 'BA Business Administration',
    initials: 'NM',
  },
  {
    quote:
      'From simulation labs to real clinical experience, every step of my Nursing journey has been impactful. The mentorship and guidance from our tutors inspire me to always give my best.',
    name: 'Nagawa Jamimmar',
    program: 'BSc Nursing',
    initials: 'NJ',
  },
  {
    quote:
      'The Education programme at AVIU transformed my understanding of teaching. The research-oriented approach helped me see education as a tool for social change, not just a career.',
    name: 'Opio Daniel',
    program: 'Bachelor of Education',
    initials: 'OD',
  },
  {
    quote:
      'The innovation hub gave me the space and resources to turn my idea into a real business. I graduated not just with a degree, but with a running company.',
    name: 'Achieng Brenda',
    program: 'BSc Computer Science',
    initials: 'AB',
  },
];

export const universityInfo = {
  name: 'Avance International University',
  tagline: 'Enhancing Innovations',
  established: 'Private Institution · Founded 2016 · Uganda',
  email: 'info@aviu.ac.ug',
  phone: '+256 700 670 691',
  phoneAlt: '+256 766 751 763',
  address: '1km off Nansana-Hoima Road, Nabweru, Wakiso District, Uganda',
  website: 'aviu.ac.ug',
  // Official social media pages. Paste the full page address for each one; empty ones are hidden.
  social: {
    facebook: '',
    x: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  },
  // NCHE accreditation details shown in the footer once filled in.
  accreditation: {
    licenceNumber: '',
    certificateUrl: '',
  },
  description:
    'Avance International University is a private university registered and accredited by the National Council for Higher Education (NCHE). We identify, analyse and focus on each student\u2019s strengths, and shape them so they apply them in today\u2019s competitive world of work. All programmes are designed to equip students with relevant knowledge and practical skills to address real-world challenges.',
  mission:
    'To provide transformative and innovative higher education services that meet societal needs.',
  vision:
    'To be a premier innovative higher education institution for social, economic and technological transformation in Africa.',
  coreValues: [
    'Diversity — We embrace different backgrounds, perspectives, and ideas.',
    'Excellence — We strive for the highest standards in education, research, and service.',
    'Sustainability — We promote responsible practices that support future generations.',
    'Integrity — We uphold honesty, transparency, and ethical conduct.',
    'Innovation — We encourage creativity and forward-thinking solutions.',
    'Affordability — We believe quality education should be accessible to all.',
  ],
  features: [
    'Accredited by the National Council for Higher Education (NCHE) — unche.or.ug',
    'Hands-on, competence-based teaching with field attachments',
    'Bachelor programmes across Education, Business & ICT, Nursing and Social Sciences',
    'Technology-enhanced learning and e-learning platform',
    'Research-oriented training across all programmes',
    'Student engagement in start-ups, community and industry projects',
    'Three main intakes per year: January, May and August',
    'Merit scholarships and support options (details from Admissions)',
    'Nabweru campus, Wakiso District — accessible from Kampala',
  ],
  accreditations: [
    { name: 'NCHE', detail: 'National Council for Higher Education — https://unche.or.ug/' },
    { name: 'ASIC', detail: 'Institutional accreditation' },
    { name: 'ISO', detail: '9001:2015 Quality Management' },
  ],
  history: [
    {
      year: '2016',
      event: 'Avance International University is founded as a private institution in Uganda, registered and later accredited by the National Council for Higher Education (NCHE).',
    },
    {
      year: '2014',
      event: 'First cohort of students admitted across the Faculty of Education and Faculty of Business Administration & ICT.',
    },
    {
      year: '2016',
      event: 'Faculty of Alternative Medicine & Health Sciences established, expanding the university\u2019s health education portfolio.',
    },
    {
      year: '2018',
      event: 'Faculty of Nursing launched with a Bachelor of Science in Nursing programme and the first simulation laboratory.',
    },
    {
      year: '2020',
      event: 'AVIU rapidly expands its e-learning platform, ensuring uninterrupted education during the global pandemic.',
    },
    {
      year: '2023',
      event: 'Innovation Centre opens, providing students with modern laboratories and collaborative project spaces.',
    },
    {
      year: '2025',
      event: 'Advanced nursing simulation lab unveiled and partnership signed with the Regional Health Authority.',
    },
  ],
  governance: [
    { title: 'Board of Directors', description: 'The governing body responsible for the strategic direction and oversight of the university.' },
    { title: 'Chancellor', description: 'The ceremonial head of the university who confers degrees and represents the institution at official functions.' },
    { title: 'University Council', description: 'The policy-making organ of the university, responsible for academic and administrative governance.' },
    { title: 'Senate', description: 'The supreme academic authority, responsible for academic programmes, standards, and regulations.' },
    { title: 'Management', description: 'The day-to-day leadership team led by the Vice Chancellor and Deputy Vice Chancellars.' },
  ],
};

export type StaffMember = {
  name: string;
  role: string;
  category: 'Academic' | 'Administrative';
  initials: string;
  qualification: string;
};

export const staffMembers: StaffMember[] = [
  { name: 'Rt. Rev. James William Ssebaggala', role: 'Chancellor', category: 'Administrative', initials: 'JS', qualification: 'Retired Bishop of Mukono Diocese' },
  { name: 'Dr. Joshua Kato Kimata', role: 'Vice Chancellor', category: 'Administrative', initials: 'JK', qualification: 'PhD' },
  { name: 'Dr. Gracious Ariyo', role: 'Chairperson, Board of Directors', category: 'Administrative', initials: 'GA', qualification: 'PhD' },
  { name: 'Dr. Julius Arinaitwe', role: 'Chairperson, University Council', category: 'Administrative', initials: 'JA', qualification: 'PhD' },
  { name: 'Dr. Betty Mategeko', role: 'Director, Quality Assurance', category: 'Administrative', initials: 'BM', qualification: 'PhD' },
  { name: 'Dr. Etoru Martin', role: 'Former Vice Chancellor', category: 'Administrative', initials: 'EM', qualification: 'PhD' },
  { name: 'Mr. Anthony Uwaya', role: 'Deputy Vice Chancellor', category: 'Administrative', initials: 'AU', qualification: 'Senior Administrative Officer' },
  { name: 'Ms. Florence Mirembe', role: 'Director, Library & Information Resources', category: 'Administrative', initials: 'FM', qualification: 'MLS' },
  { name: 'Mr. David Ochieng', role: 'Director, ICT Services', category: 'Administrative', initials: 'DO', qualification: 'MSc' },
  { name: 'Ms. Grace Akello', role: 'Director, Internal Audit & Risk', category: 'Administrative', initials: 'GA', qualification: 'ACCA, CPA Uganda' },
  { name: 'Prof. David Ssali', role: 'Dean, Faculty of Business Administration & ICT', category: 'Academic', initials: 'DS', qualification: 'PhD, University of Cape Town' },
  { name: 'Dr. Esther Namaganda', role: 'Dean, Faculty of Education & Humanities', category: 'Academic', initials: 'EN', qualification: 'PhD, University of Bristol' },
  { name: 'Dr. Robert Kato', role: 'Dean, Faculty of Alternative Medicine & Health Sciences', category: 'Academic', initials: 'RK', qualification: 'MD, Mbarara University' },
  { name: 'Prof. Janet Amongi', role: 'Dean, Faculty of Nursing', category: 'Academic', initials: 'JA', qualification: 'PhD, University of Edinburgh' },
  { name: 'Dr. Samuel Wamala', role: 'Head of Department, Information Technology', category: 'Academic', initials: 'SW', qualification: 'PhD, University of Pretoria' },
  { name: 'Dr. Peter Busimba', role: 'Head of Department, Computer Science', category: 'Academic', initials: 'PB', qualification: 'PhD, University of the Witwatersrand' },
  { name: 'Ms. Ruth Achan', role: 'Head of Department, Business Management', category: 'Academic', initials: 'RA', qualification: 'MBA, Makerere University' },
  { name: 'Dr. Moses Opio', role: 'Head of Department, Education', category: 'Academic', initials: 'MO', qualification: 'PhD, University of Nairobi' },
  { name: 'Dr. Alice Nabwire', role: 'Head of Department, Health Sciences', category: 'Academic', initials: 'AN', qualification: 'PhD, Mbarara University' },
  { name: 'Ms. Harriet Nankya', role: 'Head of Department, Nursing', category: 'Academic', initials: 'HN', qualification: 'MSc Nursing, Makerere University' },
  { name: 'Mr. Brian Ssebunya', role: 'Lecturer, Multimedia & Graphic Design', category: 'Academic', initials: 'BS', qualification: 'MA, Uganda Christian University' },
  { name: 'Dr. Christine Atukunda', role: 'Lecturer, Public Health', category: 'Academic', initials: 'CA', qualification: 'PhD, University of Ghent' },
  { name: 'Mr. Felix Owino', role: 'Lecturer, Computer Networking', category: 'Academic', initials: 'FO', qualification: 'MSc, Kyambogo University' },
  { name: 'Ms. Joan Namatovu', role: 'Lecturer, Business Administration', category: 'Academic', initials: 'JN', qualification: 'MBA, Uganda Management Institute' },
];

export type EventItem = {
  id: string;
  date: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  category: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: 'innovation-fair-2026',
    date: '2026-09-15',
    day: '15',
    month: 'Sep',
    title: 'AVIU Innovation Fair 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Innovation Centre, Main Campus',
    category: 'Events',
    description: 'Students and faculty showcase cutting-edge projects in technology, health sciences, and business innovation. Industry partners and the public are invited to attend.',
  },
  {
    id: 'nursing-graduation',
    date: '2026-09-20',
    day: '20',
    month: 'Sep',
    title: 'Faculty of Nursing Graduation Ceremony',
    time: '10:00 AM',
    location: 'Main Hall, AVIU Campus',
    category: 'Ceremony',
    description: 'Celebrating the achievements of our latest cohort of nursing graduates as they enter the healthcare profession.',
  },
  {
    id: 'research-conference',
    date: '2026-10-05',
    day: '05',
    month: 'Oct',
    title: 'Annual Research Conference',
    time: '8:30 AM - 5:00 PM',
    location: 'Conference Hall, Main Campus',
    category: 'Conference',
    description: 'A full day of research presentations from faculty and postgraduate students across all four faculties, with keynote speakers from partner institutions.',
  },
  {
    id: 'community-engagement',
    date: '2026-10-12',
    day: '12',
    month: 'Oct',
    title: 'Community Engagement Day',
    time: '9:00 AM - 1:00 PM',
    location: 'Outreach - Kampala District',
    category: 'Community',
    description: 'Students and staff participate in community service activities including health outreach, education support, and environmental conservation.',
  },
  {
    id: 'open-day',
    date: '2026-10-25',
    day: '25',
    month: 'Oct',
    title: 'Open Day for Prospective Students',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Campus',
    category: 'Admissions',
    description: 'Prospective students and their families are invited to tour the campus, meet faculty, and learn about programmes for the January 2027 intake.',
  },
  {
    id: 'startup-pitch',
    date: '2026-11-08',
    day: '08',
    month: 'Nov',
    title: 'Student Startup Pitch Competition',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Centre',
    category: 'Events',
    description: 'Student entrepreneurs pitch their business ventures to a panel of investors and industry leaders for funding and mentorship opportunities.',
  },
  {
    id: 'public-health-symposium',
    date: '2026-11-15',
    day: '15',
    month: 'Nov',
    title: 'Public Health Symposium',
    time: '9:00 AM - 3:00 PM',
    location: 'Conference Hall, Main Campus',
    category: 'Conference',
    description: 'A symposium bringing together health professionals, researchers, and students to discuss emerging public health challenges in East Africa.',
  },
  {
    id: 'education-graduation',
    date: '2026-12-05',
    day: '05',
    month: 'Dec',
    title: 'Faculty of Education Graduation Ceremony',
    time: '10:00 AM',
    location: 'Main Hall, AVIU Campus',
    category: 'Ceremony',
    description: 'Celebrating the achievements of our education and humanities graduates as they enter the teaching profession.',
  },
  {
    id: 'january-intake-orientation',
    date: '2027-01-10',
    day: '10',
    month: 'Jan',
    title: 'January 2027 Intake Orientation Week',
    time: 'All Day',
    location: 'Main Campus',
    category: 'Admissions',
    description: 'Welcome week for new students joining the January 2027 intake, including campus tours, faculty introductions, and programme briefings.',
  },
];

export type StudentLifeItem = {
  title: string;
  description: string;
  icon: typeof Users;
};

export const studentLifeItems: StudentLifeItem[] = [
  {
    title: 'Studying at AVIU',
    description: 'We provide resources that enrich both the student experience and campus life, from academic support to extracurricular activities.',
    icon: BookOpen,
  },
  {
    title: 'Innovation Hub',
    description: 'A dedicated space where students develop ideas, build prototypes, and collaborate on projects that solve real-world problems.',
    icon: Lightbulb,
  },
  {
    title: 'Student Guild',
    description: 'The student guild represents the student body, organises events, and advocates for student welfare throughout the academic year.',
    icon: Users,
  },
  {
    title: 'Community Engagement',
    description: 'Students participate in outreach activities that give back to the community, building civic responsibility alongside academic skills.',
    icon: Globe2,
  },
  {
    title: 'Accommodation',
    description: 'We assist students in finding safe, affordable housing near campus, with guidance on options that suit different budgets.',
    icon: Building2,
  },
  {
    title: 'Sports & Recreation',
    description: 'From football to debate club, AVIU offers a range of activities to keep students active, engaged, and connected outside the classroom.',
    icon: Trophy,
  },
  {
    title: 'Counselling & Wellbeing',
    description: 'Confidential counselling services and mental health support are available to all students throughout their academic journey.',
    icon: HandHeart,
  },
  {
    title: 'Career Services',
    description: 'Career guidance, internship placements, and employer connections to help students transition from university to the workplace.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Student Portal & E-Learning',
    description: 'Access timetables, results, course materials, and interactive online learning through our technology-enhanced platform.',
    icon: Cpu,
  },
];

export type CampusFacility = {
  name: string;
  description: string;
  icon: typeof Building2;
};

export const campusFacilities: CampusFacility[] = [
  {
    name: 'Innovation Centre',
    description: 'A fully equipped facility with modern laboratories, prototyping equipment, and collaborative project spaces for student innovation.',
    icon: Lightbulb,
  },
  {
    name: 'Nursing Simulation Lab',
    description: 'High-fidelity patient manikins and clinical monitoring equipment for hands-on nursing education.',
    icon: Beaker,
  },
  {
    name: 'University Library',
    description: 'A comprehensive physical and digital library with quiet study spaces, reference collections, and computer stations.',
    icon: Library,
  },
  {
    name: 'Computer Laboratories',
    description: 'Modern computing facilities with high-speed internet, specialised software, and technical support.',
    icon: Cpu,
  },
  {
    name: 'Lecture Halls',
    description: 'Spacious, technology-enabled lecture halls designed for interactive and engaging learning.',
    icon: Presentation,
  },
  {
    name: 'Sports Grounds',
    description: 'Outdoor sports facilities including a football pitch, volleyball court, and athletics track.',
    icon: Trophy,
  },
];

export type LibraryResource = {
  title: string;
  description: string;
  icon: typeof BookOpen;
};

export const libraryResources: LibraryResource[] = [
  {
    title: 'E-Library',
    description: 'Access thousands of digital books, journals, and research papers through our online library platform, available 24/7 to all registered students.',
    icon: BookOpen,
  },
  {
    title: 'Electronic Resources',
    description: 'A curated collection of academic databases, e-journals, and digital archives supporting research across all faculties.',
    icon: Globe2,
  },
  {
    title: 'Physical Library',
    description: 'Our campus library offers quiet study spaces, reference collections, and dedicated computer stations for research and coursework.',
    icon: Library,
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online courses, video lessons, and live classes through our technology-enhanced learning management system.',
    icon: Lightbulb,
  },
  {
    title: 'Research Repository',
    description: 'A digital archive of student and faculty research outputs, including theses, dissertations, and published papers.',
    icon: Microscope,
  },
  {
    title: 'Student Portal',
    description: 'Access timetables, results, course materials, and academic records through the secure student portal.',
    icon: Users,
  },
];

export const libraryHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'E-Library', hours: '24/7 Online Access' },
];

export type FeeItem = {
  programme: string;
  uganda: string;
  international: string;
  perLabel: string;
};

export const feeStructure: FeeItem[] = [
  // Fee amounts temporarily withheld — detailed structure coming soon. Contact Admissions.
];

export const feePaymentInfo = [
  {
    title: 'Payment Methods',
    description: 'Tuition can be paid via bank transfer, mobile money, or direct deposit at the bursar\u2019s office. Payment plans are available for students who need to pay in instalments.',
  },
  {
    title: 'Registration & Surcharge',
    description: 'Students must complete full tuition payment before registration closes. A surcharge applies for late registration as outlined in the academic calendar.',
  },
  {
    title: 'Scholarships & Discounts',
    description: 'AVIU offers merit-based scholarships for qualifying students. Contact Admissions for current opportunities.',
  },
  {
    title: 'Refund Policy',
    description: 'Refunds are processed according to the university\u2019s fee policy. Students who withdraw before the third week of the semester may be eligible for a partial refund.',
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const admissionFAQs: FAQItem[] = [
  {
    question: 'When can I apply to Avance International University?',
    answer: 'AVIU offers three intakes per year: January, May and August. Applications typically open two to three months before each intake. The August 2026 intake is currently accepting applications until 16th September 2026.',
  },
  {
    question: 'What are the entry requirements for undergraduate programmes?',
    answer: 'Applicants for bachelor\u2019s programmes need at least two principal passes at A\u2019Level or an equivalent qualification. Diploma programmes require O\u2019Level certificates, and certificate programmes have specific requirements listed on each programme page.',
  },
  {
    question: 'Can I pay tuition in instalments?',
    answer: 'Yes, AVIU offers flexible payment plans. Students can arrange to pay tuition in two or three instalments per semester. Contact the bursar\u2019s office to set up a payment plan.',
  },
  {
    question: 'Does AVIU offer scholarships?',
    answer: 'Merit-based scholarships and other forms of support are available for qualifying students. The Admissions office can provide details on current opportunities and eligibility. Fee schedules will be published shortly.',
  },
  {
    question: 'Are there online learning options?',
    answer: 'Yes, AVIU has a robust e-learning platform with over 3 million video lessons and 2,500+ daily live classes. Many programmes offer blended learning options combining online and in-person instruction.',
  },
  {
    question: 'How long does the admissions process take?',
    answer: 'Once all required documents are submitted, the admissions team typically reviews applications and communicates decisions within two weeks. Early application is recommended to allow ample time for processing.',
  },
  {
    question: 'Does AVIU accept international students?',
    answer: 'Yes, AVIU welcomes international students. International applicants should submit certified academic transcripts, proof of English proficiency, and a valid passport. International applicants should contact Admissions for guidance on fees and requirements (detailed fee schedules coming soon).',
  },
  {
    question: 'What support services are available for students?',
    answer: 'AVIU offers counselling services, career guidance, academic support, accommodation assistance, and a dedicated student portal for accessing academic resources and support.',
  },
];

export type PartnerItem = {
  name: string;
  type: string;
};

export const partners: PartnerItem[] = [
  { name: 'Regional Health Authority', type: 'Healthcare Partnership' },
  { name: 'Pearson Edexcel', type: 'Academic Accreditation' },
  { name: 'ASIC', type: 'Institutional Accreditation' },
  { name: 'NCHE Uganda', type: 'National Accreditation' },
  { name: 'Uganda Bankers Association', type: 'Industry Partnership' },
  { name: 'Kampala City Council', type: 'Community Partnership' },
];

export type NavLink = { label: string; path: string };

export const navLinks: NavLink[] = [
  { label: 'Study', path: '/study' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Research', path: '/research' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Staff', path: '/staff' },
  { label: 'Library', path: '/library' },
  { label: 'Fees (Coming Soon)', path: '/fees' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];


/**
 * Fee schedule. Add one row per programme and the Fees page shows the table automatically.
 * Example: { programme: 'Bachelor of Business Administration', level: 'Bachelor', perSemester: 'UGX 0', notes: '' }
 */
export type FeeRow = { programme: string; level: string; perSemester: string; notes?: string };
export const feeSchedule: FeeRow[] = [];
export const feesLastUpdated = '';
