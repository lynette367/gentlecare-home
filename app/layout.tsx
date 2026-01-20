import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gerish.xyz"),
  title: {
    default: "Irvine's Most Reliable Home Cleaning Service | GerishCare",
    template: "%s | GerishCare",
  },
  description:
    "GerishCare Home connects Irvine and Orange County families with trusted home cleaners. Hire directly without agency fees.",
  openGraph: {
    title: "Irvine Home Cleaning | GerishCare",
    description:
      "Discover trustworthy Irvine and Orange County home cleaners for everyday home life through a simple referral request.",
    type: "website",
    locale: "en_US",
    siteName: "GerishCare Home",
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GerishCare Home",
  description:
    "Connecting Irvine and Orange County families with trusted home cleaners. Direct hire, no agency fees.",
  url: "https://www.gerish.xyz",
  areaServed: {
    "@type": "City",
    name: "Irvine",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Irvine",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$$",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isChinesePage = pathname.startsWith("/zh");

  return (
    <html lang={isChinesePage ? "zh-CN" : "en"}>
      <body
        className={`${manrope.variable} bg-oat text-ink antialiased selection:bg-peach/60 selection:text-ink`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B18FN3J293"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B18FN3J293');
          `}
        </Script>
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-peach/30 via-transparent to-transparent opacity-70" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
