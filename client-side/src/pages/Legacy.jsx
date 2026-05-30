import { useScrollReveal } from '../hooks/useScrollReveal'
import { leadership } from '../data/leadership'

export default function Legacy() {
  const sectionRef = useScrollReveal()
  const founder = leadership.find((person) => person.legacy)

  return (
    <main ref={sectionRef} className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
                Our Legacy
              </p>

              <h1 className="max-w-4xl font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
                A legacy shaped by
                <span className="block font-semibold text-indigo">
                  people, purpose, and progress.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
                BRP Group’s story is not only about years of operation. It is
                about the people, values, and decisions that helped shape a
                business group rooted in education, enterprise, and community
                responsibility.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
                <div className="rounded-2xl border border-grey bg-white p-5">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    45+
                  </p>
                  <p className="mt-1 font-body text-xs text-text-muted">
                    Years
                  </p>
                </div>

                <div className="rounded-2xl border border-grey bg-white p-5">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    2nd
                  </p>
                  <p className="mt-1 font-body text-xs text-text-muted">
                    Generation
                  </p>
                </div>

                <div className="rounded-2xl border border-grey bg-white p-5">
                  <p className="font-display text-3xl font-semibold text-indigo">
                    10+
                  </p>
                  <p className="mt-1 font-body text-xs text-text-muted">
                    Ventures
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="relative rounded-3xl border border-grey bg-white p-4 shadow-sm">
                <img
                  src="/legacy-image.webp"
                  alt="BRP Group leadership legacy"
                  className="h-[480px] w-full rounded-2xl object-cover object-top"
                />

                <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl bg-navy p-6 text-white">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    Generational Values
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight">
                    Built by one generation, carried forward by the next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="mb-10 max-w-2xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              What Defines the Legacy
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              The values behind BRP Group.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-grey bg-white p-8">
              <p className="font-display text-3xl text-indigo">01</p>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                Discipline
              </h3>
              <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                BRP Group’s foundation is shaped by consistent effort,
                responsibility, and the belief that long-term work creates
                lasting impact.
              </p>
            </div>

            <div className="rounded-3xl border border-grey bg-white p-8">
              <p className="font-display text-3xl text-indigo">02</p>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                Education
              </h3>
              <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                Education remains central to the group’s identity, influencing
                its ventures, community work, and future-focused initiatives.
              </p>
            </div>

            <div className="rounded-3xl border border-grey bg-white p-8">
              <p className="font-display text-3xl text-indigo">03</p>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                Service
              </h3>
              <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                The group’s legacy is connected to people and society, not only
                business growth. This gives the brand its human direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-grey bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-4">
              <img
                src="/Babu-Ram-Pokharel-image-2.webp"
                alt="Dr. Babu Ram Pokharel"
                className="h-full min-h-[420px] w-full rounded-2xl object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Founder’s Influence
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                A foundation shaped by vision and service.
              </h2>

              <p className="mt-5 font-body text-base leading-8 text-text-muted">
                Dr. Babu Ram Pokharel’s values continue to influence BRP
                Group’s direction. His belief in effort, education, and service
                helped create a foundation that the next generation continues to
                build upon.
              </p>

              {founder?.quote && (
                <blockquote className="mt-8 border-l-4 border-gold pl-6">
                  <p className="font-display text-2xl font-light italic leading-relaxed text-charcoal">
                    “{founder.quote}”
                  </p>

                  <cite className="mt-4 block font-body text-sm not-italic text-text-muted">
                    — {founder.name}
                  </cite>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="mb-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Leadership
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Carrying the legacy forward.
            </h2>

            <p className="mt-4 max-w-2xl font-body text-base leading-8 text-text-muted">
              BRP Group’s leadership connects founding values with a modern
              business direction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {leadership.map((person) => (
              <article
                key={person.id}
                className="overflow-hidden rounded-3xl border border-grey bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={person.imageSrc}
                  alt={person.name}
                  className="h-72 w-full object-cover object-top"
                />

                <div className="p-7">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
                    {person.title}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy">
                    {person.name}
                  </h3>

                  <p className="mt-4 line-clamp-5 font-body text-sm leading-7 text-text-muted">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}