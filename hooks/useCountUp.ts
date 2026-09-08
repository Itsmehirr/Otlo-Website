"use client";
import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `target` over `duration`ms once the element enters the
 * viewport, using a power2-out easing curve (matches the source's GSAP tween
 * feel without pulling in a library). */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const easeOutPower2 = (t: number) => 1 - (1 - t) * (1 - t);
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          setValue(Math.round(easeOutPower2(t) * target));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}
