import Reveal from '../components/Reveal';
import { useT } from '../i18n';
import { CONTACT_HREF, DEMO_HREF, INSTAGRAM_HREF, LINKEDIN_HREF, MAILING_LIST_HREF } from '../site';

// Contact cards; titles, descriptions, and link labels come from `contact` in messages/*.js
function contactOptions(c) {
  return [
    { title: c.demoTitle, body: c.demoBody, links: [{ label: c.demoLink, href: DEMO_HREF, external: true }] },
    { title: c.emailTitle, body: c.emailBody, links: [{ label: c.emailLink, href: CONTACT_HREF }] },
    { title: c.newsletterTitle, body: c.newsletterBody, links: [{ label: c.newsletterLink, href: MAILING_LIST_HREF, external: true }] },
    {
      title: c.followTitle,
      body: c.followBody,
      links: [
        { label: 'LinkedIn', href: LINKEDIN_HREF, external: true },
        { label: 'Instagram', href: INSTAGRAM_HREF, external: true },
      ],
    },
  ];
}

export default function Contact() {
  const t = useT();
  const c = t.contact;

  return (
    <section className="px-5 pb-28 pt-28 md:pb-40 md:pt-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl">
          {c.title}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-graphite md:text-lg">
          {c.body}
        </p>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:mt-20 md:grid-cols-2">
        {contactOptions(c).map((option, i) => (
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
