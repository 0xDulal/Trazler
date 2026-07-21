import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TourSearch } from "@/components/marketing/tour-search";
import { unsplash } from "@/lib/images";

const trustAvatars = [
  unsplash("photo-1500648767791-00dcc994a43e", 80),
  unsplash("photo-1494790108377-be9c29b29330", 80),
  unsplash("photo-1507003211169-0a1dd7228f2d", 80),
  unsplash("photo-1438761681033-6461ffad8d80", 80),
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden">
      <Image
        src="/assets/img/HeroImage.jpg"
        alt="A traveller taking in a sweeping mountain landscape at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative pb-10 pt-32 sm:pb-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-300 sm:text-base">
            Your travel partner, everywhere the map ends
          </p>
          <h1 className="mt-4 text-display font-semibold text-white">
            Go further than the
            <br className="hidden sm:block" /> guidebook.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
            Handcrafted tours to the world&apos;s most extraordinary places,
            led by people who live there. Discover, compare and book your next
            journey in one place.
          </p>
        </div>

        <TourSearch className="mt-9 max-w-3xl" />

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {trustAvatars.map((src, i) => (
                <span
                  key={src}
                  className="relative inline-block h-9 w-9 overflow-hidden rounded-full ring-2 ring-ink-950/40"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                    // decorative — labelled by the text that follows
                    aria-hidden={i >= 0}
                  />
                </span>
              ))}
            </div>
            <p className="text-sm text-white">
              <span className="font-semibold">38,000+</span> travellers
              guided
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-white">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brand-400 text-brand-400"
                />
              ))}
            </span>
            <span>
              <span className="font-semibold">4.9</span> average from 12,400
              reviews
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
