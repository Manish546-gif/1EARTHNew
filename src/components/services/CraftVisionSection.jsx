import { motion } from "framer-motion";

export default function CraftVisionSection() {
  return (
    <div className="min-h-screen bg-white flex  items-center justify-center p-4">
      <div className="max-w-8xl w-full mt-18 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="hidden lg:block">
            <motion.div
              
              className="bg-gray-300 md:mt-80  h-80 w-full md:w-3/4 md:ml-20 rounded"
            >
               <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right  h-full bg-red-400"></motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-1 text-left lg:px-8">
            <p className="text-lg font-medium text-gray-black mb-4 tracking-wider">
              CONNECT
            </p>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-black mb-6 leading-tight">
              CRAFT
              <br />
              YOUR
              <br />
              VISION
            </h1>

            <p className="text-gray-700 text-lg md:w-5/6 leading-relaxed mb-8 max-w-md">
              One Earth blends mindful design and regenerative innovation to
              create spaces that not only inspire but endure. Together, we shape
              environments that reflect your vision, rooted in nature, built
              with purpose, and alive with meaning.
            </p>

            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
              GET IN TOUCH
            </button>
          </div>

          <div className="hidden lg:block">
            <motion.div
              className="bg-gray-300 h-140 mt-10  w-full rounded"
            > <motion.div  initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }} className="w-full origin-right  h-full bg-red-400"></motion.div></motion.div>
          </div>
        </div>

        <div className="lg:hidden mt-12 space-y-6">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="bg-gray-300 h-48 w-full rounded"
          ></motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="bg-gray-300 h-48 w-full rounded"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
