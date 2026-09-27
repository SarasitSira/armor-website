import Reveal from './Reveal';
import { ArrowLink, DemoButton } from './Links';
import { Heading } from './ui';

export default function CtaSection() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-40">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Heading title="Ready to upgrade your workforce?" size="section" />
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-graphite">
          Bring injury prevention within reach. Contact our deployment team to discuss bringing
          Bexo to your facility.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <DemoButton />
          <ArrowLink to="/contact">Contact us</ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
