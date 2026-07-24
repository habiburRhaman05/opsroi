"use client";

import { useState, useCallback, useMemo } from "react";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { ICON_MAP, SearchIcon, PenIcon, DocusignIcon, MailchimpIcon, WebsiteIcon, GoogleAdsIcon, MetaIcon } from "@/src/lib/icons";
import { TIERS, type CalculatorItem, type TierKey } from "@/src/lib/calculator";

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
  { n: "Phone & Inbox", b: "OpenPhone ×17", p: 391, iconKey: "conversations" },
  { n: "Reputation", b: "Podium", p: 399, iconKey: "marketing" },
  { n: "AI Receptionist", b: "AI answering", p: 199, iconKey: "callout" },
  { n: "Call Tracking", b: "CallRail", p: 50, iconKey: "logs" },
  { n: "HR & Payroll", b: "Gusto", p: 151, iconKey: "hr" },
  { n: "Training", b: "Trainual", p: 270, iconKey: "training" },
  { n: "Inventory", b: "Sortly", p: 149, iconKey: "inventory" },
  { n: "E-Sign & Docs", b: "DocuSign", p: 75, iconKey: "docusign" },
  { n: "Email Marketing", b: "Mailchimp", p: 68, iconKey: "email" },
  { n: "Website", b: "WebSite", p: 39, iconKey: "webSite" },
  { n: "Booking", b: "Acuity", p: 27, iconKey: "calendar" },
];

const SERVICES: CalculatorItem[] = [
  { n: "SEO Management", b: "Local retainer", p: 1500, iconKey: "search" },
  { n: "Blog Content", b: "4 posts / mo", p: 800, iconKey: "pen" },
  { n: "Google Ads Mgmt", b: "Mgmt fee only", p: 750, iconKey: "googleads" },
  { n: "Meta Ads Mgmt", b: "Mgmt fee only", p: 500, iconKey: "meta" },
];

// A Pro/Elite-scale agency runs the same tool categories at higher volume, so
// their equivalent "stitched-together" spend scales up too — not just the
// flat total of what's checked here. This is what keeps savings growing
// Growth -> Pro -> Elite instead of shrinking as tier price goes up.
const TIER_ORDER: TierKey[] = ["growth", "pro", "elite"];
const SPEND_MULTIPLIER: Record<TierKey, number> = { growth: 1, pro: 1.7, elite: 2.4 };

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
    <div
      onClick={onToggle}
      className={`relative bg-white border-2 rounded-xl px-3 pt-4 pb-3 cursor-pointer text-center transition-colors select-none hover:border-green/60 ${
        selected ? "border-green bg-[rgba(125,194,67,0.08)]" : "border-line"
      }`}
    >
      <div
        className={`absolute top-2 right-2 w-4 h-4 rounded-full border flex items-center justify-center text-[9px] text-white transition-colors ${
          selected
            ? "bg-green border-green"
            : "border-line"
        }`}
      >
        {selected ? "✓" : ""}
      </div>
      <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
        {getItemIcon(item)}
      </div>
      <span className="block text-[11px] font-semibold text-navy leading-tight">
        {item.n}
      </span>
      <span className="block text-[10px] text-ink-soft mt-1">
        ${item.p}/mo
      </span>
    </div>
  );
}

export function Calculator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [curTier, setCurTier] = useState<TierKey>("growth");

  const toggle = useCallback((key: string) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const { total, lines } = useMemo(() => {
    let t = 0;
    const l: CalculatorItem[] = [];
    SOFTWARE.forEach((a, i) => {
      if (selected["sw" + i]) {
        t += a.p;
        l.push(a);
      }
    });
    SERVICES.forEach((a, i) => {
      if (selected["sv" + i]) {
        t += a.p;
        l.push(a);
      }
    });
    return { total: t, lines: l };
  }, [selected]);

  const tier = TIERS[curTier];

  // Savings per tier, scaled by SPEND_MULTIPLIER so a bigger tier is compared
  // against a bigger equivalent spend. Clamped to a running max so the
  // displayed order can never invert (Growth <= Pro <= Elite), even when the
  // multiplier alone wouldn't be enough to keep it that way for a small total.
  const tierDiffs = useMemo(() => {
    const diffs = {} as Record<TierKey, number>;
    let runningMax = -Infinity;
    TIER_ORDER.forEach((key) => {
      const raw = Math.round(total * SPEND_MULTIPLIER[key] - TIERS[key].price);
      runningMax = Math.max(raw, runningMax);
      diffs[key] = runningMax;
    });
    return diffs;
  }, [total]);

  const diff = tierDiffs[curTier];

  const savingsBoxClass =
    total === 0
      ? "bg-mist border-line"
      : diff > 0
        ? "bg-[rgba(125,194,67,0.08)] border-green/30"
        : "bg-mist border-line";

  const savingsLabel =
    total === 0
      ? "Add their tools"
      : diff > 0
        ? "They save"
        : "Comparable spend";

  const savingsValue =
    total === 0 ? "$0" : diff > 0 ? fmt(diff) : fmt(Math.abs(diff));

  const savingsSubtext =
    total === 0
      ? "to see the savings"
      : diff > 0
        ? `${fmt(diff * 12)} / year · plus one system, not ten`
        : "more / mo, but everything consolidated & managed";

  const savingsLabelClass =
    total === 0 || diff <= 0
      ? "text-[10px] tracking-wide uppercase text-ink-soft font-bold"
      : "text-[10px] tracking-wide uppercase text-green-deep font-bold";

  return (
    <section
      id="calculator"
      className="pt-20 pb-12 sm:pb-16 bg-mist "
    >
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mx-auto mb-12 max-w-3xl">
          <ScrollReveal>
            <SectionLabel className="justify-center">Your Easiest Sell</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-xl sm:text-4xl md:text-5xl">
              Tap what they pay.{" "}
              <span className="text-green">See what <br/> they save.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-ink-soft text-sm sm:text-base mx-auto max-w-xl">
              A live calculator running on real OpsROI pricing. Pick the tools
              and services a typical crew uses — the number closes itself.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-green-deep">
                    Software they&apos;re paying for
                  </span>
                  <span className="flex-1 h-px bg-line" />
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
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-green-deep">
                    Agencies &amp; services they hire
                  </span>
                  <span className="flex-1 h-px bg-line" />
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

          <ScrollReveal>
            <div className="bg-white border border-line rounded-3xl p-6 md:p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] lg:sticky lg:top-28">
              <h3>Their current spend</h3>
              <p className="text-xs mt-1 mb-5">
                Everything stitched together
              </p>
              <div className="divide-y divide-line">
                {lines.length === 0 ? (
                  <div className="text-xs text-ink-soft text-center py-4">
                    Tap tools and services to add them up.
                  </div>
                ) : (
                  lines.map((a) => (
                    <div
                      key={a.n}
                      className="flex justify-between items-baseline py-3"
                    >
                      <span className="text-xs text-ink-soft">
                        {a.n}
                      </span>
                      <span className="text-sm font-semibold text-navy">
                        ${a.p}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between items-baseline pt-4 pb-1">
                <span className="text-sm font-semibold text-navy">
                  Total / month
                </span>
                <span className="text-2xl font-bold text-navy tracking-tighter">
                  {fmt(total)}
                </span>
              </div>
              <div className="text-right text-xs text-ink-soft mb-6">
                {fmt(total * 12)} / year
              </div>

              <div className="h-px bg-line mb-6" />

              <h3 className="mb-4">Compare to OpsROI&apos;s live pricing</h3>
              <div className="flex gap-2 text-xs font-bold uppercase mb-5">
                {(["growth", "pro", "elite"] as TierKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCurTier(t)}
                    className={`flex-1 py-2 rounded-full border transition-all ${
                      curTier === t
                        ? "bg-green border-green text-white"
                        : "bg-white border-line text-ink-soft hover:border-green"
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="text-center mb-6">
                <b className="block text-3xl font-bold text-green tracking-tighter">
                  {fmt(tier.price)}
                </b>
                <span className="text-xs text-ink-soft">
                  {tier.name}
                </span>
              </div>

              <div
                className={`rounded-2xl p-5 text-center border ${savingsBoxClass}`}
              >
                <div className={savingsLabelClass}>{savingsLabel}</div>
                <div className="text-3xl font-bold text-navy my-1">
                  {savingsValue}
                </div>
                <div className="text-xs text-ink-soft">
                  {savingsSubtext}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}