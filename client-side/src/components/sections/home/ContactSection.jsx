import { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export default function ContactSection() {
  const sectionRef = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
    // Clear form
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-gap section-padding bg-white border-t border-grey"
      aria-label="Contact BRP Group"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Headquarters & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-tight">
                Let's Build
                <span className="block font-semibold bg-gradient-to-r from-indigo to-navy bg-clip-text text-transparent mt-2">
                  Something Together
                </span>
              </h2>
              <p className="font-body text-lg text-charcoal/70 leading-relaxed">
                Reach out to discuss partnerships, careers, or venture capital inquiries with BRP Group's corporate leadership.
              </p>
            </div>
            
            <div className="space-y-5 mt-8 reveal reveal-delay-2">
              {[
                { label: 'Corporate Headquarters', value: 'Baluwatar, Kathmandu, Nepal 44600', sub: 'BRP Group Building' },
                { label: 'Executive Lines', value: '+977 01 4535691, +977 01 4516390', sub: 'Sun–Fri, 9:00 AM – 5:00 PM NPT' },
                { label: 'Email Correspondence', value: 'info@brpgroup.com.np', sub: 'General & Venture Inquiries' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 group">
                  <div className="w-1 bg-indigo/20 group-hover:bg-indigo rounded-full self-stretch transition-colors duration-300" />
                  <div>
                    <p className="font-body text-[10px] text-charcoal/60 uppercase tracking-widest mb-1 font-semibold">
                      {item.label}
                    </p>
                    <p className="font-body text-base font-semibold text-navy">
                      {item.value}
                    </p>
                    <p className="font-body text-[11px] text-charcoal/70 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Inquiry Form */}
          <div className="lg:col-span-7 reveal reveal-delay-2 bg-hero-mesh border-2 border-grey rounded-3xl p-8 sm:p-10">
            <h3 className="font-display font-semibold text-2xl text-navy mb-8">
              Executive Inquiry Form
            </h3>

            {submitted ? (
              <div className="bg-white border-2 border-indigo/30 rounded-2xl p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-indigo/15 text-indigo rounded-full flex items-center justify-center mx-auto text-2xl font-semibold">
                  ✓
                </div>
                <h4 className="font-display font-semibold text-2xl text-navy">Inquiry Sent Successfully</h4>
                <p className="font-body text-sm text-charcoal/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting BRP Group. Our executive office will review your inquiry and respond within 2 business days.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold text-indigo
                             px-6 py-2.5 rounded-xl
                             border-2 border-indigo
                             hover:bg-indigo/5 transition-all duration-300 mt-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <p className="text-indigo text-sm font-body font-medium bg-indigo/10 px-4 py-3 rounded-lg border border-indigo/20">
                    {error}
                  </p>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white border-2 border-grey rounded-xl px-4 py-3 text-navy font-body text-base placeholder:text-charcoal/50 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold mb-3">
                      Corporate Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white border-2 border-grey rounded-xl px-4 py-3 text-navy font-body text-base placeholder:text-charcoal/50 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold mb-3">
                    Contact Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+977 98..."
                    className="w-full bg-white border-2 border-grey rounded-xl px-4 py-3 text-navy font-body text-base placeholder:text-charcoal/50 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold mb-3">
                    Inquiry Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Provide details about your venture proposal, career intent, or corporate inquiry..."
                    className="w-full bg-white border-2 border-grey rounded-xl px-4 py-3 text-navy font-body text-base placeholder:text-charcoal/50 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 font-body text-base font-semibold text-white
                               bg-indigo border-2 border-indigo rounded-xl
                               hover:bg-navy hover:shadow-lg hover:shadow-indigo/30
                               transition-all duration-300"
                  >
                    Submit Corporate Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
