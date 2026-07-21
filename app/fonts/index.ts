import localFont from "next/font/local";
import { Inter } from "next/font/google";

/** Display face for headings — General Sans (variable). */
export const generalSans = localFont({
  src: "./general-sans-variable.woff2",
  variable: "--font-general-sans",
  weight: "200 700",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/** Secondary display / accent face — Satoshi (variable). */
export const satoshi = localFont({
  src: "./satoshi-variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/** Body face — Inter. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
