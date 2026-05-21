import type { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/seo'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = constructMetadata({
  title: 'About',
  description: 'Learn about Mahesh Kakunuri and ByteChai — a full-stack developer and UI architect based in Hyderabad, India.',
  path: '/about',
})

const stats = [
  { label: 'Projects Built', value: '50+' },
  { label: 'Technologies Mastered', value: '30+' },
  { label: 'Articles Published', value: '25+' },
  { label: 'Years Experience', value: '5+' },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      {/* Hero Section — Who I Am */}
      <section className="max-w-5xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
              About Me
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-chai">Mahesh Kakunuri</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              A full-stack developer and UI architect based in <strong>Hyderabad, India</strong>. 
              I specialize in building high-performance web applications with Next.js, TypeScript, 
              and modern design systems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              ByteChai is my digital workspace where I brew clean code, write about web development, 
              and help businesses transform their digital presence. I&apos;ve worked with startups 
              and established companies to build scalable SaaS platforms, e-commerce solutions, 
              and AI-powered applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="bg-chai text-white px-8 py-3 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200">
                View My Work
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-chai text-chai rounded-full font-medium hover:bg-chai hover:text-white transition-all">
                Get in Touch
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/maheshkakunuri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
              <a href="https://linkedin.com/in/maheshkakunuri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:maheshkakunuri3@gmail.com" className="text-gray-400 hover:text-chai transition-colors" aria-label="Email">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-chai to-chai-dark rounded-[3rem] p-1">
              <div className="bg-white rounded-[2.8rem] p-8 h-full">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: '🎯', label: 'Focus', value: 'Web & SaaS' },
                    { icon: '⚡', label: 'Stack', value: 'Next.js + TS' },
                    { icon: '📍', label: 'Location', value: 'Hyderabad, IN' },
                    { icon: '📧', label: 'Email', value: 'maheshkakunuri3@gmail.com' },
                    { icon: '💼', label: 'Status', value: 'Available' },
                    { icon: '🎓', label: 'Expertise', value: 'Full-Stack' },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-gray-900">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-chai mb-2">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ByteChai Philosophy */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="text-center mb-16">
          <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
            The Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">What ByteChai Stands For</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">ByteChai is more than a portfolio — it&apos;s a mindset. Every project is brewed with care, precision, and a human touch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: '[by]', subtitle: 'Built by Humans', desc: 'Empathy is our foundation. We build for people, not just for browsers. Every pixel tells a story and every interaction feels intuitive.', color: 'from-rose-500 to-pink-500' },
            { title: '<te>', subtitle: 'Technology Obsessed', desc: 'We are performance-driven and technology-agnostic. If there is a better way to build it, we will find it and master it.', color: 'from-amber-500 to-yellow-500' },
            { title: '{chai}', subtitle: 'Served Simply', desc: 'Complexity is easy; simplicity is hard. We distil complex problems into elegant, transparent, and approachable solutions.', color: 'from-sky-500 to-blue-500' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-[length:300%_300%] bg-gradient-to-r ${item.color} mb-6`}>
                {item.title}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.subtitle}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-amber-900 rounded-[4rem] p-12 sm:p-24 text-white relative overflow-hidden max-w-7xl mx-auto mb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-800/20 skew-x-12 translate-x-32 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              Why Work With Me?
            </h2>
            <ul className="space-y-6">
              {[
                { title: 'Proven Track Record', desc: '50+ successful projects delivered for startups and businesses across India and globally.' },
                { title: 'Modern Tech Stack', desc: 'Specializing in Next.js, TypeScript, Tailwind CSS, and cloud-native architecture.' },
                { title: 'Client-First Approach', desc: 'Transparent communication, regular updates, and a focus on your business goals.' },
                { title: 'End-to-End Delivery', desc: 'From concept and design to development, deployment, and ongoing support.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="text-chai text-2xl mt-1">✦</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-amber-100/70 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <blockquote className="text-2xl italic font-serif leading-relaxed">
              &ldquo;Working with Mahesh was a game-changer for our startup. He didn&apos;t just build what we asked for — he improved the architecture, optimized performance, and delivered ahead of schedule. Our traffic grew 300% after the redesign.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-amber-400" />
              <span className="font-bold tracking-widest text-sm uppercase">Verified Client — SaaS Startup, Bangalore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Have a Project in Mind?</h3>
        <p className="text-gray-500 mb-10 text-lg">I&apos;m currently accepting new projects. Let&apos;s brew something great together.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-chai text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200">
            Start a Project
          </Link>
          <a href="mailto:maheshkakunuri3@gmail.com" className="px-12 py-4 border-2 border-chai text-chai rounded-full text-lg font-medium hover:bg-chai hover:text-white transition-all">
            Email Me Directly
          </a>
        </div>
      </section>
    </div>
  )
}
