import { Hero } from '@/components/home/Hero'
import { RecentBlogs } from '@/components/home/RecentBlogs'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { TechStack } from '@/components/home/TechStack'
import { AboutPreview } from '@/components/home/AboutPreview'
import { Stats } from '@/components/home/Stats'
import { Testimonials } from '@/components/home/Testimonials'
import { ServicesSection } from '@/components/home/ServicesSection'
import { Newsletter } from '@/components/home/Newsletter'
import { getAllBlogPosts } from '@/lib/mdx'

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 4)

  return (
    <>
      <Hero />
      <RecentBlogs posts={posts} />
      <FeaturedProjects />
      <TechStack />
      <AboutPreview />
      <Stats />
      <Testimonials />
      <ServicesSection />
      <Newsletter />
    </>
  )
}
