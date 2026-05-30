export default function Contact() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="section-padding container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-gold/40 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-indigo">
              Contact BRP Group
            </p>

            <h1 className="font-display text-5xl font-light leading-tight text-navy md:text-display-xl">
              Let’s build something
              <span className="block font-semibold text-indigo">
                meaningful together.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-text-muted md:text-lg">
              Reach out to BRP Group for business inquiries, partnerships,
              career opportunities, or general information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact Information */}
            <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
              <div className="mb-8">
                <img
                  src="/brp-nav-logo.webp"
                  alt="BRP Group Logo"
                  className="h-16 w-auto rounded-2xl bg-white px-4 py-2 object-contain"
                />
              </div>

              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Get in Touch
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
                Contact Information
              </h2>

              <p className="mt-4 font-body text-sm leading-7 text-white/70">
                We welcome inquiries related to ventures, partnerships, careers,
                and community-focused initiatives.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Email
                  </p>
                  <a
                    href="mailto:info@brpgroup.com.np"
                    className="font-body text-base font-medium text-white"
                  >
                    info@brpgroup.com.np
                  </a>
                </div>

                <div>
                  <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Phone
                  </p>
                  <p className="font-body text-base leading-7 text-white/80">
                    +977 01 4535691
                  </p>
                  <p className="font-body text-base leading-7 text-white/80">
                    +977 01 4516390
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Address
                  </p>
                  <p className="font-body text-base leading-7 text-white/80">
                    Baluwatar, Kathmandu
                  </p>
                  <p className="font-body text-base leading-7 text-white/80">
                    Nepal 44600
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-grey bg-white p-8 shadow-sm md:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                Send a Message
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy">
                Share your inquiry with us.
              </h2>

              <p className="mt-4 font-body text-sm leading-7 text-text-muted">
                Fill out the form below and the BRP Group team will get back to
                you as soon as possible.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-body text-sm font-medium text-navy">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-grey bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-indigo focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-body text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-grey bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-indigo focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-navy">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is your message about?"
                    className="w-full rounded-2xl border border-grey bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-indigo focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-2xl border border-grey bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-indigo focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-indigo px-6 py-4 font-body text-sm font-semibold text-white"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* Small bottom note */}
          <div className="mt-8 rounded-3xl border border-grey bg-white p-6 text-center">
            <p className="font-body text-sm leading-7 text-text-muted">
              For direct communication, you may also email us at{' '}
              <span className="font-semibold text-indigo">
                info@brpgroup.com.np
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}