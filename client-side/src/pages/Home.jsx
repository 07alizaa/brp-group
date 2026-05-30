import Hero from '../components/sections/home/Hero'
import StatsBar from '../components/sections/home/StatsBar'
import VenturesEcosystem from '../components/sections/home/VenturesEcosystem'
import AboutSnippet from '../components/sections/home/AboutSnippet'
import LegacySnippet from '../components/sections/home/LegacySnippet'
import CommunitySnippet from '../components/sections/home/CommunitySnippet'
import ContactSection from '../components/sections/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <VenturesEcosystem />
      <StatsBar />
      <AboutSnippet />
      <LegacySnippet />
      <CommunitySnippet />
      <ContactSection />
    </>
  )
}