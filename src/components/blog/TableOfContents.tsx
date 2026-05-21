'use client'

import { useState, useEffect } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLHeadingElement>('h2, h3')
    const items: TOCItem[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    elements.forEach((el) => {
      if (el.id) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-28">
      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">On This Page</h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors py-1 ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-chai font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
