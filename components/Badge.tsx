import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  blush: "bg-blush/20 text-ink",
  lilac: "bg-lilac/30 text-ink",
  sky: "bg-sky/30 text-ink",
  moss: "bg-moss/20 text-ink",
  neutral: "bg-shell text-ink/80",
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

export function Badge({ children, className, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
