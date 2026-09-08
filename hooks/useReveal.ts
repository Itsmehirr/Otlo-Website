"use client";
import { useEffect, useRef } from "react";

/** Adds .in-view to the element (combined with .reveal in CSS) the first time
 * it crosses the given viewport threshold. Mirrors the source's reused
 * fade+rise scroll-reveal primitive. */
export function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
