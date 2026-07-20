import { Play, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { DashedPill } from "./DashedPill";
import { PlaceholderImage } from "./PlaceholderImage";
import { StampCircle } from "./StampCircle";

export function Hero({ heroImageSrc, demoHref }: { heroImageSrc: string; demoHref: string }) {
  return (
    <div id="top" className="relative overflow-hidden bg-navy text-cream">
      <div className="bg-grid-cream pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative px-6 pt-16 sm:px-8 md:pt-24">
        <div className="flex flex-col items-start gap-12 md:flex-row md:gap-12">
          <div className="min-w-0 flex-1 md:max-w-[560px]">
            <DashedPill tone="gold">
              <Sparkles className="size-3.5" aria-hidden="true" />
              POINT OF SALE &middot; WORKS OFFLINE
            </DashedPill>

            <h1 className="mt-7 font-display text-[clamp(64px,9vw,118px)] leading-[0.92] tracking-tight">
              TRACK.
              <br />
              SELL.
              <br />
              GROW
              <span className="text-gold">.</span>
            </h1>

            <p className="mt-8 max-w-[480px] text-base leading-[1.7] text-cream/85 sm:text-[17px]">
              The point of sale that never asks for Wi-Fi. Blue Ledger runs on your counter &mdash; sales, inventory, receipts and your whole
              team &mdash; then syncs to the cloud when the internet comes back.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={demoHref}
                className="inline-flex items-center gap-2.5 bg-blue px-8 py-4 text-sm font-extrabold tracking-[0.1em] text-white shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-blue-press"
              >
                <Play className="size-4" aria-hidden="true" />
                START FREE TRIAL
              </a>
              <a
                href="#tour"
                className="border-[1.5px] border-cream/50 px-8 py-4 text-sm font-bold tracking-[0.1em] text-cream transition hover:border-cream hover:bg-cream/8"
              >
                SEE IT IN ACTION
              </a>
            </div>

            <div className="mt-12 mb-14 flex flex-wrap gap-6 text-xs tracking-[0.08em] text-cream/60 md:mb-0">
              <span>NO CARD REQUIRED</span>
              <span>SET UP IN 10 MINUTES</span>
            </div>
          </div>

          <div className="flex flex-1 flex-row items-center justify-center gap-6 pb-14 md:flex-none md:flex-col md:items-center md:gap-6 md:pt-6 md:pb-0">
            <StampCircle size={130} rotate="rotate-8">
              OPEN
              <br />
              SALE
            </StampCircle>
            <div className="hidden h-[120px] w-px border-l-2 border-dashed border-cream/30 md:block" />
            <div className="border border-cream/25 bg-black/20 px-5 py-4 text-xs leading-relaxed tracking-[0.08em] text-cream/80">
              <div className="font-bold text-green-lt">&bull; LOCAL MODE</div>
              <div>SQLite ready</div>
              <div>cloud sync staged</div>
            </div>
          </div>
        </div>
      </Container>

      {/* hero screenshot — bleeds into the next section */}
      <Container size="lg" className="relative px-6 sm:px-8">
        <div className="border border-cream/25 border-b-0 bg-navy-deep shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 border-b border-cream/15 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red" />
            <span className="size-2.5 rounded-full bg-gold" />
            <span className="size-2.5 rounded-full bg-green-lt" />
            <span className="ml-2.5 text-[11px] tracking-[0.12em] text-cream/50">BLUE LEDGER POS &mdash; COMMAND CENTER</span>
          </div>
          <PlaceholderImage
            src={heroImageSrc}
            alt="Blue Ledger POS dashboard — Command Center with today's sales, checkout and cloud sync status"
            width={1100}
            height={620}
            label="Dashboard screenshot (dashboard.png)"
            priority
            className="w-full"
          />
        </div>
      </Container>
    </div>
  );
}
