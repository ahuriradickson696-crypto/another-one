import { useEffect, useState } from 'react';

const subImages = Object.values(
  import.meta.glob('/public/images/hero-sub/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
) as string[];

export function BackgroundCarousel({
  overlay = 0.82,
}: {
  images?: string[];
  interval?: number;
  overlay?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (subImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % subImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  if (subImages.length === 0) return null;

  return (
    <div className="bg-carousel" aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {subImages.map((src, n) => (
        <div
          key={src}
          className={`bg-carousel-slide ${n === index ? 'is-active' : ''}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            opacity: n === index ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        />
      ))}
      <div
        className="bg-carousel-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(45,20,84,${overlay}), rgba(76,37,133,${overlay}))`,
        }}
      />
    </div>
  );
}


