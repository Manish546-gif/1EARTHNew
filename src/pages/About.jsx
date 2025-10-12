import React from 'react'
import Navbar from '../components/common/Navbar'
import AboutLanding from '../components/about/AboutLanding'
import OurTeam from '../components/about/OurTeam'
import OurProcess from '../components/about/OurProcess'
import Footer from '../components/common/Footer'
import Line from '../components/common/Line'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <OurTeam/>
      <Line />
      <OurProcess />
      <Footer />
    </div>
  )
}

export default About