import type { Metadata } from 'next'
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/shared/Chatbot'
import { siteConfig } from '@/lib/site'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Developer Portfolio & Technical Blog`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/images/bytechai-logo.png',
    shortcut: '/images/bytechai-logo.png',
    apple: '/images/bytechai-logo.png',
  },
  openGraph: {
    title: `${siteConfig.name} - Developer Portfolio & Technical Blog`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Developer Portfolio & Technical Blog`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '7540dfadf63c836a',
  },
  other: {
    'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_ID || '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-gradient-chai text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
