import { type CSSProperties } from 'react';
import { galleryById } from '@/data/galleryImages.generated';

/**
 * Renders an optimised catalog photo with srcset, intrinsic width/height (no layout shift),
 * descriptive alt text and a title, which is what Google Images uses to understand the picture.
 */
export function CatalogImage({
  id,
  alt,
  className,
  style,
  sizes = '(max-width: 700px) 100vw, 560px',
  eager = false,
}: {
  id: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  eager?: boolean;
}) {
  const g = galleryById[id];
  if (!g) return null;
  return (
    <img
      src={g.mdSrc}
      srcSet={g.srcSet}
      sizes={sizes}
      width={g.mdWidth}
      height={g.mdHeight}
      alt={alt ?? g.alt}
      title={g.title}
      className={className}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
