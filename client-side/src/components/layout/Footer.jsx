import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'About Us',  path: '/about'     },
  { label: 'History',   path: '/history'   },
  { label: 'Legacy',    path: '/legacy'    },
  { label: 'Ventures',  path: '/ventures'  },
  { label: 'Community', path: '/community' },
  { label: 'Career',    path: '/career'    },
  { label: 'Contact',   path: '/contact'   },
]

const contactInfo = {
  email:   'info@brpgroup.com.np',
  phone:   '+977 01 4535691, +977 01 4516390',
  address: 'Baluwatar, Kathmandu, Nepal 44600',
}

const socialLinks = [
  { label: 'Facebook',  href: '#', icon: 'F' },
  { label: 'LinkedIn',  href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: 'IG' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-indigo/20">
      <div className="section-padding container-wide">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-full border-2 border-gold/40
                              flex items-center justify-center bg-indigo/20">
                <span className="font-display text-gold text-base font-semibold">B</span>
              </div>
              <div>
                <span className="font-display text-white text-lg font-light
                                 tracking-wide block leading-none">
                  B.R.P. Group
                </span>
                <span className="font-body text-white/60 text-[10px] tracking-[0.2em]
                                 uppercase block">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
              Building Nepal's future through ventures, education, innovation, and impact.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20
                             flex items-center justify-center
                             text-white/60 text-xs font-body font-medium
                             hover:border-gold hover:text-gold hover:bg-gold/10
                             transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em]
                           uppercase text-gold mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/70
                               hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em]
                           uppercase text-gold mb-6">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-body text-xs text-white/50
                               uppercase tracking-wider mb-2 font-semibold">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body text-sm text-white
                             hover:text-gold transition-colors duration-200 font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="font-body text-xs text-white/50
                               uppercase tracking-wider mb-2 font-semibold">Phone</p>
                <p className="font-body text-sm text-white/90">
                  {contactInfo.phone}
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-white/50
                               uppercase tracking-wider mb-2 font-semibold">Address</p>
                <p className="font-body text-sm text-white/90">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-indigo/20 py-6
                        flex flex-col sm:flex-row items-center
                        justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © 2025 B.R.P. Group Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/60">
            Baluwatar, Kathmandu, Nepal
          </p>
        </div>

      </div>
    </footer>
  )
}