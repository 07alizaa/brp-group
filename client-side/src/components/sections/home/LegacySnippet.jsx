import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { leadership } from '../../../data/leadership'
import LeaderCard from '../../ui/LeaderCard'

export default function LegacySnippet() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find(l => l.legacy)

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-white relative overflow-hidden"
      aria-label="Our Legacy"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">

        {/* Founder quote — full width, centered */}
        <div className="text-center max-w-4xl mx-auto mb-24 reveal space-y-6">
          <span className="font-display text-gold text-6xl leading-none block">"</span>
          <blockquote className="font-display font-light italic
                                 text-display-sm text-navy
                                 leading-relaxed text-balance">
            {founder.quote}
          </blockquote>
          <cite className="font-body text-base text-charcoal/70 not-italic">
            — {founder.name}, {founder.title}
          </cite>
        </div>

        {/* Section heading + leadership cards */}
        <div className="reveal reveal-delay-2 space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Legacy
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-tight">
            2nd Generation,
            <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
              Same Values
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leadership.map((person, i) => (
            <div key={person.id} className={`reveal reveal-delay-${Math.min(i + 2, 6)}`}>
              <LeaderCard
                person={person}
                variant={person.legacy ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-5 pt-8">
          <a 
            href="/legacy"
            className="inline-flex items-center gap-2 font-body font-semibold text-indigo hover:text-navy transition-colors duration-200 group"
          >
            Read Our Full Legacy
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}