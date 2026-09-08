function AppleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.462 2.15-1.21 2.94-.83.87-2.13 1.55-3.11 1.47-.14-1.09.45-2.24 1.19-2.99.85-.88 2.27-1.53 3.13-1.42zM20.85 17.13c-.44 1.02-.65 1.47-1.22 2.37-.79 1.26-1.9 2.83-3.28 2.85-1.22.02-1.54-.79-3.2-.78-1.65.01-2 .8-3.23.78-1.38-.03-2.44-1.44-3.23-2.7-2.21-3.5-2.44-7.6-1.08-9.79.97-1.55 2.5-2.46 3.93-2.46 1.47 0 2.4.82 3.61.82 1.18 0 1.9-.82 3.61-.82 1.28 0 2.63.7 3.6 1.9-3.16 1.73-2.65 6.25.29 7.83z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.3c-.35.35-.55.87-.55 1.53v16.34c0 .66.2 1.18.55 1.53l.09.08 9.15-9.15v-.2L3.69 2.22z" opacity="0.75" />
      <path d="M15.75 14.06l-3.06-3.06v-.2l3.06-3.06.07.04 3.62 2.06c1.03.59 1.03 1.55 0 2.14l-3.62 2.06z" />
      <path d="M15.82 14.02l-3.13-3.12L3.69 21.75c.34.36.9.4 1.53.05z" />
      <path d="M15.82 5.99l-10.6-6.02c-.63-.36-1.19-.31-1.53.05l9.13 9.03z" />
    </svg>
  );
}

/** App Store / Google Play badges — generic hand-drawn glyphs (not Apple's or
 * Google's own artwork), styled as the familiar dark rounded-pill store
 * buttons. */
export default function StoreBadges() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg bg-black/80 px-3 py-1.5 text-cream">
        <AppleGlyph />
        <div className="leading-none">
          <div className="text-[8px] opacity-80">Download on the</div>
          <div className="text-[11px] font-medium -mt-0.5">App Store</div>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-black/80 px-3 py-1.5 text-cream">
        <PlayGlyph />
        <div className="leading-none">
          <div className="text-[8px] opacity-80">GET IT ON</div>
          <div className="text-[11px] font-medium -mt-0.5">Google Play</div>
        </div>
      </div>
    </div>
  );
}
