import Link from "next/link";
import { BarChart3, KeyRound, Receipt, RefreshCw, Store, WifiOff } from "lucide-react";
import { Container } from "./Container";

type Card = {
  icon: typeof WifiOff;
  label: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  tone: "navy" | "blue" | "white";
};

const CARDS: Card[] = [
  {
    icon: WifiOff,
    label: "OFFLINE-FIRST CORE",
    href: "/offline-pos",
    linkLabel: "Explore offline checkout",
    title: "Network down? Keep selling.",
    body: "Sales are recorded in a local ledger on your powered Windows counter, with pending changes queued for cloud sync.",
    tone: "navy",
  },
  {
    icon: RefreshCw,
    label: "CLOUD SYNC, STAGED",
    href: "/offline-pos#cloud-sync",
    linkLabel: "See how cloud sync works",
    title: "Back online? Everything catches up.",
    body: "Queued transactions sync automatically the moment you reconnect — with a visible queue so you always know what's pending.",
    tone: "blue",
  },
  {
    icon: Store,
    label: "MULTI-STOREFRONT INVENTORY",
    href: "/inventory-management",
    linkLabel: "Explore stock management",
    title: "One main store. Every shelf.",
    body: "Allocate stock from your main store to each storefront and see on-hand counts, low-stock alerts and a full stock ledger at a glance.",
    tone: "white",
  },
  {
    icon: Receipt,
    label: "RECEIPTS & APPROVALS",
    href: "/features#sales-receipts",
    linkLabel: "See receipts and approvals",
    title: "Every shilling, accounted for.",
    body: "Reprint, download, return or void any sale — with owner approval required for the sensitive stuff. ESC/POS thermal printing built in.",
    tone: "white",
  },
  {
    icon: KeyRound,
    label: "TEAM PINS & ROLES",
    href: "/features#roles-permissions",
    linkLabel: "Explore staff permissions",
    title: "Your staff, your rules.",
    body: "Employees sign in with a code and 6-digit PIN. Roles and permissions decide who can void, discount, or touch the settings.",
    tone: "white",
  },
  {
    icon: BarChart3,
    label: "REPORTS THAT MATTER",
    href: "/features#reports-analytics",
    linkLabel: "See business reports",
    title: "Know your day by close of day.",
    body: "Daily sales, cashier performance, expenses, salaries and purchases — the numbers an owner actually checks, front and center.",
    tone: "white",
  },
];

const TONE_CLASSES: Record<Card["tone"], string> = {
  navy: "bg-navy text-cream",
  blue: "bg-blue text-white",
  white: "border border-navy/15 bg-white text-navy",
};

const LABEL_CLASSES: Record<Card["tone"], string> = {
  navy: "text-gold",
  blue: "text-cream",
  white: "text-green",
};

const BODY_CLASSES: Record<Card["tone"], string> = {
  navy: "text-cream/80",
  blue: "text-white/85",
  white: "text-navy/75",
};

export function Features() {
  return (
    <div id="features" className="px-6 py-20 sm:px-8 md:py-24">
      <Container>
        <div className="text-[13px] font-bold tracking-[0.16em] text-green">01 &middot; WHAT&apos;S INSIDE</div>
        <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.05]">
          Everything on the counter.
          <br />
          Nothing in the way.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.label} className={`flex flex-col gap-3.5 p-8 ${TONE_CLASSES[card.tone]}`}>
              <div className={`flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] ${LABEL_CLASSES[card.tone]}`}>
                <card.icon className="size-4 flex-none" aria-hidden="true" />
                {card.label}
              </div>
              <div className="font-display text-2xl leading-[1.2]">{card.title}</div>
              <p className={`m-0 text-sm leading-[1.7] ${BODY_CLASSES[card.tone]}`}>{card.body}</p>
              <Link href={card.href} prefetch={false} className="mt-auto pt-3 text-sm font-bold underline underline-offset-4">{card.linkLabel} &rarr;</Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
