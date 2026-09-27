import { ArrowUpRight } from 'lucide-react';

import Reveal from './Reveal';
import { MAILING_LIST_HREF } from '../site';

// Newsletter call to action shown above the footer on every page
export default function NewsletterSection() {
  return (
    <section className="px-5 pb-16 md:pb-20">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 rounded-3xl bg-brand px-8 py-14 text-black md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-16 md:py-20">
          <div>
            <p className="text-lg font-semibold">Newsletter</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Follow the build.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed md:text-xl">
              Research results, product updates, and company milestones from the ARMOR team,
              delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href={MAILING_LIST_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-graphite"
            >
              Subscribe to our newsletter
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <p className="text-sm">Free. Unsubscribe anytime.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
