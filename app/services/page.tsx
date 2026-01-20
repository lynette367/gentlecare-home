import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Irvine Caregiver Services | GerishCare Home",
  description:
    "Explore Irvine home cleaning services across Orange County. Hire cleaners directly through GerishCare.",
};

const serviceBlocks = [
  {
    name: "Home cleaning",
    description:
      "Specialists in restorative cleaning, laundry care, and gentle organizing so every room feels breathable and calm.",
    tasks: ["Deep cleaning", "Laundry & folding", "Wardrobe resets", "Seasonal refresh"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-shell/40 py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <SectionHeader
          eyebrow="Services in Irvine"
          title="Our cleaning services in Orange County"
          description="Every cleaner sets their own pricing and schedule. GerishCare simply showcases Irvine-area talent so families can reach out directly."
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
