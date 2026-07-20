import { Container } from "./Container";
import { DashedPill } from "./DashedPill";
import { PlaceholderImage } from "./PlaceholderImage";

type Row = {
  tag: string;
  tone: "gold-text" | "green" | "blue";
  rotate: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  imageBg: "white" | "navy";
  imageOnRight: boolean;
};

function buildRows(sources: { receipts: string; inventory: string; signin: string }): Row[] {
  return [
    {
      tag: "RECEIPTS",
      tone: "gold-text",
      rotate: "-rotate-2",
      title: "A paper trail that never tears.",
      body: "Every completed sale, latest first. Search by receipt number or customer, reprint in one click, and process returns or voids with a status trail — pending approval, completed, returned.",
      imageSrc: sources.receipts,
      imageAlt: "Blue Ledger receipts screen — searchable transaction history with statuses",
      imageLabel: "Receipts screenshot (receipts.png)",
      imageBg: "white",
      imageOnRight: true,
    },
    {
      tag: "INVENTORY",
      tone: "green",
      rotate: "rotate-2",
      title: "Stock that can't hide from you.",
      body: "1,035 units across four storefronts? See exactly where every one sits — allocated at main store or on-hand at the shop — with low-stock alerts before the shelf goes empty.",
      imageSrc: sources.inventory,
      imageAlt: "Blue Ledger inventory — main store allocations per storefront with low stock alerts",
      imageLabel: "Inventory screenshot (inventory.png)",
      imageBg: "white",
      imageOnRight: false,
    },
    {
      tag: "TEAM SIGN-IN",
      tone: "blue",
      rotate: "-rotate-2",
      title: "Clock in with a code and a PIN.",
      body: "No shared passwords, no mystery sales. Every action is tied to the employee who did it — cashier by cashier, shift by shift.",
      imageSrc: sources.signin,
      imageAlt: "Blue Ledger employee sign-in with code and 6-digit PIN",
      imageLabel: "Sign-in screenshot (signin.png)",
      imageBg: "navy",
      imageOnRight: true,
    },
  ];
}

function TourRow({ row }: { row: Row }) {
  const shadow = row.imageOnRight ? "shadow-[12px_12px_0_rgba(22,32,74,0.12)]" : "shadow-[-12px_12px_0_rgba(22,32,74,0.12)]";

  return (
    <div className={`flex flex-col items-center gap-10 md:gap-14 lg:flex-row ${row.imageOnRight ? "" : "lg:flex-row-reverse"}`}>
      <div className="min-w-0 flex-1 lg:max-w-[380px]">
        <DashedPill tone={row.tone} className={row.rotate}>
          {row.tag}
        </DashedPill>
        <h3 className="mt-4.5 font-display text-[28px] leading-[1.15] sm:text-[32px]">{row.title}</h3>
        <p className="mt-4.5 text-[15px] leading-[1.8] text-navy/75">{row.body}</p>
      </div>
      <div
        className={`w-full min-w-0 flex-1 border border-navy/20 lg:max-w-[520px] ${shadow} ${
          row.imageBg === "navy" ? "bg-navy" : "bg-white"
        }`}
      >
        <PlaceholderImage src={row.imageSrc} alt={row.imageAlt} width={520} height={400} label={row.imageLabel} className="w-full" />
      </div>
    </div>
  );
}

export function ProductTour({
  receiptsImageSrc,
  inventoryImageSrc,
  signinImageSrc,
}: {
  receiptsImageSrc: string;
  inventoryImageSrc: string;
  signinImageSrc: string;
}) {
  const rows = buildRows({ receipts: receiptsImageSrc, inventory: inventoryImageSrc, signin: signinImageSrc });

  return (
    <div id="tour" className="border-t border-navy/12 bg-cream-dark px-6 py-20 sm:px-8 md:py-24">
      <Container className="flex flex-col gap-16 md:gap-24">
        <div>
          <div className="text-[13px] font-bold tracking-[0.16em] text-green">02 &middot; PRODUCT TOUR</div>
          <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.05]">Take the counter view.</h2>
        </div>

        {rows.map((row) => (
          <TourRow key={row.tag} row={row} />
        ))}
      </Container>
    </div>
  );
}
