"use client";

import { useMemo, useState } from "react";
import {
  Caregiver,
  ServiceCategory,
  caregivers,
  serviceFilters,
} from "@/data/caregivers";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CaregiverCard } from "@/components/CaregiverCard";
import { cn } from "@/lib/utils";

const cityOptions = ["All", ...new Set(caregivers.map((caregiver) => caregiver.city))];

export default function CaregiversPage() {
  const [selectedServices, setSelectedServices] = useState<ServiceCategory[]>([]);
  const [city, setCity] = useState("All");
  const [experience, setExperience] = useState(0);

  const filteredCaregivers = useMemo(() => {
    return caregivers.filter((caregiver) => {
      const serviceMatch =
        selectedServices.length === 0 ||
        selectedServices.some((service) => caregiver.services.includes(service));
      const cityMatch = city === "All" || caregiver.city === city;
      const experienceMatch = caregiver.experience >= experience;
      return serviceMatch && cityMatch && experienceMatch;
    });
  }, [selectedServices, city, experience]);

  function toggleService(service: ServiceCategory) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-16">
      <SectionHeader
        align="left"
        eyebrow="Caregivers"
        title="Filters for every family rhythm"
        description="Use the quick filters below to discover caregivers whose services match your day-to-day life."
      />
      <Card className="bg-white/95">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold text-ink">Service type</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {Object.entries(serviceFilters).map(([value, label]) => {
                const active = selectedServices.includes(value as ServiceCategory);
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => toggleService(value as ServiceCategory)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-semibold transition",
                      active
                        ? "border-transparent bg-peach text-ink"
                        : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-1 text-sm font-semibold text-ink">
              City
              <select
                className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-3 text-sm text-ink focus:border-peach focus:outline-none"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              >
                {cityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Minimum experience: {experience}+ years
              <input
                type="range"
                min={0}
                max={12}
                step={1}
                value={experience}
                onChange={(event) => setExperience(Number(event.target.value))}
                className="w-full"
              />
            </label>
          </div>
        </div>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredCaregivers.length === 0 ? (
          <p className="text-muted">
            No caregivers found with those filters. Try adjusting the service type or experience level.
          </p>
        ) : (
          filteredCaregivers.map((caregiver: Caregiver) => (
            <CaregiverCard key={caregiver.id} caregiver={caregiver} />
          ))
        )}
      </div>
    </div>
  );
}
