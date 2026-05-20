import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'About',
  description: 'Learn about ByteChai, our mission, philosophy, and the team behind the brew.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <section className="max-w-4xl mx-auto text-center mb-32">
        <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
          Our Story
        </span>
        <h1 className="text-4xl sm:text-7xl font-bold mb-8">
          Driven by <span className="text-chai">Passion</span>, Built with <span className="italic">Obsession</span>.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At ByteChai, we don&apos;t just &ldquo;work&rdquo; on projects. We live them. We are a collective of digital craftsmen
          who believe that every pixel tells a story and every line of code should be a masterpiece. Our obsession with
          perfection is what fuels our daily brew.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: '[by]',
              subtitle: 'Built by Humans',
              desc: 'Empathy is our foundation. We build for people, not just for browsers. Our work is infused with human emotion and intuitive logic.',
              color: 'from-rose-500 to-pink-500',
            },
            {
              title: '<te>',
              subtitle: 'Technology Obsessed',
              desc: 'We are tech-agnostic but performance-driven. If there is a better way to build it, we will find it and master it.',
              color: 'from-amber-500 to-yellow-500',
            },
            {
              title: '{chai}',
              subtitle: 'Served Simply',
              desc: 'Complexity is easy; simplicity is hard. We distil complex problems into elegant, transparent, and approachable solutions.',
              color: 'from-sky-500 to-blue-500',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-[length:300%_300%] bg-gradient-to-r ${item.color} mb-6`}
              >
                {item.title}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.subtitle}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-900 rounded-[4rem] p-12 sm:p-24 text-white relative overflow-hidden max-w-7xl mx-auto mb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-800/20 skew-x-12 translate-x-32 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              We Code Like Our <br />
              Chai Depends On It.
            </h2>
            <p className="text-amber-100/80 text-lg mb-12 leading-relaxed">
              Bugs don&apos;t stand a chance against us. We&apos;ve spent countless nights refining architectures, optimizing assets,
              and debating the perfect border-radius. This isn&apos;t just a job; it&apos;s our playground.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Projects Brewing', value: '50+' },
                { label: 'Lines of Code', value: '1M+' },
                { label: 'Cups of Chai', value: '∞' },
                { label: 'Happy Clients', value: '100%' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-black mb-1">{s.value}</div>
                  <div className="text-amber-400 text-sm font-bold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <blockquote className="text-2xl italic font-serif leading-relaxed">
              &ldquo;Working with ByteChai is like having a team of obsessive geniuses in your corner. They didn&apos;t just
              meet the deadline; they destroyed it with quality.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-amber-400" />
              <span className="font-bold tracking-widest text-sm uppercase">Anonymous Client</span>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Want to see our madness in action?</h3>
        <p className="text-gray-500 mb-10">We are currently accepting new projects that challenge our boundaries.</p>
        <a href="/projects" className="inline-block bg-chai text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200">
          Explore Our Portfolio
        </a>
      </section>
    </div>
  )
}
