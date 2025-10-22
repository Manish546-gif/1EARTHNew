import { motion } from "framer-motion";

export default function ContactForm() {
    return (
      <div className="min-h-screen  bg-[#FBF0DA] flex items-center justify-center p-4">
        <div className="max-w-8xl mt-30 mb-20  w-full  overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
                GET IN TOUCH<br />
                WITH ONE EARTH<br />
                PROPERTIES
              </h1>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you are looking to invest in a premium plot or want to know 
                more about our projects, we're here to assist you.
              </p>
              
              <p className="text-gray-800 font-medium mb-8">
                Reach out to us anytime!
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">PHONE NO.</h3>
                  <p className="text-gray-600">+91 9960372727</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">EMAIL</h3>
                  <p className="text-gray-600">oneearthpropertiesllp@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">OFFICE</h3>
                  <p className="text-gray-600">
                    A1105, Godkhale Business Bay,<br />
                    Kothrud, Pune
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">OFFICE HOURS</h3>
                  <p className="text-gray-600">
                    Monday to Friday<br />
                    9:00 AM - 6:00PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12 bg-[#FBF0DA]">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-0 py-3 bg-transparent  focus:outline-none placeholder-gray-400"
                  />
                  <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-0 py-3 bg-transparent focus:border-gray-500 focus:outline-none placeholder-gray-400"
                  />
                  <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }} className='h-[0.7px] w-full bg-black mt-5 origin-left'/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full px-0 py-3 bg-transparent focus:border-gray-500 focus:outline-none placeholder-gray-400"
                  />
                  <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }} className='h-px w-full bg-black mt-5 origin-left'/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PROJECT TYPE
                  </label>
                  <select className="w-full px-0 py-3 bg-transparent focus:border-gray-500 focus:outline-none text-gray-400">
                    <option>Select One</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Investment</option>
                  </select>
                  <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }} className='h-[0.7px] w-full bg-black mt-5 origin-left'/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-0 py-3 bg-transparent focus:border-gray-500 focus:outline-none placeholder-gray-400 resize-none"
                  ></textarea>
                  <motion.div  initial={{ scaleX: 0 }}
                  viewport={{once:true}}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }} className='h-[0.7px] w-full bg-black mt-5 origin-left'/>
                            </div>
                            <button className="relative overflow-hidden bg-yellow-600 hover:bg-black hover:cursor-pointer text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 group">
  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
    SUBMIT MESSAGE
  </span>
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
    SUBMIT MESSAGE
  </span>
</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }