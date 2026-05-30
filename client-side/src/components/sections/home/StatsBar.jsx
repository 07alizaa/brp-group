import { stats } from '../../../data/stats'
import StatCounter from '../../ui/StatCounter'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function StatsBar() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="bg-navy border-y border-gold/20 py-20 relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Decorative subtle mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(216,198,74,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="section-padding container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`reveal reveal-delay-${i + 1} px-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-2
                ${i !== 3 ? 'lg:border-r lg:border-gold/10' : ''} 
                ${i === 0 || i === 2 ? 'border-r border-gold/10 lg:border-r-0' : ''}
              `}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* Audited / Formal Footnote */}
        <div className="mt-16 text-center reveal reveal-delay-5">
          <p className="font-body text-[10px] text-white/40 uppercase tracking-[0.2em]">
            BRP Group Portfolio · Audited Records & Updates · Q2 2026
          </p>
        </div>
      </div>
    </section>
  )
}