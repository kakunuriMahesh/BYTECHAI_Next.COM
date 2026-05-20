# ByteChai — Developer Portfolio & Technical Blog Platform

> **ByteChai** is a modern, production-grade developer portfolio and technical blog built with Next.js 15, TypeScript, Tailwind CSS, and MDX. It serves as a personal brand hub, project showcase, and content publishing platform optimized for SEO, performance, and AdSense readiness.

---

## 1. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + Custom Design System |
| Animations | Framer Motion |
| Blog Content | MDX + gray-matter frontmatter |
| MDX Rendering | next-mdx-remote + rehype/remark plugins |
| Fonts | Outfit (body), Space Grotesk (headings), JetBrains Mono (code) |
| Icons | react-icons, react-icons/hi |
| Utilities | clsx, tailwind-merge, class-variance-authority |
| Deployment | Vercel (optimized) |

---

## 2. Architecture

The project follows Next.js App Router conventions with a hybrid rendering strategy:

- **Static Site Generation (SSG)** – All pages pre-rendered at build time
- **Server Components** – Default for data fetching and content rendering
- **Client Components** – Explicitly marked with `'use client'` only where interactivity is needed (animations, forms, modals)
- **Static Params** – Blog posts use `generateStaticParams` for build-time generation

```
┌──────────────────────────────────────┐
│           Vercel Edge/CDN            │
├──────────────────────────────────────┤
│        Next.js 16 App Router         │
├────────────┬─────────────┬───────────┤
│  Server    │   Client    │  Static   │
│ Components │ Components  │ Generation│
├────────────┴─────────────┴───────────┤
│        MDX Blog Content Layer        │
├──────────────────────────────────────┤
│   Tailwind CSS v4 + Design System    │
└──────────────────────────────────────┘
```

---

## 3. Pages Created

| # | Route | Type | Description |
|---|-------|------|-------------|
| 1 | `/` | Static | Homepage with 9 sections (Hero, Stats, Tech Stack, Featured Projects, Recent Blogs, Services, Testimonials, Newsletter, Footer) |
| 2 | `/about` | Static | Company story, philosophy cards (`[by]`, `<te>`, `{chai}`), stats, callout section |
| 3 | `/projects` | Static | Project grid with commit heatmap, detail modal overlay, milestone timeline |
| 4 | `/services` | Static | Service cards, problem-solving grid, process timeline, CTA section |
| 5 | `/blog` | Static | Blog listing with search, filterable tag-based article grid |
| 6 | `/blog/[slug]` | SSG | Dynamic MDX-rendered blog posts with TOC, reading progress bar, related posts, ad placeholders |
| 7 | `/contact` | Static | Contact info cards + contact form |
| 8 | `/uses` | Static | Developer setup/equipment showcase (hardware, software, tools) |
| 9 | `/privacy-policy` | Static | Legal privacy policy page |
| 10 | `/terms-and-conditions` | Static | Legal terms page |
| 11 | `/disclaimer` | Static | Legal disclaimer page |
| 12 | `/404` | Static | Custom 404 error page with navigation options |
| 13 | `/sitemap.xml` | Dynamic | Auto-generated XML sitemap including all blog posts |
| 14 | `/robots.txt` | Dynamic | Robot crawl instructions |

---

## 4. Design System

### Color Palette
```
Primary (chai):     #d97706 (amber-600)
Dark:               #b45309 (amber-700)
Light:              #fef3c7 (amber-100)
Background:         #fffbeb → #fef3c7 (gradient)
Surface:            #ffffff
Muted:              #f9fafb
Text:               #1f2937 (gray-800)
```

### Typography
- **Body**: Outfit (300–900 weight)
- **Headings**: Space Grotesk (300–700 weight)
- **Code**: JetBrains Mono

### Design Tokens
- Border radius: `rounded-2xl` (1rem) to `rounded-[3rem]` (3rem)
- Shadows: `shadow-xl`, `shadow-2xl` with amber tint
- Effects: glassmorphism, subtle gradients, animated float, pulse-glow
- Spacing: consistent 4px/8px grid system via Tailwind

### Component Library
- `Button` – 4 variants (primary, secondary, ghost, outline), 3 sizes
- `Card` – Base card with optional hover effect
- `Badge` – 4 variants (default, success, info, warning)
- `Input` – Styled input with optional label
- `SectionHeading` – Reusable section header with label/title/description
- `AdPlaceholder` – Banner, rectangle, and skyscraper ad slots
- `Chatbot` – Floating chat widget with auto-responses

---

## 5. Layout Components

### Navbar
- Fixed position, transparent → glass effect on scroll
- Desktop: horizontal links with animated underline indicator
- Mobile: animated hamburger menu with framer-motion
- Active route detection via `usePathname`
- CTA button ("Get Started") linking to contact

### Footer
- 4-column grid: brand + social, company links, legal links, newsletter
- Social icons with hover transitions
- Dynamic copyright year
- "Made with ❤ in Hyderabad" tagline

### ReadingProgress
- Animated progress bar synced with scroll position
- Uses framer-motion's `useScroll` + `useSpring` for smooth animation
- Positioned at top of viewport

---

## 6. Blog System

### Content Management
- MDX files stored in `content/blogs/` directory
- Frontmatter via gray-matter: title, description, date, tags, author, readingTime, published
- Server-side reading time calculation
- Automatic slug generation from filename

### Rendering Pipeline
1. MDX file read from filesystem at build time
2. Frontmatter parsed by gray-matter
3. Content serialized by `next-mdx-remote` with remark/rehype plugins
4. Custom component mapping for HTML elements (headings, code, blockquotes, etc.)
5. Syntax highlighting via `rehype-highlight`
6. Auto-generated heading IDs via `rehype-slug`
7. GFM support via `remark-gfm`

### Blog Features
- **Table of Contents** – Auto-generated from h2/h3 with intersection observer for active state
- **Reading Progress Bar** – Scroll-synced progress indicator
- **Related Posts** – Tag-based relevance matching, displayed at article bottom
- **Search** – Frontend search across title, description, and tags
- **Reading Time** – Calculated at 200 words per minute
- **SEO Metadata** – Dynamic OpenGraph, Twitter cards, and canonical URLs per post
- **Ad Placeholders** – Banner ad slots before content and after content

---

## 7. SEO Architecture

### Implementation
- **Dynamic Metadata**: `generateMetadata` function per page with `constructMetadata()` helper
- **Canonical URLs**: Every page has self-referencing canonical link
- **OpenGraph**: Full OG metadata (title, description, image, type, url)
- **Twitter Cards**: `summary_large_image` card format with creator handle
- **Structured Data**: JSON-LD support via `constructJsonLd()` utility
- **Sitemap**: Auto-generated XML sitemap including all static pages and blog posts
- **Robots.txt**: Proper crawl directives
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3), `<article>`, `<nav>`, `<main>`
- **Accessibility**: Focus rings, aria-labels, reduced-motion support

---

## 8. Performance Optimizations

| Technique | Implementation |
|-----------|---------------|
| Image Optimization | `next/image` with automatic WebP/AVIF, lazy loading, blur placeholder |
| Font Optimization | `next/font` with CSS `size-adjust`, subsetting, `display: swap` |
| Bundle Splitting | Automatic via Next.js App Router + `optimizePackageImports` |
| Server Components | Default rendering strategy, client components only where needed |
| Static Generation | All pages pre-rendered at build time |
| Code Splitting | Dynamic imports for heavy components |
| Reduced Motion | `prefers-reduced-motion` media query support |
| Scrollbar Styling | Custom thin scrollbar to avoid layout shift |

---

## 9. AdSense Readiness

- **Content-First Layout**: Clean, readable content layout with proper spacing
- **Ad Slots**: `<AdPlaceholder />` component with banner/rectangle/skyscraper variants
- **Legal Pages**: Privacy Policy, Terms & Conditions, Disclaimer
- **Professional Navigation**: Clear, non-spammy navigation structure
- **Mobile Optimized**: Responsive design that passes mobile-friendly test
- **Fast Loading**: Under 2s LCP target
- **AdSense Meta Tag**: `google-adsense-account` in metadata

---

## 10. Directory Structure

```
D:\BYTECHAI_NEXT\
├── content/
│   └── blogs/                  # MDX blog post files (5 articles)
├── public/
│   └── images/                 # Static images (logo, etc.)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── not-found.tsx       # 404 page
│   │   ├── sitemap.ts          # XML sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── uses/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-and-conditions/page.tsx
│   │   └── disclaimer/page.tsx
│   ├── components/
│   │   ├── blog/               # BlogCard, SearchBlogs, TableOfContents
│   │   ├── home/               # Hero, Stats, TechStack, FeaturedProjects, etc.
│   │   ├── layout/             # Navbar, Footer, ReadingProgress
│   │   ├── shared/             # Chatbot, AdPlaceholder, SectionHeading
│   │   └── ui/                 # Button, Card, Badge, Input
│   ├── hooks/
│   │   └── useScroll.ts
│   ├── lib/
│   │   ├── mdx.ts              # MDX file operations
│   │   ├── seo.ts              # SEO metadata helpers
│   │   ├── site.ts             # Site configuration data
│   │   └── utils.ts            # cn(), formatDate(), readingTime()
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── next.config.ts
├── package.json
├── tsconfig.json
└── AGENTS.md                   # Migration & build guide
```

---

## 11. Content Generated

| # | Blog Post | Topic |
|---|-----------|-------|
| 1 | React vs Next.js: Which Framework Should You Choose in 2026? | Framework comparison |
| 2 | Building ByteChai: A Developer Portfolio Architecture Deep Dive | Project case study |
| 3 | Tailwind CSS Best Practices for Production Applications | CSS methodology |
| 4 | AI Tools Every Developer Should Use in 2026 | Developer productivity |
| 5 | Modern Developer Portfolio Architecture: A 2026 Guide | Career development |

---

## 12. Deployment

### Vercel Deployment
```bash
npm run build    # Production build
npm run start    # Production server
```

### Environment Variables
| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site URL for canonical/OG links |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID |

---

## 13. Migration Notes (Old → New)

| Aspect | Old (Vite/React) | New (Next.js 16) |
|--------|-----------------|-------------------|
| Build Tool | Vite 7 | Next.js 16 (Turbopack) |
| Routing | react-router-dom v6 | App Router (file-based) |
| Data Fetching | Client-side only | Server Components + SSG |
| Blog | None | Full MDX blog system |
| SEO | Basic meta tags | Comprehensive SEO (metadata, sitemap, OG, JSON-LD) |
| Performance | Basic | Optimized images, fonts, bundles |
| Components | Page-level mixed | Modular layered architecture |
| Styling | Inline CSS classes | Design system via Tailwind theme |
| Legal Pages | None | Privacy, Terms, Disclaimer |
| Mobile | Responsive | Mobile-first with hamburger menu |
| Animations | Basic Framer Motion | Scroll-driven + progress indicators |
