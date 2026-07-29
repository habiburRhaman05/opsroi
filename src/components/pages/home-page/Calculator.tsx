"use client";

import { useState, useCallback, useMemo } from "react";
import { Check, TrendingUp, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import {
  ICON_MAP,
  SearchIcon,
  PenIcon,
  DocusignIcon,
  MailchimpIcon,
  WebsiteIcon,
  GoogleAdsIcon,
  MetaIcon,
} from "@/src/lib/icons";
import { TIERS, type CalculatorItem } from "@/src/lib/calculator";

const BRAND_ICONS: Record<string, React.ComponentType> = {
  docusign: DocusignIcon,
  mailchimp: MailchimpIcon,
  webSite: WebsiteIcon,
  googleads: GoogleAdsIcon,
  meta: MetaIcon,
  search: SearchIcon,
  pen: PenIcon,
};

function getItemIcon(item: CalculatorItem) {
  if (BRAND_ICONS[item.iconKey]) {
    const Icon = BRAND_ICONS[item.iconKey];
    return <Icon />;
  }
  const Icon = ICON_MAP[item.iconKey];
  return Icon ? <Icon /> : null;
}

const SOFTWARE: CalculatorItem[] = [
  { n: "CRM & Pipeline", b: "Jobber Plus", p: 599, iconKey: "opportunity" },
  { n: "Phone & Inbox", b: "OpenPhone x17", p: 391, iconKey: "conversations" },
  { n: "Reputation", b: "Podium", p: 399, iconKey: "marketing" },
  { n: "AI Receptionist", b: "AI answering", p: 249, iconKey: "callout" },
  { n: "Call Tracking", b: "CallRail", p: 89, iconKey: "logs" },
  { n: "HR & Payroll", b: "Gusto", p: 199, iconKey: "hr" },
  { n: "Training", b: "Trainual", p: 299, iconKey: "training" },
  { n: "Inventory", b: "Sortly", p: 179, iconKey: "inventory" },
  { n: "E-Sign & Docs", b: "DocuSign", p: 129, iconKey: "docusign" },
  { n: "Email Marketing", b: "Mailchimp", p: 149, iconKey: "email" },
  { n: "Website", b: "WebSite", p: 199, iconKey: "webSite" },
  { n: "Booking", b: "Acuity", p: 89, iconKey: "calendar" },
];

const SERVICES: CalculatorItem[] = [
  { n: "SEO Management", b: "Local retainer", p: 1500, iconKey: "search" },
  { n: "Blog Content", b: "4 posts / mo", p: 800, iconKey: "pen" },
  { n: "Google Ads Management", b: "Management fee only", p: 750, iconKey: "googleads" },
  { n: "Meta Ads Management", b: "Management fee only", p: 500, iconKey: "meta" },
];

// Preselect a realistic mid-market baseline so the calc opens showing meaningful savings
// instead of a $0 vs $2,950 mismatch. Keys mirror the "sw{index}" / "sv{index}" pattern below.
const DEFAULT_SELECTED: Record<string, boolean> = {
  sw0: true, // CRM & Pipeline
  sw1: true, // Phone & Inbox
  sw2: true, // Reputation
  sw3: true, // AI Receptionist
  sw9: true, // Email Marketing
  sw10: true, // Website
  sv0: true, // SEO Management
  sv2: true, // Google Ads Management
};

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

function CalcItem({
  item,
  selected,
  onToggle,
}: {
  item: CalculatorItem;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 ease-out ${
        selected
          ? "bg-white ring-1 ring-green/50 shadow-[0_14px_36px_-18px_rgba(125,194,67,0.45)] -translate-y-0.5"
          : "bg-white ring-1 ring-line hover:ring-green/40 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-18px_rgba(15,43,53,0.18)]"
      }`}
    >
      {/* Corner check indicator */}
      <span
        className={`absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
          selected
            ? "bg-green ring-2 ring-green/25 scale-100"
            : "bg-white ring-1 ring-line scale-90 group-hover:ring-green/50"
        }`}
      >
        <Check
          className={`h-3 w-3 text-white transition-all duration-300 ${
            selected ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          strokeWidth={3}
        />
      </span>

      {/* Icon in a tile */}
      <span
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
          selected
            ? "bg-green/12 text-green-deep ring-1 ring-green/20"
            : "bg-mist text-navy group-hover:bg-green/12 group-hover:text-green-deep"
        }`}
      >
        <span className="[&_svg]:h-4 [&_svg]:w-4">{getItemIcon(item)}</span>
      </span>

      <div className="block text-[12px] font-bold text-navy leading-tight font-display uppercase tracking-tight">
        {item.n}
      </div>
      <div
        className={`mt-1 text-[11px] font-semibold tabular-nums transition-colors duration-300 ${
          selected ? "text-green-deep" : "text-ink-soft"
        }`}
      >
        ${item.p}/mo
      </div>
    </button>
  );
}

export function Calculator() {
  const [selected, setSelected] = useState<Record<string, boolean>>(DEFAULT_SELECTED);
  const [pulse, setPulse] = useState(0);

  const toggle = useCallback((key: string) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    setPulse((p) => p + 1);
  }, []);

  const { total, count } = useMemo(() => {
    let t = 0;
    let c = 0;
    SOFTWARE.forEach((a, i) => {
      if (selected["sw" + i]) {
        t += a.p;
        c += 1;
      }
    });
    SERVICES.forEach((a, i) => {
      if (selected["sv" + i]) {
        t += a.p;
        c += 1;
      }
    });
    return { total: t, count: c };
  }, [selected]);

  const growth = TIERS.growth;
  const diff = total - growth.price;
  const hasSelection = total > 0;
  const isSaving = diff > 0;

  return (
    <section id="calculator" className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">
              Your Easiest Sell
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
              Tap What They Pay.
              <br className="hidden sm:block" />
              See What They Save.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              A live calculator running on real OpsROI pricing. Pick the tools
              a typical crew uses; the number closes itself.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-10 items-stretch">
          {/* LEFT: Tool grid */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-green-deep font-display">
                    Software They&apos;re Paying For
                  </span>
                  <span className="flex-1 h-px bg-line" />
                  <span className="text-[10px] font-bold text-ink-soft/60 font-display tabular-nums">
                    {SOFTWARE.length} tools
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SOFTWARE.map((item, idx) => (
                    <CalcItem
                      key={item.n}
                      item={item}
                      selected={!!selected["sw" + idx]}
                      onToggle={() => toggle("sw" + idx)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-green-deep font-display">
                    Agencies &amp; Services They Hire
                  </span>
                  <span className="flex-1 h-px bg-line" />
                  <span className="text-[10px] font-bold text-ink-soft/60 font-display tabular-nums">
                    {SERVICES.length} services
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SERVICES.map((item, idx) => (
                    <CalcItem
                      key={item.n}
                      item={item}
                      selected={!!selected["sv" + idx]}
                      onToggle={() => toggle("sv" + idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Summary panel */}
          <ScrollReveal className="lg:h-full">
            <div className="lg:h-full flex flex-col rounded-2xl overflow-hidden bg-navy-deep text-white shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
              {/* Ambient glows */}
              <div className="relative flex flex-col flex-1">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-green/18 blur-3xl"
                />

                {/* Their spend */}
                <div className="relative p-6 sm:p-7 border-b border-white/8">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 font-display">
                    <TrendingUp className="h-3 w-3 text-green" />
                    Their Current Spend
                  </div>
                  <div
                    key={`total-${pulse}`}
                    className="mt-3 flex items-baseline gap-2 animate-[valuePop_0.4s_ease-out]"
                  >
                    <span className="text-4xl sm:text-5xl font-bold text-white font-display tabular-nums leading-none">
                      {fmt(total)}
                    </span>
                    <span className="text-sm text-white/60 font-semibold">/mo</span>
                  </div>
                  <div className="mt-1.5 text-[13px] text-white/60">
                    {hasSelection ? (
                      <>
                        {count} {count === 1 ? "tool" : "tools"} selected ·{" "}
                        <span className="text-white/80 font-semibold">
                          {fmt(total * 12)}/yr
                        </span>
                      </>
                    ) : (
                      "Tap tools to add them up"
                    )}
                  </div>
                </div>

                {/* Compare to OpsROI */}
                <div className="p-6 sm:p-7 border-b border-white/8">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                      OpsROI Growth Plan
                    </div>
                    <span className="rounded-full border border-green/30 bg-green/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-green font-display">
                      Starts Here
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-display tabular-nums leading-none">
                      {fmt(growth.price)}
                    </span>
                    <span className="text-sm text-white/60 font-semibold">/mo</span>
                  </div>
                  <div className="mt-1.5 text-[12px] text-white/60 leading-snug">
                    Marketing and lead gen, one platform. Pro and Elite scale with team size.
                  </div>
                </div>

                {/* Savings hero - anchored to bottom */}
                <div className="relative p-6 sm:p-7 mt-auto">
                  <div
                    className={`relative rounded-xl border-2 p-5 transition-all duration-500 ${
                      isSaving
                        ? "border-green/50 bg-green/12 shadow-[0_20px_60px_-30px_rgba(125,194,67,0.5)]"
                        : "border-white/10 bg-white/3"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] font-display">
                      {isSaving ? (
                        <>
                          <Sparkles className="h-3 w-3 text-green" />
                          <span className="text-green">They Save</span>
                        </>
                      ) : (
                        <span className="text-white/50">Add Their Tools</span>
                      )}
                    </div>
                    <div
                      key={`savings-${pulse}`}
                      className="mt-2 flex items-baseline gap-2 animate-[valuePop_0.4s_ease-out]"
                    >
                      <span
                        className={`text-4xl sm:text-5xl font-bold font-display tabular-nums leading-none transition-colors duration-500 ${
                          isSaving ? "text-white" : "text-white/70"
                        }`}
                      >
                        {hasSelection
                          ? isSaving
                            ? fmt(diff)
                            : fmt(Math.abs(diff))
                          : "$0"}
                      </span>
                      {hasSelection && (
                        <span className="text-sm text-white/60 font-semibold">
                          /mo
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-[12px] text-white/70 leading-snug">
                      {hasSelection
                        ? isSaving
                          ? `That's ${fmt(diff * 12)}/yr, plus one system instead of ten.`
                          : "More per month, but everything is consolidated & managed."
                        : "to see the savings."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Local keyframe for the number pop */}
      <style jsx>{`
        @keyframes valuePop {
          0% {
            transform: translateY(4px);
            opacity: 0.4;
          }
          60% {
            transform: translateY(-2px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
