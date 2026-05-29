import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { communityInitiatives } from '../../../data/community'

export default function CommunitySnippet() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding hero-mesh relative"
      aria-label="Community Impact"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo/4 rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left Column */}
          <div>
            <div className="reveal space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Community Work
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-tight">
                Beyond Profit,
                <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
                  Built for People
                </span>
              </h2>
              <p className="font-body text-lg text-charcoal/70 leading-relaxed">
                BRP Group understands its responsibility not just to members but to society. Our ambition to make an impact is impossible without supporting and empowering the community we serve.
              </p>
            </div>
            <div className="reveal reveal-delay-3 mt-8">
              <a 
                href="/community"
                className="inline-flex items-center gap-2 font-body font-semibold text-indigo hover:text-navy transition-colors duration-200 group"
              >
                Our Community Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Right Column — initiative list */}
          <div className="space-y-5">
            {communityInitiatives.map((item, i) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${Math.min(i + 2, 6)}
                            flex gap-5 p-6 bg-white rounded-2xl border-2 border-grey
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className="w-10 h-10 rounded-full bg-indigo/15 flex-shrink-0
                                           flex items-center justify-center mt-0.5 border border-indigo/30">
                                <span className="text-indigo text-lg font-semibold" aria-hidden="true">◆</span>
                              </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed
                                line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
