"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

// Plan names and features are real; prices stay placeholders — Otlo's actual
// pricing is marked [OPEN]/undecided in the brand doc (charge the side with
// money, keep the builder tier a genuinely usable free/low entry point).
const PLANS = [
  {
    name: "Starter",
    price: "$[PRICE 1]",
    features: ["One room, no member ceiling", "Community Discovery", "Basic event intelligence"],
    popular: false,
  },
  {
    name: "Host",
    price: "$[PRICE 2]",
    features: ["Everything in Starter", "Member intelligence", "Engagement tools", "Marketplace access"],
    popular: true,
  },
  {
    name: "Network",
    price: "$[PRICE 3]",
    features: ["Everything in Host", "Event IP", "Multi-city replication", "Brand & sponsorship tools"],
    popular: false,
  },
];

export default function PricingSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div id="pricing" ref={revealRef} className="reveal-group max-w-content mx-auto px-6 py-section-md scroll-mt-24">
      <div className="reveal text-center mb-14">
        <div className="text-eyebrow uppercase text-muted mb-4">Pricing</div>
        <h2 className="text-h2-sm font-medium max-w-[500px] mx-auto">
          Charge the side with money. Serve the side without it.
        </h2>
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
              <div className="text-eyebrow uppercase text-cream/70 mb-3">Most builders start here</div>
            )}
            <div className={`text-nav font-medium mb-2 ${plan.popular ? "text-cream" : ""}`}>{plan.name}</div>
            <div className="font-mono text-mono-lg mb-6">
              {plan.price}
              <span className={`text-body-sm font-sans ${plan.popular ? "text-cream/60" : "text-muted"}`}>
                /mo
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
              Get early access
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
