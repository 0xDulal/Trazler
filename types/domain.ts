/**
 * Core domain models for Trazler. These mirror the intended database schema
 * (tours, destinations, reviews, …) and are the contract the UI depends on,
 * independent of whether data comes from sample fixtures or Supabase.
 */

export type UUID = string;

export interface Destination {
  id: UUID;
  slug: string;
  name: string;
  country: string;
  region: string;
  summary: string;
  heroImage: string;
  imageAlt: string;
  tourCount: number;
  featured: boolean;
}

export interface TourCategory {
  id: UUID;
  slug: string;
  name: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: UUID;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  country: string;
  categorySlugs: string[];
  summary: string;
  heroImage: string;
  imageAlt: string;
  gallery: string[];
  durationDays: number;
  groupSize: number;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  featured: boolean;
}

export interface Testimonial {
  id: UUID;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  tourTitle: string;
}

export interface BlogPost {
  id: UUID;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  imageAlt: string;
  category: string;
  author: string;
  readingMinutes: number;
  publishedAt: string;
}

export interface GalleryImage {
  id: UUID;
  src: string;
  alt: string;
  location: string;
}
