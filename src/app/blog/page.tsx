import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/seo'
import { getAllBlogPosts } from '@/lib/mdx'
import { FaClock, FaTag, FaStar, FaArrowRight } from 'react-icons/fa'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { BlogList } from '@/components/blog/BlogList'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights on web development, modern architecture, and technology.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const [featured, ...rest] = posts

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        label="Blog"
        title="Latest Articles"
        description="Thoughts on web development, system design, and modern architecture."
      />

      {featured && (
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-chai uppercase tracking-widest mb-4">
            <FaStar size={12} /> Featured Article
          </div>
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="bg-gradient-to-br from-chai to-chai-dark rounded-[2rem] p-8 sm:p-12 text-white shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs text-amber-200 mb-4">
                <FaClock size={12} />
                <span>{featured.readingTime}</span>
                <span className="text-amber-200/50">|</span>
                <span>{formatDate(featured.date)}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 group-hover:text-amber-100 transition-colors leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-amber-100/80 text-lg leading-relaxed mb-6 max-w-2xl">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-200 bg-white/10 px-3 py-1.5 rounded-full"
                  >
                    <FaTag size={8} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      )}

      <BlogList posts={rest} />
    </div>
  )
}
