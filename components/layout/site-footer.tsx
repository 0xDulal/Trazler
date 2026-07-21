import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { footerNav } from "@/lib/navigation";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/marketing/newsletter-form";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "X", href: "https://x.com", Icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink-950 text-ink-300">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <Image
              src="/assets/logoWhite.svg"
              alt="Trazler"
              width={140}
              height={44}
              className="h-10 w-auto"
            />
            <p className="mt-5 text-[0.975rem] leading-relaxed text-ink-400">
              Handcrafted tours to the world&apos;s most extraordinary places,
              with real people on the ground from your first question to your
              journey home.
            </p>
            <NewsletterForm className="mt-8" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.95rem] text-ink-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} Trazler. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-800 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
