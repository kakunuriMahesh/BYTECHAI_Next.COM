# ByteChai - Migration & Build Guide

## Migration Summary

The old BYTECHAI Vite/React project has been fully migrated to a production-grade Next.js 15 application.

### What Changed

| Aspect | Old (Vite) | New (Next.js 15) |
|--------|-----------|------------------|
| Framework | React 19 + Vite | Next.js 16 App Router |
| Routing | react-router-dom | File-based App Router |
| Styling | Tailwind v4 (basic) | Tailwind v4 + Custom design system |
| Blog | None | MDX-based blog system |
| SEO | Minimal | Full SEO (metadata, sitemap, robots, JSON-LD) |
| Performance | Basic | Server Components, Image/Font optimization |
| Architecture | SPA | Hybrid SSR/SSG/ISR |
| Components | Page-level | Modular reusable components |
| Animations | Framer Motion | Framer Motion + scroll-driven |

### Preserved Branding
- Amber (#d97706) primary color scheme
- "ByteChai" name and brewed coffee motif
- Warm gradient backgrounds
- Glassmorphism effects
- All original content and messaging

### New Pages Added
| Route | Purpose |
|-------|---------|
| `/` | Homepage with 9 sections |
| `/about` | About + philosophy |
| `/projects` | Portfolio with modal detail view |
| `/blog` | Blog listing with search |
| `/blog/[slug]` | Dynamic MDX blog posts |
| `/services` | Services overview |
| `/contact` | Contact form |
| `/privacy-policy` | Legal page (AdSense requirement) |
| `/terms-and-conditions` | Legal page |
| `/disclaimer` | Legal page |
| `/uses` | Developer setup page |
| `/404` | Custom error page |
| `/sitemap.xml` | XML sitemap |
| `/robots.txt` | Robots configuration |

## Getting Started

```bash
cd D:\BYTECHAI_NEXT
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push to GitHub
2. Import to Vercel
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` - your domain
   - `NEXT_PUBLIC_ADSENSE_ID` - Google AdSense publisher ID

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # Custom 404
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── about/page.tsx
│   ├── blog/page.tsx       # Blog listing
│   ├── blog/[slug]/page.tsx # Dynamic blog posts
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── uses/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-and-conditions/page.tsx
│   └── disclaimer/page.tsx
├── components/
│   ├── ui/                 # Primitive UI (Button, Card, Badge, Input)
│   ├── layout/             # Navbar, Footer, ReadingProgress
│   ├── home/               # Homepage section components
│   ├── blog/               # Blog-specific components
│   └── shared/             # Shared components (Chatbot, AdPlaceholder)
├── lib/
│   ├── site.ts             # Site configuration data
│   ├── utils.ts            # Helper utilities
│   ├── seo.ts              # SEO metadata helpers
│   └── mdx.ts              # MDX/blog utilities
├── hooks/
│   └── useScroll.ts        # Scroll detection hook
├── types/
│   └── index.ts            # TypeScript type definitions
└── app/globals.css         # Global styles (Tailwind + custom)
content/
└── blogs/                  # MDX blog posts
```

## Adding Blog Posts

1. Create an `.mdx` file in `content/blogs/`
2. Add frontmatter (title, description, date, tags, author, readingTime, published)
3. Run `npm run build` to generate static pages

## Customization

- **Colors**: Edit `globals.css` `@theme inline` section
- **Content**: Edit `src/lib/site.ts` for all site data
- **Fonts**: Edit `src/app/layout.tsx` font imports
- **SEO**: Edit `src/lib/seo.ts` for metadata defaults

## Performance Targets

- Lighthouse: 90+ all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.0s
- Cumulative Layout Shift: < 0.05
