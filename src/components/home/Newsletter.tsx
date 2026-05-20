'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-chai to-chai-dark rounded-[3rem] p-12 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-24 translate-y-24 pointer-events-none" />

          <div className="relative z-10">
            <HiOutlineMail className="text-white/30 text-6xl mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-amber-100/80 mb-8 max-w-md mx-auto">
              Get the latest articles, projects, and tech insights delivered to your inbox. No spam, just quality content.
            </p>

            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white font-medium">
                Thanks for subscribing! Check your inbox. ☕
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full py-4 px-6 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-chai px-8 py-4 rounded-full font-bold text-sm hover:bg-amber-50 transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  Subscribe <HiArrowRight />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
