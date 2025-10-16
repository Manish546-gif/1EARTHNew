import { motion } from "framer-motion";
import Line from "../common/Line.jsx";
import craft1 from '../../assets/111.jpg';
import craft2 from '../../assets/2222.jpg';

export default function OverDesign() {
  return (
   <div>
    <Line />
     <div className="h-screen bg-[#FBF0DA] flex items-center md:mb-10 justify-center p-12">
      <div className="max-w-8xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div className="bg-gray-300 relative overflow-hidden h-full w-full ">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              ></motion.div>
              <img src={craft1} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Center Text Content */}
          <motion.div 
            className="lg:col-span-4 md:mt-100  text-start lg:px-8"
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-black mb-6 leading-tight">
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1 
                  }}
                >
                  DESIGN
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2 
                  }}
                >
                  THAT
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.3 
                  }}
                >
                  NURTURES
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.4 
                  }}
                >
                  EARTH
                </motion.span>
              </div>
            </h1>
          </motion.div>

          {/* Right Content - Image and Text */}
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-40">
            {/* Top Right Image */}
            <div className="hidden lg:block">
              <motion.div className="bg-gray-300 relative overflow-hidden h-48 w-full ">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute h-full bg-[#FBF0DA]"
                ></motion.div>
                <img src={craft2} alt="" className="w-full h-full object-cover"/>
              </motion.div>
            </div>

            {/* Text Description and Button */}
            <motion.div 
              className="text-left"
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
              <div className="overflow-hidden w-3/4">
                <motion.p 
                  className="text-gray-700 text-sm leading-relaxed mb-6 md:mb-20"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5 
                  }}
                >
                  At One Earth, architecture is an expression of coexistence. Every structure is shaped to breathe with the landscape integrating sustainability, craftsmanship, and conscious innovation. We design not just for today, but for generations that will inherit this living planet.
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.button 
                  className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 group"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.6 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                    CONTACT US
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    CONTACT US
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Images */}
        <div className="lg:hidden mt-12 space-y-6">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="bg-gray-300 h-48 w-full  overflow-hidden"
          >
            <img src={craft1} alt="" className="w-full h-full object-cover"/>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="bg-gray-300 h-48 w-full  overflow-hidden"
          >
            <img src={craft2} alt="" className="w-full h-full object-cover"/>
          </motion.div>
        </div>
      </div>
    </div>
   </div>
  );
}
