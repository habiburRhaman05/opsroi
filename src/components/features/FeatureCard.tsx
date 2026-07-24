"use client";

import { ArrowRight, Check } from "lucide-react";
import type { Feature, FeatureAccent } from "@/src/lib/features";

/** Static Tailwind class sets per accent (Tailwind can't build class names dynamically). */
const ACCENT: Record<FeatureAccent, { badge: string; icon: string; glow: string }> = {
  green: {
    badge: "bg-green/12 group-hover:bg-green/20",
    icon: "text-green-deep",
    glow: "from-green/10",
  },
  gold: {
    badge: "bg-gold/15 group-hover:bg-gold/25",
    icon: "text-gold",
    glow: "from-gold/10",
  },
  navy: {
    badge: "bg-navy/10 group-hover:bg-navy/15",
    icon: "text-navy",
    glow: "from-navy/10",
  },
};

/** Grid-span classes per bento tile size. */
const SPAN: Record<NonNullable<Feature["layout"]> | "default", string> = {
  xl: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  wide: "sm:col-span-2 lg:col-span-2",
  default: "",
};

const SHELL =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-green hover:shadow-xl hover:shadow-green/10 focus-visible:-translate-y-1.5 focus-visible:border-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40";

type FeatureCardProps = {
  feature: Feature;
  onOpen: (feature: Feature) => void;
};

export default function FeatureCard({ feature, onOpen }: FeatureCardProps) {
  const Icon = feature.icon;
  const accent = ACCENT[feature.accent];
  const layout = feature.layout ?? "default";

  const viewDetails = (
    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-green-deep transition-colors group-hover:text-green">
      View Details
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );

  // ── Compact tile (1×1) ──
  return (
    <button
      type="button"
      onClick={() => onOpen(feature)}
      aria-label={`View details for ${feature.title}`}
      className={`${SHELL} p-5`}
    >
      <span
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 ${accent.badge}`}
      >
        <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.8} />
      </span>
      <h3 className="mb-1.5 text-base font-bold leading-snug text-navy">
        {feature.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-[13px] leading-relaxed text-ink-soft">
        {feature.tagline}
      </p>
      {viewDetails}
    </button>
  );
}
