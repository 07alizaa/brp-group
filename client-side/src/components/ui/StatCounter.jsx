import { useCountUp } from '../../hooks/useCountUp'

// StatCounter — single animated stat.
// Used inside StatsBar. Each instance manages its own
// IntersectionObserver via useCountUp hook.

export default function StatCounter({ value, suffix, label }) {
  const { ref, count } = useCountUp({ target: value, duration: 1800 })

  return (
    <div ref={ref} className="text-center">

      {/* The number */}
      <div className="font-display font-light text-display-lg text-text-primary leading-none">
        {count}
        <span className="text-terra">{suffix}</span>
      </div>

      {/* The label */}
      <div className="font-body text-xs font-medium tracking-[0.15em] uppercase text-text-muted mt-2">
        {label}
      </div>

    </div>
  )
}