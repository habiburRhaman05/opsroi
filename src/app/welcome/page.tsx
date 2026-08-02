import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Mail, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome | OpsROI",
  description:
    "We've got your request. A member of the OpsROI team will reach out within one business day.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    icon: Mail,
    title: "Check your inbox",
    body: "You'll get a confirmation email in the next few minutes with what we already know about your request.",
  },
  {
    icon: CalendarDays,
    title: "We'll send times",
    body: "Within one business day we'll follow up with a couple of time options for the walkthrough.",
  },
  {
    icon: Clock,
    title: "15 to 20 minute call",
    body: "Short, focused, no slides. You'll leave with a rough plan and pricing that fits your setup.",
  },
];

export default function WelcomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] py-24 sm:py-32 px-5 sm:px-8 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green/20 blur-3xl animate-opsroi-glow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-green/12 blur-3xl animate-opsroi-glow-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green/60 to-transparent"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green/15 ring-2 ring-green/40 shadow-[0_0_40px_rgba(125,194,67,0.4)]">
            <Check className="h-10 w-10 text-green" strokeWidth={2.5} />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green font-display">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Request Received
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-display uppercase">
            Welcome To OpsROI.
            <br className="hidden sm:block" />
            <span className="text-green">We&apos;ll Be In Touch.</span>
          </h1>

          <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Your request is in. A member of the OpsROI team will reach out
            within one business day to schedule a time that works for you.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              What Happens Next
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
              Three Quick Steps From Here.
            </h2>
            <p className="text-base text-ink-soft leading-relaxed">
              No auto-drip sequences, no chasing. Just a real person reaching
              out with times that work.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {NEXT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-7 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-22px_rgba(125,194,67,0.28)]"
                >
                  <span className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green/12 text-green-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mb-2 text-base font-bold text-navy leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-navy card-smooth font-display"
            >
              Back To Home
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-navy hover:border-navy card-smooth font-display"
            >
              Explore The Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
