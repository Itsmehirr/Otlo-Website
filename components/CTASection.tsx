import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <div className="bg-charcoal text-cream rounded-2xl mx-3 max-960:mx-2 my-4">
      <div className="max-w-content mx-auto px-6 py-section-lg max-960:py-section-md text-center">
        <h2 className="text-display font-medium mb-8">[CLOSING CTA HEADING]</h2>
        <MagneticButton href="/signup" variant="light">
          [CLOSING CTA LABEL]
        </MagneticButton>
      </div>
    </div>
  );
}
