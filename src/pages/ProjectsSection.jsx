import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import projectimg from "../assets/projectland.png";

const projects = [
  { id: 1, name: "Urban Heights", location: "New Delhi", image: projectimg },
  { id: 2, name: "Skyline Tower", location: "Mumbai", image: projectimg },
  { id: 3, name: "Sea View Villa", location: "Goa", image: projectimg },
  { id: 4, name: "Hillside Estate", location: "Shimla", image: projectimg },
  { id: 5, name: "Palm Residency", location: "Bangalore", image: projectimg },
  { id: 6, name: "Desert Oasis", location: "Jaipur", image: projectimg },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(nextProject, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const currentProject = projects[current];

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-[#FBF0DA]">
      {/* Background with parallax fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentProject.image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        {/* Top info */}
        <div className="flex justify-between items-start mt-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg tracking-widest font-light"
          >
            OUR PROJECTS
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg font-light"
          >
            {current + 1} / {projects.length}
          </motion.p>
        </div>

        {/* Center project preview */}
        <div className="flex flex-col items-center justify-center flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 80, scale: 0.95, rotateY: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateY: 0,
              }}
              exit={{ opacity: 0, y: -60, scale: 0.9, rotateY: 10 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
              className="flex flex-col items-center"
            >
              <Link to="/projectsolo">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    rotateY: 4,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="overflow-hidden rounded shadow-2xl"
                >
                  <motion.img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="object-cover w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-[40vh] sm:h-[55vh] md:h-[60vh]"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                </motion.div>
              </Link>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-serif mt-6 text-center md:text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {currentProject.name}
              </motion.h1>

              <motion.p
                className="text-xs sm:text-sm md:text-base tracking-wider text-gray-200 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {currentProject.location}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center flex-wrap gap-6 mt-10">
          <div className="flex gap-8 mx-auto sm:mx-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ opacity: 0.7 }}
              onClick={prevProject}
              className="text-xs sm:text-sm tracking-widest"
            >
              PREV
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ opacity: 0.7 }}
              onClick={nextProject}
              className="text-xs sm:text-sm tracking-widest"
            >
              NEXT
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mx-auto sm:mx-0">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className="w-[4px] rounded-full bg-[#FBF0DA]"
                animate={{
                  height: current === index ? 50 : 30,
                  opacity: current === index ? 1 : 0.5,
                  scale: current === index ? 1.1 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
