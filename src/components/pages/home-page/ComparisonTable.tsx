"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Headphones,
  Globe,
  MapPin,
  Target,
  Send,
  Star,
  Zap,
  Layers,
  Check,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";

type CurrentTool = {
  name: string;
  icon: LucideIcon;
  low: number;
  high: number | null; // null means "starting at low, e.g. $2,000+"
};

const CURRENT_STACK: CurrentTool[] = [
  { name: "CRM (Jobber, ServiceTitan, etc.)", icon: Users, low: 300, high: 600 },
  { name: "Answering service", icon: Headphones, low: 300, high: 600 },
  { name: "Website & hosting", icon: Globe, low: 150, high: 500 },
  { name: "Local SEO agency", icon: MapPin, low: 2000, high: 5000 },
  { name: "Google Ads management", icon: Target, low: 750, high: 2000 },
  { name: "Meta Ads management", icon: Send, low: 2000, high: null },
  { name: "Reputation, scheduling", icon: Star, low: 370, high: 1500 },
  { name: "Automation, reporting, email/SMS", icon: Zap, low: 500, high: 2500 },
];

// "Typical" total blend the user actually pays (excludes big ad spend outliers)
const TYPICAL_LOW = 5000;
const TYPICAL_HIGH = 8000;

// OpsROI starting price
const OPSROI_PRICE = 2950;

type OpsroiCategory = {
  name: string;
  items: string[];
};

const OPSROI_CATEGORIES: OpsroiCategory[] = [
  {
    name: "Operations & Management",
    items: [
      "CRM & lead pipeline",
      "Scheduling & dispatch",
      "Job costing & tracking",
      "Client records & history",
      "Team & crew tracking",
      "Automated follow-ups",
    ],
  },
  {
    name: "Marketing & Growth",
    items: [
      "Local SEO & Google profile",
      "Google & Meta ads",
      "Review management",
      "Website & landing pages",
    ],
  },
  {
    name: "Client Services",
    items: [
      "AI Receptionist 24/7",
      "Estimates & invoicing",
    ],
  },
  {
    name: "Intelligence & Automation",
    items: [
      "White-labeled ROI dashboards",
      "Workflow automation",
    ],
  },
];

const OPSROI_TOOL_COUNT = OPSROI_CATEGORIES.reduce(
  (sum, c) => sum + c.items.length,
  0,
);

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function priceLabel(low: number, high: number | null): string {
  if (high === null) return `$${fmt(low)}+`;
  return `$${fmt(low)} - $${fmt(high)}`;
}

export function ComparisonTable() {
  const savingsLow = TYPICAL_LOW - OPSROI_PRICE;
  const savingsHigh = TYPICAL_HIGH - OPSROI_PRICE;
  const yearlyLow = savingsLow * 12;
  const yearlyHigh = savingsHigh * 12;
  const percentLow = Math.round((savingsLow / TYPICAL_LOW) * 100);
  const percentHigh = Math.round((savingsHigh / TYPICAL_HIGH) * 100);

  return (
    <section id="replaces" className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">Replace Your Stack</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
              Everything You&apos;re Already
              <br className="hidden sm:block" />
              Paying For, In One Bill.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              Add up what you spend stitching tools together. Then look at what
              one OpsROI subscription actually costs.
            </p>
          </ScrollReveal>
        </div>

        {/* Split comparison */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* LEFT: The current stack - white, muted */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-[0_4px_20px_-8px_rgba(15,43,53,0.08)]">
              {/* Header */}
              <div className="mb-6 flex items-center gap-4 pb-5 border-b border-line">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist border border-line text-ink-soft">
                  <Layers className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-navy font-display uppercase">
                    Your Current <span className="text-ink-soft">Operation</span>
                  </div>
                  <div className="text-[13px] text-ink-soft mt-0.5">
                    {CURRENT_STACK.length} disconnected tools, {CURRENT_STACK.length} bills
                  </div>
                </div>
              </div>

              {/* Rows */}
              <ul className="space-y-2 flex-1">
                {CURRENT_STACK.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <li
                      key={tool.name}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-mist"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist border border-line text-ink-soft">
                          <Icon className="h-4 w-4" strokeWidth={1.8} />
                        </span>
                        <span className="text-sm text-ink truncate font-semibold">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-[13px] font-bold text-ink-soft tabular-nums shrink-0 font-display">
                        {priceLabel(tool.low, tool.high)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Typical total callout */}
              <div className="mt-6 rounded-xl border border-line bg-mist p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-navy font-display uppercase">
                      Typical Total
                    </div>
                    <div className="text-[11px] text-ink-soft mt-0.5">
                      excluding ad spend
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-navy font-display tabular-nums leading-none">
                      ${fmt(TYPICAL_LOW)} - ${fmt(TYPICAL_HIGH)}
                      <span className="text-sm text-ink-soft font-semibold">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: OpsROI - the hero */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-navy-deep via-navy-deep to-[#0f3540] p-6 sm:p-8 text-white shadow-[0_40px_100px_-30px_rgba(125,194,67,0.45)] ring-2 ring-green/50">
              {/* Ambient glow - amplified & animated */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green/35 blur-3xl animate-opsroi-glow"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-green/20 blur-3xl animate-opsroi-glow-slow"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-1/3 right-1/3 h-40 w-40 rounded-full bg-gold/8 blur-3xl"
              />
              {/* Top accent bar */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-green to-transparent"
              />

              {/* Header */}
              <div className="relative mb-5 flex items-start gap-4 pb-5 border-b border-white/15">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/25 border border-green/50 text-green shadow-[0_0_20px_rgba(125,194,67,0.4)] animate-opsroi-float">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-xl animate-opsroi-ring"
                  />
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-base sm:text-lg font-bold text-white font-display uppercase">
                      OpsROI <span className="text-green">Complete</span>
                    </div>
                    <span className="relative inline-flex overflow-hidden items-center gap-1 rounded-full bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-deep font-display shadow-[0_0_18px_rgba(125,194,67,0.6)]">
                      <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                      Best Value
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent animate-opsroi-shimmer"
                      />
                    </span>
                  </div>
                  <div className="text-[13px] text-white/75 mt-0.5">
                    The all-in-one operations system
                  </div>
                </div>
              </div>

              {/* Everything Included banner */}
              <div className="relative mb-5 flex items-center justify-between gap-3 rounded-xl border border-green/35 bg-green/8 px-4 py-3">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-green font-display">
                  Everything included, {OPSROI_TOOL_COUNT} tools in one
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/60 font-display whitespace-nowrap">
                  <span className="line-through">${fmt(TYPICAL_HIGH)}+</span>
                  <span className="ml-1 text-white/50 font-semibold">/mo value</span>
                </div>
              </div>

              {/* Category sections */}
              <div className="relative space-y-4 mb-5 flex-1">
                {OPSROI_CATEGORIES.map((category) => (
                  <div
                    key={category.name}
                    className="rounded-xl border border-white/10 bg-white/2 p-4"
                  >
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-green font-display">
                      {category.name}
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green/20">
                            <Check className="h-2.5 w-2.5 text-green" strokeWidth={3.5} />
                          </span>
                          <span className="text-[13px] text-white/85 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Price comparison row */}
              <div className="relative grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/3 p-4 sm:p-5 mb-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-green font-display">
                    Your Price Starts At
                  </div>
                  <div className="mt-1.5 text-2xl sm:text-3xl font-bold text-white font-display tabular-nums leading-none">
                    ${fmt(OPSROI_PRICE)}
                    <span className="text-sm text-white/60 font-semibold">/mo</span>
                  </div>
                </div>
                <div className="text-right border-l border-white/10 pl-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 font-display">
                    Your Current Stack
                  </div>
                  <div className="mt-1.5 text-lg sm:text-xl font-bold text-white/50 font-display tabular-nums leading-none line-through decoration-2 decoration-white/40">
                    ${fmt(TYPICAL_LOW / 1000)}K-${fmt(TYPICAL_HIGH / 1000)}K
                    <span className="text-sm font-semibold">/mo</span>
                  </div>
                </div>
              </div>

              {/* Savings callout */}
              <div className="relative rounded-xl border border-green/40 bg-green/12 p-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green/20 text-green">
                    <TrendingUp className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white font-display uppercase leading-tight">
                      You save{" "}
                      <span className="text-green">{percentLow}%-{percentHigh}%</span>{" "}
                      every month.
                    </div>
                    <div className="mt-0.5 text-[12px] text-white/70 leading-snug">
                      That&apos;s{" "}
                      <span className="text-green font-bold">
                        ${fmt(yearlyLow)}-${fmt(yearlyHigh)}
                      </span>{" "}
                      a year back in the business.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/book-a-demo"
                className="group relative flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-deep hover:bg-white transition-all font-display shadow-[0_0_30px_rgba(125,194,67,0.5)] hover:shadow-[0_0_40px_rgba(125,194,67,0.7)] hover:-translate-y-0.5"
              >
                Show Me My Savings
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
