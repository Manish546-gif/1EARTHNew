import { motion } from "framer-motion";

export default function NextProject() {
    return (
      <div className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-8 h-screen flex items-center">
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
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wider transition-colors duration-300 uppercase">
                  SEE PROJECT
                </button>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} 
                className="aspect-[4/3] lg:aspect-[1] bg-gray-400 rounded-lg overflow-hidden"
              >
                <img 
                  src=""
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  