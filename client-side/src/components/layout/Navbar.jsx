import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',      path: '/'          },
  { label: 'History',   path: '/history'   },
  { label: 'Legacy',    path: '/legacy'    },
  { label: 'Ventures',  path: '/ventures'  },
  { label: 'Community', path: '/community' },
  { label: 'About Us',  path: '/about'     },
  { label: 'Career',    path: '/career'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Solid background after scrolling 60px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-30
        transition-all duration-300
        ${scrolled
          ? 'bg-charcoal/95 backdrop-blur-sm border-b border-charcoal-warm py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <nav className="section-padding container-wide flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="BRP Group — Home"
        >
          <div className="w-9 h-9 rounded-full border border-terra/40
                          flex items-center justify-center
                          group-hover:border-terra transition-colors duration-200">
            <span className="font-display text-terra text-sm font-medium">B</span>
          </div>
          <div>
            <span className={`font-display text-lg font-light
                             tracking-wide block leading-none
                             ${scrolled ? 'text-white' : 'text-text-primary'}`}>
              B.R.P. Group
            </span>
            <span className={`font-body text-[10px] tracking-[0.2em]
                             uppercase block
                             ${scrolled ? 'text-white/70' : 'text-text-muted'}`}>
              Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`
                    font-body text-sm px-4 py-2 rounded-lg
                    transition-all duration-200
                    ${isActive
                      ? scrolled
                        ? 'text-terra bg-terra/10'
                        : 'text-terra bg-terra/5'
                      : scrolled
                        ? 'text-white/70 hover:text-terra hover:bg-terra/5'
                        : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2
                     font-body text-sm font-medium
                     px-5 py-2.5 rounded-xl
                     transition-all duration-200
                     ${scrolled
                       ? 'bg-terra text-white border border-terra hover:bg-terra/90'
                       : 'bg-terra/10 text-terra border border-terra/30 hover:bg-terra hover:text-white'
                     }`}
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg
                     transition-colors duration-200
                     ${scrolled ? 'hover:bg-white/10' : 'hover:bg-white/5'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px transition-all duration-300
            ${scrolled ? 'bg-white' : 'bg-text-primary'}
            ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300
            ${scrolled ? 'bg-white' : 'bg-text-primary'}
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300
            ${scrolled ? 'bg-white' : 'bg-text-primary'}
            ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </nav>

      {/* Mobile drawer */}
      <div
        className={`
          lg:hidden fixed inset-0 top-0 bg-charcoal z-20
          transition-transform duration-300 ease-smooth
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full section-padding pt-24 pb-12">
          <ul className="flex flex-col gap-2 flex-1" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      block font-body text-base px-4 py-3 rounded-lg
                      transition-all duration-200
                      ${isActive
                        ? 'text-terra bg-terra/10'
                        : 'text-white/70 hover:text-terra hover:bg-terra/5'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            to="/contact"
            className="w-full
                       bg-terra text-white border border-terra
                       px-5 py-3 rounded-xl
                       text-center font-body text-sm font-medium
                       hover:bg-terra/90
                       transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}