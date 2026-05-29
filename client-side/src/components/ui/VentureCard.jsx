// VentureCard — single venture in the ecosystem grid.
// onClick fires when user wants to see venture detail (opens drawer).
// The left border color comes from venture.color — set in data file.

export default function VentureCard({ venture, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(venture)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(venture)}
      className={`
        venture-card group
        ${venture.featured ? 'ring-1 ring-technology/30' : ''}
      `}
      style={{ borderLeftColor: venture.color }}
      aria-label={`Learn more about ${venture.name}`}
    >

      {/* Featured badge — Assabet only */}
      {venture.featured && (
        <div className="mb-3">
          <span className="bg-technology/10 text-technology text-xs font-body
                           font-medium tracking-wider uppercase px-2 py-1 rounded-md">
            Flagship
          </span>
        </div>
      )}

      {/* Sector badge */}
      <div className="mb-3">
        <span
          className="sector-badge"
          style={{
            backgroundColor: `${venture.color}15`,
            color: venture.color,
          }}
        >
          {venture.sectorLabel}
        </span>
      </div>

      {/* Venture name */}
      <h3 className="font-display font-light text-display-sm text-text-primary
                     leading-tight mb-2 group-hover:text-terra transition-colors duration-200">
        {venture.name}
      </h3>

      {/* Tagline */}
      <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
        {venture.tagline}
      </p>

      {/* Highlight line */}
      <p className="font-body text-xs text-text-muted/60 tracking-wide">
        {venture.highlight}
      </p>

      {/* Arrow — reveals on hover */}
      <div className="mt-4 flex items-center gap-1 text-terra text-xs font-medium
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <span>→</span>
      </div>

    </div>
  )
}