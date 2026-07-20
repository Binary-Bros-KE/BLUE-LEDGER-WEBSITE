import { Container } from "./Container";
import { PlaceholderImage } from "./PlaceholderImage";

const PRODUCT_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#tour", label: "Product tour" },
  { href: "#pricing", label: "Pricing" },
];

const COMPANY_LINKS = [
  { href: "#cta", label: "Contact" },
  { href: "#offline", label: "Why offline-first" },
];

function FooterColumn({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-bold tracking-[0.16em] text-gold">{heading}</span>
      {links.map((link) => (
        <a key={link.href} href={link.href} className="py-0 text-[13px] leading-[2.4] text-cream/70 transition hover:text-white">
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function Footer({ logoSrc }: { logoSrc: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep px-6 py-14 text-cream/70 sm:px-8">
      <Container className="flex flex-wrap items-start justify-between gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <PlaceholderImage src={logoSrc} alt="Blue Ledger" width={32} height={32} label="Logo" className="size-8" />
            <span className="text-sm font-extrabold tracking-[0.14em] text-cream">BLUE LEDGER</span>
          </div>
          <div className="text-xs tracking-[0.08em]">Track. Sell. Grow.</div>
        </div>

        <div className="flex flex-wrap gap-16 text-[13px]">
          <FooterColumn heading="PRODUCT" links={PRODUCT_LINKS} />
          <FooterColumn heading="COMPANY" links={COMPANY_LINKS} />
        </div>
      </Container>

      <Container className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-cream/25 pt-5 text-[11px] tracking-[0.1em]">
        <span>&copy; {year} BLUE LEDGER &middot; BLUELEDGER.APP</span>
        <span className="text-green-lt">&bull; LOCAL MODE &middot; SQLITE READY &middot; CLOUD SYNC STAGED</span>
      </Container>
    </footer>
  );
}
