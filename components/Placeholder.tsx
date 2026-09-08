import Image from "next/image";
import { picsum } from "@/lib/stock-media";

type Props = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  aspect?: string; // e.g. "4 / 5"
  /** Lorem Picsum seed (see lib/stock-media.ts) — when given, renders a real
   * stock photo filling the box instead of the striped label placeholder. */
  seed?: string;
  priority?: boolean;
  /** Rendered box width hint, so next/image doesn't fetch a full-bleed-sized
   * srcset for a small tile (e.g. a marquee thumbnail or an avatar). */
  sizes?: string;
};

/** Media slot: identical box (dimensions/aspect-ratio) to the source asset it
 * replaces. With a `seed`, fills it with a real stock photo (object-cover);
 * without one, falls back to a labeled placeholder — still never the
 * source's own image. */
export default function Placeholder({ label, className = "", style, aspect, seed, priority, sizes }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        seed ? "bg-stone" : "bg-stone border border-border text-muted text-[11px] tracking-wide text-center px-2"
      } ${className}`}
      style={{
        aspectRatio: aspect,
        backgroundImage: seed
          ? undefined
          : "repeating-linear-gradient(135deg, rgba(29,27,24,.05) 0px, rgba(29,27,24,.05) 8px, transparent 8px, transparent 16px)",
        ...style,
      }}
    >
      {seed ? (
        <Image
          src={picsum(seed, 1200, 1200)}
          alt=""
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className="object-cover"
          priority={priority}
        />
      ) : (
        label
      )}
    </div>
  );
}
