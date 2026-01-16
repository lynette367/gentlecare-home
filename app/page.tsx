import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Irvine’s Most Reliable Home Cleaning Service | GerishCare",
  description:
    "Book professional, background-checked cleaners in Irvine, CA. 100% Satisfaction Guaranteed. See your price and get an instant quote in 60 seconds.",
  alternates: {
    canonical: "/",
  },
};

const neighborhoods = [
  "Woodbury",
  "Northwood",
  "Turtle Ridge",
  "Orchard Hills",
  "Portola Springs",
  "University Park",
];

const steps = [
  {
    title: "Instant Quote",
    description: "Share your zip and cleaning needs to see your price immediately.",
  },
  {
    title: "Vetted Professional",
    description: "A background-checked, local Irvine professional is assigned to your home.",
  },
  {
    title: "100% Satisfaction",
    description: "Enjoy a sparkling home with our satisfaction guarantee. Easy, direct billing.",
  },
];

const trustPoints = [
  {
    title: "Licensed & Insured",
    text: "Your home is protected. We are fully bonded, licensed, and insured for your peace of mind.",
  },
  {
    title: "Local Irvine Team",
    text: "We aren't a national chain. Our cleaners live in and love the Irvine neighborhoods they serve.",
  },
  {
    title: "Eco-friendly Products",
    text: "Safe for kids, pets, and the planet. We use premium non-toxic solutions for every deep cleaning services near me.",
  },
];

const stories = [
  {
    quote:
      "The best cleaning service in Woodbury. They handled our move-in cleaning perfectly and with so much care.",
    author: "The Sloane family, Irvine",
  },
  {
    quote:
      "Finally a service that's reliable and local. Our Northwood home has never looked better. Highly recommend!",
    author: "Aria & Daniel, Irvine",
  },
];

export default function Home() {
  return (
    <div className="pb-24">
      <Hero />
      <ServiceAreaMap />

      <section className="bg-shell/30 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="How it works"
            title="A cleaner home in three simple steps"
            description="Our process is designed to be fast, transparent, and completely stress-free."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="group relative h-full bg-white transition-all hover:shadow-xl">
                <Badge variant="lilac" className="mb-4 text-xs font-bold uppercase tracking-widest">
                  Step {index + 1}
                </Badge>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-4 text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Trust & Safety"
            title="Your home is in safe hands"
            description="We prioritize safety and quality above all else, ensuring every visit is perfect."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {trustPoints.map((point) => (
              <Card key={point.title} className="bg-white p-8">
                <h3 className="text-xl font-bold text-ink">{point.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{point.text}</p>
              </Card>
            ))}
          </div>
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

      <section className="mt-24 border-t border-peach/10 py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-muted">
            Serving all Irvine neighborhoods including{" "}
            {neighborhoods.map((n, i) => (
              <span key={n}>
                {n}
                {i < neighborhoods.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            and surrounding areas.
          </p>
          <p className="mt-4 text-sm text-muted">
            Serving Irvine zip codes: 92602, 92603, 92604, 92606, 92612, 92614, 92617, 92618, 92620.
          </p>
        </div>
      </section>
    </div>
  );
}
