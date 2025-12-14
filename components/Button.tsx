import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-blush text-ink shadow-soft hover:scale-[1.02] hover:bg-peach focus-visible:ring-2 focus-visible:ring-peach/70",
  secondary:
    "bg-white/80 text-ink shadow-card hover:scale-[1.02] hover:bg-white focus-visible:ring-2 focus-visible:ring-lilac/70",
  ghost:
    "bg-transparent text-ink/80 border border-ink/10 hover:bg-white/60",
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  href?: string;
  ariaLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ariaLabel,
  type,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick as undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
