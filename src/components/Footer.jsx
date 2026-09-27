import { Link } from 'react-router-dom';

import { ArmorLogo, Wordmark } from './Brand';
import { useSourcesList } from '../sources';
import { CONTACT_HREF, DEMO_HREF, INSTAGRAM_HREF, LINKEDIN_HREF, MAILING_LIST_HREF } from '../site';

const linkClass = 'text-[11px] font-medium uppercase tracking-[0.14em] text-graphite transition-colors hover:text-black';

const COLUMNS = [
  [
    { label: 'Industries', to: '/industries' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Bexo', to: '/solutions/bexo' },
    { label: 'Shield', to: '/solutions/shield' },
    { label: 'Contact', to: '/contact' },
  ],
  [
    { label: 'LinkedIn', href: LINKEDIN_HREF, external: true },
    { label: 'Instagram', href: INSTAGRAM_HREF, external: true },
  ],
  [
    { label: 'Book a demo', href: DEMO_HREF, external: true },
    { label: 'Get updates', href: MAILING_LIST_HREF, external: true },
    { label: 'Support', href: CONTACT_HREF },
  ],
];

export default function Footer() {
  const sources = useSourcesList();

  return (
    <footer className="px-5 pb-8 pt-12 md:px-8 md:pt-16">
      {/* Research citations for the current page, kept as quiet fine print */}
      {sources.length > 0 && (
        <div className="mb-12 border-b border-black/10 pb-8">
          <h2 className="text-[11px] font-semibold text-graphite">Sources</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-4 text-[11px] leading-relaxed text-graphite/70">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center gap-2 self-start" aria-label="ARMOR home">
          <ArmorLogo className="h-6 w-6" />
          <Wordmark className="text-[14px] text-black" />
        </Link>

        <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 md:gap-x-24">
          {COLUMNS.map((column, i) => (
            <ul key={i} className="space-y-4">
              {column.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className={linkClass}>{item.label}</Link>
                  ) : (
                    <a
                      href={item.href}
                      className={linkClass}
                      {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="mt-16 text-[11px] font-medium uppercase tracking-[0.14em] text-graphite">
        ARMOR © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
