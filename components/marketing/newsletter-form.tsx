"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Newsletter signup. Validates locally and shows a success state; wiring to a
 * real subscription endpoint happens once the backend list is provisioned.
 */
export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("done");
    setEmail("");
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl bg-ink-900 px-5 py-4 text-white",
          className,
        )}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success">
          <Check className="h-4 w-4" />
        </span>
        <p className="text-[0.95rem]">
          You&apos;re on the list. Watch your inbox for our next dispatch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <label
        htmlFor="newsletter-email"
        className="text-sm font-medium text-white"
      >
        Get travel dispatches, twice a month
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className={cn(
            "h-12 w-full rounded-full bg-ink-900 px-5 text-[0.95rem] text-white placeholder:text-ink-500",
            "border transition-colors focus:outline-none focus-visible:border-brand-500",
            status === "error" ? "border-danger" : "border-ink-700",
          )}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {status === "error" && (
        <p id="newsletter-error" className="mt-2 text-sm text-danger">
          Enter a valid email address to subscribe.
        </p>
      )}
    </form>
  );
}
