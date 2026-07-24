"use client";

import { useState } from "react";
import FeatureCard from "@/src/components/features/FeatureCard";
import FeatureModal from "@/src/components/features/FeatureModal";
import FeaturePipeline from "@/src/components/features/FeaturePipeline";
import { FEATURES, DELIVERY_STEPS, type Feature } from "@/src/lib/features";

export default function FeaturesPage() {
  const [selected, setSelected] = useState<Feature | null>(null);

  return (
    <>
      <main>
        {/* ─── Page Hero ─── */}
        <section className="page-hero">
          <div className="hero-glow hero-glow--a" />
          <div className="hero-glow hero-glow--b" />
          <div className="container px-5 sm:px-6 lg:px-8">
            <div className="eyebrow fade-in-up">Features</div>
            <h1 className="fade-in-up" style={{ animationDelay: "0.08s" }}>
              Everything your business needs to run <br/> <span className="text-[#5FA02E]">
                in one platform.
              </span>
            </h1>
            <p className="lede fade-in-up" style={{ animationDelay: "0.16s" }}>
              From the first lead to the last invoice, here&apos;s everything
              inside OpsROI — for agencies and trades alike. Tap any feature to see
              exactly how it works.
            </p>
          </div>
        </section>

        {/* ─── All Features — one grid ─── */}
        <section>
          <div className="container px-5 sm:px-6 lg:px-8">
            <div className="section-head center" style={{ margin: "0 auto 44px" }}>
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                The Full Toolkit
              </div>
              <h2>One login. Every tool the work needs.</h2>
              <p>
                Everything you&apos;d normally stitch together from six-plus tools,
                built into one platform — click a card for the details.
              </p>
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
        <section>
          <div className="container px-5 sm:px-6 lg:px-8">
            <div className="section-head center" style={{ margin: "0 auto 44px" }}>
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Done For You
              </div>
              <h2>How our team gets you running.</h2>
              <p>
                You don&apos;t build any of this yourself. From first call to fully
                running, our team maps, builds, and maintains it around how your
                business actually works.
              </p>
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
                    className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/10"
                  >
                    <span className="absolute right-6 top-6 text-4xl font-extrabold text-mist">
                      {step.step}
                    </span>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/12 text-green-deep">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
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
                  <a href="/contact" className="btn btn-cta-premium">
                    <span>Book a Call</span>
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
