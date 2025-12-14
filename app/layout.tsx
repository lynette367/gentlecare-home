import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Irvine Home Cleaning & Babysitting | GentleCare",
  description:
    "GentleCare Home connects Irvine and Orange County families with trusted home cleaners and babysitters. Hire caregivers directly without agency fees.",
  openGraph: {
    title: "Irvine Home Cleaning & Babysitting | GentleCare",
    description:
      "Discover trustworthy Irvine and Orange County caregivers for everyday home life through a simple referral request.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-oat text-ink antialiased selection:bg-peach/60 selection:text-ink`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-peach/30 via-transparent to-transparent opacity-70" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
