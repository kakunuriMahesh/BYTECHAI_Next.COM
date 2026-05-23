import type { NavLink, SocialLink, SiteConfig, Project, Testimonial, Service } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'ByteChai',
  description: 'A personal blog and portfolio by Mahesh Kakunuri — writing about modern web development, system design, and scalable applications.',
  url: 'https://bytechai.com',
  ogImage: '/images/og-default.png',
  links: {
    github: 'https://github.com/kakunuriMahesh',
    linkedin: 'https://www.linkedin.com/in/maheshkakunuri',
  },
}

export const navLinks: NavLink[] = [
  { name: 'Topics', path: '/topics' },
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work & Expertise', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Uses', path: '/uses' },
  { name: 'Contact', path: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/kakunuriMahesh', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maheshkakunuri', icon: 'FaLinkedin' },
]

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Technologies Used', value: '30+' },
  { label: 'Articles Published', value: '10+' },
  { label: 'Open For', value: 'Collaboration' },
]

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Engine Brew',
    type: 'Web App',
    description: 'A robust, scalable e-commerce solution with real-time inventory management, AI-driven product recommendations, and a seamless checkout experience.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'TypeScript'],
    status: 'Merged',
    clientFeedback: 'The performance is night and day compared to our old system. ByteChai is phenomenal.',
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
    live: 'https://example.com',
    challenge: 'The client had a legacy e-commerce platform that was slow, difficult to maintain, and couldn\'t handle peak traffic during sales events. Page load times exceeded 6 seconds and the conversion rate was declining.',
    solution: 'I rebuilt the platform from the ground up using Next.js for the frontend and Node.js microservices for the backend. Implemented Redis caching, database optimization, and lazy loading. Integrated Stripe for payments and built an AI recommendation engine.',
    results: [
      'Page load time reduced from 6.2s to 1.1s (82% improvement)',
      'Conversion rate increased by 34% within 3 months of launch',
      'Successfully handled 50K concurrent users during Black Friday sale',
      'SEO traffic increased by 200% due to server-side rendering',
    ],
  },
  {
    id: 2,
    title: 'Health-Track Mobile',
    type: 'Mobile App',
    description: 'Cross-platform health monitoring app with wearable device integration, medical report analysis, and real-time health alerts.',
    tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Dart', 'Bluetooth LE'],
    status: 'Active',
    clientFeedback: 'Intuitive design and solid architecture. Our users love the smooth experience.',
    images: ['https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
    challenge: 'The healthcare provider needed a mobile app that could integrate with multiple wearable devices (smartwatches, fitness bands), process health data in real-time, and present actionable insights to patients and doctors.',
    solution: 'Built a cross-platform Flutter app that connects with wearables via Bluetooth LE. Used TensorFlow Lite for on-device health data analysis. Implemented Firebase for real-time sync and push notifications for critical health alerts.',
    results: [
      'Reduced patient onboarding time by 60% with automated data capture',
      'Achieved 4.7/5 star rating on both App Store and Play Store',
      'Over 10K active users within the first 6 months',
      'Doctors reported 40% faster diagnosis with integrated health data',
    ],
  },
  {
    id: 3,
    title: 'Finance Automation Bot',
    type: 'Automation',
    description: 'Smart AI bot that automates financial reconciliation, report generation, and compliance checking for fintech firms.',
    tech: ['Python', 'AWS Lambda', 'OpenAI API', 'Pandas', 'Docker', 'PostgreSQL'],
    status: 'Stable',
    clientFeedback: 'Saved us 40 hours of manual work per week. Truly a game-changer.',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'],
    github: 'https://github.com',
    challenge: 'A fintech company was spending over 40 hours per week on manual financial reconciliation and report generation. The process was error-prone and couldn\'t scale with their growing transaction volume.',
    solution: 'Developed an AI-powered automation system using Python and Pandas for data processing. Used OpenAI API for intelligent transaction categorization and anomaly detection. Deployed on AWS Lambda for serverless, cost-effective operation.',
    results: [
      'Eliminated 40+ hours of manual work per week (100% ROI in 2 months)',
      'Reduced reconciliation errors from 2.3% to 0.05%',
      'Processing capacity increased from 1K to 100K transactions per day',
      'Real-time dashboard provided instant visibility into financial health',
    ],
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
    name: 'Uday Nallapati',
    role: 'Project Lead',
    text: 'Mahesh did an outstanding job as a full-stack developer on our project. He demonstrated exceptional technical expertise in both front-end and back-end development, delivering a robust and feature-rich solution. His attention to detail, proactive communication, and commitment to meeting the timeline were truly commendable.',
    rating: 5,
  },
  {
    name: 'kjcheon',
    role: 'Client',
    text: 'He is a true code expert. I think it was a wise decision to ask him for my problems. I will ask him again if I have another chance. Take my words!',
    rating: 5,
  },
  {
    name: 'R. Case',
    role: 'Client',
    text: 'Excellent work. Very good communication, fast work and perfect coding. I recommend Mahesh to anyone looking for a professional coder. I will use his services again in the future.',
    rating: 5,
  },
]

export const techStack = [
  { name: 'React.js', icon: 'FaReact' },
  { name: 'JavaScript (ES6+)', icon: 'SiJavascript' },
  { name: 'HTML5', icon: 'SiHtml5' },
  { name: 'CSS3', icon: 'SiCss' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Framer Motion', icon: 'SiFramer' },
  { name: 'GSAP', icon: 'FaCode' },
  { name: 'Redux', icon: 'SiRedux' },
  { name: 'Redux Saga', icon: 'FaCode' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'n8n', icon: 'FaRobot' },
  { name: 'REST APIs', icon: 'FaExchangeAlt' },
  { name: 'OpenAI APIs', icon: 'SiOpenai' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Razorpay', icon: 'FaCode' },
  { name: 'Git', icon: 'FaGitAlt' },
  { name: 'GitHub', icon: 'FaGithub' },
  { name: 'Vite', icon: 'SiVite' },
  { name: 'Figma', icon: 'SiFigma' },
  { name: 'Wix Studio', icon: 'SiWix' },
  { name: 'Hostinger', icon: 'FaCode' },
  { name: 'Squarespace', icon: 'SiSquarespace' },
  { name: 'Cursor AI', icon: 'FaRobot' },
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
    value: '+91 9985875017',
    href: 'tel:+919985875017',
  },
  {
    icon: 'HiOutlineLocationMarker',
    label: 'Location',
    value: 'Hyderabad, India',
    href: '#',
  },
]
