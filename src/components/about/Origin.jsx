import React from "react";
import { motion } from "framer-motion";
import origin2 from '../../assets/origin2.png';
import Line from "../common/Line";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Origin() {
  const heading = "DESIGNING IN HARMONY".split(" ");

  return (
    <div className="flex flex-col md:flex-row bg-[#FBF0DA] justify-center h-screen p-8 gap-10 md:mt-20">
      <motion.div
        className="text-5xl md:text-6xl  mb-8 md:mb-0 md:mr-12 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {heading.map((word, i) => (
          <motion.span
            key={i}
            className="block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <div className="flex-shrink-0  md:h-160 relative w-full md:w-1/3 mb-8 overflow-hidden md:mb-0">
      <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img src={origin2} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="md:ml-22 w-full md:w-1/3 md:mr-23 text-left">
        <div className="mb-6">
          <h3 className=" mb-2">OUR ORIGINS</h3>
          <p className="text-gray-700 mb-2 md:mb-28">
            One Earth Properties was founded with a singular vision – to redefine real estate by uniting sustainability, culture, and modern living. Rooted in Pune’s serene landscapes, our journey began with a simple belief: that land is not just to be developed, but to be nurtured.
          </p>
          <p className="text-gray-700">
            Inspired by India’s deep connection to nature and timeless craftsmanship, we create spaces that coexist with their surroundings – where innovation serves the Earth, and design becomes an expression of balance. Each project stands as a testament to harmony, integrity, and renewal.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">OUR PHILOSOPHY</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Harmony</li>
            <Line />
            <li>Integrity</li>
            <Line />
            <li>Sustainability</li>
            <Line />
          </ul>
        </div>
      </div>
    </div>
  );
}
