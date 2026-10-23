type CountUpProps = { value: string; duration?: number };

export function CountUp({ value }: CountUpProps) {
  return <strong className="count-up is-done">{value}</strong>;
}