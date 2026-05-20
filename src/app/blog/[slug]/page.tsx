import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { constructMetadata } from '@/lib/seo'
import { getBlogPost, getRelatedPosts, getBlogSlugs } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { BlogMDXContent } from './BlogMDXContent'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ReadingProgress } from '@/components/layout/ReadingProgress'
import { FaClock, FaTag, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { AdPlaceholder } from '@/components/shared/AdPlaceholder'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs()
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return constructMetadata({
    title: post.data.title,
    description: post.data.description,
    path: `/blog/${slug}`,
    tags: post.data.tags,
    publishedTime: post.data.date,
    type: 'article',
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.data.tags)

  return (
    <>
      <ReadingProgress />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <FaUser size={12} />
                {post.data.author}
              </span>
              <span className="text-gray-300">/</span>
              <span className="flex items-center gap-1.5">
                <FaClock size={12} />
                {post.data.readingTime}
              </span>
              <span className="text-gray-300">/</span>
              <time>{formatDate(post.data.date)}</time>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {post.data.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.data.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.data.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-bold bg-chai-light text-chai px-3 py-1.5 rounded-full">
                  <FaTag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <AdPlaceholder size="banner" className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
            <div className="prose prose-lg max-w-none">
              <BlogMDXContent source={post.content} />
            </div>

            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>
          </div>

          <AdPlaceholder size="banner" className="mt-12" />
        </div>

        {related.length > 0 && (
          <section className="max-w-7xl mx-auto mt-24 pt-24 border-t border-gray-100">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <FaClock size={10} />
                      <span>{rp.readingTime}</span>
                    </div>
                    <h3 className="font-bold group-hover:text-chai transition-colors">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
