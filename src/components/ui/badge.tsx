import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'info' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest',
        {
          'bg-chai-light text-chai': variant === 'default',
          'bg-green-50 text-green-700': variant === 'success',
          'bg-blue-50 text-blue-700': variant === 'info',
          'bg-amber-50 text-amber-700': variant === 'warning',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
