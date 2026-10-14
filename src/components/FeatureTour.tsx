import Link from "next/link";
import { Check } from "lucide-react";
import { FEATURE_GROUPS, type FeatureGroup } from "@/lib/features";
import { Container } from "./Container";
import { DashedPill } from "./DashedPill";
import { ScreenshotFigure } from "./ScreenshotFigure";

const TOPIC_LINKS: Record<string, { href: string; label: string }> = {
  inventory: { href: "/inventory-management", label: "Explore inventory management" },
  "multi-branch": { href: "/multi-branch-pos", label: "Explore multi-branch POS" },
  "mobile-app": { href: "/mobile-pos", label: "Explore mobile POS" },
};

function FeatureBlock({ group, index }: { group: FeatureGroup; index: number }) {
  const Icon = group.icon;
  const flip = index % 2 === 1;
  const shadow = flip
    ? "shadow-[-10px_10px_0_rgba(22,32,74,0.10)]"
    : "shadow-[10px_10px_0_rgba(22,32,74,0.10)]";
  const rotate = flip ? "rotate-2" : "-rotate-2";

  const imgWidth = group.image.width ?? 1366;
  const imgHeight = group.image.height ?? 768;
  const portrait = imgHeight > imgWidth;

  return (
    <section
      id={group.id}
      className={`flex scroll-mt-24 flex-col items-start gap-8 lg:flex-row lg:gap-16 ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Title + short explainer + the feature image, in one column */}
      <div className="min-w-0 flex-1 lg:max-w-[440px]">
        <DashedPill tone={group.tone} className={rotate}>
          <Icon className="size-3.5" aria-hidden="true" />
          {group.num} &middot; {group.kicker}
        </DashedPill>
        <h3 className="mt-5 font-display text-[26px] leading-[1.15] sm:text-[32px]">{group.title}</h3>
        <p className="mt-4 text-[15px] leading-[1.8] text-navy/75">{group.tagline}</p>
        {TOPIC_LINKS[group.id] && (
          <Link href={TOPIC_LINKS[group.id].href} prefetch={false} className="mt-4 inline-block text-sm font-bold text-blue underline underline-offset-4">{TOPIC_LINKS[group.id].label} &rarr;</Link>
        )}

        <div
          className={`mt-6 w-full border border-navy/20 bg-white ${shadow} ${
            portrait ? "max-w-[240px]" : "max-w-[360px]"
          }`}
        >
          <ScreenshotFigure
            src={group.image.src}
            alt={group.image.alt}
            width={imgWidth}
            height={imgHeight}
            caption={group.tagline}
            sizes={portrait ? "240px" : "(min-width: 410px) 360px, calc(100vw - 50px)"}
            className="p-2"
          />
        </div>
      </div>

      {/* What's in it — the detail points */}
      <ul className="min-w-0 flex-1 list-none border-t border-dashed border-navy/25">
        {group.points.map((point) => (
          <li key={point.title} className="border-b border-dashed border-navy/25 py-4">
            <div className="flex items-start gap-3">
              <Check className="mt-1 size-4 flex-none text-green" aria-hidden="true" />
              <div>
                <div className="text-[14.5px] font-bold tracking-tight text-navy">{point.title}</div>
                <p className="mt-1 text-[13.5px] leading-[1.75] text-navy/70">{point.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The full product tour — one block per feature group: title, short explainer
 * and image in the left column, detail points in the right. Used on /features. */
export function FeatureTour() {
  return (
    <div className="px-6 py-16 sm:px-8 md:py-20">
      <Container className="flex flex-col gap-20 md:gap-24">
        {FEATURE_GROUPS.map((group, index) => (
          <FeatureBlock key={group.id} group={group} index={index} />
        ))}
      </Container>
    </div>
  );
}
