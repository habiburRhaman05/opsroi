"use client";

import { useEffect } from "react";

/**
 * Locks body scroll when `locked` is true by toggling a CSS class on the
 * document body. Cleans up automatically when the component unmounts or
 * when `locked` becomes false.
 *
 * Usage:
 *   useBodyLock(modalOpen);
 *   // then in CSS: body.modal-open { overflow: hidden; }
 */
export function useBodyLock(locked: boolean): void {
  useEffect(() => {
    if (locked) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [locked]);
}
