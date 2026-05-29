import { useEffect, useRef, useState } from 'react'

// useCountUp
// Animates a number from 0 to `target` when the element
// enters the viewport. Uses requestAnimationFrame for
// smooth animation — no library needed.
//
// Usage:
//   const { ref, count } = useCountUp({ target: 45, duration: 1800 })
//   <span ref={ref}>{count}+</span>

export function useCountUp({ target, duration = 1800, startOnView = true }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function animate() {
      if (hasStarted.current) return
      hasStarted.current = true

      const startTime = performance.now()

      function step(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease out cubic — fast start, slow finish
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * target)

        setCount(current)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setCount(target) // ensure we land exactly on target
        }
      }

      requestAnimationFrame(step)
    }

    if (!startOnView) {
      animate()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, startOnView])

  return { ref, count }
}