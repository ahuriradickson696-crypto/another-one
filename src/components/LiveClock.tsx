import { useEffect, useState } from 'react';

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const date = now.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="live-clock" aria-live="polite" aria-atomic="true">
      <span className="live-clock-date">{date}</span>
      <span className="live-clock-sep" aria-hidden="true">·</span>
      <span className="live-clock-time">{time}</span>
      <span className="live-clock-tz">EAT</span>
    </div>
  );
}
