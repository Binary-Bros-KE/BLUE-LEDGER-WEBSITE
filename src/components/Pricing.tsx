import Link from "next/link";
import { Check } from "lucide-react";
import { ContactButton } from "./ContactModal";
import { Container } from "./Container";

const DUKA_FEATURES = [
  "1 storefront · 1 station",
  "Unlimited sales & receipts",
  "Offline mode + cloud sync",
  "Thermal receipt printing",
  "3 employee accounts",
];

const BIASHARA_FEATURES = [
  "Up to 4 storefronts",
  "Main store stock allocation",
  "Approvals, returns & voids",
  "Roles & permissions",
  "Reports, expenses & salaries",
  "Unlimited employees",
];

const ENTERPRISE_FEATURES = [
  "Unlimited storefronts",
  "Dedicated onboarding",
  "Data migration from your old POS",
  "Priority support",
  "Custom integrations",
];

function FeatureList({ items, tone }: { items: string[]; tone: "dark" | "light" }) {
  return (
    <ul
      className={`m-0 list-none space-y-0 border-t border-dashed pt-5 text-[13.5px] leading-[2.2] ${
        tone === "dark" ? "border-cream/35 text-cream/90" : "border-navy/30 text-navy/80"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check className="mt-1 size-3.5 flex-none" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PriceLine({ tone }: { tone: "dark" | "light" }) {
  return (
    <div>
      <div className="font-display text-[30px] leading-[1.1]">Contact for pricing</div>
      <div className={`mt-1 text-[13px] ${tone === "dark" ? "text-cream/60" : "text-navy/55"}`}>
        Tailored to your storefronts &amp; team
      </div>
    </div>
  );
}

export function Pricing({ showDetailsLink = true }: { showDetailsLink?: boolean }) {
  return (
    <div id="pricing" className="px-6 py-20 sm:px-8 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[13px] font-bold tracking-[0.16em] text-green">03 &middot; PRICING</div>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.05]">
              Priced like a tool,
              <br />
              not a tax.
            </h2>
          </div>

          <p className="max-w-[320px] text-[13px] leading-[1.7] text-navy/70">
            Talk to us for a quote that fits your setup &mdash; no rigid tiers, no surprises on the bill.
          </p>
        </div>

        {showDetailsLink && (
          <Link href="/pricing" prefetch={false} className="mt-6 inline-block text-sm font-bold text-blue underline underline-offset-4">Compare packages and plan your setup</Link>
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* DUKA */}
          <div className="flex flex-col gap-5 border border-navy/20 bg-white p-9">
            <div className="text-[13px] font-bold tracking-[0.14em] text-green">DUKA</div>
            <PriceLine tone="light" />
            <FeatureList items={DUKA_FEATURES} tone="light" />
            <ContactButton intent="quote" className="mt-auto border-[1.5px] border-navy px-4 py-3.5 text-center text-[13px] font-bold tracking-[0.1em] transition hover:bg-navy hover:text-cream">
              CONTACT US
            </ContactButton>
          </div>

          {/* BIASHARA — featured */}
          <div className="relative flex flex-col gap-5 bg-navy p-9 text-cream shadow-[8px_8px_0_var(--color-gold)]">
            <div className="absolute -top-3.5 right-6 bg-gold px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy">
              MOST POPULAR
            </div>
            <div className="text-[13px] font-bold tracking-[0.14em] text-gold">BIASHARA</div>
            <PriceLine tone="dark" />
            <FeatureList items={BIASHARA_FEATURES} tone="dark" />
            <ContactButton intent="quote" className="mt-auto bg-blue px-4 py-3.5 text-center text-[13px] font-extrabold tracking-[0.1em] text-white transition hover:bg-blue-press">
              CONTACT SALES
            </ContactButton>
          </div>

          {/* ENTERPRISE */}
          <div className="flex flex-col gap-5 border border-navy/20 bg-white p-9">
            <div className="text-[13px] font-bold tracking-[0.14em] text-green">ENTERPRISE</div>
            <PriceLine tone="light" />
            <FeatureList items={ENTERPRISE_FEATURES} tone="light" />
            <ContactButton intent="quote" className="mt-auto border-[1.5px] border-navy px-4 py-3.5 text-center text-[13px] font-bold tracking-[0.1em] transition hover:bg-navy hover:text-cream">
              TALK TO US
            </ContactButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
