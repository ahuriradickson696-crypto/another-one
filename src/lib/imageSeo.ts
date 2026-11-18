import { useEffect } from 'react';

const SITE = 'https://aviu.ac.ug';
const ORG = 'Avance International University';

export type SeoImage = {
  /** Full-size image path, e.g. /images/gallery/x-lg.jpg */
  url: string;
  thumb?: string;
  name: string;
  caption?: string;
  description?: string;
  width?: number;
  height?: number;
  keywords?: string[];
};

const abs = (u: string) => (u.startsWith('http') ? u : SITE + u);

/**
 * Injects schema.org ImageGallery + ImageObject JSON-LD for a page so Google can tie every
 * image to its title, caption, creator and the page it lives on. Removed again on unmount.
 */
export function useImageGalleryJsonLd(opts: { id: string; name: string; path: string; description: string; images: SeoImage[] }) {
  const { id, name, path, description, images } = opts;
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      '@id': `${SITE}${path}#${id}`,
      name,
      description,
      url: SITE + path,
      publisher: { '@type': 'CollegeOrUniversity', name: ORG, url: SITE + '/' },
      image: images.map((im) => ({
        '@type': 'ImageObject',
        contentUrl: abs(im.url),
        thumbnailUrl: abs(im.thumb ?? im.url),
        name: im.name,
        caption: im.caption ?? im.name,
        description: im.description ?? im.name,
        ...(im.width && im.height ? { width: im.width, height: im.height } : {}),
        ...(im.keywords?.length ? { keywords: im.keywords.join(', ') } : {}),
        creditText: ORG,
        creator: { '@type': 'Organization', name: ORG },
        copyrightNotice: `© ${ORG}`,
        encodingFormat: 'image/jpeg',
        isPartOf: { '@id': `${SITE}${path}#${id}` },
      })),
    };
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = `ld-${id}`;
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
    // images are static data; effect runs once per mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, path]);
}
