import { motion } from "framer-motion";
import React from "react";
import img1 from "../../assets/team1.png";
import img2 from "../../assets/team2.png";
import Line from "../common/Line";

export default function OurTeam() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* LEFT HEADING */}
          <div className="flex-shrink-0 w-full lg:w-1/4 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black overflow-hidden">
              <motion.span
                initial={{ y: 10, opacity: 1 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "circOut" }}
                className="block"
              >
                OUR
              </motion.span>
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black overflow-hidden">
              <motion.span
                initial={{ y: 10, opacity: 1 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "circOut" }}
                className="block"
              >
                TEAM
              </motion.span>
            </h2>
          </div>

          {/* TEAM MEMBERS */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-10 md:gap-16 lg:gap-20 w-full lg:w-3/4">
            {/* MEMBER 1 */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-[45%] lg:w-[40%]">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 overflow-hidden">
                <img
                  data-scroll
                  data-scroll-speed="-0.05"
                  src={img1}
                  alt="Shreyash Tarawade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl text-black uppercase tracking-wide mb-2">
                  SHREYASH TARAWADE
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-sans text-black uppercase tracking-wide">
                  MANAGING DIRECTOR
                </p>
                <Line />
              </div>
            </div>

            {/* MEMBER 2 */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-[45%] lg:w-[40%]">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 overflow-hidden">
                <img
                  data-scroll
                  data-scroll-speed="-0.05"
                  src={img2}
                  alt="Sonal Jadhav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl text-black uppercase tracking-wide mb-2">
                  SONAL JADHAV
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-sans text-black uppercase tracking-wide">
                  CHIEF ARCHITECT
                </p>
                <Line />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
