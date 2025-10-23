import { motion } from "framer-motion";
import craft2 from "../../assets/Rectangle 79.png";
import { Link } from "react-router-dom";

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

function ImgHarmony() {
  const paragraphLines = [
    "Each One Earth creation blends",
    "thoughtful design with sustainable",
    "innovation crafting spaces that",
    "reflect your vision while honoring",
    "the land they stand on."
  ];

  return (
    <> 
    
      <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-20">
        <div className="max-w-8xl w-full mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* SERVICE Label - Top Left */}
            <div className="absolute -top-12 left-0">
              <motion.p
                className="text-xs lg:text-sm font-light tracking-[0.3em] text-black"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              >
                SERVICE
              </motion.p>
            </div>

            {/* Row 1: DESIGN IN - Centered */}
            <div className="text-center">
              <motion.div
                className="overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              >
                <h1 className=" text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[11rem] leading-none text-black tracking-tighter">
                  DESIGN IN
                </h1>
              </motion.div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-12  items-center ">
              {/* HARMONY Text */}
              <div className="lg:col-span-7">
                <motion.div
                  className="overflow-hidden"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                >
                  <h1 className="font-serif text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[10.2rem] leading-none text-black tracking-tight">
                    HARMONY
                  </h1>
                </motion.div>
              </div>

              {/* Image */}
              <div className="lg:col-span-5 flex p-1 justify-end">
                <motion.div
                  className="w-full lg:w-[400px] xl:w-[450px] h-[200px] lg:h-[200px] overflow-hidden  relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                >
                  <motion.div
                    initial={{ scaleX: 1, opacity: 1 }}
                    whileInView={{ scaleX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.7, ease: "circOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "right" }}
                    className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
                  />
                  <img src={craft2} alt="Interior design" className="w-full h-full  object-cover" />
                </motion.div>
              </div>
            </div>

            {/* Row 3: Description + Button (left) + WITH EARTH (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              {/* Description and Button */}
              <motion.div
                className="lg:col-span-4 space-y-6"
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
                <div className="max-w-sm">
                  {paragraphLines.map((line, i) => (
                    <motion.p
                      key={i}
                      className="text-sm leading-relaxed text-gray-700"
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

                <div className="overflow-hidden">
                  <Link to="/services">
                    <motion.button
                      className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={paragraphLines.length}
                    >
                      <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                        OUR SERVICES
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                        OUR SERVICES
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* WITH EARTH Text */}
              <div className="lg:col-span-8">
                <motion.div
                  className="overflow-hidden"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                >
                  <h1 className="font-serif text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[10rem] leading-none text-black tracking-tight text-right lg:text-left">
                    WITH EARTH
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgHarmony;