import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../../assets/HomeLanding.mp4"; // replace with your video file path

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

const HeroSection = () => {
  const leftText = [
    "Creating timeless spaces where",
    "nature, culture, and design coexist",
    "in perfect balance.",
  ];

  const heading = ["SUSTAINABLE", "LIVING", "EXPERIENCES"];

  const rightText = [
    "We craft destinations that inspire",
    "a deeper connection with the Earth, where architecture",
    "breathes with the landscape, and every detail embodies mindful",
    "luxury. Our spaces invite you to",
    "live consciously, in harmony with the rhythms of nature.",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end md:py-10 md:px-10 justify-between px-6 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      
      {/* <div className="absolute inset-0 bg-black/10"></div> */}

      {/* Content */}
      <div className="relative z-10 flex w-full justify-between  items-end">
        {/* Left Text */}
        <div className="max-w-xs text-white space-y-1">
          {leftText.map((line, i) => (
            <motion.span
              key={i}
              className="block text-xl font-Grenda"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {line}
            </motion.span>
          ))}
            <div className="text-white text-4xl md:text-7xl md:mt-20  leading-tight text-left">
          {heading.map((word, i) => (
            <motion.span
              key={i}
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
            >
              {word}
            </motion.span>
          ))}
        </div>
        </div>

        
      

        {/* Right Text */}
        <div className="max-w-md text-white text-sm md:text-base  text-left space-y-1">
          {rightText.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 6}
            >
              {line}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
