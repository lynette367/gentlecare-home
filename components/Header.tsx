"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300",
        solid ? "bg-oat/95 shadow-card" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-ink">
          GerishCare <span className="text-muted">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href={pathname?.startsWith("/zh") ? "/" : "/zh"}
            className="group flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/50 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-peach hover:bg-peach/10"
            aria-label="Switch language"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 text-muted group-hover:text-ink transition-colors"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{pathname?.startsWith("/zh") ? "English" : "中文"}</span>
          </Link>
          <Button size="md" href="/#inquiry">
            Submit an inquiry
          </Button>
        </div>
      </div>
    </header>
  );
}
