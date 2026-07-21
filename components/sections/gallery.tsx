import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { contentRepository } from "@/lib/repositories";
import { cn } from "@/lib/utils";

// Mosaic spans keyed to position for a magazine-style grid.
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export async function Gallery() {
  const images = await contentRepository.getGallery(6);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          lead="Postcards from the field"
          title="Real moments, real travellers"
          description="Every frame is from a Trazler journey. Tag #trazler to see yours here."
        />

        <Reveal className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
          {images.map((image, i) => (
            <figure
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                spans[i] ?? "",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.location}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
