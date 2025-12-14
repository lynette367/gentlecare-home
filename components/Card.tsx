import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-3xl bg-white/90 p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-1",
        className
      )}
    >
      {children}
    </Tag>
  );
}
