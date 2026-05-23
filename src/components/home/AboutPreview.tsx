'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function AboutPreview() {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="A software engineer who writes, builds, and shares what he learns."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Mahesh Kakunuri</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I&apos;m a Software Engineer based in <strong>Hyderabad, India</strong>, passionate about 
              building scalable systems and sharing knowledge through writing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I specialize in React, TypeScript, and modern web architecture. I believe in 
              clean code, thoughtful design, and continuous learning. ByteChai is where I 
              document what I build and what I learn.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-chai font-medium hover:text-chai-dark transition-colors group"
              >
                More About Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
              </Link>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/kakunuriMahesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/maheshkakunuri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chai transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:maheshkakunuri3@gmail.com" className="text-gray-400 hover:text-chai transition-colors" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <FaMapMarkerAlt size={14} /> Hyderabad, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100"
          >
            <h4 className="font-bold text-lg mb-4 text-chai">Engineering Philosophy</h4>
            <ul className="space-y-4">
              {[
                { title: 'Write, then code', desc: 'I believe clear writing leads to clear thinking. Most of my projects start with documentation.' },
                { title: 'Build for scale', desc: 'Not just for today. Every system should handle 10x growth without a rewrite.' },
                { title: 'Share what you know', desc: 'Knowledge is wasted if kept private. I write about everything I build.' },
                { title: 'Simple over clever', desc: 'The best code is the code you can read six months later and understand immediately.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-chai mt-1 text-lg">✦</span>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}