"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { useBodyLock } from "@/src/hooks/useBodyLock";
import type { Feature, FeatureAccent } from "@/src/lib/features";

const ACCENT: Record<FeatureAccent, { badge: string; icon: string; stat: string }> = {
  green: { badge: "bg-green/12", icon: "text-green-deep", stat: "bg-green/8 border-green/25 text-green-deep" },
  gold: { badge: "bg-gold/15", icon: "text-gold", stat: "bg-gold/10 border-gold/30 text-navy" },
  navy: { badge: "bg-navy/10", icon: "text-navy", stat: "bg-navy/6 border-navy/20 text-navy" },
};

type FeatureModalProps = {
  feature: Feature | null;
  onClose: () => void;
};

export default function FeatureModal({ feature, onClose }: FeatureModalProps) {
  const [visible, setVisible] = useState(false);
  const isOpen = feature !== null;
  useBodyLock(isOpen);

  const handleClose = useCallback(() => onClose(), [onClose]);

  // Escape to close + visibility animation
  useEffect(() => {
    if (!feature) {
      setVisible(false);
      return;
    }
    const raf = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, [feature, handleClose]);

  if (!feature) return null;

  const Icon = feature.icon;
  const accent = ACCENT[feature.accent];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={feature.title}
      onClick={handleClose}
      className={`fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(15, 43, 53, 0.82)", backdropFilter: "blur(6px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-[0_32px_80px_rgba(15,43,53,0.45)] transition-all duration-300 ease-out ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-mist text-ink-soft transition-colors hover:bg-navy hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Icon badge */}
        <span className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${accent.badge}`}>
          <Icon className={`h-7 w-7 ${accent.icon}`} strokeWidth={1.8} />
        </span>

        <h2 className="mb-3 text-2xl font-bold text-navy pr-8">{feature.title}</h2>

        <p className="mb-6 text-[0.95rem] leading-relaxed text-ink-soft">
          {feature.overview}
        </p>

        {feature.stat && (
          <div className={`mb-6 flex items-baseline gap-3 rounded-2xl border px-5 py-4 ${accent.stat}`}>
            <span className="text-2xl font-bold tracking-tight">{feature.stat.value}</span>
            <span className="text-sm font-semibold text-ink-soft">{feature.stat.label}</span>
          </div>
        )}

        {feature.howItWorks && feature.howItWorks.length > 0 && (
          <div className="mb-7">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-widest text-green-deep">
              How it works
            </div>
            <ol className="space-y-3">
              {feature.howItWorks.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <ul className="mb-7 grid gap-2.5 sm:grid-cols-2">
          {feature.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 font-bold text-navy-deep shadow-[0_4px_20px_rgba(125,194,67,0.35)] transition-all duration-300 hover:bg-green-deep hover:text-white sm:w-auto"
        >
         Get Booking Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
