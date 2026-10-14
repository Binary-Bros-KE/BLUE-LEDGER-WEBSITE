import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono } from "next/font/google";
import { ContactProvider } from "@/components/ContactModal";
import { SITE_URL } from "@/lib/site";
import "./globals.css";


const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  // Match monospace character widths while the web font loads.
  adjustFontFallback: false,
  fallback: ["Courier New", "monospace"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "POS System in Kenya for Retail & Wholesale | Blue Ledger",
    template: "%s | Blue Ledger",
  },
  description:
    "Blue Ledger POS helps Kenyan shops manage sales, stock, receipts and staff. Sell offline on Windows and sync branch data when connected.",
  keywords: [
    "POS system Kenya",
    "point of sale",
    "offline POS",
    "inventory management",
    "receipts",
    "Blue Ledger",
  ],
  authors: [{ name: "Blue Ledger" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Blue Ledger",
    title: "POS System in Kenya | Blue Ledger",
    description: "The offline-first point of sale that keeps selling when the internet doesn't.",
    // TODO: add /public/images/og-image.png (1200x630) and reference it here once available.
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "POS System in Kenya | Blue Ledger",
    description: "The offline-first point of sale that keeps selling when the internet doesn't.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cream font-mono text-navy antialiased">
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
