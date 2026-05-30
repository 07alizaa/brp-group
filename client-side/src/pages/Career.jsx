import { Link } from 'react-router-dom'

const careerStats = [
  {
    value: '100+',
    label: 'People across the group',
  },
  {
    value: '4+',
    label: 'Business sectors',
  },
  {
    value: 'Growth',
    label: 'Learning-focused culture',
  },
]

const reasons = [
  {
    title: 'Work across meaningful sectors',
    text: 'Be part of ventures connected to education, technology, finance, real estate, travel, and community development.',
  },
  {
    title: 'Grow with a long-term group',
    text: 'BRP Group values discipline, responsibility, and professional growth across its business ecosystem.',
  },
  {
    title: 'Collaborate with purpose',
    text: 'Work with teams that care about practical results, people, and long-term value.',
  },
  {
    title: 'Contribute to real impact',
    text: 'Join projects and initiatives that support businesses, communities, and future opportunities.',
  },
]

const opportunities = [
  'Business Development',
  'Technology & Digital Solutions',
  'Education & Operations',
  'Finance & Investment',
]

export default function Career() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
                Careers at BRP Group
              </p>

              <h1 className="max-w-4xl font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
                Build your career
                <span className="block font-semibold text-indigo">
                  with purpose.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
                Join a growing business group working across education,
                technology, finance, investment, real estate, travel, and
                community-focused development.
              </p>

              <p className="mt-5 max-w-2xl font-body text-base leading-8 text-text-muted">
                At BRP Group, careers are shaped by learning, responsibility,
                teamwork, and the opportunity to contribute to meaningful work.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#open-positions"
                  className="inline-flex items-center justify-center rounded-full bg-indigo px-8 py-3 font-body text-sm font-semibold text-white transition hover:bg-navy"
                >
                  View Open Positions →
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-indigo bg-white px-8 py-3 font-body text-sm font-semibold text-indigo transition hover:bg-indigo/5"
                >
                  Contact HR →
                </Link>
              </div>
            </div>

            {/* Right panel */}
            <div className="rounded-3xl border border-grey bg-white p-6 shadow-sm md:p-8">
              <div className="rounded-3xl bg-navy p-8 text-white">
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Why BRP Group
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">
                  A workplace connected to people, ventures, and growth.
                </h2>

                <p className="mt-5 font-body text-sm leading-7 text-white/70">
                  BRP Group offers opportunities to learn across a diversified
                  ecosystem while contributing to work that supports long-term
                  business and community value.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {careerStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-grey bg-ivory p-5"
                  >
                    <p className="font-display text-3xl font-semibold text-indigo">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-body text-xs leading-5 text-text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="pb-20">
        <div className="section-padding container-wide">
          <div className="mb-12 max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Work Culture
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Why work with us?
            </h2>

            <p className="mt-4 font-body text-base leading-8 text-text-muted">
              BRP Group values people who are willing to learn, take
              responsibility, and contribute to work that matters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-grey bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo/30 hover:shadow-md"
              >
                <p className="font-display text-3xl font-semibold text-indigo">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                  {reason.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity areas */}
      <section id="open-positions" className="pb-20">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-grey bg-white p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Open Opportunities
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy">
                Explore where you can grow.
              </h2>

              <p className="mt-5 font-body text-sm leading-8 text-text-muted">
                Career opportunities may open across different parts of BRP
                Group’s ecosystem. Interested candidates can reach out to learn
                more about current openings.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {opportunities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-grey bg-ivory p-6"
                >
                  <span className="mb-4 block h-2 w-2 rounded-full bg-gold" />

                  <h3 className="font-display text-2xl font-semibold text-navy">
                    {item}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                    Opportunities related to {item.toLowerCase()} may be
                    available across BRP Group ventures.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="rounded-3xl bg-navy p-8 text-center text-white md:p-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Join BRP Group
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">
              Ready to become part of a growing business ecosystem?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-white/70">
              Share your interest with BRP Group and explore opportunities to
              contribute, learn, and grow.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-indigo px-8 py-3 font-body text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Send Your Inquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}