import localFont from "next/font/local";

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
