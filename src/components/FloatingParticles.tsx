/** Drifting gold sparks + soft glow orbs. Pure CSS, deterministic positions, pointer-events none. */
export function FloatingParticles({ count = 18, orbs = true }: { count?: number; orbs?: boolean }) {
  const dots = Array.from({ length: count }, (_, i) => {
    const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
    return {
      left: `${(r(1) * 100).toFixed(1)}%`,
      size: `${(2 + r(2) * 4).toFixed(1)}px`,
      dur: `${(9 + r(3) * 12).toFixed(1)}s`,
      delay: `${(-r(4) * 18).toFixed(1)}s`,
      drift: `${((r(5) - 0.5) * 120).toFixed(0)}px`,
    };
  });
  return (
    <div className="fx-particles" aria-hidden="true">
      {orbs && (<><span className="fx-orb fx-orb-1" /><span className="fx-orb fx-orb-2" /><span className="fx-orb fx-orb-3" /></>)}
      {dots.map((d, i) => (
        <i key={i} style={{ left: d.left, width: d.size, height: d.size, animationDuration: d.dur, animationDelay: d.delay, ['--drift' as string]: d.drift }} />
      ))}
    </div>
  );
}
