import { ArrowRight } from 'lucide-react';

import Reveal from './Reveal';
import { Eyebrow, Heading } from './ui';
import { useT } from '../i18n';
import { MAILING_LIST_HREF, NEWSLETTER_LIST_ID } from '../site';

// Full-width newsletter panel shown above the footer on every page.
// Submits straight to the listmonk subscription form, which opens its confirmation page in a new tab.
export default function NewsletterSection() {
  const t = useT();
  return (
    <section className="bg-black px-5 py-24 text-white md:px-8 md:py-32">
      <Reveal className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{t.newsletter.eyebrow}</Eyebrow>
          <Heading title={t.newsletter.title} muted={t.newsletter.muted} size="section" dark className="mt-4" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
            {t.newsletter.body}
          </p>
        </div>

        <form
          action={MAILING_LIST_HREF}
          method="post"
          target="_blank"
          className="w-full md:max-w-md"
        >
          <input type="hidden" name="l" value={NEWSLETTER_LIST_ID} />
          <input type="hidden" name="nonce" value="" />
          <label htmlFor="newsletter-email" className="sr-only">{t.newsletter.emailLabel}</label>
          <div className="flex items-center border-b border-white/40 pb-3 focus-within:border-white">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder={t.newsletter.placeholder}
              autoComplete="email"
              className="min-w-0 flex-1 bg-transparent text-base text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="group ml-4 inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-white hover:text-brand"
            >
              {t.newsletter.subscribe}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>
          <p className="mt-4 text-xs text-white/50">{t.newsletter.fine}</p>
        </form>
      </Reveal>
    </section>
  );
}
