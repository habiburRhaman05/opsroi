"use client";

import { useEffect, useRef } from "react";

import { ICON_MAP, SearchIcon, PenIcon, DocusignIcon, MailchimpIcon, WebsiteIcon, GoogleAdsIcon, MetaIcon } from ".././lib/icons";
import { TIERS, type CalculatorItem } from ".././lib/calculator";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import { ArrowDown } from "lucide-react";

const BRAND_ICONS: Record<string, React.ComponentType> = {
  docusign: DocusignIcon,
  mailchimp: MailchimpIcon,
  website: WebsiteIcon,
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
  { n: "Website", b: "WebSite", p: 39, iconKey: "website" },
  { n: "Booking", b: "Acuity", p: 27, iconKey: "calendar" },
];

const SERVICES: CalculatorItem[] = [
  { n: "SEO Management", b: "Local retainer", p: 1500, iconKey: "search" },
  { n: "Blog Content", b: "4 posts / mo", p: 800, iconKey: "pen" },
  { n: "Google Ads Mgmt", b: "Mgmt fee only", p: 750, iconKey: "googleads" },
  { n: "Meta Ads Mgmt", b: "Mgmt fee only", p: 500, iconKey: "meta" },
];

const ALL_ITEMS = [...SOFTWARE, ...SERVICES];

export function ComparisonTable() {
  const rowsRef = useRef<HTMLDivElement>(null);
  const totalElsewhereRef = useRef<HTMLDivElement>(null);
  const totalPlatformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowsRef.current) return;

    const total = ALL_ITEMS.reduce((s, a) => s + a.p, 0);
    if (totalElsewhereRef.current) {
      totalElsewhereRef.current.textContent =
        "$" + total.toLocaleString("en-US") + "/mo";
    }
    if (totalPlatformRef.current) {
      totalPlatformRef.current.textContent =
        "$" + TIERS.growth.price.toLocaleString("en-US") + "/mo";
    }
  }, []);

  return (
    <section
      id="replaces"
      className="py-16 md:py-24 bg-[#F3F6F5] lg:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal >
           <SectionLabel className="justify-center">

              Replace Your Stack
           </SectionLabel>

          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-headline-xl text-primary max-w-2xl font-bold mx-auto text-3xl sm:text-4xl md:text-5xl mb-8">
              Everything you&apos;re already paying for, built into one
              platform.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="bg-white border border-outline-variant/50 rounded-3xl overflow-hidden max-w-3xl mx-auto shadow-ambient-shadow">
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto] items-center gap-6 px-7 py-3 bg-surface-container-highest text-[11px] font-bold tracking-widest uppercase text-on-surface-variant">
              <span>Feature</span>
              <span className="text-right">Elsewhere</span>
              <span className="text-right">Included</span>
            </div>
            <div ref={rowsRef}>
              {ALL_ITEMS.map((item) => (
                <div
                  key={item.n}
                  className="flex items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-outline-variant/40 last:border-b-0"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <div className="w-4 h-4 ">{getItemIcon(item)}</div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-primary truncate">
                        {item.n}
                      </div>
                      <div className="text-xs text-on-surface-variant truncate">
                        Replaces {item.b}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                    <span className="text-xs sm:text-sm text-on-surface-variant whitespace-nowrap">
                      ${item.p}/mo
                    </span>
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 px-5 sm:px-7 py-7 bg-primary text-white text-center">
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                Buying it all separately
              </div>
              <div
                ref={totalElsewhereRef}
                className="text-2xl font-bold tracking-tighter"
              >
                $0/mo
              </div>
              <span className="material-symbols-outlined text-white/40 my-1">
                <ArrowDown/>
              </span>
              <div className="text-[10px] font-bold tracking-widest uppercase text-secondary-fixed">
                One platform
              </div>
              <div
                ref={totalPlatformRef}
                className="text-2xl font-bold tracking-tighter"
              >
                $0/mo
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}