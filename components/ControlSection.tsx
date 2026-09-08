"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const TABS = [
  { label: "[TAB 1 LABEL]", soon: false, desc: "[TAB 1 DESCRIPTION SENTENCE]" },
  { label: "[TAB 2 LABEL]", soon: true, desc: "[TAB 2 DESCRIPTION SENTENCE]" },
  { label: "[TAB 3 LABEL]", soon: true, desc: "[TAB 3 DESCRIPTION SENTENCE]" },
];

const STEPS = [
  { num: "01", label: "[STEP 1 LABEL]" },
  { num: "02", label: "[STEP 2 LABEL]" },
  { num: "03", label: "[STEP 3 LABEL]" },
  { num: "04", label: "[STEP 4 LABEL]" },
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
            <div className="text-eyebrow uppercase text-cream/60 mb-4">[EYEBROW LABEL]</div>
            <h2 className="text-h2-sm font-medium">[CONTROL SECTION HEADING]</h2>
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
                  {tab.soon && <span className="ml-1.5 text-[9px] opacity-50 align-super">[SOON]</span>}
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
