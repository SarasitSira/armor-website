// Supported languages. English is the default and lives at the root (/industries);
// the others are prefixed (/th/industries, /es/industries).
export const LOCALES = ['en', 'th', 'es'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_LABELS = { en: 'EN', th: 'TH', es: 'ES' };
export const LOCALE_NAMES = { en: 'English', th: 'ไทย', es: 'Español' };

const PREFIX = new RegExp(`^/(${LOCALES.filter((l) => l !== DEFAULT_LOCALE).join('|')})(?=/|$)`);

// '/th/solutions/bexo' -> { locale: 'th', path: '/solutions/bexo' }
export function splitLocale(pathname) {
  const match = pathname.match(PREFIX);
  if (!match) return { locale: DEFAULT_LOCALE, path: pathname || '/' };
  return { locale: match[1], path: pathname.slice(match[0].length) || '/' };
}

// ('/solutions/bexo', 'th') -> '/th/solutions/bexo'
export function localizePath(path, locale) {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}
