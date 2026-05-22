'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { TopicIcon } from '@/components/topics/TopicIcon'
import type { TopicWithStats } from '@/lib/topics'

export function TopicCard({ topic }: { topic: TopicWithStats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/topics/${topic.slug}`}
        className="block group h-full"
      >
        <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-chai group-hover:bg-chai group-hover:text-white transition-colors">
              <TopicIcon name={topic.icon} className="text-lg" />
            </div>
            <span className="text-xs font-medium text-gray-400">{topic.count} {topic.count === 1 ? 'article' : 'articles'}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-chai transition-colors">{topic.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{topic.description}</p>
          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-chai transition-colors">
            Explore <FaArrowRight size={10} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}