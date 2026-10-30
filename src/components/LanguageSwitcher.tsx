import { Globe } from 'lucide-react';
import { languages, type LanguageCode } from '@/lib/i18n';

export function LanguageSwitcher({
  current,
  onChange,
}: {
  current: LanguageCode;
  onChange: (code: LanguageCode) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Language selection"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        borderRadius: 999,
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.35)',
        color: '#fff',
        fontSize: 13,
      }}
    >
      <Globe size={16} aria-hidden="true" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          lang={lang.code}
          aria-current={current === lang.code ? 'true' : undefined}
          onClick={() => onChange(lang.code)}
          title={lang.label}
          style={{
            minWidth: 34,
            minHeight: 30,
            padding: '2px 8px',
            borderRadius: 6,
            border: 'none',
            cursor: 'pointer',
            fontWeight: current === lang.code ? 700 : 500,
            background: current === lang.code ? '#fff' : 'transparent',
            color: current === lang.code ? '#2d1454' : '#fff',
          }}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}