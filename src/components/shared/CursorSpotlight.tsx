"use client";

import { useEffect, useRef } from "react";

type CursorSpotlightProps = {
  /** Approximate spotlight radius in pixels. Default 500. */
  radius?: number;
  /** Peak alpha for the spotlight color at cursor position. Default 0.16. */
  intensity?: number;
  /** Tailwind color/opacity of the spotlight tint. Default green (rgba fallback). */
  color?: string;
};

/**
 * Absolutely-positioned overlay that renders a radial green highlight
 * following the cursor within its parent element. Fades out on mouse leave
 * and respects prefers-reduced-motion.
 *
 * Place inside any `relative` parent (like a hero section).
 */
export function CursorSpotlight({
  radius = 500,
  intensity = 0.16,
  color,
}: CursorSpotlightProps = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let ticking = false;
    let pendingX = 50;
    let pendingY = 50;

    const flush = () => {
      el.style.setProperty("--spot-x", `${pendingX}%`);
      el.style.setProperty("--spot-y", `${pendingY}%`);
      ticking = false;
    };

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      pendingX = ((e.clientX - rect.left) / rect.width) * 100;
      pendingY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!ticking) {
        requestAnimationFrame(flush);
        ticking = true;
      }
      el.style.opacity = "1";
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseleave", handleLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const tint = color ?? `rgba(125, 194, 67, ${intensity})`;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 mix-blend-screen"
      style={{
        background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${tint}, transparent 55%)`,
      }}
    />
  );
}
