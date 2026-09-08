"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

// placeholder prices preserve the source's 2-digit format ($29/$49/$99)
// without reproducing the real figures
const PLANS = [
  { name: "[PLAN 1 NAME]", price: "$[PRICE 1]", features: ["[FEATURE 1 1]", "[FEATURE 1 2]", "[FEATURE 1 3]"], popular: false },
  { name: "[PLAN 2 NAME]", price: "$[PRICE 2]", features: ["[FEATURE 2 1]", "[FEATURE 2 2]", "[FEATURE 2 3]", "[FEATURE 2 4]"], popular: true },
  { name: "[PLAN 3 NAME]", price: "$[PRICE 3]", features: ["[FEATURE 3 1]", "[FEATURE 3 2]", "[FEATURE 3 3]"], popular: false },
];

export default function PricingSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div id="pricing" ref={revealRef} className="reveal-group max-w-content mx-auto px-6 py-section-md scroll-mt-24">
      <div className="reveal text-center mb-14">
        <div className="text-eyebrow uppercase text-muted mb-4">[EYEBROW LABEL]</div>
        <h2 className="text-h2-sm font-medium">[PRICING SECTION HEADING]</h2>
      </div>
      <div className="grid grid-cols-3 max-600:grid-cols-1 gap-4">
        {PLANS.map((plan, i) => (
          <div
            key={plan.name}
            className={`reveal rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-[3px] ${
              plan.popular
                ? "bg-charcoal text-cream border-charcoal shadow-popular hover:shadow-popular-hover"
                : "bg-white text-charcoal border-border hover:shadow-card"
            }`}
            style={{ ["--i" as string]: i }}
          >
            {plan.popular && (
              <div className="text-eyebrow uppercase text-cream/70 mb-3">[MOST POPULAR BADGE]</div>
            )}
            <div className={`text-nav font-medium mb-2 ${plan.popular ? "text-cream" : ""}`}>{plan.name}</div>
            <div className="font-mono text-mono-lg mb-6">
              {plan.price}
              <span className={`text-body-sm font-sans ${plan.popular ? "text-cream/60" : "text-muted"}`}>
                [PER MONTH SUFFIX]
              </span>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`text-body-sm flex items-center gap-2 ${plan.popular ? "text-cream/80" : "text-muted"}`}
                >
                  <span className="text-positive">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className={`block text-center rounded-pill px-6 py-3 text-nav font-medium transition-colors ${
                plan.popular ? "bg-cream text-charcoal" : "bg-charcoal text-cream"
              }`}
            >
              [PLAN CTA LABEL]
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
