import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "mx-auto max-w-3xl text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {description && <p className="text-base text-muted">{description}</p>}
    </div>
  );
}
