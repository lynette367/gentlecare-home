import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Irvine Caregiver Services | GentleCare Home",
  description:
    "Explore Irvine home cleaning, babysitting, tutoring, cooking, and beauty services across Orange County. Hire caregivers directly through GentleCare.",
};

const serviceBlocks = [
  {
    name: "Nanny & babysitting",
    description:
      "Caregivers experienced with infants to tweens who can handle naps, school runs, bedtime rituals, and sibling harmony with ease.",
    tasks: ["Newborn routines", "School pick-ups", "Bedtime support", "Weekend adventures"],
  },
  {
    name: "Homework tutoring",
    description:
      "Academic mentors who bring clarity to maths, language, and creative projects while keeping studying joyful.",
    tasks: ["Bilingual reading", "Study planning", "Test preparation", "Creative writing"],
  },
  {
    name: "Home cleaning",
    description:
      "Specialists in restorative cleaning, laundry care, and gentle organizing so every room feels breathable and calm.",
    tasks: ["Deep cleaning", "Laundry & folding", "Wardrobe resets", "Seasonal refresh"],
  },
  {
    name: "Home cooking & meal prep",
    description:
      "Private cooks who craft cozy soups, freezer-friendly lunches, and weekly menus tailored to your family’s preferences.",
    tasks: ["Menu planning", "Grocery prep", "Batch cooking", "Dietary accommodations"],
  },
  {
    name: "At-home beauty + manicure",
    description:
      "Licensed professionals offering manicures, facials, and gentle spa rituals from the comfort of home.",
    tasks: ["Gel manicure", "Gentle facials", "Head & shoulder massage", "Event touch-ups"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-shell/40 py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <SectionHeader
          eyebrow="Services in Irvine"
          title="Our caregiving categories in Orange County"
          description="Every caregiver sets their own pricing and schedule. GentleCare simply showcases Irvine-area talent so families can reach out directly."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {serviceBlocks.map((service) => (
            <Card key={service.name} className="bg-white/95">
              <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
                {service.tasks.map((task) => (
                  <li
                    key={task}
                    className="rounded-full bg-shell px-3 py-1 font-semibold text-ink/70"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
