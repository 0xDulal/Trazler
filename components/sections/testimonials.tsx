import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Rating } from "@/components/ui/rating";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { contentRepository } from "@/lib/repositories";
import type { Testimonial } from "@/types/domain";

export async function Testimonials() {
  const testimonials = await contentRepository.getTestimonials(5);
  const [lead, ...rest] = testimonials;
  if (!lead) return null;

  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          lead="Straight from the trail"
          title="38,000 travellers, and counting"
          description="We measure ourselves by the stories people bring home. Here are a few of them."
        />

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          <RevealItem className="lg:row-span-2">
            <FeaturedQuote testimonial={lead} />
          </RevealItem>
          {rest.slice(0, 4).map((t) => (
            <RevealItem key={t.id}>
              <SmallQuote testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function FeaturedQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-ink-950 p-8 text-white lg:p-10">
      <Quote className="h-10 w-10 fill-brand-500 text-brand-500" />
      <blockquote className="mt-6 text-xl leading-relaxed font-medium lg:text-2xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-4 pt-8">
        <span className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-ink-400">{testimonial.tourTitle}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function SmallQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-surface p-7 shadow-[var(--shadow-card)]">
      <Rating value={testimonial.rating} />
      <blockquote className="mt-4 leading-relaxed text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <span className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="40px"
            className="object-cover"
          />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink-900">
            {testimonial.author}
          </p>
          <p className="text-xs text-ink-500">{testimonial.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}
