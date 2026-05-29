// Button component — three variants, one component.
// variant: 'primary' | 'ghost' | 'outline'
// size: 'sm' | 'md' | 'lg'
// Never style buttons with ad-hoc className in other files.

const variants = {
  primary: `
    bg-terra text-text-light font-body font-medium
    hover:bg-terra-light
    active:bg-terra-dark
    transition-colors duration-200
  `,
  ghost: `
    bg-transparent text-terra font-body font-medium
    border border-terra/40
    hover:border-terra hover:bg-terra/5
    transition-all duration-200
  `,
  outline: `
    bg-transparent text-text-primary font-body font-medium
    border border-border-warm
    hover:border-border-dark hover:bg-white/5
    transition-all duration-200
  `,
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`
        inline-flex items-center gap-2
        tracking-wide
        focus:outline-none focus-visible:ring-2 focus-visible:ring-terra/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}