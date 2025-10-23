import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

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

  const paragraphLines = [
    "More than a real estate brand, One",
    "Earth is a vision shaped by legacy,",
    "balance, and purpose. Guided by",
    "nature's rhythm and India's heritage,",
    "crafting spaces that nurture life and",
    "inspire belonging."
  ];

  return (
    <footer className="bg-[#0b1c24] text-[#FBF0DA] py-12 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-26 px-6 md:px-16">

        {/* Left Column: Nav + Description */}
        <div className="flex flex-col space-y-6 max-w-full md:max-w-sm">
          <nav>
            <ul className="space-y-4 sm:space-y-6  text-sm sm:text-base md:text-2xl lg:text-3xl">
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="overflow-hidden"
              >
                <Link to="/" className="hover:underline">(1) HOME</Link>
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="overflow-hidden"
              >
                <Link to="/about" className="hover:underline">(2) ABOUT</Link>
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="overflow-hidden"
              >
                <Link to="/project" className="hover:underline">(3) PROJECT</Link>
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="overflow-hidden"
              >
                <Link to="/services" className="hover:underline">(4) SERVICE</Link>
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="overflow-hidden"
              >
                <Link to="/contact" className="hover:underline">(5) CONTACT</Link>
              </motion.li>
            </ul>
          </nav>

          <div className="mt-5">
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-sm sm:text-base leading-relaxed"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 6}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right Column: Brand + Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow max-w-full">
          {/* Brand Name */}
          <motion.h1 className=" text-4xl sm:text-6xl md:text-[120px] lg:text-[160px] leading-none select-none flex flex-wrap justify-center md:justify-start">
            {["O","N","E","\u00A0","E","A","R","T","H"].map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* PROPERTIES */}
          <motion.h2 className=" text-lg sm:text-2xl md:text-[40px] lg:text-[60px] tracking-[1em] -mt-2 select-none flex justify-center md:justify-start flex-wrap">
            {["P","R","O","P","E","R","T","I","E","S"].map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-80 mt-8 md:mt-10 w-full">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col space-y-6 text-left md:max-w-lg text-sm sm:text-base md:text-lg"
            >
              <div>
                <p className=" uppercase mb-1 text-base sm:text-lg md:text-xl">EMAIL</p>
                <p>oneearthpropertiesllp@gmail.com</p>
              </div>
              <div>
                <p className=" uppercase mb-1 text-base sm:text-lg md:text-xl">PHONE</p>
                <p>+91 9690372727</p>
              </div>
              <div>
                <p className=" uppercase mb-1 text-base sm:text-lg md:text-xl">SOCIAL</p>
                <p>
                  Instagram <br /> Facebook <br /> LinkedIn
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col space-y-6 text-left md:max-w-xs text-sm sm:text-base md:text-lg"
            >
              <div>
                <p className=" uppercase mb-1 text-base sm:text-lg md:text-xl">OFFICE</p>
                <p>
                  A105, Gokhale Business Bay, <br /> Kothrud, Pune, 411038
                </p>
                <p className="mt-3">
                  Monday to Friday <br /> 9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        viewport={{ once: true }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: 'left' }}
        className="h-px w-full bg-white mt-10 md:mt-16"
      />

      {/* Footer Bottom */}
      <div className="px-6 md:px-16 pt-4 flex flex-col md:flex-row justify-between text-xs sm:text-sm  gap-2 md:gap-0">
        <p className="text-center md:text-left">Â©2025 ONE EARTH PROPERTIES - ALL RIGHTS RESERVED</p>
        <p className="cursor-pointer hover:underline text-center md:text-right">TERM OF SERVICE</p>
        <p className="cursor-pointer hover:underline text-center md:text-right">PRIVACY POLICY</p>
      </div>
    </footer>
  );
}
