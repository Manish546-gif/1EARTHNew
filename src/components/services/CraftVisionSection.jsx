import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../common/Line.jsx";
import craft1 from '../../assets/craft1.png';
import craft2 from '../../assets/craft2.png';

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function CraftVisionSection() {
  const paragraphLines = [
    "One Earth blends mindful design",
    "and regenerative innovation to",
    "create spaces that not only inspire",
    "but endure. Together, we shape",
    "environments that reflect your",
    "vision, rooted in nature, built with",
    "purpose, and alive with meaning."
  ];

  return (
   <div>
    <Line />
     <div className="min-h-screen bg-[#FBF0DA]  flex  md:px-10 items-center justify-center p-4">
      <div className="max-w-8xl w-full  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="hidden lg:block">
            <motion.div className="relative md:mt-80 overflow-hidden  h-70 w-full md:w-4/6  ">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img src={craft1} alt="" className="w-full h-full bg-cover" />
            </motion.div>
          </div>

           <motion.div 
            className="lg:col-span-1 text-left  lg:px-8"
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
            <div className="overflow-hidden mb-6">
              <motion.p 
                className="text-lg font-medium text-gray-black tracking-wider"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                CONNECT
              </motion.p>
            </div>


           <h1 className="text-6xl lg:text-6xl xl:text-7xl text-black mb-8">
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
                  CRAFT
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
                  YOUR
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
                  VISION
                </motion.span>
              </div>
            </h1>

            <div className="md:w-3/5 w-full sm:mb-10 lg:mb-10 mb-5 md:mb-10">
              {paragraphLines.map((line, i) => (
                <motion.p
                  key={i}
                  className=" md:text-sm lg:text-sm text-lg "
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <Link to="/contact">
              <motion.button 
                className="relative overflow-hidden bg-yellow-600 hover:bg-black hover:cursor-pointer text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={paragraphLines.length}
              >
                <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                  GET IN TOUCH
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                  GET IN TOUCH
                </span>
              </motion.button>
            </Link>
          </motion.div>

          <div className="hidden lg:block">
            <motion.div className=" relative h-155 overflow-hidden w-full ">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute  h-full bg-[#FBF0DA]"
              />
              <img  src={craft2} alt="" className="w-full h-full bg-cover"/>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden mt-12 space-y-6 ">
          <div
            className=" h-48 w-full relative overflow-hidden rounded "
          >
            <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute  h-full bg-[#FBF0DA]"
              />
              <img  src={craft1} className="w-full h-full bg-cover" alt="" />
          </div>
          <div
            className=" h-48 w-full relative overflow-hidden  "
          >
             <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute  h-full bg-[#FBF0DA]"
              />
              <img  src={craft2} alt="" className="w-full h-full bg-cover"/>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}