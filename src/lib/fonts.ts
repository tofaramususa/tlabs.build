import localFont from "next/font/local";
import { Figtree, Instrument_Serif } from "next/font/google";

// // Load Tobias variable fonts - these contain all weights
// export const tobiasFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/TobiasTRIALVF-Uprights-BF6719af6e15aea.ttf",
//       weight: "100 900", // Variable font supports weight range
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/TobiasTRIALVF-Italics-BF6719af6e1a816.ttf", 
//       weight: "100 900",
//       style: "italic",
//     },
//   ],
//   variable: "--font-tobias",
//   display: "swap",
//   preload: true,
// });

// // Load ABC Diatype variable font - optimal performance with full weight range
// export const abcDiatypeFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ABC Diatype/ABC Diatype Variable/ABCDiatypeVariable-Trial.woff2",
//       weight: "100 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-abc-diatype",
//   display: "swap",
//   preload: true,
// });

// // Load ABC Diatype Mono for code/data display
// export const abcDiatypeMonoFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ABC Diatype/ABC Diatype Mono Variable/ABCDiatypeMonoVariable-Trial.woff2",
//       weight: "100 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-abc-diatype-mono",
//   display: "swap",
//   preload: false, // Load on demand for code sections
// });

// // Load ABC Diatype Plus (enhanced version with additional features)
// export const abcDiatypePlusFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ABC Diatype/ABC Diatype Plus Variable/ABCDiatypePlusVariable-Trial.woff2",
//       weight: "100 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-abc-diatype-plus",
//   display: "swap",
//   preload: false, // Load on demand for special designs
// });

// // Figtree - Primary font for shader-showcase look
// export const figtreeFont = Figtree({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-figtree",
//   display: "swap",
// });

// // Instrument Serif - For italic accents
// export const instrumentSerifFont = Instrument_Serif({
//   subsets: ["latin"],
//   weight: ["400"],
//   style: ["normal", "italic"],
//   variable: "--font-instrument-serif",
//   display: "swap",
// });