import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactButton } from "@/components/ContactModal";
import { DashedPill } from "@/components/DashedPill";
import { FeatureTour } from "@/components/FeatureTour";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { FEATURE_GROUPS } from "@/lib/features";
import { LOGO_SRC } from "@/lib/site";

const PAGE_TITLE = "Features — Offline POS with Mobile App, Multi-Branch Inventory & Reports";
const PAGE_DESCRIPTION =
  "Explore every Blue Ledger feature: an offline point of sale, a mobile app for remote shop visibility and selling on the go, multi-branch inventory with main store allocation and stock transfers, e-receipts on WhatsApp and email, invoices, quotations and delivery notes, goods received tracking, requests and approvals, roles and permissions, expenses, salary management, sales, inventory, product and tax reports, and data migration from your old POS. Not integrated with KRA eTIMS — your sales are never shared with KRA.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/features" },
  openGraph: {
    type: "website",
    url: "/features",
    title: `${PAGE_TITLE} | Blue Ledger`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Blue Ledger`,
    description: PAGE_DESCRIPTION,
  },
};

const FEATURES_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blue Ledger POS features",
  itemListElement: FEATURE_GROUPS.map((group, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: group.title,
    description: group.tagline,
  })),
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FEATURES_STRUCTURED_DATA) }}
      />
      <Nav logoSrc={LOGO_SRC} />
      <main>
        {/* Page header */}
        <div className="relative overflow-hidden bg-navy px-6 py-20 text-cream sm:px-8 md:py-24">
          <div className="bg-grid-cream pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container className="relative">
            <DashedPill tone="gold">FULL PRODUCT TOUR</DashedPill>
            <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(38px,6.5vw,76px)] leading-[0.98]">
              Every feature, one system.
            </h1>
            <p className="mt-7 max-w-[620px] text-base leading-[1.8] text-cream/85">
              Blue Ledger is an offline-first point of sale for Kenyan retail and wholesale businesses. Sell
              without internet, run every branch from one account, send e-receipts on WhatsApp, and close the
              day with reports you can trust. Here is everything it does.
            </p>
          </Container>
        </div>

        <MarqueeStrip />

        <FeatureTour />

        {/* KRA eTIMS clarification — a question traders ask before buying. */}
        <div className="border-t border-navy/12 bg-cream-dark px-6 py-16 sm:px-8 md:py-20">
          <Container size="sm">
            <div className="flex flex-col gap-4 border border-navy/20 bg-white p-8 sm:p-10">
              <div className="flex items-center gap-2.5 text-green">
                <ShieldCheck className="size-5 flex-none" aria-hidden="true" />
                <span className="text-[12px] font-bold tracking-[0.14em]">TAX &amp; KRA eTIMS</span>
              </div>
              <h2 className="font-display text-[24px] leading-[1.2] sm:text-[28px]">
                Blue Ledger is not integrated with KRA eTIMS.
              </h2>
              <p className="text-[15px] leading-[1.8] text-navy/75">
                Your sales are recorded in your own ledger and are never transmitted to the Kenya Revenue
                Authority. The built-in tax report is there to make your own accounting and filing easier &mdash;
                it does not connect to eTIMS, TIMS or any KRA system.
              </p>
            </div>
          </Container>
        </div>

        {/* Closing CTA + pricing */}
        <div className="px-6 py-20 text-center sm:px-8 md:py-24">
          <Container size="xs">
            <h2 className="font-display text-[clamp(30px,5vw,52px)] leading-[1.05]">
              See it running in your shop.
            </h2>
            <p className="mx-auto mt-5 max-w-[460px] text-[15px] leading-[1.8] text-navy/75">
              Book a walkthrough on the features that matter to your business, or ask us anything &mdash; a real
              person replies fast.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ContactButton className="inline-flex items-center gap-2.5 bg-blue px-9 py-4 text-sm font-extrabold tracking-[0.1em] text-white shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-blue-press">
                TALK TO US
              </ContactButton>
              <ContactButton className="border-[1.5px] border-navy px-9 py-4 text-sm font-bold tracking-[0.1em] text-navy transition hover:bg-navy hover:text-cream">
                BOOK A DEMO
              </ContactButton>
            </div>
          </Container>
        </div>

        <Pricing />
      </main>
      <Footer logoSrc={LOGO_SRC} />
    </>
  );
}
