import { useScrollReveal } from '../hooks/useScrollReveal'
import { leadership } from '../data/leadership'
import { timeline } from '../data/timeline'
import SectionHeading from '../components/ui/SectionHeading'
import LeaderCard from '../components/ui/LeaderCard'

export default function Legacy() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find(l => l.legacy)

  return (
    <div className="pt-32 pb-24 min-h-screen" ref={sectionRef}>
      {/* Hero */}
      <div className="section-padding container-wide mb-24">
        <div className="reveal">
          <SectionHeading label="Our Legacy" title="45 years of building with purpose." />
        </div>
        <blockquote className="mt-8 max-w-2xl reveal reveal-delay-2">
          <p className="font-display font-light italic text-display-sm text-text-primary leading-relaxed">
            "{founder.quote}"
          </p>
          <cite className="font-body text-sm text-text-muted not-italic mt-4 block">
            — {founder.name}, {founder.title}
          </cite>
        </blockquote>
      </div>

      {/* Timeline */}
      <div className="section-padding container-wide mb-24">
        <SectionHeading label="History" title="A journey through decades." />
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          <div className="space-y-16">
            {timeline.map((era, i) => (
              <div key={era.id}
                   className={`reveal reveal-delay-${Math.min(i+1,5)}
                     grid grid-cols-1 md:grid-cols-2 gap-8 items-start
                     ${era.side === 'right' ? '' : 'md:[&>*:first-child]:order-last'}`}>
                <div className="bg-white rounded-2xl p-8 border border-white/5">
                  <span className="font-body text-xs text-terra tracking-widest uppercase">
                    {era.period}
                  </span>
                  <h3 className="font-display font-light text-display-sm text-text-primary mt-2 mb-4">
                    {era.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {era.description}
                  </p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="section-padding container-wide">
        <SectionHeading label="Executive Team" title="The people carrying it forward." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {leadership.map((person, i) => (
            <div key={person.id} className={`reveal reveal-delay-${i+2}`}>
              <LeaderCard person={person} variant={person.legacy ? 'featured' : 'default'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}