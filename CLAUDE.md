# Cyrielle Thiebaut — Site vitrine Makeup Artist

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Framer Motion (animations scroll + entrées)
- clsx + tailwind-merge → `cn()` utility
- lucide-react (icônes)

## Commandes
- `npm run dev` — Serveur de développement (Turbopack)
- `npm run build` — Build de production
- `npm run lint` — ESLint

## Structure
- `app/` — App Router (layout.tsx, page.tsx, globals.css)
- `app/components/ui/` — Composants réutilisables (Button, Container, Heading, Badge, PlaceholderImage)
- `app/components/layout/` — Header, Footer
- `app/components/sections/` — 7 sections de la landing page
- `app/components/animations/` — FadeIn
- `app/components/seo/` — JsonLd
- `app/lib/` — utils.ts (cn), constants.ts (tout le contenu)
- `app/hooks/` — useReducedMotion

## Design
- Fond sombre (#0C0A09), accents dorés (#C9A87C) et rosés (#E8C4B8)
- Fonts : Playfair Display (display), Cormorant Garamond (headings), Inter (body), Montserrat (accents)
- Tout le contenu est centralisé dans `constants.ts`
