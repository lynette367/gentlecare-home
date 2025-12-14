import { notFound } from "next/navigation";
import {
  caregivers,
  getCaregiverById,
  serviceFilters,
} from "@/data/caregivers";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { InquiryForm } from "@/components/InquiryForm";

interface CaregiverPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return caregivers.map((caregiver) => ({ id: caregiver.id }));
}

export async function generateMetadata({ params }: CaregiverPageProps) {
  const caregiver = getCaregiverById(params.id);
  if (!caregiver) return {};
  return {
    title: `${caregiver.name} | GentleCare caregiver profile`,
    description: caregiver.about,
  };
}

export default function CaregiverDetailPage({ params }: CaregiverPageProps) {
  const caregiver = getCaregiverById(params.id);

  if (!caregiver) {
    notFound();
  }

  return (
    <div className="bg-shell/40 py-16">
      <div className="mx-auto max-w-5xl space-y-10 px-4">
        <div className="rounded-3xl bg-gradient-to-br from-peach/60 via-white to-lilac/30 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            {caregiver.role}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-ink">{caregiver.name}</h1>
          <p className="mt-2 text-sm text-muted">
            {caregiver.city} · {caregiver.area} · {caregiver.experience}+ yrs experience
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {caregiver.services.map((service) => (
              <Badge key={service} variant="lilac">
                {serviceFilters[service]}
              </Badge>
            ))}
          </div>
        </div>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <SectionHeader
              align="left"
              title="About"
              description={caregiver.about}
            />
            <div>
              <h3 className="text-lg font-semibold text-ink">Services offered</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {caregiver.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 rounded-3xl bg-white/90 p-5 shadow-card">
              <p className="text-sm text-muted">Availability snapshot</p>
              <p className="text-lg font-semibold text-ink">
                {caregiver.availability}
              </p>
              <div className="grid gap-2 text-sm text-muted">
                <p>
                  <span className="font-semibold text-ink">Languages:</span> {" "}
                  {caregiver.languages.join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-ink">Hourly rate:</span> {" "}
                  {caregiver.rate}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/95 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-ink">A story we love</h3>
              <p className="mt-3 text-sm text-muted">{caregiver.story}</p>
              <p className="mt-4 text-xs text-muted">
                GentleCare Home is not the employer. Reach out directly to coordinate schedules, contracts, and payments.
              </p>
            </div>
            <InquiryForm caregiverName={caregiver.name} />
          </div>
        </section>
      </div>
    </div>
  );
}
