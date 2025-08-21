import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Family from './components/Family'
import Controversies from './components/Controversies'
import Fashion from './components/Fashion'
import Legacy from './components/Legacy'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Timeline />
        <Achievements />
        <Family />
        <Controversies />
        <Fashion />
        <Legacy />
      </main>
      <Footer />
    </div>
  )
}

export default App 