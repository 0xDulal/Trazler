import Image from "next/image";
import { ShieldCheck, Compass, HeartHandshake, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { unsplash } from "@/lib/images";

const reasons = [
  {
    Icon: Compass,
    title: "Guides who actually live there",
    body: "Every tour is led by a local expert, not a script. They know the back streets, the right season and the family-run table worth the detour.",
  },
  {
    Icon: ShieldCheck,
    title: "Booked with confidence",
    body: "Transparent pricing, secure payment and free changes up to 30 days out. What you see is what you pay, with no surprise fees.",
  },
  {
    Icon: HeartHandshake,
    title: "Real people, around the clock",
    body: "A dedicated trip coordinator from your first question to your journey home, plus 24/7 support in your timezone while you travel.",
  },
  {
    Icon: Wallet,
    title: "Fair to the places we visit",
    body: "We cap group sizes and pay local partners fairly, so the communities you visit are better off for your having been there.",
  },
];

export function WhyTrazler() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={unsplash("photo-1512100356356-de1b84283e18", 1200)}
              alt="A guide and small group watching elephants at a watering hole on safari"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 w-52 rounded-2xl bg-surface p-5 shadow-[var(--shadow-lift)] sm:right-6">
            <p className="text-3xl font-semibold text-ink-900">12 yrs</p>
            <p className="mt-1 text-sm text-ink-600">
              crafting journeys across 60+ countries
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold text-brand-600">
              Why travel with Trazler
            </p>
            <h2 className="mt-2 text-h2 font-semibold text-ink-900">
              A travel partner, not a booking engine
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 flex flex-col gap-8">
            {reasons.map(({ Icon, title, body }) => (
              <RevealItem key={title} className="flex gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink-600">{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
