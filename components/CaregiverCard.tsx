import Link from "next/link";
import { Caregiver } from "@/data/caregivers";
import { Card } from "./Card";
import { Badge } from "./Badge";

interface CaregiverCardProps {
  caregiver: Caregiver;
}

export function CaregiverCard({ caregiver }: CaregiverCardProps) {
  const initials = caregiver.name
    .split(" ")
    .map((segment) => segment[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link href={`/caregivers/${caregiver.id}`} className="group block">
      <Card className="h-full bg-white/95 transition duration-200 group-hover:-translate-y-2 group-hover:shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-peach/50 text-lg font-semibold text-ink shadow-inner"
              aria-hidden
            >
              {initials}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                {caregiver.role}
              </p>
              <h3 className="text-xl font-semibold text-ink">{caregiver.name}</h3>
              <p className="text-sm text-muted">
                {caregiver.city} · {caregiver.area}
              </p>
            </div>
          </div>
          <Badge variant="moss" className="text-xs">
            {caregiver.experience}+ yrs experience
          </Badge>
        </div>
        <p className="mt-4 text-sm text-ink/80">{caregiver.about}</p>
        <div className="mt-4 grid gap-2 text-sm text-muted">
          <p>
            <span className="font-semibold text-ink">Service area:</span> Irvine · {caregiver.area}
          </p>
          <p>
            <span className="font-semibold text-ink">Availability:</span> {caregiver.availability}
          </p>
          <p>
            <span className="font-semibold text-ink">Languages:</span> {caregiver.languages.join(", ")}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {caregiver.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="blush">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
