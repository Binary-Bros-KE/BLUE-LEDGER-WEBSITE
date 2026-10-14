import type { Metadata } from "next";
import { SOLUTIONS, type SolutionSlug } from "@/lib/solutions";

export function solutionMetadata(slug: SolutionSlug): Metadata {
  const page = SOLUTIONS[slug];
  const title = `${page.metaTitle} | Blue Ledger`;
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      siteName: "Blue Ledger",
      url: `/${page.slug}`,
      title,
      description: page.description,
    },
    twitter: { card: "summary_large_image", title, description: page.description },
  };
}
