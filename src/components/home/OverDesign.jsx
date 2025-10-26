import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../common/Line.jsx";
import craft1 from "../../assets/111.jpg";
import craft2 from "../../assets/2222.jpg";

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

export default function OverDesign() {
  const paragraphLines = [
    "At One Earth, architecture is an",
    "expression of coexistence. Every",
    "structure is shaped to breathe",
    "with the landscape integrating",
    "sustainability, craftsmanship, and",
    "conscious innovation. We design",
    "just for today, but for generations",
    "that will inherit this living planet.",
  ];

  return (
    <div>
      <Line />
      <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-6 sm:p-10 md:p-12 mt-10 md:mt-20 md:mb-20">
        <div className="max-w-8xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 hidden mt-10 lg:block">
              <motion.div className="relative overflow-hidden h-full w-full">
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
              className="lg:col-span-4 self-end text-start lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <h1 className="text-5xl sm:text-4xl lg:text-6xl xl:text-7xl text-black">
                {["DESIGN", "THAT", "NURTURES", "EARTH"].map((word, index) => (
                  <div className="overflow-hidden" key={word}>
                    <motion.span
                      className="block"
                      initial={{ y: 60, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1 + index * 0.1,
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </h1>
            </motion.div>

            {/* Right Content - Image and Text */}
            <div className="lg:col-span-3 flex flex-col gap-8 md:gap-16">
              {/* Top Right Image */}
              <div className="hidden lg:block">
                <motion.div className="relative overflow-hidden h-48 w-full">
                  <motion.div
                    initial={{ scaleX: 1, opacity: 1 }}
                    whileInView={{ scaleX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "right" }}
                    className="w-full origin-right absolute h-full bg-[#FBF0DA]"
                  ></motion.div>
                  <img
                    src={craft2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Text Description and Button */}
              <div className="text-left">
                <div className="w-full sm:w-3/4">
                  {paragraphLines.map((line, i) => (
                    <motion.p
                      key={i}
                      className=" text-md sm:text-base leading-relaxed"
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

                <div className="mt-6 md:mt-10">
                  <Link to="/contact">
                    <motion.button
                      className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={paragraphLines.length}
                    >
                      <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                        CONTACT US
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                        CONTACT US
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ❌ Removed bottom image for desktop */}

          {/* ✅ Mobile Layout (only visible on mobile) */}
          <div className="lg:hidden mt-10 space-y-6">
            {[craft1, craft2].map((img, i) => (
              <div
                key={i}
                className="h-56 sm:h-64 w-full relative overflow-hidden "
              >
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute h-full bg-[#FBF0DA]"
                />
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
