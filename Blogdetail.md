# ByteChai Blog System — Detailed Architecture & Flow

## Overview

The ByteChai blog is a **static MDX-based blogging system** that converts `.mdx` files into fully rendered HTML pages at build time. It supports frontmatter metadata, syntax highlighting, auto-generated table of contents, reading time estimation, related posts, search, and full SEO optimization.

---

## 1. Blog Content Creation

### File Location
All blog posts live as `.mdx` files in:
```
content/blogs/
```

### File Naming Convention
Each file is named with a URL-friendly slug:
```
content/blogs/react-vs-nextjs.mdx
content/blogs/building-bytechai-portfolio.mdx
content/blogs/tailwind-css-best-practices.mdx
content/blogs/ai-tools-for-developers.mdx
content/blogs/modern-portfolio-architecture.mdx
```

The filename **becomes the URL slug**: `/blog/react-vs-nextjs`

### Frontmatter Structure
Every `.mdx` file must include frontmatter (YAML between `---` delimiters):

```yaml
---
title: "React vs Next.js: Which Framework Should You Choose in 2026?"
description: "A comprehensive comparison of React and Next.js for modern web development, covering performance, SEO, developer experience, and use cases."
date: "2026-05-15"
tags: ["React", "Next.js", "Web Development", "JavaScript", "Comparison"]
author: "Mahesh Kakunuri"
readingTime: "8 min read"
published: true
featuredImage: "/images/blog-react-nextjs.png"
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Full article title (used for SEO `<title>` and page heading) |
| `description` | Yes | Meta description for SEO and social previews |
| `date` | Yes | ISO date string used for sorting and display |
| `tags` | Yes | Array of string tags for filtering and related posts |
| `author` | Yes | Author display name |
| `readingTime` | Yes | Pre-calculated reading time string (auto-calc available) |
| `published` | Yes | Boolean — only `true` posts appear on the site |
| `featuredImage` | No | OG image path for social sharing |

### Content Body (MDX)
After the frontmatter, write standard Markdown with JSX support:

```mdx
## Heading

Regular paragraphs with **bold**, *italic*, `inline code`.

\`\`\`typescript
// Code blocks with syntax highlighting
const greeting = "Hello ByteChai!";
\`\`\`

- List items
- More items

> Blockquotes for pull quotes
```

---

## 2. Data Flow Pipeline

```
                    BUILD TIME
                        │
                        ▼
  ┌──────────────────────────────────┐
  │  1. Content Discovery            │
  │  getBlogSlugs()                  │
  │  - scans content/blogs/*.mdx     │
  └──────────┬───────────────────────┘
             │
             ▼
  ┌──────────────────────────────────┐
  │  2. Frontmatter Parsing          │
  │  getBlogPost(slug)               │
  │  - gray-matter extracts          │
  │    metadata + content            │
  └──────────┬───────────────────────┘
             │
             ▼
  ┌──────────────────────────────────┐
  │  3. Static Generation            │
  │  generateStaticParams()          │
  │  - builds /blog/[slug] routes    │
  └──────────┬───────────────────────┘
             │
             ▼
  ┌──────────────────────────────────┐
  │  4. MDX Serialization            │
  │  BlogMDXContent component        │
  │  - serialize() with plugins:     │
  │    • remark-gfm                  │
  │    • rehype-slug                 │
  │    • rehype-autolink-headings    │
  │    • rehype-highlight            │
  └──────────┬───────────────────────┘
             │
             ▼
  ┌──────────────────────────────────┐
  │  5. Render with Components       │
  │  MDXRemote() with custom         │
  │  component mapping for:          │
  │  h2, h3, p, ul, ol, blockquote,  │
  │  pre, code, img, a, hr           │
  └──────────┬───────────────────────┘
             │
             ▼
        STATIC HTML OUTPUT
```

---

## 3. Server-Side Data Layer (`src/lib/mdx.ts`)

### Functions

#### `getBlogSlugs()`
Scans the `content/blogs/` directory and returns all `.mdx` filenames.

```typescript
function getBlogSlugs(): string[]
// Returns: ['react-vs-nextjs.mdx', 'building-bytechai-portfolio.mdx', ...]
```

#### `getBlogPost(slug)`
Reads a single MDX file, parses frontmatter with gray-matter, returns structured data.

```typescript
function getBlogPost(slug: string): {
  data: BlogPost      // Parsed frontmatter
  content: string     // Raw MDX content
  slug: string        // URL slug
} | null
```

#### `getAllBlogPosts()`
Returns all published blog posts sorted by date (newest first). Used by:
- Blog listing page (`/blog`)
- Homepage recent blogs section
- Sitemap generation

```typescript
function getAllBlogPosts(): (BlogPost & { slug: string })[]
// Filters: published === true
// Sorts: date descending
```

#### `getRelatedPosts(currentSlug, tags, limit = 3)`
Finds related articles by matching tags with the current post. Higher tag overlap = more relevant.

```typescript
function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit: number
): (BlogPost & { slug: string })[]
```

#### `searchBlogs(query)`
Performs case-insensitive search across title, description, and tags.

```typescript
function searchBlogs(query: string): (BlogPost & { slug: string })[]
```

---

## 4. Page Components

### Blog Listing (`/blog` — Server Component)

```
src/app/blog/page.tsx
```

```
┌──────────────────────────────────┐
│  SectionHeading                  │
│  "Blog / Latest Articles"        │
├──────────────────────────────────┤
│  SearchBlogs (Client)            │
│  ┌──────────────────────────┐    │
│  │ 🔍 Search articles...    │    │
│  └──────────────────────────┘    │
├──────────────────────────────────┤
│  BlogCard Grid (3 columns)       │
│  ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ Post │ │ Post │ │ Post │     │
│  │  1   │ │  2   │ │  3   │     │
│  └──────┘ └──────┘ └──────┘     │
│  ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ Post │ │ Post │ │      │     │
│  │  4   │ │  5   │ │      │     │
│  └──────┘ └──────┘ └──────┘     │
└──────────────────────────────────┘
```

- Server component that fetches all posts via `getAllBlogPosts()`
- Renders `BlogCard` for each post
- `SearchBlogs` is a client component for interactivity

### Single Blog Post (`/blog/[slug]` — SSG with `generateStaticParams`)

```
src/app/blog/[slug]/page.tsx
src/app/blog/[slug]/BlogMDXContent.tsx  (client component)
```

```
┌─────────────────────────────────────────┐
│  ReadingProgress (fixed progress bar)   │
├─────────────────────────────────────────┤
│  Article Header                         │
│  Author / Reading Time / Date           │
│  H1 Title (from frontmatter)            │
│  Description                            │
│  Tags (badge style)                     │
├─────────────────────────────────────────┤
│  AdPlaceholder (banner)                 │
├──────────────────┬──────────────────────┤
│  MDX Content     │  TableOfContents     │
│  (rendered via   │  (sticky sidebar)    │
│   next-mdx-      │  - Auto-generated    │
│   remote)        │    from h2/h3        │
│                  │  - Intersection      │
│                  │    Observer for      │
│                  │    active state      │
├──────────────────┴──────────────────────┤
│  AdPlaceholder (banner)                 │
├─────────────────────────────────────────┤
│  Related Posts (3 cards)                │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ Post │ │ Post │ │ Post │            │
│  └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────┘
```

**Key behaviors:**
- `generateStaticParams()` pre-builds all blog post routes at build time
- `generateMetadata()` creates per-post SEO metadata from frontmatter
- `ReadingProgress` tracks scroll position
- `TableOfContents` observes headings for active highlighting
- `BlogMDXContent` serializes MDX at runtime with full plugin pipeline

---

## 5. MDX Rendering Pipeline (`BlogMDXContent.tsx`)

This is a **client component** because it uses `useEffect`/`useState` to serialize MDX content:

```typescript
'use client'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
```

### Plugins

| Plugin | Purpose |
|--------|---------|
| `remark-gfm` | GitHub Flavored Markdown (tables, strikethrough, task lists) |
| `rehype-slug` | Adds `id` attributes to headings (`#user-content-`) |
| `rehype-autolink-headings` | Adds clickable anchor links to headings |
| `rehype-highlight` | Syntax highlighting for code blocks |

### Custom Component Mapping

```typescript
const components = {
  h2: styled heading with scroll-margin for TOC offset
  h3: smaller heading variant
  p:  large, readable body text
  ul/ol: proper list styling
  blockquote: left border with amber accent
  pre: dark background code container
  code: inline = amber badge, block = dark theme
  img: rounded, lazy-loaded
  a:  colored link with underline
}
```

---

## 6. Client-Side Features

### Table of Contents (`TableOfContents.tsx`)

```
┌──────────────────────┐
│ ON THIS PAGE         │
├──────────────────────┤
│ ● The Quick Answer   │  ← Active (in viewport)
│ ○ The Evolution      │
│ ○ Performance        │
│   ○ Initial Load     │  ← Sub-item (h3)
│ ○ Developer Exp      │
│ ○ The Verdict        │
└──────────────────────┘
```

- Automatically collects all `h2` and `h3` elements from the rendered article
- Uses `IntersectionObserver` with `rootMargin: '-80px 0px -80% 0px'`
- Active heading gets visual indicator (amber text)
- Clicking scrolls smoothly to the heading (offset by navbar height)

### Reading Progress Bar (`ReadingProgress.tsx`)

```
┌─────────────────────────────────────────┐
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░  ← Progress bar
└─────────────────────────────────────────┘
  ↑ Fixed top of viewport
```

- Uses framer-motion's `useScroll()` and `useSpring()`
- Smooth spring animation for natural feel
- Color: `bg-chai` (#d97706)
- Height: 2px

### Search (`SearchBlogs.tsx`)

```
┌──────────────────────────────────────────┐
│ 🔍 Search articles...                     │
└──────────────────────────────────────────┘
```

- Redirects to `/blog?search=query` on submit
- Client-side processing via `searchBlogs()` function
- Real-time filtering across title, description, and tags

### Related Posts

```typescript
// Logic: Tag overlap scoring
// Higher tag match = more relevant = displayed first
function getRelatedPosts(slug, tags, limit = 3) {
  const all = getAllBlogPosts().filter(p => p.slug !== slug)
  return all
    .map(p => ({ ...p, relevance: p.tags.filter(t => tags.includes(t)).length }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
}
```

---

## 7. SEO Integration

### Per-Post Metadata

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  return constructMetadata({
    title: post.data.title,
    description: post.data.description,
    path: `/blog/${slug}`,
    tags: post.data.tags,
    publishedTime: post.data.date,
    type: 'article',       // OpenGraph type
  })
}
```

This generates:
```html
<title>React vs Next.js | ByteChai</title>
<meta name="description" content="...">
<meta property="og:title" content="React vs Next.js: Which Framework...">
<meta property="og:type" content="article">
<meta property="article:published_time" content="2026-05-15">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://bytechai.vercel.app/blog/react-vs-nextjs">
```

### JSON-LD Structured Data
Available via the `constructJsonLd()` helper for rich search results:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React vs Next.js: Which Framework Should You Choose in 2026?",
  "description": "...",
  "datePublished": "2026-05-15",
  "author": { "@type": "Person", "name": "Mahesh Kakunuri" }
}
```

---

## 8. Sitemap Integration

Blog posts are automatically included in the sitemap:

```typescript
// src/app/sitemap.ts
const blogPosts = getAllBlogPosts().map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))
```

---

## 9. Adding a New Blog Post — Step by Step

1. **Create the file**
   ```
   content/blogs/your-article-slug.mdx
   ```

2. **Add frontmatter**
   ```yaml
   ---
   title: "Your Article Title"
   description: "SEO-optimized description (120-160 chars)"
   date: "2026-06-01"
   tags: ["Tag1", "Tag2", "Tag3"]
   author: "Mahesh Kakunuri"
   readingTime: "5 min read"
   published: true
   ---
   ```

3. **Write content in MDX**
   ```mdx
   ## Introduction

   Your content here...

   \`\`\`typescript
   const code = "with syntax highlighting";
   \`\`\`
   ```

4. **Build the project**
   ```bash
   npm run build
   ```
   - `generateStaticParams` picks up the new file
   - Page is pre-rendered at `/blog/your-article-slug`
   - Sitemap is regenerated with the new URL

5. **Deploy**
   ```bash
   npm run start    # or deploy to Vercel
   ```

---

## 10. File Reference

| File | Purpose |
|------|---------|
| `content/blogs/*.mdx` | Blog post source files |
| `src/lib/mdx.ts` | Server-side blog data functions |
| `src/app/blog/page.tsx` | Blog listing page (server) |
| `src/app/blog/[slug]/page.tsx` | Single post page with metadata + layout (server) |
| `src/app/blog/[slug]/BlogMDXContent.tsx` | MDX rendering with plugins (client) |
| `src/components/blog/BlogCard.tsx` | Blog preview card component |
| `src/components/blog/SearchBlogs.tsx` | Blog search component |
| `src/components/blog/TableOfContents.tsx` | Auto-generated TOC sidebar |
| `src/components/layout/ReadingProgress.tsx` | Scroll progress bar |
| `src/app/sitemap.ts` | Sitemap including blog URLs |
