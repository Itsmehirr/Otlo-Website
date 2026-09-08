type Props = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  aspect?: string; // e.g. "4 / 5"
};

/** Generic media placeholder: identical box (dimensions/aspect-ratio) to the
 * source asset it replaces, with a diagonal-stripe fill and a bracketed
 * label — never the real image/video. */
export default function Placeholder({ label, className = "", style, aspect }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-stone border border-border text-muted text-[11px] tracking-wide text-center px-2 ${className}`}
      style={{
        aspectRatio: aspect,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(29,27,24,.05) 0px, rgba(29,27,24,.05) 8px, transparent 8px, transparent 16px)",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
