import { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'

export default function ContactSection() {
  const sectionRef = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission handled here — connect to backend or email service
    console.log('Form submitted:', form)
  }

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding bg-white"
      aria-label="Contact"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <div>
            <div className="reveal">
              <SectionHeading
                label="Get in Touch"
                title="Let's build something together."
              />
            </div>
            <div className="space-y-6 mt-8 reveal reveal-delay-2">
              {[
                { label: 'Email',   value: 'info@brpgroup.com.np' },
                { label: 'Phone',   value: '+977 01 4535691, +977 01 4516390' },
                { label: 'Address', value: 'Baluwatar, Kathmandu, Nepal 44600' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-px bg-terra/30 self-stretch" />
                  <div>
                    <p className="font-body text-xs text-text-muted/60
                                 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-text-primary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name"
                         className="block font-body text-xs text-text-muted
                                    uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email"
                         className="block font-body text-xs text-text-muted
                                    uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone"
                       className="block font-body text-xs text-text-muted
                                  uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+977 ..."
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message"
                       className="block font-body text-xs text-text-muted
                                  uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and your business..."
                  className="form-input resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}