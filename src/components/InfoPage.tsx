import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { LOGO_SRC, SITE_URL } from "@/lib/site";
import type { ReactNode } from "react";

export function InfoPage({ path, label, title, intro, children }: { path: string; label: string; title: string; intro: string; children: ReactNode }) {
  const url = `${SITE_URL}${path}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": path === "/about" ? "AboutPage" : "ContactPage", "@id": `${url}#webpage`, url, name: title, description: intro, breadcrumb: { "@id": `${url}#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: label, item: url } ] },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Nav logoSrc={LOGO_SRC} />
    <main>
      <header className="bg-navy px-6 py-14 text-cream sm:px-8 md:py-20">
        <Container size="md">
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-cream/80"><ol className="flex flex-wrap gap-3"><li><Link href="/" prefetch={false} className="underline underline-offset-4">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">{label}</li></ol></nav>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.1]">{title}</h1>
          <p className="mt-6 max-w-[760px] text-base leading-[1.85] text-cream/85">{intro}</p>
        </Container>
      </header>
      <div className="px-6 py-14 sm:px-8 md:py-20"><Container size="md" className="space-y-12">{children}</Container></div>
    </main>
    <Footer logoSrc={LOGO_SRC} />
  </>;
}
