'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaCoffee, FaArrowRight } from 'react-icons/fa'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <FaCode className="text-8xl sm:text-9xl text-chai animate-float absolute top-16 left-8 sm:left-16" />
        <FaCoffee className="text-8xl sm:text-9xl text-chai animate-float absolute bottom-24 right-8 sm:right-20" style={{ animationDelay: '1.4s' }} />
      </div>

      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-3xl sm:text-5xl lg:text-6xl text-gray-600 font-normal">
          Hi, I&apos;m{' '}
        </span>
        <br />
        <span className="text-gradient">Mahesh Kakunuri</span>
        <br />
        <span className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-normal">
          Software Engineer &amp; Independent Developer
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I write about modern web development, system design, and scalable applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/blog"
          className="group bg-chai text-white px-10 py-4 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 hover:shadow-xl inline-flex items-center gap-2"
        >
          Read Blog
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
        </Link>
        <Link
          href="/projects"
          className="px-10 py-4 border-2 border-chai text-chai rounded-full font-medium hover:bg-chai hover:text-white transition-all inline-flex items-center gap-2"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  )
}
