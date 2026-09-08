import Placeholder from "./Placeholder";

const IMAGES = Array.from({ length: 7 }, (_, i) => `[GALLERY_IMG_${i + 1}]`);

/** Infinite horizontal marquee: a single flex row containing the 7 images
 * twice back-to-back, translated by exactly -50% on a linear infinite
 * keyframe — the standard seamless-loop equivalent of the source's
 * JS modulo-wrap tween, without a scroll dependency or a library. */
export default function ImageMarquee() {
  const doubled = [...IMAGES, ...IMAGES];
  return (
    <div className="overflow-hidden py-section-sm">
      <div
        className="flex w-max gap-4"
        style={{ animation: "marquee-scroll 40s linear infinite" }}
      >
        {doubled.map((label, i) => (
          <Placeholder
            key={i}
            label={label}
            className="shrink-0 w-[320px] h-[400px] max-960:w-[260px] max-960:h-[340px] max-600:w-[200px] max-600:h-[260px] rounded-lg max-960:rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
