import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'History', path: '/history' },
  { label: 'Legacy', path: '/legacy' },
  { label: 'Ventures', path: '/ventures' },
  { label: 'Community', path: '/community' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
]

const ventureLinks = [
  { label: 'Education', path: '/ventures' },
  { label: 'Technology', path: '/ventures' },
  { label: 'Finance & Investment', path: '/ventures' },
  { label: 'Real Estate & Travel', path: '/ventures' },
]

const contactInfo = {
  email: 'info@brpgroup.com.np',
  phone: '+977 01 4535691, +977 01 4516390',
  address: 'Baluwatar, Kathmandu, Nepal 44600',
}

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'F' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: 'IG' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-padding container-wide">
        {/* Top simple CTA */}
        <div className="border-b border-white/10 py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Connect With BRP Group
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Building ventures with legacy, trust, and purpose.
              </h2>

              <p className="mt-4 max-w-xl font-body text-sm leading-7 text-white/65">
                Explore partnerships, career opportunities, and business
                connections with BRP Group.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-indigo px-7 py-3 font-body text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-6 inline-block">
              <img
                src="/brp-nav-logo.webp"
                alt="BRP Group Logo"
                className="h-14 w-auto rounded-xl bg-white px-4 py-2 object-contain"
              />
            </Link>

            <p className="max-w-sm font-body text-sm leading-7 text-white/65">
              BRP Group is a diversified enterprise creating long-term value
              through ventures, education, innovation, and community impact.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 font-body text-xs font-semibold text-white/70 transition hover:border-gold hover:text-gold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Navigation
            </h4>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/65 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Business Verticals
            </h4>

            <ul className="space-y-3">
              {ventureLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/65 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Get in Touch
            </h4>

            <div className="space-y-5">
              <div>
                <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body text-sm text-white transition hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Phone
                </p>
                <p className="font-body text-sm leading-7 text-white/70">
                  {contactInfo.phone}
                </p>
              </div>

              <div>
                <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Address
                </p>
                <p className="font-body text-sm leading-7 text-white/70">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="font-body text-xs text-white/45">
            © 2025 B.R.P. Group Pvt. Ltd. All rights reserved.
          </p>

          <p className="font-body text-xs text-white/45">
            Baluwatar, Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}