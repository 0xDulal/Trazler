import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge doesn't know our custom theme tokens, so it mis-classifies
 * `text-display` / `text-h2` as text *colors* and drops them when a real color
 * like `text-ink-900` is also present. Register the custom font-size scale so
 * size and color live in separate conflict groups.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "h1", "h2", "h3"] },
      ],
    },
  },
});

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as a currency string (USD by default). */
export function formatPrice(
  amount: number,
  currency = "USD",
  locale = "en-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a duration in days into a short human label. */
export function formatDuration(days: number) {
  if (days < 1) return "Half day";
  if (days === 1) return "1 day";
  const nights = days - 1;
  return `${days} days${nights > 0 ? ` · ${nights} nights` : ""}`;
}
