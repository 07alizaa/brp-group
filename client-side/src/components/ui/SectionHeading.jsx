// SectionHeading — consistent heading style across every page.
// Every section uses this. Never write ad-hoc h2 tags.
//
// Props:
//   label:    small uppercase label above the heading (e.g. "Our Story")
//   title:    the main heading text
//   subtitle: optional paragraph below the heading
//   align:    'left' | 'center' (default: 'left')
//   light:    boolean — use on dark backgrounds (default: true)

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = true,
}) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>

      {/* Small label above heading */}
      {label && (
        <span className={`
          block font-body text-xs font-medium tracking-[0.2em] uppercase mb-4
          ${light ? 'text-terra' : 'text-terra-light'}
        `}>
          {label}
        </span>
      )}

      {/* Main heading with copper underline */}
      <h2 className={`
        terra-underline
        font-display font-light text-display-md
        ${light ? 'text-text-primary' : 'text-text-light'}
        ${isCenter ? 'mx-auto' : ''}
        text-balance
      `}>
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className={`
          mt-6 font-body text-base leading-relaxed max-w-2xl
          ${light ? 'text-text-muted' : 'text-text-light/75'}
          ${isCenter ? 'mx-auto' : ''}
        `}>
          {subtitle}
        </p>
      )}

    </div>
  )
}