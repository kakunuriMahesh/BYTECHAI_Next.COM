'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaCoffee, FaArrowRight, FaDownload } from 'react-icons/fa'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <FaCode className="text-8xl sm:text-9xl text-chai animate-float absolute top-16 left-8 sm:left-16" />
        <FaCoffee className="text-8xl sm:text-9xl text-chai animate-float absolute bottom-24 right-8 sm:right-20" style={{ animationDelay: '1.4s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-chai-light rounded-full text-chai text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-chai rounded-full animate-pulse" />
          Available for freelance projects
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I&apos;m{' '}
        <span className="text-gradient">Mahesh</span>
        <br />
        <span className="text-3xl sm:text-5xl lg:text-6xl text-gray-600 font-normal">
          Full-Stack Developer &amp; UI Architect
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I blend clean code with creative strategy to build human-centric digital experiences that scale.
        Specializing in Next.js, TypeScript, and modern web architecture.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/projects"
          className="group bg-chai text-white px-10 py-4 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 hover:shadow-xl inline-flex items-center gap-2"
        >
          View My Work
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
        </Link>
        <Link
          href="/contact"
          className="px-10 py-4 border-2 border-chai text-chai rounded-full font-medium hover:bg-chai hover:text-white transition-all inline-flex items-center gap-2"
        >
          Get in Touch
        </Link>
        <a
          href="/resume.pdf"
          download
          className="px-10 py-4 border border-gray-200 text-gray-600 rounded-full font-medium hover:border-chai hover:text-chai transition-all inline-flex items-center gap-2"
        >
          <FaDownload size={14} />
          Resume
        </a>
      </motion.div>

      <motion.div
        className="flex gap-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {['GitHub', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
          <a
            key={social}
            href="#"
            className="text-gray-400 hover:text-chai transition-colors text-sm font-medium"
          >
            {social}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
