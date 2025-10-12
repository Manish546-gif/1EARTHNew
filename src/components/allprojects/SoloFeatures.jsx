import React from 'react';
import { motion } from "framer-motion";

export default function SoloFeatures() {
  return (
    <section className="max-w-8xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-32 ">
      <motion.div
        className="bg-gray-300 flex-shrink-0 w-full mt-20  lg:w-1/2 rounded"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true}}
      >
        <div className="bg-gray-300 aspect-square rounded"></div>
      </motion.div>

      <div className="flex flex-col  flex-grow">
         <h2 className="text-xl font-bold mb-6  inline-block pb-1">
        MAIN FEATURES
      </h2>

      <ul className="space-y-8 md:mr-20">
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold uppercase flex items-center gap-2 mb-2">
            <span>•</span>
            ECO-RESPONSIVE DESIGN
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            A thoughtfully planned layout that follows the natural terrain, preserving native trees and enhancing the landscape's organic flow.
          </p>
           <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
        </motion.li>

        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold uppercase flex items-center gap-2 mb-2">
            <span>•</span>
            SUSTAINABLE INFRASTRUCTURE
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            Equipped with solar-ready provisions, rainwater harvesting, and a sewage treatment system to minimize ecological impact and promote self-sufficiency.
          </p>
           <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
        </motion.li>

        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold uppercase flex items-center gap-2 mb-2">
            <span>•</span>
            WELLNESS & NATURE INTEGRATION
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            Includes meditation decks, acupressure pathways, and green parks designed to nurture physical and mental well-being amid serene surroundings.
          </p>
           <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
        </motion.li>

        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold uppercase flex items-center gap-2 mb-2">
            <span>•</span>
            COMMUNITY & LIFESTYLE SPACES
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            Features a premium clubhouse, jogging trails, and cultural zones that encourage connection, recreation, and a balanced countryside lifestyle.
          </p>
            <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
        </motion.li>
      </ul>

        <motion.div 
          className="mt-10 w-5/11 md:mr-20 self-end bg-gray-300 rounded aspect-video"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
}
