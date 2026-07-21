import type { Metadata } from "next";
import { generalSans, satoshi, inter } from "./fonts";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const siteUrl = "https://trazler.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trazler - Your Travel Partner",
    template: "%s · Trazler",
  },
  description:
    "Discover, compare and book handcrafted tours across the world's most extraordinary destinations. Trazler is your travel partner from first spark to safe return.",
  keywords: [
    "tours",
    "travel",
    "adventure",
    "destinations",
    "holiday packages",
    "guided tours",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Trazler",
    title: "Trazler - Your Travel Partner",
    description:
      "Discover, compare and book handcrafted tours across the world's most extraordinary destinations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazler - Your Travel Partner",
    description:
      "Discover, compare and book handcrafted tours across the world's most extraordinary destinations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${satoshi.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink-900">
        <SmoothScroll>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
