import { Link } from 'react-router-dom';

import { ArmorLogo, Wordmark } from './Brand';
import { useSourcesList } from '../sources';
import { CONTACT_HREF, DEMO_HREF, INSTAGRAM_HREF, LINKEDIN_HREF, MAILING_LIST_HREF } from '../site';

const linkClass = 'hover:text-black hover:underline';

export default function Footer() {
  const sources = useSourcesList();

  return (
    <footer className="bg-graphite/5 px-5 pb-8 pt-10 text-xs text-graphite">
      <div className="mx-auto max-w-5xl">
        {/* Research citations for the current page, kept as quiet fine print */}
        {sources.length > 0 && (
          <div className="mb-8 border-b border-black/10 pb-8">
            <h2 className="text-[11px] font-semibold text-graphite">Sources</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-[11px] leading-relaxed text-graphite/70">
              {sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ol>
          </div>
        )}
        <div className="grid grid-cols-2 gap-8 border-b border-black/10 pb-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <ArmorLogo className="h-5 w-5" />
              <Wordmark className="text-[13px] text-black" />
            </Link>
            <p className="mt-3">Safety engineered into every movement.</p>
            <p className="mt-6 font-semibold text-black">Get ARMOR updates</p>
            <a
              href={MAILING_LIST_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full bg-black px-4 py-1.5 font-medium text-white transition-colors hover:bg-graphite"
            >
              Subscribe
            </a>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/bexo" className={linkClass}>Bexo</Link></li>
              <li><Link to="/solutions/shield" className={linkClass}>Shield</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/industries" className={linkClass}>Industries</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
              <li><a href={CONTACT_HREF} className={linkClass}>Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black">Connect</h4>
            <ul className="space-y-2.5">
              <li><a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>Book a demo</a></li>
              <li><a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a></li>
              <li><a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a></li>
              <li><a href={MAILING_LIST_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>Newsletter</a></li>
            </ul>
          </div>
        </div>

        <p className="pt-6">
          Copyright © {new Date().getFullYear()} ARMOR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
