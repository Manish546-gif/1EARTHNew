import React from 'react'
import CraftVisionSection from '../components/services/CraftVisionSection'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceLanding from '../components/services/ServiceLanding'
import OurProcess2 from '../components/services/OurProcess2'
const Services = () => {
  return (
    <div className='bg-[#FBF0DA]'>
        <Navbar />
        <ServiceLanding />
        <OurProcess2/>
        <CraftVisionSection />
        <Footer />
    </div>
  )
}

export default Services