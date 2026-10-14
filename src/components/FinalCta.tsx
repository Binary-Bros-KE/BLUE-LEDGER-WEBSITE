import { Play } from "lucide-react";
import { ContactButton } from "./ContactModal";
import { Container } from "./Container";
import { PlaceholderImage } from "./PlaceholderImage";

export function FinalCta({ logoSrc }: { logoSrc: string }) {
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
          A 30-day free trial, arranged with the Blue Ledger team. Tell us about your counter, check your devices and agree the setup steps. No card required.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ContactButton intent="trial" className="inline-flex items-center gap-2.5 bg-navy px-10 py-4.5 text-sm font-extrabold tracking-[0.1em] text-cream shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-navy-deep">
            <Play className="size-4" aria-hidden="true" />
            ARRANGE FREE TRIAL
          </ContactButton>
          <ContactButton intent="demo" className="border-[1.5px] border-white/60 px-10 py-4.5 text-sm font-bold tracking-[0.1em] text-white transition hover:border-white hover:bg-white/12">
            BOOK A DEMO
          </ContactButton>
        </div>
      </Container>
    </div>
  );
}
