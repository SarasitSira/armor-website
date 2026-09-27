import bexoImage from '../assets/bexo-suit-hero.jpg';
import gbetaLogo from '../assets/partners/gbeta.png';
import graLogo from '../assets/partners/georgia-research-alliance.png';
import epicLogo from '../assets/partners/gt-epic-lab.png';
import CtaSection from '../components/CtaSection';
import Reveal from '../components/Reveal';
import { ArrowLink, DemoButton } from '../components/Links';
import usePageTitle from '../hooks/usePageTitle';
import { SHIELD_HREF } from '../site';

const PARTNERS = [
  { name: 'gener8tor gBETA', href: 'https://www.gener8tor.com/gbeta', logo: gbetaLogo, className: 'h-11 md:h-14' },
  { name: 'Georgia Research Alliance', href: 'https://gra.org', logo: graLogo, className: 'h-7 md:h-9' },
  { name: 'Georgia Tech EPIC Lab', href: 'https://www.epic.gatech.edu', logo: epicLogo, className: 'h-14 md:h-16' },
];

const STATS = [
  { value: 'Up to 38%', label: 'Reduction in peak lower-back muscle activation' },
  { value: '25+', label: 'Years of combined exoskeleton research' },
  { value: '2', label: 'Configurations: passive and hybrid' },
  { value: '0', label: 'Changes required to existing workflows' },
];

export default function Home() {
  usePageTitle();

  return (
    <>
      {/* Hero Section */}
      <header className="px-5 pt-28 md:pt-32">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-7xl lg:text-[88px]">
            Protect your workforce.
            <span className="block text-graphite">Empower their performance.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-graphite md:text-xl">
            ARMOR develops lightweight, wearable back exosuits that reduce lower-back muscle
            activation by up to 38%, protecting workers, cutting injury liability costs, and
            improving productivity.
          </p>
          <div className="mt-10 flex justify-center">
            <DemoButton />
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-16 max-w-7xl md:mt-20">
          <div className="overflow-hidden rounded-[28px] bg-graphite/10">
            <img
              src={bexoImage}
              alt="Worker wearing the Bexo back exosuit in a warehouse"
              className="aspect-4/3 w-full object-cover object-[center_45%] md:aspect-video"
            />
          </div>
        </Reveal>
      </header>

      {/* Stats Section */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-14 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="px-4 text-center md:border-l md:border-black/8 md:first:border-l-0">
              <div className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{stat.value}</div>
              <p className="mx-auto mt-3 max-w-45 text-sm leading-snug text-graphite">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Backed by */}
      <section className="px-5 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-5xl border-t border-black/8 pt-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Backed by</h2>
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

      {/* Page tiles */}
      <section className="px-5">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-black px-8 py-20 text-center text-white md:py-28">
              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Meet Bexo.</h2>
              <p className="mt-3 text-lg text-white/70 md:text-xl">Safety engineered into every movement.</p>
              <ArrowLink to="/solutions/bexo" className="mt-6">Explore Bexo</ArrowLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-graphite/5 px-8 py-20 text-center md:py-28">
              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Meet Shield.</h2>
              <p className="mt-3 text-lg text-graphite md:text-xl">Live posture scoring from wearable sensors.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <ArrowLink to="/solutions/shield">Explore Shield</ArrowLink>
                <ArrowLink href={SHIELD_HREF} external>Preview</ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
