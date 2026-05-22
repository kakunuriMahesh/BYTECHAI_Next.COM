import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { getAllTopics } from '@/lib/topics'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TopicCard } from '@/components/topics/TopicCard'

export const metadata: Metadata = constructMetadata({
  title: 'Topics',
  description: 'Explore articles by topic — Next.js, TypeScript, React, Performance, and more.',
  path: '/topics',
})

export default function TopicsPage() {
  const topics = getAllTopics()

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        label="Topics"
        title="Explore by Topic"
        description="Browse articles organized by technology and subject. Find exactly what you want to learn."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  )
}