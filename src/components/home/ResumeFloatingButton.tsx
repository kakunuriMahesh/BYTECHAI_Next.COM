'use client'

import { useCallback } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function ResumeFloatingButton() {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mahesh_Kakunuri_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2.5 bg-chai text-white px-5 py-3 rounded-full shadow-lg shadow-amber-200 hover:bg-chai-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      title="Download Resume"
    >
      <FaFileDownload className="group-hover:animate-bounce" size={16} />
      <span className="text-sm font-medium hidden sm:inline">Resume</span>
    </motion.button>
  )
}
