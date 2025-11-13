# TLabs Website

A modern, high-performance website built with Next.js 15, React 19, and Tailwind CSS v4. This project follows production-grade design patterns inspired by modern design systems like Midday.

## Tech Stack

### Core Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.2** - Type-safe JavaScript
- **Bun** - Fast JavaScript runtime and package manager

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Class Variance Authority (CVA)** - Component variant system
- **Framer Motion** - Advanced animations
- **Geist Font Family** - Modern typography (Sans & Mono)
- **Custom Fonts** - Tobias serif and ABC Diatype for branding

### Development Tools
- **Biome 2.2.2** - Fast linter and formatter (replaces ESLint/Prettier)
- **PostCSS** - CSS processing and optimization
- **Sharp** - High-performance image optimization

### Key Libraries
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation
- **date-fns** - Modern date utility library

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) 1.2.14 or higher
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tlabs.build
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

```bash
bun run dev        # Start development server on port 3000
bun run build      # Build production bundle
bun run start      # Start production server
bun run lint       # Run Biome linter/formatter checks
bun run format     # Format code with Biome
bun run typecheck  # Run TypeScript type checking
bun run clean      # Clean .next and node_modules directories
```

## Project Structure

```
src/
├── app/                # Next.js App Router pages and layouts
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # Basic UI primitives (Button, etc.)
│   ├── about/          # About page specific components
│   ├── contact/        # Contact page specific components
│   ├── home/           # Home page components (Hero, Sections)
│   ├── theme/          # Theme switching components
│   ├── header.tsx      # Main navigation header
│   └── footer.tsx      # Site footer
├── actions/            # Server actions for forms and API calls
├── lib/                # Utility functions and providers
├── styles/             # Global CSS styles
└── utils/              # Additional utility functions
```

## Features

### Design System
- **Component Variants** - CVA-powered component system with consistent variants
- **Theme Support** - Advanced dark/light mode with system preference detection
- **Responsive Design** - Mobile-first, fully responsive layouts
- **Accessibility** - WCAG compliant with proper ARIA patterns
- **Type Safety** - Comprehensive TypeScript coverage

### UI/UX Patterns
- **Polymorphic Components** - Flexible component composition with `asChild` prop
- **Loading States** - Skeleton screens and loading animations
- **Form Validation** - Type-safe forms with Zod schemas
- **Server Actions** - Modern form handling with Next.js server actions
- **Animations** - Smooth, performant animations with Framer Motion

### Performance
- **Static Generation** - Pre-rendered pages for optimal performance
- **Image Optimization** - Automatic image optimization with Sharp
- **Code Splitting** - Automatic code splitting and lazy loading
- **CSS Optimization** - PurgeCSS and minification in production

## Component Architecture

All components follow a consistent pattern using CVA for variants:

```typescript
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", secondary: "..." },
      size: { default: "...", sm: "...", lg: "..." },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean;
}
```

## Configuration Files

- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with path aliases (@/* → src/)
- `postcss.config.cjs` - PostCSS configuration
- `biome.json` - Biome linter/formatter settings
- `CLAUDE.md` - Detailed development guidelines for AI assistance

## Design Principles

1. **Consistency over Customization** - Establish patterns and stick to them
2. **Composition over Configuration** - Build complex UIs from simple components
3. **Accessibility-First** - Build inclusive experiences from the ground up
4. **Performance-Conscious** - Optimize for real-world usage patterns
5. **Type Safety** - Comprehensive TypeScript coverage
6. **Predictable Patterns** - Consistent APIs across components

## Contributing

When contributing to this project:

1. Follow the component architecture patterns outlined in `CLAUDE.md`
2. Use the `cn()` utility for className composition
3. Ensure all components are accessible (ARIA labels, keyboard navigation)
4. Run `bun run lint` and `bun run typecheck` before committing
5. Write meaningful commit messages
6. Test responsive behavior across devices

## License

[Add your license here]

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Bun Documentation](https://bun.sh/docs)
