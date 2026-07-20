import { Play } from "lucide-react";
import { Container } from "./Container";
import { PlaceholderImage } from "./PlaceholderImage";

export function FinalCta({ logoSrc, demoHref }: { logoSrc: string; demoHref: string }) {
  return (
    <div id="cta" className="relative overflow-hidden bg-blue px-6 py-24 text-center text-white sm:px-8 md:py-28">
      <div className="bg-grid-white pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container size="xs" className="relative">
        <PlaceholderImage src={logoSrc} alt="" width={72} height={72} label="Logo" className="mx-auto mb-7 size-18" />

        <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[1]">
          READY TO OPEN
          <br />
          THE LEDGER?
        </h2>

        <p className="mx-auto mt-6 max-w-[520px] text-base leading-[1.7] text-white/85">
          Free for 30 days. No card, no contract — just a faster counter by this time tomorrow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={demoHref}
            className="inline-flex items-center gap-2.5 bg-navy px-10 py-4.5 text-sm font-extrabold tracking-[0.1em] text-cream shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-navy-deep"
          >
            <Play className="size-4" aria-hidden="true" />
            START FREE TRIAL
          </a>
          <a
            href={demoHref}
            className="border-[1.5px] border-white/60 px-10 py-4.5 text-sm font-bold tracking-[0.1em] text-white transition hover:border-white hover:bg-white/12"
          >
            BOOK A DEMO
          </a>
        </div>
      </Container>
    </div>
  );
}
