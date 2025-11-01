import React from "react";
import { motion } from "framer-motion";
import landimgservice from '../../assets/serviceland.png';

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

export default function ServiceLanding() {
  const paragraphLines = [
    "At One Earth, service is rooted in purpose—a commitment to design, integrity, and the land itself. Our approach goes beyond development; it's about creating spaces that reflect your vision while honoring the Earth.",
    "Every project we undertake is guided by mindful innovation, sustainable practices, and a deep respect for natural balance. From land acquisition to design and delivery, we ensure each step contributes to a legacy of harmony, beauty, and long-term value.",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden flex text-[#FBF0DA] items-center justify-center"
    >
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={landimgservice}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center">

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.h1
            className="text-6xl md:text-4xl lg:text-4xl xl:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"SERVICES".split("").map((char, i) => (
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

        <div className="absolute lg:bottom-12 bottom-0 md:bottom-12 left-6 lg:left-8">
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

        <div className="absolute bottom-20 right-6 ml-6 md:ml-0 lg:ml-0 lg:right-8 max-w-lg xl:max-w-xs">
          <div className="space-y-4">
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-sm lg:text-base"
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
