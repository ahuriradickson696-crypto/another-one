import { Fragment } from 'react';

/** Wraps each word in a masked span so it can rise into place one after another. */
export function SplitWords({ text, start = 0, step = 0.08 }: { text: string; start?: number; step?: number }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span className="sw"><span style={{ animationDelay: `${(start + i * step).toFixed(2)}s` }}>{w}</span></span>{' '}
        </Fragment>
      ))}
    </>
  );
}
