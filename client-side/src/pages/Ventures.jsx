import { useState } from 'react'
import VentureDrawer from '../components/ui/VentureDrawer'
import SectionHeading from '../components/ui/SectionHeading'
import EcosystemMap from '../components/sections/ventures/EcosystemMap'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Ventures() {
  const [selectedVenture, setSelectedVenture] = useState(null)
  const sectionRef = useScrollReveal()

  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory" ref={sectionRef}>
      <div className="section-padding container-wide">
        <div className="reveal mb-12">
          <SectionHeading
            label="Our Ventures"
            title="A diversified portfolio across 4 sectors"
            subtitle="Click any venture to explore. Hover sectors to see their portfolio."
          />
        </div>
      </div>

      {/* Ecosystem Map */}
      <div className="reveal reveal-delay-2 w-full">
        <EcosystemMap onVentureSelect={setSelectedVenture} />
      </div>

      <VentureDrawer venture={selectedVenture} onClose={() => setSelectedVenture(null)} />
    </div>
  )
}