import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { communityInitiatives } from '../../../data/community'

export default function CommunitySnippet() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-ivory relative overflow-hidden"
      aria-label="Community Impact"
    >
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Column */}
          <div>
            <div className="reveal">
              <p className="section-label-light">Community Work</p>

              <h2 className="section-title mt-4">
                Beyond profit,
                <span className="block font-semibold text-indigo">
                  built for people.
                </span>
              </h2>

              <p className="section-text mt-6 text-lg">
                BRP Group understands its responsibility not just to its
                members, but to society. Its community work focuses on
                education, healthcare, and local development in places where
                support can make a lasting difference.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="rounded-3xl border border-navy/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md">
                <p className="font-display text-4xl font-semibold text-indigo">
                  50+
                </p>
                <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-faint">
                  Schools Supported
                </p>
              </div>

              <div className="rounded-3xl border border-navy/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md">
                <p className="font-display text-4xl font-semibold text-indigo">
                  100s
                </p>
                <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-faint">
                  Families Impacted
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 mt-9">
              <Link
                to="/community"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3 font-body text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-lg"
              >
                Our Community Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {communityInitiatives.map((item, index) => (
              <article
                key={item.id}
                className={`reveal reveal-delay-${Math.min(
                  index + 2,
                  6
                )} group overflow-hidden rounded-3xl border border-navy/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[0.38fr_0.62fr]">
                  <div className="overflow-hidden border-b border-navy/10 sm:border-b-0 sm:border-r">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                        <span className="font-display text-lg font-semibold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </span>

                      <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                        Community Focus
                      </p>
                    </div>

                    <h3 className="font-display text-2xl font-semibold leading-tight text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-4 font-body text-sm leading-7 text-text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-indigo">
                      Learn more
                      <span className="transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}