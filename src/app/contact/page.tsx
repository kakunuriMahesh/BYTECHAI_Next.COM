'use client'

import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { contactInfo } from '@/lib/site'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="text-chai italic">Brew</span> Your Project?
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Have a question, feedback, or a project that needs technical expertise? 
            I&apos;m just a message away. Reach out and let&apos;s build something amazing.
          </p>

          <div className="bg-amber-50 rounded-3xl p-6 mb-8 border border-amber-100">
            <p className="text-sm text-gray-600">
              <strong className="text-chai">Response time:</strong> I typically respond within 24 hours. 
              For urgent inquiries, reach out via email directly.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a
                href={info.href}
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all group"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-chai text-2xl group-hover:bg-chai group-hover:text-white transition-colors">
                  {info.icon === 'HiOutlineMail' ? <HiOutlineMail /> :
                   info.icon === 'HiOutlinePhone' ? <HiOutlinePhone /> : <HiOutlineLocationMarker />}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{info.label}</p>
                  <p className="text-gray-900 font-bold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-gray-100">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">Find Me Online</h3>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, label: 'GitHub', href: 'https://github.com/kakunuriMahesh' },
                { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/maheshkakunuri' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-100 text-sm font-medium text-gray-600 hover:border-chai hover:text-chai transition-all shadow-sm"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="bg-white p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl -translate-y-16 translate-x-16" />

            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase ml-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase ml-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase ml-2">Project Brief</label>
              <textarea
                id="message"
                placeholder="Tell me about your project, goals, and timeline..."
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all min-h-[180px] resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-chai text-white w-full py-5 rounded-full font-medium hover:bg-chai-dark transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-amber-200 group"
            >
              Send Message <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[11px] text-gray-400 mt-6 tracking-wide italic">
              Your information is private and will never be shared.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
