"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { ArrowUpRight, Mail, Phone, X } from "lucide-react";

// ---------------------------------------------------------------------------
// Contact channels. Every CTA on the site opens this modal instead of going
// to a mailto: / trial signup — the client wants inbound to land on a real
// person via WhatsApp / socials. Update numbers + handles here in one place.
// ---------------------------------------------------------------------------

type SvgProps = ComponentPropsWithoutRef<"svg">;

function WhatsAppIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

function FacebookIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

type Channel = {
  key: string;
  label: string;
  sub: string;
  href: string;
  color: string;
  icon: ReactNode;
};

const ICON_CLASS = "size-[18px]";

const CHANNELS: Channel[] = [
  {
    key: "wa-sales",
    label: "WhatsApp",
    sub: "Sales Consultant · 0791 880 412",
    href: "https://wa.me/254791880412",
    color: "#25D366",
    icon: <WhatsAppIcon className={ICON_CLASS} />,
  },
  {
    key: "wa-support",
    label: "WhatsApp",
    sub: "BL Support · 0742 593 840",
    href: "https://wa.me/254742593840",
    color: "#25D366",
    icon: <WhatsAppIcon className={ICON_CLASS} />,
  },
  {
    key: "email",
    label: "Email",
    sub: "info@blueledgerpos.com",
    href: "mailto:info@blueledgerpos.com",
    color: "#16204a",
    icon: <Mail className={ICON_CLASS} aria-hidden="true" />,
  },
  {
    key: "instagram",
    label: "Instagram",
    sub: "@blue_ledger_pos",
    href: "https://instagram.com/blue_ledger_pos",
    color: "#E4405F",
    icon: <InstagramIcon className={ICON_CLASS} />,
  },
  {
    key: "facebook",
    label: "Facebook",
    sub: "@blue_ledger_pos",
    href: "https://facebook.com/blue_ledger_pos",
    color: "#1877F2",
    icon: <FacebookIcon className={ICON_CLASS} />,
  },
];

type ContactContextValue = { open: () => void };

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact(): ContactContextValue {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within <ContactProvider>");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      {isOpen ? <ContactDialog onClose={close} /> : <ContactFab onClick={open} />}
    </ContactContext.Provider>
  );
}

/** Fixed contact button in the bottom-right corner, on every page. */
function ContactFab({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Contact us"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full border-[1.5px] border-navy bg-gold text-navy shadow-[4px_4px_0_var(--color-blue)] transition hover:bg-gold-text hover:text-cream sm:right-7 sm:bottom-7"
    >
      <Phone className="size-6" aria-hidden="true" />
    </button>
  );
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy/70 p-4 backdrop-blur-sm sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative my-8 w-full max-w-[440px] border-[1.5px] border-navy bg-cream p-7 shadow-[8px_8px_0_var(--color-gold)] sm:p-9"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[12px] font-bold tracking-[0.16em] text-green">GET IN TOUCH</div>
            <h2 id="contact-modal-title" className="mt-2 font-display text-[28px] leading-[1.1]">
              Contact Us
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mt-1 -mr-1 grid size-9 flex-none place-items-center border border-navy/20 text-navy transition hover:bg-navy hover:text-cream"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-6 border-t border-dashed border-navy/25">
          {CHANNELS.map((channel) => (
            <li key={channel.key} className="border-b border-dashed border-navy/25">
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3.5"
              >
                <span
                  className="grid size-11 flex-none place-items-center border border-navy/20 bg-white transition group-hover:border-navy"
                  style={{ color: channel.color }}
                >
                  {channel.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-bold tracking-[0.02em] text-navy">{channel.label}</span>
                  <span className="block truncate text-[12.5px] text-navy/60">{channel.sub}</span>
                </span>
                <ArrowUpRight
                  className="ml-auto size-4 flex-none text-navy/30 transition group-hover:translate-x-0.5 group-hover:text-navy"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Drop-in CTA button — renders a <button> that opens the Contact modal.
 * Style it exactly like the anchor it replaces by passing `className`.
 */
export function ContactButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  /** Runs before the modal opens — e.g. to close an open mobile menu. */
  onClick?: () => void;
}) {
  const { open } = useContact();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
