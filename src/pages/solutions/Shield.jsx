import shieldDashboard from '../../assets/shield-dashboard.webp';
import shieldScores from '../../assets/shield-scores.webp';
import CtaSection from '../../components/CtaSection';
import Reveal from '../../components/Reveal';
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
          <p className="mb-3 text-lg font-semibold text-brand">Shield</p>
          <h1 className="text-6xl font-semibold tracking-[-0.035em] md:text-8xl">See every lift.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-graphite md:text-xl">
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
              alt="Shield Ergonomics Studio dashboard showing a 3D body model and ergonomic assessment scores"
              className="w-full rounded-[14px] md:rounded-[20px]"
            />
          </a>
        </Reveal>
      </header>

      <section className="px-5 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-graphite/5 p-4 ring-1 ring-black/5">
              <img
                src={shieldScores}
                alt="NIOSH, REBA, and RULA score cards from Shield"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="order-1 space-y-10 md:order-2">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100}>
                <h2 className="text-2xl font-semibold tracking-tight">{feature.title}</h2>
                <p className="mt-2 text-[17px] leading-relaxed text-graphite">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
