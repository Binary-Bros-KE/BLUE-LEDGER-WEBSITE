import Link from "next/link";
import { Container } from "@/components/Container";
import { DemoStart } from "@/components/DemoStart";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { DEMO_STEPS, DEMO_VIDEO } from "@/lib/demo";
import { IMAGE_ASSETS } from "@/lib/imageAssets";

export function ProductDemo() {
  const steps = DEMO_STEPS.map(step => ({ ...step, src: IMAGE_ASSETS[step.src]?.src ?? step.src }));
  return (
    <section id="demo" className="scroll-mt-24 bg-cream px-6 py-16 sm:px-8 md:py-20">
      <Container>
        <div className="mb-9 max-w-[820px]">
          <p className="text-xs font-bold tracking-[0.14em] text-green">SEE THE PRODUCT</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] leading-[1.1]">Follow the records behind a shop day.</h2>
          <p className="mt-5 text-[15px] leading-[1.8] text-navy/80">{DEMO_VIDEO ? "Watch the product demonstration, then read the transcript below." : "Explore four real product screens in a guided screenshot tour. For an interactive walkthrough using sample products, arrange a demo with the team."}</p>
        </div>
        <DemoStart steps={steps} video={DEMO_VIDEO}>
          <PlaceholderImage src={DEMO_STEPS[0].src} alt="Blue Ledger Command Center, the starting screen of the guided product tour" width={1357} height={768} label="Product tour poster" sizes="(min-width: 1264px) 1200px, calc(100vw - 64px)" placeholder="blur" className="h-auto w-full" />
        </DemoStart>
        <details className="mt-6 border border-navy/20 bg-white p-5 sm:p-7">
          <summary className="cursor-pointer text-[15px] font-bold">{DEMO_VIDEO ? "Read the demonstration transcript" : "Read the screenshot tour transcript"}</summary>
          <ol className="mt-6 grid gap-6 text-sm leading-[1.8] sm:grid-cols-2">
            {DEMO_STEPS.map((step, index) => <li key={step.title}><h3 className="font-bold">{index + 1}. {step.title}</h3><p className="mt-2 text-navy/80">{step.text}</p></li>)}
          </ol>
        </details>
        <Link href="/contact" prefetch={false} className="mt-6 inline-block text-sm font-bold text-blue underline underline-offset-4">Arrange a walkthrough for your shop &rarr;</Link>
      </Container>
    </section>
  );
}
