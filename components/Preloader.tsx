"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/** Page preloader: incrementing numeric counter + fill bar, fade-out, then a
 * full-viewport color curtain slides up to reveal the page. Blocks scroll
 * until the sequence finishes (~2.9s), mirroring the source's GSAP timeline
 * with plain rAF + CSS transitions/keyframes. */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "fading" | "curtain" | "done">("counting");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1400;
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setCount(Math.round(easeInOut(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("fading");
        setTimeout(() => setPhase("curtain"), 300);
        setTimeout(() => {
          setPhase("done");
          document.body.style.overflow = "";
        }, 300 + 700);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-accent text-cream transition-opacity duration-300"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transform: phase === "curtain" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "curtain" ? "transform .7s cubic-bezier(.22,1,.36,1)" : "opacity .3s ease",
      }}
    >
      <div className="mb-6">
        <Image src="/logo.svg" alt="Otlo" width={287} height={132} priority className="h-8 w-auto" />
      </div>
      <div className="font-mono text-mono-sm tabular-nums mb-3">{String(count).padStart(2, "0")}</div>
      <div className="w-40 h-px bg-cream/30 overflow-hidden">
        <div className="h-full bg-cream" style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}
