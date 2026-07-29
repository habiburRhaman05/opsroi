import Link from "next/link";
import { Check, X } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";

const FOR_YOU: React.ReactNode[] = [
  <>You run a <span className="font-bold text-white">$3M-$10M</span> contracting business you built yourself</>,
  "Your name carries weight in your trade, people call you for advice",
  "You want an asset that outlives the trucks and the crews",
  "You'll run your own company on the platform, publicly",
];

const NOT_FOR_YOU: string[] = [
  "You're looking for a passive investment you never touch",
  "You haven't operated at scale in your industry",
  "You want software but not the responsibility of leading a market",
  "You need to be pressured into a decision",
];

export function OwnershipTrack() {
  return (
    <section className="pb-16 px-5 sm:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-8 flex items-center justify-center bg-green text-navy-deep rounded-full text-sm font-bold shrink-0 font-display">
                1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight font-display uppercase">
                Own Your Industry&apos;s Platform
              </h2>
            </div>
            <p className="text-base sm:text-lg text-ink-soft max-w-3xl leading-relaxed">
              A founder partnership: you invest to build your industry&apos;s
              operating system, we build and run it, you sell it and keep the
              majority. One founder per industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* LEFT: The Fit - dark colored */}
          <ScrollReveal>
            <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-7 sm:p-9 text-white shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)] ring-2 ring-green/40">
              {/* Ambient glow - animated */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green/28 blur-3xl animate-opsroi-glow"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-green/12 blur-3xl animate-opsroi-glow-slow"
              />

              {/* Header */}
              <div className="relative flex items-center gap-4 pb-6 border-b border-white/10 mb-6">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-green/20 border border-green/40 text-green shadow-[0_0_18px_rgba(125,194,67,0.35)] animate-opsroi-float">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-xl animate-opsroi-ring"
                  />
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                    The Fit
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-white font-display uppercase">
                    This Is For You If
                  </div>
                </div>
              </div>

              {/* List */}
              <ul className="relative space-y-4">
                {FOR_YOU.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green">
                      <Check className="h-3 w-3 text-navy-deep" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* RIGHT: Not The Fit - white card */}
          <ScrollReveal>
            <div className="relative h-full rounded-2xl border border-line bg-white p-7 sm:p-9 shadow-[0_4px_20px_-8px_rgba(15,43,53,0.08)]">
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-line mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist border border-line text-ink-soft">
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft font-display">
                    Not The Fit
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-navy font-display uppercase">
                    This Isn&apos;t For You If
                  </div>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-4">
                {NOT_FOR_YOU.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist border border-line">
                      <X className="h-3 w-3 text-ink-soft/70" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-green hover:bg-green-deep text-navy-deep px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_25px_rgba(125,194,67,0.4)] hover:shadow-[0_6px_35px_rgba(125,194,67,0.6)] active:scale-95 text-[15px] font-display uppercase tracking-wide"
            >
              Apply Now
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
