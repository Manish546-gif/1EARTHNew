import React from 'react'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import LetterParallax from '../components/home/LetterParallax'
import CraftVisionSection from '../components/services/CraftVisionSection'
import HomeLanding from '../components/home/HomeLanding'
import DesignHarmony from '../components/home/DesignHarmony'
import OverDesign from '../components/home/OverDesign.jsx'



const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HomeLanding />
      <LetterParallax />
      <OverDesign />
      <DesignHarmony />
      <CraftVisionSection />
      <Footer />  

    </div>
  )
}

export default Home;