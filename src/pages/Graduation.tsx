import { useState } from 'react';
import { Search, GraduationCap } from 'lucide-react';

type Graduate = {
  name: string;
  program: string;
  faculty: string;
  award?: boolean;
};

const graduatesData: Graduate[] = [
  // POSTGRADUATE
  { name: 'ATUHAIRE Adrine Ndyaba', program: 'Post Graduate Diploma in Education', faculty: 'Education & Humanities' },
  { name: 'SSENYONGA Gabriel', program: 'Post Graduate Diploma in Education', faculty: 'Education & Humanities' },
  { name: 'TUMUSIIME Roger', program: 'Post Graduate Diploma in Education', faculty: 'Education & Humanities' },

  // BACHELORS - EDUCATION
  { name: 'MWEBAZA Joshua', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'NYITI Herbert', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'ONGUU Felix', program: 'Bachelor of Education (Secondary)', faculty: 'Education & Humanities' },
  { name: 'BIIRA Hawa Malungula', program: 'Bachelor of Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'WANDERA Farouk', program: 'Bachelor of Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'MIREMBE Rebecca', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANTANDA Teddy', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMUBIRU Jacqueline', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'KISAKYE Christine', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABATANZI Grace', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'BIRABWA Juliet', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKOBBFA Florence', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMUSIS Shamim', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'ZALWANGO Florence', program: 'Bachelor of Early Childhood Development', faculty: 'Education & Humanities' },

  // DIPLOMA EDUCATION
  { name: 'ISABIRYE Huzaifa Nziba', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'NAMAZZINA Aminah', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'MALINGA Simon', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'NAMANJA Kulusumu', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'ASIIMIRE Joserine', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'NANUNDA Christine', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },
  { name: 'ATUHURIRA Justus', program: 'Diploma in Education (Primary)', faculty: 'Education & Humanities' },

  // DIPLOMA ECD
  { name: 'NALWEYISO Ritah', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAFULA Ritah', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAHWEERA Scovi', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKITTO Dianah Lillian', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'MUGOYA Christopher', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKIGANDA Christine', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'KANSIIME Immaculate', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'LUBUGA Caroline', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'BASILIKA Nulu', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMATA Swaburah', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKANJAKO Joyce', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKIGANDA Maureen', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANDYOZA Mariam', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'BABIRYE Jackline', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANGOOBA Florence', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKABUGO Sophia', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANTONGO Rose', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NALUBEGA Bridget', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMULINDWA Christine', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANSUKUSA Mariam', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMAGEMBE Rachel', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABWIRE Elizabeth', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAGGINDA Vivian', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'SSEKITOLEKO Ronald', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMPITA Betty', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMAYANJA Lilian', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NASSAKA Latifah', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABUKEERA Justine', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NATUKWASA Brenda', program: 'Diploma in Early Childhood Development', faculty: 'Education & Humanities' },

  // CERTIFICATE ECD
  { name: 'NAMUYOMBA Patra', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'MPUMIRWE Shamim', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANFUNA Noeline', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'Baluka Jackline', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMAYANJA Afusa', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'ATAYO Agnes', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKAZZI Esther Mariam', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'ALAKUT Rebecca', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NANKYA Shakirah', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABENGO Suianah', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABULIME Miisa', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABBOSA Fatumah', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMUDDU Janet', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMAYANJA Swaiba', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'PANDE Juma', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAKAWUNGU Swaburah', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMBALIRWA Joweria', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'MUHINDO Peresi', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'BIIRA Kedrine', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'ALOKO Clara', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NALUYIMA Dorothy Kwagala', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'DDUNGU Robert', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'KIZZA Florence Kyabe', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMUKASA Oliver', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'BABIYRE Royce', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'KATUSIIME Enid', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'MPOZA Abdushakul', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NABAASA Christine', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NAMULEME Teopister', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'TABINGWA Vivian', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'WANYENYA Shalon', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'KOBUSINGE Catherine', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },
  { name: 'NALUTAAYA Sophia', program: 'Certificate in Early Childhood Development', faculty: 'Education & Humanities' },

  // CERTIFICATE CHILD CARE
  { name: 'NABANOBAMOREEN', program: 'Certificate in Child Care', faculty: 'Education & Humanities' },
  { name: 'NANTONGO Maria Imelda', program: 'Certificate in Child Care', faculty: 'Education & Humanities' },

  // DIPLOMA SOCIAL WORKS
  { name: 'KYOZIRA Sandra', program: 'Diploma in Social Works', faculty: 'Education & Humanities' },

  // BACHELOR BUSINESS & ICT
  { name: 'MUSOKE Eric', program: 'Bachelor of Information Technology', faculty: 'Business & ICT', award: true },
  { name: 'MATSANGA Juma', program: 'Bachelor of Information Technology', faculty: 'Business & ICT' },
  { name: 'BBAALE Davis', program: 'Bachelor of Information Technology', faculty: 'Business & ICT' },
  { name: 'OTIENO John Bosco', program: 'Bachelor of Information Technology', faculty: 'Business & ICT' },
  { name: 'KASOZI Lazarus', program: 'Bachelor of Information Technology', faculty: 'Business & ICT' },
  { name: 'TUMUBWINE Anorin', program: 'Bachelor of Science in Computer Science', faculty: 'Business & ICT' },
  { name: 'KAKOOZA Haddi', program: 'Bachelor of Graphics and Communication Design', faculty: 'Business & ICT' },
  { name: 'NALWEYISO Prossyi', program: 'Bachelor of Business Administration', faculty: 'Business & ICT' },
  { name: 'JJAGWE Abdul', program: 'Diploma in Business Administration', faculty: 'Business & ICT' },
  { name: 'NOWANGYE Elias', program: 'Diploma in Business Administration', faculty: 'Business & ICT' },
  { name: 'NASSUNA Bushira', program: 'Diploma in Hotel and Tourism Management', faculty: 'Business & ICT' },
  { name: 'MBOIZI Julius', program: 'Diploma in Computer Science', faculty: 'Business & ICT' },

  // HEC BIOLOGICAL
  { name: 'MABIRIIZI Asuman', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAMUSISI Esther Christine', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'AGAPE Musafiri', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAKAZZI Jaliah Shanitah', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAMASABA Jacinta', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAKIBENGE Jamal', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'KISAKYE Tracy', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'KAREMA Martha', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'GWOKYALYA Juliet', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NANYUMBA Allan', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAGAWA Zaharah', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'GATDIET Gatguy Karach', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'KIKOMEKO Jonathan', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'KIYANGA David', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'SSENTONGO Ian Masole', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'OYITE Juma', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'MUTYABA Charles', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'NAKABUGO Maria Ritah', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'ENGOLE Michael', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'MUKUVE Kalimu', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'AMONGI Fortunate', program: 'HEC Biological', faculty: 'HEC' },
  { name: 'OBUA Daniel', program: 'HEC Biological', faculty: 'HEC' },

  // HEC HUMANITIES
  { name: 'NATUKUNDA Catherine', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NANTETSA Julian', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NYAMAL Biel Pal Kueth', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NAKIGUDDE Zoe', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'GATDIEL Gatquey Karach', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'ELIJAH Riak Kuach Belieks', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'TAMALE Kalidi', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'OMODING Joseph', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NABUTTUWA Rachael', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'OULE Darlington', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'PETER Ran Thak Kuon', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NSUBUGA Adolf', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'MONDAY John', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'MUSOSI Jovan', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NAIGULU Shakirah', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NAMAYANJA Jovia', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'OLUM Haron', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'FORTUNATE Evelyne', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'MUDONDO Sharon', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'BAKUNZI Brain', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NAMATENDE Janat', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'NANKYA Hilda Faith', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'ACIENG Elizabeth', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'KODET Moses', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'BUKUMUNE Nassim', program: 'HEC Humanities', faculty: 'HEC' },
  { name: 'ASIMMWE Innocent', program: 'HEC Humanities', faculty: 'HEC' },

  // HEALTH SCIENCES - CAM
  { name: 'AKANDWANAHO Samson', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NADEDDE Mathias', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NAMBUYA Annet', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NAKABITO Kayiza Margret', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NSEREKO Christopher', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NASSOLO Aisha Musubire', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'JOSIAH Chris Nsereko', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'NALUNGA Nusuwati', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
  { name: 'MUSOKE Hilton', program: 'Complementary and Alternative Medicine', faculty: 'Health Sciences' },
];

const FACULTIES = ['All', 'Education & Humanities', 'Business & ICT', 'Health Sciences', 'HEC'];

export function Graduation() {
  const [search, setSearch] = useState('');
  const [facultyFilter, setFacultyFilter] = useState('All');

  const filteredGrads = graduatesData.filter((g) => {
    const term = search.trim().toLowerCase();
    const matchesSearch = !term ||
      g.name.toLowerCase().includes(term) ||
      g.program.toLowerCase().includes(term);
    const matchesFaculty = facultyFilter === 'All' || g.faculty === facultyFilter;
    return matchesSearch && matchesFaculty;
  });

  return (
    <div style={{ background: '#f9f6fd', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* HERO */}
      <div style={{ background: '#2d1454', padding: '80px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#c4b5fd', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
            5th Graduation Ceremony · 2026
          </p>
          <h1 style={{ fontSize: '42px', margin: '0 0 16px', fontFamily: "'Playfair Display', serif" }}>
            Class of <em>2026</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#c4b5fd', lineHeight: 1.6 }}>
            Celebrating {graduatesData.length} graduates across 4 faculties and multiple programme levels.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#3d1a6b' }}>{graduatesData.length}</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Graduates</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#3d1a6b' }}>4</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Faculties</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#3d1a6b' }}>18</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Programmes</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', textAlign: 'center', border: '1px solid #e0d4ee' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#d97706' }}>4.67</div>
            <div style={{ fontSize: '12px', color: '#8a7fa0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Best CGPA</div>
          </div>
        </div>

        {/* SEARCH + FILTERS */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', marginBottom: '24px', border: '1px solid #e0d4ee' }}>
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <Search size={20} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#8a7fa0' }} />
            <input
              type="text"
              placeholder="Search by graduate name or programme..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '10px', border: '1px solid #e0d4ee', fontSize: '15px', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FACULTIES.map((f) => (
              <button
                key={f}
                onClick={() => setFacultyFilter(f)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  background: facultyFilter === f ? '#3d1a6b' : '#f0e8fa',
                  color: facultyFilter === f ? '#fff' : '#3d1a6b',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: '#8a7fa0', marginBottom: '16px', fontSize: '14px' }}>
          Showing <strong style={{ color: '#3d1a6b' }}>{filteredGrads.length}</strong> of {graduatesData.length} graduates
          {facultyFilter !== 'All' && ' in ' + facultyFilter}
        </p>

        {/* TABLE */}
        <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e0d4ee' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#3d1a6b', color: '#fff' }}>
              <tr>
                <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Name</th>
                <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Programme</th>
                <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Faculty</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrads.map((g, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0e8fa', background: i % 2 === 0 ? '#fff' : '#f9f6fd' }}>
                  <td style={{ padding: '16px', fontWeight: 600, color: '#2d1454' }}>
                    {g.name}
                    {g.award && <span style={{ marginLeft: 8, fontSize: 11, background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: 99 }}>🏆 Best</span>}
                  </td>
                  <td style={{ padding: '16px', color: '#5a4b6b', fontSize: '14px' }}>{g.program}</td>
                  <td style={{ padding: '16px', color: '#8a7fa0', fontSize: '13px' }}>{g.faculty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredGrads.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8a7fa0' }}>
            <p style={{ fontSize: '18px' }}>No graduates match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
