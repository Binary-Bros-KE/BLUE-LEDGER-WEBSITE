import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ContactButton } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { DashedPill } from "@/components/DashedPill";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Pricing } from "@/components/Pricing";
import { SetupChecklist } from "@/components/SetupChecklist";
import { LOGO_SRC, SITE_URL } from "@/lib/site";
import { SOLUTIONS, type SolutionPageData } from "@/lib/solutions";

export function SolutionPage({ page }: { page: SolutionPageData }) {
  const url = `${SITE_URL}/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.label, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Nav logoSrc={LOGO_SRC} />
      <main>
        <section className="relative overflow-hidden bg-navy px-6 py-12 text-cream sm:px-8 md:py-20">
          <div className="bg-grid-cream pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container className="relative">
            <nav aria-label="Breadcrumb" className="mb-10 text-[13px] leading-relaxed text-cream/75">
              <ol className="flex flex-wrap items-center gap-3">
                <li><Link href="/" prefetch={false} className="underline underline-offset-4 hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{page.label}</li>
              </ol>
            </nav>
            <div className={`grid items-center gap-12 lg:gap-16 ${page.image ? "lg:grid-cols-2" : "max-w-[940px]"}`}>
              <div className="min-w-0">
                <DashedPill tone="gold" className="max-w-full text-[10px] sm:text-xs">{page.eyebrow}</DashedPill>
                <h1 className="mt-6 font-display text-[clamp(36px,4.5vw,64px)] leading-[1.06]">{page.title}</h1>
                <p className="mt-7 max-w-[760px] text-[15px] leading-[1.85] text-cream/85 sm:text-base">{page.intro}</p>
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <ContactButton intent={page.slug === "pricing" ? "quote" : "demo"} className="inline-flex max-w-full items-center justify-center gap-2 bg-blue px-6 py-4 text-center text-xs font-bold tracking-[0.06em] text-white shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-blue-press">
                    {page.cta}<ArrowRight className="size-4 flex-none" aria-hidden="true" />
                  </ContactButton>
                  <Link href={page.slug === "pricing" ? "#pricing" : "/pricing"} prefetch={false} className="text-sm text-cream underline underline-offset-4 hover:text-white">
                    {page.slug === "pricing" ? "Compare packages" : "Explore pricing & setup"}
                  </Link>
                </div>
              </div>
              {page.image && (
                <figure className={`mx-auto w-full ${page.image.portrait ? "max-w-[240px]" : "max-w-[560px]"}`}>
                  <div className="overflow-hidden border border-cream/25 bg-navy-deep shadow-[8px_8px_0_rgba(0,0,0,0.25)]">
                    <PlaceholderImage
                      src={page.image.src}
                      alt={page.image.alt}
                      width={page.image.width}
                      height={page.image.height}
                      label={page.image.alt}
                      sizes={page.image.portrait ? "240px" : "(min-width: 1264px) 560px, (min-width: 1024px) calc((100vw - 128px) / 2), (min-width: 608px) 560px, calc(100vw - 48px)"}
                      loading="eager"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[12px] leading-relaxed text-cream/70">{page.image.alt}.</figcaption>
                </figure>
              )}
            </div>
            <ul className="mt-12 grid gap-4 border-t border-dashed border-cream/25 pt-7 text-[13px] leading-relaxed sm:grid-cols-3">
              {page.highlights.map(highlight => (
                <li key={highlight} className="flex items-start gap-2"><Check className="mt-0.5 size-4 flex-none text-gold" aria-hidden="true" />{highlight}</li>
              ))}
            </ul>
          </Container>
        </section>

        {page.slug === "pricing" && <Pricing showDetailsLink={false} />}

        <section className="px-6 py-16 sm:px-8 md:py-20">
          <Container className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {page.sections.map((section, index) => (
              <article key={section.id} id={section.id} className="min-w-0 scroll-mt-28 border-t-2 border-navy pt-6">
                <div className="text-[12px] font-bold tracking-[0.12em] text-green">0{index + 1}</div>
                <h2 className="mt-4 font-display text-[26px] leading-[1.2]">{section.title}</h2>
                <p className="mt-5 text-[14px] leading-[1.85] text-navy/80">{section.body}</p>
                <ul className="mt-6 space-y-4 border-t border-dashed border-navy/25 pt-5 text-[13px] leading-[1.75] text-navy/80">
                  {section.points.map(point => <li key={point} className="flex items-start gap-2"><Check className="mt-1 size-4 flex-none text-green" aria-hidden="true" />{point}</li>)}
                </ul>
              </article>
            ))}
          </Container>
        </section>

        <section className="bg-cream-dark px-6 py-16 sm:px-8 md:py-20">
          <Container>
            <h2 className="max-w-[820px] font-display text-[clamp(28px,3.5vw,44px)] leading-[1.12]">{page.workflow.title}</h2>
            <p className="mt-5 max-w-[760px] text-[15px] leading-[1.8] text-navy/80">{page.workflow.intro}</p>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {page.workflow.steps.map((step, index) => (
                <li key={step.title} className="border border-navy/20 bg-white p-7">
                  <span className="text-xs font-bold tracking-[0.12em] text-green">STEP {index + 1}</span>
                  <h3 className="mt-4 font-display text-[23px] leading-[1.2]">{step.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-navy/80">{step.body}</p>
                </li>
              ))}
            </ol>
            <aside className="mt-10 border-l-4 border-gold bg-cream p-6 sm:p-8">
              <h3 className="font-display text-[21px] leading-[1.3]">{page.note.title}</h3>
              <p className="mt-4 max-w-[1000px] text-[14px] leading-[1.85] text-navy/80">{page.note.body}</p>
            </aside>
          </Container>
        </section>

        <section className="px-6 py-16 sm:px-8 md:py-20">
          <Container size="sm">
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] leading-[1.12]">Questions about {page.label.toLowerCase()}.</h2>
            <div className="mt-9 space-y-3">
              {page.faqs.map(faq => (
                <details key={faq.question} className="group border border-navy/20 bg-white px-5 py-5 sm:px-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold leading-[1.6] marker:content-none">
                    {faq.question}<ChevronDown className="size-4 flex-none transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 text-[14px] leading-[1.85] text-navy/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {page.slug === "pricing" && <SetupChecklist />}

        <section className="border-t border-navy/15 px-6 py-16 sm:px-8">
          <Container>
            <h2 className="font-display text-[28px] leading-[1.2]">Explore the rest of your setup.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {page.related.map(slug => (
                <Link key={slug} href={`/${slug}`} prefetch={false} className="group flex items-center justify-between gap-4 border border-navy/25 bg-white p-6 text-[15px] font-bold leading-relaxed transition hover:border-blue hover:text-blue">
                  {SOLUTIONS[slug].label}<ArrowRight className="size-4 flex-none transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link href="/features" prefetch={false} className="mt-7 inline-block text-sm underline underline-offset-4 hover:text-blue">See the full Blue Ledger product tour</Link>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-blue px-6 py-16 text-center text-white sm:px-8 md:py-20">
          <div className="bg-grid-white pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container size="xs" className="relative">
            <h2 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.12]">See this workflow in your shop.</h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-[1.8] text-white/90">Talk to the Blue Ledger team about your setup and arrange a walkthrough with the tasks your staff use every day.</p>
            <ContactButton intent={page.slug === "pricing" ? "quote" : "demo"} className="mt-8 inline-flex max-w-full items-center justify-center gap-2 bg-navy px-7 py-4 text-xs font-bold tracking-[0.06em] text-cream shadow-[4px_4px_0_var(--color-gold)] transition hover:bg-navy-deep">{page.cta}<ArrowRight className="size-4 flex-none" aria-hidden="true" /></ContactButton>
          </Container>
        </section>
      </main>
      <Footer logoSrc={LOGO_SRC} />
    </>
  );
}
