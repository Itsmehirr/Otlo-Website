"use client";
import { useCountUp } from "@/hooks/useCountUp";

// real, sourced industry figures (not Otlo's own metrics — the company is
// pre-launch) — see the otlo-writing skill's evidence-pack.md. [E] evidenced,
// [P] projection.
const STATS = [
  { target: 2000, prefix: "", suffix: "", label: "WhatsApp's hard cap on a community" },
  { target: 24, prefix: "", suffix: "%", label: "of community teams can prove their value" },
  { target: 130, prefix: "$", suffix: "B", label: "projected experiential ad spend by 2025" },
  { target: 1300, prefix: "", suffix: "+", label: "TV formats licensed worldwide — live events: zero" },
];

function Stat({ target, prefix, suffix, label }: (typeof STATS)[number]) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="text-center">
      <span ref={ref} className="font-mono text-mono-lg text-cream tabular-nums">
        {prefix}
        {value}
        {suffix}
      </span>
      <div className="text-eyebrow uppercase text-cream/60 mt-2">{label}</div>
    </div>
  );
}

/** 4 stat counters, count up 0→target once the row is ~82% into view. */
export default function StatsRow() {
  return (
    <div className="max-w-content mx-auto px-6 py-section-lg max-960:py-section-md">
      <div className="text-center mb-14 max-960:mb-10">
        <p className="text-h2-sm font-medium text-cream max-w-[640px] mx-auto">
          &ldquo;It felt like a great turnout&rdquo; is not a metric. It&rsquo;s a memory.
        </p>
        <p className="text-body-sm text-cream/60 mt-4">
          The number you&rsquo;ve never had for the thing you always knew.
        </p>
      </div>
      <div className="grid grid-cols-4 max-960:grid-cols-2 max-600:grid-cols-2 gap-6 max-960:gap-4 max-600:gap-3">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
      <div className="text-center text-mono-xs font-mono text-cream/40 mt-8">
        Sources: CMX 2024–25, FRAPA, EY-Parthenon–BookMyShow 2026
      </div>
    </div>
  );
}
