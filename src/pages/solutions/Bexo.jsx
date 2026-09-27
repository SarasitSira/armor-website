import hybridRender from '../../assets/bexo-hybrid-render.webp';
import passiveRender from '../../assets/bexo-passive-render.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { Eyebrow } from '../../components/ui';
import { usePageSources } from '../../sources';

const CONFIGURATIONS = [
  {
    name: 'Bexo Passive',
    weight: '0.75 kg',
    body: 'Elastic bands store energy as you bend and return it as you stand. No motors, batteries, or electronics, so it’s simple to fit and wear all day.',
    image: passiveRender,
  },
  {
    name: 'Bexo Hybrid',
    weight: '2.25 kg total with the 1.5 kg module',
    body: 'Clip on the active module for heavy, repeated lifts. Two cable-driven motors, routed in an X across the lower back, add power at the bottom of the lift.',
    image: hybridRender,
  },
];

const WEIGHT_PARTS = [
  { value: '0.75 kg', label: 'Passive base' },
  { value: '1.5 kg', label: 'Active module' },
];

const STEPS = [
  {
    title: 'Sense',
    body: 'A trunk-mounted inertial sensor tracks how you bend and lift, 100 times a second.',
  },
  {
    title: 'Estimate',
    body: 'The controller estimates the load on your lower back in real time, with no need to recognize the task first.',
  },
  {
    title: 'Assist',
    body: 'Cable tension is set to a share of that load, while the elastic bands carry the rest of the movement.',
  },
];

const RESULTS = [
  { value: '14%', label: 'lower peak back-muscle activation with the hybrid configuration', source: 2 },
  { value: '18%', label: 'lower integrated back-muscle activation with the hybrid configuration', source: 2 },
  { value: '62%', label: 'less energy than motor-only assistance while lowering, with no loss in muscle relief', source: 2 },
];

const FEATURES = [
  { title: 'Ergonomic integration', body: 'Low profile and lightweight. Wearable like a vest.' },
  { title: 'Zero restrictions', body: 'Designed with minimal interference to natural movement.' },
  { title: 'Dynamic support', body: 'Hybrid actuation provides support exactly when it’s needed.' },
  { title: 'Scalable integration', body: 'A seamless path from initial pilot to full workforce.' },
];

const SOURCES = [
  'Li, Molinaro, King, Mazumdar & Young, “Design and Validation of a Cable-Driven Asymmetric Back Exosuit,” IEEE Transactions on Robotics, 2022.',
  'Liu, “Design, Validation, and Comparison of a Hybrid Assistance Lower-back Wearable Exoskeleton,” M.S. thesis, Georgia Institute of Technology, 2026. Ten participants, 15 kg stoop lifts.',
];

const Ref = ({ n }) => <sup className="ml-0.5 text-[0.65em] text-white/60">{n}</sup>;

export default function Bexo() {
  usePageSources(SOURCES);

  return (
    <>
      <header className="px-5 pt-28 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-4">Bexo</Eyebrow>
          <h1 className="text-5xl font-medium tracking-[-0.035em] md:text-7xl">Meet Bexo.</h1>
          <p className="mt-4 text-2xl font-medium tracking-[-0.02em] text-graphite md:text-4xl">
            Safety engineered into every movement.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-graphite md:text-lg">
            Bexo is the third generation of cable-driven back exosuits developed with Georgia Tech’s
            EPIC Lab, backed by a team with 25+ years of exoskeleton research. One modular suit,
            passive or hybrid.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:mt-20 md:grid-cols-2">
          {CONFIGURATIONS.map((config, i) => (
            <Reveal key={config.name} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col items-center rounded-4xl bg-white px-8 pb-10 pt-12 text-center">
                <img
                  src={config.image}
                  alt={`${config.name} render, rear view on a mannequin`}
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
          <Eyebrow>The complete hybrid suit</Eyebrow>
          <div className="mt-3 text-8xl font-medium tracking-[-0.05em] md:text-[160px] md:leading-none">2.25 kg</div>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-graphite md:text-lg">
            Everything you need for powered back support, light enough to wear through a full shift.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-left">
            {WEIGHT_PARTS.map((part, i) => (
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
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">Help that adapts to every lift.</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              Fixed-profile suits give the same help for a light reach and a heavy transfer. Bexo scales
              its assistance to what your body is doing.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
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
            <Eyebrow>Proven in the lab</Eyebrow>
            <div className="mt-4 text-7xl font-medium tracking-[-0.04em] text-brand md:text-9xl">Up to 38%</div>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              reduction in lower-back muscle activation during symmetric lifting with active assistance.
              <Ref n={1} />
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-4xl bg-white/15 md:grid-cols-3">
            {RESULTS.map((result, i) => (
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
            Participants rated the hybrid configuration the most helpful and most comfortable of all conditions tested.
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
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
