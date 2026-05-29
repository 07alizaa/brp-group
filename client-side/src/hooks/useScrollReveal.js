import { useEffect, useRef } from 'react'

// useScrollReveal
// Attaches an IntersectionObserver to a container ref.
// When the container enters the viewport, it finds all
// child elements with class="reveal" and adds "visible".
// This triggers the CSS transition defined in index.css.
//
// Usage:
//   const sectionRef = useScrollReveal()
//   <section ref={sectionRef}>
//     <h2 className="reveal">Heading</h2>
//     <p className="reveal reveal-delay-1">Body</p>
//   </section>

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all reveal targets inside this container
            const targets = entry.target.querySelectorAll('.reveal')
            targets.forEach((el) => el.classList.add('visible'))
            // Stop watching once revealed — no repeat animations
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}