import { useLocation } from 'react-router-dom';

import { localizePath, splitLocale } from './config';
import { MESSAGES } from './messages';

export { MESSAGES };

// Current language, read from the URL prefix
export function useLocale() {
  return splitLocale(useLocation().pathname).locale;
}

// All text for the current language (see ./messages/*.js)
export function useT() {
  return MESSAGES[useLocale()];
}

// Prefixes internal paths with the current language
export function useLocalizePath() {
  const locale = useLocale();
  return (path) => localizePath(path, locale);
}
