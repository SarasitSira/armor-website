import CtaSection from '../components/CtaSection';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';
import { usePageSources } from '../sources';

const STATS = [
  {
    value: '59.6%',
    label: 'of 973 surveyed healthcare workers report a past work-related musculoskeletal disorder or pain.',
    source: 1,
  },
  {
    value: '5×',
    label: 'the all-occupation rate of overexertion injuries for nursing assistants: 118 vs. 23 per 10,000 workers.',
    source: 2,
  },
  {
    value: '7.0 kN',
    label: 'peak compression on the lower spine when moving a patient toward the head of a bed.',
    source: 3,
  },
  {
    value: '82%',
    label: 'of patient handling injuries happened with no lift equipment in use. Lifts are used in about 21% of transfers.',
    source: 4,
  },
];

const SETTINGS = [
  {
    title: 'Hospitals & rehab',
    body: 'Bed-to-chair transfers, lateral moves, and in-bed boosting carry the highest spine loads in patient care. A suit worn all shift is there for the unplanned transfer, not just the scheduled one.',
  },
  {
    title: 'Assisted living',
    body: 'Apartment-style rooms rarely have ceiling lifts, and caregivers often transfer residents alone. Overexertion injuries run about 40% higher than in hospitals: 65 vs. 47 per 10,000 workers.',
    source: 2,
  },
  {
    title: 'EMS crews',
    body: 'Paramedics and EMTs lift and carry patients in homes, stairwells, and roadsides, where there is no lift equipment at all.',
    source: 6,
  },
  {
    title: 'Home caregivers',
    body: 'Family members and informal caregivers move loved ones every day, without training, equipment, or anyone to help.',
  },
];

const GAPS = [
  {
    title: 'Lift equipment',
    body: 'Effective when used, but stored away and slow to set up. It sits unused in most transfers.',
    source: 4,
  },
  {
    title: 'Lumbar belts',
    body: 'A 312-worker trial found no reduction in back pain or sick leave, and only 43% wore one even half the time.',
    source: 5,
  },
  {
    title: 'Rigid exoskeletons',
    body: 'Powerful, but heavy and bulky around patients, lines, and monitors, and fixed-profile passive suits can’t scale to patient weight.',
  },
];

const OTHER_INDUSTRIES = [
  {
    title: 'Manufacturing & automotive',
    body: 'Assembly lines and vehicle maintenance bays demand repeated bending and lifting all shift. The passive suit can be issued to line workers without restricting how they move.',
  },
  {
    title: 'Logistics & warehousing',
    body: 'Warehouse and 3PL teams can reduce lower-back strain across long shifts, without investing in costly automation or workflow redesigns.',
  },
  {
    title: 'Construction',
    body: 'Material handling on job sites means heavy, awkward lifts in changing conditions, far from any lift equipment.',
  },
  {
    title: 'Sports rehab & performance',
    body: 'Adjustable assistance lets athletic trainers set how much help the lower back gets, then step it down as an athlete returns to full training, with every rep logged.',
  },
  {
    title: 'Defense',
    body: 'Service members and support crews lift and carry heavy loads in the field, where a lightweight, low-profile suit matters most.',
  },
];

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
  usePageTitle('Industries');
  usePageSources(SOURCES);

  return (
    <>
      <header className="px-5 pb-20 pt-28 md:pb-24 md:pt-32">
        <Reveal className="mx-auto max-w-5xl">
          <p className="mb-3 text-lg font-semibold text-brand">Industries</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-7xl">
            Built for the people who lift people.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite md:text-xl">
            Healthcare workers carry one of the heaviest musculoskeletal injury burdens of any U.S.
            workforce. Bexo brings back support to the moments lift equipment doesn’t reach.
          </p>
        </Reveal>
      </header>

      {/* The problem, in numbers */}
      <section className="bg-black px-5 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Patient handling is heavy work.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {STATS.map((stat, i) => (
              <Reveal key={stat.value} delay={(i % 2) * 100} className="border-t border-white/15 pt-8">
                <div className="text-5xl font-semibold tracking-[-0.04em] text-brand md:text-6xl">{stat.value}</div>
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
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Where the need is greatest.</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              Wherever a person is moved by hand, the load lands on the caregiver’s lower back.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {SETTINGS.map((setting, i) => (
              <Reveal key={setting.title} delay={(i % 2) * 100} className="h-full">
                <article className="flex h-full flex-col rounded-3xl bg-graphite/5 p-8 md:p-10">
                  <span className="text-sm font-medium tabular-nums text-graphite">0{i + 1}</span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{setting.title}</h3>
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
      <section className="bg-graphite/5 px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Today’s options leave a gap.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {GAPS.map((gap, i) => (
              <Reveal key={gap.title} delay={i * 100} className="h-full">
                <article className="h-full rounded-3xl bg-white p-8">
                  <h3 className="text-xl font-semibold tracking-tight">{gap.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                    {gap.body}
                    {gap.source && <Ref n={gap.source} />}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 max-w-3xl">
            <p className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Bexo is worn like a vest for the whole shift, weighs 0.75 kg in its passive form, and
              adds powered assistance only for the heaviest lifts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Other industries and applications */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-lg font-semibold text-brand">Beyond healthcare</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Anywhere backs do the lifting.</h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              The same hardware applies, with little modification, to other labor-intensive work.
            </p>
          </Reveal>
          <div className="mt-14 border-t border-black/10">
            {OTHER_INDUSTRIES.map((industry) => (
              <Reveal
                key={industry.title}
                className="grid gap-3 border-b border-black/10 py-8 md:grid-cols-[1fr_1.6fr] md:gap-12 md:py-10"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{industry.title}</h3>
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
