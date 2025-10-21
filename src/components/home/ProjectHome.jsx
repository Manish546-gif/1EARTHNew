import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/lake-geneva-3524431.png";
import img2 from "../../assets/house-1477041_1920.png";
import img3 from "../../assets/Rectangle 2.png";

const projects = [
  { id: 1, title: "SHIZUKA GARDENS", image: img1 },
  { id: 2, title: "KAWA LOFTS", image: img2 },
  { id: 3, title: "KINSEI PAVILION", image: img3 },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

const ProjectSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage + newDirection + projects.length) % projects.length;
      return [nextPage, newDirection];
    });
  };

  return (
    <div className="relative w-full h-screen md:h-[110vh] overflow-hidden bg-black">
      {/* Arrow Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold hover:text-gray-300 transition-colors"
      >
        ←
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold hover:text-gray-300 transition-colors"
      >
        →
      </button>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={projects[page].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {/* Background Image with parallax effect */}
          <motion.div
            className="absolute inset-0 w-full h-full overflow-hidden"
            initial={{ x: direction > 0 ? 50 : -50 }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
            data-scroll
            data-scroll-speed="-0.4"
              src={projects[page].image}
              alt={projects[page].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Slide Content */}
          <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-10 w-full h-full flex flex-col justify-between py-10 sm:py-20">
            {/* Page Number */}
            <div className="flex justify-end text-white text-xl font-light">
              {projects[page].id} / {projects.length}
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end">
              <div className="text-white">
                <h2 className="text-5xl sm:text-6xl font-light tracking-tight leading-none">
                  {projects[page].title.split(" ").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </h2>
              </div>

              <button className="relative overflow-hidden bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 group">
                <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                  See Project
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                  See Project
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSlider;
