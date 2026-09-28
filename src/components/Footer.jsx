import { Link } from 'react-router-dom';

import { ArmorLogo, Wordmark } from './Brand';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalizePath, useT } from '../i18n';
import { useSourcesList } from '../sources';
import { CONTACT_HREF, DEMO_HREF, INSTAGRAM_HREF, LINKEDIN_HREF, MAILING_LIST_HREF } from '../site';

const linkClass = 'text-[11px] font-medium uppercase tracking-[0.14em] text-graphite transition-colors hover:text-black';

// Labels are looked up in the current language: `nav` keys for pages, `footer` keys for the rest
const COLUMNS = [
  [
    { nav: 'industries', to: '/industries' },
    { nav: 'solutions', to: '/solutions' },
    { footer: 'bexo', to: '/solutions/bexo' },
    { footer: 'shield', to: '/solutions/shield' },
    { nav: 'contact', to: '/contact' },
  ],
  [
    { footer: 'linkedin', href: LINKEDIN_HREF, external: true },
    { footer: 'instagram', href: INSTAGRAM_HREF, external: true },
  ],
  [
    { footer: 'bookDemo', href: DEMO_HREF, external: true },
    { footer: 'getUpdates', href: MAILING_LIST_HREF, external: true },
    { footer: 'support', href: CONTACT_HREF },
  ],
];

export default function Footer() {
  const t = useT();
  const localize = useLocalizePath();
  const sources = useSourcesList();

  return (
    <footer className="px-5 pb-8 pt-12 md:px-8 md:pt-16">
      {/* Research citations for the current page, kept as quiet fine print */}
      {sources.length > 0 && (
        <div className="mb-12 border-b border-black/10 pb-8">
          <h2 className="text-[11px] font-semibold text-graphite">{t.footer.sources}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-4 text-[11px] leading-relaxed text-graphite/70">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <Link to={localize('/')} className="flex items-center gap-2 self-start" aria-label={t.common.homeAria}>
          <ArmorLogo className="h-6 w-6" />
          <Wordmark className="text-[14px] text-black" />
        </Link>

        <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 md:gap-x-24">
          {COLUMNS.map((column, i) => (
            <ul key={i} className="space-y-4">
              {column.map((item) => {
                const label = item.nav ? t.nav[item.nav] : t.footer[item.footer];
                return (
                  <li key={item.to ?? item.href}>
                    {item.to ? (
                      <Link to={localize(item.to)} className={linkClass}>{label}</Link>
                    ) : (
                      <a
                        href={item.href}
                        className={linkClass}
                        {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-graphite">
          ARMOR © {new Date().getFullYear()}
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
