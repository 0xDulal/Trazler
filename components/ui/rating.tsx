import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Compact numeric rating with a filled star and optional review count. */
export function Rating({
  value,
  count,
  className,
}: {
  value: number;
  count?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", className)}>
      <Star className="h-4 w-4 fill-brand-500 text-brand-500" />
      <span className="font-semibold text-ink-900">{value.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-ink-500">({count.toLocaleString()})</span>
      )}
    </span>
  );
}
