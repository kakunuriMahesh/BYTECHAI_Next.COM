import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs')

export function getBlogSlugs() {
  if (!fs.existsSync(BLOGS_DIR)) return []
  return fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith('.mdx'))
}

export function getBlogPost(slug: string) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  return { data: data as BlogPost, content, slug }
}

export function getAllBlogPosts(): (BlogPost & { slug: string })[] {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const post = getBlogPost(slug)
      if (!post) return null
      return { ...post.data, slug }
    })
    .filter((p): p is BlogPost & { slug: string } => p !== null && p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3) {
  const all = getAllBlogPosts().filter((p) => p.slug !== currentSlug)
  const related = all
    .map((p) => ({
      ...p,
      relevance: p.tags.filter((t) => tags.includes(t)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
  return related
}

export function searchBlogs(query: string) {
  const all = getAllBlogPosts()
  const q = query.toLowerCase()
  return all.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  )
}
