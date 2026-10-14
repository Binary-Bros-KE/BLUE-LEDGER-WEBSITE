"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ContactButton } from "./ContactModal";
import { Container } from "./Container";
import { PlaceholderImage } from "./PlaceholderImage";

const NAV_LINKS = [
  { href: "/#features", label: "FEATURES" },
  { href: "/features", label: "PRODUCT TOUR" },
  { href: "/offline-pos", label: "OFFLINE POS" },
  { href: "/pricing", label: "PRICING" },
];

export function Nav({ logoSrc }: { logoSrc: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-navy/15 bg-cream/92 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-6 px-6 py-3.5 sm:px-8">
        <Link href="/" prefetch={false} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <PlaceholderImage src={logoSrc} alt="Blue Ledger logo" width={36} height={36} label="Logo" className="size-9" />
          <span className="text-[15px] font-extrabold tracking-[0.14em]">BLUE LEDGER</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="text-[13px] font-medium tracking-[0.06em] text-navy transition hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
          <ContactButton intent="trial" className="bg-navy px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-cream shadow-[3px_3px_0_var(--color-gold)] transition hover:bg-blue hover:text-white">
            GET STARTED &rarr;
          </ContactButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 flex-none place-items-center border border-navy/20 text-navy md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-navy/15 bg-cream md:hidden">
          <Container className="flex flex-col gap-1 px-6 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold tracking-[0.04em] text-navy"
              >
                {link.label}
              </Link>
            ))}
            <ContactButton
              intent="trial"
              onClick={() => setOpen(false)}
              className="mt-2 bg-navy px-5 py-3 text-center text-xs font-bold tracking-[0.1em] text-cream shadow-[3px_3px_0_var(--color-gold)]"
            >
              GET STARTED &rarr;
            </ContactButton>
          </Container>
        </div>
      )}
    </div>
  );
}
