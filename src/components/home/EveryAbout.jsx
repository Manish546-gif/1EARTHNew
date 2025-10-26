import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImage from "../../assets/Rectangle 3.png";
import smallImage from "../../assets/Rectangle 51.png";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function EverySpaceSection() {
  const paragraphLines = [
    "In every creation by One Earth,the spirit",
    "of harmony is ever-present.",
    "Rooted in the wisdom of the land and the ",
    "rhythm of nature, our spaces are shaped",
    "to coexist with their surroundings.",
    "Each design honors the earth's quiet",
    " intelligence blending tradition,",
    "sustainability, and innovation into a",
    "living narrative of balance and belonging.",
  ];

  return (
    <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-20">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-0">

          {/* Column 1: Label + Heading */}
          <div className="flex flex-col justify-between w-full 
            min-h-[200px] sm:min-h-[450px] md:min-h-[600px] lg:min-h-[600px]">

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <h5 className="text-xs lg:text-sm font-light tracking-[0.3em] text-black mt-4 sm:mt-6">
                ABOUT
              </h5>
            </motion.div>

            <div className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] mt-6 md:mt-0 text-black tracking-tight">
              {["EVERY", "SPACE", "HOLDS", "A SOUL"].map((word, i) => (
                <motion.span
                  key={i}
                  className="block"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Column 2: Large Image */}
          <div className="flex justify-center lg:justify-start w-full">
            <motion.div
              className="w-full max-w-[650px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[950px] h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden relative"
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

          {/* Column 3: Text + Button + Small Image */}
          <div className="flex flex-col justify-between gap-8 w-full mt-4 lg:mt-0">
            {/* Text + Button */}
            <div className="space-y-6 text-left lg:text-left flex flex-col items-start lg:items-end">
              <div className="w-full md:w-full lg:w-[90%] xl:w-[80%]">
                {paragraphLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-sm lg:text-base leading-relaxed "
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 4}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="w-full lg:w-auto lg:mr-62">
                <Link to="/about">
                  <motion.button
                    className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={paragraphLines.length + 4}
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
            </div>

            {/* Small Image */}
            <motion.div
              className="w-full sm:w-8/12 self-center lg:self-end h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[200px] overflow-hidden relative"
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
