import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { InquiryForm } from "@/components/InquiryForm";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Irvine Home Cleaning & Babysitting | GentleCare",
  description:
    "Book trusted home cleaners and babysitters in Irvine, California. Orange County families hire directly with no agency fees.",
};

const steps = [
  {
    title: "Submit your needs",
    description: "Share your zip, timing, and whether you need cleaning or babysitting.",
  },
  {
    title: "We alert local caregivers",
    description: "A small pool of vetted Irvine caregivers is notified right away.",
  },
  {
    title: "They contact you directly",
    description: "You hear from available caregivers within 24 hours and hire them yourself.",
  },
];

const trustPoints = [
  {
    title: "Local and vetted",
    text: "Only Irvine and nearby Orange County caregivers who have verified experience get notified.",
  },
  {
    title: "Direct hiring, no fees",
    text: "You speak, decide, and pay caregivers directly. GentleCare never charges families or manages contracts.",
  },
  {
    title: "Fast replies",
    text: "Most inquiries get a first response within one day so you can plan confidently.",
  },
];

const stories = [
  {
    quote:
      "Taylor set up a calm bedtime rhythm for our two kids and checked in after every visit. Woodbridge feels lighter.",
    author: "The Sloane family, Irvine",
  },
  {
    quote:
      "We submitted the form and heard from two cleaners within a day. The Northwood townhouse sparkles without a subscription fee.",
    author: "Aria & Daniel, Irvine",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-24">
      <Hero />

      <section className="bg-shell/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="How it works"
            title="One request, quick matches"
            description="Submit your needs and local caregivers will reach out directly — no browsing or comparing required."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="h-full bg-white/95">
                <Badge variant="lilac" className="mb-3 text-xs">
                  Step {index + 1}
                </Badge>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss/10 py-16" id="inquiry">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeader
            eyebrow="Ready when you are"
            title="Share your Irvine needs in two minutes"
            description="Available local caregivers will contact you directly after submission. No accounts, no platform hoops."
          />
          <InquiryForm className="mt-10" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Trust & Safety"
          title="Built for fast, confident hires"
          description="Clear expectations and direct conversations keep families in control from the start."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trustPoints.map((point) => (
            <Card key={point.title} className="bg-white/95">
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 text-sm text-muted">{point.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow="Stories"
          title="Real Irvine families, real relief"
          description="Short whispers from homes that recently found their helper through a single inquiry."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <Card key={story.author} className="bg-white/95">
              <p className="text-lg text-ink/90">“{story.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-muted">{story.author}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
