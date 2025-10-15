import React from 'react'
import projectimg from '../../assets/projectland.png';


const SoloHome = () => {
  return (
    <div 
      className="min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat relative"
    >
       <img
  data-scroll
  data-scroll-speed="-0.2"
  src={projectimg}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-end items-start min-h-screen text-white p-8">
        <h1 className="text-4xl md:text-7xl uppercase w-40 mb-2 leading-tight">project name</h1>
        <p className="text-xl md:text-4xl tracking-wider">project location</p>
      </div>
    </div>
  )
}

export default SoloHome
