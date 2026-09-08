"use client";
import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";
import { TESTIMONIAL_AVATARS, TESTIMONIAL_BG } from "@/lib/stock-media";

// ILLUSTRATIVE placeholder testimonials — Otlo is pre-launch and has no real
// customer quotes yet. Swap every line for a real, attributed quote before
// this ships publicly; do not launch with these as-is.
const TESTIMONIALS = [
  {
    quote: "The WhatsApp cap hit right when our Saturday attendance did. Now the room remembers who came three weeks running — I don't have to.",
    name: "[PLACEHOLDER NAME]",
    meta: "Run Club Founder · Bandra",
  },
  {
    quote: "We run the same format in four cities now. City two started from zero. City four didn't.",
    name: "[PLACEHOLDER NAME]",
    meta: "Network Builder · Multi-city",
  },
  {
    quote: "My community used to live in my DMs. It's mine now — the list, the data, all of it.",
    name: "[PLACEHOLDER NAME]",
    meta: "Creator Collective · Mumbai",
  },
  {
    quote: "Forty chapters, one dashboard. I used to find out a chapter was struggling a year too late.",
    name: "[PLACEHOLDER NAME]",
    meta: "Alumni Association · Pan-India",
  },
];

/** Testimonial rotator over a background image: auto-advances every 5s,
 * restarts that timer on manual avatar click, crossfades quote/role via
 * stacked absolutely-positioned spans (opacity + blur + scale). */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  function select(i: number) {
    setActive(i);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
  }

  return (
    <div className="relative min-h-[85vh] max-600:min-h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Placeholder label="[IMAGE TESTIMONIAL BG]" seed={TESTIMONIAL_BG} className="w-full h-full rounded-none" />
      </div>
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="relative z-10 max-w-testimonial mx-auto px-6 text-center">
        <div className="relative h-[140px] max-600:h-[180px]">
          {TESTIMONIALS.map((t, i) => (
            <span
              key={i}
              className="absolute inset-0 flex items-center justify-center text-quote font-normal text-cream transition-all duration-500"
              style={{
                opacity: active === i ? 1 : 0,
                position: active === i ? "relative" : "absolute",
                filter: active === i ? "blur(0)" : "blur(4px)",
                transform: active === i ? "scale(1)" : "scale(.98)",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </span>
          ))}
        </div>
        <div className="relative h-6 mt-6">
          {TESTIMONIALS.map((t, i) => (
            <span
              key={i}
              className="absolute inset-0 flex items-center justify-center text-body-sm text-cream/70 transition-opacity duration-500 delay-100"
              style={{ opacity: active === i ? 1 : 0 }}
            >
              {t.name} — {t.meta}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              aria-label={`[TESTIMONIAL_${i + 1}_AVATAR]`}
              className="w-8 h-8 rounded-full overflow-hidden border transition-colors"
              style={{ borderColor: active === i ? "#FFFFFF" : "rgba(255,255,255,.3)" }}
            >
              <Placeholder label="" seed={TESTIMONIAL_AVATARS[i]} sizes="32px" className="w-full h-full rounded-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
