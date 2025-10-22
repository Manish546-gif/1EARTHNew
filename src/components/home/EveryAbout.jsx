import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImage from "../../assets/Rectangle 3.png";
import smallImage from "../../assets/Rectangle 51.png";

function EverySpaceSection() {
  return (
    <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-20">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
        {/* Three Column Grid with Equal Widths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-0">
          
          {/* Column 1: ABOUT Label (top) + Heading (bottom) - Fixed Width */}
          <div className="flex flex-col justify-between min-h-[600px] sm:w-full md:w-2/3">
            {/* ABOUT Label at top */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <h5 className="text-xs lg:text-sm font-light tracking-[0.3em] text-black">
                ABOUT
              </h5>
            </motion.div>

            {/* Heading at bottom */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <h1 className=" text-[3.5rem] sm:text-[4rem] lg:text-[4rem] xl:text-[4.5rem] leading-[0.85] text-black tracking-tight">
                <motion.div
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: 80, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                  <span className="block">EVERY</span>
                </motion.div>
                <motion.div
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: 80, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                  <span className="block">SPACE</span>
                </motion.div>
                <motion.div
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: 80, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                  <span className="block">HOLDS</span>
                </motion.div>
                <motion.div
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: 80, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                  <span className="block">A SOUL</span>
                </motion.div>
              </h1>
            </motion.div>
          </div>

          {/* Column 2: Large Tall Image - Fixed Width */}
          <div className="flex items-center -ml-20 w-6/5 ">
            <motion.div
              className="w-full h-[600px] lg:h-[650px] xl:h-[700px] overflow-hidden relative"
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            >
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img 
                src={mainImage} 
                alt="Modern sustainable house" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Column 3: Description + Button (top) + Small Image (bottom) - Fixed Width */}
          <div className="flex flex-col justify-between  gap-8 w-full">
            {/* Description and Button at top */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <div className="overflow-hidden w-4/8 md:ml-40">
                <motion.p
                  className="text-sm lg:text-base leading-relaxed text-gray-800"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                >
                  In every creation by One Earth, the spirit of harmony is ever-present. Rooted in the wisdom of the land and the rhythm of nature, our spaces are shaped to coexist with their surroundings. Each design honors the earth's quiet intelligence blending tradition, sustainability, and innovation into a living narrative of balance and belonging.
                </motion.p>
              </div>

              <div className="overflow-hidden md:ml-40 md:mt-10">
                <Link to="/about">
                  <motion.button
                    className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}

                  >
                    <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                      ABOUT US
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      ABOUT US
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Small Image at bottom */}
            <motion.div
              className="w-8/12 self-end h-[280px] lg:h-[300px] xl:h-[180px] overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
            >
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img 
                src={smallImage} 
                alt="Sustainable architecture detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EverySpaceSection;