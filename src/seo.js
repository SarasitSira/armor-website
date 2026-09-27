// Page metadata used both at build time (pre-rendered HTML, sitemap) and in the browser
export const SITE_URL = 'https://armor-exo.com';
export const SITE_NAME = 'ARMOR';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const PAGES = {
  '/': {
    title: 'ARMOR | Safety Engineered into Every Movement',
    description:
      'ARMOR is shaping the future of human mobility through wearable robots. Meet Bexo, a lightweight back exosuit, and Shield, a real-time ergonomics studio.',
  },
  '/industries': {
    title: 'Industries | ARMOR',
    description:
      'Bexo helps nurses, assisted living caregivers, EMS crews, and other labor-intensive teams reduce lower-back strain during patient handling and lifting.',
  },
  '/solutions': {
    title: 'Solutions | ARMOR',
    description:
      'Explore ARMOR solutions: Bexo, a modular passive and hybrid back exosuit, and Shield, an IMU-based ergonomics studio with live posture scoring.',
  },
  '/solutions/bexo': {
    title: 'Bexo Back Exosuit | ARMOR',
    description:
      'Bexo is a 2.25 kg modular back exosuit with passive and hybrid configurations that reduces peak lower-back muscle activation by up to 38%.',
  },
  '/solutions/shield': {
    title: 'Shield Ergonomics Studio | ARMOR',
    description:
      'Shield turns wearable IMU sensors into a live 3D body model with NIOSH, REBA, and RULA posture scoring and real-time telemetry.',
  },
  '/contact': {
    title: 'Contact | ARMOR',
    description:
      'Book a demo of Bexo, email the ARMOR team, or subscribe to our newsletter for research results and product updates.',
  },
};

export const NOT_FOUND = {
  title: 'Page not found | ARMOR',
  description: 'The page you’re looking for doesn’t exist.',
  noindex: true,
};

export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const page = PAGES[path];
  return page ? { ...page, url: `${SITE_URL}${path === '/' ? '' : path}` } : { ...NOT_FOUND, url: null };
}
