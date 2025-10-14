import { motion } from "framer-motion";
import nextp from '../../assets/nextp.png';
export default function NextProject() {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="max-w-8xl mx-auto md:mb-10 px-6 mt-10 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
            
            <div className="space-y-8 lg:space-y-52">
              <div className="text-sm font-medium text-gray-600 tracking-wider">
                NEXT PROJECT
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-none">
                  PROJECT<br />
                  NAME
                </h1>
              </div>
              <div>
              <button className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 group">
  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
    SEE PROJECT
  </span>
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
    SEE PROJECT
  </span>
</button>
              </div>
            </div>
            <div className="relative">
              <motion.div 
              
                className="aspect-[4/3] lg:aspect-[1] bg-gray-400 relative rounded-lg overflow-hidden"
              >
                 <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right absolute  h-full bg-[#FBF0DA]"></motion.div>
               <div className="w-full h-full overflow">
               <img 
                 
                  src={nextp}
                  alt=""
                  className="w-full h-full object-cover"
                />
               </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  