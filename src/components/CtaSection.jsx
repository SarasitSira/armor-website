import Reveal from './Reveal';
import { ArrowLink, DemoButton } from './Links';
import { Heading } from './ui';
import { useT } from '../i18n';

export default function CtaSection() {
  const t = useT();
  return (
    <section className="px-5 py-28 md:px-8 md:py-40">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Heading title={t.cta.title} size="section" />
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-graphite">
          {t.cta.body}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <DemoButton />
          <ArrowLink to="/contact">{t.common.contactUs}</ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
