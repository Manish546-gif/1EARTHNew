import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c24] text-[#d3d3d3] md:h-screen  py-12 md:py-16">
      <div className="flex px-6 md:px-16 flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-12">
        <div className=" flex flex-col space-y-6 max-w-full md:max-w-sm">
          <nav>
            <ul className="space-y-8  font-serif text-white text-base md:text-4xl">
              <motion.li initial={{opacity:0 ,y:10}} 
              whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, ease:"easeInOut",delay:1}}
              className="overflow-hidden">
                <Link to="/" className="hover:underline">
                  (01) HOME
                </Link>
              </motion.li>
              <li>
                <Link to="/about" className="hover:underline overflow-hidden">
                  (02) ABOUT
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:underline">
                  (03) PROJECT
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  (04) SERVICE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  (05) CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-sm leading-relaxed max-w-full mt-5 md:max-w-sm">
            More than a real estate brand, One Earth is a vision shaped by legacy, balance, and purpose.
            We are guided by nature’s rhythm and India’s timeless heritage, crafting spaces that nurture life
            and inspire belonging. Every creation reflects our belief in integrity, sustainability, and
            enduring design—where development honors the land and living feels grounded yet luxurious.
            At One Earth, we don’t just build properties; we cultivate legacies that stand the test of time.
          </p>
        </div>

        <div className="flex flex-col items-center flex-grow max-w-full md:max-w-full text-center md:text-center">
          <h1 className="text-white font-serif text-4xl md:text-[160px] leading-none select-none">
            ONE EARTH
          </h1>
          <h2 className="text-white font-serif text-lg md:text-[60px] tracking-[0.9em] md:ml-17 -mt-1 md:-mt-8 select-none">
            PROPERTIES
          </h2>
          <div className=" gap-70   flex  mt-10">
            <div className="w-1/2 h-full text-start flex flex-col space-y-6 max-w-full md:max-w-lg text-lg leading-relaxed">
                 <div>
            <p className="text-white uppercase mb-1 text-xl">EMAIL</p>
            <p>oneearthpropertiesllp@gmail.com</p>
          </div>
          <div>
            <p className="text-white uppercase mb-1 text-xl ">PHONE</p>
            <p>+91 9690372727</p>
          </div>
          <div>
            <p className="text-white uppercase mb-1 text-xl ">SOCIAL</p>
            <p>
              Instagram
              <br />
              Facebook
              <br />
              LinkedIn
            </p>
          </div>    
            </div>
            <div className="w-1/2 h-full text-start flex flex-col space-y-6 max-w-full md:max-w-xs text-sm leading-relaxed">
     <div>
            <p className="text-white uppercase mb-1 text-xl ">OFFICE</p>
            <p>
              A105, Gokhale Business Bay,
              <br />
              Kothrud, Pune, 411038
            </p>
            <p className="mt-3">
              Monday to Friday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>
            </div>
          </div>
        </div>

        
      </div>

<div>
         <motion.div  initial={{ scaleX: 0 }}
                          viewport={{once:true}}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          style={{ transformOrigin: 'left' }} className='h-px w-full bg-white mt-10 md:mt-22 origin-left'/>
                           <div className="px-6 md:px-16  pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-600 gap-2 md:gap-0">
                        
        
        <p className="text-center md:text-left">©2025 ONE EARTH PROPERTIES - ALL RIGHTS RESERVED</p>
        <p className="cursor-pointer hover:underline text-center md:text-right">TERM OF SERVICE</p>
        <p className="cursor-pointer hover:underline text-center md:text-right">PRIVACY POLICY</p>
      </div>
      </div>
     
    </footer>
  );
}
