"use client";

import { useState, useCallback, useMemo } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ICON_MAP, SearchIcon, PenIcon, DocusignIcon, MailchimpIcon, WixIcon, GoogleAdsIcon, MetaIcon } from "@/lib/icons";
import { TIERS, type CalculatorItem, type TierKey } from "@/lib/calculator";

const BRAND_ICONS: Record<string, React.ComponentType> = {
  docusign: DocusignIcon,
  mailchimp: MailchimpIcon,
  wix: WixIcon,
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
  { n: "Email Marketing", b: "Mailchimp", p: 68, iconKey: "mailchimp" },
  { n: "Website", b: "Wix", p: 39, iconKey: "wix" },
  { n: "Booking", b: "Acuity", p: 27, iconKey: "calendar" },
];

const SERVICES: CalculatorItem[] = [
  { n: "SEO Management", b: "Local retainer", p: 1500, iconKey: "search" },
  { n: "Blog Content", b: "4 posts / mo", p: 800, iconKey: "pen" },
  { n: "Google Ads Mgmt", b: "Mgmt fee only", p: 750, iconKey: "googleads" },
  { n: "Meta Ads Mgmt", b: "Mgmt fee only", p: 500, iconKey: "meta" },
];

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
      className={`relative bg-white border-2 rounded-xl px-3 pt-4 pb-3 cursor-pointer text-center transition-colors select-none hover:border-secondary/60 ${
        selected ? "border-secondary bg-secondary-container" : "border-outline-variant"
      }`}
    >
      <div
        className={`absolute top-2 right-2 w-4 h-4 rounded-full border flex items-center justify-center text-[9px] text-white transition-colors ${
          selected
            ? "bg-secondary border-secondary"
            : "border-outline-variant"
        }`}
      >
        {selected ? "✓" : ""}
      </div>
      <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
        {getItemIcon(item)}
      </div>
      <span className="block text-[11px] font-semibold text-primary leading-tight">
        {item.n}
      </span>
      <span className="block text-[10px] text-on-surface-variant mt-1">
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
  const diff = total - tier.price;

  const savingsBoxClass =
    total === 0
      ? "bg-on-tertiary-container/10 border-on-tertiary-container/40"
      : diff > 0
        ? "bg-secondary-container border-secondary/30"
        : "bg-on-tertiary-container/10 border-on-tertiary-container/40";

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
      ? "text-[10px] tracking-wide uppercase text-on-tertiary-container font-bold"
      : "text-[10px] tracking-wide uppercase text-secondary font-bold";

  return (
    <section
      id="calculator"
      className="pt-0 pb-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-white border-y border-outline-variant/30"
    >
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <SectionLabel>
             <div className="text-label-caps font-label-caps font-[700] text-secondary uppercase mb-4">

            Your Easiest Sell
             </div>
          </SectionLabel>
        </ScrollReveal>
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 text-xs font-bold bg-surface-container-highest text-on-surface-variant px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Live preview, the exact tool you&apos;d hand your own prospects
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="font-headline-xl text-primary text-xl sm:text-4xl md:text-5xl max-w-3xl mb-8">
            You won&apos;t pitch software. You&apos;ll open this calculator,
            tap what an operator already pays, and let the number close for
            you.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bg-secondary-container border border-secondary/20 rounded-2xl p-5 md:p-6 max-w-2xl mb-16">
            <p className="text-sm text-primary leading-relaxed">
              <b className="text-secondary">Try it yourself below</b> - this
              runs on TreeROI&apos;s real tools and live pricing, the same
              calculator your own trade&apos;s version would run once
              it&apos;s built and tuned to your industry&apos;s stack. Tap the
              tools and services a typical 15-20 person crew uses today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-secondary">
                    Software they&apos;re paying for
                  </span>
                  <span className="flex-1 h-px bg-outline-variant" />
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
                  <span className="text-[11px] font-bold tracking-widest uppercase text-secondary">
                    Agencies &amp; services they hire
                  </span>
                  <span className="flex-1 h-px bg-outline-variant" />
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
            <div className="bg-white border border-outline-variant rounded-3xl p-6 md:p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] lg:sticky lg:top-28">
              <h3 className="text-lg font-bold text-primary">
                Their current spend
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 mb-5">
                Everything stitched together
              </p>
              <div className="divide-y divide-outline-variant/60">
                {lines.length === 0 ? (
                  <div className="text-xs text-on-surface-variant text-center py-4">
                    Tap tools and services to add them up.
                  </div>
                ) : (
                  lines.map((a) => (
                    <div
                      key={a.n}
                      className="flex justify-between items-baseline py-3"
                    >
                      <span className="text-xs text-on-surface-variant">
                        {a.n}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        ${a.p}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between items-baseline pt-4 pb-1">
                <span className="text-sm font-semibold text-primary">
                  Total / month
                </span>
                <span className="text-2xl font-bold text-primary tracking-tighter">
                  {fmt(total)}
                </span>
              </div>
              <div className="text-right text-xs text-on-surface-variant mb-6">
                {fmt(total * 12)} / year
              </div>

              <div className="h-px bg-outline-variant/60 mb-6" />

              <h3 className="text-lg font-bold text-primary mb-4">
                Compare to TreeROI&apos;s live pricing
              </h3>
              <div className="flex bg-surface-container p-1 rounded-full text-xs font-bold uppercase mb-5">
                {(["growth", "pro", "elite"] as TierKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCurTier(t)}
                    className={`flex-1 py-2 rounded-full transition-all ${
                      curTier === t
                        ? "bg-white shadow-sm text-primary"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="text-center mb-6">
                <b className="block text-3xl font-bold text-secondary tracking-tighter">
                  {fmt(tier.price)}
                </b>
                <span className="text-xs text-on-surface-variant">
                  {tier.name}
                </span>
              </div>

              <div
                className={`rounded-2xl p-5 text-center border ${savingsBoxClass}`}
              >
                <div className={savingsLabelClass}>{savingsLabel}</div>
                <div className="text-3xl font-bold text-primary my-1">
                  {savingsValue}
                </div>
                <div className="text-xs text-on-surface-variant">
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