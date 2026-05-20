'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaTag } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

export function BlogCard({ post, index = 0 }: { post: BlogPost & { slug: string }; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <FaClock size={12} />
            <span>{post.readingTime}</span>
            <span className="text-gray-200">|</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-chai transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded"
              >
                <FaTag size={8} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
