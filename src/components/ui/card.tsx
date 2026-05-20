import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-[2rem] border border-gray-100 shadow-xl',
        hover && 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
