"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Trophy } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";
import {
  COMPETITORS,
  ROWS,
  coverageScore,
  type FeatureRow,
} from "@/src/lib/competitors";

type Row = {
  key: string;
  name: string;
  logo: string;
  tagline: string;
  percent: number;
  score: number;
  total: number;
  missing: string[];
};

// Precompute a ranked scorecard for the four competitors + OpsROI.
function buildRows(): Row[] {
  const competitorRows: Row[] = COMPETITORS.map((c) => {
    const key = c.key as keyof Omit<FeatureRow, "feature">;
    const { score, total, percent } = coverageScore(key);
    const missing = ROWS.filter((r) => r[key] === false).map((r) => r.feature);
    return {
      key: c.key,
      name: c.name,
      logo: c.logo,
      tagline: c.tagline,
      percent,
      score,
      total,
      missing,
    };
  });

  const { score, total, percent } = coverageScore("opsroi");
  const opsroiRow: Row = {
    key: "opsroi",
    name: "OpsROI",
    logo: "/logos/OpsROI/OpsROI-1.png",
    tagline: "All-in-one operations",
    percent,
    score,
    total,
    missing: [],
  };

  return [opsroiRow, ...competitorRows.sort((a, b) => b.percent - a.percent)];
}

function fmtScore(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}

export function CompetitorCoverage() {
  const rows = buildRows();

  return (
    <section
      id="coverage"
      className="relative overflow-hidden py-14 sm:py-20 px-5 sm:px-8 bg-white"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-green/5 blur-3xl"
      />

      <div className="relative container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">
              Coverage At A Glance
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
              One Platform Covers What
              <br className="hidden sm:block" />
              <span className="text-green">Four Others Don&apos;t.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              Across {ROWS.length} capabilities a modern service business
              actually needs, here is how each platform stacks up.
            </p>
          </ScrollReveal>
        </div>

        {/* Scorecards */}
        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
          {rows.map((r, i) => {
            const isOpsroi = r.key === "opsroi";
            const rank = i + 1;
            return (
              <ScrollReveal key={r.key}>
                <div
                  data-cursor-glow={isOpsroi ? undefined : ""}
                  className={
                    isOpsroi
                      ? "relative overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-5 sm:p-7 text-white ring-2 ring-green/40 shadow-[0_30px_80px_-40px_rgba(125,194,67,0.45)]"
                      : "card-smooth relative overflow-hidden rounded-2xl border border-line bg-white p-5 sm:p-7 hover:border-green/30 hover:shadow-[0_18px_40px_-20px_rgba(15,43,53,0.12)]"
                  }
                >
                  {isOpsroi && (
                    <>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-green/25 blur-3xl animate-opsroi-glow"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green to-transparent"
                      />
                    </>
                  )}

                  <div className="relative flex items-center gap-4 sm:gap-6">
                    {/* Rank badge */}
                    <span
                      className={`flex-none flex h-8 w-8 items-center justify-center rounded-lg font-display font-bold text-sm tabular-nums ${
                        isOpsroi
                          ? "bg-green text-navy-deep shadow-[0_0_12px_rgba(125,194,67,0.5)]"
                          : "bg-mist text-ink-soft"
                      }`}
                    >
                      {isOpsroi ? (
                        <Trophy className="h-4 w-4" strokeWidth={2.4} />
                      ) : (
                        rank
                      )}
                    </span>

                    {/* Logo */}
                    <span
                      className={`flex-none flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${
                        isOpsroi
                          ? "bg-white/95 border border-green/40 shadow-[0_0_15px_rgba(125,194,67,0.35)]"
                          : "bg-mist border border-line"
                      }`}
                    >
                      <Image
                        src={r.logo}
                        alt={r.name}
                        width={28}
                        height={28}
                        className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                      />
                    </span>

                    {/* Name + progress */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <div className="min-w-0">
                          <div
                            className={`text-[15px] sm:text-base font-bold font-display uppercase tracking-tight truncate ${
                              isOpsroi ? "text-white" : "text-navy"
                            }`}
                          >
                            {r.name}
                            {isOpsroi && (
                              <Sparkles
                                className="inline-block h-3.5 w-3.5 text-green ml-1.5 -translate-y-0.5"
                                strokeWidth={2.5}
                              />
                            )}
                          </div>
                          <div
                            className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest font-display truncate ${
                              isOpsroi ? "text-green" : "text-ink-soft"
                            }`}
                          >
                            {r.tagline}
                          </div>
                        </div>
                        <div
                          className={`shrink-0 text-right ${
                            isOpsroi ? "text-white" : "text-navy"
                          }`}
                        >
                          <div className="text-xl sm:text-2xl font-bold font-display tabular-nums leading-none">
                            {fmtScore(r.score)}
                            <span
                              className={`text-sm font-semibold ${
                                isOpsroi ? "text-white/50" : "text-ink-soft"
                              }`}
                            >
                              /{r.total}
                            </span>
                          </div>
                          <div
                            className={`mt-1 text-[10px] font-bold uppercase tracking-widest font-display ${
                              isOpsroi ? "text-green" : "text-ink-soft"
                            }`}
                          >
                            {r.percent}% covered
                          </div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div
                        className={`relative h-2 rounded-full overflow-hidden ${
                          isOpsroi ? "bg-white/10" : "bg-mist"
                        }`}
                      >
                        <div
                          className={`h-full rounded-full transition-all ${
                            isOpsroi
                              ? "bg-linear-to-r from-green to-green-deep shadow-[0_0_10px_rgba(125,194,67,0.6)]"
                              : "bg-linear-to-r from-green/60 to-green"
                          }`}
                          style={{ width: `${r.percent}%` }}
                        />
                      </div>

                      {/* Missing tags (competitors only, up to 3) */}
                      {!isOpsroi && r.missing.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft font-display">
                            Missing:
                          </span>
                          {r.missing.slice(0, 3).map((m) => (
                            <span
                              key={m}
                              className="inline-flex items-center rounded-full bg-mist border border-line px-2 py-0.5 text-[10px] font-semibold text-ink-soft"
                            >
                              {m}
                            </span>
                          ))}
                          {r.missing.length > 3 && (
                            <span className="text-[10px] font-bold text-ink-soft/70">
                              +{r.missing.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA link to full comparison */}
        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              href="/why-opsroi#compare-competitors"
              className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-green-deep hover:text-navy card-smooth font-display"
            >
              See The Full Feature Comparison
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
