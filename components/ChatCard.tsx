"use client";
import { useEffect, useState } from "react";
import { useOnceInView } from "@/hooks/useOnceInView";

// each bubble's reveal delay (ms) mirrors the source's per-bubble data-d stagger
const MESSAGES: { delay: number; label: string; role: "system" | "user" | "done" }[] = [
  { delay: 0, label: "[CHAT MSG 1 SCANNING LINE]", role: "system" },
  { delay: 500, label: "[CHAT MSG 2 FOUND LINE]", role: "system" },
  { delay: 1100, label: "[CHAT MSG 3 METRIC LINE]", role: "user" },
  { delay: 1700, label: "[CHAT MSG 4 SCORE LINE]", role: "system" },
  { delay: 2300, label: "[CHAT MSG 5 CONFIRM]", role: "done" },
];

/** Sequenced reveal panel simulating an AI deal-analysis chat. Triggers once
 * at 78% viewport, then chains per-bubble setTimeout reveals — same timer
 * choreography as the source, no scroll-linked pinning required. */
export default function ChatCard() {
  const { ref, inView } = useOnceInView<HTMLDivElement>(0.22);
  const [visible, setVisible] = useState<boolean[]>(() => MESSAGES.map(() => false));

  useEffect(() => {
    if (!inView) return;
    const timers = MESSAGES.map((m, i) =>
      setTimeout(() => {
        setVisible((v) => {
          const next = [...v];
          next[i] = true;
          return next;
        });
      }, m.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="max-w-deal mx-auto rounded-2xl border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2 mb-5">
        <span className="pulse-dot w-2 h-2 rounded-full bg-positive" />
        <span className="text-eyebrow uppercase text-muted">[CHAT HEADER LABEL]</span>
      </div>
      <div className="flex flex-col gap-3">
        {MESSAGES.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl px-4 py-3 text-body-sm transition-all duration-[350ms] ease-out ${
              m.role === "done"
                ? "self-center rounded-pill bg-positive-bg text-positive font-medium"
                : m.role === "user"
                ? "self-end bg-charcoal text-cream"
                : "self-start bg-stone text-charcoal"
            }`}
            style={{
              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? "translateY(0)" : "translateY(8px)",
            }}
          >
            {m.label}
          </div>
        ))}
      </div>
    </div>
  );
}
