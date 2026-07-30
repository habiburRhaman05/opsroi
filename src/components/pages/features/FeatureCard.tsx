"use client";

import { ArrowRight } from "lucide-react";
import type { Feature } from "@/src/lib/features";

type FeatureCardProps = {
  feature: Feature;
  onOpen: (feature: Feature) => void;
};

export default function FeatureCard({ feature, onOpen }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(feature)}
      data-cursor-glow
      aria-label={`View details for ${feature.title}`}
      className="group card-smooth relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 text-left hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_28px_50px_-22px_rgba(125,194,67,0.35)]"
    >
      {/* Corner accent that fades in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br from-green/12 to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100"
      />
      {/* Ambient green glow that fades in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy card-smooth-icon group-hover:bg-green group-hover:text-white group-hover:ring-2 group-hover:ring-green/25 group-hover:shadow-[0_0_20px_rgba(125,194,67,0.35)] animate-icon-bump">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>

      <h3 className="relative mb-2 text-base font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-green-deep">
        {feature.title}
      </h3>

      <p className="relative mb-5 line-clamp-3 text-sm leading-relaxed text-ink-soft">
        {feature.tagline}
      </p>

      <span className="relative mt-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-green-deep transition-colors group-hover:text-green font-display">
        View Details
        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}
