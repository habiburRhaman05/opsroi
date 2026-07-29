"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Check, X, Sparkles } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";

type Cell = boolean | string;

type Competitor = {
  key: string;
  name: string;
  logo: string;
};

const COMPETITORS: Competitor[] = [
  { key: "gohighlevel", name: "GoHighLevel", logo: "/crm-icons/gohighlevel-com-logo.png" },
  { key: "hubspot", name: "HubSpot", logo: "/crm-icons/hubspot-com-logo.png" },
  { key: "salesforce", name: "Salesforce", logo: "/crm-icons/saleforce-com-logo.png" },
  { key: "activecampaign", name: "ActiveCampaign", logo: "/crm-icons/activecampaign-com-logo.png" },
];

type FeatureRow = {
  feature: string;
  gohighlevel: Cell;
  hubspot: Cell;
  salesforce: Cell;
  activecampaign: Cell;
  opsroi: Cell;
};

const ROWS: FeatureRow[] = [
  {
    feature: "CRM & Pipelines",
    gohighlevel: true,
    hubspot: true,
    salesforce: true,
    activecampaign: true,
    opsroi: true,
  },
  {
    feature: "Marketing & Lead Generation",
    gohighlevel: true,
    hubspot: true,
    salesforce: "Add On",
    activecampaign: true,
    opsroi: true,
  },
  {
    feature: "AI Receptionist, 24/7",
    gohighlevel: "Add On",
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: "Included",
  },
  {
    feature: "AI Estimates & Invoicing",
    gohighlevel: false,
    hubspot: "Quotes Only",
    salesforce: true,
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Job Scheduling & Dispatch",
    gohighlevel: false,
    hubspot: false,
    salesforce: "Field Tier",
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "HR & Payroll",
    gohighlevel: false,
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Inventory Management",
    gohighlevel: false,
    hubspot: false,
    salesforce: "Add On",
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Document Signing",
    gohighlevel: "Limited",
    hubspot: "Add On",
    salesforce: "Add On",
    activecampaign: false,
    opsroi: "Full E-Sign",
  },
  {
    feature: "Client ROI Dashboards",
    gohighlevel: "Paid Tier",
    hubspot: "Enterprise",
    salesforce: true,
    activecampaign: false,
    opsroi: "Included",
  },
  {
    feature: "Done For You Setup",
    gohighlevel: false,
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: "Included",
  },
];

function CompareCell({ value, positive }: { value: Cell; positive?: boolean }) {
  if (value === true) {
    return (
      <span
        className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-green ${
          positive
            ? "shadow-[0_4px_14px_rgba(125,194,67,0.55)] ring-2 ring-green/25"
            : "shadow-[0_2px_8px_rgba(125,194,67,0.35)]"
        }`}
      >
        <Check className="h-4 w-4 text-white" strokeWidth={3.2} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-line bg-mist">
        <X className="h-3.5 w-3.5 text-ink-soft/70" strokeWidth={2.5} />
      </span>
    );
  }
  return positive ? (
    <span className="inline-flex items-center rounded-full bg-green/15 border border-green/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-green-deep font-display whitespace-nowrap">
      {value}
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-mist border border-line px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-ink-soft font-display whitespace-nowrap">
      {value}
    </span>
  );
}

export function CompetitorCompare() {
  return (
    <section
      id="compare-competitors"
      className="py-14 sm:py-20 px-5 sm:px-8 bg-mist relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green/6 blur-3xl"
      />

      <div className="relative container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">Compare</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
              See Exactly What You&apos;re
              <br className="hidden sm:block" />
              Not Getting Elsewhere.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              A straight-up comparison across the CRMs and platforms most
              service businesses evaluate against OpsROI.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison table */}
        <ScrollReveal>
          <div className="relative mx-auto max-w-6xl">
            {/* Animated ambient green glow behind OpsROI column */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-r from-transparent via-transparent to-green/15 blur-3xl animate-opsroi-glow-slow"
            />

            {/* Table wrapper - horizontal scroll on mobile */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(29,78,95,0.35)]">
              <div className="overflow-x-auto">
                <div className="min-w-180 grid grid-cols-[1.4fr_repeat(4,1fr)_1.2fr]">
                  {/* Header row */}
                  <div className="bg-mist px-4 py-5 text-[11px] font-bold text-navy sm:px-5 font-display uppercase tracking-[0.14em]">
                    Capability
                  </div>
                  {COMPETITORS.map((c) => (
                    <div
                      key={c.key}
                      className="bg-mist px-2 py-5 text-center border-l border-line"
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-line shadow-[0_2px_8px_-3px_rgba(15,43,53,0.15)]">
                          <Image
                            src={c.logo}
                            alt={c.name}
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                          />
                        </span>
                        <span className="text-[11px] font-bold text-navy font-display uppercase tracking-tight leading-tight">
                          {c.name}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* OpsROI column header - animated */}
                  <div className="relative bg-linear-to-br from-navy to-navy-deep px-2 py-5 text-center overflow-hidden">
                    {/* Green top accent bar */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-green via-green-deep to-green"
                    />
                    {/* Smooth green shimmer that sweeps left→right and fades at edges */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 overflow-hidden"
                    >
                      <span className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-green/30 to-transparent animate-opsroi-column-sweep" />
                    </span>
                    <div className="relative flex flex-col items-center gap-1.5">
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 border border-green/40 shadow-[0_0_18px_rgba(125,194,67,0.4)] animate-opsroi-float">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-lg animate-opsroi-ring"
                        />
                        <Image
                          src="/logos/OpsROI/OpsROI-1.png"
                          alt="OpsROI"
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                      <span className="text-[11px] font-bold text-white font-display uppercase tracking-tight leading-tight">
                        OpsROI
                      </span>
                    </div>
                  </div>

                  {/* Feature rows */}
                  {ROWS.map((r, i) => {
                    const last = i === ROWS.length - 1;
                    return (
                      <Fragment key={r.feature}>
                        <div
                          className={`flex items-center px-4 py-3.5 text-[13px] leading-snug text-ink font-semibold sm:px-5 ${
                            last ? "" : "border-b border-line"
                          }`}
                        >
                          {r.feature}
                        </div>
                        <div
                          className={`flex items-center justify-center px-2 py-3.5 text-center border-l border-line ${
                            last ? "" : "border-b"
                          }`}
                        >
                          <CompareCell value={r.gohighlevel} />
                        </div>
                        <div
                          className={`flex items-center justify-center px-2 py-3.5 text-center border-l border-line ${
                            last ? "" : "border-b"
                          }`}
                        >
                          <CompareCell value={r.hubspot} />
                        </div>
                        <div
                          className={`flex items-center justify-center px-2 py-3.5 text-center border-l border-line ${
                            last ? "" : "border-b"
                          }`}
                        >
                          <CompareCell value={r.salesforce} />
                        </div>
                        <div
                          className={`flex items-center justify-center px-2 py-3.5 text-center border-l border-line ${
                            last ? "" : "border-b"
                          }`}
                        >
                          <CompareCell value={r.activecampaign} />
                        </div>
                        <div
                          className={`flex items-center justify-center bg-green/6 px-2 py-3.5 text-center ${
                            last ? "" : "border-b border-green/15"
                          }`}
                        >
                          <CompareCell value={r.opsroi} positive />
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scroll hint on mobile */}
            <p className="mt-3 text-center text-[11px] text-ink-soft/70 font-semibold sm:hidden">
              Scroll horizontally to see all columns
            </p>
          </div>
        </ScrollReveal>

        {/* Footer note */}
        <ScrollReveal>
          <p className="mt-6 text-center text-[13px] text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Based on publicly available product tiers as of 2026. Feature
            equivalence depends on plan level; OpsROI includes all of the above
            in every tier.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
