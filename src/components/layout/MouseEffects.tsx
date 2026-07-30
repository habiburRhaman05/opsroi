"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global observer that adds three modern interactive effects to any element
 * that opts in via a data attribute. Runs once per route change.
 *
 * Usage in JSX:
 *   <div data-cursor-glow>...</div>            green radial spotlight follows cursor inside the element
 *   <button data-magnetic>...</button>         subtly follows the cursor toward it on hover
 *   <div data-tilt data-tilt-amount="8">...    3D tilt based on cursor position (default 6deg)
 *
 * All three respect prefers-reduced-motion. On teardown each element's
 * inline transform is cleared so React re-renders don't leak state.
 */
export default function MouseEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const cleanups: Array<() => void> = [];

    // ─────────────────────────────────────────────────────
    // 1. Cursor Glow — green radial spotlight tracks cursor
    //    Adds a positioned overlay as first child (behind content).
    //    Parent gets position:relative if not already positioned.
    // ─────────────────────────────────────────────────────
    document.querySelectorAll<HTMLElement>("[data-cursor-glow]").forEach((el) => {
      if (getComputedStyle(el).position === "static") {
        el.style.position = "relative";
      }
      const spotlight = document.createElement("div");
      spotlight.setAttribute("aria-hidden", "true");
      spotlight.dataset.mouseGlowOverlay = "1";
      spotlight.style.cssText = [
        "position:absolute",
        "inset:0",
        "pointer-events:none",
        "opacity:0",
        "transition:opacity 0.4s ease",
        "border-radius:inherit",
        "background:radial-gradient(280px circle at var(--gx,50%) var(--gy,50%), rgba(125,194,67,0.18), transparent 55%)",
        "z-index:0",
      ].join(";");
      el.prepend(spotlight);

      let ticking = false;
      let px = 50;
      let py = 50;
      const flush = () => {
        spotlight.style.setProperty("--gx", `${px}%`);
        spotlight.style.setProperty("--gy", `${py}%`);
        ticking = false;
      };
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        px = ((e.clientX - rect.left) / rect.width) * 100;
        py = ((e.clientY - rect.top) / rect.height) * 100;
        if (!ticking) {
          requestAnimationFrame(flush);
          ticking = true;
        }
        spotlight.style.opacity = "1";
      };
      const leave = () => {
        spotlight.style.opacity = "0";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        spotlight.remove();
      });
    });

    // ─────────────────────────────────────────────────────
    // 2. Magnetic — element translates a fraction of the
    //    cursor's offset from its center on hover.
    //    Strength via data-magnetic-strength (default 0.25).
    // ─────────────────────────────────────────────────────
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magneticStrength || "0.25");
      const prev = el.style.transition;
      el.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";

      let ticking = false;
      let dx = 0;
      let dy = 0;
      const flush = () => {
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        ticking = false;
      };
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        dx = (e.clientX - cx) * strength;
        dy = (e.clientY - cy) * strength;
        if (!ticking) {
          requestAnimationFrame(flush);
          ticking = true;
        }
      };
      const leave = () => {
        dx = 0;
        dy = 0;
        el.style.transform = "translate3d(0, 0, 0)";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = "";
        el.style.transition = prev;
      });
    });

    // ─────────────────────────────────────────────────────
    // 3. 3D Tilt — element rotates in 3D toward the cursor.
    //    Max tilt via data-tilt-amount (default 6 degrees).
    //    Note: overrides any CSS hover: translate on the element.
    // ─────────────────────────────────────────────────────
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const maxTilt = parseFloat(el.dataset.tiltAmount || "6");
      const prevTransform = el.style.transform;
      const prevTransition = el.style.transition;
      el.style.transformStyle = "preserve-3d";
      el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

      let ticking = false;
      let rx = 0;
      let ry = 0;
      const flush = () => {
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        ticking = false;
      };
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        rx = (0.5 - y) * maxTilt;
        ry = (x - 0.5) * maxTilt;
        if (!ticking) {
          requestAnimationFrame(flush);
          ticking = true;
        }
      };
      const leave = () => {
        rx = 0;
        ry = 0;
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = prevTransform;
        el.style.transition = prevTransition;
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
