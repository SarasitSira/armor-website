import shieldDashboard from '../../assets/shield-dashboard.webp';
import shieldDataStream from '../../assets/shield-datastream.webp';
import shieldScores from '../../assets/shield-scores.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
import { Eyebrow, Heading } from '../../components/ui';
import { PreviewButton } from '../../components/Links';
import { SHIELD_HREF } from '../../site';

const FEATURES = [
  {
    title: '3D body model',
    body: 'Body-worn IMU sensor nodes drive a live skeletal visualization of every movement.',
  },
  {
    title: 'Posture scoring',
    body: 'NIOSH lifting, REBA, and RULA assessments calculated in real time.',
  },
  {
    title: 'Real-time telemetry',
    body: 'Multi-node waveform history, with CSV export for every session.',
  },
];

export default function Shield() {

  return (
    <>
      <header className="px-5 pt-28 md:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-4">Shield</Eyebrow>
          <h1 className="text-5xl font-medium tracking-[-0.035em] md:text-7xl">See every lift.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-graphite md:text-lg">
            Shield Ergonomics Studio turns wearable IMU sensors into a live 3D body model, with
            NIOSH, REBA, and RULA posture scoring and real-time telemetry.
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
            aria-label="Open the Shield preview"
          >
            <img
              src={shieldDashboard}
              alt="Shield Ergonomics Studio in light mode: a 3D skeleton mid stooped lift beside NIOSH, REBA, and RULA posture scores"
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
                alt="Shield posture scores during a stooped lift: NIOSH 2 of 10, REBA 3 of 15, RULA 4 of 7"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="order-1 space-y-10 md:order-2">
            {FEATURES.map((feature, i) => (
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
          <Eyebrow>Data stream</Eyebrow>
          <Heading title="Every sensor, live." muted="Every axis, recorded." size="section" className="mt-4" />
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-graphite">
            Node status, battery, and orientation for each sensor, with multi-axis waveform history
            you can export to CSV.
          </p>
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-14 max-w-6xl">
          <div className="overflow-hidden rounded-[20px] bg-white p-1.5 shadow-2xl shadow-black/10 ring-1 ring-black/10 md:rounded-[28px] md:p-2.5">
            <img
              src={shieldDataStream}
              alt="Shield data stream tab showing eight active sensor nodes and a live spine pitch curve during a lift"
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
