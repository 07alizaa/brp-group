import { stats } from '../../../data/stats'
import StatCounter from '../../ui/StatCounter'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function StatsBar() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="bg-charcoal border-y border-border-dark py-16"
      aria-label="Company statistics"
    >
      <div className="section-padding container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}