import { useScrollReveal } from '../hooks/useScrollReveal'
import { communityInitiatives, communityStats } from '../data/community'
import SectionHeading from '../components/ui/SectionHeading'

export default function Community() {
  const ref = useScrollReveal()
  return (
    <div className="pt-32 pb-24 section-padding min-h-screen" ref={ref}>
      <div className="container-wide">
        <div className="reveal">
          <SectionHeading label="Our Community" title="Beyond business. Built for people." subtitle="BRP Group understands its responsibility not just to its members but to the society." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-16">
          {communityStats.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-delay-${i+1} bg-white rounded-xl p-6 text-center border border-white/5`}>
              <div className="font-display text-display-md text-terra">{stat.value}</div>
              <div className="font-body text-xs text-text-muted uppercase tracking-wider mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityInitiatives.map((item, i) => (
            <div key={item.id} className={`reveal reveal-delay-${i+2} bg-white rounded-2xl p-8 border border-white/5`}>
              <div className="w-10 h-10 rounded-full bg-terra/10 flex items-center justify-center mb-6">
                <span className="text-terra text-sm">◆</span>
              </div>
              <h3 className="font-display font-light text-display-sm text-text-primary mb-3">{item.title}</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}