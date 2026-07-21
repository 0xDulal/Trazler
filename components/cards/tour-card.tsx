import Link from "next/link";
import Image from "next/image";
import { Clock, Users, MapPin } from "lucide-react";
import type { Tour } from "@/types/domain";
import { Rating } from "@/components/ui/rating";
import { formatPrice, formatDuration } from "@/lib/utils";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5" />
          {tour.destinationName}, {tour.country}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <Rating value={tour.rating} count={tour.reviewCount} />
          <div className="flex items-center gap-3 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {formatDuration(tour.durationDays)}
            </span>
          </div>
        </div>

        <h3 className="mt-3 text-xl font-semibold text-ink-900">
          <Link href={`/tours/${tour.slug}`} className="before:absolute before:inset-0">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-ink-600">
          {tour.summary}
        </p>

        <div className="mt-auto flex items-end justify-between border-t border-ink-100 pt-5">
          <span className="inline-flex items-center gap-1 text-sm text-ink-500">
            <Users className="h-4 w-4" />
            Up to {tour.groupSize}
          </span>
          <span className="text-right">
            <span className="block text-xs text-ink-500">From</span>
            <span className="text-lg font-semibold text-ink-900">
              {formatPrice(tour.priceFrom)}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
