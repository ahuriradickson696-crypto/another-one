import { useEffect, useState } from 'react';

const slides = [
  '/images/campus-aviu-students-1.jpg',
  '/images/campus-aviu-students-2.jpg',
  '/images/campus-aviu-students-3.jpg',
  '/images/campus-aviu-event-1.jpg',
  '/images/campus-aviu-event-2.jpg',
  '/images/university-gate.jpg',
  '/images/campus-aerial.jpg',
  '/images/campus-building.jpg',
  '/images/award-ceremony.jpg',
  '/images/graduation-ceremony.jpg',
  '/images/graduate-celebrating.jpg',
  '/images/graduates-seated.jpg',
  '/images/graduates-group.jpg',
  '/images/graduates-laughing.jpg',
  '/images/graduation-crowd.jpg',
  '/images/graduation-dignitaries.jpg',
  '/images/graduation-parents-guests.jpg',
  '/images/strategic-partnership-launch.jpg',
  '/images/cam-launch-stage.jpg',
  '/images/cam-launch-ribbon.jpg',
  '/images/classroom-anatomy.jpg',
  '/images/classroom-discussion.jpg',
  '/images/classroom-students.jpg',
  '/images/lab-microscope.jpg',
  '/images/lab-pharmacy.jpg',
  '/images/lab-herbal.jpg',
  '/images/guest-lecture.jpg',
  '/images/board-meeting.jpg',
  '/images/senate-meeting.jpg',
  '/images/conference-audience.jpg',
  '/images/medical-facility-tour.jpg',
  '/images/mou-signing.jpg',
  '/images/partnership-bathspa.jpg',
  '/images/poetry-presentation.jpg',
  '/images/staff-booth.jpg',
  '/images/graduand-portrait.jpg',
  '/images/lab-equipment-visit.jpg'
];

export function HeroSlideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      {slides.map((src, n) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: n === i ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      {/* Light darkening only for text readability, not colour wash */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,10,40,0.65) 0%, rgba(20,10,40,0.25) 55%, rgba(20,10,40,0.05) 100%)'
        }}
      />
    </div>
  );
}