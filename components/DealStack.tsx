"use client";
import { useEffect, useState } from "react";

// illustrative sample rooms — not real Otlo data — showing brands the kind
// of room-intelligence preview they'd see before sponsoring a gathering
const DEALS = [
  {
    id: "Room #4,294",
    name: "Tuesday Run Club",
    fit: 94,
    reach: { value: "2,400", sub: "followers · Bandra" },
    verified: { value: "34", sub: "regulars · weekly" },
    age: "26",
    returnRate: "61%",
  },
  {
    id: "Room #4,301",
    name: "Founders' Table",
    fit: 88,
    reach: { value: "900", sub: "followers · Koramangala" },
    verified: { value: "18", sub: "invite-only · weekly" },
    age: "31",
    returnRate: "74%",
  },
  {
    id: "Room #4,318",
    name: "Night Market Collective",
    fit: 91,
    reach: { value: "6,100", sub: "followers · Indiranagar" },
    verified: { value: "120", sub: "attendees · weekend" },
    age: "24",
    returnRate: "48%",
  },
  {
    id: "Room #4,322",
    name: "Supper Club",
    fit: 97,
    reach: { value: "1,200", sub: "followers · HSR Layout" },
    verified: { value: "12", sub: "seats · always full" },
    age: "29",
    returnRate: "83%",
  },
  {
    id: "Room #4,340",
    name: "Creator Meetup",
    fit: 90,
    reach: { value: "8,500", sub: "followers · Andheri" },
    verified: { value: "60", sub: "regulars · monthly" },
    age: "23",
    returnRate: "55%",
  },
];

const OFFSETS = [
  { scale: 1, y: 12, z: 3 },
  { scale: 0.96, y: -14, z: 2 },
  { scale: 0.92, y: -40, z: 1 },
];

/** Auto-cycling 3-card stack: front card slides out and is retired, the
 * remaining two shift forward, a new one fades in behind — advances every
 * 4s, or immediately (with timer reset) on click. Each card is a fuller
 * room-intelligence preview: verified turnout set against vanity reach. */
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
    <div className="relative mx-auto w-full h-[300px] max-w-deal cursor-pointer" onClick={advance}>
      {visible.map((deal, i) => (
        <div
          key={`${start}-${i}`}
          className="absolute inset-x-0 top-0 rounded-2xl border border-border bg-white shadow-deal-stack transition-all duration-500 ease-out overflow-hidden"
          style={{
            transform: `translateY(${OFFSETS[i].y}px) scale(${OFFSETS[i].scale})`,
            zIndex: OFFSETS[i].z,
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <span className="text-body-sm text-muted">
              {deal.id} — <span className="text-charcoal font-medium">{deal.name}</span>
            </span>
            <span className="flex items-center gap-1.5 text-body-sm text-muted">
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-positive" />
              Fit Score: {deal.fit}
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4">
            <div>
              <div className="text-eyebrow uppercase text-muted mb-2">Instagram reach</div>
              <div className="text-h2-sm font-medium">{deal.reach.value}</div>
              <div className="text-body-sm text-muted mt-1">{deal.reach.sub}</div>
            </div>
            <span className="text-muted">→</span>
            <div>
              <div className="text-eyebrow uppercase text-muted mb-2">Verified turnout</div>
              <div className="text-h2-sm font-medium text-positive">{deal.verified.value}</div>
              <div className="text-body-sm text-muted mt-1">{deal.verified.sub}</div>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-3 bg-stone/50 text-body-sm">
            <span className="text-muted">
              Avg age <span className="text-charcoal font-medium">{deal.age}</span>
            </span>
            <span className="text-muted">
              Return rate <span className="text-positive font-medium">{deal.returnRate}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
