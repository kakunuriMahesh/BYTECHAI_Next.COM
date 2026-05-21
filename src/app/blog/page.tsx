import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { getAllBlogPosts } from '@/lib/mdx'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { BlogList } from '@/components/blog/BlogList'

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

      <BlogList posts={posts} />
    </div>
  )
}
