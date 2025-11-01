
import React from "react";
import { motion } from "framer-motion";
import aboutland from '../../assets/aboutland.png';

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

const letterVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function AboutLanding() {
  const paragraphLines = [
    "One Earth Properties creates spaces that live in harmony with nature. Guided by sustainability, balance, and purpose, each project is designed to evolve with time while hovering the land it stands on. We don't just build, we nurture legacies that connect with people, place, and planet.",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#FBF0DA] flex items-center justify-center"
    >
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={aboutland}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center">

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.h1
            className="text-4xl md:text-4xl lg:text-4xl xl:text-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"ABOUT US".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="absolute lg:bottom-12 bottom-4 left-2 lg:left-8">
          <motion.h5
            className="text-xl font-light tracking-widest transform origin-left"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            SCROLL
          </motion.h5>
        </div>

        <div className="absolute lg:bottom-20 bottom-28 right-6 px-3 lg:right-8 max-w-md xl:max-w-xs">
          <div className="space-y-6">
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-sm lg:text-base leading-relaxed font-light"
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
        </div>
      </div>
    </div>
  );
}
  