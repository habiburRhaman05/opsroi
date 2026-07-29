import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

type Tier = {
  key: "growth" | "pro" | "elite";
  name: string;
  tagline: string;
  monthly: number;
  compareLine: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    key: "growth",
    name: "Growth",
    tagline: "Stop losing track of jobs. Get the system in place before you scale.",
    monthly: 2950,
    compareLine: "Cheaper than the tools you're stitching together now.",
    features: [
      "Up to 5 client/job subaccounts",
      "Core CRM & pipelines",
      "Standard automations",
      "Document signing",
      "Email support",
    ],
    cta: "Get Growth",
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Turn the chaos of multiple crews into one dashboard you actually trust.",
    monthly: 4995,
    compareLine: "Less than one ops hire, with none of the training time.",
    features: [
      "Up to 25 client/job subaccounts",
      "White-labeled ROI dashboards",
      "Advanced workflow automation",
      "AI Estimates & AI Invoicing",
      "HR & Payroll",
      "Priority support",
      "Guided onboarding & setup",
    ],
    cta: "Start My ROI",
    featured: true,
  },
  {
    key: "elite",
    name: "Elite",
    tagline: "Stop being the bottleneck. Get a dedicated partner who runs ops so you don't have to.",
    monthly: 7495,
    compareLine: "The cost of one bad week of chaos, prevented every month.",
    features: [
      "Unlimited client subaccounts",
      "Custom reporting builds",
      "Dedicated ops partner",
      "Custom automation builds",
      "Same-day support",
    ],
    cta: "Scope My Setup",
  },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section
      id="pricing"
      className={`relative ${
        hideHeader ? "pb-14 sm:pb-20 bg-transparent" : "py-14 sm:py-20 bg-mist"
      } px-5 sm:px-8`}
    >
      <div className="container">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">
                The Investment
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
                What Running On Autopilot
                <br className="hidden sm:block" />
                Is Worth.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Pick the tier that matches where your business is now. Every
                plan swaps out the tool stack, the setup, and the ops overhead.
              </p>
            </ScrollReveal>
          </div>
        )}

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {TIERS.map((tier) => {
            const isFeatured = tier.featured;

            if (isFeatured) {
              return (
                <ScrollReveal key={tier.key}>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-deep p-7 sm:p-8 text-white shadow-[0_30px_80px_-30px_rgba(15,43,53,0.7)] lg:-translate-y-3 lg:scale-[1.02]">
                    {/* Ambient glows */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-green/22 blur-3xl"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
                    />

                    {/* Most popular badge */}
                    <div className="relative mb-5 inline-flex items-center gap-1.5 self-start rounded-full bg-gold/15 border border-gold/40 px-3 py-1">
                      <Sparkles className="h-3 w-3 text-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold font-display">
                        Most Popular
                      </span>
                    </div>

                    <div className="relative">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                        {tier.name}
                      </div>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white font-display tabular-nums leading-none">
                          {fmt(tier.monthly)}
                        </span>
                        <span className="text-sm text-white/60 font-semibold">
                          /month
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-white/70 leading-relaxed">
                        {tier.tagline}
                      </p>
                      <p className="mt-2 text-[11px] text-white/50 leading-relaxed">
                        {tier.compareLine}
                      </p>
                    </div>

                    <ul className="relative mt-7 mb-8 space-y-3 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green">
                            <Check className="h-3 w-3 text-navy-deep" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/checkout?plan=${tier.key}`}
                      className="group relative inline-flex items-center justify-center gap-2 w-full rounded-full bg-green px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-deep hover:bg-white transition-colors font-display"
                    >
                      {tier.cta}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            }

            // Standard light tier
            return (
              <ScrollReveal key={tier.key}>
                <div className="relative flex h-full flex-col card-smooth rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-0.5 hover:border-green/30 hover:shadow-[0_20px_50px_-24px_rgba(15,43,53,0.2)]">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-deep font-display">
                    {tier.name}
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-navy font-display tabular-nums leading-none">
                      {fmt(tier.monthly)}
                    </span>
                    <span className="text-sm text-ink-soft font-semibold">
                      /month
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                    {tier.tagline}
                  </p>
                  <p className="mt-2 text-[11px] text-ink-soft/70 leading-relaxed">
                    {tier.compareLine}
                  </p>

                  <ul className="mt-7 mb-8 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green/15">
                          <Check className="h-3 w-3 text-green" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/checkout?plan=${tier.key}`}
                    className="group inline-flex items-center justify-center gap-2 w-full rounded-full border border-navy px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy hover:bg-navy hover:text-white transition-colors font-display"
                  >
                    {tier.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {!hideHeader && (
          <p className="text-center text-sm text-ink-soft mt-10">
            No long-term contract. Cancel anytime.
          </p>
        )}
      </div>
    </section>
  );
}
