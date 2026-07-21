import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/cards/blog-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { contentRepository } from "@/lib/repositories";

export async function JournalTeaser() {
  const posts = await contentRepository.getBlogPosts(3);

  return (
    <section className="bg-canvas py-20 lg:py-28">
      <Container>
        <SectionHeading
          lead="The Trazler journal"
          title="Field notes to plan your next trip"
          description="Guides, itineraries and honest advice from our team and the guides who know these places best."
          link={{ href: "/journal", label: "Read the journal" }}
        />

        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.id}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
