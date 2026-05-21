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
   │  4. MDX Compilation (Server)     │
   │  compileMDX() from               │
   │  next-mdx-remote/rsc             │
   │  - Compiles + renders MDX to     │
   │    React elements on the server  │
   │  - Plugins applied during        │
   │    compilation:                  │
   │    • remark-gfm                  │
   │    • rehype-slug                 │
   │    • rehype-autolink-headings    │
   │    • rehype-highlight            │
   │  - No client-side serialization  │
   └──────────┬───────────────────────┘
              │
              ▼
   ┌──────────────────────────────────┐
   │  5. Render RSC React Element     │
   │  {content} from compileMDX()     │
   │  inserted directly into JSX      │
   │  with custom component mapping:  │
   │  h2, h3, p, ul, ol, blockquote,  │
   │  pre, code, img, a, hr           │
   └──────────┬───────────────────────┘
              │
              ▼
         STATIC HTML OUTPUT (SSG)
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

#### `searchBlogs(query)` (deprecated in favor of client-side filtering)
Performs case-insensitive search across title, description, and tags. Available for server-side use but the current UI uses `BlogList.tsx` client-side filtering instead.

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
│  BlogList (Client - filtering)   │
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
- Passes posts to `BlogList` (client component) which handles search/filter and rendering

### Single Blog Post (`/blog/[slug]` — SSG with `generateStaticParams`)

```
src/app/blog/[slug]/page.tsx
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
│   compileMDX     │  - Auto-generated    │
│   from RSC)      │    from h2/h3        │
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
- `compileMDX()` from `next-mdx-remote/rsc` compiles MDX entirely on the server — no client-side serialization needed

---

## 5. MDX Rendering Pipeline (`compileMDX` from `next-mdx-remote/rsc`) — Server-Only

> **Important Design Decision**: Unlike the initial implementation which used `serialize()` on the server + `MDXRemote` on the client (requiring a separate `BlogMDXContent` client component), the final architecture uses `compileMDX` from `next-mdx-remote/rsc` **entirely on the server**. This eliminates client-side serialization overhead, reduces JavaScript bundle size, and avoids runtime errors like `Cannot read properties of null (reading 'useState')` that occur when `MDXRemote` tries to hydrate compiled MDX in the browser during prerendering.

The blog post page (`src/app/blog/[slug]/page.tsx`) is a **Server Component** that handles everything:

```typescript
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  // compileMDX compiles and renders MDX to React elements on the server
  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,                      // Adds IDs to headings
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],  // Anchor links
          rehypeHighlight,                 // Syntax highlighting
        ],
      },
    },
    components: customComponents,   // Custom component mapping
  })

  // content is a React element — just render it in JSX
  return <article>{content}</article>
}
```

### Why Server-Only Rendering?

| Approach | Previous (Client serialize) | Current (Server compileMDX) |
|----------|----------------------------|----------------------------|
| Where MDX compiles | Browser (useEffect) | Server (build/request time) |
| Bundle size | Includes MDX compiler (~200KB) | No MDX compiler in browser |
| Error handling | Runtime hydration errors | Compile-time errors |
| SEO | Fully rendered (SSG) | Fully rendered (SSG) |
| Code complexity | 2 files (page + client component) | 1 file (server component) |

### Plugins

| Plugin | Purpose |
|--------|---------|
| `remark-gfm` | GitHub Flavored Markdown (tables, strikethrough, task lists) |
| `rehype-slug` | Adds `id` attributes to headings for TOC linking |
| `rehype-autolink-headings` | Adds clickable anchor links to headings |
| `rehype-highlight` | Syntax highlighting for code blocks (uses `lowlight` under the hood) |

### Syntax Highlighting CSS

`highlight.js` must be installed and its CSS imported for code highlighting to be visible:

```css
/* In src/app/globals.css */
@import "highlight.js/styles/atom-one-dark.css";
```

### Custom Component Mapping

Components are defined as a plain object in the server component and passed to `compileMDX()`:

```typescript
const mdxComponents = {
  h2: (props) => <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 scroll-mt-24" {...props} />,
  h3: (props) => <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3 scroll-mt-24" {...props} />,
  p:  (props) => <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-chai pl-6 italic text-gray-600 mb-6 bg-amber-50/50 py-4 pr-4 rounded-r-2xl" {...props} />,
  a:  (props) => <a className="text-chai hover:text-chai-dark underline underline-offset-2" {...props} />,
  pre: (props) => <pre className="bg-[#1e1e2e] text-[#cdd6f4] rounded-2xl p-6 mb-6 overflow-x-auto text-sm leading-relaxed" {...props} />,
  code: (props) => {
    // Distinguish inline code from fenced code blocks
    // - Inline: no className → amber badge
    // - Block: has language class → dark theme
    const className = (props as { className?: string }).className
    const isInline = !className || className === ''
    if (isInline) {
      return <code className="bg-chai-light text-chai px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    }
    return <code className="text-sm leading-relaxed" {...props} />
  },
  img: (props) => <img className="rounded-2xl w-full mb-6" loading="lazy" {...props} />,
  hr:  () => <hr className="my-12 border-gray-100" />,
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
- Filters out headings without `id` attributes (avoids React key conflict `""` errors)
- Uses `IntersectionObserver` with `rootMargin: '-80px 0px -80% 0px'`
- Active heading gets visual indicator (amber text)
- Clicking scrolls smoothly to the heading (offset by navbar height)

```typescript
// Filter ensures no empty-string keys
const items: TOCItem[] = Array.from(elements)
  .filter((el) => el.id)   // Skip headings without IDs
  .map((el) => ({ id: el.id, text: el.textContent || '', level: ... }))
```

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

### Search (`BlogList.tsx`)

```
┌──────────────────────────────────────────┐
│ 🔍 Search articles...                     │
└──────────────────────────────────────────┘
```

- **Replaced `SearchBlogs.tsx`** (which only navigated to `?search=query` without the page reading the param)
- Uses local `useState` for the search query and `useMemo` for real-time filtering
- Filters by title, description, and tags — instant feedback as the user types
- No page navigation needed — search state is local to the component

```typescript
'use client'

import { useState, useMemo } from 'react'

export function BlogList({ posts }: { posts: (BlogPost & { slug: string })[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return posts
    const q = query.toLowerCase()
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [query, posts])

  // Renders filtered results with BlogCard components
}
```

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
| `content/blogs/*.mdx` | Blog post source files (frontmatter + MDX body) |
| `src/lib/mdx.ts` | Server-side blog data functions (get, search, relate) |
| `src/app/blog/page.tsx` | Blog listing page (server — fetches all posts) |
| `src/app/blog/[slug]/page.tsx` | Single post page with full server-side MDX compilation |
| `src/components/blog/BlogList.tsx` | Client component for search filtering + blog grid |
| `src/components/blog/BlogCard.tsx` | Blog preview card component |
| `src/components/blog/TableOfContents.tsx` | Auto-generated TOC sidebar (filters empty IDs) |
| `src/components/layout/ReadingProgress.tsx` | Scroll progress bar |
| `src/app/sitemap.ts` | Sitemap including blog URLs |

### Key Files Removed During Refactoring

| Removed File | Reason |
|-------------|--------|
| `src/app/blog/[slug]/BlogMDXContent.tsx` | Replaced by server-only `compileMDX()` — no client serialization needed |
| `src/components/blog/SearchBlogs.tsx` | Replaced by `BlogList.tsx` which handles both search and rendering with local state |
