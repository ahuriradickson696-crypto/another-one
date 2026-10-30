import { photos, type PhotoKey } from '@/data/momentPhotos';
import { imageDimensions } from '@/data/galleryImages.generated';

/** A captioned photo strip. Photos carry srcset + intrinsic size so Google and browsers get the right file. */
export function MomentsStrip({
  keys,
  eyebrow = 'Moments at AVIU',
  title = 'Graduation and launch day',
  alt = false,
}: {
  keys: PhotoKey[];
  eyebrow?: string;
  title?: string;
  alt?: boolean;
}) {
  return (
    <section className={`section-pad${alt ? ' alt-bg' : ''}`}>
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</div>
          <h2>{title}</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {keys.map((k) => {
          const p = photos[k];
          const [w, h] = p.width && p.height ? [p.width, p.height] : imageDimensions[p.src] ?? [undefined, undefined];
          return (
            <figure key={k} style={{ margin: 0 }}>
              <img
                src={p.src}
                srcSet={p.srcSet}
                sizes={p.srcSet ? '(max-width: 640px) 100vw, 380px' : undefined}
                width={w}
                height={h}
                alt={p.alt}
                title={p.caption}
                className="media-img"
                loading="lazy"
                decoding="async"
                style={p.portrait ? { objectPosition: 'center 20%' } : undefined}
              />
              <figcaption style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 8, lineHeight: 1.4 }}>
                {p.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
