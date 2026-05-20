interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ label, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}
