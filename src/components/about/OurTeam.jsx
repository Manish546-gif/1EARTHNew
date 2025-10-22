import { motion } from "framer-motion";
import React from "react";
import img1 from '../../assets/team1.png'
import img2 from '../../assets/team2.png'
import Line from "../common/Line";

export default function OurTeam() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-8xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="flex-shrink-0 md:w-3/11 ">
            <div className="text-center md:mt-30 lg:text-left">
              <h2 className="text-6xl lg:text-7xl font-serif overflow-hidden text-black tracking-wider leading-tight">
                <motion.span initial={{y:10, opacity:1}}
                whileInView={{y:0}}
                transition={{delay:0.3, duration:1.2 ,ease: "circOut"}} className="block">OUR</motion.span>
              </h2>
              <h2 className="text-6xl lg:text-7xl font-serif overflow-hidden text-black tracking-wider leading-tight">
              <motion.span initial={{y:10, opacity:1}}
              whileInView={{y:0}}
              transition={{delay:0.3 ,duration:1.2 ,ease: "circOut"}} className="block">TEAM</motion.span>
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-22 lg:gap-26">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-64 bg-gray-300 h-64 lg:w-102 lg:h-102 mb-6 overflow-hidden">
                <img src={img1} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="text-center lg:text-left w-full">
                <h3 className="text-xl lg:text-2xl  font-serif text-black uppercase tracking-wide mb-2">
                  SHREYASH TARAWADE
                </h3>
                <p className="text-sm lg:text-base  font-sans text-black uppercase tracking-wide">
                  MANAGING DIRECTOR
                </p>
                <Line/>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div  className="w-64 bg-gray-300 h-64 lg:w-102 lg:h-102 mb-6 overflow-hidden">
                <img src={img2} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="text-center lg:text-left w-full">
                <h3 className="text-xl lg:text-2xl font-serif text-black uppercase tracking-wide mb-2">
                  SONAL JADHAV
                </h3>

                <p className="text-sm lg:text-base font-sans text-black uppercase tracking-wide">
                  CHIEF ARCHITECT
                </p>
               <Line/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
