import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

function buildRows(sources: { receipts: string; inventory: string; reports: string }): Row[] {
  return [
    {
      tag: "SALES & E-RECEIPTS",
      tone: "gold-text",
      rotate: "-rotate-2",
      title: "Print it, or send it. Go paperless.",
      body: "Ring up sales offline and hand over a thermal print — or skip the paper and send the receipt straight to the customer's WhatsApp or email. Every sale searchable, reprintable, and returnable with a full trail.",
      imageSrc: sources.receipts,
      imageAlt: "Blue Ledger receipts screen — searchable sales history with statuses and reprint",
      imageLabel: "Receipts screenshot (receipts.png)",
      imageBg: "white",
      imageOnRight: true,
    },
    {
      tag: "MULTI-STORE INVENTORY",
      tone: "green",
      rotate: "rotate-2",
      title: "Stock that reconciles across every branch.",
      body: "Hold bulk stock in a main store and allocate it to each storefront. Transfer between the main store and a branch, or directly between two branches — with a matching in/out record on both sides and low-stock alerts before a shelf runs dry.",
      imageSrc: sources.inventory,
      imageAlt: "Blue Ledger inventory — main store allocation across storefronts with low stock alerts",
      imageLabel: "Inventory screenshot (inventory.png)",
      imageBg: "white",
      imageOnRight: false,
    },
    {
      tag: "REPORTS & ANALYTICS",
      tone: "blue",
      rotate: "-rotate-2",
      title: "Know your day by close of day.",
      body: "Sales by day, week, month and year. Fast and slow movers, stock valuation, customer and supplier activity, and a tax report for your own books — Blue Ledger is not linked to KRA eTIMS and never shares your sales.",
      imageSrc: sources.reports,
      imageAlt: "Blue Ledger sales report — daily, weekly, monthly and yearly analytics",
      imageLabel: "Sales report screenshot (sales_report.png)",
      imageBg: "white",
      imageOnRight: true,
    },
  ];
}

function TourRow({ row }: { row: Row }) {
  const shadow = row.imageOnRight
    ? "shadow-[12px_12px_0_rgba(22,32,74,0.12)]"
    : "shadow-[-12px_12px_0_rgba(22,32,74,0.12)]";

  return (
    <div
      className={`flex flex-col items-center gap-10 md:gap-14 lg:flex-row ${
        row.imageOnRight ? "" : "lg:flex-row-reverse"
      }`}
    >
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
        <PlaceholderImage
          src={row.imageSrc}
          alt={row.imageAlt}
          width={520}
          height={400}
          label={row.imageLabel}
          className="w-full"
        />
      </div>
    </div>
  );
}

export function ProductTour({
  receiptsImageSrc,
  inventoryImageSrc,
  reportsImageSrc,
}: {
  receiptsImageSrc: string;
  inventoryImageSrc: string;
  reportsImageSrc: string;
}) {
  const rows = buildRows({
    receipts: receiptsImageSrc,
    inventory: inventoryImageSrc,
    reports: reportsImageSrc,
  });

  return (
    <div id="tour" className="border-t border-navy/12 bg-cream-dark px-6 py-20 sm:px-8 md:py-24">
      <Container className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <div className="text-[13px] font-bold tracking-[0.16em] text-green">02 &middot; PRODUCT TOUR</div>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.05]">Take the counter view.</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-navy/75">
              A quick look at three of the screens you&apos;ll live in. Invoices, quotations, delivery notes,
              approvals, goods received, payroll, roles, the mobile app and data migration are all in the box too.
            </p>
          </div>

          <Link
            href="/features"
            className="inline-flex items-center gap-2 border-[1.5px] border-navy px-6 py-3.5 text-[13px] font-bold tracking-[0.1em] transition hover:bg-navy hover:text-cream"
          >
            SEE EVERY FEATURE
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {rows.map((row) => (
          <TourRow key={row.tag} row={row} />
        ))}
      </Container>
    </div>
  );
}
