import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { TopicIcon } from '@/components/topics/TopicIcon'
import type { TopicWithStats } from '@/lib/topics'

export function TopicHeader({ topic }: { topic: TopicWithStats }) {
  return (
    <div className="mb-16">
      <Link
        href="/topics"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-chai transition-colors mb-8"
      >
        <FaArrowLeft size={12} /> All Topics
      </Link>

      <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 shadow-sm">
        <TopicIcon name={topic.icon} className="text-chai text-3xl" />
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h1 className="text-4xl sm:text-5xl font-bold">{topic.title}</h1>
        <span className="text-sm font-bold bg-amber-50 text-chai px-4 py-1.5 rounded-full border border-amber-100">
          {topic.count} {topic.count === 1 ? 'article' : 'articles'}
        </span>
      </div>

      <p className="text-xl text-gray-600 max-w-2xl">{topic.description}</p>
    </div>
  )
}