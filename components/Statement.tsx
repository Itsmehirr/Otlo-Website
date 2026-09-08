"use client";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  eyebrow: string;
  lines: [string, string];
};

/** Standalone editorial statement: eyebrow + a big two-line display headline,
 * no supporting body copy — a beat of emphasis between sections. */
export default function Statement({ eyebrow, lines }: Props) {
  const ref = useReveal<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="reveal-group max-w-content mx-auto px-6 py-section-lg max-960:py-section-md text-center">
      <div className="reveal text-eyebrow uppercase text-muted mb-6">{eyebrow}</div>
      <p className="reveal text-display font-medium leading-[1.1]" style={{ ["--i" as string]: 1 }}>
        {lines[0]}
        <br />
        {lines[1]}
      </p>
    </div>
  );
}
