import Placeholder from "./Placeholder";
import { GALLERY_IMAGES } from "@/lib/stock-media";

const IMAGES = GALLERY_IMAGES.map((seed, i) => ({ label: `[GALLERY_IMG_${i + 1}]`, seed }));

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
        {doubled.map((img, i) => (
          <Placeholder
            key={i}
            label={img.label}
            seed={img.seed}
            sizes="(max-width: 600px) 200px, (max-width: 960px) 260px, 320px"
            className="shrink-0 w-[320px] h-[400px] max-960:w-[260px] max-960:h-[340px] max-600:w-[200px] max-600:h-[260px] rounded-lg max-960:rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
