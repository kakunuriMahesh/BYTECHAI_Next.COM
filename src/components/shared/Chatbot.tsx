'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChatAlt2, HiX, HiPaperAirplane, HiSparkles } from 'react-icons/hi'

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the ByteChai assistant. How can I help you?", sender: 'bot' },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { text: input, sender: 'user' }
    setMessages((prev) => [...prev, userMsg])

    setTimeout(() => {
      let response = "That sounds interesting! Could you tell me more?"
      const msg = input.toLowerCase()
      if (msg.includes('website')) response = "I build high-performance websites! Check out my projects page."
      else if (msg.includes('price') || msg.includes('cost')) response = "Pricing depends on project scope. Let's chat and find the right plan for you!"
      else if (msg.includes('contact') || msg.includes('email')) response = "You can reach me at maheshkakunuri3@gmail.com"

      setMessages((prev) => [...prev, { text: response, sender: 'bot' }])
    }, 600)

    setInput('')
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="chat-button"
            onClick={() => setIsOpen(true)}
            className="bg-chai text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <HiChatAlt2 size={28} />
          </motion.button>
        ) : (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white w-[350px] sm:w-[400px] h-[520px] rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="p-6 bg-gradient-to-r from-chai to-chai-dark text-white flex justify-between items-center relative overflow-hidden">
              <HiSparkles className="absolute top-0 right-0 text-white/10 text-9xl -translate-y-12 translate-x-12" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                  <HiChatAlt2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">ByteChai Support</h3>
                  <p className="text-[10px] text-amber-100 font-medium opacity-80 uppercase tracking-widest">Always Brewing</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
              >
                <HiX size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-chai text-white rounded-br-none'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-5 pr-14 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 p-2.5 bg-chai text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-200"
                >
                  <HiPaperAirplane className="rotate-90" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
