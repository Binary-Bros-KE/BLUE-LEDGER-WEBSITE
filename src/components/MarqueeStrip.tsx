const ITEMS = [
  "SELLS OFFLINE",
  "SYNCS ONLINE",
  "MULTI-STOREFRONT",
  "THERMAL RECEIPTS",
  "TEAM PINS",
  "APPROVALS",
  "STOCK LEDGER",
  "REPORTS",
];

function MarqueeTrack() {
  return (
    <span className="px-6 whitespace-nowrap">
      {ITEMS.map((item, index) => (
        <span key={index}>
          {item}
          <span className="mx-3 text-navy/50">&hellip;</span>
        </span>
      ))}
    </span>
  );
}

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y-[3px] border-navy bg-gold text-navy">
      <div className="motion-reduce:animate-none flex w-max animate-[bl-marquee_22s_linear_infinite] py-3 text-[13px] font-extrabold tracking-[0.18em]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
