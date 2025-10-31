import React from "react";
import { motion } from "framer-motion";
import craft2 from "../../assets/Rectangle 79.png";
import { Link } from "react-router-dom";

const textVariant = {
  hidden: { y: 80, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const ImgHarmony = () => {
  return (
    <section className="bg-[#FBF0DA] min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-14 py-20 overflow-hidden text-[#0a0a0a] relative">
      {/* Top Label */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="tracking-[0.3em] text-sm md:text-base mb-12 uppercase "
      >
        SERVICE
      </motion.p>

      {/* Headings section */}
      <div className="w-full relative leading-[0.95] text-black">
        {/* DESIGN IN */}
        <motion.h1
          custom={1}
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(3.2rem,10vw,11rem)] text-center font-medium"
        >
          DESIGN IN
        </motion.h1>

        {/* HARMONY + Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-3 lg:mt-4 relative">
          <motion.h1
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[clamp(3.2rem,10vw,11rem)] text-center lg:text-left font-medium"
          >
            HARMONY
          </motion.h1>

          <div className="relative w-[280px] sm:w-[360px] md:w-[440px] overflow-hidden lg:mt-0">
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-0 bg-[#FBF0DA] z-10"
            />
            <motion.img
              src={craft2}
              alt="Interior Design"
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Paragraph + WITH EARTH */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start gap-6 mt-6 lg:mt-4">
          <motion.p
            custom={3}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-md text-base sm:text-lg md:text-base  lg:mt-8 leading-relaxed text-center lg:text-left"
          >
            Each One Earth creation blends thoughtful design with sustainable
            innovation — crafting spaces that reflect your vision while honoring
            the land they stand on.
          </motion.p>

          <motion.h1
            custom={4}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[clamp(3.2rem,8.9vw,10rem)] font-medium text-black leading-none text-center lg:text-left"
          >
            WITH EARTH
          </motion.h1>
        </div>
      </div>

      {/* Button */}
      <motion.div
        custom={5}
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 flex justify-center lg:justify-start"
      >
        <Link to="/services">
          <motion.button
            className="relative overflow-hidden bg-yellow-600 hover:bg-black hover:cursor-pointer text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-medium transition-colors duration-300 group"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
              OUR SERVICES
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              OUR SERVICES
            </span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ImgHarmony;
