import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { leadership } from '../../../data/leadership'
import SectionHeading from '../../ui/SectionHeading'
import LeaderCard from '../../ui/LeaderCard'
import Button from '../../ui/Button'

export default function LegacySnippet() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find(l => l.legacy)

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-white"
      aria-label="Our Legacy"
    >
      <div className="container-wide">

        {/* Founder quote — full width, centered */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="font-display text-terra text-5xl leading-none">"</span>
          <blockquote className="font-display font-light italic
                                 text-display-sm text-text-primary
                                 leading-relaxed mt-2 mb-6 text-balance">
            {founder.quote}
          </blockquote>
          <cite className="font-body text-sm text-text-muted not-italic">
            — {founder.name}, {founder.title}
          </cite>
        </div>

        {/* Section heading + leadership cards */}
        <div className="reveal reveal-delay-2">
          <SectionHeading
            label="Our Legacy"
            title="2nd Generation. Same values."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {leadership.map((person, i) => (
            <div key={person.id} className={`reveal reveal-delay-${i + 2}`}>
              <LeaderCard
                person={person}
                variant={person.legacy ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 reveal reveal-delay-5">
          <Button as={Link} to="/legacy" variant="ghost">
            Read Our Full Legacy
            <span aria-hidden="true">→</span>
          </Button>
        </div>

      </div>
    </section>
  )
}