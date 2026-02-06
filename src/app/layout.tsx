import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: "Cavalier Cabling LLC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SEO.title,
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cavalier Cabling LLC",
  url: SEO.url,
  description: SEO.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Huron",
    addressRegion: "MI",
    addressCountry: "US",
  },
  telephone: "+15804917100",
  email: "info@cavaliercabling.com",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cable Assembly Services",
    itemListElement: [
      "Custom Cable Assemblies",
      "Wire Harness Manufacturing",
      "MIL-Spec & Aerospace Cabling",
      "Connector Termination & Overmolding",
      "Engineering & Prototyping",
      "Testing & Quality Assurance",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
