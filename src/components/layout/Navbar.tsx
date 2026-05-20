'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaCode } from 'react-icons/fa'
import { useScroll } from '@/hooks/useScroll'
import { navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrolled } = useScroll()
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <FaCode className="text-chai text-xl group-hover:rotate-12 transition-transform" />
          <span className="font-heading text-xl font-bold tracking-tight">
            <span className="text-chai">Byte</span>Chai
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-chai relative group',
                pathname === link.path ? 'text-chai' : 'text-gray-700'
              )}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-0 h-0.5 bg-chai transition-all duration-300 group-hover:w-full',
                  pathname === link.path ? 'w-full' : ''
                )}
              />
            </Link>
          ))}
          <Link href="/contact" className="bg-chai text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200 hover:shadow-xl">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    pathname === link.path ? 'text-chai' : 'text-gray-700'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-chai text-white text-center py-3 rounded-full font-medium mt-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
