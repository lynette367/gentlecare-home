import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const familySteps = [
  {
    title: "Browse & shortlist",
    detail:
      "Explore caregiver profiles to get a feel for their style, specialties, and spoken languages.",
  },
  {
    title: "Submit an inquiry",
    detail:
      "Share the basics — family members, schedule, preferred services, and city/district.",
  },
  {
    title: "Caregivers respond",
    detail:
      "Matching caregivers contact you directly via your preferred channel to introduce themselves.",
  },
  {
    title: "Meet & hire",
    detail:
      "You interview, trial, and hire off-platform. Payments, contracts, and schedules are fully yours to manage.",
  },
];

const caregiverSteps = [
  {
    title: "Apply to be listed",
    detail:
      "Share your certifications, references, and service focus. We highlight your strengths with soft visuals.",
  },
  {
    title: "Receive inquiries",
    detail:
      "Families submit their needs and you respond to the ones that fit your expertise and availability.",
  },
  {
    title: "Coordinate directly",
    detail:
      "You decide rates, schedules, and agreements with the family. GentleCare does not mediate payments.",
  },
];

const faqs = [
  {
    question: "Do you charge families to browse?",
    answer:
      "No. Families can browse profiles and submit inquiries for free. If you decide to hire someone, you pay the caregiver directly.",
  },
  {
    question: "Are caregivers employees of GentleCare?",
    answer:
      "No. Every caregiver is an independent professional or agency. GentleCare Home is only a directory.",
  },
  {
    question: "Can I request background checks?",
    answer:
      "Yes. Many caregivers upload their existing checks. You can ask for additional documents when you speak directly.",
  },
  {
    question: "Do you manage contracts or payroll?",
    answer:
      "We provide templates and friendly guidance, but contracts, payroll, and benefits stay between the family and caregiver.",
  },
  {
    question: "How quickly will someone reply?",
    answer:
      "Most inquiries hear from at least two caregivers within 24 hours depending on city and category demand.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <SectionHeader
          eyebrow="Process"
          title="How GentleCare works"
          description="We keep things warm, respectful, and transparent for both families and caregivers."
        />
        <section className="grid gap-6 md:grid-cols-2">
          <Card className="bg-shell/70">
            <h3 className="text-xl font-semibold text-ink">Families / clients</h3>
            <ol className="mt-4 space-y-4 text-sm text-muted">
              {familySteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-white/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-base font-semibold text-ink">{step.title}</p>
                  <p className="mt-1">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Card>
          <Card className="bg-sky/40">
            <h3 className="text-xl font-semibold text-ink">Caregivers</h3>
            <ol className="mt-4 space-y-4 text-sm text-muted">
              {caregiverSteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-white/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    Phase {index + 1}
                  </p>
                  <p className="mt-1 text-base font-semibold text-ink">{step.title}</p>
                  <p className="mt-1">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Card>
        </section>
        <section>
          <SectionHeader
            eyebrow="FAQ"
            align="left"
            title="Common questions"
            description="Still unsure? Send us a note and we’ll clarify how the directory works in your city."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="bg-white/95">
                <h4 className="text-lg font-semibold text-ink">{faq.question}</h4>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
