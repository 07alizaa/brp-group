import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import VenturesGrid from '../components/sections/ventures/EcosystemMap'
import VentureDrawer from '../components/ui/VentureDrawer'
import SectionHeading from '../components/ui/SectionHeading'

// Ventures page owns the drawer state.
// VenturesGrid handles filtering and card rendering.
// VentureDrawer renders the detail panel.

export default function Ventures() {
  const [selectedVenture, setSelectedVenture] = useState(null)
  const sectionRef = useScrollReveal()

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-ivory pt-32 pb-24 section-padding"
    >
      <div className="container-wide">

        {/* Page heading */}
        <div className="reveal mb-4">
          <SectionHeading
            label="Our Portfolio"
            title="Every venture. One vision."
            subtitle="Seven businesses across four sectors — all built on the same
                      foundation of trust, innovation, and purpose."
          />
        </div>

        {/* Grid + filters */}
        <div className="reveal reveal-delay-2">
          <VenturesGrid onVentureSelect={setSelectedVenture} />
        </div>

      </div>

      {/* Drawer — rendered at page level so it overlays everything */}
      <VentureDrawer
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </div>
  )
}