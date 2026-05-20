import Link from 'next/link'
import { FaCode } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl sm:text-9xl font-black text-chai opacity-20 mb-6">404</div>
      <FaCode className="text-chai text-6xl mb-6" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-500 text-lg mb-10 max-w-md">
        Oops! This page seems to have been spilled. Let&apos;s get you back to something that&apos;s brewing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-chai text-white px-10 py-4 rounded-full font-medium hover:bg-chai-dark transition-all shadow-lg shadow-amber-200"
        >
          Back to Homepage
        </Link>
        <Link
          href="/blog"
          className="px-10 py-4 border-2 border-gray-200 text-gray-600 rounded-full font-medium hover:border-chai hover:text-chai transition-all"
        >
          Read the Blog
        </Link>
      </div>
    </div>
  )
}
