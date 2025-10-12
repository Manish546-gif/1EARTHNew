import React from 'react'
import CraftVisionSection from '../components/services/CraftVisionSection'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceLanding from '../components/services/ServiceLanding'
const Services = () => {
  return (
    <div>
        <Navbar />
        <ServiceLanding />
        <CraftVisionSection />
        <Footer />
    </div>
  )
}

export default Services