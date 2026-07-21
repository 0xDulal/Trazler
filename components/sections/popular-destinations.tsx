import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationCard } from "@/components/cards/destination-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { contentRepository } from "@/lib/repositories";

export async function PopularDestinations() {
  const destinations = await contentRepository.getFeaturedDestinations(4);

  return (
    <section className="bg-ink-950 py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          tone="light"
          lead="Where to next"
          title="Destinations worth the long flight"
          description="From volcanic islands to temple cities, these are the places our travellers return to again and again."
          link={{ href: "/destinations", label: "All destinations" }}
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, i) => (
            <RevealItem
              key={destination.id}
              className={i % 4 === 0 || i % 4 === 3 ? "sm:mt-0" : "sm:mt-10"}
            >
              <DestinationCard
                destination={destination}
                size={i % 4 === 1 || i % 4 === 2 ? "tall" : "standard"}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
