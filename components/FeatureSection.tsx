"use client";
import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  eyebrow: string;
  heading: string;
  body: string;
  /** bolded lead-in + plain rest, closing stat-style line under the body copy */
  statLead?: string;
  statRest?: string;
  reversed?: boolean;
  labelA: string;
  labelB: string;
  seedA: string;
  seedB: string;
  /** optional small demo card rendered under the body copy */
  demo?: React.ReactNode;
};

/** Two-column feature section whose image pane crossfades between two stacked
 * placeholders once scrolled to ~40% of viewport center — no sticky/fixed
 * pinning is used, matching the source's actual (simpler-than-assumed)
 * mechanism. */
export default function FeatureSection({
  eyebrow,
  heading,
  body,
  statLead,
  statRest,
  reversed,
  labelA,
  labelB,
  seedA,
  seedB,
  demo,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [swapped, setSwapped] = useState(false);
  const revealRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight * 0.5) {
          setSwapped(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setSwapped(false);
        }
      },
      { threshold: 0, rootMargin: `-${Math.round(window.innerHeight * 0.4)}px 0px -${Math.round(window.innerHeight * 0.4)}px 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 max-960:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh] max-w-content mx-auto px-6 py-section-sm ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="m-5">
        <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
          {/* wrapper owns the absolute positioning — Placeholder's own
              `relative` class otherwise beats a caller's `absolute` in
              Tailwind's fixed stylesheet order and collapses it to 0 height */}
          <div className={`crossfade-img absolute inset-0 rounded-xl overflow-hidden ${swapped ? "hide" : ""}`}>
            <Placeholder label={labelA} seed={seedA} className="w-full h-full rounded-xl" />
          </div>
          <div className={`crossfade-img absolute inset-0 rounded-xl overflow-hidden ${swapped ? "" : "hide"}`}>
            <Placeholder label={labelB} seed={seedB} className="w-full h-full rounded-xl" />
          </div>
        </div>
      </div>
      <div ref={revealRef} className="reveal-group px-2">
        <div className="reveal text-eyebrow uppercase text-muted mb-4">{eyebrow}</div>
        <h2 className="reveal text-h2-sm font-medium mb-5" style={{ ["--i" as string]: 1 }}>
          {heading}
        </h2>
        <p className="reveal text-body-sm text-muted max-w-[440px]" style={{ ["--i" as string]: 2 }}>
          {body}
        </p>
        {statLead && (
          <p className="reveal text-body-sm text-muted max-w-[440px] mt-6 pt-6 border-t border-border" style={{ ["--i" as string]: 3 }}>
            <span className="text-charcoal font-medium">{statLead}</span> {statRest}
          </p>
        )}
        {demo && (
          <div className="reveal mt-8 max-w-[440px]" style={{ ["--i" as string]: 4 }}>
            {demo}
          </div>
        )}
      </div>
    </section>
  );
}
