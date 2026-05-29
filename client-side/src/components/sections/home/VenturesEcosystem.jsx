import { useState } from 'react'
import { ventures } from '../../../data/ventures'
import VentureDrawer from '../../ui/VentureDrawer'

const sectorConfig = [
  {
    id: 'all',
    label: 'All Ventures',
    title: 'BRP Ecosystem',
    description: 'A connected network of ventures built on trust, purpose, and long-term growth.',
    color: '#2F2B8F',
  },
  {
    id: 'education',
    label: 'Education',
    title: 'Education',
    description: 'Developing learning spaces and future-ready institutions.',
    color: '#2F2B8F',
  },
  {
    id: 'technology',
    label: 'Technology',
    title: 'Technology',
    description: 'Supporting digital innovation and smarter business solutions.',
    color: '#10264A',
  },
  {
    id: 'finance',
    label: 'Finance & Investment',
    title: 'Finance & Investment',
    description: 'Investing in businesses, ideas, and sustainable growth.',
    color: '#D8A928',
  },
  {
    id: 'realestate-travel',
    label: 'Real Estate & Travel',
    title: 'Real Estate & Travel',
    description: 'Creating spaces, services, and meaningful experiences.',
    color: '#6D5BD0',
  },
]

export default function VenturesEcosystem() {
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedVenture, setSelectedVenture] = useState(null)

  const filteredVentures =
    selectedSector === 'all'
      ? ventures
      : selectedSector === 'realestate-travel'
        ? ventures.filter(
            (venture) =>
              venture.sector === 'realestate' || venture.sector === 'travel'
          )
        : ventures.filter((venture) => venture.sector === selectedSector)

  const activeSector =
    sectorConfig.find((sector) => sector.id === selectedSector) ||
    sectorConfig[0]

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] py-24"
      aria-label="BRP Ventures Ecosystem"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#2F2B8F]/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-[#D8C64A]/10 blur-3xl" />

      <div className="container-wide section-padding relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D8C64A]/40 bg-white px-5 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D8C64A]" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#2F2B8F]">
              Ventures Ecosystem
            </span>
          </div>

          <h2 className="font-display text-4xl font-light leading-tight text-[#10264A] md:text-6xl">
            Building Nepal’s Future Across
            <span className="block font-semibold text-[#2F2B8F]">
              Key Economic Sectors
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-[#1E1E1E]/70 md:text-lg">
            BRP Group brings together a growing ecosystem of ventures across
            education, technology, finance, investment, real estate, travel, and
            community-focused development.
          </p>
        </div>

        {/* Visual ecosystem banner */}
        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-[2rem] bg-[#10264A] shadow-2xl shadow-[#10264A]/15 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 text-white md:p-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D8C64A]">
              One Group, Multiple Directions
            </p>

            <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              A business ecosystem shaped by legacy, people, and purpose.
            </h3>

            <p className="mt-5 font-body text-sm leading-7 text-white/70">
              Each venture operates in its own sector, but together they reflect
              BRP Group’s wider mission of creating practical value for
              businesses, communities, and future generations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-display text-3xl text-[#D8C64A]">10+</p>
                <p className="mt-1 text-sm text-white/70">Ventures</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-display text-3xl text-[#D8C64A]">4+</p>
                <p className="mt-1 text-sm text-white/70">Core Sectors</p>
              </div>
            </div>
          </div>

          <div className="grid min-h-[360px] grid-cols-2 gap-3 p-3">
            <img
              src="/Educationimage-5.png"
              alt="BRP education initiative"
              className="h-full w-full rounded-3xl object-cover"
            />

            <div className="grid gap-3">
              <img
                src="/Communityimage-1.webp"
                alt="BRP community work"
                className="h-full w-full rounded-3xl object-cover"
              />

              <img
                src="/legacy-image.webp"
                alt="BRP legacy"
                className="h-full w-full rounded-3xl object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Sector tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {sectorConfig.map((sector) => {
            const isActive = selectedSector === sector.id

            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setSelectedSector(sector.id)}
                className={`rounded-full border px-5 py-3 font-body text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-[#2F2B8F] bg-[#2F2B8F] text-white shadow-lg shadow-[#2F2B8F]/20'
                    : 'border-[#E6E6E6] bg-white text-[#10264A] hover:border-[#2F2B8F] hover:text-[#2F2B8F]'
                }`}
              >
                {sector.label}
              </button>
            )
          })}
        </div>

        {/* Active sector intro */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p
            className="font-body text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: activeSector.color }}
          >
            {activeSector.label}
          </p>

          <h3 className="mt-3 font-display text-3xl font-semibold text-[#10264A] md:text-4xl">
            {activeSector.title}
          </h3>

          <p className="mt-3 font-body text-sm leading-7 text-[#1E1E1E]/65">
            {activeSector.description}
          </p>
        </div>

        {/* Venture cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredVentures.map((venture) => (
            <article
              key={venture.id}
              className="group overflow-hidden rounded-[2rem] border border-[#E6E6E6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#10264A]/10"
            >
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: venture.color || activeSector.color }}
              />

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FAFAF8] p-4 shadow-inner">
                    {venture.logoSrc ? (
                      <img
                        src={venture.logoSrc}
                        alt={venture.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <span className="font-display text-2xl font-semibold text-[#2F2B8F]">
                        {venture.name?.slice(0, 2)}
                      </span>
                    )}
                  </div>

                  <span
                    className="rounded-full px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${venture.color || activeSector.color}18`,
                      color: venture.color || activeSector.color,
                    }}
                  >
                    {venture.sectorLabel || venture.sector}
                  </span>
                </div>

                <h4 className="mt-6 font-display text-2xl font-semibold text-[#10264A] transition-colors duration-300 group-hover:text-[#2F2B8F]">
                  {venture.name}
                </h4>

                {venture.tagline && (
                  <p className="mt-2 font-body text-sm font-semibold italic text-[#2F2B8F]">
                    {venture.tagline}
                  </p>
                )}

                <p className="mt-4 line-clamp-4 font-body text-sm leading-7 text-[#1E1E1E]/68">
                  {venture.description}
                </p>

                {venture.highlight && (
                  <div className="mt-6 rounded-2xl bg-[#FAFAF8] p-4">
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E1E1E]/40">
                      Key Highlight
                    </p>
                    <p className="mt-1 font-body text-sm font-semibold text-[#10264A]">
                      {venture.highlight}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedVenture(venture)}
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#2F2B8F] transition-all duration-300 hover:gap-3 hover:text-[#10264A]"
                >
                  More Details <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty fallback */}
        {filteredVentures.length === 0 && (
          <div className="mt-12 rounded-3xl border border-[#E6E6E6] bg-white p-10 text-center">
            <p className="font-body text-[#1E1E1E]/60">
              No ventures found for this sector.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] border border-[#2F2B8F]/15 bg-white p-8 text-center shadow-sm md:p-12">
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D8A928]">
            Growing Together
          </p>

          <h3 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#10264A] md:text-4xl">
            Explore opportunities across BRP Group’s growing venture network.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-[#1E1E1E]/65">
            From partnerships to careers, BRP Group continues to build
            meaningful connections across industries and communities.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/career"
              className="rounded-full bg-[#2F2B8F] px-7 py-3 font-body text-sm font-semibold text-white transition hover:bg-[#10264A]"
            >
              View Career Opportunities →
            </a>

            <a
              href="/contact"
              className="rounded-full border border-[#2F2B8F] bg-white px-7 py-3 font-body text-sm font-semibold text-[#2F2B8F] transition hover:bg-[#2F2B8F]/5"
            >
              Partner With Us →
            </a>
          </div>
        </div>
      </div>

      <VentureDrawer
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </section>
  )
}