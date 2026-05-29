import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function AboutSnippet() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding hero-mesh relative"
      aria-label="About BRP Group"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-tight">
                Built on Values,
                <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
                  Driven by Vision
                </span>
              </h2>
            </div>

            <div className="space-y-5 reveal reveal-delay-2 text-charcoal/80">
              <p className="font-body text-base lg:text-lg leading-relaxed">
                Founded on the pioneering vision of Late Dr. Babu Ram Pokharel, BRP Group has spent over four decades building business verticals that matter. We carry forward a distinguished heritage across education, technology, finance, and infrastructure.
              </p>
              <p className="font-body text-base lg:text-lg leading-relaxed">
                Today, second-generation leadership — Chairman <strong className="text-navy">Dr. Ubin Pokharel</strong> and Executive Director <strong className="text-navy">Ms. Bidushi Pandey Pokharel</strong> — continues to steward the group's legacy. Our focus is on fostering innovation, maintaining integrity, and generating sustainable long-term value for Nepal and global markets.
              </p>
            </div>

            <div className="gold-divider reveal reveal-delay-3" />

            {/* Vision & Mission Card Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal reveal-delay-3">
              <div className="bg-white border-2 border-indigo/20 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-1.5 h-6 bg-indigo rounded-full mb-4" />
                <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-indigo mb-3">
                  Our Vision
                </h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Investing in, partnering with, and empowering outstanding people to build a better, sustainable tomorrow.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/20 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-1.5 h-6 bg-gold rounded-full mb-4" />
                <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                  Our Mission
                </h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Promoting great ideas and fueling growth across sectors with integrity, synergy, and modern technology.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-4 pt-4">
              <a 
                href="/about"
                className="inline-flex items-center gap-2 font-body font-semibold text-indigo hover:text-navy transition-colors duration-200 group"
              >
                Learn More About Our Journey
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Legacy Fast Facts Card Grid */}
          <div className="lg:col-span-5 relative space-y-6">
            <span className="watermark-text absolute -top-12 -left-4 select-none opacity-40 z-0" aria-hidden="true">
              45
            </span>
            
            <div className="relative z-10 space-y-5">
              <div className="pb-3 border-b border-grey/60">
                <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Corporate Profile
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Founded by', value: 'Dr. Babu Ram Pokharel', color: 'border-navy' },
                  { label: 'Headquartered in', value: 'Baluwatar, Kathmandu', color: 'border-indigo' },
                  { label: 'Active since', value: '1980 (45+ Years)', color: 'border-gold' },
                  { label: 'Current leadership', value: '2nd Generation', color: 'border-navy-light' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 bg-white rounded-2xl p-5 border-2 border-grey hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
                  >
                    <div className={`w-1.5 h-10 ${item.color} rounded-full self-stretch flex-shrink-0 border-l-4`} />
                    <div>
                      <p className="font-body text-[10px] text-charcoal/60 uppercase tracking-widest mb-2 font-semibold">
                        {item.label}
                      </p>
                      <p className="font-display font-semibold text-lg text-navy">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}