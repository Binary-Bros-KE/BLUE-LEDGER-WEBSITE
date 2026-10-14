import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

const title = "Practical POS Guides for Shop Teams";
const description = "Practical Blue Ledger guides for shop owners and staff. Start with a stock reconciliation checklist for main stores and branches, using real product screens.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/guides" }, openGraph: { title, description, url: "/guides", type: "website" }, twitter: { card: "summary_large_image", title, description } };

export default function GuidesPage() {
  return <InfoPage path="/guides" label="Guides" title="Practical guides for your shop day." intro="Work through a concrete task with your team, using Blue Ledger screens and a checklist you can take to the counter.">
    <article className="border border-navy/20 bg-white p-7 sm:p-10"><p className="text-xs font-bold tracking-[0.12em] text-green">STOCK CONTROL</p><h2 className="mt-4 font-display text-[30px] leading-[1.2]"><Link href="/guides/reconcile-stock-across-branches" prefetch={false} className="underline decoration-gold underline-offset-4">How to reconcile stock across branches</Link></h2><p className="mt-5 text-[15px] leading-[1.85] text-navy/80">Set a common cutoff, count each location, trace transfers and investigate differences before changing a stock balance. Includes a worked example and a reconciliation checklist.</p><Link href="/guides/reconcile-stock-across-branches" prefetch={false} className="mt-6 inline-block text-sm font-bold text-blue underline underline-offset-4">Read the stock reconciliation guide &rarr;</Link></article>
    <section><h2 className="font-display text-[28px] leading-[1.2]">Planning a new setup?</h2><p className="mt-5 text-[15px] leading-[1.85] text-navy/80">Review <Link href="/offline-pos" prefetch={false} className="text-blue underline underline-offset-4">offline checkout and syncing</Link>, compare <Link href="/multi-branch-pos" prefetch={false} className="text-blue underline underline-offset-4">multi-branch workflows</Link>, or use the <Link href="/pricing#setup" prefetch={false} className="text-blue underline underline-offset-4">hardware, onboarding and support checklist</Link> before requesting a quote.</p></section>
  </InfoPage>;
}