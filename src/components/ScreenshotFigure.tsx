import { IMAGE_ASSETS } from "@/lib/imageAssets";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ScreenshotPreview } from "@/components/ScreenshotPreview";

const FOCUS: Record<string, { x: number; y: number; width: number; height: number }> = {
  "/screenshots/receipts.png": { x: 320, y: 128, width: 1008, height: 590 },
  "/screenshots/inventory.png": { x: 330, y: 345, width: 980, height: 290 },
  "/screenshots/sales_report.png": { x: 330, y: 230, width: 980, height: 410 },
};

// Cropped thumbnails render the source wider than the visible frame.
function sourceSizes(sizes: string, scale: number) {
  return sizes.split(",").map(part => {
    const [, media = "", length] = part.trim().match(/^(\([^)]*\)\s+)?(.+)$/)!;
    const expression = length.startsWith("calc(") ? length.slice(5, -1) : length;
    return `${media}calc((${expression}) * ${scale.toFixed(4)})`;
  }).join(", ");
}

export function ScreenshotFigure({ src, alt, caption, width = 1366, height = 768, sizes, className = "", dark = false }: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  sizes: string;
  className?: string;
  dark?: boolean;
}) {
  const asset = IMAGE_ASSETS[src];
  const sourceWidth = asset?.width ?? width;
  const sourceHeight = asset?.height ?? height;
  const crop = src.startsWith("/screenshots/") && asset
    ? FOCUS[src] ?? { x: 280, y: 24, width: sourceWidth - 295, height: sourceHeight - 64 }
    : undefined;
  const image = (
    <div className="relative overflow-hidden bg-cream-dark" style={{ aspectRatio: crop ? `${crop.width} / ${crop.height}` : `${sourceWidth} / ${sourceHeight}` }}>
      <PlaceholderImage
        src={src}
        alt={alt}
        width={sourceWidth}
        height={sourceHeight}
        label={alt}
        sizes={crop ? sourceSizes(sizes, sourceWidth / crop.width) : sizes}
        placeholder="blur"
        className={crop ? "absolute max-w-none" : "h-auto w-full"}
        style={crop ? { width: `${sourceWidth / crop.width * 100}%`, height: "auto", left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%` } : undefined}
      />
    </div>
  );
  return (
    <figure className={className}>
      <ScreenshotPreview src={asset?.src ?? src} width={sourceWidth} height={sourceHeight} alt={alt} caption={caption}>{image}</ScreenshotPreview>
      <figcaption className={`mt-4 text-[13px] leading-[1.75] ${dark ? "text-cream/85" : "text-navy/80"}`}>{caption}</figcaption>
    </figure>
  );
}
