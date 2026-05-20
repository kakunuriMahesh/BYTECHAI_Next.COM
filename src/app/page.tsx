import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { TechStack } from '@/components/home/TechStack'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { RecentBlogs } from '@/components/home/RecentBlogs'
import { ServicesSection } from '@/components/home/ServicesSection'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'
import { getAllBlogPosts } from '@/lib/mdx'

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <>
      <Hero />
      <Stats />
      <TechStack />
      <FeaturedProjects />
      <RecentBlogs posts={posts} />
      <ServicesSection />
      <Testimonials />
      <Newsletter />
    </>
  )
}
