export interface Project {
  id: number
  title: string
  type: string
  description: string
  tech: string[]
  status: 'Merged' | 'Active' | 'Stable'
  clientFeedback: string
  images: string[]
  github?: string
  live?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  readingTime: string
  featuredImage?: string
  published: boolean
}

export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
  avatar?: string
}

export interface NavLink {
  name: string
  path: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: Record<string, string>
}
