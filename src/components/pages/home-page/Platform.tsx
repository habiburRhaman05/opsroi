"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURES, type Feature } from "../../../lib/features";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";

const FEATURED_IDS = [
  "crm-build",
  "hr-payroll",
  "workflow-automation",
  "inventory",
  "ai-estimates-invoicing",
  "ai-receptionist",
  "email-marketing",
  "ongoing-support",
];

function ModuleCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div data-cursor-glow className="group card-smooth flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:-translate-y-0.5 hover:border-line/0 hover:shadow-[0_18px_40px_-20px_rgba(15,43,53,0.2)]">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy transition-colors duration-300 group-hover:bg-green group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>

      <h3 className="mb-2 text-base font-bold text-navy leading-snug">
        {feature.title}
      </h3>

      <p className="text-sm text-ink-soft leading-relaxed">
        {feature.tagline}
      </p>
    </div>
  );
}

export function Platform() {
  const featuredModules = useMemo(
    () => FEATURED_IDS.map((id) => FEATURES.find((f) => f.id === id)!).filter(Boolean),
    []
  );

  return (
    <section id="platform" className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">
              The Platform You&apos;d Own
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
              One operating system.
              <br className="hidden sm:block" />
              Every part of the business.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              Eighteen connected modules, not ten apps duct-taped together. This is what your industry would run on.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch mb-10">
          {featuredModules.map((feature) => (
            <ScrollReveal key={feature.id}>
              <ModuleCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA - links to features page */}
        <div className="text-center">
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-navy-deep active:scale-95 font-display"
          >
            See All {FEATURES.length} Modules
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
