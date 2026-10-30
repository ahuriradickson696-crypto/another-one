import { Quote, GraduationCap, Mail } from "lucide-react";

const VC = "#3d1a6b";

const ViceChancellorMessage = () => {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: VC }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: VC }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ border: `1px solid ${VC}`, color: VC }}
          >
            Message from the Vice Chancellor
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: VC }}
          >
            Welcome to Avance International University
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          <div className="md:col-span-2">
            <div
              className="h-full rounded-2xl bg-white p-8 text-center flex flex-col items-center justify-center"
              style={{ border: `1px solid ${VC}`, boxShadow: `0 10px 30px -10px ${VC}33` }}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-30"
                  style={{ backgroundColor: VC }}
                />
                <img
                  src="/images/vice-chancellor.jpg"
                  alt="Dr. Joshua Kato Kimata, Vice Chancellor"
                  className="relative w-40 h-40 object-cover rounded-full shadow-md"
                  style={{ border: `4px solid ${VC}` }}
                />
              </div>
              <h3 className="mt-5 text-xl font-bold" style={{ color: VC }}>
                Dr. Joshua Kato Kimata
              </h3>
              <p className="mt-1 text-sm font-semibold" style={{ color: VC }}>
                Vice Chancellor
              </p>
              <p className="text-xs uppercase tracking-wider mt-0.5" style={{ color: VC }}>
                PhD
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs" style={{ color: VC }}>
                <GraduationCap className="w-4 h-4" style={{ color: VC }} />
                <span>Academic Leadership</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs" style={{ color: VC }}>
                <Mail className="w-4 h-4" style={{ color: VC }} />
                <span>vc@aviu.ac.ug</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div
              className="h-full rounded-2xl bg-white p-8 md:p-10"
              style={{ border: `1px solid ${VC}`, boxShadow: `0 10px 30px -10px ${VC}33` }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="p-2 rounded-xl" style={{ border: `1px solid ${VC}` }}>
                  <Quote className="w-6 h-6" style={{ color: VC }} />
                </div>
                <p className="text-sm pt-2" style={{ color: VC }}>
                  A personal welcome from our Vice Chancellor
                </p>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  It is my great pleasure to welcome you to{" "}
                  <span className="font-semibold" style={{ color: VC }}>
                    Avance International University (AVIU)
                  </span>
                  . Whether you are a prospective student, a parent, a partner, or a
                  member of our community, you are joining an institution built on
                  innovation, excellence, and affordability.
                </p>
                <p>
                  At AVIU we identify and nurture each student&apos;s strengths,
                  shaping them so they can apply them in today&apos;s competitive
                  world of work. Our programmes are hands-on and competence-based,
                  designed to address real-world challenges across Uganda and East
                  Africa.
                </p>
                <p>
                  I invite you to explore our faculties, meet our dedicated staff,
                  and discover how AVIU can help you transform your future. Your
                  journey of innovation starts here.
                </p>
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${VC}` }}>
                <p className="font-semibold" style={{ color: VC }}>
                  Dr. Joshua Kato Kimata, PhD
                </p>
                <p className="text-sm" style={{ color: VC }}>
                  Vice Chancellor, Avance International University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViceChancellorMessage;

