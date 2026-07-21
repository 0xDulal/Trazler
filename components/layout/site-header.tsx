"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // The homepage opens on a full-bleed hero, so the header starts transparent
  // there and turns solid on scroll. Every other route is solid from the top.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-header)] transition-colors duration-300",
        solid
          ? "border-b border-ink-200/80 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="relative z-10 flex items-center"
          aria-label="Trazler home"
        >
          <Image
            src={solid ? "/assets/logoBlack.svg" : "/assets/logoWhite.svg"}
            alt="Trazler"
            width={127}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                  solid
                    ? "text-ink-700 hover:bg-ink-100 hover:text-ink-900"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                  active && (solid ? "text-brand-600" : "text-white"),
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href="/login"
            variant={solid ? "ghost" : "inverse"}
            size="sm"
          >
            Sign in
          </Button>
          <Button href="/tours" variant="primary" size="sm">
            Book a tour
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={cn(
            "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
            solid
              ? "text-ink-900 hover:bg-ink-100"
              : "text-white hover:bg-white/10",
          )}
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
        reduce={!!reduce}
      />
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
  pathname,
  reduce,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  reduce: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[var(--z-drawer-backdrop)] bg-ink-950/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-[var(--z-drawer)] flex w-[min(88vw,22rem)] flex-col bg-canvas px-6 py-6 shadow-[var(--shadow-lift)] lg:hidden"
            initial={{ x: reduce ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: reduce ? 0 : "100%" }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <Image
                src="/assets/logoBlack.svg"
                alt="Trazler"
                width={110}
                height={35}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {mainNav.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-lg font-medium transition-colors",
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-800 hover:bg-ink-100",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button href="/login" variant="ghost" size="md" onClick={onClose}>
                Sign in
              </Button>
              <Button
                href="/tours"
                variant="primary"
                size="md"
                onClick={onClose}
              >
                Book a tour
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
