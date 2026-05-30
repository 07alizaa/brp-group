import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function AboutSnippet() {
  const sectionRef = useScrollReveal()

  const profileFacts = [
    {
      label: 'Founded by',
      value: 'Dr. Babu Ram Pokharel',
      border: 'border-navy',
    },
    {
      label: 'Headquartered in',
      value: 'Baluwatar, Kathmandu',
      border: 'border-indigo',
    },
    {
      label: 'Active since',
      value: '1980 — 45+ Years',
      border: 'border-gold',
    },
    {
      label: 'Current leadership',
      value: '2nd Generation',
      border: 'border-navy',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-ivory relative overflow-hidden"
      aria-label="About BRP Group"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="reveal">
              <p className="section-label-light">Our Story</p>

              <h2 className="section-title mt-4">
                Built on values,
                <span className="block font-semibold text-indigo">
                  driven by vision.
                </span>
              </h2>
            </div>

            <div className="mt-7 space-y-5 reveal reveal-delay-2">
              <p className="section-text">
                Founded on the pioneering vision of Late Dr. Babu Ram Pokharel,
                BRP Group has spent over four decades building ventures that
                connect business growth with long-term responsibility.
              </p>

              <p className="section-text">
                Today, second-generation leadership continues to carry the
                group’s values forward through education, technology, finance,
                investment, infrastructure, and community-focused work.
              </p>
            </div>

            <div className="gold-divider reveal reveal-delay-3" />

            {/* Vision & Mission */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 reveal reveal-delay-3">
              <div className="premium-card border-l-4 border-indigo p-6">
                <div className="mb-5 h-8 w-1.5 rounded-full bg-indigo" />

                <h3 className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                  Our Vision
                </h3>

                <p className="font-body text-sm leading-7 text-text-muted">
                  Investing in, partnering with, and empowering outstanding
                  people to build a better and more sustainable tomorrow.
                </p>
              </div>

              <div className="premium-card border-l-4 border-gold p-6">
                <div className="mb-5 h-8 w-1.5 rounded-full bg-gold" />

                <h3 className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  Our Mission
                </h3>

                <p className="font-body text-sm leading-7 text-text-muted">
                  Promoting great ideas and supporting growth across sectors
                  with integrity, synergy, and modern technology.
                </p>
              </div>
            </div>

            <div className="pt-8 reveal reveal-delay-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3 font-body text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-lg"
              >
                Learn More About Our Journey
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:col-span-5">
            <span
              className="watermark-text absolute -top-14 -left-6 z-0 select-none"
              aria-hidden="true"
            >
              45
            </span>

            <div className="relative z-10 rounded-3xl border-2 border-navy bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 border-b border-grey pb-4">
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                  Corporate Profile
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold text-navy">
                  Four decades of trusted growth.
                </h3>
              </div>

              <div className="space-y-4 reveal reveal-delay-2">
                {profileFacts.map((item) => (
                  <div
                    key={item.label}
                    className={`group flex items-center rounded-2xl border border-grey bg-ivory p-5 transition duration-300 hover:-translate-y-1 hover:border-navy/40 hover:bg-white hover:shadow-md ${item.border}`}
                  >
                    <span
                      className={`mr-4 h-12 w-1.5 flex-shrink-0 rounded-full border-l-4 ${item.border}`}
                    />

                    <div>
                      <p className="mb-1 font-body text-[10px] font-bold uppercase tracking-widest text-text-faint">
                        {item.label}
                      </p>

                      <p className="font-display text-xl font-semibold leading-tight text-navy">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-navy p-5 text-white">
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  BRP Group
                </p>

                <p className="mt-2 font-body text-sm leading-7 text-white/70">
                  A diversified group shaped by legacy, leadership, and
                  long-term purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}