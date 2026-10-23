import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ExternalLink, Sparkles } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { faculties, universityInfo } from '@/data/university';

const SITE_KNOWLEDGE = `
You are the official AVIU website assistant for Avance International University (AVIU), Nabweru, Wakiso District, Uganda.
Be accurate, helpful, concise, and institutional in tone. Never invent tuition prices — say fees are "coming soon" and contact Admissions/Bursar.
Never invent NCHE licence numbers. PhD programmes are coming soon.

INSTITUTION:
- Name: Avance International University (AVIU)
- Campus: Nabweru, 1 km off Nansana–Hoima Road, Wakiso District, Uganda
- Email: info@aviu.ac.ug
- Phone: +256 700 670 691 / +256 766 751 763
- Website: aviu.ac.ug
- E-learning: https://elearning.aviu.ac.ug/
- Regulator: National Council for Higher Education (NCHE) — verify at https://unche.or.ug/
- Intakes: January, May, August each year
- Values: Diversity, Excellence, Integrity, Innovation, Sustainability, Affordability

PROGRAMMES (Bachelor, NCHE-aligned, Nabweru campus):
${faculties.map((f) => `Faculty: ${f.name}\n` + f.programs.map((p) => `- ${p.name} (${p.duration})${p.lastAccreditation ? ` · NCHE accred. ${p.lastAccreditation}, review ${p.reviewYear}` : ''}: ${p.description}`).join('\n')).join('\n\n')}

KEY PAGES (tell users the in-site path; our site uses paths like /study):
- Home: /
- Study / programmes: /study
- Course finder: /study/course-finder
- Admissions: /admissions
- How to apply: /admissions/how-to-apply
- Entry requirements: /admissions/entry-requirements
- Open days: /open-days
- Fees (coming soon): /fees
- Downloads / forms: /downloads
- Research: /research
- PhD (coming soon): /research/phd-opportunities
- Student life: /student-life
- Timetables: /student-life/timetables
- Graduation lists: /student-life/graduation-lists
- Community engagement: /student-life/community-engagement
- Library: /library
- About: /about
- Policies: /about/policies
- Staff: /staff
- Offices: /offices
- Contact: /contact
- Map: /map
- Gallery: /gallery
- Current students hub: /current/students
- Current staff hub: /current/staff
- Prospective undergraduates: /prospective/undergraduates
- Visitors: /visitors
- Alumni: /about/alumni
- Teachers/counsellors: /teachers
- Business partners: /business
- Media: /media
- Jobs: /jobs
- Equality: /equality-policy
- Freedom of speech: /freedom-of-speech
- Modern slavery: /modern-slavery-statement
- GDPR/data: /gdpr
- Glossary: /glossary
- Giving: /giving
- Access guide: /access-guide
- Strategic plan: /strategic-plan

ADMISSIONS SNAPSHOT:
- Typical Bachelor entry: UACE with two principal passes (or equivalent); UCE with passes including English.
- Diploma upgrade and mature-age (21+) routes exist; Nursing Completion for diploma nurses.
- Documents: certified transcripts, ID/passport, photos, application form.
- Graduation 2026 cycle: 5th Graduation Ceremony referenced for 25 September 2026 on site.

When useful, end with a suggested page path in the form: LINK:/study
`.trim();

type Msg = { role: 'user' | 'model'; text: string };

function extractLink(text: string): string | null {
  const m = text.match(/LINK:(\/[a-z0-9\-/]+)/i);
  return m ? m[1] : null;
}

export function GeminiChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'model',
      text: 'Welcome to AVIU. Ask about programmes, admissions (January / May / August), campus at Nabweru, research, student life, or policies. I can point you to the right page.',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener('aviu:open-chat', openChat);
    return () => window.removeEventListener('aviu:open-chat', openChat);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    const q = input.trim();
    if (!q || busy) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setBusy(true);

    try {
      let reply = '';
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system: SITE_KNOWLEDGE,
            contents: [
              ...messages.slice(1).map((msg) => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }],
              })),
              { role: 'user', parts: [{ text: q }] },
            ],
          }),
        });
        if (res.ok) reply = ((await res.json()) as { text?: string }).text ?? '';
      } catch {
        // network failure: fall through to the built-in answers
      }

      if (!reply) {
        // Built-in answers when the AI service is unavailable
        const lower = q.toLowerCase();
        reply =
          'Programmes are on LINK:/study · admissions LINK:/admissions · contact LINK:/contact · fees coming soon LINK:/fees.';
        if (lower.includes('nursing')) reply = 'AVIU offers Bachelor of Nursing Science and Nursing Sciences – Completion under the Faculty of Nursing & Health Sciences (NCHE-aligned). See LINK:/study and LINK:/admissions/entry-requirements.';
        else if (lower.includes('apply') || lower.includes('admission')) reply = 'Apply for January, May or August intake. Steps: choose a programme, check entry requirements, submit documents. Start at LINK:/admissions/how-to-apply or use Apply on the site.';
        else if (lower.includes('fee') || lower.includes('tuition')) reply = 'Published fee schedules are coming soon. Contact Admissions or the Bursar via LINK:/contact for current guidance. Do not rely on unofficial figures.';
        else if (lower.includes('campus') || lower.includes('map') || lower.includes('nabweru')) reply = `Campus is at ${universityInfo.address}. Map: LINK:/map · Visitors: LINK:/visitors · Open days: LINK:/open-days.`;
        else if (lower.includes('phd') || lower.includes('research')) reply = 'Research covers technology, health, education and entrepreneurship. PhD programmes are coming soon. LINK:/research · LINK:/research/phd-opportunities.';
      }
      setMessages((m) => [...m, { role: 'model', text: reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: 'model',
          text: `Sorry — I hit an error (${e instanceof Error ? e.message : 'unknown'}). You can still browse LINK:/study or contact LINK:/contact.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const openPage = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="aviu-chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open AVIU assistant'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="aviu-chat-panel" role="dialog" aria-label="AVIU assistant">
          <div className="aviu-chat-header">
            <div className="aviu-chat-title">
              <span className="aviu-chat-avatar"><Sparkles size={16} /></span>
              <div>
                <strong>AVIU Assistant</strong>
                <span><i className="aviu-chat-online" /> Online · Programmes · Admissions · Campus</span>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <div className="aviu-chat-messages">
            {messages.map((msg, i) => {
              const link = extractLink(msg.text);
              const clean = msg.text.replace(/\s*LINK:\/[a-z0-9\-/]+/gi, '').trim();
              return (
                <div key={i} className={`aviu-chat-bubble ${msg.role}`}>
                  <p>{clean}</p>
                  {link && (
                    <button type="button" className="aviu-chat-link" onClick={() => openPage(link)}>
                      Open page {link} <ExternalLink size={12} />
                    </button>
                  )}
                </div>
              );
            })}
            {busy && (
              <div className="aviu-chat-bubble model">
                <span className="chat-typing" aria-label="Assistant is typing"><i /><i /><i /></span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="aviu-chat-quick">
            {[
              ['Programmes', '/study'],
              ['Apply', '/admissions/how-to-apply'],
              ['Fees', '/fees'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <button key={path} type="button" onClick={() => openPage(path)}>
                {label}
              </button>
            ))}
          </div>
          <form
            className="aviu-chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AVIU…"
              aria-label="Message"
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
