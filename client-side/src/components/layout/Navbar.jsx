import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'History', path: '/history' },
  { label: 'Legacy', path: '/legacy' },
  { label: 'Ventures', path: '/ventures' },
  { label: 'Community', path: '/community' },
  { label: 'About Us', path: '/about' },
  { label: 'Career', path: '/career' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > 20
  })

  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50 border-b border-grey
        transition-all duration-500
        before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full
        before:bg-indigo
        ${
          scrolled
            ? 'bg-white/95 shadow-lg shadow-navy/10 backdrop-blur-xl'
            : 'bg-white/90 shadow-sm backdrop-blur-md'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="BRP Group Home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo/15 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />

              <img
                src="/brp-nav-logo.webp"
                alt="BRP Group Logo"
                className="relative h-14 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul
            className="hidden items-center gap-1.5 rounded-full border border-grey bg-white/90 px-3 py-2.5 shadow-sm lg:flex"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      relative rounded-full px-5 py-2.5 text-[15px] font-semibold
                      transition-all duration-300
                      ${
                        isActive
                          ? 'bg-indigo text-white shadow-md shadow-indigo/20'
                          : 'text-charcoal/80 hover:bg-indigo/5 hover:text-indigo'
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
            className="
              hidden items-center gap-2 rounded-full border border-indigo
              bg-indigo px-7 py-3.5 text-[15px] font-semibold text-white
              shadow-md shadow-indigo/20 transition-all duration-300
              hover:-translate-y-0.5 hover:bg-navy hover:shadow-lg lg:inline-flex
            "
          >
            Contact Us
            <span>→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="
              flex h-12 w-12 items-center justify-center rounded-full border border-grey
              bg-white shadow-sm transition hover:bg-indigo/5 lg:hidden
            "
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`
                  block h-0.5 w-5 bg-navy transition-all duration-300
                  ${menuOpen ? 'translate-y-2 rotate-45' : ''}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5 bg-navy transition-all duration-300
                  ${menuOpen ? 'opacity-0' : ''}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5 bg-navy transition-all duration-300
                  ${menuOpen ? '-translate-y-2 -rotate-45' : ''}
                `}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${
            menuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed right-0 top-0 z-50 h-screen w-[82%] max-w-sm bg-ivory
          shadow-2xl transition-transform duration-500 lg:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <img
              src="/brp-nav-logo.webp"
              alt="BRP Group Logo"
              className="h-12 w-auto object-contain"
            />

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            Navigation
          </p>

          <ul className="flex flex-1 flex-col gap-2" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`
                      flex items-center justify-between rounded-2xl px-4 py-4
                      text-base font-semibold transition
                      ${
                        isActive
                          ? 'bg-indigo text-white'
                          : 'bg-white text-navy hover:bg-indigo/5 hover:text-indigo'
                      }
                    `}
                  >
                    {link.label}
                    <span>→</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 rounded-3xl bg-navy p-5 text-white">
            <p className="font-display text-2xl">Let’s connect</p>

            <p className="mt-2 font-body text-sm leading-6 text-white/70">
              Explore partnerships, ventures, and opportunities with BRP Group.
            </p>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}