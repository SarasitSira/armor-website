import CtaSection from '../components/CtaSection';
import Reveal from '../components/Reveal';
import { Eyebrow } from '../components/ui';
import { useT } from '../i18n';
import { usePageSources } from '../sources';

// Research citations stay in English in every language
const SOURCES = [
  'Wiggermann, Francis & Solomon, Applied Ergonomics, 2024.',
  'U.S. Bureau of Labor Statistics, nonfatal occupational injuries and illnesses, 2023–2024.',
  'Jordan et al., Journal of Occupational Medicine and Toxicology, 2011.',
  'Khairallah et al., International Journal of Environmental Research and Public Health, 2024.',
  'van Poppel et al., JAMA, 1998.',
  'Zheng, Hawke & Evans, International Journal of Industrial Ergonomics, 2022.',
];

const Ref = ({ n }) => <sup className="ml-0.5 text-[0.65em] text-graphite">{n}</sup>;

export default function Industries() {
  const t = useT();
  const c = t.industries;
  usePageSources(SOURCES);

  return (
    <>
      <header className="px-5 pb-20 pt-28 md:pb-24 md:pt-32">
        <Reveal className="mx-auto max-w-5xl">
          <Eyebrow className="mb-4">{c.eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl">
            {c.title} <span className="text-graphite/65">{c.muted}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-graphite md:text-lg">
            {c.intro}
          </p>
        </Reveal>
      </header>

      {/* The problem, in numbers */}
      <section className="bg-black px-5 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {c.statsTitle}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {c.stats.map((stat, i) => (
              <Reveal key={stat.value} delay={(i % 2) * 100} className="border-t border-white/15 pt-8">
                <div className="text-5xl font-medium tracking-[-0.04em] text-brand md:text-6xl">{stat.value}</div>
                <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-white/70">
                  {stat.label}
                  <Ref n={stat.source} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where Bexo helps */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.needTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              {c.needBody}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {c.settings.map((setting, i) => (
              <Reveal key={setting.title} delay={(i % 2) * 100} className="h-full">
                <article className="flex h-full flex-col rounded-4xl bg-white p-8 md:p-10">
                  <span className="text-sm font-medium tabular-nums text-graphite">0{i + 1}</span>
                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em]">{setting.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                    {setting.body}
                    {setting.source && <Ref n={setting.source} />}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why current options fall short */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.gapTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {c.gaps.map((gap, i) => (
              <Reveal key={gap.title} delay={i * 100} className="h-full">
                <article className="h-full rounded-4xl bg-white p-8">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{gap.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                    {gap.body}
                    {gap.source && <Ref n={gap.source} />}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 max-w-3xl">
            <p className="text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
              {c.gapSummary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Other industries and applications */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <Eyebrow className="mb-4">{c.beyondEyebrow}</Eyebrow>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">{c.beyondTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              {c.beyondBody}
            </p>
          </Reveal>
          <div className="mt-14 border-t border-black/10">
            {c.others.map((industry) => (
              <Reveal
                key={industry.title}
                className="grid gap-3 border-b border-black/10 py-8 md:grid-cols-[1fr_1.6fr] md:gap-12 md:py-10"
              >
                <h3 className="text-2xl font-medium tracking-[-0.02em]">{industry.title}</h3>
                <p className="text-[17px] leading-relaxed text-graphite">{industry.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
