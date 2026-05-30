import { Link } from 'react-router-dom'
import { ventures, sectors } from '../../../data/ventures'

function getSectorText(sectorId) {
  if (sectorId === 'education') {
    return 'Learning platforms and institutions focused on future-ready education.'
  }

  if (sectorId === 'technology') {
    return 'Digital solutions, automation, and business transformation.'
  }

  if (sectorId === 'finance') {
    return 'Investment, fund management, and long-term business growth.'
  }

  if (sectorId === 'realestate') {
    return 'Property services, travel solutions, and experience-driven ventures.'
  }

  return 'A growing part of BRP Group’s wider business ecosystem.'
}

function getBorderClass(sectorId) {
  if (sectorId === 'education') return 'border-education'
  if (sectorId === 'technology') return 'border-technology'
  if (sectorId === 'finance') return 'border-finance'
  if (sectorId === 'realestate') return 'border-realestate'
  return 'border-indigo'
}

function getDotClass(sectorId) {
  if (sectorId === 'education') return 'bg-education'
  if (sectorId === 'technology') return 'bg-technology'
  if (sectorId === 'finance') return 'bg-finance'
  if (sectorId === 'realestate') return 'bg-realestate'
  return 'bg-indigo'
}

export default function VenturesEcosystem() {
  return (
    <section className="bg-ivory py-24" aria-label="BRP Ventures Ecosystem">
      <div className="container-wide section-padding">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            Ventures Ecosystem
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            One group. Multiple ventures. One shared direction.
          </h2>

          <p className="mt-5 font-body text-base leading-8 text-text-muted">
            BRP Group connects education, technology, finance, real estate, and
            travel through a portfolio built on legacy, trust, and long-term
            value.
          </p>
        </div>

        {/* Ecosystem visual */}
        <div className="mt-16 rounded-3xl border border-grey bg-white p-6 shadow-sm md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left story block */}
            <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                BRP Ecosystem
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                A connected business network shaped by purpose.
              </h3>

              <p className="mt-5 font-body text-sm leading-7 text-white/70">
                Each venture has its own focus, but together they create a
                wider ecosystem that supports learning, enterprise, investment,
                and community development.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 p-5">
                  <p className="font-display text-3xl text-gold">
                    {ventures.length}
                  </p>
                  <p className="mt-1 font-body text-sm text-white/65">
                    Key ventures
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 p-5">
                  <p className="font-display text-3xl text-gold">
                    {sectors.length}
                  </p>
                  <p className="mt-1 font-body text-sm text-white/65">
                    Core sectors
                  </p>
                </div>
              </div>
            </div>

            {/* Right hub visual */}
            <div className="relative min-h-[430px] rounded-3xl bg-ivory p-6">
              {/* subtle connection lines */}
              <div className="absolute left-1/2 top-1/2 hidden h-px w-[76%] -translate-x-1/2 bg-grey md:block" />
              <div className="absolute left-1/2 top-1/2 hidden h-[70%] w-px -translate-y-1/2 bg-grey md:block" />

              {/* center BRP logo */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-grey bg-white p-5 shadow-lg">
                <img
                  src="/brp-nav-logo.webp"
                  alt="BRP Group"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* venture logos around */}
              <div className="grid h-full min-h-[390px] grid-cols-2 gap-4 md:grid-cols-3">
                {ventures.slice(0, 6).map((venture, index) => (
                  <div
                    key={venture.id}
                    className={`flex items-center justify-center ${
                      index === 1 || index === 4 ? 'md:translate-y-8' : ''
                    }`}
                  >
                    <div className="group flex h-28 w-full max-w-[160px] items-center justify-center rounded-2xl border border-grey bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo/40 hover:shadow-lg">
                      <img
                        src={venture.logoSrc}
                        alt={venture.name}
                        className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sector summary cards from data */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className={`rounded-3xl border border-grey border-t-4 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${getBorderClass(
                sector.id
              )}`}
            >
              <div className={`mb-5 h-3 w-3 rounded-full ${getDotClass(sector.id)}`} />

              <h3 className="font-display text-2xl font-semibold text-navy">
                {sector.label}
              </h3>

              <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                {getSectorText(sector.id)}
              </p>

              <p className="mt-5 font-body text-xs font-semibold uppercase tracking-wider text-indigo">
                {sector.count} {sector.count === 1 ? 'Venture' : 'Ventures'}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/ventures"
            className="inline-flex rounded-full bg-indigo px-8 py-3 font-body text-sm font-semibold text-white transition hover:bg-navy"
          >
            Explore All Ventures →
          </Link>
        </div>
      </div>
    </section>
  )
}