"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { href: "#how", label: "Communities" },
  { href: "#deal", label: "Brands" },
  { href: "#niches", label: "Events" },
  { href: "#pricing", label: "About" },
];

/** Sticky pill header. The pill stays the same transparent "on video" look
 * at all times — only the nav links collapse away once scrolled (tracked via
 * an IntersectionObserver on a sentinel placed 15% into the hero), leaving
 * just the logo + CTA. */
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
      <nav className="flex items-center gap-1 rounded-pill px-2 py-2 max-w-[calc(100vw-32px)] bg-charcoal/30 backdrop-blur border border-white/10">
        <Link href="/" className="pl-3 pr-3 flex items-center">
          <Image src="/logo.svg" alt="Otlo" width={287} height={132} priority className="h-6 w-auto" />
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
              className="rounded-pill px-3 py-2 text-nav whitespace-nowrap text-cream/90 hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <MagneticButton href="/signup" variant="light" className="!px-5 !py-2.5 text-[13px] whitespace-nowrap">
          Sign In
        </MagneticButton>
      </nav>
    </header>
  );
}
