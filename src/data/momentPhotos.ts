export type PhotoKey =
  | 'partnership' | 'celebrating' | 'seated' | 'parents'
  | 'dignitaries' | 'class2026' | 'camStage' | 'camRibbon';

export const photos: Record<PhotoKey, { src: string; alt: string; caption: string; portrait?: boolean }> = {
  partnership: {
    src: '/images/strategic-partnership-launch.jpg',
    alt: 'Official launch of the strategic partnership at the 5th Graduation',
    caption: 'Official launch of the strategic partnership at the 5th Graduation',
  },
  celebrating: {
    src: '/images/graduate-celebrating.jpg',
    alt: 'A graduate raising her cap in celebration',
    caption: 'Graduates celebrate at the ceremony',
  },
  seated: {
    src: '/images/graduates-seated.jpg',
    alt: 'Graduands seated in blue gowns during the ceremony',
    caption: 'Graduands seated during the ceremony',
  },
  parents: {
    src: '/images/graduation-parents-guests.jpg',
    alt: 'Parents and guests attending the graduation',
    caption: 'Parents and guests share the day',
  },
  dignitaries: {
    src: '/images/graduation-dignitaries.jpg',
    alt: 'Academic dignitaries in regalia at the graduation',
    caption: 'Academic dignitaries in regalia',
  },
  class2026: {
    src: '/images/graduate-class-2026.jpg',
    alt: 'A Class of 2026 graduate holding her scroll',
    caption: 'Class of 2026 graduate',
    portrait: true,
  },
  camStage: {
    src: '/images/cam-launch-stage.jpg',
    alt: 'Launch of Complementary and Alternative Medicine on stage',
    caption: 'Launch of Complementary and Alternative Medicine',
  },
  camRibbon: {
    src: '/images/cam-launch-ribbon.jpg',
    alt: 'Ribbon cutting at the Complementary and Alternative Medicine launch',
    caption: 'Ribbon cutting at the Complementary and Alternative Medicine launch',
  },
};
