import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Search,
  Blocks,
  CircleCheck,
  Clock,
  CreditCard,
  ShieldCheck,
  Wallet,
  Layers,
  CalendarClock,
  MessageSquare,
  Puzzle,
  Ruler,
  Handshake,
} from "lucide-react";
import { PageHero } from "@/src/components/shared/PageHero";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import BookDemoForm from "@/src/components/pages/book-a-demo/BookDemoForm";
import BookDemoFaq from "@/src/components/pages/book-a-demo/BookDemoFaq";

export const metadata: Metadata = {
  title: "Book a Demo | OpsROI",
  description:
    "Every business runs differently, so pricing does too. Tell us about your setup and we'll come back with a walkthrough and a plan that actually fits.",
};

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: "We learn how you work",
    body: "A few questions about how you sell, deliver, and get paid today. No slides, no hard pitch.",
  },
  {
    icon: Blocks,
    title: "We show what we'd build",
    body: "You'll see exactly what OpsROI would set up around your workflow, CRM, automations, and reporting.",
  },
  {
    icon: CircleCheck,
    title: "You get a plan built for you",
    body: "Since every business is different, we tailor scope and pricing to what you actually need. No cookie-cutter tiers.",
  },
];

const TRUST: { icon: LucideIcon; label: string }[] = [
  { icon: Clock, label: "15-20 min call" },
  { icon: CreditCard, label: "No credit card" },
  { icon: ShieldCheck, label: "Works for any business" },
];

const PRICING_REASONS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Puzzle,
    title: "Every stack is different",
    body: "A solo agency and a 30-crew trades business have almost nothing in common under the hood. A fixed tier would overcharge one and under-serve the other.",
  },
  {
    icon: Ruler,
    title: "You pay for what you actually use",
    body: "We scope to what needs replacing today, not a bundle of tools you'll never touch. If you don't need HR and inventory yet, you're not paying for them.",
  },
  {
    icon: Handshake,
    title: "The price should hold up on the call",
    body: "A number posted on a page usually needs a dozen caveats. We'd rather walk through your setup once, then send a quote you can actually plan against.",
  },
];

const OUTCOMES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wallet,
    title: "A rough investment range",
    body: "By the end of the call you'll know what OpsROI would cost for a setup like yours. No back-and-forth over email.",
  },
  {
    icon: Layers,
    title: "A clear picture of what gets replaced",
    body: "We'll map your current tool stack to what OpsROI covers so you know exactly what you'd cancel and what stays.",
  },
  {
    icon: CalendarClock,
    title: "A realistic go-live timeline",
    body: "Most setups run 4 to 5 days. We'll tell you which parts of your workflow can move first, and what waits until later.",
  },
  {
    icon: MessageSquare,
    title: "A straight yes or no",
    body: "If OpsROI isn't the right fit for your business, we'll say so on the call. No follow-up drip, no chasing.",
  },
];

export default function BookADemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a Demo"
        title={
          <>
            Let&apos;s Talk Before We
            <br className="hidden sm:block" />
            Talk <span className="text-green">Pricing.</span>
          </>
        }
        description="Every business runs a little differently, so a one-size-fits-all price tag rarely fits. Share a few details and we'll come back with a walkthrough and a plan tailored to how your business actually works."
      />

      {/* ─── Form + What to expect ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                What To Expect
              </div>
              <h2 className="mb-8 text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-tight font-display text-navy">
                A Working Session,
                <br />
                Not A Sales Pitch.
              </h2>

              <ol className="mb-8 flex flex-col gap-6">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className="flex gap-4">
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green-deep">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                      </span>
                      <div>
                        <h3 className="mb-1 text-base font-bold text-navy">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-soft">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6">
                {TRUST.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.label}
                      className="flex items-center gap-2 text-[13px] font-semibold text-ink-soft"
                    >
                      <Icon className="h-4 w-4 text-green-deep" strokeWidth={2} />
                      {t.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <BookDemoForm />
          </div>
        </div>
      </section>

      {/* ─── Why no price list ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">Why No Price List</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                Fixed Pricing Doesn&apos;t Fit A Business Like Yours.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Three reasons we quote after a short conversation instead of
                posting a table you&apos;d have to squint at.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3" data-stagger>
            {PRICING_REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
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
                  <h3 className="relative z-10 mb-3 text-lg font-bold text-navy leading-snug">
                    {r.title}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-ink-soft">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── What you'll walk away with ─── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal>
              <SectionLabel className="justify-center mb-4">On The Call</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                What You&apos;ll Walk Away With.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base text-ink-soft leading-relaxed">
                Four concrete things you&apos;ll have by the end of the 15 to
                20 minutes, whether you move forward or not.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group card-smooth relative flex items-start gap-4 overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-7 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-22px_rgba(125,194,67,0.28)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="relative">
                    <h3 className="mb-1.5 text-base font-bold text-navy leading-snug">
                      {o.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {o.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Booking FAQ ─── */}
      <BookDemoFaq />
    </main>
  );
}
