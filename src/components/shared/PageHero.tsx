import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { CursorSpotlight } from "./CursorSpotlight";

type CtaAction = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: CtaAction;
  secondaryCta?: CtaAction;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const hasCtas = Boolean(primaryCta || secondaryCta);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] py-24 sm:py-32 px-5 sm:px-8 text-white">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green/20 blur-3xl animate-opsroi-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-opsroi-glow-slow"
      />
      {/* Watermark */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-40 md:w-64 opacity-5"
        style={{ transform: "translate(20%, -20%)" }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/watermark.svg" alt="" className="w-full h-auto" />
      </div>
      {/* Top accent bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green/60 to-transparent"
      />
      {/* Interactive cursor-following green spotlight */}
      <CursorSpotlight />

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green font-display">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {eyebrow}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-display uppercase">
            {title}
          </h1>
        </ScrollReveal>
        {description && (
          <ScrollReveal>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </ScrollReveal>
        )}
        {hasCtas && (
          <ScrollReveal>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  data-magnetic
                  data-magnetic-strength="0.2"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-navy-deep hover:bg-white card-smooth font-display shadow-[0_0_25px_rgba(125,194,67,0.4)] hover:shadow-[0_0_35px_rgba(125,194,67,0.6)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/25 card-smooth font-display"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
