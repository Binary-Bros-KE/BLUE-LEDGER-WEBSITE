import Link from "next/link";
import { Container } from "./Container";
import { StampCircle } from "./StampCircle";

const STATS = [
  { value: "LOCAL", label: "COUNTER RECORDS", color: "text-gold" },
  { value: "QUEUED", label: "WHILE DISCONNECTED", color: "text-green-lt" },
  { value: "SYNC", label: "AFTER RECONNECTING", color: "text-cream" },
] as const;

export function OfflineManifesto() {
  return (
    <div id="offline" className="relative overflow-hidden bg-navy px-6 py-24 text-cream sm:px-8 md:py-28">
      <div className="bg-grid-cream pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container size="md" className="relative text-center">
        <StampCircle size={120} rotate="-rotate-8" className="mx-auto">
          OFFLINE
        </StampCircle>

        <h2 className="mt-9 font-display text-[clamp(30px,5vw,54px)] leading-[1.1]">
          The internet goes down.
          <br />
          Your business doesn&apos;t.
        </h2>

        <p className="mx-auto mt-7 max-w-[640px] text-base leading-[1.8] text-cream/80">
          Blue Ledger runs on your Windows counter with a ledger
          of its own. Queue of pending syncs: visible. Failed syncs: retried. The counter must stay powered; remote views catch up after syncing.
        </p>

        <Link href="/offline-pos" prefetch={false} className="mt-7 inline-block text-sm font-bold text-cream underline underline-offset-4 hover:text-white">Explore offline checkout and cloud sync &rarr;</Link>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="min-w-[160px] flex-1 border border-cream/25 bg-black/20 px-6 py-5 sm:min-w-[180px] sm:flex-none">
              <div className={`font-display text-[34px] ${stat.color}`}>{stat.value}</div>
              <div className="mt-1.5 text-xs tracking-[0.12em] text-cream/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
