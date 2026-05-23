'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/site'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TechStackIcon } from '@/components/home/TechStackIcon'

export function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Tech Stack"
          title="Technologies I Work With"
          description="Modern tools and frameworks I use to build production-grade applications."
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-chai text-xl group-hover:bg-chai group-hover:text-white transition-colors">
                <TechStackIcon name={tech.icon} className="text-xl" />
              </div>
              <span className="text-xs font-semibold text-gray-600 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
