import localFont from "next/font/local";
import { Instrument_Serif, Playfair_Display, Inter } from "next/font/google";

/**
 * Instrument Serif Font Family
 * A Google Font with elegant serif styling
 */
export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

/**
 * Playfair Display Font Family
 * A Google Font with elegant serif styling, perfect for headlines and display text
 */
export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

/**
 * Inter Font Family
 * A modern, clean sans-serif font designed for user interfaces
 */
export const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * PP Neue Montreal Font Family
 *
 * A modern, clean sans-serif font with multiple weights.
 * Centralized font definition to prevent duplicate hosting.
 *
 * Available weights:
 * - Thin: 100
 * - Book (Regular): 400
 * - Medium: 500
 * - SemiBold: 600
 * - Bold: 700
 */
export const ppNeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-SemiBolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/PP Neue Montreal/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue",
  display: "swap",
  preload: true,
});
