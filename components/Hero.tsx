"use client";
import { useEffect, useId, useRef } from "react";
import Placeholder from "./Placeholder";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

// approx position/size/parallax-speed for the source's 8 scattered hero photo
// tiles (hidden below 1024px). Exact source coordinates weren't capturable
// from the crawl summary; these preserve the described ranges (top/left
// spread, 120-190px tile sizes, -220 to -430px parallax speeds).
const SCATTER_PHOTOS = [
  { top: "8%", left: "3%", w: 170, h: 130, speed: -220 },
  { top: "6%", left: "80%", w: 150, h: 190, speed: -260 },
  { top: "62%", left: "1%", w: 150, h: 190, speed: -300 },
  { top: "58%", left: "88%", w: 170, h: 140, speed: -340 },
  { top: "82%", left: "20%", w: 140, h: 120, speed: -380 },
  { top: "14%", left: "40%", w: 130, h: 110, speed: -410 },
  { top: "80%", left: "62%", w: 150, h: 130, speed: -430 },
  { top: "34%", left: "92%", w: 130, h: 160, speed: -420 },
];

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const photoRefs = useRef<Array<HTMLDivElement | null>>([]);
  const badgeId = useId();

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        const fadeIn = Math.min(1, progress / 0.18);
        photoRefs.current.forEach((el, i) => {
          if (!el) return;
          el.style.transform = `translateY(${progress * SCATTER_PHOTOS[i].speed}px)`;
          el.style.opacity = String(fadeIn);
        });
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-[200vh]">
      {/* sentinel at 15% of the hero's scroll range — drives Header's scrolled state */}
      <div id="header-trigger" className="absolute left-0 w-full h-px" style={{ top: "15%" }} />

      <div className="sticky top-0 h-screen overflow-hidden rounded-b-2xl">
        {/* hero video placeholder — same "cover" oversizing box the source used
            for its third-party video embed, no iframe embedded. Dark-toned so
            the overlaid copy keeps the same contrast the real (dark, moody)
            video gives it. */}
        <div className="absolute inset-0 bg-charcoal">
          <Placeholder
            label="[VIDEO PLACEHOLDER HERO BG 16:9]"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !bg-charcoal-soft !text-cream/40 !border-charcoal-soft"
            style={{ width: "177.78vh", height: "100vh", minWidth: "100%", minHeight: "56.25vw" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(29,27,24,.82) 0%, rgba(29,27,24,.45) 40%, rgba(29,27,24,.2) 70%, rgba(29,27,24,.08) 100%)",
          }}
        />

        {/* scattered parallax photos, ≥1024px only — invisible at rest, fade
            in across the first 18% of hero scroll like the source */}
        <div className="hidden lg:block">
          {SCATTER_PHOTOS.map((p, i) => (
            <div
              key={i}
              ref={(el) => {
                photoRefs.current[i] = el;
              }}
              className="absolute"
              style={{ top: p.top, left: p.left, width: p.w, height: p.h, opacity: 0 }}
            >
              <Placeholder label={`[PHOTO_${i + 1}]`} className="w-full h-full rounded-lg shadow-photo" />
            </div>
          ))}
        </div>

        {/* rotating circular badge with curved text, ≥768px only */}
        <div className="hidden sm:flex absolute bottom-8 right-8 w-20 h-20 items-center justify-center">
          <svg viewBox="0 0 100 100" className="spin-badge w-full h-full">
            <defs>
              <path id={badgeId} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="8.5" letterSpacing="2" fill="#FAF7F4" opacity="0.8">
              <textPath href={`#${badgeId}`}>[BADGE RING TEXT] · [BADGE RING TEXT] ·</textPath>
            </text>
            <line x1="42" y1="50" x2="58" y2="50" stroke="#FAF7F4" strokeWidth="1.5" opacity="0.9" />
          </svg>
        </div>

        {/* copy */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end max-w-hero-copy px-6 sm:px-14 pb-24 sm:pb-28">
          <h1 className="text-hero font-medium text-cream mb-6">
            <span
              className="block overflow-hidden"
              style={{ animation: "word-in .8s cubic-bezier(.16,1,.3,1) .3s both" }}
            >
              [H1 HERO TITLE LINE 1]
            </span>
            <span
              className="block overflow-hidden"
              style={{ animation: "word-in .8s cubic-bezier(.16,1,.3,1) .38s both" }}
            >
              [H1 HERO TITLE LINE 2]
            </span>
          </h1>
          <p className="text-body-sm text-cream/75 max-w-[420px] mb-8">[HERO SUBHEAD SENTENCE]</p>
          <div className="flex items-center gap-5">
            <MagneticButton href="/signup" variant="light">
              [HERO CTA PRIMARY LABEL]
            </MagneticButton>
            <Link href="#how" className="text-nav text-cream/85 hover:text-cream transition-colors">
              [HERO CTA SECONDARY LABEL] →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
