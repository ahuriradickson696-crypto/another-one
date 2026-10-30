import { galleryById, type GalleryImage } from '@/data/galleryImages.generated';

export type PhotoKey =
  | 'partnership' | 'celebrating' | 'seated' | 'parents'
  | 'dignitaries' | 'class2026' | 'camStage' | 'camRibbon'
  | 'installationCake' | 'installationGroup' | 'installationMace'
  | 'installationDignitaries' | 'installationBishop' | 'serviceChoir' | 'serviceHall';

export type MomentPhoto = {
  src: string;
  alt: string;
  caption: string;
  portrait?: boolean;
  srcSet?: string;
  width?: number;
  height?: number;
};

/** Build a strip photo from the optimised gallery catalog (responsive srcset + real dimensions). */
function fromCatalog(id: string): MomentPhoto {
  const g: GalleryImage = galleryById[id];
  return {
    src: g.mdSrc,
    srcSet: g.srcSet,
    width: g.mdWidth,
    height: g.mdHeight,
    alt: g.alt,
    caption: g.caption,
    portrait: g.height > g.width,
  };
}

export const photos: Record<PhotoKey, MomentPhoto> = {
  installationCake: fromCatalog('aviu-chancellor-installation-cake-cutting'),
  installationGroup: fromCatalog('aviu-chancellor-installation-group-portrait'),
  installationMace: fromCatalog('aviu-chancellor-installation-ceremonial-mace'),
  installationDignitaries: fromCatalog('aviu-chancellor-installation-dignitaries-seated'),
  installationBishop: fromCatalog('aviu-chancellor-installation-bishop-addresses-gathering'),
  serviceChoir: fromCatalog('aviu-service-choir-teal-robes'),
  serviceHall: fromCatalog('aviu-service-students-in-hall'),
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
