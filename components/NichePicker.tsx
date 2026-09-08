"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

// 12 community/event formats, with average turnout instead of the source's
// resale price label
const CHIPS = [
  { name: "Run Club", turnout: 40 },
  { name: "Supper Club", turnout: 12 },
  { name: "Book Club", turnout: 15 },
  { name: "Founder Circle", turnout: 25 },
  { name: "Creator Meetup", turnout: 60 },
  { name: "Alumni Chapter", turnout: 80 },
  { name: "Hobby Collective", turnout: 30 },
  { name: "Night Market", turnout: 120 },
  { name: "Wellness Circle", turnout: 20 },
  { name: "Art Salon", turnout: 35 },
  { name: "Music Collective", turnout: 50 },
  { name: "Professional Mixer", turnout: 70 },
];

// stand-in for the source's ~25-item local search list — more specific
// formats a builder might type instead of picking a chip
const SEARCH_POOL = [
  "Pottery Circle", "Trail Running Crew", "Poker Night", "Film Club", "Chess Club",
  "Language Exchange", "Board Game Night", "Cycling Club", "Wine Tasting Circle",
  "Founders Breakfast", "Standup Open Mic", "Photography Walk", "Startup Demo Night",
  "Climbing Crew", "Cooking Class Series", "Vinyl Listening Club", "Writers' Room",
  "Surf Club", "Dance Social", "Investor Roundtable", "Meditation Circle",
  "Yoga Collective", "Design Critique Night", "Coding Bootcamp Alumni", "Skate Crew",
];

type Stage = "default" | "scanning" | "result";

export default function NichePicker() {
  const [stage, setStage] = useState<Stage>("default");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [result, setResult] = useState<{ count: number; responseHrs: number } | null>(null);
  const revealRef = useReveal<HTMLDivElement>();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const matches = SEARCH_POOL.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
    return matches.slice(0, 4);
  }, [query]);

  function submitNiche(name: string) {
    setSubmitted(name);
    setStage("scanning");
    setTimeout(() => {
      setResult({
        count: 20 + Math.floor(Math.random() * 80),
        responseHrs: 2 + Math.floor(Math.random() * 10),
      });
      setStage("result");
    }, 2800);
  }

  function reset() {
    setStage("default");
    setResult(null);
    setQuery("");
  }

  return (
    <div ref={revealRef} className="reveal-group max-w-content mx-auto px-6 py-section-sm text-center">
      <div className="reveal text-eyebrow uppercase text-muted mb-4">The marketplace</div>
      <h2 className="reveal text-h2-sm font-medium mb-10 max-w-[600px] mx-auto">
        Everything the night needs, in the city you&rsquo;re in.
      </h2>

      {stage === "default" && (
        <div className="reveal">
          <div className="flex flex-wrap justify-center gap-2.5 max-960:gap-2 max-600:gap-1.5 mb-8">
            {CHIPS.map((chip, i) => (
              <button
                key={chip.name}
                onClick={() => submitNiche(chip.name)}
                className="reveal rounded-pill border border-border bg-white px-4 py-2 text-body-sm hover:border-charcoal transition-colors"
                style={{ ["--i" as string]: i }}
              >
                {chip.name}{" "}
                <span className="font-mono text-mono-xs text-muted ml-1">~{chip.turnout}</span>
              </button>
            ))}
          </div>

          <div className="relative max-w-niche-search mx-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submitNiche(query.trim() || "your format");
              }}
              placeholder="Search your format"
              className="w-full rounded-pill border border-border bg-white px-5 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
            />
            <button
              onClick={() => submitNiche(query.trim() || "your format")}
              className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square rounded-full bg-charcoal text-cream flex items-center justify-center"
              aria-label="Search"
            >
              →
            </button>
            {suggestions.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 flex flex-wrap justify-center gap-2 z-10">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => submitNiche(s)}
                    className="rounded-pill border border-border bg-white px-3 py-1.5 text-body-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {stage === "scanning" && (
        <div className="max-w-niche-search mx-auto">
          <div className="text-body-sm text-muted mb-4">Finding vendors for {submitted} near you</div>
          <div className="h-1 rounded-pill bg-stone overflow-hidden">
            <div
              className="h-full bg-charcoal rounded-pill"
              style={{ width: "100%", transition: "width 2.5s cubic-bezier(.4,0,.2,1)" }}
            />
          </div>
        </div>
      )}

      {stage === "result" && result && (
        <div className="max-w-niche-search mx-auto">
          <div className="text-body-sm text-muted mb-2">Ready for {submitted}</div>
          <div className="text-h2-sm font-medium mb-1">{result.count} vendors near you</div>
          <div className="font-mono text-mono-md text-positive mb-6">~{result.responseHrs}hr avg reply time</div>
          <div className="flex items-center justify-center gap-3">
            <Link
              href={{ pathname: "/signup", query: { format: submitted } }}
              className="rounded-pill bg-charcoal text-cream px-6 py-3 text-nav font-medium"
            >
              Start your room
            </Link>
            <button onClick={reset} className="text-body-sm text-muted underline">
              Search another format
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
