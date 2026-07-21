import {
  blogPosts,
  categories,
  destinations,
  galleryImages,
  testimonials,
  tours,
} from "@/lib/data/sample-data";
import type {
  BlogPost,
  Destination,
  GalleryImage,
  Testimonial,
  Tour,
  TourCategory,
} from "@/types/domain";

/**
 * Repository interface for read access to travel content. Components depend on
 * this contract, not on where the data lives. The sample implementation below
 * serves fixtures; a Supabase implementation can replace it behind the same
 * shape without touching any component.
 */
export interface ContentRepository {
  getFeaturedTours(limit?: number): Promise<Tour[]>;
  getTours(): Promise<Tour[]>;
  getTourBySlug(slug: string): Promise<Tour | null>;
  getSimilarTours(tour: Tour, limit?: number): Promise<Tour[]>;
  getFeaturedDestinations(limit?: number): Promise<Destination[]>;
  getDestinations(): Promise<Destination[]>;
  getCategories(): Promise<TourCategory[]>;
  getTestimonials(limit?: number): Promise<Testimonial[]>;
  getBlogPosts(limit?: number): Promise<BlogPost[]>;
  getGallery(limit?: number): Promise<GalleryImage[]>;
}

const sampleRepository: ContentRepository = {
  async getFeaturedTours(limit) {
    const list = tours.filter((t) => t.featured);
    return limit ? list.slice(0, limit) : list;
  },
  async getTours() {
    return tours;
  },
  async getTourBySlug(slug) {
    return tours.find((t) => t.slug === slug) ?? null;
  },
  async getSimilarTours(tour, limit = 3) {
    return tours
      .filter(
        (t) =>
          t.id !== tour.id &&
          (t.destinationSlug === tour.destinationSlug ||
            t.categorySlugs.some((c) => tour.categorySlugs.includes(c))),
      )
      .slice(0, limit);
  },
  async getFeaturedDestinations(limit) {
    const list = destinations.filter((d) => d.featured);
    return limit ? list.slice(0, limit) : list;
  },
  async getDestinations() {
    return destinations;
  },
  async getCategories() {
    return categories;
  },
  async getTestimonials(limit) {
    return limit ? testimonials.slice(0, limit) : testimonials;
  },
  async getBlogPosts(limit) {
    return limit ? blogPosts.slice(0, limit) : blogPosts;
  },
  async getGallery(limit) {
    return limit ? galleryImages.slice(0, limit) : galleryImages;
  },
};

/**
 * The active content repository. Swap this binding for a Supabase-backed
 * implementation when the database is provisioned; nothing else changes.
 */
export const contentRepository: ContentRepository = sampleRepository;
