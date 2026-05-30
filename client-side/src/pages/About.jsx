import { Link } from 'react-router-dom'
import { leadership } from '../data/leadership'

const values = [
  {
    title: 'Trust',
    text: 'We build long-term relationships through responsibility, honesty, and consistent work.',
  },
  {
    title: 'Purpose',
    text: 'We believe business should create value for people, communities, and future generations.',
  },
  {
    title: 'Growth',
    text: 'We support practical progress through ventures, partnerships, and new opportunities.',
  },
]

const focusAreas = [
  'Education',
  'Technology',
  'Finance & Investment',
  'Real Estate & Travel',
]

export default function About() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      {/* Intro Hero - different from homepage */}
      <section className="pt-32 pb-16">
        <div className="section-padding container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
              About BRP Group
            </p>

            <h1 className="font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
              More than a business group,
              <span className="block font-semibold text-indigo">
                a legacy of responsibility.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
              BRP Group brings together ventures, people, and purpose across
              education, technology, finance, real estate, travel, and community
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Story Panel */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-grey bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            {/* Text */}
            <div className="p-8 md:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Our Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy">
                Built through trust, people, and long-term purpose.
              </h2>

              <p className="mt-5 font-body text-base leading-8 text-text-muted">
                B.R.P. Group is a diversified enterprise that works across
                important sectors of Nepal’s economy. The group’s work is shaped
                by a belief that business should not only grow, but also create
                value for people and society.
              </p>

              <p className="mt-5 font-body text-base leading-8 text-text-muted">
                From education and technology to investment, real estate,
                travel, and community-focused work, BRP Group continues to build
                with a long-term view of responsibility and progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-grey bg-ivory px-4 py-2 font-body text-xs font-semibold text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual strip */}
            <div className="grid grid-cols-2 gap-3 bg-ivory p-4">
              <img
                src="/Communityimage-1.webp"
                alt="BRP Group community work"
                className="h-full min-h-[300px] rounded-2xl object-cover"
              />

              <div className="grid gap-3">
                <img
                  src="/Educationimage-5.png"
                  alt="BRP Group education initiative"
                  className="h-full rounded-2xl object-cover"
                />

                <img
                  src="/legacy-image.webp"
                  alt="BRP Group leadership legacy"
                  className="h-full rounded-2xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Statement */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="rounded-3xl bg-navy p-8 text-white md:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  What We Stand For
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  Business with a wider responsibility.
                </h2>
              </div>

              <p className="font-body text-sm leading-8 text-white/70">
                BRP Group understands that its responsibility is not limited to
                its members or businesses. Its ambition is to make an impact in
                society by supporting education, encouraging innovation, and
                creating opportunities through responsible ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-grey bg-white p-8 shadow-sm md:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Our Vision
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy">
                Investing in people to create a better tomorrow.
              </h2>

              <p className="mt-5 font-body text-sm leading-8 text-text-muted">
                BRP Group’s vision is to create sustainable value through
                meaningful partnerships, responsible ventures, and long-term
                contribution to Nepal’s future.
              </p>
            </div>

            <div className="rounded-3xl border border-grey bg-white p-8 shadow-sm md:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Our Mission
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy">
                Promoting ideas that support growth across sectors.
              </h2>

              <p className="mt-5 font-body text-sm leading-8 text-text-muted">
                The group works to support ventures and initiatives that
                strengthen education, technology, investment, business, and
                community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="mb-12 max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Core Values
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              The principles behind the group.
            </h2>

            <p className="mt-4 font-body text-base leading-8 text-text-muted">
              These values shape how BRP Group builds ventures, supports
              people, and carries its legacy forward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-3xl border border-grey bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-display text-4xl font-semibold text-indigo">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                  {value.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="rounded-3xl border border-grey bg-white p-8 shadow-sm md:p-12">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                  Leadership
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
                  Guided by people and purpose.
                </h2>

                <p className="mt-4 max-w-2xl font-body text-base leading-8 text-text-muted">
                  BRP Group’s leadership connects founding values with modern
                  business direction.
                </p>
              </div>

              <Link
                to="/legacy"
                className="inline-flex w-fit rounded-full border border-indigo px-7 py-3 font-body text-sm font-semibold text-indigo transition hover:bg-indigo/5"
              >
                Meet the Team →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {leadership.map((person) => (
                <article
                  key={person.id}
                  className="overflow-hidden rounded-3xl border border-grey bg-ivory"
                >
                  <img
                    src={person.imageSrc}
                    alt={person.name}
                    className="h-72 w-full object-cover object-top"
                  />

                  <div className="p-6">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                      {person.title}
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy">
                      {person.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}