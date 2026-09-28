import hybridRender from '../../assets/bexo-hybrid-render.webp';
import passiveRender from '../../assets/bexo-passive-render.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { Eyebrow } from '../../components/ui';
import { useT } from '../../i18n';
import { usePageSources } from '../../sources';

// Renders for each configuration, in the same order as `bexo.configs` in messages/*.js
const CONFIG_IMAGES = [passiveRender, hybridRender];

// Research citations stay in English in every language
const SOURCES = [
  'Li, Molinaro, King, Mazumdar & Young, “Design and Validation of a Cable-Driven Asymmetric Back Exosuit,” IEEE Transactions on Robotics, 2022.',
  'Liu, “Design, Validation, and Comparison of a Hybrid Assistance Lower-back Wearable Exoskeleton,” M.S. thesis, Georgia Institute of Technology, 2026. Ten participants, 15 kg stoop lifts.',
];

const Ref = ({ n }) => <sup className="ml-0.5 text-[0.65em] text-white/60">{n}</sup>;

export default function Bexo() {
  const t = useT();
  const c = t.bexo;
  usePageSources(SOURCES);

  return (
    <>
      <header className="px-5 pt-28 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-4">{c.eyebrow}</Eyebrow>
          <h1 className="text-5xl font-medium tracking-[-0.035em] md:text-7xl">{c.title}</h1>
          <p className="mt-4 text-2xl font-medium tracking-[-0.02em] text-graphite md:text-4xl">
            {c.subtitle}
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-graphite md:text-lg">
            {c.intro}
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:mt-20 md:grid-cols-2">
          {c.configs.map((config, i) => (
            <Reveal key={config.name} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col items-center rounded-4xl bg-white px-8 pb-10 pt-12 text-center">
                <img
                  src={CONFIG_IMAGES[i]}
                  alt={config.alt}
                  className="h-105 w-auto object-contain md:h-130"
                />
                <h2 className="mt-8 text-2xl font-medium tracking-[-0.02em]">{config.name}</h2>
                <p className="mt-1 text-sm font-medium text-brand">{config.weight}</p>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-graphite">{config.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </header>

      {/* Combined weight */}
      <section className="px-5 pt-24 md:pt-32">
        <Reveal className="mx-auto max-w-5xl rounded-4xl bg-white px-8 py-16 text-center md:py-20">
          <Eyebrow>{c.weightEyebrow}</Eyebrow>
          <div className="mt-3 text-8xl font-medium tracking-[-0.05em] md:text-[160px] md:leading-none">{c.weightValue}</div>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-graphite md:text-lg">
            {c.weightBody}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-left">
            {c.weightParts.map((part, i) => (
              <div key={part.label} className="flex items-center gap-6">
                {i > 0 && <span className="text-3xl font-light text-graphite">+</span>}
                <div>
                  <div className="text-3xl font-medium tracking-[-0.02em]">{part.value}</div>
                  <div className="text-sm text-graphite">{part.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.howTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              {c.howBody}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {c.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="border-t border-black/10 pt-6">
                <span className="text-sm font-medium tabular-nums text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-black px-5 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <Eyebrow>{c.resultsEyebrow}</Eyebrow>
            <div className="mt-4 text-7xl font-medium tracking-[-0.04em] text-brand md:text-9xl">{c.resultsHeadline}</div>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              {c.resultsBody}
              <Ref n={1} />
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-4xl bg-white/15 md:grid-cols-3">
            {c.results.map((result, i) => (
              <Reveal key={result.value} delay={i * 80} className="bg-black p-8 md:p-10">
                <div className="text-5xl font-medium tracking-[-0.04em]">{result.value}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {result.label}
                  <Ref n={result.source} />
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 text-center text-sm text-white/60">
            {c.resultsNote}
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2">
            {c.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80} className="bg-black p-8 md:p-12">
                <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70 md:text-base">{feature.body}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <CtaSection />
    </>
  );
}
