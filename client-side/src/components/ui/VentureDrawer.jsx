import { useEffect } from 'react'
import Button from './Button'

// VentureDrawer — slides up from bottom when a venture is clicked.
// venture: the selected venture object (from ventures.js)
// onClose: function to clear selection in parent state
//
// Accessibility: traps focus, closes on Escape key,
// closes when overlay is clicked.

export default function VentureDrawer({ venture, onClose }) {
  const isOpen = !!venture

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={venture ? `${venture.name} details` : 'Venture details'}
        className={`drawer-panel ${isOpen ? 'open' : ''}`}
      >
        {venture && (
          <div className="p-6 md:p-10 max-w-3xl mx-auto">

            {/* Drag handle */}
            <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-8" />

            {/* Sector badge */}
            <div className="mb-4">
              <span
                className="sector-badge"
                style={{
                  backgroundColor: `${venture.color}15`,
                  color: venture.color,
                }}
              >
                {venture.sectorLabel}
              </span>
            </div>

            {/* Name */}
            <h2 className="font-display font-light text-display-md text-text-primary
                           leading-tight mb-2">
              {venture.name}
            </h2>

            {/* Tagline */}
            <p className="font-body text-sm font-medium text-terra mb-6">
              {venture.tagline}
            </p>

            {/* Copper divider */}
            <div className="terra-divider" />

            {/* Full description */}
            <p className="font-body text-base text-text-muted leading-relaxed mb-6">
              {venture.description}
            </p>

            {/* Highlight */}
            <p className="font-body text-xs tracking-widest uppercase text-text-muted/60">
              {venture.highlight}
            </p>

            {/* Close button */}
            <div className="mt-8">
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </div>

          </div>
        )}
      </div>
    </>
  )
}