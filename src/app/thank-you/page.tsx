import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | OpsROI",
  description: "Thanks for reaching out. Your message is in.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
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
            Message Sent
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-display uppercase">
            Thank You.
            <br className="hidden sm:block" />
            <span className="text-green">Your Message Is In.</span>
          </h1>

          <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            We&apos;ve received your message. A real person on the OpsROI team
            will take it from here.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-navy-deep hover:bg-white card-smooth font-display shadow-[0_0_25px_rgba(125,194,67,0.4)] hover:shadow-[0_0_35px_rgba(125,194,67,0.6)]"
            >
              Back To Home
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/25 card-smooth font-display"
            >
              Explore The Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
