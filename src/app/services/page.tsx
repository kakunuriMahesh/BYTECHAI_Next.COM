'use client'

import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineDeviceMobile, HiOutlineChip, HiOutlineLightningBolt, HiCursorClick, HiChartBar, HiShieldCheck, HiOutlineSupport } from 'react-icons/hi'
import { SectionHeading } from '@/components/shared/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  HiOutlineGlobeAlt: <HiOutlineGlobeAlt />,
  HiOutlineDeviceMobile: <HiOutlineDeviceMobile />,
  HiOutlineChip: <HiOutlineChip />,
  HiOutlineLightningBolt: <HiOutlineLightningBolt />,
  HiCursorClick: <HiCursorClick />,
  HiChartBar: <HiChartBar />,
  HiShieldCheck: <HiShieldCheck />,
  HiOutlineSupport: <HiOutlineSupport />,
}

const mainServices = [
  {
    icon: 'HiOutlineGlobeAlt',
    title: 'Full-Stack Web Development',
    desc: 'Scalable, high-performance web applications using React, Next.js, and modern backend architectures.',
    features: ['Modern Frameworks', 'SEO & Performance', 'PWA Capabilities'],
  },
  {
    icon: 'HiOutlineDeviceMobile',
    title: 'Mobile App Creation',
    desc: 'Intuitive cross-platform mobile experiences for iOS and Android with native-like performance.',
    features: ['Flutter/React Native', 'App Store Optimization', 'Offline Support'],
  },
  {
    icon: 'HiOutlineChip',
    title: 'AI & Machine Learning',
    desc: 'Integrating smart AI solutions to automate decision-making and personalize user experiences.',
    features: ['Custom GPT Models', 'Data Analysis', 'Process Automation'],
  },
  {
    icon: 'HiOutlineLightningBolt',
    title: 'Business Automations',
    desc: 'Eliminate repetitive tasks with custom automation scripts and workflows.',
    features: ['API Integrations', 'Workflow Design', 'Cost Reduction'],
  },
]

const problemSolvingPoints = [
  { icon: 'HiCursorClick', title: 'User-Centric Design', desc: 'Every click is intentional, every transition purposeful.' },
  { icon: 'HiChartBar', title: 'Scalable Architecture', desc: 'Systems built to handle tomorrow\'s traffic today.' },
  { icon: 'HiShieldCheck', title: 'Solid Security', desc: 'Industry-standard security baked into the development lifecycle.' },
  { icon: 'HiOutlineSupport', title: 'Continuous Evolution', desc: 'We don\'t just launch; we iterate and improve.' },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Our <span className="text-chai">Digital Brews</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          We combine technical precision with creative strategy to solve real-world problems. Whether it&apos;s a startup or an established enterprise, we have the right blend for you.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-5xl text-chai mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span key={f} className="text-xs font-bold uppercase tracking-wider bg-amber-50 text-chai px-4 py-2 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white rounded-[4rem] py-24 px-8 max-w-7xl mx-auto mb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Expert Problem Solvers</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We don&apos;t just build features; we engineer solutions to your bottleneck problems.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {problemSolvingPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl text-chai mb-6 flex justify-center">{iconMap[p.icon]}</div>
              <h4 className="text-lg font-bold mb-3">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-32 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 italic">How We Cook</h2>
          <p className="text-gray-500">A transparent, stage-by-stage look at our development lifecycle.</p>
        </div>

        <div className="flex flex-col gap-12">
          {[
            { step: '01', title: 'Consultation & Discovery', desc: 'We dive deep into your business goals, target audience, and current challenges to brew a roadmap.' },
            { step: '02', title: 'Design & Prototyping', desc: 'Crafting visually stunning mockups and interactive prototypes that prioritize user experience.' },
            { step: '03', title: 'Agile Development', desc: 'Writing clean, efficient code in prioritized sprints with regular updates and feedback loops.' },
            { step: '04', title: 'Quality Assurance', desc: 'Rigorous testing for speed, security, and compatibility across all devices and browsers.' },
            { step: '05', title: 'Launch & Support', desc: 'Deploying to production and providing ongoing maintenance to ensure long-term stability.' },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-gray-100 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl font-black text-chai opacity-20">{item.step}</span>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed max-w-3xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 rounded-[3rem] p-12 text-center border border-amber-100 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Have a complex challenge?</h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">We thrive on technical puzzles. If you have a project that requires deep problem solving and professional architecture, we are ready to brew.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-chai text-white px-12 py-4 rounded-full font-bold hover:bg-chai-dark transition-all shadow-lg shadow-amber-200">Start a Project</a>
          <a href="/contact" className="px-12 py-4 border-2 border-chai text-chai rounded-full font-bold hover:bg-chai hover:text-white transition-all">Free Consultation</a>
        </div>
      </section>
    </div>
  )
}
