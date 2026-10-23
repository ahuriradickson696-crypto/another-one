import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

const CURRENCIES = [
  { code: 'UGX', label: 'Ugandan Shilling' },
  { code: 'USD', label: 'US Dollar' },
  { code: 'EUR', label: 'Euro' },
  { code: 'GBP', label: 'British Pound' },
  { code: 'KES', label: 'Kenyan Shilling' },
  { code: 'TZS', label: 'Tanzanian Shilling' },
  { code: 'RWF', label: 'Rwandan Franc' },
];

// Approximate mid-market style rates vs UGX (static fallback; live rates when API available)
const FALLBACK: Record<string, number> = {
  UGX: 1,
  USD: 3700,
  EUR: 4000,
  GBP: 4700,
  KES: 28.5,
  TZS: 1.4,
  RWF: 2.7,
};

export function CurrencyConverter({ compact = false }: { compact?: boolean }) {
  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('UGX');
  const [rates, setRates] = useState(FALLBACK);
  const [note, setNote] = useState('Indicative rates for planning only — not official tuition figures.');

  useEffect(() => {
    // Optional live rates (no key required for frankfurter.app EUR base — we map to UGX via fallback USD)
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data?.rates) return;
        const ugxPerUsd = data.rates.UGX || FALLBACK.USD;
        const next: Record<string, number> = { UGX: 1 };
        for (const c of CURRENCIES) {
          if (c.code === 'UGX') continue;
          const perUsd = data.rates[c.code];
          if (perUsd) next[c.code] = ugxPerUsd / perUsd;
          else next[c.code] = FALLBACK[c.code] || 1;
        }
        setRates(next);
        setNote('Live mid-market rates · guidance only · fees schedules coming soon');
      } catch {
        /* keep fallback */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const n = parseFloat(amount.replace(/,/g, '')) || 0;
  const inUgx = from === 'UGX' ? n : n * (rates[from] || 1);
  const result = to === 'UGX' ? inUgx : inUgx / (rates[to] || 1);

  return (
    <div className={`currency-box ${compact ? 'currency-compact' : ''}`}>
      <div className="currency-head">
        <RefreshCw size={16} />
        <strong>Currency helper</strong>
      </div>
      <p className="currency-note">{note}</p>
      <div className="currency-row">
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount"
        />
        <select value={from} onChange={(e) => setFrom(e.target.value)} aria-label="From currency">
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>{c.code}</option>
          ))}
        </select>
        <span className="currency-arrow">→</span>
        <select value={to} onChange={(e) => setTo(e.target.value)} aria-label="To currency">
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>{c.code}</option>
          ))}
        </select>
      </div>
      <p className="currency-result">
        ≈ <strong>{result.toLocaleString(undefined, { maximumFractionDigits: 2 })} {to}</strong>
      </p>
    </div>
  );
}
