'use client'

import { useState, useMemo } from 'react'
import { FaSearch } from 'react-icons/fa'
import { BlogCard } from '@/components/blog/BlogCard'
import type { BlogPost } from '@/types'

export function BlogList({ posts }: { posts: (BlogPost & { slug: string })[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return posts
    const q = query.toLowerCase()
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [query, posts])

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative max-w-md mx-auto mb-12"
      >
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-white border border-gray-100 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-chai/20 shadow-sm"
        />
      </form>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No Results Found</h3>
          <p className="text-gray-400">
            {query ? `No articles matching "${query}"` : 'No articles yet. Check back soon!'}
          </p>
        </div>
      )}
    </>
  )
}
