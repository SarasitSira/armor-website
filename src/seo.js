// Page metadata used both at build time (pre-rendered HTML, sitemap) and in the browser.
// Titles and descriptions live with the rest of the copy in i18n/messages/*.js (`meta`).
import { DEFAULT_LOCALE, LOCALES, localizePath, splitLocale } from './i18n/config';
import { MESSAGES } from './i18n/messages';

export const SITE_URL = 'https://armor-exo.com';
export const SITE_NAME = 'ARMOR';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Pages that exist in every language (paths without the language prefix)
export const PAGE_PATHS = ['/', '/industries', '/solutions', '/solutions/bexo', '/solutions/shield', '/contact'];

// Open Graph locale codes
const OG_LOCALES = { en: 'en_US', th: 'th_TH', es: 'es_ES' };

const absoluteUrl = (path, locale) => {
  const localized = localizePath(path, locale);
  return `${SITE_URL}${localized === '/' ? '' : localized}`;
};

export function getPageMeta(pathname) {
  const { locale, path: rawPath } = splitLocale(pathname);
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  const meta = MESSAGES[locale].meta;
  const known = PAGE_PATHS.includes(path);

  if (!known) return { ...meta.notFound, locale, ogLocale: OG_LOCALES[locale], url: null, alternates: [], noindex: true };

  return {
    ...meta[path],
    locale,
    ogLocale: OG_LOCALES[locale],
    url: absoluteUrl(path, locale),
    // hreflang links to the same page in every language, plus x-default for the English version
    alternates: [
      ...LOCALES.map((l) => ({ hrefLang: l, href: absoluteUrl(path, l) })),
      { hrefLang: 'x-default', href: absoluteUrl(path, DEFAULT_LOCALE) },
    ],
  };
}
