import { unsplash } from "@/lib/images";
import type {
  BlogPost,
  Destination,
  GalleryImage,
  Testimonial,
  Tour,
  TourCategory,
} from "@/types/domain";

/**
 * Curated sample content. This is the seed data the UI renders against today;
 * it satisfies the same repository interface a Supabase-backed source will,
 * so swapping the data source later requires no changes to components.
 */

export const categories: TourCategory[] = [
  { id: "c1", slug: "adventure", name: "Adventure" },
  { id: "c2", slug: "cultural", name: "Cultural" },
  { id: "c3", slug: "beach", name: "Beach & Islands" },
  { id: "c4", slug: "wildlife", name: "Wildlife" },
  { id: "c5", slug: "city", name: "City Breaks" },
  { id: "c6", slug: "honeymoon", name: "Honeymoon" },
];

export const destinations: Destination[] = [
  {
    id: "d1",
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "Cyclades",
    summary:
      "Whitewashed villages spilling down volcanic cliffs above an impossibly blue caldera.",
    heroImage: unsplash("photo-1528181304800-259b08848526"),
    imageAlt:
      "Whitewashed Santorini houses with blue domes above the Aegean caldera at golden hour",
    tourCount: 14,
    featured: true,
  },
  {
    id: "d2",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Lesser Sunda Islands",
    summary:
      "Emerald rice terraces, cliffside temples and surf breaks wrapped in island calm.",
    heroImage: unsplash("photo-1537996194471-e657df975ab4"),
    imageAlt: "Sunlit terraced rice paddies descending a hillside in Bali",
    tourCount: 21,
    featured: true,
  },
  {
    id: "d3",
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Kansai",
    summary:
      "Vermilion shrine gates, moss gardens and tea houses steeped in a thousand years of ritual.",
    heroImage: unsplash("photo-1533105079780-92b9be482077"),
    imageAlt:
      "A path of vermilion torii gates winding through a forest at Fushimi Inari, Kyoto",
    tourCount: 11,
    featured: true,
  },
  {
    id: "d4",
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Campania",
    summary:
      "Lemon groves, pastel harbours and switchback roads clinging to the Tyrrhenian Sea.",
    heroImage: unsplash("photo-1516483638261-f4dbaf036963"),
    imageAlt:
      "Pastel houses stacked above a harbour on the Amalfi Coast of Italy",
    tourCount: 9,
    featured: true,
  },
  {
    id: "d5",
    slug: "patagonia",
    name: "Patagonia",
    country: "Chile & Argentina",
    region: "Southern Andes",
    summary:
      "Granite towers, glacier-fed lakes and wind-scoured trails at the end of the Americas.",
    heroImage: unsplash("photo-1544644181-1484b3fdfc62"),
    imageAlt: "Jagged granite peaks reflected in a still lake in Patagonia",
    tourCount: 7,
    featured: false,
  },
  {
    id: "d6",
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    region: "Marrakesh-Safi",
    summary:
      "Labyrinthine souks, tiled riads and desert horizons a camel-ride from the medina.",
    heroImage: unsplash("photo-1570077188670-e3a8d69ac5ff"),
    imageAlt: "A vividly tiled courtyard riad in Marrakech, Morocco",
    tourCount: 12,
    featured: false,
  },
];

export const tours: Tour[] = [
  {
    id: "t1",
    slug: "santorini-caldera-escape",
    title: "Santorini Caldera Escape",
    destinationSlug: "santorini",
    destinationName: "Santorini",
    country: "Greece",
    categorySlugs: ["beach", "honeymoon"],
    summary:
      "Five days of caldera sunsets, catamaran sailing and cave-house living in Oia and Fira.",
    heroImage: unsplash("photo-1539367628448-4bc5c9d171c8"),
    imageAlt: "Blue-domed church overlooking the Santorini caldera at dusk",
    gallery: [
      unsplash("photo-1528181304800-259b08848526"),
      unsplash("photo-1539367628448-4bc5c9d171c8"),
      unsplash("photo-1516483638261-f4dbaf036963"),
    ],
    durationDays: 5,
    groupSize: 12,
    priceFrom: 1890,
    rating: 4.9,
    reviewCount: 214,
    highlights: [
      "Private catamaran cruise along the caldera rim",
      "Sunset dinner on a cliffside terrace in Oia",
      "Volcanic vineyard tasting with a local winemaker",
    ],
    included: [
      "4 nights in a cave suite with caldera view",
      "Daily breakfast and two dinners",
      "Catamaran cruise with onboard lunch",
      "Airport transfers",
    ],
    excluded: ["International flights", "Travel insurance", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fira",
        description:
          "Transfer to your cave suite, then an easy walk along the caldera path as the light turns.",
      },
      {
        day: 2,
        title: "Sail the caldera",
        description:
          "Board a catamaran for hot springs, snorkelling and a long lunch on the water.",
      },
      {
        day: 3,
        title: "Villages & vineyards",
        description:
          "Explore Pyrgos and Megalochori, then taste Assyrtiko at a volcanic-soil vineyard.",
      },
      {
        day: 4,
        title: "Oia at golden hour",
        description:
          "A slow morning, then the northern tip of the island for its legendary sunset.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast with a view before your transfer to the airport.",
      },
    ],
    featured: true,
  },
  {
    id: "t2",
    slug: "bali-highlands-and-temples",
    title: "Bali Highlands & Temples",
    destinationSlug: "bali",
    destinationName: "Bali",
    country: "Indonesia",
    categorySlugs: ["cultural", "adventure"],
    summary:
      "Seven days through Ubud's rice terraces, jungle waterfalls and clifftop sea temples.",
    heroImage: unsplash("photo-1537996194471-e657df975ab4"),
    imageAlt: "Terraced rice fields glowing green in the Bali highlands",
    gallery: [
      unsplash("photo-1522093007474-d86e9bf7ba6f"),
      unsplash("photo-1537996194471-e657df975ab4"),
      unsplash("photo-1552465011-b4e21bf6e79a"),
    ],
    durationDays: 7,
    groupSize: 14,
    priceFrom: 1540,
    rating: 4.8,
    reviewCount: 302,
    highlights: [
      "Sunrise trek up Mount Batur",
      "Tegallalang rice terrace and jungle swing",
      "Sunset ceremony at Uluwatu sea temple",
    ],
    included: [
      "6 nights across Ubud and the south coast",
      "Daily breakfast",
      "Private driver and guide",
      "All temple entrance fees",
    ],
    excluded: ["International flights", "Lunches and dinners", "Tipping"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ubud",
        description:
          "Settle into a jungle-view retreat and ease in with an evening spa ritual.",
      },
      {
        day: 2,
        title: "Rice terraces & waterfalls",
        description:
          "Tegallalang at first light, then hidden waterfalls in the northern hills.",
      },
      {
        day: 3,
        title: "Mount Batur sunrise",
        description:
          "A pre-dawn trek to the crater rim for sunrise above the clouds.",
      },
      {
        day: 4,
        title: "Temples & craft villages",
        description:
          "Tirta Empul holy springs and the silversmiths of Celuk.",
      },
      {
        day: 5,
        title: "South to the coast",
        description:
          "Transfer to the Bukit Peninsula for cliffs, surf and sunset.",
      },
      {
        day: 6,
        title: "Uluwatu & Kecak",
        description:
          "A clifftop sea temple and the fire-lit Kecak dance at dusk.",
      },
      {
        day: 7,
        title: "Departure",
        description: "A final beach morning before your airport transfer.",
      },
    ],
    featured: true,
  },
  {
    id: "t3",
    slug: "kyoto-ancient-capital",
    title: "Kyoto: The Ancient Capital",
    destinationSlug: "kyoto",
    destinationName: "Kyoto",
    country: "Japan",
    categorySlugs: ["cultural", "city"],
    summary:
      "Four days of temples, tea and bamboo, from Fushimi Inari's gates to Arashiyama's grove.",
    heroImage: unsplash("photo-1533105079780-92b9be482077"),
    imageAlt: "Endless vermilion torii gates at Fushimi Inari shrine in Kyoto",
    gallery: [
      unsplash("photo-1533105079780-92b9be482077"),
      unsplash("photo-1502602898657-3e91760cbb34"),
      unsplash("photo-1524492412937-b28074a5d7da"),
    ],
    durationDays: 4,
    groupSize: 10,
    priceFrom: 1320,
    rating: 4.9,
    reviewCount: 168,
    highlights: [
      "Dawn walk through Fushimi Inari's torii gates",
      "Private matcha ceremony in a machiya tea house",
      "Arashiyama bamboo grove and Gion at night",
    ],
    included: [
      "3 nights in a central machiya townhouse",
      "Daily breakfast",
      "Guided temple days with rail passes",
      "Tea ceremony",
    ],
    excluded: ["International flights", "Dinners", "Travel insurance"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Gion",
        description:
          "Check in, then a lantern-lit evening walk through the geisha district.",
      },
      {
        day: 2,
        title: "Southern shrines",
        description:
          "Fushimi Inari at dawn and Tofuku-ji's gardens before the crowds.",
      },
      {
        day: 3,
        title: "Arashiyama",
        description:
          "The bamboo grove, a riverside temple and an afternoon tea ceremony.",
      },
      {
        day: 4,
        title: "Departure",
        description: "A last stroll along the Philosopher's Path before you go.",
      },
    ],
    featured: true,
  },
  {
    id: "t4",
    slug: "amalfi-coast-in-bloom",
    title: "Amalfi Coast in Bloom",
    destinationSlug: "amalfi-coast",
    destinationName: "Amalfi Coast",
    country: "Italy",
    categorySlugs: ["beach", "honeymoon", "cultural"],
    summary:
      "Six days between Positano, Ravello and Capri — boats, lemon groves and long lunches.",
    heroImage: unsplash("photo-1516483638261-f4dbaf036963"),
    imageAlt: "Pastel cliffside houses above the harbour at Positano, Italy",
    gallery: [
      unsplash("photo-1516483638261-f4dbaf036963"),
      unsplash("photo-1523906834658-6e24ef2386f9"),
      unsplash("photo-1539367628448-4bc5c9d171c8"),
    ],
    durationDays: 6,
    groupSize: 12,
    priceFrom: 2180,
    rating: 4.8,
    reviewCount: 141,
    highlights: [
      "Private boat day to the island of Capri",
      "Lemon-grove lunch above Amalfi town",
      "Sunset in the gardens of Ravello",
    ],
    included: [
      "5 nights in coastal boutique hotels",
      "Daily breakfast and two lunches",
      "Private boat day to Capri",
      "Regional guide throughout",
    ],
    excluded: ["International flights", "Some dinners", "City taxes"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Positano",
        description: "Settle in, then an aperitivo above the tumbling town.",
      },
      {
        day: 2,
        title: "Path of the Gods",
        description:
          "A scenic ridge walk with sea views, ending in Nocelle for lunch.",
      },
      {
        day: 3,
        title: "Capri by boat",
        description:
          "A private boat to the Blue Grotto, the Faraglioni and Capri town.",
      },
      {
        day: 4,
        title: "Amalfi & lemon groves",
        description:
          "The cathedral of Amalfi and a family-run grove for a long lunch.",
      },
      {
        day: 5,
        title: "Ravello gardens",
        description:
          "Villa Rufolo and Cimbrone, with music drifting across the terraces.",
      },
      {
        day: 6,
        title: "Departure",
        description: "A final espresso by the water before your transfer.",
      },
    ],
    featured: true,
  },
  {
    id: "t5",
    slug: "patagonia-torres-del-paine",
    title: "Patagonia: Torres del Paine",
    destinationSlug: "patagonia",
    destinationName: "Patagonia",
    country: "Chile",
    categorySlugs: ["adventure", "wildlife"],
    summary:
      "Eight days trekking the W circuit beneath granite towers, glaciers and guanaco herds.",
    heroImage: unsplash("photo-1544644181-1484b3fdfc62"),
    imageAlt:
      "The granite towers of Torres del Paine reflected in a lake at dawn",
    gallery: [
      unsplash("photo-1544644181-1484b3fdfc62"),
      unsplash("photo-1493246507139-91e8fad9978e"),
      unsplash("photo-1506905925346-21bda4d32df4"),
    ],
    durationDays: 8,
    groupSize: 10,
    priceFrom: 3240,
    rating: 4.9,
    reviewCount: 96,
    highlights: [
      "The full W trek beneath the Paine massif",
      "Grey Glacier by boat",
      "Wildlife tracking for guanaco and condor",
    ],
    included: [
      "7 nights in mountain refugios and eco-domes",
      "All meals on the trail",
      "Certified mountain guides",
      "Park fees and transfers",
    ],
    excluded: ["International flights", "Sleeping bag hire", "Insurance"],
    itinerary: [
      {
        day: 1,
        title: "Puerto Natales",
        description: "Gear check and briefing at the gateway to the park.",
      },
      {
        day: 2,
        title: "Base of the Towers",
        description: "The classic ascent to the glacial lake beneath the towers.",
      },
      {
        day: 3,
        title: "French Valley",
        description: "Into the hanging glaciers of the massif's heart.",
      },
      {
        day: 4,
        title: "Grey Glacier",
        description: "A boat among icebergs at the glacier's calving face.",
      },
      {
        day: 5,
        title: "Pehoé & pampas",
        description: "Lakeside trails with wide views and grazing guanaco.",
      },
      {
        day: 6,
        title: "Serrano River",
        description: "A gentler valley day tracking condors overhead.",
      },
      {
        day: 7,
        title: "Free exploration",
        description: "Choose a final trail or rest before the journey out.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer back to Puerto Natales and onward.",
      },
    ],
    featured: false,
  },
  {
    id: "t6",
    slug: "marrakech-and-the-desert",
    title: "Marrakech & the Desert",
    destinationSlug: "marrakech",
    destinationName: "Marrakech",
    country: "Morocco",
    categorySlugs: ["cultural", "adventure"],
    summary:
      "Six days from medina riads to a night under the stars in the Agafay desert.",
    heroImage: unsplash("photo-1570077188670-e3a8d69ac5ff"),
    imageAlt: "A tiled courtyard fountain inside a Marrakech riad",
    gallery: [
      unsplash("photo-1570077188670-e3a8d69ac5ff"),
      unsplash("photo-1512453979798-5ea266f8880c"),
      unsplash("photo-1512100356356-de1b84283e18"),
    ],
    durationDays: 6,
    groupSize: 12,
    priceFrom: 1290,
    rating: 4.7,
    reviewCount: 187,
    highlights: [
      "Guided tour of the souks and Bahia Palace",
      "Atlas Mountains and a Berber village lunch",
      "Overnight desert camp under the stars",
    ],
    included: [
      "5 nights across riads and a desert camp",
      "Daily breakfast and two dinners",
      "Private transport and guide",
      "Camel experience in the Agafay",
    ],
    excluded: ["International flights", "Some meals", "Gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Into the medina",
        description: "Settle into a riad, then tea on the rooftop at dusk.",
      },
      {
        day: 2,
        title: "Souks & palaces",
        description: "Bahia Palace, the Saadian Tombs and the labyrinth of stalls.",
      },
      {
        day: 3,
        title: "Atlas Mountains",
        description: "Switchbacks to a Berber village and a valley lunch.",
      },
      {
        day: 4,
        title: "Agafay desert",
        description: "Camels at golden hour and dinner beneath the stars.",
      },
      {
        day: 5,
        title: "Gardens & galleries",
        description: "The Majorelle Garden and the Yves Saint Laurent museum.",
      },
      {
        day: 6,
        title: "Departure",
        description: "A last mint tea before your transfer to the airport.",
      },
    ],
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "r1",
    author: "Elena Marchetti",
    location: "Milan, Italy",
    avatar: unsplash("photo-1494790108377-be9c29b29330", 200, 70),
    rating: 5,
    quote:
      "Every detail was handled before we even thought to ask. The caldera sunset dinner alone was worth the trip.",
    tourTitle: "Santorini Caldera Escape",
  },
  {
    id: "r2",
    author: "James Okonkwo",
    location: "London, UK",
    avatar: unsplash("photo-1500648767791-00dcc994a43e", 200, 70),
    rating: 5,
    quote:
      "Our guide in Bali felt like a friend showing us home. Trazler got the pacing exactly right — never rushed.",
    tourTitle: "Bali Highlands & Temples",
  },
  {
    id: "r3",
    author: "Sofia Reyes",
    location: "Austin, USA",
    avatar: unsplash("photo-1438761681033-6461ffad8d80", 200, 70),
    rating: 5,
    quote:
      "The Patagonia trek pushed me and rewarded me tenfold. Impeccable safety, unforgettable landscapes.",
    tourTitle: "Patagonia: Torres del Paine",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "best-time-to-visit-the-cyclades",
    title: "The best time to visit the Cyclades",
    excerpt:
      "How to catch Santorini and its neighbours between the crowds and the heat — a month-by-month guide.",
    coverImage: unsplash("photo-1500835556837-99ac94a94552", 1200),
    imageAlt: "A ferry crossing calm blue water between Greek islands",
    category: "Guides",
    author: "Nadia Fischer",
    readingMinutes: 6,
    publishedAt: "2026-05-18",
  },
  {
    id: "b2",
    slug: "packing-for-patagonia",
    title: "Packing for Patagonia's four seasons in a day",
    excerpt:
      "The layering system our guides swear by when the weather turns three times before lunch.",
    coverImage: unsplash("photo-1493246507139-91e8fad9978e", 1200),
    imageAlt: "A hiker looking out over a glacier-fed lake in Patagonia",
    category: "Tips",
    author: "Marco Silva",
    readingMinutes: 8,
    publishedAt: "2026-04-30",
  },
  {
    id: "b3",
    slug: "a-first-timers-kyoto",
    title: "A first-timer's Kyoto, temple by temple",
    excerpt:
      "Which shrines reward an early start, where to find quiet, and how to time the light.",
    coverImage: unsplash("photo-1524492412937-b28074a5d7da", 1200),
    imageAlt: "A traditional wooden temple among autumn trees in Kyoto",
    category: "Guides",
    author: "Yuki Tanaka",
    readingMinutes: 7,
    publishedAt: "2026-04-11",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: unsplash("photo-1502602898657-3e91760cbb34", 900),
    alt: "Golden evening light on the rooftops of Paris",
    location: "Paris, France",
  },
  {
    id: "g2",
    src: unsplash("photo-1523906834658-6e24ef2386f9", 900),
    alt: "A gondola gliding along a quiet canal in Venice",
    location: "Venice, Italy",
  },
  {
    id: "g3",
    src: unsplash("photo-1512453979798-5ea266f8880c", 900),
    alt: "The Dubai skyline at dusk from the water",
    location: "Dubai, UAE",
  },
  {
    id: "g4",
    src: unsplash("photo-1476514525535-07fb3b4ae5f1", 900),
    alt: "A boat on a mirror-still Norwegian fjord below steep cliffs",
    location: "Nærøyfjord, Norway",
  },
  {
    id: "g5",
    src: unsplash("photo-1580060839134-75a5edca2e99", 900),
    alt: "A red mountain hut below snow-capped peaks in the Swiss Alps",
    location: "Swiss Alps",
  },
  {
    id: "g6",
    src: unsplash("photo-1502786129293-79981df4e689", 900),
    alt: "Morning mist rising over the ruins of Machu Picchu",
    location: "Machu Picchu, Peru",
  },
];
