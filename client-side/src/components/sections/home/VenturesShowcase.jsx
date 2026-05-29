import { useState } from 'react'
import { ventures } from '../../../data/ventures'
import SectionHeading from '../../ui/SectionHeading'

export default function VenturesShowcase() {
  const [selectedVenture, setSelectedVenture] = useState(null)

  const sectorsList = [
    {
      id: 'education',
      title: 'Education',
      color: '#4A7FA5',
      icon: '🎓',
      ventures: ventures.filter(v => v.sector === 'education'),
      description: 'Shaping minds. Building futures.'
    },
    {
      id: 'technology',
      title: 'Technology',
      color: '#3D8B6E',
      icon: '⚡',
      ventures: ventures.filter(v => v.sector === 'technology'),
      description: 'Innovation driving transformation.'
    },
    {
      id: 'finance',
      title: 'Finance & Investment',
      color: '#8B6914',
      icon: '💼',
      ventures: ventures.filter(v => v.sector === 'finance'),
      description: 'Empowering economic growth.'
    },
    {
      id: 'realestate',
      title: 'Real Estate & Travel',
      color: '#7A4F6D',
      icon: '🏢',
      ventures: [...ventures.filter(v => v.sector === 'realestate'), ...ventures.filter(v => v.sector === 'travel')],
      description: 'Building spaces. Creating experiences.'
    },
  ]

  return (
    <section
      className="section-gap section-padding hero-mesh relative overflow-hidden"
      aria-label="Our Ventures Ecosystem"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-wide relative z-10">
        
        {/* Premium Section Header */}
        <div className="max-w-4xl mb-28">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ventures Ecosystem
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-tight">
              Building Nepal's Future Across
              <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
                Key Economic Sectors
              </span>
            </h2>
            <p className="font-body text-lg text-charcoal/70 max-w-2xl leading-relaxed">
              A diversified portfolio of 10+ independent businesses operating across education, technology, finance, real estate, and travel — each successful, collectively transformative.
            </p>
          </div>
        </div>

        {/* Ventures by Sector Grid */}
        <div className="space-y-32">
          {sectorsList.map((sector, sectorIdx) => (
            <div key={sector.id} className="space-y-12 animate-fade-up" style={{ animationDelay: `${sectorIdx * 100}ms` }}>
              
              {/* Sector Header Card */}
              <div className="group relative">
                <div 
                  className="border-2 rounded-3xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: `${sector.color}08`,
                    borderColor: sector.color,
                    borderLeftWidth: '6px'
                  }}
                >
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="space-y-2 flex-1 min-w-min">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{sector.icon}</span>
                        <div>
                          <h3 className="font-display font-semibold text-3xl text-navy">
                            {sector.title}
                          </h3>
                          <p className="text-charcoal/60 text-sm font-body italic mt-1">
                            {sector.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-semibold text-sm"
                        style={{ backgroundColor: `${sector.color}20`, color: sector.color }}
                      >
                        <span className="text-lg">●</span>
                        {sector.ventures.length} Venture{sector.ventures.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ventures Cards Grid - Premium Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sector.ventures.map((venture, venIdx) => (
                  <div 
                    key={venture.id}
                    className="group relative reveal reveal-delay-3"
                  >
                    {/* Card Container */}
                    <div 
                      className="bg-white border-2 rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                      style={{ 
                        borderColor: venture.color,
                        borderTopWidth: '4px'
                      }}
                    >
                      {/* Logo/Icon Area */}
                      <div className="mb-6 flex-shrink-0">
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center border-2"
                          style={{ 
                            backgroundColor: `${venture.color}12`,
                            borderColor: `${venture.color}30`
                          }}
                        >
                          {venture.logoSrc ? (
                            <img 
                              src={venture.logoSrc} 
                              alt={venture.name}
                              className="max-h-16 max-w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <span 
                              className="text-3xl font-bold"
                              style={{ color: venture.color }}
                            >
                              {venture.name.slice(0, 1)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: venture.color }}
                            />
                            <span 
                              className="font-body text-xs font-bold uppercase tracking-[0.15em]"
                              style={{ color: venture.color }}
                            >
                              {venture.sectorLabel}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-2xl text-navy group-hover:text-indigo transition-colors duration-200">
                            {venture.name}
                          </h3>
                        </div>

                        <p className="font-body text-base font-medium italic text-charcoal/80" style={{ color: venture.color }}>
                          {venture.tagline}
                        </p>

                        <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-3">
                          {venture.description}
                        </p>
                      </div>

                      {/* Highlight & Action */}
                      <div className="pt-6 border-t-2 border-grey/60 flex items-center justify-between gap-4">
                        <span className="font-body text-xs text-charcoal/60 font-medium">
                          <span className="text-charcoal/90 font-semibold">{venture.highlight}</span>
                        </span>
                        <button 
                          onClick={() => setSelectedVenture(venture)}
                          className="font-body text-sm font-semibold text-indigo hover:text-navy transition-colors duration-200 flex items-center gap-1 group/btn"
                        >
                          Learn More
                          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-32 pt-20 border-t-2 border-grey/50">
          <div className="bg-gradient-to-br from-navy/5 to-indigo/5 rounded-3xl border-2 border-navy/20 p-12 md:p-16 text-center space-y-6 backdrop-blur-sm">
            <h3 className="font-display font-semibold text-3xl md:text-4xl text-navy">
              Join Our Growing
              <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
                Ventures Ecosystem
              </span>
            </h3>
            <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Explore career opportunities, partnership possibilities, and investment potential across all our ventures. Together, we're building Nepal's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="/career"
                className="inline-flex items-center justify-center gap-2 font-body text-base font-semibold
                           px-8 py-3 rounded-xl
                           bg-indigo text-white border-2 border-indigo
                           hover:bg-navy hover:shadow-lg hover:shadow-indigo/30
                           transition-all duration-300 group"
              >
                <span>View Career Opportunities</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-body text-base font-semibold
                           px-8 py-3 rounded-xl
                           bg-white text-indigo border-2 border-indigo
                           hover:bg-indigo/5
                           transition-all duration-300 group"
              >
                <span>Partner With Us</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Venture Detail Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={() => setSelectedVenture(null)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 z-10 animate-fade-up">
            <button
              onClick={() => setSelectedVenture(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-grey transition-colors duration-200 text-charcoal/70 hover:text-charcoal"
            >
              ✕
            </button>

            <div className="pr-6">
              {/* Logo & Basic Info */}
              <div className="mb-8">
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 mb-6"
                  style={{ 
                    backgroundColor: `${selectedVenture.color}12`,
                    borderColor: `${selectedVenture.color}30`
                  }}
                >
                  {selectedVenture.logoSrc ? (
                    <img 
                      src={selectedVenture.logoSrc} 
                      alt={selectedVenture.name}
                      className="max-h-20 max-w-20 object-contain"
                    />
                  ) : (
                    <span 
                      className="text-4xl font-bold"
                      style={{ color: selectedVenture.color }}
                    >
                      {selectedVenture.name.slice(0, 1)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: selectedVenture.color }}
                  />
                  <span 
                    className="font-body text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: selectedVenture.color }}
                  >
                    {selectedVenture.sectorLabel}
                  </span>
                </div>

                <h2 className="font-display font-semibold text-4xl text-navy mb-3">
                  {selectedVenture.name}
                </h2>
                <p className="font-body text-lg font-medium italic text-charcoal/80" style={{ color: selectedVenture.color }}>
                  {selectedVenture.tagline}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">About</h3>
                  <p className="font-body text-charcoal/80 leading-relaxed">
                    {selectedVenture.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">Highlights</h3>
                  <p className="font-body text-charcoal/80 font-medium">
                    {selectedVenture.highlight}
                  </p>
                </div>

                <div className="pt-6 border-t border-grey">
                  <a 
                    href={`/ventures?sector=${selectedVenture.sector}`}
                    className="inline-flex items-center gap-2 font-body font-semibold text-indigo hover:text-navy transition-colors duration-200 group"
                  >
                    View Full Details
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
