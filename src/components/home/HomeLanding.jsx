import { motion, stagger } from "framer-motion";
import React from "react";
import { Power4 } from "gsap/all";
import img from "../../assets/1.png";

function HomeLanding() {
  return (
    <div className="relative w-full h-[150vh]  sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute w-full top-0">
        <div className="text max-w-screen-2xl mx-auto h-full  px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[32rem] ">
            {[
              "Global digital design studio partnering with",
              " brands and businesses that create exceptional",
              "experiences where people live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-md masker  sm:text-3xl overflow-hidden "
                >
                  <motion.span
                    initial={{ rotate: 9, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left "
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 sm:mt-17 py-10 overflow-hidden ">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1 className="text-5xl tracking-tighter font-light leading-none sm:-mt-20 sm:py-10 py-2 sm:text-[12rem] overflow-hidden  ">
                  <motion.span
                    initial={{ rotate: 9, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 7,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left "
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 sm:w-1/3  mt-10 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 inline-block mt-10"
              href=""
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
