import type { Metadata } from 'next'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCode, FaBullseye, FaBolt, FaBriefcase, FaUserTie } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'About',
  description: 'Learn about Mahesh Kakunuri — a software engineer based in Hyderabad, India, writing about modern web development, system design, and scalable applications.',
  path: '/about',
})

const aboutStats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Technologies Used', value: '30+' },
  { label: 'Articles Published', value: '10+' },
  { label: 'Open For', value: 'Collaboration' },
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
              I&apos;m a Software Engineer based in <strong>Hyderabad, India</strong>, passionate about 
              building scalable systems and sharing knowledge through writing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I specialize in <strong>React, TypeScript, and modern web architecture</strong>. 
              I believe in clean code, thoughtful design, and continuous learning. ByteChai is 
              my digital workspace where I document what I build and what I learn.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Over the past 3+ years, I&apos;ve worked on projects ranging from SaaS platforms 
              and e-commerce solutions to mobile applications and AI-powered tools. I write 
              about the challenges I solve and the patterns I discover along the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="bg-chai text-white px-8 py-3 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 inline-flex items-center gap-2">
                Read My Blog <FaArrowRight size={12} />
              </Link>
              <Link href="/projects" className="px-8 py-3 border-2 border-chai text-chai rounded-full font-medium hover:bg-chai hover:text-white transition-all">
                View Projects
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/kakunuriMahesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/maheshkakunuri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="LinkedIn">
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
                    { icon: <FaBullseye />, label: 'Focus', value: 'Web & SaaS' },
                    { icon: <FaBolt />, label: 'Stack', value: 'React + TS' },
                    { icon: <HiOutlineLocationMarker />, label: 'Location', value: 'Hyderabad, IN' },
                    { icon: <HiOutlineMail />, label: 'Email', value: 'maheshkakunuri3@gmail.com' },
                    { icon: <FaBriefcase />, label: 'Status', value: 'Working' },
                    { icon: <FaUserTie />, label: 'Role', value: 'Software Engineer' },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3">
                      <div className="text-2xl mb-2 flex justify-center text-chai">{item.icon}</div>
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
          {aboutStats.map((stat) => (
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
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">How I Approach Software</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">ByteChai represents a mindset: build with care, write with clarity, and share what you learn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: '[by]', subtitle: 'Built by Humans', desc: 'Empathy is the foundation. I build for people, not just for browsers. Every interaction should feel intuitive and intentional.', color: 'from-rose-500 to-pink-500' },
            { title: '<te>', subtitle: 'Technology Obsessed', desc: 'Performance-driven and technology-agnostic. If there is a better way to build it, I will find it, learn it, and master it.', color: 'from-amber-500 to-yellow-500' },
            { title: '{chai}', subtitle: 'Shared Simply', desc: 'Complexity is easy; simplicity is hard. I distil complex problems into elegant solutions — and then write about how they work.', color: 'from-sky-500 to-blue-500' },
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

      {/* Writing & Learning */}
      <section className="max-w-5xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
              Writing
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Sharing What I Learn</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I write technical articles about web development, architecture decisions, and the 
              tools I use. My goal is to document solutions so others can learn from both my 
              successes and mistakes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Topics include React, TypeScript, system design, performance optimization, 
              and building production-grade applications.
            </p>
            <Link href="/blog" className="bg-chai text-white px-8 py-3 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 inline-flex items-center gap-2">
              Browse Articles <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
            <h3 className="font-bold text-lg mb-4 text-chai">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker', 'AWS', 'Python', 'Redis', 'GraphQL', 'Flutter', 'TensorFlow'].map((tech) => (
                <span key={tech} className="text-xs font-bold bg-white text-chai px-3 py-1.5 rounded-full border border-amber-100">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              Always learning. Currently exploring system design patterns and distributed systems.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto mb-32">
        <div className="bg-amber-900 rounded-[4rem] p-12 sm:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-800/20 skew-x-12 translate-x-32 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Client Feedback</span>
            </div>
            <blockquote className="text-2xl italic font-serif leading-relaxed mb-8">
              &ldquo;Working with Mahesh was a great experience. He improved our architecture, 
              optimized performance, and delivered ahead of schedule. Our traffic grew significantly 
              after the redesign.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-widest text-sm uppercase">— Verified Client, SaaS Startup</span>
            </div>
            <p className="text-amber-300/60 text-xs mt-6">Feedback collected from independent client work</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Have a Question or Idea?</h3>
        <p className="text-gray-500 mb-10 text-lg">I&apos;m always open to interesting discussions and collaborations.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-chai text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200">
            Get in Touch
          </Link>
          <a href="mailto:maheshkakunuri3@gmail.com" className="px-12 py-4 border-2 border-chai text-chai rounded-full text-lg font-medium hover:bg-chai hover:text-white transition-all">
            Email Me
          </a>
        </div>
      </section>
    </div>
  )
}
