import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Projects from './pages/ProjectsSection';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './components/common/Menu';
import Projectsolo from './pages/Projectsolo';
import Services from './pages/Services';
const App = () => {


  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projectsolo" element={<Projectsolo />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
