"use client";
import Placeholder from "./Placeholder";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  eyebrow: string;
  lines: [string, string];
  body: string;
  seed: string;
};

/** Full-viewport editorial statement over a background photo — eyebrow, a
 * big two-line display headline, and a supporting paragraph, matching the
 * source's full-height stats-band treatment (background image + dark
 * overlay + substantial centered content) rather than sitting as a bare
 * text-only beat between sections. */
export default function Statement({ eyebrow, lines, body, seed }: Props) {
  const ref = useReveal<HTMLDivElement>(0.3);
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Placeholder label="[IMAGE STATEMENT BG]" seed={seed} className="w-full h-full rounded-none" />
      </div>
      <div className="absolute inset-0 bg-charcoal/70" />
      <div ref={ref} className="reveal-group relative z-10 max-w-content mx-auto px-6 py-section-lg text-center">
        <div className="reveal text-eyebrow uppercase text-cream/70 mb-6">{eyebrow}</div>
        <p className="reveal text-display font-medium leading-[1.1] text-cream" style={{ ["--i" as string]: 1 }}>
          {lines[0]}
          <br />
          {lines[1]}
        </p>
        <p
          className="reveal text-body-sm text-cream/75 max-w-[560px] mx-auto mt-8"
          style={{ ["--i" as string]: 2 }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
