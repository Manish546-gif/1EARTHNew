import React from 'react';
import { motion } from "framer-motion";
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';

export default function SoloFeatures() {
  return ( 
    <section className="max-w-8xl mx-auto  md:mb-10 md:mt-10 px-6 py-12 flex flex-col lg:flex-row gap-32 ">
      <motion.div
        className="relative overflow-hidden flex-shrink-0 w-full  md:mb-10  lg:w-1/2 "
       
      >
         <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right absolute  h-full bg-[#FBF0DA]"></motion.div>
        <img src={feature1} className='w-full h-full bg-cover' alt="" />
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
          <p className="font-bold  text-xl uppercase flex items-center gap-2 mb-2">
            <span className='text-2xl'>•</span>
            ECO-RESPONSIVE DESIGN
          </p>
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
          <p className="font-bold text-xl uppercase flex items-center gap-2 mb-2">
            <span className='text-2xl'>•</span>
            SUSTAINABLE INFRASTRUCTURE
          </p>
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
          <p className="font-bold text-xl uppercase flex items-center gap-2 mb-2">
            <span className='text-2xl'>•</span>
            WELLNESS & NATURE INTEGRATION
          </p>
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
          <p className="font-bold text-xl uppercase flex items-center gap-2 mb-2">
            <span className='text-2xl'>•</span>
            COMMUNITY & LIFESTYLE SPACES
          </p>
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
          className="mt-18 w-5/9 md:mr-20  relative overflow-hidden  self-end"

        >
           <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right absolute  h-full bg-[#FBF0DA]"></motion.div>
        <img src={feature2} alt="" />
        </motion.div>
      </div>
      
    </section>
  );
}
