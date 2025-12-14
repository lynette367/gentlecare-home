"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { caregivers } from "@/data/caregivers";

const previewCaregivers = caregivers.slice(0, 3);

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
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center">
        <div className="relative z-10 space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-muted">
            Irvine · Orange County
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
            Find Trusted Home Cleaners & Babysitters in Irvine
          </h1>
          <p className="text-lg text-muted md:text-xl">
            Professionally vetted local caregivers. No agency fees. Get matched in 24 hours when you submit your needs.
          </p>
          <p className="text-sm font-semibold text-ink/80">
            Every single day counts · Laughter lights up your life
          </p>
          <div className="flex flex-col gap-3 text-sm font-semibold md:flex-row">
            <Button size="lg" className="w-full md:w-auto" href="/#inquiry">
              Get matched in 2 minutes
            </Button>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-1/2">
          <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-peach/50 blur-3xl" />
          <div
            className="absolute -left-10 top-16 h-32 w-32 rounded-full bg-lilac/40 blur-3xl"
            style={{ transform: `translateY(${offset * 0.3}px)` }}
            aria-hidden
          />
          <div className="relative space-y-5">
            {previewCaregivers.map((caregiver, index) => (
              <div
                key={caregiver.id}
                style={{ transform: `translateY(${offset * 0.05 * index}px)` }}
                className="block rounded-3xl bg-white/90 p-5 shadow-soft backdrop-blur"
                aria-label="Caregiver preview"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      {caregiver.role}
                    </p>
                    <p className="text-lg font-semibold text-ink blur-[2px] select-none" aria-hidden>
                      {caregiver.name}
                    </p>
                    <p className="text-sm text-muted">
                      {caregiver.city} · {caregiver.area}
                    </p>
                  </div>
                  <span className="rounded-full bg-shell px-3 py-1 text-xs font-semibold text-muted">
                    {caregiver.experience}+ yrs exp
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/80">
                  {caregiver.tags.slice(0, 2).join(" · ")}
                </p>
              </div>
            ))}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Full caregiver profiles are shared after you submit your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
