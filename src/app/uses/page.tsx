import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Uses',
  description: 'The tools, hardware, and software I use for development and design.',
  path: '/uses',
})

export default function UsesPage() {
  const categories = [
    {
      title: 'Hardware',
      items: [
        { name: 'Laptop', desc: 'MacBook Pro 16" M3 Pro' },
        { name: 'Monitor', desc: 'Dell U2723QE 4K USB-C Hub Monitor' },
        { name: 'Keyboard', desc: 'Keychron Q1 Mechanical Keyboard' },
        { name: 'Mouse', desc: 'Logitech MX Master 3S' },
        { name: 'Headphones', desc: 'Sony WH-1000XM5' },
      ],
    },
    {
      title: 'Editor & Terminal',
      items: [
        { name: 'Editor', desc: 'VS Code with One Dark Pro theme' },
        { name: 'Font', desc: 'JetBrains Mono Nerd Font' },
        { name: 'Terminal', desc: 'iTerm2 with Oh My Zsh' },
        { name: 'Shell', desc: 'Zsh with powerlevel10k' },
      ],
    },
    {
      title: 'Design & Productivity',
      items: [
        { name: 'Design', desc: 'Figma for UI/UX design and prototyping' },
        { name: 'Notes', desc: 'Notion for documentation and project management' },
        { name: 'API Testing', desc: 'Postman and Bruno for API development' },
        { name: 'Git Client', desc: 'GitHub CLI and GitLens' },
      ],
    },
    {
      title: 'Development Stack',
      items: [
        { name: 'Framework', desc: 'Next.js 15 with App Router' },
        { name: 'Styling', desc: 'Tailwind CSS v4 + shadcn/ui' },
        { name: 'Animation', desc: 'Framer Motion for animations' },
        { name: 'Database', desc: 'PostgreSQL with Prisma ORM' },
        { name: 'Deployment', desc: 'Vercel for hosting and CI/CD' },
      ],
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
            My Setup
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Uses</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The tools, hardware, and software I use daily for development, design, and productivity.
            Inspired by <a href="https://uses.tech" className="text-chai underline underline-offset-2">uses.tech</a>.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-100">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
