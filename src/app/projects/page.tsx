'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCube, FaTimes, FaCode, FaCommentAlt, FaCheckCircle } from 'react-icons/fa'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { featuredProjects } from '@/lib/site'
import type { Project } from '@/types'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const stats = Array.from({ length: 52 }, () => Math.floor(Math.random() * 4))

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <section className="mb-24">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <SectionHeading
              label="Portfolio"
              title="Built to Scale"
              description="Explore our digital repository of successfully brewed solutions."
              align="left"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full lg:w-auto flex-shrink-0">
            <div className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Commit Activity</div>
            <div className="flex flex-wrap gap-1 max-w-[200px]">
              {stats.map((val, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm transition-colors ${
                    val === 0 ? 'bg-gray-100' :
                    val === 1 ? 'bg-amber-100' :
                    val === 2 ? 'bg-amber-300' : 'bg-chai'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-[10px] items-center text-gray-400 font-bold">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-100 rounded-sm" />
                <div className="w-2 h-2 bg-amber-100 rounded-sm" />
                <div className="w-2 h-2 bg-amber-300 rounded-sm" />
                <div className="w-2 h-2 bg-chai rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
              whileHover={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-chai text-2xl group-hover:bg-chai group-hover:text-white transition-colors">
                  <FaCube />
                </div>
                <Badge
                  variant={
                    proj.status === 'Merged' ? 'success' :
                    proj.status === 'Active' ? 'info' : 'warning'
                  }
                >
                  {proj.status}
                </Badge>
              </div>
              <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {proj.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto relative bg-gray-100">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 p-3 bg-white/90 rounded-full text-gray-900 lg:hidden shadow-lg"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="flex-1 p-8 sm:p-12 overflow-y-auto">
                <div className="hidden lg:flex justify-end mb-8">
                  <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <FaTimes size={24} />
                  </button>
                </div>
                <span className="text-chai font-bold tracking-widest uppercase text-xs mb-2 block">{selectedProject.type}</span>
                <h3 className="text-3xl sm:text-5xl font-bold mb-6">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="bg-amber-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-3 flex items-center gap-2"><FaCode className="text-chai" /> Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="text-xs font-bold bg-white text-chai px-3 py-1 rounded-full border border-amber-100">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-3 flex items-center gap-2"><FaCommentAlt className="text-chai" /> Client Note</h5>
                    <p className="text-xs italic text-gray-500">&ldquo;{selectedProject.clientFeedback}&rdquo;</p>
                  </div>
                </div>

                {selectedProject.challenge && (
                  <div className="mb-8">
                    <h5 className="font-bold mb-3 text-lg">The Challenge</h5>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="mb-8">
                    <h5 className="font-bold mb-3 text-lg">The Solution</h5>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.results && selectedProject.results.length > 0 && (
                  <div className="mb-10 bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h5 className="font-bold mb-3 text-green-800">Results</h5>
                    <ul className="space-y-2">
                      {selectedProject.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                          <FaCheckCircle className="mt-0.5 flex-shrink-0" size={14} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4">
                  <a
                    href={selectedProject.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-chai text-white py-4 rounded-full font-medium hover:bg-chai-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-200"
                  >
                    <FaExternalLinkAlt /> Live Case Study
                  </a>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 border border-gray-200 rounded-full font-medium hover:border-chai hover:text-chai transition-all flex items-center gap-2"
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mt-24 py-24 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-[0.3em] text-gray-300">Milestone Timeline</h2>
        </div>
        <div className="relative max-w-4xl mx-auto pl-8 border-l border-amber-100">
          {[
            { date: 'Dec 2025', title: 'Enterprise Core Merged', desc: 'Successfully deployed scalable architecture for a Fortune 500 client fintech project.' },
            { date: 'Oct 2025', title: 'AI Integration Mastered', desc: 'Released proprietary LLM integration layer for real-time customer behavioral analysis.' },
            { date: 'Jun 2025', title: 'ByteChai v2.0 Launch', desc: 'Team expanded to 10 digital craftsmen, focusing exclusively on full-service brews.' },
          ].map((m, i) => (
            <motion.div
              key={i}
              className="mb-16 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-chai rounded-full" />
              <span className="text-xs font-black text-chai uppercase tracking-widest">{m.date}</span>
              <h4 className="text-2xl font-bold mt-2 mb-3">{m.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-2xl">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
