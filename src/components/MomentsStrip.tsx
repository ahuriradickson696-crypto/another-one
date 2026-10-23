import { photos, type PhotoKey } from '@/data/momentPhotos';

/** A captioned photo strip built from the graduation and launch photos. */
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
        {keys.map((k) => (
          <figure key={k} style={{ margin: 0 }}>
            <img
              src={photos[k].src}
              alt={photos[k].alt}
              className="media-img"
              loading="lazy"
              style={photos[k].portrait ? { objectPosition: 'center 20%' } : undefined}
            />
            <figcaption style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 8, lineHeight: 1.4 }}>
              {photos[k].caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
