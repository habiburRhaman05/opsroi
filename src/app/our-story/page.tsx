import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lightbulb,
  Hammer,
  TrendingUp,
  Network,
  Quote,
  ShieldCheck,
  Award,
  MapPin,
  Trees,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { PageHero } from "@/src/components/shared/PageHero";
import { CountUp } from "@/src/components/shared/CountUp";

type Stat = {
  label: string;
  value: React.ReactNode;
};
const STATS: Stat[] = [
  {
    label: "Monkeyman's annual revenue, 8 years apart",
    value: (
      <>
        <span className="text-navy/40">$0</span>
        <ArrowRight className="inline h-5 w-5 sm:h-6 sm:w-6 text-green mx-1 sm:mx-2 -mt-1" />
        <CountUp end={5} prefix="$" suffix="M+" duration={1800} />
      </>
    ),
  },
  {
    label: "From day one to top 1% of the trade",
    value: (
      <>
        <CountUp end={8} duration={1400} />
        <span className="text-base sm:text-lg font-semibold text-navy/70 ml-2">
          years
        </span>
      </>
    ),
  },
  {
    label: "Time the business asks of him today",
    value: (
      <span className="whitespace-nowrap">
        30
        <span className="text-navy/40">-</span>
        120
        <span className="text-base sm:text-lg font-semibold text-navy/70 ml-2">
          min/wk
        </span>
      </span>
    ),
  },
];

type Chapter = {
  number: string;
  icon: LucideIcon;
  title: string;
  body: string[];
  aside: React.ReactNode;
};

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    icon: Lightbulb,
    title: "The Founder",
    body: [
      "Chris Ruvalcaba walked into tree work in Portland, Oregon in 2008 with no equipment, no employees, and not so much as a chainsaw.",
      "He sold a week of work anyway, then figured out how to deliver it. That is the whole origin story. It is also the reason nothing on this site sounds like it came from a software company.",
    ],
    aside: <CredentialsCard />,
  },
  {
    number: "02",
    icon: Hammer,
    title: "The Business",
    body: [
      "Headquartered in Lake Oswego and serving fifteen plus communities across the Portland Metro area, Monkeyman's Tree Service (CCB #206934) grew from that one sold week into a top 1% operator.",
      "$0 to more than $5 million in annual revenue in eight years. The company still runs today on thirty minutes to two hours of Chris's time a week.",
    ],
    aside: <RevenueCard />,
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "The Ceiling",
    body: [
      "Every tool solved one problem and created another. Quotes written twice. Jobs that never got costed. Crews waiting on a phone call. Leads sitting in a voicemail nobody checked.",
      "Generic field service software did not understand tree work. Trade specific tools did not handle marketing. Marketing agencies had never seen a job costing sheet. Nothing on the market did the job.",
    ],
    aside: (
      <QuoteCard
        text={
          <>
            I was not trying to build a software company. I was trying to stop
            losing money to my own tool stack.
          </>
        }
        author="Chris Ruvalcaba, Founder"
      />
    ),
  },
  {
    number: "04",
    icon: Network,
    title: "The Network",
    body: [
      "So Chris stopped shopping and started building. CRM, scheduling, job costing, marketing, and reporting. Five systems built as one, because that is how the work actually happens.",
      "That platform became TreeROI, the first industry seat in what is now the OpsROI network. Seats open for RoofersROI, ContractorsROI, and more, one driven founder per trade.",
    ],
    aside: <NetworkGrid />,
  },
];

type Principle = { number: string; title: string; body: string };
const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "No Niche Lock In",
    body: "We provide the universal engine; operators provide the industry expertise. The system scales to fit the specific needs of any trade.",
  },
  {
    number: "02",
    title: "Built By Operators",
    body: "Software companies build for features. Operators build for outcomes. Every platform in our network is guided by someone doing the actual work.",
  },
  {
    number: "03",
    title: "ROI Over Vanity",
    body: "We don&apos;t care about page views if they don&apos;t turn into booked jobs. Every tool in the platform is measured by its impact on the bottom line.",
  },
  {
    number: "04",
    title: "One Seat, One Owner",
    body: "The vertical model works because it&apos;s focused. We partner with one driven operator per industry to own and build their specific CRM.",
  },
];

function QuoteCard({
  text,
  author,
}: {
  text: React.ReactNode;
  author: string;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-8 sm:p-10 text-white ring-2 ring-green/40 shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-green/25 blur-3xl animate-opsroi-glow"
      />
      <Quote className="relative h-8 w-8 text-green mb-5" strokeWidth={1.8} />
      <blockquote className="relative text-xl sm:text-2xl font-bold leading-snug text-white font-display">
        {text}
      </blockquote>
      <div className="relative mt-6 text-[10px] font-bold uppercase tracking-widest text-green font-display">
        {author}
      </div>
    </div>
  );
}

function CredentialsCard() {
  const credentials = [
    {
      icon: Award,
      label: "ISA Certified Arborist",
      value: "#PN-9560AT",
    },
    {
      icon: ShieldCheck,
      label: "CCB License",
      value: "#206934",
    },
    {
      icon: Trees,
      label: "Tree Risk Assessment Qualified",
      value: "TRAQ Professional",
    },
    {
      icon: MapPin,
      label: "Established 2008",
      value: "Lake Oswego, OR",
    },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-7 sm:p-9 text-white ring-2 ring-green/40 shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-green/22 blur-3xl animate-opsroi-glow"
      />
      <div className="relative">
        <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green font-display">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Certified & Licensed
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-white font-display uppercase leading-tight mb-6">
          Real Business. Real Credentials.
        </h4>
        <ul className="space-y-3">
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <li
                key={c.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
              >
                <span className="flex-none flex items-center justify-center w-10 h-10 rounded-lg bg-green/15 border border-green/30 text-green">
                  <Icon className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] text-white/55 uppercase tracking-widest font-bold font-display">
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-sm sm:text-[15px] font-bold text-white font-display uppercase tracking-tight">
                    {c.value}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function RevenueCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-8 sm:p-10 text-white ring-2 ring-green/40 shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)] flex flex-col justify-center min-h-64">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-green/25 blur-3xl animate-opsroi-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative">
        <div className="text-[10px] font-bold uppercase tracking-widest text-green font-display mb-3">
          Proof Point
        </div>
        <div className="text-5xl sm:text-6xl font-bold text-white font-display tabular-nums leading-none">
          $5M+
        </div>
        <div className="mt-3 text-sm font-bold uppercase tracking-widest text-white/75 font-display">
          Annual Revenue Managed
        </div>
      </div>
    </div>
  );
}

function NetworkGrid() {
  const platforms = [
    { name: "TreeROI", url: "https://treeroi.com" },
    { name: "RoofersROI", url: "https://roofersroi.com" },
    { name: "ContractorsROI", url: "https://contractorsroi.com" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-smooth flex flex-col items-center justify-center aspect-square rounded-2xl border border-line bg-white p-4 shadow-[0_10px_30px_-18px_rgba(15,43,53,0.15)] hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_18px_40px_-20px_rgba(125,194,67,0.3)]"
        >
          <Image
            src={`/logos/${p.name}/${p.name}-1.png`}
            alt={p.name}
            width={140}
            height={60}
            className="w-full max-w-32.5 h-auto object-contain"
          />
        </a>
      ))}
      <div className="flex flex-col items-center justify-center aspect-square rounded-2xl border border-dashed border-line bg-mist p-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-ink-soft font-display">
          And More
        </div>
        <div className="mt-2 text-2xl font-bold text-navy font-display">
          Coming Soon
        </div>
      </div>
    </div>
  );
}

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      {/* ─── Hero ─── */}
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            He Didn&apos;t Own
            <br className="hidden sm:block" />
            <span className="text-green"> A Chainsaw.</span>
          </>
        }
        description="Chris Ruvalcaba sold a week of tree work in 2008 anyway. Eight years later Monkeyman's was doing more than $5 million a year, running without him. The operating system he built to do it became OpsROI, opened up for founders in every trade."
        primaryCta={{ label: "Talk To Us", href: "/book" }}
        secondaryCta={{ label: "See What We Do", href: "/features" }}
      />

      {/* ─── Stats band ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {STATS.map((s) => (
              <ScrollReveal key={s.label}>
                <div className="group card-smooth h-full rounded-2xl border border-line bg-white p-6 text-center hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_18px_40px_-20px_rgba(125,194,67,0.3)]">
                  <div className="text-3xl sm:text-4xl font-bold text-green font-display tabular-nums leading-none">
                    {s.value}
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-ink-soft font-display leading-snug card-smooth-icon group-hover:text-navy">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Journey ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">
                The Journey
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                A Founder, A Company,
                <br className="hidden sm:block" />
                And <span className="text-green">The System Between Them.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Four chapters that turned one sold week of tree work into the
                platform you&apos;re looking at now.
              </p>
            </ScrollReveal>
          </div>

          {/* Chapters as a center-timeline editorial layout */}
          <div className="relative mx-auto max-w-6xl">
            {/* Central vertical spine (desktop only) */}
            <div
              aria-hidden
              className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px bg-linear-to-b from-green/10 via-green/40 to-green/10 -translate-x-1/2"
            />

            <div className="space-y-16 lg:space-y-24">
              {CHAPTERS.map((c, i) => {
                const Icon = c.icon;
                const flipped = i % 2 === 1;
                return (
                  <ScrollReveal key={c.number}>
                    <article className="group relative">
                      {/* Timeline dot on the spine */}
                      <div
                        aria-hidden
                        className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10"
                      >
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white ring-4 ring-mist">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-navy-deep border-2 border-green shadow-[0_0_20px_rgba(125,194,67,0.45)] animate-opsroi-float">
                            <span className="text-sm font-bold text-green font-display tabular-nums">
                              {c.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chapter body */}
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:pt-6">
                        {/* Text column */}
                        <div className={flipped ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"}>
                          {/* Mobile-only number badge */}
                          <div className="lg:hidden mb-4 inline-flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-deep text-green font-display font-bold tabular-nums text-sm ring-2 ring-green/50">
                              {c.number}
                            </span>
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-deep font-display">
                              <span className="h-px w-6 bg-green" />
                              Chapter {c.number}
                            </span>
                          </div>

                          {/* Icon chip */}
                          <span className="hidden lg:flex mb-5 h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:shadow-[0_0_20px_rgba(125,194,67,0.35)] animate-icon-bump">
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </span>

                          <div className="hidden lg:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-deep font-display mb-3">
                            <span className="h-px w-6 bg-green" />
                            Chapter {c.number}
                          </div>

                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy leading-tight font-display uppercase mb-5">
                            {c.title}
                          </h3>
                          {c.body.map((p, j) => (
                            <p
                              key={j}
                              className="text-[15px] sm:text-base text-ink leading-relaxed mb-4 last:mb-0 max-w-lg"
                            >
                              {p}
                            </p>
                          ))}
                        </div>

                        {/* Aside column */}
                        <div className={flipped ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"}>
                          {c.aside}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founder Statement ─── */}
      <section className="relative overflow-hidden bg-navy-deep py-14 sm:py-20 px-5 sm:px-8 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green/18 blur-3xl animate-opsroi-glow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gold/8 blur-3xl animate-opsroi-glow-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green/60 to-transparent"
        />

        {/* Section heading - same pattern as every other section */}
        <div className="relative container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">
                From The Founder
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 font-display uppercase">
                Not An Agency.
                <br className="hidden sm:block" />
                Not Just Software.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-white/70 leading-relaxed">
                Built by somebody who has made the 2AM payroll call and felt
                every one of these problems firsthand.
              </p>
            </ScrollReveal>
          </div>

          {/* Photo + Quote card grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Photo */}
            <div className="lg:col-span-5 h-full">
              <ScrollReveal className="h-full">
                <div className="relative h-full max-w-sm mx-auto lg:max-w-none">
                  <div
                    aria-hidden
                    className="absolute -inset-3 border-2 border-green/40 rounded-2xl -z-10 translate-x-3 translate-y-3"
                  />
                  <div className="relative h-full rounded-2xl overflow-hidden aspect-4/5 lg:aspect-auto lg:min-h-96 bg-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-green/30">
                    <img
                      src="/founder.webp"
                      alt="Chris Ruvalcaba, Founder of OpsROI"
                      className="w-full h-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/20 to-transparent"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-bold text-lg font-display uppercase tracking-tight">
                        Chris Ruvalcaba
                      </p>
                      <p className="text-green text-[10px] uppercase tracking-widest font-display mt-1">
                        Founder, OpsROI
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Quote card - same style as other QuoteCards on this page */}
            <div className="lg:col-span-7 h-full">
              <ScrollReveal className="h-full">
                <QuoteCard
                  text={
                    <>
                      This is not an agency. This is not just software. It is
                      the operating system I wish someone had handed me at $1M,
                      built by somebody who has made the 2AM payroll call and
                      felt every one of these problems firsthand.
                    </>
                  }
                  author="Chris Ruvalcaba, Founder"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Principles - split header/body layout ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            {/* Left: sticky header + CTA */}
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <SectionLabel className="mb-4">The Principles</SectionLabel>
              </ScrollReveal>
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-5 font-display uppercase">
                  The Same System,
                  <br />
                  <span className="text-green">Productized.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-base text-ink-soft leading-relaxed mb-7">
                  TreeROI proved the model. Now the same engine powers a growing
                  family of trade specific platforms, each one built and owned
                  by an operator in that industry.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <Link
                  href="/book"
                  data-magnetic
                  data-magnetic-strength="0.2"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-navy-deep hover:bg-navy-deep hover:text-white card-smooth font-display shadow-[0_0_25px_rgba(125,194,67,0.4)] hover:shadow-[0_0_35px_rgba(125,194,67,0.6)]"
                >
                  Claim Your Seat
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right: numbered principle rows */}
            <div className="space-y-3">
              {PRINCIPLES.map((p) => (
                <ScrollReveal key={p.number}>
                  <div
                    data-cursor-glow
                    className="group card-smooth relative overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-7 hover:border-green/40 hover:shadow-[0_18px_40px_-20px_rgba(125,194,67,0.28)]"
                  >
                    <div className="flex items-start gap-5 sm:gap-6">
                      {/* Big number */}
                      <div className="relative flex-none">
                        <span className="text-4xl sm:text-5xl font-bold text-navy/25 font-display tabular-nums leading-none card-smooth-icon group-hover:text-green">
                          {p.number}
                        </span>
                      </div>
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-navy leading-snug font-display uppercase mb-2">
                          {p.title}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] text-ink-soft leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
