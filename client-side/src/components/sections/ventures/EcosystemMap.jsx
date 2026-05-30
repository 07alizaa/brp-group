import { useState } from 'react'
import { ventures, sectors } from '../../../data/ventures'

function getSectorClasses(sectorId) {
  const map = {
    education: {
      accent: 'bg-education',
      border: 'border-education',
      text: 'text-education',
      soft: 'bg-education/10',
    },
    technology: {
      accent: 'bg-technology',
      border: 'border-technology',
      text: 'text-technology',
      soft: 'bg-technology/10',
    },
    finance: {
      accent: 'bg-finance',
      border: 'border-finance',
      text: 'text-finance',
      soft: 'bg-finance/10',
    },
    realestate: {
      accent: 'bg-realestate',
      border: 'border-realestate',
      text: 'text-realestate',
      soft: 'bg-realestate/10',
    },
    travel: {
      accent: 'bg-realestate',
      border: 'border-realestate',
      text: 'text-realestate',
      soft: 'bg-realestate/10',
    },
  }

  return map[sectorId] || {
    accent: 'bg-indigo',
    border: 'border-indigo',
    text: 'text-indigo',
    soft: 'bg-indigo/10',
  }
}

function getFilterSectorId(sectorId) {
  return sectorId === 'travel' ? 'realestate' : sectorId
}

export default function VenturesGrid({ onVentureSelect }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? ventures
      : ventures.filter(
          (venture) =>
            venture.sector === activeFilter ||
            (activeFilter === 'realestate' && venture.sector === 'travel')
        )

  return (
    <div className="w-full">
      {/* Filter tabs */}
      <div
        className="mb-12 flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Filter ventures by sector"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
          className={`rounded-full border px-5 py-2.5 font-body text-sm font-semibold transition duration-200 ${
            activeFilter === 'all'
              ? 'border-indigo bg-indigo text-white'
              : 'border-grey bg-white text-navy hover:border-indigo hover:bg-indigo/5 hover:text-indigo'
          }`}
        >
          All Ventures
        </button>

        {sectors.map((sector) => {
          const isActive = activeFilter === sector.id
          const style = getSectorClasses(sector.id)

          return (
            <button
              key={sector.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(sector.id)}
              className={`rounded-full border px-5 py-2.5 font-body text-sm font-semibold transition duration-200 ${
                isActive
                  ? `${style.accent} border-transparent text-white`
                  : 'border-grey bg-white text-navy hover:border-indigo hover:bg-indigo/5 hover:text-indigo'
              }`}
            >
              {sector.label}
            </button>
          )
        })}
      </div>

      {/* Venture cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((venture) => {
          const style = getSectorClasses(getFilterSectorId(venture.sector))

          return (
            <article
              key={venture.id}
              role="button"
              tabIndex={0}
              onClick={() => onVentureSelect(venture)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onVentureSelect(venture)
                }
              }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-grey bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-lg"
            >
              {/* Header area */}
              <div className="relative border-b border-grey bg-ivory p-6">
                <div className={`absolute left-0 top-0 h-full w-1.5 ${style.accent}`} />

                <div className="flex items-start justify-between gap-5 pl-2">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-grey bg-white p-4">
                    {venture.logoSrc ? (
                      <img
                        src={venture.logoSrc}
                        alt={`${venture.name} logo`}
                        className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className={`font-display text-xl font-semibold ${style.text}`}>
                        {venture.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`rounded-full px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] ${style.soft} ${style.text}`}
                    >
                      {venture.sectorLabel}
                    </span>

                    {venture.featured && (
                      <span className="rounded-full bg-gold/20 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-finance">
                        Flagship
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold leading-tight text-navy transition group-hover:text-indigo">
                  {venture.name}
                </h3>

                {venture.tagline && (
                  <p className="mt-3 font-body text-sm font-medium leading-6 text-indigo">
                    {venture.tagline}
                  </p>
                )}

                <p className="mt-4 line-clamp-4 font-body text-sm leading-7 text-text-muted">
                  {venture.description}
                </p>

                {venture.highlight && (
                  <div className="mt-6 rounded-2xl border border-grey bg-ivory p-4">
                    <p className="mb-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-text-faint">
                      Key Highlight
                    </p>
                    <p className="line-clamp-2 font-body text-sm font-semibold leading-6 text-navy">
                      {venture.highlight}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-grey pt-5">
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-text-faint">
                    View Details
                  </span>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo text-sm text-white transition duration-200 group-hover:bg-navy">
                    →
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 rounded-3xl bg-navy p-10 text-center md:p-14">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
          BRP Ecosystem
        </p>

        <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
          7 ventures. 4 sectors.
          <span className="block">One shared vision.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-7 text-white/65">
          Each venture contributes to a wider ecosystem built on trust,
          practical growth, and long-term purpose.
        </p>
      </div>
    </div>
  )
}