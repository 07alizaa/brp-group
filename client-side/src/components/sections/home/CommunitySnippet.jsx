import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { communityInitiatives } from '../../../data/community'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'

const icons = {
  education:  '◆',
  healthcare: '◆',
  community:  '◆',
}

export default function CommunitySnippet() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding"
      aria-label="Community"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="reveal">
              <SectionHeading
                label="Our Community"
                title="Beyond profit. Built for people."
                subtitle="BRP Group understands its responsibility not just to its members but to the society. Our ambition to make an impact is not possible without being able to support and empower it."
              />
            </div>
            <div className="reveal reveal-delay-3 mt-8">
              <Button as={Link} to="/community" variant="ghost">
                Our Community Work
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Right — initiative list */}
          <div className="space-y-6">
            {communityInitiatives.map((item, i) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${i + 2}
                            flex gap-5 p-6 bg-white rounded-xl border border-border-warm`}
              >
                <div className="w-8 h-8 rounded-full bg-terra/10 flex-shrink-0
                                              flex items-center justify-center mt-0.5">
                                <span className="text-terra text-xs" aria-hidden="true">{icons[item.icon] || '◆'}</span>
                              </div>
                <div>
                  <h3 className="font-display font-light text-text-primary text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed
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