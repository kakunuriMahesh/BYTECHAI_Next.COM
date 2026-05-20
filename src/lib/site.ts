import type { NavLink, SocialLink, SiteConfig, Project, Testimonial, Service } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'ByteChai',
  description: 'Where technology meets creativity. We brew high-performance digital solutions with a human touch.',
  url: 'https://bytechai.vercel.app',
  ogImage: '/images/og-default.png',
  links: {
    github: 'https://github.com/bytechai',
    twitter: 'https://twitter.com/bytechai',
    linkedin: 'https://linkedin.com/company/bytechai',
    instagram: 'https://instagram.com/bytechai',
  },
}

export const navLinks: NavLink[] = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Services', path: '/services' },
  { name: 'Uses', path: '/uses' },
  { name: 'Contact', path: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'FaGithub' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'FaTwitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'FaInstagram' },
]

export const stats = [
  { label: 'Projects Built', value: '50+' },
  { label: 'Technologies Used', value: '30+' },
  { label: 'Articles Written', value: '25+' },
  { label: 'Available For', value: 'Freelance' },
]

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Engine Brew',
    type: 'Web App',
    description: 'A robust, scalable e-commerce solution with real-time inventory and AI-driven recommendations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    status: 'Merged',
    clientFeedback: 'The performance is night and day compared to our old system. ByteChai is phenomenal.',
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Health-Track Mobile',
    type: 'Mobile App',
    description: 'Cross-platform health monitoring app with wearable integration and medical report analysis.',
    tech: ['Flutter', 'Firebase', 'TensorFlow', 'Dart'],
    status: 'Active',
    clientFeedback: 'Intuitive design and solid architecture. Our users love the smooth experience.',
    images: ['https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Finance Automation Bot',
    type: 'Automation',
    description: 'Smart AI bot that automates reconciliation and financial reporting for fintech firms.',
    tech: ['Python', 'AWS', 'OpenAI API', 'Pandas'],
    status: 'Stable',
    clientFeedback: 'Saved us 40 hours of manual work per week. Truly a game-changer.',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
  },
]

export const services: Service[] = [
  {
    icon: 'HiOutlineGlobeAlt',
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks like Next.js and React.',
    features: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: 'HiOutlineDeviceMobile',
    title: 'SaaS Development',
    description: 'Scalable SaaS platforms with authentication, payments, and real-time features.',
    features: ['Auth', 'Payments', 'Real-time', 'APIs'],
  },
  {
    icon: 'HiOutlineLightBulb',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for conversion and delightful user experiences.',
    features: ['Figma', 'Prototyping', 'Design Systems', 'Usability'],
  },
  {
    icon: 'HiOutlineLightningBolt',
    title: 'AI Integrations',
    description: 'Smart AI integrations to automate workflows and enhance business capabilities.',
    features: ['OpenAI', 'Custom Models', 'Automation', 'Analytics'],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    role: 'Startup Founder',
    text: 'ByteChai transformed our vision into a stunning reality. Their attention to detail is unmatched.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director',
    text: 'Professional, responsive, and incredibly creative. They brew digital magic!',
    rating: 5,
  },
  {
    name: 'Mark Wilson',
    role: 'CTO, TechFlow',
    text: 'Clean code and exceptional strategy. The best partner for any high-scale project.',
    rating: 5,
  },
]

export const techStack = [
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/images/tech/tailwind.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
  { name: 'Docker', icon: '/images/tech/docker.svg' },
  { name: 'Figma', icon: '/images/tech/figma.svg' },
  { name: 'Git', icon: '/images/tech/git.svg' },
  { name: 'Python', icon: '/images/tech/python.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
  { name: 'Redis', icon: '/images/tech/redis.svg' },
]

export const contactInfo = [
  {
    icon: 'HiOutlineMail',
    label: 'Email',
    value: 'maheshkakunuri3@gmail.com',
    href: 'mailto:maheshkakunuri3@gmail.com',
  },
  {
    icon: 'HiOutlinePhone',
    label: 'Phone',
    value: '+91 7981881518',
    href: 'tel:+917981881518',
  },
  {
    icon: 'HiOutlineLocationMarker',
    label: 'Location',
    value: 'Hyderabad, India',
    href: '#',
  },
]
