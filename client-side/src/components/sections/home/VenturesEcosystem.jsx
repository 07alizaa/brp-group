import { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { ventures, sectors } from '../../../data/ventures'
import SectionHeading from '../../ui/SectionHeading'
import VentureCard from '../../ui/VentureCard'
import VentureDrawer from '../../ui/VentureDrawer'

export default function VenturesEcosystem() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVenture, setSelectedVenture] = useState(null)
  const sectionRef = useScrollReveal()

  const filters = [
    { id: 'all', label: 'All Ventures' },
    ...sectors.map(s => ({ id: s.id, label: s.label })),
  ]

  const filtered = activeFilter === 'all'
    ? ventures
    : ventures.filter(v => v.sector === activeFilter ||
        (activeFilter === 'realestate' && v.sector === 'travel'))

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-ivory relative overflow-hidden"
      aria-label="Our Ventures"
    >

      {/* Watermark */}
      <span className="watermark-text absolute -top-4 right-0 select-none"
            aria-hidden="true">
        Ventures
      </span>

      <div className="container-wide relative z-10">

        {/* Heading */}
        <div className="reveal">
          <SectionHeading
            label="Our Portfolio"
            title="A diversified ecosystem of businesses."
            subtitle="Seven ventures across four sectors — each built to create lasting value for Nepal and beyond."
          />
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-12 reveal reveal-delay-2"
          role="tablist"
          aria-label="Filter ventures by sector"
        >
          {filters.map((filter) => {
            const sector = sectors.find(s => s.id === filter.id)
            const isActive = activeFilter === filter.id

            return (
              <button
                key={filter.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  font-body text-xs font-medium tracking-wider uppercase
                  px-4 py-2 rounded-full border
                  transition-all duration-200
                  ${isActive
                    ? 'bg-terra/10 text-terra border-terra/40'
                    : 'bg-transparent text-text-muted border-border-warm hover:border-border-dark'
                  }
                `}
                style={isActive && sector
                  ? { backgroundColor: `${sector.color}15`, color: sector.color, borderColor: `${sector.color}40` }
                  : {}
                }
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Venture cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((venture, i) => (
            <div
              key={venture.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <VentureCard
                venture={venture}
                onClick={setSelectedVenture}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Venture detail drawer */}
      <VentureDrawer
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />

    </section>
  )
}