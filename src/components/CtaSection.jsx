import Reveal from './Reveal';
import { ArrowLink, DemoButton } from './Links';

export default function CtaSection() {
  return (
    <section className="px-5 py-28 md:py-40">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-6xl">
          Ready to upgrade your workforce?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
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
