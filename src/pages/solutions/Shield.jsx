import shieldDashboard from '../../assets/shield-dashboard.webp';
import shieldDataStream from '../../assets/shield-datastream.webp';
import shieldScores from '../../assets/shield-scores.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { Eyebrow, Heading } from '../../components/ui';
import { PreviewButton } from '../../components/Links';
import { useT } from '../../i18n';
import { SHIELD_HREF } from '../../site';

export default function Shield() {
  const t = useT();
  const c = t.shield;

  return (
    <>
      <header className="px-5 pt-28 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-4">{c.eyebrow}</Eyebrow>
          <h1 className="text-5xl font-medium tracking-[-0.035em] md:text-7xl">{c.title}</h1>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-graphite md:text-lg">
            {c.intro}
          </p>
          <div className="mt-10 flex justify-center">
            <PreviewButton href={SHIELD_HREF} />
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-16 max-w-6xl md:mt-20">
          <a
            href={SHIELD_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-[20px] bg-white p-1.5 shadow-2xl shadow-black/10 ring-1 ring-black/10 md:rounded-[28px] md:p-2.5"
            aria-label={c.openPreview}
          >
            <img
              src={shieldDashboard}
              alt={c.dashboardAlt}
              className="w-full rounded-[14px] md:rounded-[20px]"
            />
          </a>
        </Reveal>
      </header>

      <section className="px-5 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <div className="mx-auto max-w-sm overflow-hidden rounded-4xl bg-white p-4 ring-1 ring-black/5">
              <img
                src={shieldScores}
                alt={c.scoresAlt}
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="order-1 space-y-10 md:order-2">
            {c.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100}>
                <h2 className="text-2xl font-medium tracking-[-0.02em]">{feature.title}</h2>
                <p className="mt-2 text-[17px] leading-relaxed text-graphite">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data stream view */}
      <section className="px-5 pt-24 md:pt-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{c.dataEyebrow}</Eyebrow>
          <Heading title={c.dataTitle} muted={c.dataMuted} size="section" className="mt-4" />
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-graphite">
            {c.dataBody}
          </p>
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-14 max-w-6xl">
          <div className="overflow-hidden rounded-[20px] bg-white p-1.5 shadow-2xl shadow-black/10 ring-1 ring-black/10 md:rounded-[28px] md:p-2.5">
            <img
              src={shieldDataStream}
              alt={c.dataAlt}
              className="w-full rounded-[14px] md:rounded-[20px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
