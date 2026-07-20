import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Nav } from "@/components/Nav";
import { OfflineManifesto } from "@/components/OfflineManifesto";
import { Pricing } from "@/components/Pricing";
import { ProductTour } from "@/components/ProductTour";

// ---------------------------------------------------------------------------
// Fill these in as assets become available. Drop image files under /public
// (e.g. /public/images/logo.png) and set the matching path below — leaving a
// value blank renders a labeled placeholder box instead of a broken image.
// ---------------------------------------------------------------------------
const LOGO_SRC = "/BLUE_LEDGER.png"; // /images/logo.png — BLUE_LEDGER.png, transparent background
const HERO_IMAGE_SRC = "/screenshots/dashboard.png"; // /images/dashboard.png — Command Center dashboard screenshot
const RECEIPTS_IMAGE_SRC = "/screenshots/receipts.png"; // /images/receipts.png — Receipts screen screenshot
const INVENTORY_IMAGE_SRC = "/screenshots/inventory.png"; // /images/inventory.png — Inventory / main store allocation screenshot
const SIGNIN_IMAGE_SRC = "/screenshots/sales_report.png"; // /images/signin.png — Employee sign-in (code + PIN) screenshot

// TODO: replace with the real inbox that should receive demo/trial requests.
const DEMO_EMAIL = "hello@blueledger.app";
const DEMO_HREF = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent("Blue Ledger — Start Free Trial")}`;

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blue Ledger",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "Blue Ledger is an offline-first point of sale system. Sell without internet, sync to the cloud when you're back online. Inventory across storefronts, receipts, approvals, team PINs and reports — built for businesses in Kenya.",
  slogan: "Track. Sell. Grow.",
  featureList: [
    "Offline-first point of sale",
    "Cloud sync when back online",
    "Multi-storefront inventory allocation",
    "Receipts, returns, and void approvals",
    "Team PINs and role-based permissions",
    "Sales, expense, and payroll reports",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Nav logoSrc={LOGO_SRC} />
      <main>
        <Hero heroImageSrc={HERO_IMAGE_SRC} demoHref={DEMO_HREF} />
        <MarqueeStrip />
        <Features />
        <ProductTour
          receiptsImageSrc={RECEIPTS_IMAGE_SRC}
          inventoryImageSrc={INVENTORY_IMAGE_SRC}
          signinImageSrc={SIGNIN_IMAGE_SRC}
        />
        <OfflineManifesto />
        <Pricing />
        <Faq />
        <FinalCta logoSrc={LOGO_SRC} demoHref={DEMO_HREF} />
      </main>
      <Footer logoSrc={LOGO_SRC} />
    </>
  );
}
