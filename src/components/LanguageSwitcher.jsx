import { Link, useLocation } from 'react-router-dom';

import { useT } from '../i18n';
import { LOCALE_LABELS, LOCALE_NAMES, LOCALES, localizePath, splitLocale } from '../i18n/config';

// EN · TH · ES links that keep the visitor on the same page in another language
export default function LanguageSwitcher({ className = '', onSelect }) {
  const t = useT();
  const { pathname, hash } = useLocation();
  const { locale: current, path } = splitLocale(pathname);

  return (
    <nav aria-label={t.common.language} className={`flex items-center gap-3 ${className}`}>
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          to={localizePath(path, locale) + hash}
          onClick={onSelect}
          lang={locale}
          hrefLang={locale}
          aria-label={LOCALE_NAMES[locale]}
          aria-current={locale === current ? 'true' : undefined}
          className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-black ${
            locale === current ? 'text-black' : 'text-graphite/60'
          }`}
        >
          {LOCALE_LABELS[locale]}
        </Link>
      ))}
    </nav>
  );
}
