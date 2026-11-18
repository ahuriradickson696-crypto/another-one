import { useEffect, useState } from 'react';

/**
 * Hero background video.
 *
 * - The still poster shows first, so the page is fast and never blank.
 * - If a self-hosted file is supplied (`src`), it plays muted and looping behind the text.
 * - Otherwise the YouTube video plays muted and looping in the background, but only after the
 *   page has finished loading, so it never slows the first paint.
 * - Visitors with reduced motion or Data Saver on keep the still poster.
 */
export function HeroVideo({
  poster,
  videoId,
  src,
  srcWebm,
}: {
  poster: string;
  videoId?: string;
  src?: string;
  srcWebm?: string;
}) {
  const [playable, setPlayable] = useState(true);
  const [ytReady, setYtReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    if (reduce || saveData) {
      setPlayable(false);
      return;
    }
    if (src || !videoId) return;
    let timer: number | undefined;
    const start = () => { timer = window.setTimeout(() => setYtReady(true), 800); };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      if (timer) window.clearTimeout(timer);
    };
  }, [src, videoId]);

  const params = new URLSearchParams({
    autoplay: '1', mute: '1', loop: '1', playlist: videoId ?? '', controls: '0', rel: '0',
    modestbranding: '1', playsinline: '1', disablekb: '1', fs: '0', iv_load_policy: '3',
  });

  return (
    <div className="hero-video" aria-hidden="true" style={{ backgroundImage: `url(${poster})` }}>
      {playable && src && (
        <video autoPlay muted loop playsInline preload="metadata" poster={poster} tabIndex={-1} onError={() => setPlayable(false)}>
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}
      {playable && !src && videoId && ytReady && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title="Avance International University campus video"
          allow="autoplay; encrypted-media; picture-in-picture"
          tabIndex={-1}
        />
      )}
      <div className="hero-video-overlay" />
    </div>
  );
}
