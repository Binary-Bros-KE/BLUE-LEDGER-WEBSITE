const TONE_CLASSES = {
  gold: "border-gold text-gold",
  "gold-text": "border-gold text-gold-text",
  green: "border-green text-green",
  blue: "border-blue text-blue",
  cream: "border-cream/70 text-cream",
} as const;

/** Rotated dashed-border pill badge — the recurring "stamp" motif used for eyebrows, tags, and
 * section labels throughout the marketing site. Pass rotation via `className` (e.g. "-rotate-2"). */
export function DashedPill({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONE_CLASSES;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-[1.5px] border-dashed px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
