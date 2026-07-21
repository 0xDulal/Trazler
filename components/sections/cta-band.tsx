import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { unsplash } from "@/lib/images";

export function CtaBand() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src={unsplash("photo-1493246507139-91e8fad9978e", 2000)}
            alt="A traveller standing before a vast Icelandic waterfall"
            fill
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/60 to-ink-950/30" />

          <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-24 lg:max-w-2xl">
            <h2 className="text-h1 font-semibold text-white">
              Your next journey is one conversation away
            </h2>
            <p className="text-lg leading-relaxed text-ink-200">
              Tell us where you&apos;re dreaming of and a trip coordinator will
              shape an itinerary around you, at no cost and no obligation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/tours" variant="primary" size="lg">
                Explore tours
              </Button>
              <Button href="/contact" variant="inverse" size="lg">
                Talk to a coordinator
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
