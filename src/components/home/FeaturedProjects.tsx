'use client'

import { motion } from 'framer-motion'
import { featuredProjects } from '@/lib/site'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { FaGithub, FaExternalLinkAlt, FaCube } from 'react-icons/fa'

export function FeaturedProjects() {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A selection of projects I've built with modern technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-chai text-2xl group-hover:bg-chai group-hover:text-white transition-colors">
                  <FaCube />
                </div>
                <Badge
                  variant={
                    project.status === 'Merged' ? 'success' :
                    project.status === 'Active' ? 'info' : 'warning'
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-chai transition-colors">
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-chai transition-colors">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
