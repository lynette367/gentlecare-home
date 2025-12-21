"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const serviceTypes = [
  { value: "cleaning", label: "Cleaning" },
  { value: "babysitting", label: "Babysitting" },
];

const frequencyOptions = [
  { value: "one-time", label: "One-time" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
];

const contactMethods = [
  { value: "SMS", label: "SMS" },
  { value: "Email", label: "Email" },
];

interface InquiryFormProps {
  id?: string;
  caregiverName?: string;
  className?: string;
}

export function InquiryForm({ id, caregiverName, className }: InquiryFormProps) {
  const [serviceType, setServiceType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [contactMethod, setContactMethod] = useState("SMS");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const zip = formData.get("zip")?.toString().trim();
    const startDate = formData.get("startDate")?.toString().trim();

    if (
      !name ||
      !email ||
      !phone ||
      !zip ||
      !serviceType ||
      !frequency ||
      !startDate ||
      !contactMethod
    ) {
      setStatus("error");
      setMessage("Please complete the required fields highlighted in the form.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          zip,
          serviceType,
          frequency,
          startDate,
          contactMethod,
          notes: formData.get("notes")?.toString() ?? "",
          caregiverName,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setMessage("You're all set. Available Irvine caregivers typically respond within 24 hours.");
      form.reset();
      setServiceType("");
      setFrequency("");
      setContactMethod("SMS");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again or email hello@gentlecare.example");
    }
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn(
        "rounded-3xl bg-white/95 p-6 shadow-soft backdrop-blur",
        className
      )}
    >
      <div className="mb-6 space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Start here
        </p>
        <h3 className="text-2xl font-semibold text-ink">Submit an inquiry</h3>
        <p className="text-sm text-muted">
          Caregivers will contact you directly. GentleCare does not employ caregivers.
        </p>
        <p className="text-sm font-semibold text-moss">
          Free to request. No obligation. No fees.
        </p>
        {caregiverName && (
          <p className="text-xs font-semibold text-ink/70">
            Inquiry for <span className="text-ink">{caregiverName}</span>
          </p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm font-medium text-ink">
          Full name*
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-ink">
          Email*
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
            placeholder="you@email.com"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-ink">
          Phone*
          <input
            name="phone"
            required
            className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
            placeholder="949-555-1234"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-ink">
          Zip code*
          <input
            name="zip"
            required
            className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
            placeholder="Irvine CA 926xx"
          />
        </label>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-sm font-medium text-ink">Service type*</p>
        <div className="flex flex-wrap gap-2">
          {serviceTypes.map((option) => {
            const isActive = serviceType === option.value;
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => setServiceType(option.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-transparent bg-peach text-ink"
                    : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-sm font-medium text-ink">Frequency*</p>
        <div className="flex flex-wrap gap-2">
          {frequencyOptions.map((option) => {
            const isActive = frequency === option.value;
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => setFrequency(option.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-transparent bg-peach text-ink"
                    : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <label className="mt-6 block space-y-1 text-sm font-medium text-ink">
        Desired start date*
        <input
          type="date"
          name="startDate"
          required
          className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
        />
      </label>
      <div className="mt-4 space-y-2">
        <p className="text-sm font-medium text-ink">Preferred contact method*</p>
        <div className="flex flex-wrap gap-2">
          {contactMethods.map((option) => {
            const isActive = contactMethod === option.value;
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => setContactMethod(option.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-transparent bg-peach text-ink"
                    : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <label className="mt-4 block space-y-1 text-sm font-medium text-ink">
        Household notes or specifics
        <textarea
          name="notes"
          className="min-h-[90px] w-full rounded-2xl border border-ink/10 bg-shell px-4 py-3 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
          placeholder="Gate code, parking details, ages of children, cleaning priorities, etc."
        />
      </label>
      <p className="mt-4 text-xs text-muted">
        GentleCare Home is a referral directory only. We do not employ, supervise, or contract caregivers. All hiring decisions, payments, and agreements are made directly between families and caregivers.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Get My Instant Quote"}
        </Button>
        {message && (
          <p
            className={cn(
              "text-sm",
              status === "success" ? "text-moss" : "text-[#c94857]"
            )}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
