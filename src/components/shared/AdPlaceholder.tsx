'use client'

import { cn } from '@/lib/utils'

interface AdPlaceholderProps {
  className?: string
  size?: 'banner' | 'rectangle' | 'skyscraper'
}

export function AdPlaceholder({ className, size = 'banner' }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-2xl text-gray-400 text-xs font-medium',
        {
          'w-full h-24': size === 'banner',
          'w-[300px] h-[250px]': size === 'rectangle',
          'w-[160px] h-[600px]': size === 'skyscraper',
        },
        className
      )}
    >
      <div className="text-center">
        <div className="text-lg mb-1">📢</div>
        <div>Advertisement</div>
      </div>
    </div>
  )
}
