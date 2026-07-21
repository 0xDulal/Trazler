import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/**
 * Section intro: a lead line, a display title, optional supporting copy and an
 * optional inline link. Deliberately not the tiny-tracked-eyebrow pattern —
 * the lead is a full phrase in the brand color, not an all-caps kicker.
 */
export function SectionHeading({
  lead,
  title,
  description,
  link,
  align = "left",
  tone = "dark",
  className,
}: {
  lead?: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4 md:flex-row md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {lead && (
          <p
            className={cn(
              "text-sm font-semibold",
              light ? "text-brand-300" : "text-brand-600",
            )}
          >
            {lead}
          </p>
        )}
        <h2
          className={cn(
            "mt-2 text-h2 font-semibold",
            light ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-[1.05rem] leading-relaxed",
              light ? "text-ink-300" : "text-ink-600",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {link && (
        <Link
          href={link.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-medium",
            light ? "text-white" : "text-ink-900",
          )}
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}
