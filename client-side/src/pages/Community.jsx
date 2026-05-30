import { useScrollReveal } from '../hooks/useScrollReveal'
import { leadership } from '../data/leadership'
import { timeline } from '../data/timeline'

export default function Legacy() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find((person) => person.legacy)

  return (
    <main ref={sectionRef} className="min-h-screen bg-ivory text-charcoal">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
                Our Legacy
              </p>

              <h1 className="max-w-4xl font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
                A story shaped by
                <span className="block font-semibold text-indigo">
                  education, service, and leadership.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
                BRP Group’s legacy is deeply connected to the vision and values
                of Dr. Babu Ram Pokharel. His contribution to education, social
                service, and leadership continues to guide the group’s direction
                across generations.
              </p>

              {founder?.quote && (
                <blockquote className="mt-8 border-l-4 border-gold pl-6">
                  <p className="font-display text-2xl font-light italic leading-relaxed text-navy">
                    “{founder.quote}”
                  </p>

                  <cite className="mt-4 block font-body text-sm not-italic text-text-muted">
                    — {founder.name}, {founder.title}
                  </cite>
                </blockquote>
              )}
            </div>

            <div className="reveal reveal-delay-2">
              <div className="overflow-hidden rounded-3xl border-2 border-navy bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="/Babu-Ram-Pokharel-image-2.webp"
                  alt="Dr. Babu Ram Pokharel"
                  className="h-[470px] w-full rounded-2xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Influence */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-grey bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-navy p-8 text-white md:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Founder’s Influence
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                A foundation built through vision and responsibility.
              </h2>

              <p className="mt-5 font-body text-sm leading-8 text-white/70">
                The journey of BRP Group is rooted in dedication to education,
                public service, and community contribution. These values remain
                central to the group’s identity today.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <p className="font-body text-base leading-8 text-text-muted">
                Dr. Babu Ram Pokharel’s work reached far beyond one institution.
                His involvement in education, social organizations, and national
                leadership helped shape a legacy that continues to inspire BRP
                Group’s current direction.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-navy/20 bg-ivory p-5 text-center">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    45+
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-text-faint">
                    Years
                  </p>
                </div>

                <div className="rounded-2xl border border-navy/20 bg-ivory p-5 text-center">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    300+
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-text-faint">
                    Teachers
                  </p>
                </div>

                <div className="rounded-2xl border border-navy/20 bg-ivory p-5 text-center">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    5000+
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-text-faint">
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Timeline */}
<section className="pb-24">
  <div className="section-padding container-wide">
    <div className="mb-14 max-w-3xl">
      <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
        History
      </p>

      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
        A journey through decades.
      </h2>

      <p className="mt-4 font-body text-base leading-8 text-text-muted">
        From educational foundations to national recognition and a legacy
        carried forward, each era reflects the values behind BRP Group.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {timeline.map((era, index) => (
        <article
          key={era.id}
          className={`reveal reveal-delay-${Math.min(
            index + 1,
            5
          )} rounded-3xl border-2 border-navy/20 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg`}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="inline-flex rounded-full bg-navy px-4 py-2 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              {era.period}
            </p>

            <span className="font-display text-4xl font-semibold text-indigo/20">
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

      {/* Leadership */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="mb-12 max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Leadership
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Carrying the legacy forward.
            </h2>

            <p className="mt-4 font-body text-base leading-8 text-text-muted">
              The next generation continues to carry forward BRP Group’s values
              while shaping new ideas for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {leadership.map((person, index) => (
              <article
                key={person.id}
                className={`reveal reveal-delay-${index + 1} overflow-hidden rounded-3xl border border-navy/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md`}
              >
                <img
                  src={person.imageSrc}
                  alt={person.name}
                  className="h-80 w-full object-cover object-top"
                />

                <div className="p-7">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                    {person.title}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy">
                    {person.name}
                  </h3>

                  <p className="mt-4 line-clamp-5 font-body text-sm leading-7 text-text-muted">
                    {person.bio}
                  </p>

                  {person.legacy && (
                    <div className="mt-5 rounded-2xl bg-navy p-5 text-white">
                      <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        Legacy Figure
                      </p>
                      <p className="mt-2 font-body text-sm leading-6 text-white/70">
                        A guiding influence behind BRP Group’s values and
                        direction.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}