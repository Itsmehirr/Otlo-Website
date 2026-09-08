"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const TABS = [
  {
    label: "Discovery",
    soon: false,
    desc: "The street outside your door. People find your room before they've met you.",
  },
  {
    label: "Marketplace",
    soon: true,
    desc: "Chef, photographer, forty chairs, someone to hold the door — sourced in your city, not your contacts list.",
  },
  {
    label: "Event IP",
    soon: true,
    desc: "Your format, held. Replicate it, licence it, or just keep it.",
  },
];

const STEPS = [
  { num: "01", label: "Gather your people" },
  { num: "02", label: "They find you" },
  { num: "03", label: "The gathering compounds" },
  { num: "04", label: "Take it to the next city" },
];

/** Dark "control" section: 3-way tab toggle bar (2 tabs carry a SOON badge)
 * with a hard display swap between panels (no crossfade, matching the
 * source), plus the numbered 01-04 process strip nested in the same section. */
export default function ControlSection() {
  const [active, setActive] = useState(0);
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal text-cream rounded-2xl mx-3 max-960:mx-2">
      <div ref={revealRef} className="reveal-group max-w-content mx-auto px-6 sm:px-14 py-section-md">
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <div className="text-eyebrow uppercase text-cream/60 mb-4">The arc</div>
            <h2 className="text-h2-sm font-medium">Gather. Get found. Compound.</h2>
          </div>
          <div>
            <div className="flex gap-2 mb-6 flex-wrap">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  className={`relative rounded-pill px-5 py-2.5 text-nav transition-colors ${
                    active === i ? "bg-cream text-charcoal" : "bg-white/10 text-cream/80 hover:bg-white/15"
                  }`}
                >
                  {tab.label}
                  {tab.soon && <span className="ml-1.5 text-[9px] opacity-50 align-super">SOON</span>}
                </button>
              ))}
            </div>
            {TABS.map((tab, i) => (
              <p key={tab.label} className="text-body-sm text-cream/70" style={{ display: active === i ? "block" : "none" }}>
                {tab.desc}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 max-960:grid-cols-2 max-600:grid-cols-2 border-t border-l border-white/10 rounded-lg overflow-hidden">
          {STEPS.map((s) => (
            <div key={s.num} className="border-r border-b border-white/10 p-6">
              <div className="font-mono text-mono-xs text-cream/50 mb-3">{s.num}</div>
              <div className="text-body-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
