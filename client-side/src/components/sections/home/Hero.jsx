import { Link } from 'react-router-dom'
import Button from '../../ui/Button'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center hero-warm noise-overlay overflow-hidden"
      aria-label="Hero"
    >

      {/* Decorative copper orb — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-padding container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="w-8 h-px bg-terra" />
            <span className="font-body text-xs font-medium tracking-[0.25em]
                             uppercase text-terra">
              Est. 1980 · Kathmandu, Nepal
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display font-light text-text-primary text-balance
                       leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            <span className="animate-fade-up block"
                  style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              45 Years of Legacy.
            </span>
            <span className="animate-fade-up block text-terra italic"
                  style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}>
              A New Generation
            </span>
            <span className="animate-fade-up block"
                  style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              Building Tomorrow.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg text-text-muted leading-relaxed mb-10
                       max-w-xl animate-fade-up"
            style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
          >
            A diversified business group spanning technology, real estate,
            education, and healthcare — rooted in Nepal, built for tomorrow.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Button as={Link} to="/ventures" variant="primary" size="lg">
              Explore Ventures
              <span aria-hidden="true">→</span>
            </Button>
            <Button as={Link} to="/about" variant="ghost" size="lg">
              Our Story
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-2 animate-fade-in"
           style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
        <span className="font-body text-xs text-text-muted/40 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-terra/30 to-transparent" />
      </div>

    </section>
  )
}