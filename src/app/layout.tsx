import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SITE_DESCRIPTION, SITE_INDEXABLE, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL } from "@/features/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// "Basic SEO setup" from the Starter package: title, description, keywords,
// Open Graph / Twitter cards, canonical URL, robots.txt and sitemap.xml.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: SITE_INDEXABLE, follow: SITE_INDEXABLE },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${manrope.variable} scroll-smooth scroll-pt-20 antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink selection:bg-crema/50">{children}</body>
    </html>
  );
}
