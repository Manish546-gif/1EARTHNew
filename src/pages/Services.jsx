import React from "react";

import Navbar from '../components/common/Navbar'
import CraftVisionSection from '../components/services/CraftVisionSection'
import Footer from '../components/common/Footer'
import ServiceLanding from '../components/services/ServiceLanding'
import OurProcess2 from '../components/services/OurProcess2'
import LetterParallaxService from '../components/services/LetterParallaxService'
import ParallaxGallery from '../components/home/ParallaxGallery'
import Line from '../components/common/Line'

const Services = () => {
  return (
    <div className="bg-[#FBF0DA]">
        <Navbar />
        <ServiceLanding />
        <ParallaxGallery />
        <LetterParallaxService />
        <Line />
        <OurProcess2/>
        <CraftVisionSection />
        <Footer />
    </div>
  )
}

export default Services
