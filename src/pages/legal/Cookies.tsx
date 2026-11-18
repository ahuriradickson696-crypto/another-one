import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';

export function LegalCookies() {
  const { navigate } = useRouter();
  const resetConsent = () => {
    try { localStorage.removeItem('aviu-cookie-consent'); } catch { /* storage unavailable */ }
    window.location.reload();
  };
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Legal"
        title={<>Cookie <em>settings</em></>}
        subtitle="How AVIU uses cookies and how you can control them."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Cookies', path: '/legal/cookies' }]}
      />
      <section className="section-pad">
        <div className="prose-block" style={{ maxWidth: 760 }}>
          <h2>Essential cookies</h2>
          <p>
            Required for security, load balancing and remembering choices such as cookie consent. These do not require optional consent.
          </p>
          <h2>Optional cookies</h2>
          <p>
            May be used to understand how the site is used so we can improve navigation and content. You can accept or decline optional cookies via the banner shown on first visit.
          </p>
          <h2>Third parties</h2>
          <p>
            Embedded services (for example video hosts) may set their own cookies when you play content. Their policies apply to those services.
          </p>
          <h2>Manage preferences</h2>
          <p>
            Clear site data in your browser, or reset the AVIU consent banner:
          </p>
          <button type="button" className="btn btn-primary" onClick={resetConsent}>Reset cookie banner</button>
          <button type="button" className="btn btn-outline" style={{ marginLeft: 8 }} onClick={() => navigate('/legal/privacy')}>Privacy Policy</button>
        </div>
      </section>
    </div>
  );
}
