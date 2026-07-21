export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "All destinations", href: "/destinations" },
      { label: "All tours", href: "/tours" },
      { label: "Adventure", href: "/tours?category=adventure" },
      { label: "Beach & islands", href: "/tours?category=beach" },
      { label: "Honeymoon", href: "/tours?category=honeymoon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "The journal", href: "/journal" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: "/help" },
      { label: "Booking terms", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];
