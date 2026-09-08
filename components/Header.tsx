"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { href: "#how", label: "[NAV 1]" },
  { href: "#deal", label: "[NAV 2]" },
  { href: "#niches", label: "[NAV 3]" },
  { href: "#pricing", label: "[NAV 4]" },
];

/** Sticky pill header. Logo/nav swap between a "on video" light variant and a
 * "scrolled" cream variant based on a single boolean, toggled by an
 * IntersectionObserver watching a sentinel placed 15% into the hero — the
 * same single threshold the source uses (no per-section variant logic). */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("header-trigger");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setScrolled(true);
        } else if (entry.isIntersecting) {
          setScrolled(false);
        }
      },
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center gap-1 rounded-pill px-2 py-2 max-w-[calc(100vw-32px)] transition-colors duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur shadow-nav-scrolled border border-border"
            : "bg-charcoal/30 backdrop-blur border border-white/10"
        }`}
      >
        <Link
          href="/"
          className={`px-3 text-nav font-medium whitespace-nowrap ${scrolled ? "text-charcoal" : "text-cream"}`}
        >
          [LOGO]
        </Link>
        <div
          className={`hidden sm:flex items-center overflow-hidden whitespace-nowrap transition-[max-width] duration-300 ${
            scrolled ? "max-w-0" : "max-w-[400px]"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-pill px-3 py-2 text-nav whitespace-nowrap transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-stone"
                  : "text-cream/90 hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <MagneticButton
          href="/signup"
          variant={scrolled ? "dark" : "light"}
          className="!px-5 !py-2.5 text-[13px] whitespace-nowrap"
        >
          <span className="max-600:hidden">[CTA LONG]</span>
          <span className="hidden max-600:inline">[CTA SHORT]</span>
        </MagneticButton>
      </nav>
    </header>
  );
}
