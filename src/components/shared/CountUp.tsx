"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** The final numeric value to count to. */
  end: number;
  /** Optional string prefix appended before the number (e.g. "$"). */
  prefix?: string;
  /** Optional string suffix appended after the number (e.g. "%"). */
  suffix?: string;
  /** Total animation duration in milliseconds. Default 1800. */
  duration?: number;
  /** Decimal places to display. Default 0. */
  decimals?: number;
  /** Wait until this fraction of the element is visible. Default 0.3. */
  threshold?: number;
  /** Optional wrapper class name. */
  className?: string;
};

/**
 * Number that ticks from 0 to `end` when it scrolls into view.
 * Uses easeOutCubic and respects prefers-reduced-motion.
 */
export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1800,
  decimals = 0,
  threshold = 0.3,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, threshold]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
