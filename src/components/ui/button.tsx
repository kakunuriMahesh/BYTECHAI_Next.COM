'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-chai/20',
          {
            'bg-chai text-white hover:bg-chai-dark shadow-lg shadow-amber-200 hover:shadow-xl hover:-translate-y-0.5': variant === 'primary',
            'bg-white text-foreground border border-gray-200 hover:border-chai hover:text-chai shadow-sm': variant === 'secondary',
            'bg-transparent text-chai hover:bg-chai/5': variant === 'ghost',
            'border-2 border-chai text-chai hover:bg-chai hover:text-white': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-10 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
