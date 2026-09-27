import hybridRender from '../../assets/bexo-hybrid-render.webp';
import passiveRender from '../../assets/bexo-passive-render.webp';
import shieldDashboard from '../../assets/shield-dashboard.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { ArrowLink } from '../../components/Links';
import usePageTitle from '../../hooks/usePageTitle';
import { SHIELD_HREF } from '../../site';

export default function Overview() {
  usePageTitle('Solutions');

  return (
    <>
      <header className="px-5 pb-16 pt-28 md:pb-20 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-semibold tracking-[-0.035em] md:text-8xl">Solutions.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-graphite md:text-2xl">
            Wearable support for the body, and the data to prove it works.
          </p>
        </Reveal>
      </header>

      <section className="px-5">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {/* Bexo */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col items-center overflow-hidden rounded-3xl bg-graphite/5 px-8 pb-12 pt-14 text-center md:pb-16 md:pt-16">
              <p className="text-lg font-semibold text-brand">Bexo</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Wearable back exosuit.</h2>
              <p className="mt-3 max-w-md text-lg text-graphite">Passive and hybrid configurations for every kind of lift.</p>
              <ArrowLink to="/solutions/bexo" className="mt-6">Learn more</ArrowLink>
              <div className="mt-auto flex items-end justify-center gap-4 pt-10">
                <img src={passiveRender} alt="Bexo Passive render" className="h-72 w-auto md:h-96" loading="lazy" />
                <img src={hybridRender} alt="Bexo Hybrid render" className="h-72 w-auto md:h-96" loading="lazy" />
              </div>
            </article>
          </Reveal>

          {/* Shield */}
          <Reveal delay={100} className="h-full">
            <article className="flex h-full flex-col items-center overflow-hidden rounded-3xl bg-black px-8 pb-12 pt-14 text-center text-white md:pb-16 md:pt-16">
              <p className="text-lg font-semibold text-brand">Shield</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Ergonomics studio.</h2>
              <p className="mt-3 max-w-md text-lg text-white/70">Live posture scoring from wearable IMU sensors.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <ArrowLink to="/solutions/shield">Learn more</ArrowLink>
                <ArrowLink href={SHIELD_HREF} external>Preview</ArrowLink>
              </div>
              <div className="mt-auto w-full pt-10">
                <img
                  src={shieldDashboard}
                  alt="Shield Ergonomics Studio dashboard"
                  className="mx-auto w-full max-w-xl rounded-2xl ring-1 ring-white/15"
                  loading="lazy"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
