import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TourCard } from "@/components/cards/tour-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { contentRepository } from "@/lib/repositories";

export async function FeaturedTours() {
  const tours = await contentRepository.getFeaturedTours(6);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          lead="Handpicked journeys"
          title="Tours our travellers can't stop talking about"
          description="Small groups, expert local guides and itineraries built around the moments that stay with you."
          link={{ href: "/tours", label: "Browse all tours" }}
        />

        <RevealGroup className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <RevealItem key={tour.id}>
              <TourCard tour={tour} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
