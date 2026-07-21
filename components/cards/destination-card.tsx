import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types/domain";
import { cn } from "@/lib/utils";

/**
 * Editorial destination tile. `size` drives the aspect ratio so a grid can mix
 * tall and standard tiles for rhythm rather than a uniform card wall.
 */
export function DestinationCard({
  destination,
  size = "standard",
}: {
  destination: Destination;
  size?: "standard" | "tall";
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={cn(
        "group relative flex overflow-hidden rounded-3xl",
        size === "tall" ? "aspect-[3/4]" : "aspect-[4/5]",
      )}
    >
      <Image
        src={destination.heroImage}
        alt={destination.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />

      <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-5 text-white">
        <div>
          <p className="text-xs font-medium tracking-wide text-white/80 uppercase">
            {destination.country}
          </p>
          <h3 className="mt-1 text-2xl font-semibold">{destination.name}</h3>
          <p className="mt-1 text-sm text-white/80">
            {destination.tourCount} tours
          </p>
        </div>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-500">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
