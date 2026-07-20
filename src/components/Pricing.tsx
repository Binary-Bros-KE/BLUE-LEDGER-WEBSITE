"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "./Container";

type Billing = "monthly" | "annual";

// NOTE: prices are placeholders — confirm real numbers before launch.
const DUKA_MONTHLY = 500;
const BIASHARA_MONTHLY = 2500;

function formatPrice(monthly: number, billing: Billing): string {
  const amount = billing === "annual" ? Math.round(monthly * 0.8) : monthly;
  return `KSh ${amount.toLocaleString()}`;
}

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

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

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

          <div className="flex border-[1.5px] border-navy text-xs font-bold tracking-[0.1em]">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2.5 transition ${billing === "monthly" ? "bg-navy text-cream" : "bg-transparent text-navy"}`}
            >
              MONTHLY
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-5 py-2.5 transition ${billing === "annual" ? "bg-navy text-cream" : "bg-transparent text-navy"}`}
            >
              ANNUAL &minus;20%
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* DUKA */}
          <div className="flex flex-col gap-5 border border-navy/20 bg-white p-9">
            <div className="text-[13px] font-bold tracking-[0.14em] text-green">DUKA</div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[44px]">{formatPrice(DUKA_MONTHLY, billing)}</span>
              <span className="text-[13px] text-navy/60">/ month</span>
            </div>
            <FeatureList items={DUKA_FEATURES} tone="light" />
            <a
              href="#cta"
              className="mt-auto border-[1.5px] border-navy px-4 py-3.5 text-center text-[13px] font-bold tracking-[0.1em] transition hover:bg-navy hover:text-cream"
            >
              START FREE
            </a>
          </div>

          {/* BIASHARA — featured */}
          <div className="relative flex flex-col gap-5 bg-navy p-9 text-cream shadow-[8px_8px_0_var(--color-gold)]">
            <div className="absolute -top-3.5 right-6 bg-gold px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy">
              MOST POPULAR
            </div>
            <div className="text-[13px] font-bold tracking-[0.14em] text-gold">BIASHARA</div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[44px]">{formatPrice(BIASHARA_MONTHLY, billing)}</span>
              <span className="text-[13px] text-cream/60">/ month</span>
            </div>
            <FeatureList items={BIASHARA_FEATURES} tone="dark" />
            <a
              href="#cta"
              className="mt-auto bg-blue px-4 py-3.5 text-center text-[13px] font-extrabold tracking-[0.1em] text-white transition hover:bg-blue-press"
            >
              START FREE TRIAL
            </a>
          </div>

          {/* ENTERPRISE */}
          <div className="flex flex-col gap-5 border border-navy/20 bg-white p-9">
            <div className="text-[13px] font-bold tracking-[0.14em] text-green">ENTERPRISE</div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[44px]">Custom</span>
            </div>
            <FeatureList items={ENTERPRISE_FEATURES} tone="light" />
            <a
              href="#cta"
              className="mt-auto border-[1.5px] border-navy px-4 py-3.5 text-center text-[13px] font-bold tracking-[0.1em] transition hover:bg-navy hover:text-cream"
            >
              TALK TO US
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
