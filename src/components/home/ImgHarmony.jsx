import React  from "react";
import { motion } from "framer-motion";
import craft2 from "../../assets/Rectangle 79.png";
import { div } from "framer-motion/client";

function ImgHarmony(){
    return(
<>
  <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 mb-20 lg:grid-cols-12 gap-8 items-center">
          {/*right small image */}
            <div className="lg:col-span-3 order-2 lg:order-none flex items-start justify-end pt-6 lg:pt-12">
              <div className="w-52 h-32 overflow-hidden rounded">
                <img src={craft2} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Center Text Content */}
          <motion.div 
            className="lg:col-span-6 text-center lg:px-8 order-1 lg:order-none"
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
              <h1 className="font-serif text-[8.5rem] lg:text-[9.5rem] leading-[0.85] lg:leading-[0.82] text-black tracking-tight">
                <div className="block">DESIGN IN</div>
                <div className="block">HARMONY</div>
                <div className="block">WITH EARTH</div>
              </h1>
            <div className="overflow-hidden">
              <motion.p 
                className="text-lg font-medium text-gray-black mb-4 tracking-wider text-start"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                BALANCE
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p 
                className="text-sm text-gray-black mb-4 leading-relaxed text-start"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Each One Earth creation blends thoughful design with sustainable innovation crafting spaces that reflect your vision while honoring the land they stand on.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
    )
}
 export default ImgHarmony;