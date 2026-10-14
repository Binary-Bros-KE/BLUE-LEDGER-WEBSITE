import { SITE_URL, LOGO_SRC } from "@/lib/site";
import { CONTACT_EMAIL, SALES_PHONE, SUPPORT_PHONE } from "@/lib/contact";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const APPLICATION_ID = `${SITE_URL}/#software`;
export const BRAND_ID = `${SITE_URL}/#brand`;

export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": ORGANIZATION_ID,
      name: "Trylist Solutions Ltd", url: "https://trylistsolutions.co.ke/",
      email: CONTACT_EMAIL,
      contactPoint: [
        { "@type": "ContactPoint", telephone: `+${SALES_PHONE}`, contactType: "sales", url: `${SITE_URL}/contact` },
        { "@type": "ContactPoint", telephone: `+${SUPPORT_PHONE}`, contactType: "customer support", url: `${SITE_URL}/contact` },
      ],
      brand: { "@id": BRAND_ID },
    },
    { "@type": "Brand", "@id": BRAND_ID, name: "Blue Ledger", url: `${SITE_URL}/`, logo: `${SITE_URL}${LOGO_SRC}` },
    { "@type": "WebSite", "@id": WEBSITE_ID, url: `${SITE_URL}/`, name: "Blue Ledger", inLanguage: "en", publisher: { "@id": ORGANIZATION_ID } },
  ],
};

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}