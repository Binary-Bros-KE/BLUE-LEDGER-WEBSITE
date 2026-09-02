import { Check, Smartphone } from "lucide-react";
import { Container } from "./Container";
import { PlaceholderImage } from "./PlaceholderImage";

const POINTS = [
  {
    title: "See your shop from anywhere",
    body: "Live sales, stock, cash and pending approvals from every branch — on your phone, whether you're behind the counter or three towns away.",
  },
  {
    title: "A point of sale in your pocket",
    body: "Staff walk the shop floor with the mobile till: check live stock on any product, then ring up the sale on the spot — no trip back to a computer.",
  },
  {
    title: "Full documents, not a cut-down app",
    body: "Create sales, invoices and quotations from the phone exactly like the desktop POS — same prices, same approvals, same cloud sync.",
  },
];

export function MobileApp({ imageSrc }: { imageSrc: string }) {
  return (
    <div id="mobile" className="relative overflow-hidden bg-navy px-6 py-20 text-cream sm:px-8 md:py-28">
      <div className="bg-grid-cream pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
        <div className="flex w-full justify-center lg:w-auto lg:flex-none">
          <div className="w-full max-w-[260px] border border-cream/25 bg-navy-deep shadow-[12px_12px_0_rgba(0,0,0,0.35)]">
            <PlaceholderImage
              src={imageSrc}
              alt="Blue Ledger mobile app — live shop dashboard and mobile point of sale running on a phone"
              width={365}
              height={684}
              label="Mobile app screenshot (mobile.png) — portrait"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-green-lt">
            <Smartphone className="size-4" aria-hidden="true" />
            BLUE LEDGER MOBILE
          </div>
          <h2 className="mt-4 font-display text-[clamp(30px,5vw,52px)] leading-[1.05]">
            Run the shop from
            <br />
            your pocket.
          </h2>
          <p className="mt-6 max-w-[540px] text-base leading-[1.8] text-cream/85">
            The mobile app is the same Blue Ledger, sized for a phone. Owners keep an eye on every branch in
            real time; staff carry a full point of sale around the shop floor.
          </p>

          <ul className="mt-8 flex flex-col gap-5 border-t border-dashed border-cream/25 pt-6">
            {POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <Check className="mt-1 size-4 flex-none text-gold" aria-hidden="true" />
                <div>
                  <div className="text-[15px] font-bold text-cream">{point.title}</div>
                  <p className="mt-1 text-[13.5px] leading-[1.75] text-cream/75">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
