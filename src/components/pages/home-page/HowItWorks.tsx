"use client";

import { Compass, Blocks, Rocket } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";

const STEPS = [
  {
    number: "01",
    label: "Step One",
    icon: Compass,
    title: "We Map Your Business",
    description:
      "A short call to understand how you sell, deliver, and get paid today. No assumptions about your industry, your niche, or your crew size.",
  },
  {
    number: "02",
    label: "Step Two",
    icon: Blocks,
    title: "We Build The Systems",
    description:
      "Your CRM, automations, and reporting get built and configured around that exact workflow.",
  },
  {
    number: "03",
    label: "Step Three",
    icon: Rocket,
    title: "We Keep It Running",
    description:
      "OpsROI stays on as your ops partner: maintaining, adjusting, and supporting as you grow, add crew, add clients, or add a new service line.",
  },
];

export default function HowItWorks() {
  return (
    <section id="why" className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">How It Works</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
              From First Call To Fully Running,
              <br className="hidden sm:block" />
              In Three Steps.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              No lengthy onboarding or complicated setup. We map your business
              around your sales and delivery process, build the systems, and keep
              everything running.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number}>
                <div data-cursor-glow className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-1 hover:border-line/0 hover:shadow-[0_24px_50px_-24px_rgba(15,43,53,0.22)]">
                  {/* Oversized watermark number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 text-[7rem] font-bold leading-none text-navy/[0.045] font-display select-none"
                  >
                    {step.number}
                  </span>

                  {/* Icon in a soft tile */}
                  <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-mist text-navy transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>

                  {/* Step label + horizontal separator */}
                  <div className="relative z-10 mb-3 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                      {step.label}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-line" />
                  </div>

                  <h3 className="relative z-10 mb-3 text-lg sm:text-xl font-bold text-navy leading-snug">
                    {step.title}
                  </h3>

                  <p className="relative z-10 text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
