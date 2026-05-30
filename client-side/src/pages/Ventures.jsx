import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import VenturesGrid from '../components/sections/ventures/EcosystemMap'
import VentureDrawer from '../components/ui/VentureDrawer'

export default function Ventures() {
  const [selectedVenture, setSelectedVenture] = useState(null)
  const sectionRef = useScrollReveal()

  return (
    <main
      ref={sectionRef}
      className="min-h-screen bg-ivory pt-32 pb-24 section-padding"
    >
      <div className="container-wide">
        <div className="reveal reveal-delay-2">
          <VenturesGrid onVentureSelect={setSelectedVenture} />
        </div>
      </div>

      <VentureDrawer
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </main>
  )
}