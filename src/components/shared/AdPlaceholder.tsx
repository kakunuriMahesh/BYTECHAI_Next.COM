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
        'flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-2xl text-gray-300 text-[10px] font-medium uppercase tracking-widest select-none',
        {
          'w-full h-24': size === 'banner',
          'w-[300px] h-[250px]': size === 'rectangle',
          'w-[160px] h-[600px]': size === 'skyscraper',
        },
        className
      )}
    >
      Ad Space
    </div>
  )
}
