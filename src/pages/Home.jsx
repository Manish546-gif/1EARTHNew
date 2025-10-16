import React from "react";

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import LetterParallax from '../components/home/LetterParallax'
import CraftVisionSection from '../components/services/CraftVisionSection'
import HomeLanding from '../components/home/HomeLanding'
import OverDesign from '../components/home/OverDesign.jsx'
import ParallaxGallery from '../components/home/ParallaxGallery.jsx'
import ImgHarmony from '../components/home/ImgHarmony.jsx'



const Home = () => {
  return (
    <div className="bg-[#FBF0DA]">
      <Navbar />
      <HomeLanding />
      <ParallaxGallery />
      <LetterParallax />
      <OverDesign />
      <ImgHarmony />
      <CraftVisionSection />
      <Footer />

    </div>
  )
}

export default Home;
