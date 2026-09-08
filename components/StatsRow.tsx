"use client";
import { useCountUp } from "@/hooks/useCountUp";

// placeholder targets preserve each stat's original digit-count/suffix
// format (1-digit / 2-digit+% / 2-digit+"hrs" / 1-2-digit+"s") without
// reproducing the source's real figures
const STATS = [
  { target: 9, suffix: "", label: "[STAT 1 LABEL]" },
  { target: 47, suffix: "%", label: "[STAT 2 LABEL]" },
  { target: 24, suffix: "hrs", label: "[STAT 3 LABEL]" },
  { target: 8, suffix: "s", label: "[STAT 4 LABEL]" },
];

function Stat({ target, suffix, label }: (typeof STATS)[number]) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="text-center">
      <span ref={ref} className="font-mono text-mono-lg text-cream tabular-nums">
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
    <div className="grid grid-cols-4 max-960:grid-cols-2 max-600:grid-cols-2 gap-6 max-960:gap-4 max-600:gap-3 max-w-content mx-auto px-6 py-section-md">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  );
}
