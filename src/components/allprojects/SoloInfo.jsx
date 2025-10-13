import React from "react";
import { motion } from "framer-motion";
import info from "../../assets/info.png"

const SoloInfo = () => {
  const details = [
    { label: "LOCATION", value: "VELHE, BHOR (OUTSKIRTS OF PUNE, INDIA)" },
    { label: "YEAR", value: "2025" },
    { label: "TOTAL LAND SIZE", value: "100+ ACRES" },
    { label: "PLOT SIZE", value: "FROM 11,000 SQ. FT." },
    { label: "CATEGORY", value: "GATED FARMLAND & PLOTTED COMMUNITY" },
    { label: "DEVELOPER", value: "ONE EARTH PROPERTIES" },
  ];

  return (
    <div className="flex flex-col  md:flex-row p-6 gap-26 mt-40 mb-20 max-w-8xl mx-auto">
      <motion.div
        className="bg-gray-300 w-full md:w-3/5  md:h-200  overflow-hidden sm:h-150 h-110 rounded"
      >
        <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right  h-full bg-red-400"></motion.div>
        <img className=" h-full w-full object-cover" src={info} alt="" />
      </motion.div>

      <div className="flex flex-col md:pr-20 w-full md:w-2/5 space-y-6">
        <div>
          <h3 className="font-bold mb-2">INFO</h3>
          <p className="text-lg text-gray-700">
            The Velhe Estate by One Earth Properties is a 100-acre gated
            farmland community in the serene outskirts of Pune, surrounded by
            the majestic Rajgad and Torna Forts. Blending nature, heritage, and
            sustainable design, it offers expansive plots starting from 11,000
            sq. ft. for farmhouses, retreats, or investment havens. With
            eco-conscious infrastructure, lush landscapes, and wellness-inspired
            amenities, the estate redefines luxury as harmony—offering a
            grounded yet refined lifestyle where every sunrise over the hills
            feels like coming home to nature.
          </p>
        </div>

        <motion.div
          className="bg-gray-300 w-full h-50 rounded"
        >
           <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right  h-full bg-white"></motion.div>
        </motion.div>

        <div>
          <h3 className="text-lg font-bold mb-4">DETAILS</h3>
          <div className="space-y-6">
            {details.map((item, index) => (
              <motion.div
                key={index}
                className="text-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover="hover"
                variants={{
                  hover: {},
                }}
              >
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 0 }}
                  variants={{
                    hover: { scaleY: 1.3 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-10 opacity-25 bg-black origin-bottom"
                />
                <div className="flex justify-between pb-1 relative z-10">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-right">{item.value}</span>
                </div>
              <motion.div
  className="h-px bg-black origin-left"
  initial={{ scaleX: 0 }}
  viewport={{ once: true }}
  whileInView={{ scaleX: 1 }}
  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
  style={{ transformOrigin: 'left' }}
/>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloInfo;
