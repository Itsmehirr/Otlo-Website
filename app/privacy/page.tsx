import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-legal mx-auto px-6 py-24">
      <Link href="/" className="text-body-sm text-muted mb-10 inline-block">
        ← [BACK TO HOME]
      </Link>
      <h1 className="text-h2-sm font-medium mb-8">[PRIVACY PAGE HEADING]</h1>
      <div className="flex flex-col gap-6 text-body-sm text-muted">
        <p>[LEGAL PARAGRAPH 1]</p>
        <p>[LEGAL PARAGRAPH 2]</p>
        <h2 className="text-charcoal font-medium mt-4">[LEGAL SUBHEADING 1]</h2>
        <p>[LEGAL PARAGRAPH 3]</p>
        <h2 className="text-charcoal font-medium mt-4">[LEGAL SUBHEADING 2]</h2>
        <p>[LEGAL PARAGRAPH 4]</p>
      </div>
    </main>
  );
}
