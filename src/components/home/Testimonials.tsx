'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/site'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { FaStar } from 'react-icons/fa'

export function Testimonials() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          description="Feedback from clients and collaborators."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} size={16} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-chai/10 rounded-full flex items-center justify-center text-chai font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
