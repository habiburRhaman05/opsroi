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

/* ────────────────────────────────────────────────────────────
   Data — edit copy here; the layout adapts.
   Sourced from opsroi-full-content-package.md · "Why OpsROI".
   ──────────────────────────────────────────────────────────── */

const TOOL_TAX: { name: string; icon: LucideIcon; cost: string }[] = [
  { name: "CRM for leads", icon: Users, cost: "$99/mo" },
  { name: "Scheduling & dispatch", icon: CalendarDays, cost: "$69/mo" },
  { name: "Estimates", icon: Calculator, cost: "$199/mo" },
  { name: "Invoicing", icon: ReceiptText, cost: "incl." },
  { name: "Payroll & HR", icon: Wallet, cost: "$149/mo" },
  { name: "E-signatures", icon: FileSignature, cost: "$49/mo" },
  { name: "Reporting", icon: BarChart3, cost: "$199/mo" },
  { name: "Inventory", icon: Package, cost: "$99/mo" },
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
    body: "Agency, coaching, tree service, roofing, HVAC — pipelines, fields, and workflows are configured around how you actually sell and deliver, not someone else's template.",
    icon: Building2,
  },
  {
    title: "AI does the paperwork, not just the chatting",
    body: "Not a chatbot in your inbox. AI generates estimates from job details, turns completed work into invoices, and answers & qualifies every inbound call — 24/7, without you touching it.",
    icon: Sparkles,
  },
  {
    title: "Support doesn't disappear after setup",
    body: "No login-and-a-knowledge-base handoff. OpsROI stays on as a standing ops partner — when the business changes, the platform gets adjusted with you.",
    icon: ShieldCheck,
  },
];

type Cell = boolean | string;
const AGENCY_ROWS: { feature: string; competitor: Cell; opsroi: Cell }[] = [
  { feature: "CRM & pipelines", competitor: true, opsroi: true },
  { feature: "Funnels & websites", competitor: true, opsroi: true },
  { feature: "White-label client dashboards", competitor: "Paid tier", opsroi: "Included" },
  { feature: "HR & Payroll", competitor: false, opsroi: true },
  { feature: "Inventory management", competitor: false, opsroi: true },
  { feature: "AI estimates & invoices", competitor: false, opsroi: true },
  { feature: "Document signing", competitor: "Limited", opsroi: "Full e-sign" },
  { feature: "Done-for-you setup & support", competitor: false, opsroi: "Included" },
  { feature: "Also serves field / trade teams", competitor: false, opsroi: true },
];
const TRADE_ROWS: { feature: string; competitor: Cell; opsroi: Cell }[] = [
  { feature: "Job scheduling & dispatch", competitor: true, opsroi: true },
  { feature: "Estimates & invoicing", competitor: "Manual entry", opsroi: "AI-generated" },
  { feature: "Inventory tracking", competitor: "Add-on", opsroi: "Included" },
  { feature: "HR & payroll", competitor: false, opsroi: true },
  { feature: "Lead capture & marketing", competitor: false, opsroi: true },
  { feature: "Client-facing ROI reporting", competitor: false, opsroi: true },
  { feature: "Missed-call text-back & AI receptionist", competitor: false, opsroi: true },
  { feature: "Document signing", competitor: "Add-on", opsroi: "Included" },
  { feature: "Built by someone who's run your trade", competitor: "Rarely", opsroi: true },
];

const WHO_CHOOSES: { icon: LucideIcon; label: string; heading: string; body: string; accent: "green" | "gold" }[] = [
  {
    icon: Building2,
    label: "A marketing agency",
    heading: "Manage more accounts without adding headcount.",
    body: "Subaccounts, white-label dashboards, and automated reporting mean more client accounts per person — and clients stop questioning the invoice because they can see the result themselves.",
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

const PROOF: { value: string; label: string }[] = [
  { value: "4.5 days", label: "avg. time to a fully running system" },
  { value: "96%", label: "customer retention after switching" },
  { value: "3.3x", label: "more accounts, same headcount" },
  { value: "8-in-1", label: "tools replaced by one platform" },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is OpsROI just GoHighLevel with extra steps?",
    a: "No — it's built to also run the operational side of a business (HR, payroll, inventory, AI estimates/invoicing) that GoHighLevel and similar tools were never built to touch. GoHighLevel gets you leads; OpsROI runs the business behind them.",
  },
  {
    q: "We already use Jobber or ServiceTitan — is switching worth it?",
    a: "If scheduling and invoicing are the only things you need, maybe not. If you're also running a separate CRM for leads, a separate payroll tool, and a spreadsheet for inventory, OpsROI consolidates all of it — and adds AI-generated estimates and invoicing on top.",
  },
  {
    q: "Do I have to switch everything at once?",
    a: "No. Most businesses migrate in stages during the 4–5 day setup — we prioritize whatever's causing the most pain first.",
  },
];

/* ────────────────────────────────────────────────────────────
   Small helpers
   ──────────────────────────────────────────────────────────── */

function CompareCell({ value, positive }: { value: Cell; positive?: boolean }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-green">
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-ink-soft/15">
        <X className="h-3.5 w-3.5 text-ink-soft" strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span
      className={`inline-block text-xs font-semibold ${
        positive ? "text-green-deep" : "text-ink-soft"
      }`}
    >
      {value}
    </span>
  );
}

function CompareTable({
  competitor,
  rows,
}: {
  competitor: string;
  rows: { feature: string; competitor: Cell; opsroi: Cell }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-24px_rgba(29,78,95,0.25)]">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[1.8fr_1fr_1fr]">
        {/* Header */}
        <div className="bg-mist px-4 py-4 text-[13px] font-bold text-navy sm:px-6">
          Capability
        </div>
        <div className="bg-mist px-2 py-4 text-center text-[13px] font-bold text-ink-soft sm:px-4">
          {competitor}
        </div>
        <div className="bg-navy px-2 py-4 text-center text-[13px] font-bold text-white sm:px-4">
          OpsROI
        </div>

        {/* Rows */}
        {rows.map((r, i) => {
          const last = i === rows.length - 1;
          return (
            <Fragment key={r.feature}>
              <div
                className={`flex items-center px-4 py-3.5 text-[13px] leading-snug text-ink sm:px-6 ${
                  last ? "" : "border-b border-line"
                }`}
              >
                {r.feature}
              </div>
              <div
                className={`flex items-center justify-center px-2 py-3.5 text-center sm:px-4 ${
                  last ? "" : "border-b border-line"
                }`}
              >
                <CompareCell value={r.competitor} />
              </div>
              <div
                className={`flex items-center justify-center bg-green/[0.05] px-2 py-3.5 text-center sm:px-4 ${
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
  );
}

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function WhyOpsroiPage() {
  const [tab, setTab] = useState<"agencies" | "trades">("agencies");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <div className="hero-glow hero-glow--a" />
        <div className="hero-glow hero-glow--b" />
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="eyebrow fade-in-up">Why OpsROI</div>
          <h1 className="fade-in-up" style={{ animationDelay: "0.08s" }}>
            You shouldn&apos;t need five logins <br className="hidden sm:inline" />
            to run one business.
          </h1>
          <p className="lede fade-in-up" style={{ animationDelay: "0.16s" }}>
            Lead-gen software doesn&apos;t run your crew. Job software doesn&apos;t
            prove your ROI. Payroll software doesn&apos;t talk to either. OpsROI was
            built because that&apos;s insane — and because the person who built it
            was living it.
          </p>
          <div
            className="fade-in-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/contact"
              className="btn btn-primary w-full sm:w-auto"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/features"
              className="btn w-full border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/15 sm:w-auto"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The tool-stack tax ─── */}
      <section>
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 44px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              The Problem
            </div>
            <h2>The tool-stack tax.</h2>
            <p>
              Most agencies and trades run one business through five to eight tools
              that don&apos;t share data. Every handoff is a place a lead goes cold,
              a job gets under-billed, or a client stops trusting your numbers.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {TOOL_TAX.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-line bg-mist/50 px-3 py-5 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink-soft shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[13px] font-semibold text-navy">
                    {tool.name}
                  </span>
                  <span className="text-xs font-medium text-ink-soft">
                    {tool.cost}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-5 max-w-5xl text-center text-sm font-semibold text-ink-soft">
            $1,600+/month across 8 logins and 8 bills —{" "}
            <span className="text-navy">
              and that&apos;s before a single lost lead.
            </span>
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-soft">
              <Clock className="h-3.5 w-3.5" />
              A typical Tuesday, before OpsROI
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              A lead fills out a form (Tool 1). Someone remembers to add them to the
              CRM (Tool 2). A rep books a visit through a separate calendar (Tool 3)
              because it wasn&apos;t synced. The estimate gets built by hand in a
              spreadsheet (Tool 4), emailed as a PDF for the client to print, sign,
              and scan back (Tool 5, or no tool at all). The job&apos;s scheduled on
              a whiteboard (Tool 6). When it&apos;s done, someone writes the invoice
              by hand and hopes they remember which materials were used. At month
              end, someone builds a report by hand — a very long night in a
              spreadsheet.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Before / After ─── */}
      <section className="section-alt">
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 44px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Before / After
            </div>
            <h2>The same day, run on one system.</h2>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(29,78,95,0.4)]">
            <div className="grid grid-cols-[0.8fr_1.3fr_1.4fr] sm:grid-cols-[1fr_1.4fr_1.5fr]">
              {/* Header row */}
              <div className="border-b border-line bg-mist px-4 py-5 sm:px-6" />
              <div className="border-b border-line bg-mist px-4 py-5 text-[11px] font-bold uppercase tracking-widest text-ink-soft sm:px-6">
                Before OpsROI
              </div>
              <div className="relative border-b border-green/20 bg-gradient-to-br from-green to-green-deep px-4 py-5 sm:px-6">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  With OpsROI
                </div>
              </div>

              {BEFORE_AFTER.map((r, i) => {
                const last = i === BEFORE_AFTER.length - 1;
                const line = last ? "" : "border-b";
                return (
                  <Fragment key={r.stage}>
                    <div
                      className={`flex items-center bg-white px-4 py-4 text-[13px] font-bold text-navy sm:px-6 ${line} border-line`}
                    >
                      {r.stage}
                    </div>
                    <div
                      className={`flex items-start gap-2.5 bg-white px-4 py-4 text-[13px] leading-snug text-ink-soft sm:px-6 ${line} border-line`}
                    >
                      <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-soft/10">
                        <X className="h-3 w-3 text-ink-soft" strokeWidth={2.5} />
                      </span>
                      {r.before}
                    </div>
                    <div
                      className={`flex items-start gap-2.5 bg-green/[0.06] px-4 py-4 text-[13px] font-medium leading-snug text-navy sm:px-6 ${line} border-green/15`}
                    >
                      <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green shadow-[0_2px_8px_rgba(125,194,67,0.4)]">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      {r.after}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm font-semibold text-ink-soft">
            Same day. <span className="text-green-deep">One system.</span> Zero
            handoffs between logins.
          </p>
        </div>
      </section>

      {/* ─── What's actually different ─── */}
      <section>
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 44px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              What&apos;s Different
            </div>
            <h2>Four things no other platform does together.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger>
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/10"
                >
                  <span className="absolute right-6 top-6 text-4xl font-extrabold text-mist">
                    0{i + 1}
                  </span>
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/12 text-green-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mb-2 max-w-[24ch] text-lg font-bold text-navy">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Side-by-side comparison (tabbed) ─── */}
      <section className="section-alt">
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 32px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Compare
            </div>
            <h2>See exactly what you&apos;re not getting elsewhere.</h2>
          </div>

          <div className="mx-auto mb-8 flex max-w-xs gap-2 rounded-full border border-line bg-white p-1 shadow-sm">
            {(["agencies", "trades"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold capitalize transition-all ${
                  tab === t
                    ? "bg-navy text-white shadow-sm"
                    : "text-ink-soft hover:text-navy"
                }`}
              >
                For {t}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            {tab === "agencies" ? (
              <CompareTable competitor="GoHighLevel" rows={AGENCY_ROWS} />
            ) : (
              <CompareTable competitor="Jobber / ServiceTitan" rows={TRADE_ROWS} />
            )}
          </div>
        </div>
      </section>

      {/* ─── Who chooses OpsROI ─── */}
      <section>
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 44px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Who Chooses OpsROI
            </div>
            <h2>Two businesses, the same reason.</h2>
            <p>Different work, the same underlying fix: one system instead of six.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {WHO_CHOOSES.map((w) => {
              const Icon = w.icon;
              const badge =
                w.accent === "green"
                  ? "bg-green/12 text-green-deep"
                  : "bg-gold/15 text-gold";
              return (
                <div
                  key={w.label}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5 sm:p-8"
                >
                  <span
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${badge}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-soft">
                    {w.label}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy">{w.heading}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Proof ─── */}
      <section className="section-alt">
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Proof
            </div>
            <h2>The numbers, not just the pitch.</h2>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-[#163C49] to-[#1D4E5F] p-8 sm:grid-cols-4 sm:gap-6 sm:p-10">
            {PROOF.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-slate-300 sm:text-[13px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section>
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="section-head center" style={{ margin: "0 auto 40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2>Straight answers before you switch.</h2>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    open ? "border-green/40" : "border-line"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[15px] font-bold text-navy">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open ? "rotate-45 bg-green text-white" : "bg-mist text-navy"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
    </main>
  );
}
