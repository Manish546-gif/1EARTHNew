import React from 'react'

const SoloHome = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url()` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-end items-start min-h-screen text-white p-8">
        <h1 className="text-4xl md:text-7xl uppercase w-40 mb-2 leading-tight">project name</h1>
        <p className="text-xl md:text-4xl tracking-wider">project location</p>
      </div>
    </div>
  )
}

export default SoloHome
