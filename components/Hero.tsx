"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";


import { InquiryForm } from "./InquiryForm";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-shell via-soft to-sky/20">
      <div className="absolute inset-y-0 left-0 w-full max-w-xl -rotate-6 bg-gradient-to-br from-peach/60 via-white/40 to-lilac/40 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1 space-y-8 text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-muted">
            Irvine · California
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
              Irvine’s Most Reliable <br className="hidden md:block" />
              Home Cleaning Service
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl lg:mx-0">
              Professional, background-checked cleaners. 100% Satisfaction Guaranteed. See your price in 60 seconds.
            </p>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden">
            <Button size="lg" className="w-full" href="#inquiry">
              Get My Instant Quote
            </Button>
          </div>

          <div className="hidden items-center justify-center gap-8 lg:flex lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-ink">4.9/5</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Google Rating</p>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-ink">10,000+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Cleaned Homes</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-[450px]">
          <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-peach/50 blur-3xl" />
          <InquiryForm id="inquiry" className="shadow-2xl" />

          {/* Trust Bar */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-2">
            {[
              { label: "Licensed & Insured", icon: "🛡️" },
              { label: "Local Irvine Team", icon: "📍" },
              { label: "Eco-friendly Products", icon: "🌱" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-xl bg-white/50 px-3 py-2 backdrop-blur-sm lg:px-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tight text-ink/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
