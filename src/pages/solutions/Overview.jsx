import hybridRender from '../../assets/bexo-hybrid-render.webp';
import passiveRender from '../../assets/bexo-passive-render.webp';
import shieldDashboard from '../../assets/shield-dashboard.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { Eyebrow } from '../../components/ui';
import { ArrowLink } from '../../components/Links';
import { useT } from '../../i18n';
import { SHIELD_HREF } from '../../site';

export default function Overview() {
  const t = useT();
  const c = t.overview;

  return (
    <>
      <header className="px-5 pb-16 pt-28 md:pb-20 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-medium tracking-[-0.035em] md:text-7xl">{c.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-graphite md:text-2xl">
            {c.subtitle}
          </p>
        </Reveal>
      </header>

      <section className="px-5">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {/* Bexo */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col items-center overflow-hidden rounded-4xl bg-white px-8 pb-12 pt-14 text-center md:pb-16 md:pt-16">
              <Eyebrow>Bexo</Eyebrow>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.bexoTitle}</h2>
              <p className="mt-3 max-w-md text-lg text-graphite">{c.bexoBody}</p>
              <ArrowLink to="/solutions/bexo" className="mt-6">{t.common.learnMore}</ArrowLink>
              <div className="mt-auto flex items-end justify-center gap-4 pt-10">
                <img src={passiveRender} alt={c.passiveAlt} className="h-72 w-auto md:h-96" loading="lazy" />
                <img src={hybridRender} alt={c.hybridAlt} className="h-72 w-auto md:h-96" loading="lazy" />
              </div>
            </article>
          </Reveal>

          {/* Shield */}
          <Reveal delay={100} className="h-full">
            <article className="flex h-full flex-col items-center overflow-hidden rounded-3xl bg-black px-8 pb-12 pt-14 text-center text-white md:pb-16 md:pt-16">
              <Eyebrow>Shield</Eyebrow>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.shieldTitle}</h2>
              <p className="mt-3 max-w-md text-lg text-white/70">{c.shieldBody}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <ArrowLink to="/solutions/shield">{t.common.learnMore}</ArrowLink>
                <ArrowLink href={SHIELD_HREF} external>{t.common.preview}</ArrowLink>
              </div>
              <div className="mt-auto w-full pt-10">
                <img
                  src={shieldDashboard}
                  alt={c.shieldAlt}
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
