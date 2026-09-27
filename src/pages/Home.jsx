import { Activity, Boxes, LineChart } from 'lucide-react';

import hybridRender from '../assets/bexo-hybrid-render.webp';
import passiveRender from '../assets/bexo-passive-render.webp';
import bexoImage from '../assets/bexo-suit-hero.jpg';
import gbetaLogo from '../assets/partners/gbeta.png';
import graLogo from '../assets/partners/georgia-research-alliance.png';
import epicLogo from '../assets/partners/gt-epic-lab.png';
import shieldDashboard from '../assets/shield-dashboard.webp';
import CtaSection from '../components/CtaSection';
import Reveal from '../components/Reveal';
import { ArrowLink, DemoButton, PillLink, PreviewButton } from '../components/Links';
import { Eyebrow, FeatureRow, Heading, MediaPill } from '../components/ui';
import { SHIELD_HREF } from '../site';

const PARTNERS = [
  { name: 'gener8tor gBETA', href: 'https://www.gener8tor.com/gbeta', logo: gbetaLogo, className: 'h-11 md:h-14' },
  { name: 'Georgia Research Alliance', href: 'https://gra.org', logo: graLogo, className: 'h-7 md:h-9' },
  { name: 'Georgia Tech EPIC Lab', href: 'https://www.epic.gatech.edu', logo: epicLogo, className: 'h-14 md:h-16' },
];

const STATS = [
  { value: 'Up to 38%', label: 'Reduction in peak lower-back muscle activation' },
  { value: '2.25 kg', label: 'Complete hybrid suit' },
  { value: '25+', label: 'Years of combined exoskeleton research' },
  { value: '0', label: 'Changes required to existing workflows' },
];

const SHIELD_FEATURES = [
  { icon: Boxes, title: '3D body model', body: 'Wearable IMU sensors drive a live skeleton of every movement.' },
  { icon: Activity, title: 'Posture scoring', body: 'NIOSH, REBA, and RULA assessments in real time.' },
  { icon: LineChart, title: 'Real-time telemetry', body: 'Waveform history with CSV export for every session.' },
];

export default function Home() {
  return (
    <>
      {/* Hero: product renders fading into the page, headline at the bottom */}
      <header className="relative h-svh min-h-160 overflow-hidden">
        <div className="absolute inset-x-0 top-[12svh] flex justify-center gap-[3vw]" aria-hidden="true">
          <img src={passiveRender} alt="" className="hidden h-[118svh] w-auto sm:block" fetchPriority="high" />
          <img src={hybridRender} alt="" className="h-[105svh] w-auto sm:h-[118svh]" fetchPriority="high" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-canvas via-canvas/90 to-transparent" />

        <Reveal className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-8 md:pb-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Heading
              as="h1"
              size="hero"
              title="Protect your workforce."
              muted="Empower their performance."
              className="max-w-3xl"
            />
            <div className="max-w-sm">
              <p className="text-[15px] leading-relaxed text-graphite">
                Lightweight, wearable back exosuits that reduce lower-back muscle activation by up to
                38%, protecting workers and improving productivity.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <DemoButton />
                <ArrowLink to="/solutions/bexo">Explore Bexo</ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Full-bleed product photo */}
      <section className="relative h-svh min-h-150 overflow-hidden bg-black text-white">
        <img
          src={bexoImage}
          alt="Worker wearing the Bexo back exosuit in a warehouse"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <MediaPill className="absolute left-5 top-24 md:left-8">Bexo V3</MediaPill>
        <Reveal className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-8 md:pb-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading title="Bexo" muted="Wearable back exosuit" size="hero" dark />
            <div className="flex flex-wrap items-center gap-4">
              <PillLink to="/solutions/bexo" tone="light">Explore Bexo</PillLink>
              <DemoButton tone="light" className="bg-white/15 text-white backdrop-blur-md hover:bg-white/25" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-14 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="px-4 text-center">
              <div className="text-4xl font-medium tracking-[-0.035em] md:text-5xl">{stat.value}</div>
              <p className="mx-auto mt-3 max-w-44 text-sm leading-snug text-graphite">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Backed by */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <Reveal className="mx-auto max-w-6xl border-t border-black/10 pt-16 text-center">
          <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">Backed by</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24">
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={partner.logo} alt={partner.name} className={`w-auto ${partner.className}`} />
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Shield */}
      <section className="px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Shield</Eyebrow>
          <Heading title="See every lift." size="section" className="mt-4" />
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-graphite">
            Shield Ergonomics Studio turns wearable sensors into live posture scores, so risk is
            measured instead of guessed.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-white p-3 md:rounded-[40px] md:p-5">
            <img
              src={shieldDashboard}
              alt="Shield Ergonomics Studio dashboard with a 3D body model and posture scores"
              className="w-full rounded-[22px] md:rounded-[28px]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-8 flex justify-center md:bottom-12">
              <PreviewButton href={SHIELD_HREF} className="bg-black/70 backdrop-blur-md">
                Preview Shield
              </PreviewButton>
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-4xl">
          <FeatureRow items={SHIELD_FEATURES} />
          <div className="mt-12 flex justify-center">
            <ArrowLink to="/solutions/shield">Explore Shield</ArrowLink>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
