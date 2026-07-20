# Trazler

A premium travel discovery and booking platform. Trazler is built to inspire travelers through immersive, editorial storytelling while making tour booking effortless — closer in spirit to Airbnb Experiences and GetYourGuide than a traditional travel agency site.

## Features

**Public website**
- Home, Destinations, Tour Listing, Tour Details, Blog, About, Contact, FAQ
- Rich tour pages: overview, highlights, itinerary, inclusions, hotels, meals, transport, available dates, pricing, reviews, and similar tours
- Search and comparison of tours with a sticky booking CTA

**Booking flow**
- Guided steps from tour and date selection through travelers, coupons, review, payment, confirmation, and invoice download

**Customer dashboard**
- Bookings, wishlist, saved travelers, reviews, notifications, invoices, profile, and settings

**Admin CMS**
- Manage tours, categories, countries, destinations, hotels, guides, bookings, customers, payments, coupons, blogs, FAQs, media, users, roles, and website settings

**Authentication & roles**
- Email and Google sign-in, password reset, and email verification
- Roles: Customer, Agent, Guide, Admin (enforced with Row Level Security)

## Tech Stack

**Frontend**
- [Next.js](https://nextjs.org) (App Router) with React 19 and TypeScript
- Tailwind CSS v4 and [shadcn/ui](https://ui.shadcn.com)
- Framer Motion, GSAP, and Lenis for animation and smooth scroll
- React Hook Form + Zod for forms and validation
- TanStack Query for data fetching

**Backend**
- [Supabase](https://supabase.com): Authentication, PostgreSQL, Storage, Edge Functions, and Realtime

**Deployment**
- Vercel (frontend) and Supabase (backend)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Lint the codebase with ESLint |

## Project Structure

```
app/          Routes and layouts (App Router)
components/    Reusable UI components
features/      Feature-based modules
actions/       Server Actions
lib/           Shared libraries and clients
hooks/         Custom React hooks
types/         TypeScript types
utils/         Helper functions
supabase/      Migrations, policies, and config
public/        Static assets
```

## Design System

| Token | Value |
| --- | --- |
| Primary | `#FF6B35` |
| Dark | `#0F172A` |
| Background | `#F8FAFC` |
| Success | `#10B981` |
| Danger | `#EF4444` |

- **Headings:** General Sans / Satoshi
- **Body:** Inter / Geist
- **Spacing:** 8px grid
- **Border radius:** 16–24px

The UI aims to feel premium, editorial, spacious, and mobile-first — large imagery, strong typography, generous whitespace, and subtle glass effects. All animation respects `prefers-reduced-motion`.

## Standards

- TypeScript strict mode with strong typing throughout
- Server Components by default; Server Actions where appropriate
- Feature-based architecture with a repository pattern
- Zod validation and React Hook Form for all forms
- Accessibility to WCAG AA (keyboard navigation, semantic HTML, focus states)
- SEO with dynamic metadata, Open Graph, JSON-LD, sitemap, and structured schema

### Performance targets

Lighthouse: Performance ≥ 95 · Accessibility ≥ 95 · Best Practices 100 · SEO 100

## Roadmap

AI trip planner and chat assistant, multi-language and multi-currency support, loyalty program, flight and hotel APIs, affiliate system, white-label, and mobile apps.
