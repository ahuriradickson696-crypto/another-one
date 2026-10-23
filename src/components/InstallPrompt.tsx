import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

/** Offers "Add AVIU to your home screen" once, a while after arrival, on browsers that support installing. */
export function InstallPrompt() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = localStorage.getItem('aviu-install-dismissed') === '1'; } catch { /* ignore */ }
    if (dismissed || window.matchMedia('(display-mode: standalone)').matches) return;
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIPEvent);
      window.setTimeout(() => setShow(true), 25000);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  const close = () => {
    setShow(false);
    try { localStorage.setItem('aviu-install-dismissed', '1'); } catch { /* ignore */ }
  };
  const install = async () => {
    if (!evt) return;
    await evt.prompt();
    close();
  };

  if (!show || !evt) return null;
  return (
    <div className="install-chip" role="dialog" aria-label="Install AVIU">
      <img src="/images/aviu-logo.png" alt="" />
      <div><strong>Add AVIU to your phone</strong><span>Opens fast, like an app</span></div>
      <button type="button" className="install-go" onClick={install}><Download size={15} /> Install</button>
      <button type="button" className="install-x" onClick={close} aria-label="Dismiss"><X size={16} /></button>
    </div>
  );
}
