"use client";
import { useEffect, useState } from "react";

// illustrative sample rooms — not real Otlo data — showing brands the kind
// of room they'd see when browsing sponsorship-ready gatherings
const DEALS = [
  { title: "Tuesday Run Club — Bandra", stat: "34 regulars" },
  { title: "Founders' Table — Koramangala", stat: "18, invite-only" },
  { title: "Night Market Collective — Indiranagar", stat: "120 / weekend" },
  { title: "Supper Club — HSR Layout", stat: "12 seats, always full" },
  { title: "Creator Meetup — Andheri", stat: "60 regulars" },
];

const OFFSETS = [
  { scale: 1, y: 12, z: 3 },
  { scale: 0.96, y: -14, z: 2 },
  { scale: 0.92, y: -40, z: 1 },
];

/** Auto-cycling 3-card stack: front card slides out and is retired, the
 * remaining two shift forward, a new one fades in behind — advances every
 * 4s, or immediately (with timer reset) on click. */
export default function DealStack() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % DEALS.length), 4000);
    return () => clearInterval(id);
  }, []);

  function advance() {
    setStart((s) => (s + 1) % DEALS.length);
  }

  const visible = [0, 1, 2].map((i) => DEALS[(start + i) % DEALS.length]);

  return (
    <div className="relative mx-auto h-[220px] max-w-deal cursor-pointer" onClick={advance}>
      {visible.map((deal, i) => (
        <div
          key={`${start}-${i}`}
          className="absolute inset-x-0 rounded-2xl border border-border bg-white p-5 shadow-deal-stack transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${OFFSETS[i].y}px) scale(${OFFSETS[i].scale})`,
            zIndex: OFFSETS[i].z,
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-positive" />
            <span className="font-mono text-mono-xs text-muted">LIVE</span>
          </div>
          <div className="text-body-sm font-medium mb-2">{deal.title}</div>
          <div className="font-mono text-mono-md text-positive">{deal.stat}</div>
        </div>
      ))}
    </div>
  );
}
