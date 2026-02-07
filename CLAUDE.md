# CLAUDE.md — Visual Diary Club

## Project Overview

Visual Diary Club is a creative agency website built with **Next.js 16**, **Tailwind CSS 4**, **TypeScript**, and **Framer Motion**. It features a clean, minimalist design focused on visual storytelling and typography.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 (PostCSS plugin)
- **Language:** TypeScript (strict mode)
- **Animations:** Framer Motion
- **Linting:** ESLint with next config

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout (Header + Footer wrapper)
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global styles + Tailwind import
│   ├── work/page.tsx         # Portfolio page (filterable grid)
│   ├── about/page.tsx        # About page (team + approach)
│   ├── services/page.tsx     # Services page (detailed offerings)
│   └── contact/page.tsx      # Contact page (form)
├── components/
│   ├── ui/                   # Shared UI components
│   │   ├── Header.tsx        # Fixed nav with mobile menu
│   │   ├── Footer.tsx        # Site footer
│   │   └── Button.tsx        # Reusable button/link component
│   ├── home/                 # Homepage sections
│   │   ├── Hero.tsx          # Hero with animated text
│   │   ├── FeaturedWork.tsx  # Project grid (first 4)
│   │   ├── ServicesOverview.tsx  # Service cards
│   │   └── ContactCTA.tsx    # Call-to-action section
│   ├── work/
│   │   └── ProjectGrid.tsx   # Filterable project grid with AnimatePresence
│   ├── about/
│   │   ├── TeamSection.tsx   # Team member cards
│   │   └── ApproachSection.tsx  # Values/approach grid
│   └── animations/
│       ├── FadeIn.tsx        # Scroll-triggered fade with direction
│       └── StaggerChildren.tsx  # Staggered reveal container + item
├── lib/
│   └── data.ts               # All placeholder data (projects, team, services, nav)
└── types/
    └── index.ts              # TypeScript interfaces (Project, TeamMember, Service, NavItem)
```

## Architecture & Conventions

### Routing
- Uses Next.js App Router. Each page is in `src/app/<route>/page.tsx`.
- Layout wraps all pages with `Header` and `Footer` in `src/app/layout.tsx`.

### Components
- **"use client"** directive is added only to components that need interactivity (state, event handlers, Framer Motion). Pages that are purely static remain Server Components.
- Components are organized by feature/page in subdirectories under `src/components/`.
- Reusable components live in `src/components/ui/`.

### Styling
- Tailwind CSS 4 with the PostCSS plugin (not the CLI). Configuration is in `postcss.config.mjs`.
- Uses Tailwind's default theme colors (neutral palette). No custom `tailwind.config` file — Tailwind 4 uses CSS-based configuration via `@theme inline` in `globals.css`.
- Design uses a minimal neutral palette: `neutral-900` for text, `neutral-400`/`neutral-500` for secondary text, `neutral-100`/`neutral-50` for backgrounds.
- Font stack: system-ui (no external fonts required).

### Animations
- `FadeIn` component: Scroll-triggered opacity + directional slide. Accepts `delay`, `duration`, `direction` props.
- `StaggerChildren` + `StaggerItem`: Parent-child pattern for staggered reveals.
- All animations use `viewport={{ once: true }}` so they only trigger once.
- Easing: `[0.25, 0.1, 0.25, 1]` (custom cubic-bezier) used consistently.

### Data Layer
- All content (projects, team, services, navigation) is in `src/lib/data.ts`.
- To update content, edit the arrays in that file. Types are in `src/types/index.ts`.
- Images use a single placeholder SVG at `/public/images/placeholder.svg`. Replace with real images.

### Images
- Uses Next.js `<Image>` component throughout.
- SVG support is enabled in `next.config.ts` via `dangerouslyAllowSVG`.
- Replace `/public/images/placeholder.svg` with real project/team images.

## Key Patterns

### Adding a New Page
1. Create `src/app/<route>/page.tsx`
2. Export `metadata` for SEO
3. Import shared components (`FadeIn`, `Button`, etc.) as needed
4. The layout automatically wraps it with Header/Footer

### Adding a New Project
Add an entry to the `projects` array in `src/lib/data.ts`:
```ts
{
  id: "9",
  title: "Project Name",
  category: "Branding",  // Must match a value in `categories` array
  description: "...",
  image: "/images/your-image.jpg",
  year: "2025",
  client: "Client Name",
}
```

### Adding a New Team Member
Add an entry to the `team` array in `src/lib/data.ts`.

### Adding a New Service
Add an entry to the `services` array in `src/lib/data.ts`.

## Replacing Placeholder Content

All placeholder content is centralized in `src/lib/data.ts`. To customize:

1. **Projects:** Replace entries in the `projects` array. Add real images to `public/images/`.
2. **Team:** Update the `team` array with real names, roles, bios, and photos.
3. **Services:** Modify `services` array titles, descriptions, and feature lists.
4. **Contact info:** Edit directly in `src/app/contact/page.tsx` (email, phone, address).
5. **Footer social links:** Edit `src/components/ui/Footer.tsx` to add real URLs.
6. **Metadata:** Update `src/app/layout.tsx` for site-wide SEO defaults.

## Development Notes

- The contact form currently does client-side state only (shows a success message). To make it functional, integrate a form backend (Formspree, Resend, or a Next.js API route).
- No dark mode is implemented. The design is light-only.
- The project uses `"strict": true` in `tsconfig.json`.
- Build output is fully static (all routes are prerendered at build time).
