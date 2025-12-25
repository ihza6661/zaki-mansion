# Agent Guidelines for Zaki Mansion Elegance

This document provides coding agents with essential information about this codebase.

## Project Overview

A modern React landing page for the "Zaki Mansion Elegance" real estate project, featuring unit showcases, KPR calculator, amenities display, and contact forms.

**Tech Stack:**
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- React Router DOM for routing
- React Hook Form + Zod for form validation

## Build, Lint, and Test Commands

### Development
```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development mode build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Note on Testing
This project currently has no test framework configured. If tests are needed:
- Consider adding Vitest for unit tests
- Consider adding React Testing Library for component tests
- Add test scripts to package.json

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components (auto-generated)
│   └── *.tsx        # Feature components
├── pages/           # Page-level components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions (utils.ts)
├── assets/          # Images and static assets
└── App.tsx          # App entry with routing
```

## Code Style Guidelines

### Import Order
1. React imports
2. Third-party libraries (framer-motion, lucide-react, etc.)
3. UI components from `@/components/ui`
4. Local components
5. Utilities and types
6. Assets

Example:
```tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
```

### TypeScript Configuration
- `noImplicitAny`: false (permissive)
- `strictNullChecks`: false (permissive)
- `noUnusedLocals`: false (permissive)
- `noUnusedParameters`: false (permissive)
- Use path alias: `@/` maps to `./src/`

### Component Guidelines

#### Functional Components
- Use arrow function syntax: `const Component = () => {}`
- Export as default: `export default Component;`
- Use named exports for utilities/variants

#### Styling
- Use Tailwind CSS utility classes
- Use `cn()` from `@/lib/utils` to merge class names
- Follow responsive patterns: mobile-first, then `md:`, `lg:`, `xl:`
- Custom colors: `gold`, `gold-light`, `charcoal`, `charcoal-soft`, `cream`, `background-cream`
- Typography: `font-serif` (Playfair Display) for headings, `font-sans` (Lato) for body

#### State Management
- Use `useState` for local state
- Use `useCallback` for memoized functions
- Use `useRef` for DOM references and non-reactive values
- Use `useEffect` for side effects

#### Animations
- Use Framer Motion for all animations
- Common pattern: `initial`, `animate`, `transition` props
- Use `useInView` for scroll-triggered animations
- Example:
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-50px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
>
```

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection.tsx`, `KPRCalculator.tsx`)
- Functions: camelCase (e.g., `formatCurrency`, `calculateMonthlyPayment`)
- Constants: camelCase (e.g., `tenorOptions`, `navLinks`)
- CSS classes: Use Tailwind utilities, custom classes in kebab-case

### Form Handling
- Use React Hook Form with Zod for validation
- Use shadcn/ui form components
- Handle form state with controlled components

### Error Handling
- No strict error handling patterns currently enforced
- Use optional chaining `?.` and nullish coalescing `??` where appropriate
- Avoid throwing errors; prefer graceful degradation

### Comments
- Use comments sparingly; prefer self-documenting code
- Add comments for complex business logic (e.g., KPR calculation)
- Use JSX comments: `{/* Comment */}`

## UI Component Usage

### shadcn/ui Components
- Import from `@/components/ui/*`
- All UI components are pre-configured in `src/components/ui/`
- Use `cn()` to extend component styles
- Common components: Button, Card, Input, Dialog, Accordion, etc.

### Custom Components
- All page sections are separate components (HeroSection, UnitsSection, etc.)
- Keep components focused and single-purpose
- Pass data via props; avoid prop drilling (consider context for deep trees)

## Styling Patterns

### Luxury Theme
- Use custom utility classes: `luxury-heading`, `luxury-body`, `luxury-button` (defined in CSS)
- Gold accent color for highlights and CTAs
- Charcoal for primary text
- Cream backgrounds for alternating sections

### Responsive Design
- Mobile-first approach
- Key breakpoints: `md` (768px), `lg` (1024px), `xl` (1280px)
- Hide/show elements: `hidden lg:flex`, `lg:hidden`
- Adjust spacing: `px-6 lg:px-12`, `py-24 lg:py-32`

### Layout Patterns
- Container: `container mx-auto px-6 lg:px-12`
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- Flex layouts: `flex items-center justify-between`

## Routing

- React Router DOM v6
- Routes defined in `App.tsx`
- Main page: `/` → `Index.tsx`
- 404 page: `*` → `NotFound.tsx`
- Add new routes ABOVE the catch-all `*` route

## Assets

- Images stored in `src/assets/`
- Import images: `import heroImage from "@/assets/hero-mansion.jpg"`
- Use relative imports for asset references

## Common Patterns

### Currency Formatting (Indonesian Rupiah)
```tsx
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
```

### Scroll-based Navbar
- Track scroll position with `useEffect` + `window.addEventListener`
- Toggle styles based on scroll state

### Section Structure
- Each major section: `<section className="py-24 lg:py-32">`
- Section header: divider line + heading + description
- Animate on scroll with Framer Motion + `useInView`

## Performance Considerations

- Vite handles code splitting automatically
- Use React.lazy() for heavy components if needed
- Optimize images before adding to assets
- Keep bundle size in check (avoid unnecessary dependencies)

## Accessibility

- Use semantic HTML elements
- Add `aria-label` to icon buttons
- Ensure keyboard navigation works for interactive elements
- Maintain color contrast ratios (WCAG AA minimum)

## Git Workflow

- Repository uses Git version control
- Follow conventional commit messages
- Test builds before committing: `npm run build`

## Additional Notes

- No backend/API integration currently
- Static site deployment ready
- Forms currently don't submit (add backend integration as needed)
- Indonesian language content (UI text in Bahasa Indonesia)
