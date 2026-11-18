import { useEffect, useState } from 'react';

const rawImages = Object.values(
  import.meta.glob('/public/images/hero-home/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
) as string[];

// Sort them alphabetically first
rawImages.sort();

// Define the words that identify the "big people" / officials
const priorityKeywords = ['official', 'gown', 'guest', 'vip']; 

// Separate the priority images from the rest
const priorityImages = rawImages.filter(src => 
  priorityKeywords.some(keyword => src.toLowerCase().includes(keyword))
);
const otherImages = rawImages.filter(src => 
  !priorityKeywords.some(keyword => src.toLowerCase().includes(keyword))
);

// Combine them: Priority images first, then the rest
const heroImages = [...priorityImages, ...otherImages];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  if (heroImages.length === 0) return null;

  return (
    <div className="hero-slideshow" aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {heroImages.map((src, n) => (
        <div
          key={src}
          className={`hero-slide ${n === index ? 'is-active' : ''}`}
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
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(45,20,84,0.45), rgba(76,37,133,0.45))',
        }}
      />
    </div>
  );
}



