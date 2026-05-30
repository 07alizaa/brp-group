import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { leadership } from '../../../data/leadership'

export default function LegacySnippet() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find((person) => person.legacy)

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding relative overflow-hidden bg-white"
      aria-label="Our Legacy"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 rounded-3xl border-2 border-navy bg-ivory p-6 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Founder image */}
          <div className="reveal">
            <div className="group overflow-hidden rounded-3xl border-[8px] border-white bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={founder?.imageSrc || '/Babu-Ram-Pokharel-image-2.webp'}
                alt={founder?.name || 'BRP Group founder'}
                className="h-[420px] w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Legacy story */}
          <div className="reveal reveal-delay-2">
            <p className="section-label">Our Legacy</p>

            <h2 className="section-heading mt-4">
              A foundation shaped by
              <span className="section-heading-accent">
                values and service.
              </span>
            </h2>

            {founder?.quote && (
              <blockquote className="mt-8 border-l-4 border-gold pl-6">
                <p className="font-display text-2xl font-light italic leading-relaxed text-navy md:text-3xl">
                  “{founder.quote}”
                </p>

                <cite className="mt-4 block font-body text-sm not-italic text-text-muted">
                  — {founder.name}, {founder.title}
                </cite>
              </blockquote>
            )}

            <p className="body-text mt-7 max-w-2xl">
              BRP Group carries forward a legacy rooted in education,
              responsibility, and long-term contribution. The next generation
              continues to build on the same values while shaping new ideas for
              the future.
            </p>

            {/* Story-based value cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy/20 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md">
                <p className="font-display text-2xl font-semibold text-indigo">
                  Education
                </p>

                <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-faint">
                  Rooted in learning and service
                </p>
              </div>

              <div className="rounded-2xl border border-navy/20 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md">
                <p className="font-display text-2xl font-semibold text-indigo">
                  Responsibility
                </p>

                <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-faint">
                  Carried across generations
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/legacy"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3 font-body text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-lg"
              >
                Read Our Full Legacy
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}