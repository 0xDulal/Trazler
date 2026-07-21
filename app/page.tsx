import { Hero } from "@/components/sections/hero";
import { FeaturedTours } from "@/components/sections/featured-tours";
import { PopularDestinations } from "@/components/sections/popular-destinations";
import { WhyTrazler } from "@/components/sections/why-trazler";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { JournalTeaser } from "@/components/sections/journal-teaser";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <PopularDestinations />
      <WhyTrazler />
      <Testimonials />
      <Gallery />
      <JournalTeaser />
      <CtaBand />
    </>
  );
}
