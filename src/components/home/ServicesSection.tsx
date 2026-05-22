'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/site'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { HiOutlineGlobeAlt, HiOutlineDeviceMobile, HiOutlineLightBulb, HiOutlineLightningBolt } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  HiOutlineGlobeAlt: <HiOutlineGlobeAlt />,
  HiOutlineDeviceMobile: <HiOutlineDeviceMobile />,
  HiOutlineLightBulb: <HiOutlineLightBulb />,
  HiOutlineLightningBolt: <HiOutlineLightningBolt />,
}

export function ServicesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Expertise"
          title="Areas of Focus"
          description="I occasionally collaborate on interesting projects or independent work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-chai text-3xl mb-6 group-hover:bg-chai group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon] || <HiOutlineLightBulb />}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {service.features.map((f) => (
                  <span key={f} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-chai font-medium hover:text-chai-dark transition-colors group"
          >
            Learn More About My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}
