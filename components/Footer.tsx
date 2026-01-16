import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm6.25-2.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "WeChat",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M4.5 9.75a5.25 5.25 0 0 1 9-3.75 6 6 0 1 1 4.5 10.25l-3 2.5.75-3.75A6 6 0 0 1 4.5 9.75z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M12 2a10 10 0 0 0-8.66 15l-1.08 4.1 4.2-1.1A10 10 0 1 0 12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-shell/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-ink">GerishCare Home</p>
          <p className="text-sm text-muted">
            A gentle household caregiver referral for modern families seeking trusted help at home.
          </p>
          <p className="text-sm text-muted">
            Email: hello@gerish.xyz
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <span
                key={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-ink"
                aria-label={social.name}
              >
                {social.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="font-semibold text-ink">Disclaimer</p>
          <p>
            GerishCare Home is a referral directory only. We do not employ, supervise, or contract caregivers. All hiring decisions, payments, and agreements are made directly between families and caregivers.
          </p>
          <div className="flex flex-wrap gap-4 text-ink">
            {[
              { label: "Terms", href: "#" },
              { label: "Privacy", href: "#" },
              { label: "Disclaimer", href: "#" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-sm text-muted hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} GerishCare Home. All inquiries receive a human reply within 1 business day.
      </div>
    </footer>
  );
}
