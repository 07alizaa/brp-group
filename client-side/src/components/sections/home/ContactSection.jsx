import { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function ContactSection() {
  const sectionRef = useScrollReveal()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }

    setError('')
    console.log('BRP Contact Form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const contactDetails = [
    {
      label: 'Corporate Headquarters',
      value: 'Baluwatar, Kathmandu, Nepal 44600',
      sub: 'BRP Group Building',
    },
    {
      label: 'Executive Lines',
      value: '+977 01 4535691, +977 01 4516390',
      sub: 'Sun–Fri, 9:00 AM – 5:00 PM NPT',
    },
    {
      label: 'Email Correspondence',
      value: 'info@brpgroup.com.np',
      sub: 'General & Venture Inquiries',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-gap section-padding bg-ivory border-t border-grey"
      aria-label="Contact BRP Group"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border-2 border-navy bg-white p-6 shadow-sm md:p-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="reveal rounded-3xl bg-navy p-8 text-white md:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Get in Touch
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Let’s build
                <span className="block text-gold">something together.</span>
              </h2>

              <p className="mt-5 font-body text-sm leading-7 text-white/70">
                Reach out to discuss partnerships, careers, venture proposals,
                or corporate inquiries with BRP Group.
              </p>

              <div className="mt-9 space-y-6">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="group flex gap-4 rounded-2xl border border-white/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-gold/40"
                  >
                    <div className="w-1 rounded-full bg-gold self-stretch flex-shrink-0" />

                    <div>
                      <p className="mb-1 font-body text-[10px] font-bold uppercase tracking-widest text-gold">
                        {item.label}
                      </p>

                      <p className="font-body text-sm font-semibold leading-6 text-white">
                        {item.value}
                      </p>

                      <p className="mt-1 font-body text-[11px] leading-5 text-white/55">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="reveal reveal-delay-2 rounded-3xl border border-grey bg-ivory p-6 md:p-8">
              <div className="mb-8">
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
                  Executive Inquiry
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold text-navy">
                  Send your message.
                </h3>

                <p className="mt-3 font-body text-sm leading-7 text-text-muted">
                  Share your inquiry and the BRP Group team will review it.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-3xl border border-indigo/20 bg-white p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo text-2xl font-semibold text-white">
                    ✓
                  </div>

                  <h4 className="mt-5 font-display text-2xl font-semibold text-navy">
                    Inquiry Sent Successfully
                  </h4>

                  <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-7 text-text-muted">
                    Thank you for contacting BRP Group. Our office will review
                    your inquiry and respond soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex rounded-full border border-indigo px-6 py-3 font-body text-sm font-semibold text-indigo transition duration-300 hover:bg-indigo hover:text-white"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <p className="rounded-2xl border border-indigo/20 bg-indigo/10 px-4 py-3 font-body text-sm font-medium text-indigo">
                      {error}
                    </p>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block font-body text-[10px] font-bold uppercase tracking-widest text-text-faint"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block font-body text-[10px] font-bold uppercase tracking-widest text-text-faint"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="form-input bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block font-body text-[10px] font-bold uppercase tracking-widest text-text-faint"
                    >
                      Contact Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+977 98..."
                      className="form-input bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block font-body text-[10px] font-bold uppercase tracking-widest text-text-faint"
                    >
                      Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="form-input resize-none bg-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-indigo px-6 py-4 font-body text-sm font-semibold text-white transition duration-300 hover:bg-navy"
                  >
                    Submit Corporate Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}