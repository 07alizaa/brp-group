import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'

import Home from './pages/Home'
import Community from './pages/Community'
import Ventures from './pages/Ventures'
import History from './pages/History'
import Legacy from './pages/Legacy'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  // Reset body overflow and scroll position on page change
  useEffect(() => {
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-ivory text-text-primary">
      <Navbar />

      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/history" element={<History />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}