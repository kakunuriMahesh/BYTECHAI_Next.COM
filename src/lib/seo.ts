import type { Metadata } from 'next'
import { absoluteUrl } from './utils'

interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  publishedTime?: string
  tags?: string[]
  type?: 'website' | 'article'
  canonical?: string
}

export function constructMetadata({
  title,
  description,
  path = '',
  ogImage = '/images/og-default.png',
  publishedTime,
  tags,
  type = 'website',
  canonical,
}: SEOProps): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(ogImage)

  return {
    title,
    description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bytechai.vercel.app'),
    alternates: {
      canonical: canonical || url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ByteChai',
      type,
      ...(publishedTime && { publishedTime }),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@bytechai',
    },
    ...(tags && {
      keywords: tags,
    }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_ID || '',
    },
  }
}

export function constructJsonLd(schema: Record<string, unknown>) {
  return JSON.stringify(schema)
}
