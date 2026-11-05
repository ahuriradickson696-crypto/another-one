import { useState } from 'react';
import { Award, GraduationCap, Search, Music } from 'lucide-react';

const graduates = [

  { name: 'MWEBAZA Joshua', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'NYITI Herbert', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'ONGUU Felix', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'BIIRA Hawa Malungula', program: 'Bachelor of Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'WANDERA Farouk', program: 'Bachelor of Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'MIREMBE Rebecca', program: 'Bachelor of Early Childhood Dev.', faculty: 'Education & Humanities' },
  { name: 'AKANDWANAHO Samson', program: 'Complementary & Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'MABIRIIZI Asuman', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NATUKUNDA Catherine', program: 'HEC Humanities', faculty: 'HEC' }
];

export function Graduation() {
  const [search, setSearch] = useState('');
  const [facultyFilter, setFacultyFilter] = useState('All');

  const graduates = [
    // PGDE
    { name: "ATUHAIRE Adrine Ndyaba", program: "Post Graduate Diploma in Education", faculty: "Education & Humanities" },
    { name: "SSENYONGA Gabriel", program: "Post Graduate Diploma in Education", faculty: "Education & Humanities" },
    { name: "TUMUSIIME Roger", program: "Post Graduate Diploma in Education", faculty: "Education & Humanities" },
    // Bachelors in Education
    { name: "MWEBAZA Joshua", program: "Bachelor of Education (Secondary)", faculty: "Education & Humanities" },
    { name: "NYITI Herbert", program: "Bachelor of Education (Secondary)", faculty: "Education & Humanities" },
    { name: "ONGUU Felix", program: "Bachelor of Education (Secondary)", faculty: "Education & Humanities" },
    { name: "BIIRA Hawa Malungula", program: "Bachelor of Education (Primary)", faculty: "Education & Humanities" },
    { name: "WANDERA Farouk", program: "Bachelor of Education (Primary)", faculty: "Education & Humanities" },
    // BECD

    // DEP
    { name: "ISABIRYE Huzaifa Nziba", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "NAMAZZINA Aminah", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "MALINGA Simon", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "NAMANJA Kulusumu", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "ASIIMIRE Joserine", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "NANUNDA Christine", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    { name: "ATUHURIRA Justus", program: "Diploma in Education (Primary)", faculty: "Education & Humanities" },
    // DECD
    { name: "NALWEYISO Ritah", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAFULA Ritah", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAHWEERA Scovi", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKITTO Dianah Lillian", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "MUGOYA Christopher", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKIGANDA Christine", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "KANSIIME Immaculate", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "LUBUGA Caroline", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "BASILIKA Nulu", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMATA Swaburah", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKANJAKO Joyce", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKIGANDA Maureen", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANDYOZA Mariam", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "BABIRYE Jackline", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANGOOBA Florence", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKABUGO Sophia", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANTONGO Rose", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NALUBEGA Bridget", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMULINDWA Christine", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANSUKUSA Mariam", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMAGEMBE Rachel", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABWIRE Elizabeth", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAGGINDA VIVIAN", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "SSEKITOLEKO Ronald", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMPITA Betty", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMAYANJA Lilian", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NASSAKA Latifah", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABUKEERA Justine", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NATUKWASA Brenda", program: "Diploma in Early Childhood Development", faculty: "Education & Humanities" },
    // CECD
    { name: "NAMUYOMBA PATRA", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "MPUMIRWE SHAMIM", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANFUNA Noeline", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "Baluka Jackline", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMAYANJA Afusa", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "ATAYO Agnes", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKAZZI Esther Mariam", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "ALAKUT Rebecca", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NANKYA Shakirah", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABENGO Suianah", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABULIME Miisa", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABBOSA Fatumah", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMUDDU Janet", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMAYANJA Swaiba", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "PANDE Juma", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAKAWUNGU Swaburah", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMBALIRWA Joweria", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "MUHINDO Peresi", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "BIIRA Kedrine", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "ALOKO Clara", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NALUYIMA Dorothy Kwagala", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "DDUNGU Robert", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "KIZZA Florence Kyabe", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMUKASA Oliver", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "BABIYRE Royce", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "KATUSIIME enid", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "MPOZA Abdushakul", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NABAASA Christine", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NAMULEME Teopister", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "TABINGWA Vivian", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "WANYENYA Shalon", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "KOBUSINGE Catherine", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    { name: "NALUTAAYA Sophia", program: "Certificate in Early Childhood Development", faculty: "Education & Humanities" },
    // CCC & DSW
    { name: "NABANOBAMOREEN", program: "Certificate in Child Care", faculty: "Education & Humanities" },
    { name: "NANTONGO Maria Imelda", program: "Certificate in Child Care", faculty: "Education & Humanities" },
    { name: "KYOZIRA Sandra", program: "Diploma in Social Works", faculty: "Education & Humanities" },
    // Business & ICT

    { name: "JJAGWE Abdul", program: "Diploma in Business Administration", faculty: "Business & ICT" },
    { name: "NOWANGYE Elias", program: "Diploma in Business Administration", faculty: "Business & ICT" },
    { name: "NASSUNA Bushira", program: "Diploma in Hotel and Tourism Management", faculty: "Business & ICT" },
    { name: "MBOIZI Julius", program: "Diploma in Computer Science", faculty: "Business & ICT" },
    // HEC
    { name: "MABIRIIZI Asuman", program: "HEC Biological", faculty: "HEC" },
    { name: "NAMUSISI Esther Christine", program: "HEC Biological", faculty: "HEC" },
    { name: "AGAPE Musafiri", program: "HEC Biological", faculty: "HEC" },
    { name: "NAKAZZI Jaliah Shanitah", program: "HEC Biological", faculty: "HEC" },
    { name: "NAMASABA Jacinta", program: "HEC Biological", faculty: "HEC" },
    { name: "NAKIBENGE Jamal", program: "HEC Biological", faculty: "HEC" },
    { name: "KISAKYE Tracy", program: "HEC Biological", faculty: "HEC" },
    { name: "KAREMA Martha", program: "HEC Biological", faculty: "HEC" },
    { name: "GWOKYALYA Juliet", program: "HEC Biological", faculty: "HEC" },
    { name: "NANYUMBA Allan", program: "HEC Biological", faculty: "HEC" },
    { name: "NAGAWA Zaharah", program: "HEC Biological", faculty: "HEC" },
    { name: "GATDIET Gatguy Karach", program: "HEC Biological", faculty: "HEC" },
    { name: "KIKOMEKO Jonathan", program: "HEC Biological", faculty: "HEC" },
    { name: "KIYANGA David", program: "HEC Biological", faculty: "HEC" },
    { name: "SSENTONGO Ian Masole", program: "HEC Biological", faculty: "HEC" },
    { name: "OYITE Juma", program: "HEC Biological", faculty: "HEC" },
    { name: "MUTYABA Charles", program: "HEC Biological", faculty: "HEC" },
    { name: "NAKABUGO Maria Ritah", program: "HEC Biological", faculty: "HEC" },
    { name: "ENGOLE Michael", program: "HEC Biological", faculty: "HEC" },
    { name: "MUKUVE Kalimu", program: "HEC Biological", faculty: "HEC" },
    { name: "AMONGI Fortunate", program: "HEC Biological", faculty: "HEC" },
    { name: "OBUA Daniel", program: "HEC Biological", faculty: "HEC" },
    { name: "NATUKUNDA Catherine", program: "HEC Humanities", faculty: "HEC" },
    { name: "NANTETSA Julian", program: "HEC Humanities", faculty: "HEC" },
    { name: "NYAMAL Biel Pal Kueth", program: "HEC Humanities", faculty: "HEC" },
    { name: "NAKIGUDDE Zoe", program: "HEC Humanities", faculty: "HEC" },
    { name: "GATDIEL Gatquey Karach", program: "HEC Humanities", faculty: "HEC" },
    { name: "ELIJAH Riak Kuach Belieks", program: "HEC Humanities", faculty: "HEC" },
    { name: "TAMALE Kalidi", program: "HEC Humanities", faculty: "HEC" },
    { name: "OMODING Joseph", program: "HEC Humanities", faculty: "HEC" },
    { name: "NABUTTUWA Rachael", program: "HEC Humanities", faculty: "HEC" },
    { name: "OULE Darlington", program: "HEC Humanities", faculty: "HEC" },
    { name: "PETER Ran Thak Kuon", program: "HEC Humanities", faculty: "HEC" },
    { name: "NSUBUGA Adolf", program: "HEC Humanities", faculty: "HEC" },
    { name: "MONDAY John", program: "HEC Humanities", faculty: "HEC" },
    { name: "MUSOSI Jovan", program: "HEC Humanities", faculty: "HEC" },
    { name: "NAIGULU Shakirah", program: "HEC Humanities", faculty: "HEC" },
    { name: "NAMAYANJA Jovia", program: "HEC Humanities", faculty: "HEC" },
    { name: "OLUM Haron", program: "HEC Humanities", faculty: "HEC" },
    { name: "FORTUNATE Evelyne", program: "HEC Humanities", faculty: "HEC" },
    { name: "MUDONDO Sharon", program: "HEC Humanities", faculty: "HEC" },
    { name: "BAKUNZI Brain", program: "HEC Humanities", faculty: "HEC" },
    { name: "NAMATENDE Janat", program: "HEC Humanities", faculty: "HEC" },
    { name: "NANKYA Hilda Faith", program: "HEC Humanities", faculty: "HEC" },
    { name: "ACIENG Elizabeth", program: "HEC Humanities", faculty: "HEC" },
    { name: "KODET Moses", program: "HEC Humanities", faculty: "HEC" },
    { name: "BUKUMUNE Nassim", program: "HEC Humanities", faculty: "HEC" },
    { name: "ASIMMWE Innocent", program: "HEC Humanities", faculty: "HEC" },
    // Health Sciences
    { name: "AKANDWANAHO Samson", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NADEDDE Mathias", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NAMBUYA Annet", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NAKABITO Kayiza Margret", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NSEREKO Christopher", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NASSOLO Aisha Musubire", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "JOSIAH Chris Nsereko", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "NALUNGA Nusuwati", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" },
    { name: "MUSOKE Hilton", program: "Complementary and Alternative Medicine", faculty: "Health Sciences" }
  ];

  // Auto-calculate filteredGrads if not defined
  const filteredGrads = graduates.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase()) || g.program.toLowerCase().includes(search.toLowerCase());
    const matchesFaculty = facultyFilter === 'All' || g.faculty === facultyFilter;
    return matchesSearch && matchesFaculty;
  });

  return (
    <div className="page-content" style={{ background: '#f9f6fd', paddingBottom: '80px' }}>
      
      {/* HERO SECTION - LIGHT BG WITH PURPLE TEXT */}
      <section style={{ 
        position: 'relative', 
        backgroundColor: '#ffffff', 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)), url(/images/graduates-seated.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: '#3d1a6b',
        padding: '120px 20px 100px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#3d1a6b', color: '#ffffff', padding: '8px 20px', borderRadius: '999px', fontWeight: 800, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Class of 2026
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontFamily: "'Playfair Display', serif", fontWeight: 700, margin: 0, lineHeight: 1.1, color: '#3d1a6b' }}>
            5th Graduation <br/> Ceremony <span style={{ color: '#a78bfa' }}>2026</span>
          </h1>
          
          <p style={{ marginTop: '24px', fontSize: '18px', color: '#5a4b6b', lineHeight: 1.6, fontWeight: 500 }}>
            Celebrating the academic achievements of our <strong>167 graduands</strong> under the theme: <br/>
            <em>"Competency-Based Education: A Catalyst for Societal Transformation."</em>
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad" style={{ maxWidth: '1100px', margin: '-40px auto 40px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'linear-gradient(135deg, #3d1a6b, #5b2c91)', padding: '30px', borderRadius: '16px', color: '#fff', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 10px 30px rgba(61,26,107,0.3)' }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '50%' }}>
              <Award size={40} color="#fff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Academic Excellence Award</h3>
              <h2 style={{ margin: '4px 0 0', fontSize: '24px', fontWeight: 700 }}>Musoke Eric</h2>
              <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Bachelor of IT (CGPA 4.67)</p>
            </div>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#f0e8fa', padding: '16px', borderRadius: '50%', color: '#3d1a6b' }}>
              <GraduationCap size={40} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8a7fa0' }}>Total Graduands</h3>
              <h2 style={{ margin: '4px 0 0', fontSize: '32px', fontWeight: 700, color: '#2d1454' }}>167</h2>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#8a7fa0' }}>109 Female · 55 Male</p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTHEM */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Music size={24} color="#3d1a6b" />
            <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif", margin: 0 }}>The AVIU Anthem</h2>
          </div>
          <div style={{ color: '#5a4b6b', lineHeight: 1.8, fontSize: '15px', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
            {`Avance, Avance our International University
Enhancing innovation to make our nation proud
Advance our education transform the noble cause
To conquer the great heights and tower of learning.

Chorus (x2):
Avance, Avance arise now, Defend the noble cause
Avance, Avance enhance the learner's future with
Innovative skills, equip them with skills to sustain our motherland.`}
          </div>
        </div>
      </section>

            {/* CEREMONY PROGRAMME */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Official Ceremony Programme</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <p style={{ color: '#8a7fa0', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Guest of Honour</p>
              <p style={{ color: '#2d1454', fontWeight: 700, margin: 0 }}>His Royal Highness Isabarongo Mwatyansozi</p>
              <p style={{ color: '#5a4b6b', fontSize: '14px', margin: 0 }}>The King of Buruuli</p>
            </div>
            <div>
              <p style={{ color: '#8a7fa0', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Keynote Speaker</p>
              <p style={{ color: '#2d1454', fontWeight: 700, margin: 0 }}>Mr. Henry Noel Beyendeza</p>
            </div>
            <div>
              <p style={{ color: '#8a7fa0', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Theme</p>
              <p style={{ color: '#2d1454', fontWeight: 700, margin: 0, fontSize: '14px' }}>Competency-Based Education: A Catalyst for Societal Transformation.</p>
            </div>
          </div>

          <div style={{ marginTop: '30px', borderTop: '1px solid #f0e8fa', paddingTop: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  { time: '8:00 AM', event: 'Graduands take their seats' },
                  { time: '8:45 AM', event: 'Parents, Guests and Benefactors take their seats' },
                  { time: '9:45 AM', event: 'Academic staff assemble at the Vice Chancellor\'s chambers' },
                  { time: '10:00 AM', event: 'Arrival of the Chancellor and Guest of Honour' },
                  { time: '10:05 AM', event: 'The Chancellor\'s procession enters Graduation Grounds' },
                  { time: '10:25 AM', event: 'Opening Prayer' },
                  { time: '10:35 AM', event: 'The Chancellor Constitutes the 5th Congregation' },
                  { time: '10:40 AM', event: 'The Vice Chancellor addresses the Congregation' },
                  { time: '11:15 AM', event: 'Guest Speaker' },
                  { time: '11:50 AM', event: 'Guest of Honour Speech (The King of Buruuli)' },
                  { time: '12:00 PM', event: 'Presentation of Graduates by Faculty Deans' },
                  { time: '12:55 PM', event: 'The Chancellor dissolves the Congregation' }
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0e8fa' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#3d1a6b', width: '120px' }}>{item.time}</td>
                    <td style={{ padding: '12px 16px', color: '#5a4b6b' }}>{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SPEECHES */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '28px', color: '#2d1454', fontFamily: "'Playfair Display', serif", marginBottom: '24px' }}>Vice Chancellor's Address</h2>
          <div style={{ color: '#5a4b6b', lineHeight: 1.8, fontSize: '16px' }}>
            <p>Mr. Chancellor Sir, before I proceed further, permit me to express my profound gratitude to the Almighty God for this historic and momentous occasion. Today, we have the privilege of witnessing our sons and daughters being conferred with degrees and awarded diplomas and certificates in recognition of their academic achievements.</p>
            <p>This occasion is not merely a celebration of academic accomplishment; rather, it marks a significant transition from formal education to the practical application of the knowledge, skills, and competencies acquired throughout their academic journey.</p>
            <p>I am pleased to report that the graduating cohort comprises 66.5% male and 33.5% female graduands. The overall best-performing graduand is Mr. Ntume Musoke Eric, a Ugandan national, who has successfully completed the Bachelor of Information Technology with an outstanding CGPA of 4.67.</p>
            <p>As you embark on the next chapter of your personal and professional journeys, I encourage you to remain consistent and disciplined in all your endeavours. Strive for excellence, embrace creativity and innovation, and uphold the values embodied in the philosophy of your University.</p>
          </div>
          <p style={{ color: '#3d1a6b', fontWeight: 600, marginTop: '24px' }}>— Dr. Kato Kimata Joshua, PhD (Vice Chancellor)</p>
        </div>
      </section>
                  {/* GRADUATES LIST */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', color: '#2d1454', fontFamily: "'Playfair Display', serif" }}>Graduation List</h2>
          <p style={{ color: '#8a7fa0' }}>Search for a graduate by name or programme.</p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
            <input type="text" placeholder="Search graduates..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '8px', border: '1px solid #e0d4ee', outline: 'none' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
          {['All', 'Education & Humanities', 'Business & ICT', 'Health Sciences', 'HEC'].map(f => (
            <button key={f} onClick={() => setFacultyFilter(f)} style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, background: facultyFilter === f ? '#3d1a6b' : '#fff', color: facultyFilter === f ? '#fff' : '#3d1a6b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{f}</button>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#3d1a6b', color: '#fff' }}>
              <tr><th style={{ padding: '16px' }}>Name</th><th style={{ padding: '16px' }}>Programme</th><th style={{ padding: '16px' }}>Faculty</th></tr>
            </thead>
            <tbody>
              {filteredGrads.map((g, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0e8fa', background: i % 2 === 0 ? '#fff' : '#f9f6fd' }}>
                  <td style={{ padding: '16px', fontWeight: 600, color: '#2d1454' }}>{g.name} {g.award && <span style={{ marginLeft: 8, fontSize: 11, background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: 99 }}>🏆</span>}</td>
                  <td style={{ padding: '16px', color: '#5a4b6b' }}>{g.program}</td>
                  <td style={{ padding: '16px', color: '#5a4b6b' }}>{g.faculty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

