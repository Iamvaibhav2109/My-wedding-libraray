import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { couple, weddingDateLabel } from "./data/site";
import "./globals.css";

/**
 * The fonts are self-hosted (latin subset, straight from Google Fonts) rather
 * than loaded through `next/font/google`, so the site builds and renders even
 * on networks that block fonts.googleapis.com — and guests get no third-party
 * request on page load.
 */

const heading = localFont({
  src: "./fonts/GreatVibes.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-script",
  display: "swap",
  fallback: ["Segoe Script", "cursive"],
});

const body = localFont({
  src: "./fonts/CormorantGaramond.woff2",
  // Variable font covering the full 300–700 range in a single file.
  weight: "300 700",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const title = `${couple.groom.name} ❤️ ${couple.bride.name}`;
const description = `Join us as we celebrate our wedding on ${weddingDateLabel.long}. ${couple.hashtag}`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your real domain before going live so the
  // WhatsApp / social link preview resolves the right image URL.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/images/trailer/poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0a04",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ink text-white antialiased">
        {children}
      </body>
    </html>
  );
}
