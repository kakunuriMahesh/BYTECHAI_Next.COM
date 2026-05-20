'use client'

import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { serialize } from 'next-mdx-remote/serialize'
import { useState, useEffect } from 'react'

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 scroll-mt-24" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-chai pl-6 italic text-gray-600 mb-6 bg-amber-50/50 py-4 pr-4 rounded-r-2xl" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-chai hover:text-chai-dark underline underline-offset-2" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#1e1e2e] text-[#cdd6f4] rounded-2xl p-6 mb-6 overflow-x-auto text-sm leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInline = (props as { className?: string }).className !== 'language-'
    return isInline ? (
      <code className="bg-chai-light text-chai px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    ) : (
      <code {...props} />
    )
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-2xl w-full mb-6" loading="lazy" {...props} />
  ),
  hr: () => <hr className="my-12 border-gray-100" />,
}

export function BlogMDXContent({ source }: { source: string }) {
  const [mdxSource, setMdxSource] = useState<Awaited<ReturnType<typeof serialize>> | null>(null)

  useEffect(() => {
    serialize(source, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          rehypeHighlight,
        ],
      },
    }).then(setMdxSource)
  }, [source])

  if (!mdxSource) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="animate-spin w-8 h-8 border-2 border-chai border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
