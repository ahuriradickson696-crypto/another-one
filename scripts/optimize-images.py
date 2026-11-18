#!/usr/bin/env python3
"""
AVIU image pipeline.

 * resizes originals into three web sizes (sm 500 / md 1000 / lg 2000 px long edge)
 * embeds Artist / Copyright / Description EXIF
 * writes src/data/galleryImages.generated.ts  (alt text, captions, srcset, dimensions)
 * writes public/sitemap-images.xml              (Google image sitemap)
 * writes public/images/aviu-og-cover.jpg        (1200x630 social / Discover cover)

Add a new photo: put the original in the source folder, add an entry to ITEMS,
then run:   AVIU_PHOTO_SRC=/path/to/originals python3 scripts/optimize-images.py
"""
import glob
import html
import json
import os

from PIL import Image, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
SRC = os.environ.get('AVIU_PHOTO_SRC', os.path.join(ROOT, 'originals'))
IMG = os.path.join(ROOT, 'public', 'images')
GAL = os.path.join(IMG, 'gallery')
SITE = 'https://aviu.ac.ug'
ORG = 'Avance International University'
SIZES = {'sm': (500, 78), 'md': (1000, 80), 'lg': (2000, 80)}  # long edge px, jpeg quality

KW = ['Avance International University', 'AVIU', 'Nabweru', 'Uganda']
INST = 'Installation of the Rt. Rev. James William Ssebagala as the 2nd Chancellor of Avance International University'

# collection, source file (without .jpg), seo slug, alt, caption, description, extra keywords
ITEMS = [
    # --- Installation of the 2nd Chancellor ---------------------------------------------------
    ('installation', 'DSC_5686', 'aviu-chancellor-installation-cake-cutting',
     'Dignitaries in red and purple AVIU regalia cut the cake marked for the installation of the 2nd Chancellor of Avance International University',
     'Cutting the cake to mark the installation of the 2nd Chancellor',
     f'Academic dignitaries in Avance International University regalia gather around a two-tier cake to mark: {INST}.',
     ['chancellor installation', 'cake cutting', 'academic regalia']),
    ('installation', 'DSC_5715', 'aviu-chancellor-installation-group-portrait',
     'Group portrait of dignitaries in Avance International University regalia with the ceremonial mace on a red carpet',
     'Group portrait at the installation of the 2nd Chancellor',
     f'Official group portrait of university dignitaries, clergy and guests in academic regalia with the ceremonial mace, at the {INST[0].lower() + INST[1:]}.',
     ['chancellor installation', 'group portrait', 'ceremonial mace', 'academic regalia']),
    ('installation', 'DSC_5630', 'aviu-chancellor-installation-ceremonial-mace',
     'Three academics in AVIU regalia, including a bishop in purple, hold the ceremonial mace beside a lectern with Bibles',
     'The ceremonial mace at the installation',
     'Three academics in red and purple Avance International University regalia hold the ceremonial mace beside a glass lectern during the installation of the 2nd Chancellor.',
     ['ceremonial mace', 'chancellor installation', 'academic regalia']),
    ('installation', 'DSC_5635', 'aviu-chancellor-installation-dignitaries-seated',
     'Dignitaries in red and purple Avance International University regalia seated during the installation ceremony, a bishop among them',
     'Dignitaries seated during the installation',
     'Dignitaries wearing red and purple Avance International University academic regalia and tasselled hats sit together during the installation ceremony.',
     ['chancellor installation', 'dignitaries', 'academic regalia']),
    ('installation', 'DSC_5657', 'aviu-chancellor-installation-bishop-addresses-gathering',
     'A bishop in red and purple regalia waves and speaks into a microphone at a glass lectern, with a colleague standing beside him',
     'Addressing the gathering at the installation',
     'A bishop in Avance International University regalia addresses the gathering from a glass lectern during the installation of the 2nd Chancellor, with a colleague beside him.',
     ['chancellor installation', 'speech', 'bishop', 'academic regalia']),
    ('installation', 'DSC_5692', 'aviu-academic-regalia-portrait-seated',
     'Portrait of an academic seated in red and purple Avance International University regalia with a yellow tassel',
     'Academic in AVIU regalia',
     'Portrait of an academic seated with hands clasped, wearing the red and purple Avance International University doctoral-style gown, stole and hat with a yellow tassel.',
     ['academic regalia', 'portrait', 'university gown']),
    ('installation', 'DSC_5694', 'aviu-academic-regalia-portrait-reception',
     'Portrait of a woman in red and purple Avance International University regalia and hat, holding a piece of cake',
     'Guest in AVIU regalia at the reception',
     'Portrait of a guest in Avance International University regalia holding a piece of cake at the reception after the installation ceremony.',
     ['academic regalia', 'portrait', 'reception']),
    # --- Service and congregation -------------------------------------------------------------
    ('service', 'DSC_9623', 'aviu-service-priest-green-vestments-altar',
     'A priest in green vestments speaks into a microphone at an altar set with chalices, beside a server in a cream alb',
     'Priest at the altar during the service',
     'A priest in green vestments addresses the congregation at an altar set with chalices and a crucifix, while a server in a cream alb prepares the altar.',
     ['church service', 'priest', 'altar', 'Mass']),
    ('service', 'DSC_9630', 'aviu-service-priest-portrait',
     'Portrait of a priest in a white alb and green stole standing in a corridor',
     'Portrait of a priest',
     'Portrait of a priest in a white alb with green stole and clerical collar, standing in a bright corridor.',
     ['church service', 'priest', 'portrait']),
    ('service', 'DSC_9656', 'aviu-service-religious-leaders-seated',
     'A priest in a white alb and green stole seated beside three guests in kufi caps and suits, with a sister in a white veil behind',
     'Religious leaders and guests seated together',
     'Religious leaders and guests sit side by side: a priest in a white alb and green stole, three men in kufi caps and suits, and a religious sister in a white veil behind them.',
     ['religious leaders', 'interfaith', 'guests']),
    ('service', 'DSC_9606', 'aviu-service-religious-sisters',
     'Two religious sisters in white veils and white fleece vests standing by a barred window',
     'Religious sisters attending the service',
     'Two religious sisters in white veils and white fleece vests stand together by a barred window during the service.',
     ['religious sisters', 'church service']),
    ('service', 'DSC_9336', 'aviu-service-choir-teal-robes',
     'Choir members in teal and cream robes with treble clef emblems read sheet music during the service',
     'The choir during the service',
     'Choir members seated in teal and cream robes embroidered with treble clef emblems read sheet music and follow the programme during the service.',
     ['choir', 'church service', 'music']),
    ('service', 'DSC_9359', 'aviu-service-students-in-hall',
     'Students seated in rows at desks in a hall, listening to the service',
     'Students gathered in the hall',
     'Students fill the hall, seated in rows at wooden desks, attentive during the service.',
     ['students', 'congregation', 'hall']),
    ('service', 'DSC_9369', 'aviu-service-students-listening',
     'Students seated at wooden desks listening attentively during the service',
     'Students listening during the service',
     'Students seated at wooden desks listen attentively during the service, with printed programmes and phones on the desks.',
     ['students', 'congregation']),
    ('service', 'DSC_9350', 'aviu-service-guests-smiling-in-hall',
     'Guests smiling in a crowded hall, including a man in a pink Avance International University shirt and a woman in a navy dress',
     'Guests share a moment in the hall',
     'Guests smile and look on in a crowded hall, including a man in a pink Avance International University shirt and a woman in a navy-and-grey dress.',
     ['guests', 'audience', 'hall']),
]

# which extra pages show which gallery images (used for the image sitemap)
PAGE_MAP = {
    '/': ['aviu-chancellor-installation-group-portrait', 'aviu-chancellor-installation-cake-cutting'],
    '/about': ['aviu-chancellor-installation-group-portrait'],
    '/about/leadership': ['aviu-chancellor-installation-ceremonial-mace', 'aviu-chancellor-installation-dignitaries-seated'],
    '/staff': ['aviu-chancellor-installation-group-portrait'],
    '/events': ['aviu-chancellor-installation-cake-cutting', 'aviu-service-choir-teal-robes'],
    '/news': ['aviu-chancellor-installation-group-portrait'],
}


def save_jpeg(im, path, quality, exif):
    kw = dict(quality=quality, optimize=True, progressive=True)
    if exif is not None:
        kw['exif'] = exif
    im.save(path, 'JPEG', **kw)


def main():
    os.makedirs(GAL, exist_ok=True)
    catalog = []
    for coll, srcname, slug, alt, caption, desc, extra in ITEMS:
        im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, srcname + '.jpg'))).convert('RGB')
        exif = Image.Exif()
        exif[0x010E] = desc[:250].encode('ascii', 'replace').decode()   # ImageDescription
        exif[0x013B] = ORG                                               # Artist
        exif[0x8298] = f'Copyright {ORG}'                                # Copyright
        variants = {}
        for key, (edge, q) in SIZES.items():
            scale = min(1.0, edge / max(im.size))
            w, h = round(im.width * scale), round(im.height * scale)
            out = im.resize((w, h), Image.LANCZOS) if scale < 1 else im
            fn = f'{slug}-{key}.jpg'
            save_jpeg(out, os.path.join(GAL, fn), q, exif)
            variants[key] = dict(src=f'/images/gallery/{fn}', w=w, h=h)
        catalog.append(dict(coll=coll, slug=slug, alt=alt, caption=caption, desc=desc,
                            kw=KW + extra, v=variants))
        print(f"{slug:62} {variants['lg']['w']}x{variants['lg']['h']}  "
              f"{os.path.getsize(os.path.join(GAL, slug + '-lg.jpg')) // 1024} KB")

    # ---------- TypeScript catalog ----------
    def ts_item(c):
        v = c['v']
        srcset = ', '.join(f"{v[k]['src']} {v[k]['w']}w" for k in ('sm', 'md', 'lg'))
        title = f"{c['caption']} | {ORG}"
        return ('  {\n'
                f"    id: {json.dumps(c['slug'])},\n"
                f"    collection: {json.dumps(c['coll'])},\n"
                f"    src: {json.dumps(v['lg']['src'])},\n"
                f"    mdSrc: {json.dumps(v['md']['src'])},\n"
                f"    smSrc: {json.dumps(v['sm']['src'])},\n"
                f"    srcSet: {json.dumps(srcset)},\n"
                f"    width: {v['lg']['w']},\n    height: {v['lg']['h']},\n"
                f"    mdWidth: {v['md']['w']},\n    mdHeight: {v['md']['h']},\n"
                f"    alt: {json.dumps(c['alt'])},\n"
                f"    title: {json.dumps(title)},\n"
                f"    caption: {json.dumps(c['caption'])},\n"
                f"    description: {json.dumps(c['desc'])},\n"
                f"    keywords: {json.dumps(c['kw'])},\n"
                '  }')

    dims = {}
    for f in sorted(glob.glob(os.path.join(IMG, '**', '*.*'), recursive=True)):
        if f.lower().endswith(('.jpg', '.jpeg', '.png')):
            with Image.open(f) as im:
                dims['/' + os.path.relpath(f, os.path.join(ROOT, 'public')).replace(os.sep, '/')] = [im.width, im.height]

    def group(name):
        return '[\n' + ',\n'.join(ts_item(c) for c in catalog if c['coll'] == name) + ',\n]'

    ts = f"""// AUTO-GENERATED by scripts/optimize-images.py. Do not edit by hand.
export type GalleryImage = {{
  id: string;
  collection: 'installation' | 'service';
  /** 2000px version (lightbox / ImageObject.contentUrl) */
  src: string;
  /** 1000px version (page content) */
  mdSrc: string;
  /** 500px version (thumbnail) */
  smSrc: string;
  srcSet: string;
  width: number;
  height: number;
  mdWidth: number;
  mdHeight: number;
  alt: string;
  title: string;
  caption: string;
  description: string;
  keywords: string[];
}};

export const installationImages: GalleryImage[] = {group('installation')};

export const serviceImages: GalleryImage[] = {group('service')};

export const galleryImages: GalleryImage[] = [...installationImages, ...serviceImages];

export const galleryById = Object.fromEntries(galleryImages.map((g) => [g.id, g])) as Record<string, GalleryImage>;

/** Natural pixel size of every image in /public/images, so <img> tags can declare width/height (prevents layout shift). */
export const imageDimensions: Record<string, [number, number]> = {json.dumps(dims, indent=2)};
"""
    open(os.path.join(ROOT, 'src/data/galleryImages.generated.ts'), 'w').write(ts)

    # ---------- image sitemap ----------
    legacy = sorted(f for f in os.listdir(IMG)
                    if f.lower().endswith('.jpg') and f not in ('governance-structure.jpg', 'aviu-og-cover.jpg'))
    by_slug = {c['slug']: c for c in catalog}
    pages = {'/gallery': [SITE + c['v']['lg']['src'] for c in catalog] + [f'{SITE}/images/{f}' for f in legacy]}
    for page, slugs in PAGE_MAP.items():
        pages[page] = [SITE + by_slug[s]['v']['md']['src'] for s in slugs]
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
             'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">']
    for page, imgs in pages.items():
        lines.append(f'  <url>\n    <loc>{SITE}{page if page != "/" else "/"}</loc>')
        for u in imgs:
            lines.append(f'    <image:image><image:loc>{html.escape(u)}</image:loc></image:image>')
        lines.append('  </url>')
    lines.append('</urlset>\n')
    open(os.path.join(ROOT, 'public/sitemap-images.xml'), 'w').write('\n'.join(lines))
    print('image sitemap:', sum(len(v) for v in pages.values()), 'image entries on', len(pages), 'pages')

    # ---------- OG / social cover (1200x630) ----------
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, 'DSC_5715.jpg'))).convert('RGB')
    box = (0, 130, im.width, 130 + round(im.width * 630 / 1200))
    cover = im.crop(box).resize((1200, 630), Image.LANCZOS)
    save_jpeg(cover, os.path.join(IMG, 'aviu-og-cover.jpg'), 82, None)
    print('og cover written')


if __name__ == '__main__':
    main()
