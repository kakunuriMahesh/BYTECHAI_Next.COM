import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { constructMetadata } from '@/lib/seo'
import { getTopic, getPostsByTopic, getTopicStats, TOPICS } from '@/lib/topics'
import { TopicHeader } from '@/components/topics/TopicHeader'
import { TopicArticleList } from '@/components/topics/TopicArticleList'

interface TopicPageProps {
  params: Promise<{ topic: string }>
}

export async function generateStaticParams() {
  return TOPICS.map((topic) => ({ topic: topic.slug }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { topic: slug } = await params
  const topic = getTopic(slug)
  if (!topic) return {}
  return constructMetadata({
    title: `${topic.title} Articles`,
    description: topic.description,
    path: `/topics/${slug}`,
  })
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: slug } = await params
  const topic = getTopicStats(slug)
  if (!topic) notFound()

  const posts = getPostsByTopic(slug)

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <TopicHeader topic={topic} />
      <TopicArticleList posts={posts} levels={topic.levels} tags={topic.tags} />
    </div>
  )
}