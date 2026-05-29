import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/home/Hero'
import VenturesEcosystem from './components/sections/home/VenturesEcosystem'
import StatsBar from './components/sections/home/StatsBar'
import AboutSnippet from './components/sections/home/AboutSnippet'
import CommunitySnippet from './components/sections/home/CommunitySnippet'
import LegacySnippet from './components/sections/home/LegacySnippet'
import ContactSection from './components/sections/home/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary">
      <Navbar />

      <main>
        <Hero />
        <VenturesEcosystem />
        <StatsBar />
        <AboutSnippet />
        <CommunitySnippet />
        <LegacySnippet />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}