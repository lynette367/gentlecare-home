"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);

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
        <Button size="md" href="/#inquiry">
          Submit an inquiry
        </Button>
      </div>
    </header>
  );
}
