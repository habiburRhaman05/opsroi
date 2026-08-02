"use client";

import { useState } from "react";
import FeatureCard from "@/src/components/pages/features/FeatureCard";
import FeatureModal from "@/src/components/pages/features/FeatureModal";
import FeaturePipeline from "@/src/components/pages/features/FeaturePipeline";
import { FEATURES, DELIVERY_STEPS, type Feature } from "@/src/lib/features";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { PageHero } from "@/src/components/shared/PageHero";

export default function FeaturesPage() {
  const [selected, setSelected] = useState<Feature | null>(null);

  return (
    <>
      <main>
        {/* ─── Page Hero ─── */}
        <PageHero
          eyebrow="Features"
          title={
            <>
              Everything Your Business Needs
              <br className="hidden sm:block" />
              To Run <span className="text-green">In One Platform.</span>
            </>
          }
          description="From the first lead to the last invoice, here's everything inside OpsROI, for agencies and trades alike. Tap any feature to see exactly how it works."
          primaryCta={{ label: "Book a Demo", href: "/book-a-demo" }}
          secondaryCta={{ label: "Why OpsROI", href: "/why-opsroi" }}
        />

        {/* All Features - one grid */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <ScrollReveal>
                <SectionLabel className="justify-center mb-4">The Full Toolkit</SectionLabel>
              </ScrollReveal>
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                  One Login. Every Tool The Work Needs.
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-base text-ink-soft leading-relaxed">
                  Everything you&apos;d normally stitch together from six-plus
                  tools, built into one platform. Click a card for the details.
                </p>
              </ScrollReveal>
            </div>

            <div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr"
              data-stagger
            >
              {FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  onOpen={setSelected}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Feature Delivery Pipeline ─── */}
        <FeaturePipeline />

        {/* ─── How We Deliver (done-for-you) ─── */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 bg-mist">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <ScrollReveal>
                <SectionLabel className="justify-center mb-4">Done For You</SectionLabel>
              </ScrollReveal>
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
                  How Our Team Gets You Running.
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-base text-ink-soft leading-relaxed">
                  You don&apos;t build any of this yourself. From first call to
                  fully running, our team maps, builds, and maintains it around
                  how your business actually works.
                </p>
              </ScrollReveal>
            </div>

            <div
              className="grid grid-cols-1 gap-5 md:grid-cols-3"
              data-stagger
            >
              {DELIVERY_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    data-cursor-glow
                    className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_28px_50px_-22px_rgba(125,194,67,0.32)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-4 text-[7rem] font-bold leading-none text-navy/4.5 font-display select-none transition-colors duration-350 group-hover:text-green/20"
                    >
                      {step.step}
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:shadow-[0_0_22px_rgba(125,194,67,0.4)] animate-icon-bump">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <div className="relative z-10 mb-3 flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                        Step {step.step}
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="cta-section">
          <div className="container px-5 sm:px-6 lg:px-8">
            <div className="cta-band-premium">
              <div className="cta-glow cta-glow-1" />
              <div className="cta-glow cta-glow-2" />
              <div className="cta-content">
                <h2 className="cta-title">See it running on your business.</h2>
                <p className="cta-desc">
                  Book a short call and we&apos;ll walk through what OpsROI would
                  set up for you - no niche requirements, no long contracts.
                </p>
                <div className="cta-actions">
                  <a href="/book-a-demo" className="btn btn-cta-premium">
                    <span>Get Started</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FeatureModal feature={selected} onClose={() => setSelected(null)} />
    </>
  );
}
