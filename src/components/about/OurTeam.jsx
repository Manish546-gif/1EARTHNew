import { motion } from "framer-motion";
import React from "react";

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-8xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="flex-shrink-0 md:w-3/11 ">
            <div className="text-center md:mt-30 lg:text-left">
              <h2 className="text-6xl lg:text-7xl font-serif text-black tracking-wider leading-tight">
                <span className="block">OUR</span>
                <span className="block">TEAM</span>
              </h2>
            </div>
          </div>

          {/* Right side - Team members */}
          <div className="flex-1 flex flex-col lg:flex-row gap-22 lg:gap-26">
            {/* Team Member 1 - Shreyash Tarawade */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-64 bg-gray-300 h-64 lg:w-102 lg:h-102 mb-6 overflow-hidden">
                <img src="" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="text-center lg:text-left w-full">
                <h3 className="text-xl lg:text-2xl font-serif text-black uppercase tracking-wide mb-2">
                  SHREYASH TARAWADE
                </h3>
                <p className="text-sm lg:text-base font-sans text-black uppercase tracking-wide">
                  MANAGING DIRECTOR
                </p>
                <motion.div
                  className="h-px bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </div>

            {/* Team Member 2 - Sonal Jadhav */}
            <div className="flex flex-col items-center lg:items-start">
              <div  className="w-64 bg-gray-300 h-64 lg:w-102 lg:h-102 mb-6 overflow-hidden">
                <img src="" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="text-center lg:text-left w-full">
                <h3 className="text-xl lg:text-2xl font-serif text-black uppercase tracking-wide mb-2">
                  SONAL JADHAV
                </h3>

                <p className="text-sm lg:text-base font-sans text-black uppercase tracking-wide">
                  CHIEF ARCHITECT
                </p>
                <motion.div
                  className="h-px bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
