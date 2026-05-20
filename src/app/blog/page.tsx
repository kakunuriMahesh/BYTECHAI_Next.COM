import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { getAllBlogPosts } from '@/lib/mdx'
import { BlogCard } from '@/components/blog/BlogCard'
import { SearchBlogs } from '@/components/blog/SearchBlogs'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights on web development, modern architecture, and technology.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        label="Blog"
        title="Latest Articles"
        description="Thoughts on web development, technology, and modern architecture."
      />

      <SearchBlogs />

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="text-6xl mb-6">📝</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No Articles Yet</h3>
          <p className="text-gray-400">Blog posts are being brewed. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
