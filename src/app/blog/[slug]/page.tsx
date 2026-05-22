import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { constructMetadata } from '@/lib/seo'
import { getBlogPost, getRelatedPosts, getBlogSlugs } from '@/lib/mdx'
import { getTopic, getPostsInTopic } from '@/lib/topics'
import { formatDate } from '@/lib/utils'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ReadingProgress } from '@/components/layout/ReadingProgress'
import { FaClock, FaTag, FaUser } from 'react-icons/fa'
import { TopicIcon } from '@/components/topics/TopicIcon'
import Link from 'next/link'
import { AdPlaceholder } from '@/components/shared/AdPlaceholder'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 scroll-mt-24" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700 leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-chai pl-6 italic text-gray-600 mb-6 bg-amber-50/50 py-4 pr-4 rounded-r-2xl" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-chai hover:text-chai-dark underline underline-offset-2" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#1e1e2e] text-[#cdd6f4] rounded-2xl p-6 mb-6 overflow-x-auto text-sm leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const className = (props as { className?: string }).className
    const isInline = !className || className === ''
    if (isInline) {
      return <code className="bg-chai-light text-chai px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    }
    return <code className="text-sm leading-relaxed" {...props} />
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-2xl w-full mb-6" loading="lazy" {...props} />
  ),
  hr: () => <hr className="my-12 border-gray-100" />,
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

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          rehypeHighlight,
        ],
      },
    },
    components: mdxComponents,
  })

  const related = getRelatedPosts(slug, post.data.tags)
  const topic = getTopic(post.data.category)
  const topicPosts = topic ? getPostsInTopic(slug, topic.slug) : []

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

            <div className="flex flex-wrap items-center gap-2">
              {topic && (
                <Link
                  href={`/topics/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-50 text-chai px-3 py-1.5 rounded-full border border-amber-100 hover:bg-chai hover:text-white transition-all"
                >
                  <TopicIcon name={topic.icon} className="text-xs" /> {topic.title}
                </Link>
              )}
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                post.data.level === 'beginner' ? 'bg-green-50 text-green-700' :
                post.data.level === 'intermediate' ? 'bg-amber-50 text-amber-700' :
                'bg-red-50 text-red-700'
              }`}>
                {post.data.level.charAt(0).toUpperCase() + post.data.level.slice(1)}
              </span>
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
            <div className="min-w-0">
              {content}
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

        {topic && topicPosts.length > 0 && (
          <section className="max-w-7xl mx-auto mt-16 pt-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold mb-8">
              More in <span className="text-chai inline-flex items-center gap-1.5"><TopicIcon name={topic.icon} /> {topic.title}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topicPosts.map((tp) => (
                <Link key={tp.slug} href={`/blog/${tp.slug}`} className="block group">
                  <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                        <span>{tp.readingTime}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          tp.level === 'beginner' ? 'bg-green-50 text-green-600' :
                          tp.level === 'intermediate' ? 'bg-amber-50 text-amber-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {tp.level}
                        </span>
                      </div>
                      <h3 className="font-bold group-hover:text-chai transition-colors truncate">{tp.title}</h3>
                    </div>
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
