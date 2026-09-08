"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import Placeholder from "./Placeholder";
import { CONTROL_BG } from "@/lib/stock-media";

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
  { num: "01", label: "Gather your people", sub: "Start the room, invite the first regulars" },
  { num: "02", label: "They find you", sub: "Discovery surfaces you to the right neighbourhood" },
  { num: "03", label: "The gathering compounds", sub: "Recognition keeps regulars coming back" },
  { num: "04", label: "Take it to the next city", sub: "Replicate the format, not the guesswork" },
];

/** Dark "control" section: 3-way tab toggle bar (2 tabs carry a SOON badge)
 * with a hard display swap between panels (no crossfade, matching the
 * source), plus the numbered 01-04 process strip nested in the same section. */
export default function ControlSection() {
  const [active, setActive] = useState(0);
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal text-cream rounded-2xl m-4 max-960:m-3 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div ref={revealRef} className="reveal-group px-6 sm:px-14 py-section-md">
          <div className="reveal text-eyebrow uppercase text-cream/60 mb-4">Where we&rsquo;re headed</div>
          <h2 className="reveal text-h2-sm font-medium mb-5" style={{ ["--i" as string]: 1 }}>
            You run the room. Otlo handles what shouldn&rsquo;t need you.
          </h2>
          <p className="reveal text-body-sm text-cream/70 max-w-[480px] mb-8" style={{ ["--i" as string]: 2 }}>
            Today, discovery and groups are live. Soon, Otlo handles more — matching supply
            automatically, surfacing brand fits before you ask, running the marketplace end to
            end. You decide how hands-on to stay.
          </p>

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
            <p
              key={tab.label}
              className="text-body-sm text-cream/70 max-w-[440px] mb-10"
              style={{ display: active === i ? "block" : "none" }}
            >
              {tab.desc}
            </p>
          ))}

          <div className="grid grid-cols-4 max-600:grid-cols-2 border-t border-l border-white/10 rounded-lg overflow-hidden">
            {STEPS.map((s) => (
              <div key={s.num} className="border-r border-b border-white/10 p-4">
                <div className="font-mono text-mono-xs text-cream/50 mb-2">{s.num}</div>
                <div className="text-body-sm font-medium mb-1">{s.label}</div>
                <div className="text-[12px] text-cream/50 leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-full">
          <Placeholder label="[IMAGE CONTROL SECTION]" seed={CONTROL_BG} className="w-full h-full rounded-none" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(29,27,24,.5) 0%, transparent 30%)" }}
          />
        </div>
      </div>
    </section>
  );
}
