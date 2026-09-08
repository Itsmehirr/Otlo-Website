"use client";
import { useRef } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

/** Button that eases toward the cursor on hover and springs back on leave,
 * with a left-to-right fill-wipe layer — reproduces the source's magnetic
 * hover buttons without any animation library. */
export default function MagneticButton({ href, children, variant = "dark", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  const base =
    variant === "dark"
      ? "bg-charcoal text-cream"
      : "bg-white text-charcoal group-hover:text-cream";

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-pill px-8 py-4 text-nav font-medium transition-transform duration-[400ms] ease-out ${base} ${className}`}
    >
      <span
        className="absolute inset-y-0 left-0 w-0 bg-charcoal-soft transition-[width] duration-500 ease-out group-hover:w-full"
        aria-hidden
      />
      <span className="relative transition-colors duration-300">{children}</span>
    </Link>
  );
}
