import { ChevronDown } from "lucide-react";
import { Container } from "./Container";

const FAQS = [
  {
    q: "Does it really work without internet?",
    a: "Yes — that's the whole point. Blue Ledger stores everything in a local SQLite database on your machine. Checkout, receipts, inventory and reports all work with zero connection. When you're back online, queued changes sync to the cloud automatically.",
  },
  {
    q: "What hardware do I need?",
    a: "Any Windows PC or laptop you already own. Add an ESC/POS thermal printer (Epson-compatible, network or USB) for printed receipts — or skip it and go paperless.",
  },
  {
    q: "Can I run more than one shop?",
    a: "Yes. Keep bulk stock in a main store and allocate units to each storefront. Every shop sees its own shelf stock; you see everything.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "It's your ledger. The local database stays on your machine, and you can export your full sales and inventory history any time.",
  },
];

export function Faq() {
  return (
    <div className="border-t border-navy/12 bg-cream-dark px-6 py-20 sm:px-8 md:py-24">
      <Container size="sm">
        <div className="text-[13px] font-bold tracking-[0.16em] text-green">04 &middot; QUESTIONS</div>
        <h2 className="mt-3 mb-10 font-display text-[clamp(28px,4.5vw,48px)] leading-[1.1]">Before you ask.</h2>

        <div className="flex flex-col gap-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group border border-navy/20 bg-white px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold tracking-tight marker:content-none">
                {item.q}
                <ChevronDown className="size-4 flex-none transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 text-sm leading-[1.8] text-navy/75">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
