"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  CalendarDays,
  Calculator,
  ReceiptText,
  Wallet,
  FileSignature,
  BarChart3,
  Package,
  Clock,
  ArrowRight,
  Check,
  X,
  Boxes,
  Sparkles,
  ShieldCheck,
  Building2,
  Wrench,
} from "lucide-react";

import { AssetModel } from "@/src/components/pages/who-is-it-for/AssetModel";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { CompetitorCompare } from "@/src/components/pages/home-page/CompetitorCompare";
import { PageHero } from "@/src/components/shared/PageHero";
import { CountUp } from "@/src/components/shared/CountUp";

/* ────────────────────────────────────────────────────────────
   Data, edit copy here; the layout adapts.
   Sourced from opsroi-full-content-package.md · "Why OpsROI".
   ──────────────────────────────────────────────────────────── */

const TOOL_TAX: { name: string; icon: LucideIcon; cost: string }[] = [
   { name: "HR & Payroll", icon: Wallet, cost: "$149/mo" },
  
   { name: "Invoicing", icon: ReceiptText, cost: "incl." }, { name: "CRM for leads", icon: Users, cost: "$99/mo" },
  { name: "Reporting", icon: BarChart3, cost: "$199/mo" },
  { name: "Inventory", icon: Package, cost: "$99/mo" },
   { name: "Scheduling & dispatch", icon: CalendarDays, cost: "$69/mo" },
  { name: "Estimates", icon: Calculator, cost: "$199/mo" },
 
 
  { name: "E-signatures", icon: FileSignature, cost: "$49/mo" },
  
];

const BEFORE_AFTER: { stage: string; before: string; after: string }[] = [
  { stage: "Lead comes in", before: "Lands in a form tool, someone manually adds it to the CRM", after: "Lands directly in the CRM, auto-tagged and routed" },
  { stage: "Follow-up", before: "Depends on someone remembering", after: "Automated sequence starts immediately" },
  { stage: "Estimate", before: "Built by hand in a spreadsheet, emailed as a PDF", after: "AI-drafted from job details, sent same-day" },
  { stage: "Signature", before: "Printed, signed, scanned, emailed back", after: "Signed on any device in seconds, auto-filed" },
  { stage: "Scheduling", before: "A separate calendar or whiteboard", after: "Synced directly to the job record" },
  { stage: "Invoicing", before: "Written by hand after the job", after: "Auto-generated the moment the job's marked done" },
  { stage: "Reporting", before: "A late night building a spreadsheet", after: "Live dashboard, updated automatically" },
];

const DIFFERENTIATORS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "One system, not a CRM with add-ons",
    body: "Lead → nurtured → AI estimate → signed → scheduled → worked → AI invoice → reported. One record, start to finish. No exports, no re-entry, no “let me check the other system.”",
    icon: Boxes,
  },
  {
    title: "It doesn't assume what you run",
    body: "Agency, coaching, tree service, roofing, HVAC - pipelines, fields, and workflows are configured around how you actually sell and deliver, not someone else's template.",
    icon: Building2,
  },
  {
    title: "AI does the paperwork, not just the chatting",
    body: "Not a chatbot in your inbox. AI generates estimates from job details, turns completed work into invoices, and answers & qualifies every inbound call - 24/7, without you touching it.",
    icon: Sparkles,
  },
  {
    title: "Support doesn't disappear after setup",
    body: "No login-and-a-knowledge-base handoff. OpsROI stays on as a standing ops partner - when the business changes, the platform gets adjusted with you.",
    icon: ShieldCheck,
  },
];

const WHO_CHOOSES: { icon: LucideIcon; label: string; heading: string; body: string; accent: "green" | "gold" }[] = [
  {
    icon: Building2,
    label: "A marketing agency",
    heading: "Manage more accounts without adding headcount.",
    body: "Subaccounts, white-label dashboards, and automated reporting mean more client accounts per person - and clients stop questioning the invoice because they can see the result themselves.",
    accent: "green",
  },
    {
    icon: Wrench,
    label: "A trade business",
    heading: "Same-day estimates, invoices that write themselves.",
    body: "The estimate goes out the same day instead of the same week, the invoice writes itself the moment a job's done, and payroll, scheduling, and inventory finally live with the client record.",
    accent: "gold",
  },
];

const PROOF: { value: React.ReactNode; label: string }[] = [
  {
    value: (
      <>
        <CountUp end={4.5} decimals={1} duration={1600} />
        <span className="text-lg font-semibold text-white/60 ml-1">days</span>
      </>
    ),
    label: "avg. time to a fully running system",
  },
  {
    value: <CountUp end={96} suffix="%" duration={1800} />,
    label: "customer retention after switching",
  },
  {
    value: <CountUp end={3.3} decimals={1} suffix="x" duration={1600} />,
    label: "more accounts, same headcount",
  },
  {
    value: (
      <>
        <CountUp end={8} duration={1400} />
        <span>-in-1</span>
      </>
    ),
    label: "tools replaced by one platform",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is OpsROI just GoHighLevel with extra steps?",
    a: "No - it's built to also run the operational side of a business (HR, payroll, inventory, AI estimates/invoicing) that GoHighLevel and similar tools were never built to touch. GoHighLevel gets you leads; OpsROI runs the business behind them.",
  },
  {
    q: "We already use Jobber or ServiceTitan - is switching worth it?",
    a: "If scheduling and invoicing are the only things you need, maybe not. If you're also running a separate CRM for leads, a separate payroll tool, and a spreadsheet for inventory, OpsROI consolidates all of it - and adds AI-generated estimates and invoicing on top.",
  },
  {
    q: "Do I have to switch everything at once?",
    a: "No. Most businesses migrate in stages during the 4-5 day setup - we prioritize whatever's causing the most pain first.",
  },
];

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function WhyOpsroiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* ─── Hero ─── */}
      <PageHero
        eyebrow="Why OpsROI"
        title={
          <>
            You Shouldn&apos;t Need Five Logins
            <br className="hidden sm:block" />
            To Run <span className="text-green">One Business.</span>
          </>
        }
        description="Lead gen software doesn't run your crew. Job software doesn't prove your ROI. Payroll software doesn't talk to either. OpsROI was built because that's insane, and because the person who built it was living it."
        primaryCta={{ label: "See The Fit", href: "/book-a-demo" }}
        secondaryCta={{ label: "Explore The Platform", href: "/features" }}
      />

   

      {/* ─── The tool-stack tax ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">The Problem</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                The Tool Stack Tax.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Most agencies and trades run one business through five to eight
                tools that don&apos;t share data. Every handoff is a place a lead
                goes cold, a job gets under-billed, or a client stops trusting
                your numbers.
              </p>
            </ScrollReveal>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {TOOL_TAX.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="group card-smooth relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-line bg-white px-4 py-6 text-center hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_24px_40px_-20px_rgba(125,194,67,0.3)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-green/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:shadow-[0_0_18px_rgba(125,194,67,0.35)] animate-icon-bump">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[13px] font-bold text-navy uppercase tracking-tight font-display leading-tight">
                    {tool.name}
                  </span>
                  <span className="text-xs font-semibold text-ink-soft tabular-nums">
                    {tool.cost}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-5 max-w-5xl text-center text-sm font-semibold text-ink-soft">
            $1,600+/month across 8 logins and 8 bills -{" "}
            <span className="text-navy">
              and that&apos;s before a single lost lead.
            </span>
          </p>

         
        </div>
      </section>

      {/* ─── Before / After ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">Before / After</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                The Same Day, Run On One System.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Every step of a typical workday, from lead to invoice, mapped
                against the old way of separate tools vs. one connected
                platform. See the difference side by side.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Ambient animated green glow behind the OpsROI column */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-r from-transparent via-transparent to-green/15 blur-3xl animate-opsroi-glow-slow"
            />

            <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(29,78,95,0.4)]">
              <div className="grid grid-cols-[0.8fr_1.3fr_1.4fr] sm:grid-cols-[1fr_1.4fr_1.5fr]">
                {/* Header row */}
                <div className="border-b border-line bg-mist px-4 py-5 text-[10px] font-bold uppercase tracking-widest text-ink-soft font-display sm:px-6">
                  Stage
                </div>
                <div className="border-b border-line bg-mist px-4 py-5 text-[11px] font-bold uppercase tracking-widest text-ink-soft sm:px-6 font-display">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink-soft/15">
                      <X className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    Before OpsROI
                  </div>
                </div>
                <div className="relative border-b border-green/20 bg-linear-to-br from-green to-green-deep px-4 py-5 sm:px-6 overflow-hidden">
                  {/* Green top accent bar */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-green-deep via-white/40 to-green-deep"
                  />
                  {/* Smooth green shimmer sweep across header */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                  >
                    <span className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-opsroi-column-sweep" />
                  </span>
                  <div className="relative flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white font-display">
                    <Sparkles className="h-3.5 w-3.5 animate-opsroi-float" />
                    With OpsROI
                  </div>
                </div>

                {BEFORE_AFTER.map((r, i) => {
                  const last = i === BEFORE_AFTER.length - 1;
                  const line = last ? "" : "border-b";
                  const stageNumber = String(i + 1).padStart(2, "0");
                  return (
                    <Fragment key={r.stage}>
                      <div
                        className={`flex items-center gap-3 bg-white px-4 py-4 text-[13px] font-bold text-navy sm:px-6 ${line} border-line font-display uppercase tracking-tight`}
                      >
                        <span className="inline-flex items-center justify-center rounded-md bg-mist text-ink-soft text-[10px] px-1.5 py-0.5 tabular-nums font-display tracking-wider border border-line">
                          {stageNumber}
                        </span>
                        <span className="min-w-0 truncate">{r.stage}</span>
                      </div>
                      <div
                        className={`flex items-start gap-2.5 bg-white px-4 py-4 text-[13px] leading-snug text-ink-soft sm:px-6 ${line} border-line`}
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-mist">
                          <X className="h-3 w-3 text-ink-soft/70" strokeWidth={2.5} />
                        </span>
                        {r.before}
                      </div>
                      <div
                        className={`relative flex items-start gap-2.5 bg-green/6 px-4 py-4 text-[13px] font-semibold leading-snug text-navy sm:px-6 ${line} border-green/15`}
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green shadow-[0_2px_10px_rgba(125,194,67,0.5)] ring-2 ring-green/25">
                          <Check className="h-3 w-3 text-white" strokeWidth={3.2} />
                        </span>
                        {r.after}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm font-semibold text-ink-soft">
            Same day. <span className="text-green-deep">One system.</span> Zero
            handoffs between logins.
          </p>
        </div>
      </section>

      {/* ─── What's actually different ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">What&apos;s Different</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                Four Things No Other Platform Does Together.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Not a checklist of features you&apos;ve seen before. These are the
                structural advantages that make OpsROI fundamentally different
                from anything else.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger>
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  data-cursor-glow
                  className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_28px_50px_-22px_rgba(125,194,67,0.32)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 text-[7rem] font-bold leading-none text-navy/4.5 font-display select-none transition-colors duration-350 group-hover:text-green/20"
                  >
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:shadow-[0_0_20px_rgba(125,194,67,0.35)] animate-icon-bump">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="relative z-10 mb-3 max-w-[24ch] text-lg font-bold text-navy leading-snug">
                    {d.title}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-ink-soft">
                    {d.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Side-by-side comparison (multi-competitor) ─── */}
      <CompetitorCompare />

      {/* ─── Who chooses OpsROI ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">Who Chooses OpsROI</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                Two Businesses, The Same Reason.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Different work, the same underlying fix: one system instead of
                six.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {WHO_CHOOSES.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.label}
                  data-cursor-glow
                  className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_28px_50px_-22px_rgba(125,194,67,0.32)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:shadow-[0_0_20px_rgba(125,194,67,0.35)] animate-icon-bump">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                    {w.label}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy leading-snug">{w.heading}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Proof ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">Proof</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                The Numbers, Not Just The Pitch.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Real metrics from real operators who made the switch. No vanity
                stats, just the outcomes that matter to your bottom line.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-navy-deep p-8 sm:p-10 shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-green/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              {PROOF.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none font-display">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60 leading-snug font-display">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

    
    </main>
  );
}
