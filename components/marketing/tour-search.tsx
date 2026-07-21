"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Compass, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: "", label: "Any experience" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
  { value: "beach", label: "Beach & islands" },
  { value: "wildlife", label: "Wildlife" },
  { value: "honeymoon", label: "Honeymoon" },
];

/**
 * Hero search. Composes a query string and routes to the tours listing, where
 * the real filtering lives. Works as a plain form so it degrades gracefully.
 */
export function TourSearch({ className }: { className?: string }) {
  const router = useRouter();
  const [where, setWhere] = useState("");
  const [category, setCategory] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (where.trim()) params.set("q", where.trim());
    if (category) params.set("category", category);
    const qs = params.toString();
    router.push(qs ? `/tours?${qs}` : "/tours");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex flex-col gap-3 rounded-3xl bg-surface/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full sm:p-2",
        className,
      )}
    >
      <div className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full sm:py-2">
        <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
        <div className="flex-1">
          <label
            htmlFor="search-where"
            className="block text-xs font-medium text-ink-500"
          >
            Where to
          </label>
          <input
            id="search-where"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder="Santorini, Bali, Kyoto…"
            className="w-full bg-transparent text-[0.95rem] text-ink-900 placeholder:text-ink-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="hidden h-10 w-px bg-ink-200 sm:block" />

      <div className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full sm:py-2">
        <Compass className="h-5 w-5 shrink-0 text-brand-500" />
        <div className="flex-1">
          <label
            htmlFor="search-category"
            className="block text-xs font-medium text-ink-500"
          >
            Experience
          </label>
          <select
            id="search-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-[0.95rem] text-ink-900 focus:outline-none"
          >
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-medium text-white transition-colors hover:bg-brand-600 sm:h-14 sm:w-14 sm:px-0"
      >
        <Search className="h-5 w-5" />
        <span className="sm:hidden">Search tours</span>
      </button>
    </form>
  );
}
