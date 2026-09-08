"use client";
import { useEffect, useRef } from "react";
import Placeholder from "./Placeholder";

/** Full-bleed "break" image: scroll-linked (not scroll-triggered) scale/
 * translate on the image itself, while its container scrubs from edge-to-edge
 * down to an inset rounded card as the section is approached — both driven
 * by scroll position via rAF, matching the source's two independent
 * ease:'none' scrubs. */
export default function ParallaxBreak({ label, seed }: { label: string; seed: string }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const img = imgRef.current;
        const wrap = wrapRef.current;
        if (!section || !img || !wrap) return;
        const vh = window.innerHeight;
        const rect = section.getBoundingClientRect();

        // image scrub: full transit of the section through the viewport
        const imgProgress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
        const scale = 1.25 - imgProgress * (1.25 - 1.02);
        const y = -12 + imgProgress * (4 - -12);
        img.style.transform = `scale(${scale}) translateY(${y}%)`;

        // wrap shrink: only as the section approaches (top 80% -> top 20%)
        const shrinkProgress = Math.min(1, Math.max(0, (vh * 0.8 - rect.top) / (vh * 0.6)));
        wrap.style.width = `calc(100% - ${shrinkProgress * 32}px)`;
        wrap.style.borderRadius = `${shrinkProgress * 24}px`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-2">
      <div ref={wrapRef} className="mx-auto overflow-hidden" style={{ width: "100%", borderRadius: 0 }}>
        <div ref={imgRef} className="w-full h-full">
          <Placeholder label={label} seed={seed} className="w-full h-[70vh]" />
        </div>
      </div>
    </div>
  );
}
