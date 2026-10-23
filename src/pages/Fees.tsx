import { CurrencyConverter } from '@/components/CurrencyConverter';
import { ArrowRight, Mail, Phone, FileText, Info } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { feeSchedule, feesLastUpdated } from '@/data/university';

export function Fees() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  const requestFees = () => {
    try { sessionStorage.setItem('aviu-contact-topic', 'fees'); } catch { /* ignore */ }
    navigate('/contact');
  };

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.fees}
        eyebrow="Tuition & costs"
        title={<>Fees &amp; <em>Payment</em></>}
        subtitle={feeSchedule.length ? 'Tuition for Avance International University programmes.' : 'Tuition information is being finalised for the next intakes. Contact the Bursar or Admissions for a current quote — we typically reply within two business days.'}
      />

      {feeSchedule.length > 0 && (
        <section className="section-pad">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Tuition</div><h2>Fee <em>schedule.</em></h2></div></div>
          <div style={{ overflowX: 'auto' }}>
            <table className="fees-table">
              <thead><tr><th>Programme</th><th>Level</th><th>Per semester</th><th>Notes</th></tr></thead>
              <tbody>{feeSchedule.map((r) => (<tr key={r.programme + r.level}><td>{r.programme}</td><td>{r.level}</td><td>{r.perSemester}</td><td>{r.notes ?? ''}</td></tr>))}</tbody>
            </table>
          </div>
          {feesLastUpdated && <p className="fees-updated">Last updated: {feesLastUpdated}</p>}
        </section>
      )}

      {feeSchedule.length === 0 && (
        <section className="section-pad">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Request a quote</div><h2>Get the exact figure for <em>your programme.</em></h2></div></div>
          <div style={{ maxWidth: 720 }}>
            <p className="body-text">Published fee schedules for the next intakes are being updated. Rather than leave you with a placeholder, our Bursar and Admissions teams will send the current tuition and payment-plan options for the programme you are considering.</p>
            <p className="body-text">AVIU Bachelor programmes are priced per semester, paid in 2-3 instalments per term. Merit scholarships and early-payment discounts may apply.</p>
            <div className="grid-2" style={{ gap: 14, margin: '20px 0 24px' }}>
              <a href="tel:+256700670691" className="info-card" style={{ padding: 18, textDecoration: 'none', color: 'inherit' }}>
                <Phone size={20} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
                <strong style={{ display: 'block', marginBottom: 4 }}>Call Admissions</strong>
                <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>+256 700 670 691</span>
                <span style={{ display: 'block', fontSize: 13, color: 'var(--ink-muted)' }}>Mon-Fri 8:00-17:00 EAT</span>
              </a>
              <a href="mailto:bursar@aviu.ac.ug?subject=Tuition%20enquiry" className="info-card" style={{ padding: 18, textDecoration: 'none', color: 'inherit' }}>
                <Mail size={20} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
                <strong style={{ display: 'block', marginBottom: 4 }}>Email the Bursar</strong>
                <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>bursar@aviu.ac.ug</span>
                <span style={{ display: 'block', fontSize: 13, color: 'var(--ink-muted)' }}>Reply within 2 business days</span>
              </a>
            </div>
            <div className="info-card" style={{ padding: 18, display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 20 }}>
              <Info size={18} style={{ color: 'var(--purple-600)', flexShrink: 0, marginTop: 2 }} />
              <p className="body-small" style={{ margin: 0 }}>Fee amounts shown on third-party sites or older PDFs may be out of date. Only figures confirmed in writing by the Bursar are binding for your intake.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button type="button" className="button button-primary" onClick={requestFees}><FileText size={16} /> Request fee schedule</button>
              <button type="button" className="button button-outline" onClick={() => navigate('/admissions/scholarships')}>Scholarships &amp; aid <ArrowRight size={16} /></button>
              <button type="button" className="button button-outline" onClick={() => navigate('/academic-calendar')}>Academic calendar <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Payment guidance</div><h2>Registration &amp; <em>payment.</em></h2></div></div>
        <div className="fees-guidance">
          <p>Full tuition payment must be completed before the registration period closes. A surcharge applies to late registration.</p>
          <p>Students who are struggling to pay are encouraged to speak to the Bursar about payment plans.</p>
        </div>
      </section>

      <section className="section-pad">
        <h2 style={{ marginBottom: 12 }}>International students - currency helper</h2>
        <p style={{ marginBottom: 16, color: 'var(--ink-soft)', maxWidth: 640 }}>Convert amounts for planning only. Official AVIU fee schedules are issued by the Bursar.</p>
        <CurrencyConverter />
      </section>

      <section className="section-pad section-alt">
        <div className="cta-band">
          <div><h2>Ready to apply?</h2><p>Start your application now. Fee details will be shared during the admissions process.</p></div>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary" onClick={() => openApply()}>Apply to AVIU <ArrowRight size={16} /></button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions')}>Admissions overview</button>
          </div>
        </div>
      </section>
    </div>
  );
}
