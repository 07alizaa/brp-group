// VentureCard — premium venture card for BRP ecosystem grid.
// Opens VentureDrawer when clicked.

export default function VentureCard({ venture, onClick }) {
  const handleOpen = () => {
    if (onClick) onClick(venture)
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleOpen()
      }}
      aria-label={`Learn more about ${venture.name}`}
      className="
        group relative cursor-pointer overflow-hidden rounded-3xl
        border border-grey bg-white shadow-sm
        transition-all duration-500 ease-smooth
        hover:-translate-y-2 hover:border-indigo/30
        hover:shadow-2xl hover:shadow-navy/10
      "
    >
      {/* Top brand accent */}
      <div className="h-1.5 w-full bg-indigo" />

      {/* Soft hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Logo + Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-grey bg-ivory p-4 shadow-inner">
            {venture.logoSrc ? (
              <img
                src={venture.logoSrc}
                alt={venture.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <span className="font-display text-2xl font-semibold text-indigo">
                {venture.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          <span className="rounded-full bg-indigo/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-indigo">
            {venture.sectorLabel || venture.sector}
          </span>
        </div>

        {/* Content */}
        <div className="mt-7 flex-1">
          {venture.featured && (
            <span className="mb-3 inline-flex rounded-full bg-gold/20 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-finance">
              Flagship Venture
            </span>
          )}

          <h3 className="font-display text-2xl font-semibold leading-tight text-navy transition-colors duration-300 group-hover:text-indigo">
            {venture.name}
          </h3>

          {venture.tagline && (
            <p className="mt-3 font-body text-sm font-semibold italic leading-6 text-indigo">
              {venture.tagline}
            </p>
          )}

          <p className="mt-4 line-clamp-3 font-body text-sm leading-7 text-charcoal/65">
            {venture.description}
          </p>
        </div>

        {/* Highlight */}
        {venture.highlight && (
          <div className="mt-6 rounded-2xl bg-ivory p-4">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-text-faint">
              Key Highlight
            </p>
            <p className="mt-1 line-clamp-2 font-body text-sm font-semibold text-navy">
              {venture.highlight}
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-grey pt-5">
          <span className="font-body text-xs text-text-faint">
            View details
          </span>

          <span
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-full
              bg-indigo text-white shadow-md shadow-indigo/20
              transition-all duration-300
              group-hover:translate-x-1 group-hover:bg-navy
            "
          >
            →
          </span>
        </div>
      </div>
    </article>
  )
}