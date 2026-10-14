import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SOLUTIONS } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  // Add public, canonical marketing pages here as they are published.
  // Omit lastModified until actual content modification dates are available.
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/features` },
    ...Object.values(SOLUTIONS).map(page => ({ url: `${SITE_URL}/${page.slug}` })),
  ];
}
