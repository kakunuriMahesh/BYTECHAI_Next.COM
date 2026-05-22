'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaTag } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'
import type { Level } from '@/lib/topics'
import { TopicSidebar } from './TopicSidebar'

interface TopicArticleListProps {
  posts: (BlogPost & { slug: string })[]
  levels: { level: Level; count: number }[]
  tags: string[]
}

export function TopicArticleList({ posts, levels, tags }: TopicArticleListProps) {
  const [activeLevel, setActiveLevel] = useState<Level | null>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let result = posts
    if (activeLevel) result = result.filter((p) => p.level === activeLevel)
    if (activeTag) result = result.filter((p) => p.tags.includes(activeTag))
    return result
  }, [posts, activeLevel, activeTag])

  const clearFilters = () => {
    setActiveLevel(null)
    setActiveTag(null)
  }

  const hasFilters = activeLevel !== null || activeTag !== null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
      <div>
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                activeTag === null
                  ? 'bg-chai text-white border-chai'
                  : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200'
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                  activeTag === tag
                    ? 'bg-chai text-white border-chai'
                    : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-2">No articles match this filter.</p>
            <button
              onClick={clearFilters}
              className="text-chai font-medium hover:text-chai-dark transition-colors text-sm"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaClock size={10} />
                        {post.readingTime}
                      </span>
                      <span className="text-gray-200">|</span>
                      <span>{formatDate(post.date)}</span>
                      <LevelBadge level={post.level} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-chai transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-50">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded"
                        >
                          <FaTag size={8} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <TopicSidebar
        levels={levels}
        activeLevel={activeLevel}
        onLevelChange={(level) => {
          setActiveLevel(level)
          setActiveTag(null)
        }}
      />
    </div>
  )
}

function LevelBadge({ level }: { level: Level }) {
  const styles: Record<Level, string> = {
    beginner: 'bg-green-50 text-green-600',
    intermediate: 'bg-amber-50 text-amber-600',
    advanced: 'bg-red-50 text-red-600',
  }
  const labels: Record<Level, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }
  return (
    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles[level]}`}>
      {labels[level]}
    </span>
  )
}