import Image from "next/image";
import { ImageIcon } from "lucide-react";

/**
 * Renders the real image once `src` is filled in; until then, shows a labeled
 * dashed placeholder (in the brand's ledger-dashed-line style) so it's obvious
 * where to drop the file and what it should be.
 */
export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`flex w-full flex-col items-center justify-center gap-2.5 border-2 border-dashed border-navy/25 bg-cream-dark p-6 text-center ${className}`}
    >
      <ImageIcon className="size-8 text-navy/30" aria-hidden="true" strokeWidth={1.5} />
      <p className="max-w-[85%] text-xs font-semibold tracking-[0.06em] text-navy/55 uppercase">{label}</p>
    </div>
  );
}
