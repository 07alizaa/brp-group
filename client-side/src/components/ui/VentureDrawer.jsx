import { useEffect } from 'react'

export default function VentureDrawer({ venture, onClose }) {
  const isOpen = !!venture

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={venture ? `${venture.name} details` : 'Venture details'}
        className={`fixed bottom-0 left-0 right-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl transition-transform duration-500 ease-smooth ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {venture && (
          <div className="relative mx-auto max-w-6xl">
            {/* Drag Handle */}
            <button
              type="button"
              onClick={onClose}
              className="mx-auto mt-4 block h-1.5 w-14 rounded-full bg-gold"
              aria-label="Close drawer"
            />

            {/* Top Brand Banner */}
            <div className="relative mt-5 overflow-hidden rounded-t-3xl bg-navy px-6 py-8 text-white md:px-12 md:py-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo/50 blur-3xl" />
              <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />

              <button
                type="button"
                onClick={onClose}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-navy"
                aria-label="Close venture details"
              >
                ✕
              </button>

              <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-center">
                {/* Logo */}
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white p-5 shadow-xl">
                  {venture.logoSrc ? (
                    <img
                      src={venture.logoSrc}
                      alt={venture.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-display text-3xl font-semibold text-indigo">
                      {venture.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Heading */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-gold/20 px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                      {venture.sectorLabel || venture.sector}
                    </span>

                    {venture.featured && (
                      <span className="rounded-full bg-white/10 px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Flagship Venture
                      </span>
                    )}
                  </div>

                  <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                    {venture.name}
                  </h2>

                  {venture.tagline && (
                    <p className="mt-3 max-w-2xl font-body text-base italic leading-7 text-white/75">
                      {venture.tagline}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-12 md:px-12 md:py-10">
              {/* Left Summary Cards */}
              <div className="md:col-span-4">
                <div className="sticky top-6 space-y-4">
                  <div className="rounded-3xl border border-grey bg-ivory p-6">
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-indigo">
                      Venture Classification
                    </p>
                    <p className="mt-2 font-body text-sm font-semibold text-navy">
                      {venture.sectorLabel || venture.sector} Vertical
                    </p>
                  </div>

                  <div className="rounded-3xl border border-grey bg-white p-6 shadow-sm">
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-finance">
                      Key Highlight
                    </p>
                    <p className="mt-3 font-body text-sm font-semibold leading-7 text-navy">
                      {venture.highlight}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo p-6 text-white shadow-lg shadow-indigo/20">
                    <p className="font-display text-2xl">BRP Ecosystem</p>
                    <p className="mt-2 font-body text-sm leading-6 text-white/75">
                      Part of a growing network of ventures built on trust,
                      legacy, and long-term purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Narrative */}
              <div className="md:col-span-8">
                <div className="rounded-3xl border border-grey bg-white p-6 shadow-sm md:p-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
                    Corporate Briefing
                  </p>

                  <h3 className="mt-4 font-display text-3xl font-semibold text-navy">
                    About {venture.name}
                  </h3>

                  <p className="mt-5 whitespace-pre-line font-body text-base leading-8 text-charcoal/70">
                    {venture.description}
                  </p>

                  <div className="mt-8 border-t border-grey pt-6">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center justify-center rounded-full border border-indigo bg-white px-7 py-3 font-body text-sm font-semibold text-indigo transition hover:bg-indigo/5"
                      >
                        Return to Ecosystem
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onClose()
                          setTimeout(() => {
                            const target = document.getElementById('contact')
                            if (target) target.scrollIntoView({ behavior: 'smooth' })
                          }, 400)
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-indigo px-7 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-indigo/20 transition hover:-translate-y-0.5 hover:bg-navy"
                      >
                        Inquire About {venture.name} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}