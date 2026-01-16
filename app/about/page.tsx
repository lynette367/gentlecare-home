import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const values = [
  {
    title: "Warm professionalism",
    detail: "We pair a gentle aesthetic with rigorous vetting so families feel safe inviting someone home.",
  },
  {
    title: "Transparency",
    detail: "Rates, availability, and service boundaries are clearly listed. There are no hidden commissions for browsing families.",
  },
  {
    title: "Respect for caregivers",
    detail: "We spotlight the craft of care work and encourage fair, direct agreements between both sides.",
  },
];

const trust = [
  {
    title: "Profile verification",
    detail: "ID checks, references, and portfolio pieces are reviewed and noted on profiles where possible.",
  },
  {
    title: "Supportive templates",
    detail: "Downloadable interview scripts, contract outlines, and payment trackers help you stay organized.",
  },
  {
    title: "Responsive humans",
    detail: "A small concierge team replies to inquiries within one business day for gentle guidance.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-soft py-16">
      <div className="mx-auto max-w-5xl space-y-10 px-4">
        <SectionHeader
          eyebrow="About"
          title="A listing platform built for calm homes"
          description="GerishCare Home started after hearing from parents who wanted an easier, more tender way to find trustworthy caregiving partners."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="bg-white/95">
              <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-muted">{value.detail}</p>
            </Card>
          ))}
        </div>
        <SectionHeader
          eyebrow="Trust & safety"
          align="left"
          title="How we support both sides"
          description="GerishCare is not the employer, but we provide tools so everyone can collaborate with clarity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {trust.map((item) => (
            <Card key={item.title} className="bg-white/95">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
