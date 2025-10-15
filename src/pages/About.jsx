import React from 'react'
import Navbar from '../components/common/Navbar'
import AboutLanding from '../components/about/AboutLanding'
import OurTeam from '../components/about/OurTeam'
import OurProcess from '../components/about/OurProcess'
import Footer from '../components/common/Footer'
import Line from '../components/common/Line'
import Origin from '../components/about/Origin'
import WhyChoose from '../components/about/WhyChoose'

const About = () => {
  return (
    <div className='bg-[#FBF0DA]'>
      <Navbar />
      <AboutLanding />
      <Origin />
      <OurTeam/>
      <WhyChoose/>
      <Line />
      <OurProcess />
      <Footer />
    </div>
  )
}

export default About