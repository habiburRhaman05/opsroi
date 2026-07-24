import type { Metadata } from "next";
import Script from "next/script";
import {
  CalendarClock,
  Search,
  Blocks,
  CircleCheck,
  Clock,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Call | OpsROI",
  description:
    "Pick a time for a free 20-minute walkthrough. We'll map exactly what OpsROI would set up for your business — no pressure, no long contracts.",
};

/* Your GoHighLevel booking calendar. Replace the src/id here to swap calendars. */
const GHL_CALENDAR_SRC =
  "https://api.opsroi.com/widget/booking/Ve8u2vcvCG9MvJThz3i0";
const GHL_CALENDAR_ID = "Ve8u2vcvCG9MvJThz3i0_1784886928236";
const GHL_EMBED_SCRIPT = "https://api.opsroi.com/js/form_embed.js";

const STEPS = [
  {
    icon: Search,
    title: "We learn how you work",
    body: "A few questions about how you sell, deliver, and get paid today. No slides, no hard pitch.",
  },
  {
    icon: Blocks,
    title: "We show what we'd build",
    body: "You'll see exactly what OpsROI would set up around your workflow — CRM, automations, and reporting.",
  },
  {
    icon: CircleCheck,
    title: "You decide — zero pressure",
    body: "No niche requirements, no long contracts. If it's not the right fit, we'll tell you.",
  },
];

const TRUST = [
  { icon: Clock, label: "20-minute call" },
  { icon: CreditCard, label: "No credit card" },
  { icon: ShieldCheck, label: "Works for any business" },
];

export default function BookPage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <div className="hero-glow hero-glow--a" />
        <div className="hero-glow hero-glow--b" />
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="eyebrow fade-in-up">Book a Call</div>
          <h1 className="fade-in-up" style={{ animationDelay: "0.08s" }}>
            Let&apos;s map your business 
            <span className="text-[#7DC243]"> {" "}free.</span>
          </h1>
          <p className="lede fade-in-up" style={{ animationDelay: "0.16s" }}>
            Pick a time that works. In about 20 minutes we&apos;ll walk through
            exactly what OpsROI would set up for you — no pressure, no long
            contracts.
          </p>
        </div>
      </section>

      {/* ─── Booking ─── */}
      <section>
        <div className="container px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            {/* Left — what to expect */}
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow">What to expect</div>
              <h2 className="mb-8 text-[1.7rem] font-bold leading-tight text-navy sm:text-[2rem]">
                A working session, not a sales pitch.
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

            {/* Right — GHL calendar embed */}
            <div className="p-2 sm:p-3">

                <iframe src="https://api.leadconnectorhq.com/widget/booking/6M0BCjhf4nYKg3TXYX0e" style={{width: "100%",border:"none",overflow: "hidden"}} scrolling="no" id="6M0BCjhf4nYKg3TXYX0e_1784908485306"></iframe>
                {/* <iframe
                  src={GHL_CALENDAR_SRC}
                  id={GHL_CALENDAR_ID}
                  title="Book a call with OpsROI"
                  scrolling="no"
                  style={{
                    width: "100%",
                    border: "none",
                    overflow: "hidden",
                    // Loading floor; form_embed.js resizes to the calendar's real height.
                    minHeight: 650,
                  }}
                /> */}
              </div>
          </div>
        </div>
      </section>

      {/* GHL auto-resize / embed script */}
      <Script src={"https://api.leadconnectorhq.com/js/form_embed.js"} strategy="afterInteractive" />
    </main>
  );
}
