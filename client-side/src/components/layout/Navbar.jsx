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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

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

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
  className={`
    fixed left-0 right-0 top-0 z-50 border-b border-[#E6E6E6]
    transition-all duration-500
    before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full
    before:bg-gradient-to-r before:from-[#10264A] before:via-[#2F2B8F] before:to-[#D8C64A]
    ${
      scrolled
        ? 'bg-white/95 shadow-[0_10px_35px_rgba(16,38,74,0.12)] backdrop-blur-xl'
        : 'bg-white/92 shadow-[0_4px_20px_rgba(16,38,74,0.06)] backdrop-blur-md'
    }
  `}
>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="BRP Group Home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#2F2B8F]/20 blur-md opacity-0 transition duration-300 group-hover:opacity-100" />
              <img
                src="/brp-nav-logo.webp"
                alt="BRP Group Logo"
                className="relative h-11 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul
            className="hidden items-center gap-1 rounded-full border border-[#E6E6E6] bg-white/80 px-2 py-2 shadow-sm lg:flex"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? 'bg-[#2F2B8F] text-white shadow-md shadow-[#2F2B8F]/20'
                          : 'text-[#1E1E1E]/75 hover:bg-[#2F2B8F]/7 hover:text-[#2F2B8F]'
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
              hidden items-center gap-2 rounded-full border border-[#2F2B8F]
              bg-[#2F2B8F] px-6 py-3 text-sm font-semibold text-white
              shadow-md shadow-[#2F2B8F]/20 transition-all duration-300
              hover:-translate-y-0.5 hover:bg-[#10264A] hover:shadow-lg lg:inline-flex
            "
          >
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="
              flex h-11 w-11 items-center justify-center rounded-full border border-[#E6E6E6]
              bg-white shadow-sm transition hover:bg-[#2F2B8F]/5 lg:hidden
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`
                  block h-0.5 w-5 bg-[#10264A] transition-all duration-300
                  ${menuOpen ? 'translate-y-2 rotate-45' : ''}
                `}
              />
              <span
                className={`
                  block h-0.5 w-5 bg-[#10264A] transition-all duration-300
                  ${menuOpen ? 'opacity-0' : ''}
                `}
              />
              <span
                className={`
                  block h-0.5 w-5 bg-[#10264A] transition-all duration-300
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
          fixed inset-0 z-40 bg-[#10264A]/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed right-0 top-0 z-50 h-screen w-[82%] max-w-sm bg-[#FAFAF8]
          shadow-2xl transition-transform duration-500 lg:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <img
              src="/brp-nav-logo.webp"
              alt="BRP Group Logo"
              className="h-10 w-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10264A] shadow-sm"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#D8C64A]">
            Navigation
          </p>

          <ul className="flex flex-1 flex-col gap-2" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition
                      ${
                        isActive
                          ? 'bg-[#2F2B8F] text-white'
                          : 'bg-white text-[#10264A] hover:bg-[#2F2B8F]/7 hover:text-[#2F2B8F]'
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

          <div className="mt-6 rounded-3xl bg-[#10264A] p-5 text-white">
            <p className="font-serif text-2xl">Let’s connect</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Explore partnerships, ventures, and opportunities with BRP Group.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#10264A] transition hover:bg-[#D8C64A]"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}