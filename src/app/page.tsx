import { APPLICATION_ID, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/structuredData";
import { CustomerFeedback } from "@/components/CustomerFeedback";
import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { MobileApp } from "@/components/MobileApp";
import { Nav } from "@/components/Nav";
import { OfflineManifesto } from "@/components/OfflineManifesto";
import { Pricing } from "@/components/Pricing";
import { ProductTour } from "@/components/ProductTour";
import { ProductDemo } from "@/components/ProductDemo";
import {
  HERO_IMAGE_SRC,
  HERO_PRODUCT_IMAGE_SRC,
  INVENTORY_IMAGE_SRC,
  LOGO_SRC,
  MOBILE_APP_IMAGE_SRC,
  RECEIPTS_IMAGE_SRC,
  REPORTS_IMAGE_SRC,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": APPLICATION_ID,
  url: `${SITE_URL}/`,
  publisher: { "@id": ORGANIZATION_ID },
  creator: { "@id": ORGANIZATION_ID },
  image: `${SITE_URL}${LOGO_SRC}`,
  screenshot: `${SITE_URL}${HERO_IMAGE_SRC}`,
  mainEntityOfPage: { "@id": `${SITE_URL}/#webpage` },
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
    "Mobile app: remote shop visibility and mobile POS",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [STRUCTURED_DATA, { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: "Blue Ledger POS System in Kenya", isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": APPLICATION_ID }, publisher: { "@id": ORGANIZATION_ID } }] }).replace(/</g, "\\u003c") }}
      />
      <Nav logoSrc={LOGO_SRC} />
      <main>
        <Hero heroImageSrc={HERO_IMAGE_SRC} productImageSrc={HERO_PRODUCT_IMAGE_SRC} />
        <MarqueeStrip />
        <Features />
        <ProductDemo />
        <ProductTour
          receiptsImageSrc={RECEIPTS_IMAGE_SRC}
          inventoryImageSrc={INVENTORY_IMAGE_SRC}
          reportsImageSrc={REPORTS_IMAGE_SRC}
        />
        <MobileApp imageSrc={MOBILE_APP_IMAGE_SRC} />
        <OfflineManifesto />
        <CustomerFeedback />
        <Pricing />
        <Faq />
        <FinalCta logoSrc={LOGO_SRC} />
      </main>
      <Footer logoSrc={LOGO_SRC} />
    </>
  );
}
