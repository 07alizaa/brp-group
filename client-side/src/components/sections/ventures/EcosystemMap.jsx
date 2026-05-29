import { useState } from 'react'
import { ventures, sectors } from '../../../data/ventures'

export default function EcosystemMap({ onVentureSelect }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? ventures
      : ventures.filter(
          (venture) =>
            venture.sector === activeFilter ||
            (activeFilter === 'realestate' && venture.sector === 'travel')
        )

  const getSectorBadgeClass = (sector) => {
    if (sector === 'education') return 'bg-education/10 text-education'
    if (sector === 'technology') return 'bg-technology/10 text-technology'
    if (sector === 'finance') return 'bg-finance/10 text-finance'
    if (sector === 'realestate' || sector === 'travel') {
      return 'bg-realestate/10 text-realestate'
    }
    return 'bg-indigo/10 text-indigo'
  }

  const getAccentClass = (sector) => {
    if (sector === 'education') return 'bg-education'
    if (sector === 'technology') return 'bg-technology'
    if (sector === 'finance') return 'bg-finance'
    if (sector === 'realestate' || sector === 'travel') return 'bg-realestate'
    return 'bg-indigo'
  }

  return (
    <div className="w-full py-12">
      {/* Filter Tabs */}
      <div className="mb-14 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`rounded-full border px-5 py-3 font-body text-sm font-semibold shadow-sm transition-all duration-300 ${
            activeFilter === 'all'
              ? 'border-indigo bg-indigo text-white shadow-indigo/20'
              : 'border-grey bg-white text-charcoal hover:border-indigo hover:text-indigo'
          }`}
        >
          All Ventures
        </button>

        {sectors.map((sector) => (
          <button
            key={sector.id}
            type="button"
            onClick={() => setActiveFilter(sector.id)}
            className={`rounded-full border px-5 py-3 font-body text-sm font-semibold shadow-sm transition-all duration-300 ${
              activeFilter === sector.id
                ? `${getAccentClass(sector.id)} border-transparent text-white`
                : 'border-grey bg-white text-charcoal hover:border-indigo hover:text-indigo'
            }`}
          >
            {sector.label}
          </button>
        ))}
      </div>

      {/* Ventures Grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((venture) => (
          <article
            key={venture.id}
            role="button"
            tabIndex={0}
            onClick={() => onVentureSelect(venture)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onVentureSelect(venture)
            }}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-grey bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo/30 hover:shadow-2xl hover:shadow-navy/10"
          >
            {/* Top accent */}
            <div className={`h-1.5 w-full ${getAccentClass(venture.sector)}`} />

            <div className="p-7">
              {/* Logo and sector */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-grey bg-ivory p-5 shadow-inner">
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

                <span
                  className={`rounded-full px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.16em] ${getSectorBadgeClass(
                    venture.sector
                  )}`}
                >
                  {venture.sectorLabel}
                </span>
              </div>

              {/* Content */}
              {venture.featured && (
                <span className="mt-6 inline-flex rounded-full bg-gold/20 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-finance">
                  Flagship Venture
                </span>
              )}

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-navy transition-colors duration-300 group-hover:text-indigo">
                {venture.name}
              </h3>

              {venture.tagline && (
                <p className="mt-3 font-body text-sm font-semibold italic leading-6 text-indigo">
                  {venture.tagline}
                </p>
              )}

              <p className="mt-4 line-clamp-4 font-body text-sm leading-7 text-text-muted">
                {venture.description}
              </p>

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

                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo text-white shadow-md shadow-indigo/20 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-navy">
                  →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Ecosystem CTA */}
      <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl bg-navy p-10 text-center text-white shadow-2xl shadow-navy/20 md:p-14">
        <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
          BRP Ecosystem
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
          7 ventures across 4 sectors, connected by one shared vision.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-white/70">
          Built on a foundation of innovation, trust, and purpose, BRP Group’s
          ventures work across education, technology, finance, real estate, and
          travel.
        </p>
      </div>
    </div>
  )
}