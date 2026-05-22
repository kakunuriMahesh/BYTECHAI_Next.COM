import { getAllBlogPosts } from './mdx'
import type { BlogPost } from '@/types'

export type Level = 'beginner' | 'intermediate' | 'advanced'

export interface Topic {
  slug: string
  title: string
  description: string
  icon: string
}

export interface TopicWithStats extends Topic {
  count: number
  levels: { level: Level; count: number }[]
  tags: string[]
}

export const TOPICS: Topic[] = [
  {
    slug: 'react-engineering',
    title: 'React Engineering',
    description: 'Practical guides on React, Next.js, and building production-grade applications.',
    icon: 'FaAtom',
  },
  {
    slug: 'motion-ui',
    title: 'Motion & UI',
    description: 'Animations, transitions, and interactive UI patterns for modern web apps.',
    icon: 'FaArrowsAlt',
  },
  {
    slug: 'ui-engineering',
    title: 'UI Engineering',
    description: 'CSS architecture, design systems, and front-end styling best practices.',
    icon: 'FaPalette',
  },
  {
    slug: 'frontend-architecture',
    title: 'Frontend Architecture',
    description: 'System design, project structure, and architectural decisions for the web.',
    icon: 'FaLayerGroup',
  },
  {
    slug: 'performance',
    title: 'Performance',
    description: 'Optimizing web applications for speed, efficiency, and great Core Web Vitals.',
    icon: 'FaRocket',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    description: 'Leveraging AI tools and automation to improve developer workflows.',
    icon: 'FaRobot',
  },
  {
    slug: 'case-studies',
    title: 'Case Studies',
    description: 'Real-world project breakdowns, architectural decisions, and lessons learned.',
    icon: 'FaBookOpen',
  },
  {
    slug: 'developer-journey',
    title: 'Developer Journey',
    description: 'Career growth, learning resources, and the craft of software development.',
    icon: 'FaCompass',
  },
]

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug)
}

export function getPostsByTopic(topicSlug: string): (BlogPost & { slug: string })[] {
  const all = getAllBlogPosts()
  return all.filter((p) => p.category === topicSlug)
}

export function getTopicStats(topicSlug: string): TopicWithStats | null {
  const topic = getTopic(topicSlug)
  if (!topic) return null

  const posts = getPostsByTopic(topicSlug)
  const levels: { level: Level; count: number }[] = [
    { level: 'beginner', count: 0 },
    { level: 'intermediate', count: 0 },
    { level: 'advanced', count: 0 },
  ]

  const tagSet = new Set<string>()

  posts.forEach((p) => {
    const idx = levels.findIndex((l) => l.level === p.level)
    if (idx !== -1) levels[idx].count++
    p.tags.forEach((t) => tagSet.add(t))
  })

  return {
    ...topic,
    count: posts.length,
    levels: levels.filter((l) => l.count > 0),
    tags: Array.from(tagSet).sort(),
  }
}

export function getAllTopics(): TopicWithStats[] {
  return TOPICS.map((topic) => {
    const stats = getTopicStats(topic.slug)
    return stats || { ...topic, count: 0, levels: [], tags: [] }
  }).filter((t) => t.count > 0)
}

export function getPostsInTopic(currentSlug: string, topicSlug: string, limit = 4) {
  const posts = getPostsByTopic(topicSlug).filter((p) => p.slug !== currentSlug)
  return posts.slice(0, limit)
}