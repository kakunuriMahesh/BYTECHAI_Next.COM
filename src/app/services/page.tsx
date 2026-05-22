'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineGlobeAlt, HiOutlineDeviceMobile, HiOutlineChip, HiOutlineLightningBolt, HiCursorClick, HiChartBar, HiShieldCheck, HiOutlineSupport } from 'react-icons/hi'
import { FaCheckCircle, FaArrowRight, FaCode } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  HiOutlineGlobeAlt: <HiOutlineGlobeAlt />,
  HiOutlineDeviceMobile: <HiOutlineDeviceMobile />,
  HiOutlineChip: <HiOutlineChip />,
  HiOutlineLightningBolt: <HiOutlineLightningBolt />,
  HiCursorClick: <HiCursorClick />,
  HiChartBar: <HiChartBar />,
  HiShieldCheck: <HiShieldCheck />,
  HiOutlineSupport: <HiOutlineSupport />,
}

const mainServices = [
  {
    icon: 'HiOutlineGlobeAlt',
    title: 'Web Development',
    desc: 'High-performance websites and web applications built with Next.js, React, and TypeScript. From landing pages to complex SaaS platforms.',
    features: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    caseStudy: 'Built a SaaS dashboard for a fintech startup that handles 50K+ daily active users with 99.9% uptime.',
  },
  {
    icon: 'HiOutlineDeviceMobile',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter. Native-like performance with a single codebase.',
    features: ['React Native', 'Flutter', 'App Store Deployment', 'Push Notifications', 'Offline Support', 'Real-time Sync'],
    caseStudy: 'Developed a health-tracking mobile app that reduced patient onboarding time by 60% for a healthcare provider.',
  },
  {
    icon: 'HiOutlineChip',
    title: 'AI Integration',
    desc: 'Integrate AI capabilities into applications — from chatbots and recommendation engines to document analysis and automation.',
    features: ['OpenAI API', 'Custom GPTs', 'RAG Pipelines', 'Vector Databases', 'LangChain', 'Model Fine-tuning'],
    caseStudy: 'Implemented an AI-powered customer support chatbot that resolved 40% of tickets without human intervention.',
  },
  {
    icon: 'HiOutlineLightningBolt',
    title: 'Business Automation',
    desc: 'Streamline workflows with custom automation solutions. From data pipelines to deployment automation.',
    features: ['CI/CD Pipelines', 'Data ETL', 'Workflow Design', 'API Integrations', 'Cloud Infrastructure', 'Monitoring'],
    caseStudy: 'Automated a manual reporting process for an e-commerce client, saving 30+ hours of manual work per week.',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'I learn about the goals, audience, and technical requirements. We align on scope and timeline.' },
  { step: '02', title: 'Design & Prototype', desc: 'Wireframes, mockups, and interactive prototypes for review before any code is written.' },
  { step: '03', title: 'Development', desc: 'Built using modern, scalable architecture with regular progress updates throughout.' },
  { step: '04', title: 'Testing & QA', desc: 'Rigorous testing for performance, security, accessibility, and cross-browser compatibility.' },
  { step: '05', title: 'Launch & Support', desc: 'Deploy to production, configure monitoring, and provide post-launch support.' },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
          Work & Expertise
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          What I <span className="text-chai">Build</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          I build high-quality digital products with a focus on performance, scalability, 
          and thoughtful engineering. I occasionally collaborate on interesting projects 
          or independent work.
        </p>
      </section>

      {/* Expertise Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-5xl text-chai mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>

              <div className="bg-amber-50 rounded-2xl p-5 mb-6 border border-amber-100">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-chai">Case Study:</span> {s.caseStudy}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.features.map((f) => (
                  <span key={f} className="text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-chai px-3 py-1.5 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-chai hover:text-chai-dark transition-colors group/link"
              >
                Learn More <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Values */}
      <section className="bg-gray-900 text-white rounded-[4rem] py-24 px-8 max-w-7xl mx-auto mb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">How I Approach Engineering</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Principles that guide every project I build.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { icon: 'HiCursorClick', title: 'User-Centric Design', desc: 'Every interaction is intentional. I design for real people, not just screens.' },
            { icon: 'HiChartBar', title: 'Scalable Architecture', desc: 'Systems built to handle growth. From 100 to 1 million users — the architecture scales.' },
            { icon: 'HiShieldCheck', title: 'Security First', desc: 'Industry-standard security practices baked into every layer — from code to deployment.' },
            { icon: 'HiOutlineSupport', title: 'Thoughtful Support', desc: 'I don\'t disappear after launch. Maintenance and updates keep things running.' },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl text-chai mb-6 flex justify-center">{iconMap[p.icon]}</div>
              <h4 className="text-lg font-bold mb-3">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto mb-32 px-4">
        <div className="text-center mb-16">
          <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
            Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A transparent, collaborative approach from idea to launch.</p>
        </div>

        <div className="flex flex-col gap-12">
          {process.map((item) => (
            <motion.div
              key={item.step}
              className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-gray-100 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl font-black text-chai opacity-20">{item.step}</span>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed max-w-3xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: 'How long does a typical project take?', a: 'A standard website takes 2-4 weeks. Complex SaaS applications can take 2-4 months depending on scope. I provide a detailed timeline during our initial discussion.' },
            { q: 'What technologies do you use?', a: 'I specialize in Next.js, React, TypeScript, Tailwind CSS, and Node.js. For databases, I prefer PostgreSQL with Prisma ORM. I choose the best tech stack for each project based on requirements.' },
            { q: 'Do you provide post-launch support?', a: 'Yes. I offer maintenance and support packages to keep the application running smoothly — including updates, bug fixes, and performance monitoring.' },
            { q: 'How do we communicate during the project?', a: 'I provide weekly progress updates via email or Slack. We can schedule calls as needed. You\'ll have visibility into the project at every stage.' },
            { q: 'What is your pricing model?', a: 'I charge per project based on scope and complexity. After our initial discussion, I provide a detailed breakdown of deliverables and timeline.' },
          ].map((faq, i) => (
            <details key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 cursor-pointer">
              <summary className="list-none flex justify-between items-center font-bold text-lg">
                {faq.q}
                <span className="text-chai group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 rounded-[3rem] p-12 sm:p-16 text-center border border-amber-100 max-w-5xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Interested in Collaborating?</h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          I occasionally take on interesting projects. If you have an idea or a problem to solve, 
          I&apos;d be happy to discuss it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-chai text-white px-12 py-4 rounded-full font-bold hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 inline-flex items-center gap-2">
            Start a Conversation
          </Link>
          <Link href="/projects" className="px-12 py-4 border-2 border-chai text-chai rounded-full font-bold hover:bg-chai hover:text-white transition-all">
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
