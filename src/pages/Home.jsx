import React from 'react'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import About from './About'
import LetterParallax from '../components/home/LetterParallax'
import CraftVisionSection from '../components/services/CraftVisionSection'



const Home = () => {
  return (
    <div className="h-screen w-full bg-amber-300 pt-430">
      <Navbar />
      <About />
      <LetterParallax />
      <CraftVisionSection />
      <Footer />        
    </div>
  )
}

export default Home
