import { useScrollReveal } from '../hooks/useScrollReveal'
import { timeline } from '../data/timeline'
import SectionHeading from '../components/ui/SectionHeading'

export default function History() {
  const ref = useScrollReveal()
  return (
    <div className="pt-32 pb-24 section-padding min-h-screen" ref={ref}>
      <div className="container-wide">
        <div className="reveal">
          <SectionHeading label="Our History" title="Four decades of impact." subtitle="The story of B.R.P. Group — told through the decades." />
        </div>
        <div className="mt-16 space-y-12">
          {timeline.map((era, i) => (
            <div key={era.id} className={`reveal reveal-delay-${Math.min(i+1,5)} bg-white rounded-2xl p-8 border border-white/5`}>
              <span className="font-body text-xs text-terra tracking-widest uppercase">{era.period}</span>
              <h2 className="font-display font-light text-display-sm text-text-primary mt-2 mb-4">{era.title}</h2>
              <p className="font-body text-base text-text-muted leading-relaxed">{era.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}