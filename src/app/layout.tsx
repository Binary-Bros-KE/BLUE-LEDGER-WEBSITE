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
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blue Ledger POS — Track. Sell. Grow. | Offline-first Point of Sale for Kenyan businesses",
    template: "%s | Blue Ledger",
  },
  description:
    "Blue Ledger is an offline-first point of sale system. Sell without internet, sync to the cloud when you're back online. Inventory across storefronts, receipts, approvals, team PINs and reports — built for businesses in Kenya.",
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
    title: "Blue Ledger POS — Track. Sell. Grow.",
    description: "The offline-first point of sale that keeps selling when the internet doesn't.",
    // TODO: add /public/images/og-image.png (1200x630) and reference it here once available.
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Ledger POS — Track. Sell. Grow.",
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
