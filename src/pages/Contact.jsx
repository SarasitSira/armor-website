import Reveal from '../components/Reveal';
import { CONTACT_HREF, DEMO_HREF, INSTAGRAM_HREF, LINKEDIN_HREF, MAILING_LIST_HREF } from '../site';

const OPTIONS = [
  {
    title: 'Book a demo',
    body: 'Pick a time that works for you and see Bexo in action.',
    links: [{ label: 'Schedule on Calendly', href: DEMO_HREF, external: true }],
  },
  {
    title: 'Email us',
    body: 'Questions about pilots, pricing, or deployment.',
    links: [{ label: 'Contact', href: CONTACT_HREF }],
  },
  {
    title: 'Newsletter',
    body: 'Company news and product updates, delivered to your inbox.',
    links: [{ label: 'Subscribe', href: MAILING_LIST_HREF, external: true }],
  },
  {
    title: 'Follow us',
    body: 'See ARMOR in the field and behind the scenes.',
    links: [
      { label: 'LinkedIn', href: LINKEDIN_HREF, external: true },
      { label: 'Instagram', href: INSTAGRAM_HREF, external: true },
    ],
  },
];

export default function Contact() {

  return (
    <section className="px-5 pb-28 pt-28 md:pb-40 md:pt-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl">
          Ready to upgrade your workforce?
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-graphite md:text-lg">
          Bring injury prevention within reach. Contact our deployment team to discuss bringing
          Bexo to your facility.
        </p>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:mt-20 md:grid-cols-2">
        {OPTIONS.map((option, i) => (
          <Reveal key={option.title} delay={(i % 2) * 100} className="h-full">
            <div className="flex h-full flex-col rounded-4xl bg-white p-8 md:p-9">
              <h2 className="text-2xl font-medium tracking-[-0.02em]">{option.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-graphite">{option.body}</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {option.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="break-all text-[15px] font-medium text-brand hover:underline"
                  >
                    {link.label} ›
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
