import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <div className="bg-charcoal text-cream rounded-2xl m-4 max-960:m-3">
      <div className="max-w-content mx-auto px-6 py-section-lg max-960:py-section-md text-center">
        <h2 className="text-display font-medium mb-8 max-w-[720px] mx-auto">
          Belonging shouldn&rsquo;t depend on a platform&rsquo;s permission.
        </h2>
        <MagneticButton href="/signup" variant="light">
          Claim your ground
        </MagneticButton>
      </div>
    </div>
  );
}
