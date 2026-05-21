# Build & Deploy ByteChai to Vercel

## Build Locally

```bash
cd D:\BYTECHAI_NEXT
npm run build
```

**Where does the build output go?**
- Next.js generates static files in the `.next/` folder (at the project root: `D:\BYTECHAI_NEXT\.next\`)
- `.next/` contains both server bundles (Node.js) and client bundles (browser JavaScript/CSS)
- Static blog posts (`/blog/[slug]`) are pre-rendered as HTML files inside `.next/server/app/blog/`

**Note:** `.next/` is git-ignored — it is **not** committed. Vercel runs its own build and generates its own `.next/` folder on their servers.

## Local Preview After Build

```bash
npm run start
```

This serves the production build at `http://localhost:3000`.

## Deploy to Vercel

### Prerequisites
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier is sufficient)
- The project pushed to a GitHub repository

### Step 1: Create a GitHub repository

1. Go to https://github.com/new
2. Name it (e.g., `bytechai-next`)
3. Do **not** initialize with README, .gitignore, or license (the project already has these)
4. Click **Create repository**

### Step 2: Push the code

```bash
cd D:\BYTECHAI_NEXT
git remote add origin https://github.com/YOUR_USERNAME/bytechai-next.git
git branch -M main
git add .
git commit -m "Initial commit: ByteChai Next.js portfolio"
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Import to Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select the `bytechai-next` repository
4. Vercel auto-detects the framework as **Next.js** and fills in:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (auto)
   - **Output Directory:** (leave blank — Vercel uses `.next/` internally)
   - **Install Command:** `npm install` (auto)
5. Expand **Environment Variables** and add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://bytechai.com` |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-XXXXXXXXXXXXXX` (your AdSense publisher ID, optional) |

6. Click **Deploy**

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add your custom domain (e.g., `bytechai.dev`)
3. Follow Vercel's DNS configuration instructions for your domain provider

### Step 5: Post-Deployment Checklist

- [ ] Visit `https://bytechai.com` — homepage loads correctly
- [ ] Visit `/blog` — blog listing shows all 10 posts
- [ ] Visit `/blog/[slug]` for each post — renders properly with TOC and syntax highlighting
- [ ] Visit `/about`, `/projects`, `/services`, `/contact` — all render correctly
- [ ] Visit `/sitemap.xml` — returns valid XML with all routes
- [ ] Visit `/robots.txt` — returns correct configuration
- [ ] Run Lighthouse audit — target 90+ all categories
- [ ] Submit sitemap to Google Search Console

### Environment Variables on Vercel

To update environment variables after deployment:
1. Vercel Dashboard → Project → **Settings** → **Environment Variables**
2. Add/edit variables
3. **Redeploy** the project for changes to take effect

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically rebuilds and redeploys on every push to the main branch.

## Build Output Explained

| Path | Contents |
|------|----------|
| `.next/build/` | Build manifest and traces |
| `.next/server/` | Server bundles, pre-rendered HTML for SSG pages |
| `.next/static/` | Client-side JavaScript, CSS, chunks |
| `.next/standalone/` | (only if `output: 'standalone'` is set) Self-contained deployment |

## Notes

- The `.next/` folder is temporary build output — it is **not** committed to git and **not** needed for Vercel deployment
- Vercel's Node.js runtime handles server-rendered pages automatically
- Static pages (SSG) are served from Vercel's CDN edge network
- No build artifacts need to be manually uploaded anywhere
