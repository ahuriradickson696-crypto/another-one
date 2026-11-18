import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date('2027-01-01T00:00:00').getTime();

function calcTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBox({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <div
        style={{
          background: '#2d1454',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '10px 4px',
          width: '100%',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 800,
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          boxShadow: '0 4px 12px rgba(45, 20, 84, 0.2)',
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontSize: '9px',
          color: '#2d1454',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: 700,
          marginTop: '6px',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: '14px' }}>
      <div
        style={{
          fontSize: '10px',
          color: '#2d1454',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '8px',
          opacity: 0.7,
        }}
      >
        Time until intake closes
      </div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          justifyContent: 'space-between',
        }}
      >
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Min" />
        <TimeBox value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}