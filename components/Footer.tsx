import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-content mx-auto px-6 py-section-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-muted">
      <Image src="/logo.svg" alt="Otlo" width={287} height={132} className="h-5 w-auto invert" />
      <div className="flex items-center gap-6">
        <Link href="/terms" className="hover:text-charcoal transition-colors">
          [FOOTER LINK TERMS]
        </Link>
        <Link href="/privacy" className="hover:text-charcoal transition-colors">
          [FOOTER LINK PRIVACY]
        </Link>
      </div>
      <div>[FOOTER COPYRIGHT LINE]</div>
    </footer>
  );
}
