import { useScrollReveal } from '../hooks/useScrollReveal'
import { timeline } from '../data/timeline'

export default function History() {
  const ref = useScrollReveal()

  return (
    <main ref={ref} className="min-h-screen bg-ivory text-charcoal">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="section-padding container-wide">
          <div className="mx-auto max-w-4xl text-center reveal">
            <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
              Our History
            </p>

            <h1 className="font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
              Four decades of impact,
              <span className="block font-semibold text-indigo">
                carried through generations.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
              The story of B.R.P. Group is shaped by education, public service,
              national recognition, and a legacy that continues to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline overview */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {timeline.map((era, index) => (
              <div
                key={era.id}
                className={`reveal reveal-delay-${index + 1} rounded-3xl border border-navy/20 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md`}
              >
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  {era.period}
                </p>

                <p className="mt-4 font-display text-2xl font-semibold leading-tight text-navy">
                  {era.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main history timeline */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="mb-14 max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Timeline
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              A journey through decades.
            </h2>

            <p className="mt-4 font-body text-base leading-8 text-text-muted">
              Each period reflects an important chapter in the growth,
              recognition, and continuity of BRP Group’s values.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {timeline.map((era, index) => (
              <article
                key={era.id}
                className={`reveal reveal-delay-${Math.min(
                  index + 1,
                  5
                )} group relative overflow-hidden rounded-3xl border-2 border-navy/20 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg`}
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo" />

                <div className="mb-6 flex items-start justify-between gap-5">
                  <p className="inline-flex rounded-full bg-navy px-4 py-2 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                    {era.period}
                  </p>

                  <span className="font-display text-5xl font-semibold leading-none text-indigo/15 transition duration-300 group-hover:text-indigo/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-semibold leading-tight text-navy">
                  {era.title}
                </h3>

                <p className="mt-5 font-body text-[15px] leading-8 text-text-muted">
                  {era.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="rounded-3xl bg-navy p-8 text-white md:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Continuing Forward
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  A legacy that continues to shape the future.
                </h2>
              </div>

              <p className="font-body text-sm leading-8 text-white/70">
                From its foundation in education to its wider role in society
                and business, BRP Group continues to carry forward the values
                of dedication, responsibility, and long-term purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}