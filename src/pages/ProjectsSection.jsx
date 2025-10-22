import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectimg from '../assets/projectland.png';
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Urban Heights",
    location: "New Delhi",
    image: projectimg,
  },
  {
    id: 2,
    name: "Skyline Tower",
    location: "Mumbai",
    image: projectimg,
  },
  {
    id: 3,
    name: "Sea View Villa",
    location: "Goa",
    image: projectimg,
  },
  {
    id: 4,
    name: "Hillside Estate",
    location: "Shimla",
    image: projectimg,
  },
  {
    id: 5,
    name: "Palm Residency",
    location: "Bangalore",
    image: projectimg,
  },
  {
    id: 6,
    name: "Desert Oasis",
    location: "Jaipur",
    image: projectimg,
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const currentProject = projects[current];

  return (
    <div className="">
      <div className="relative h-screen bg-black w-full overflow-hidden text-white flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0.5 , x:200}}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentProject.image})`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative mt-20 z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start">
            <h2 className="text-lg sm:text-base md:text-xl font-light tracking-wide">
              OUR PROJECTS
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              {current + 1} / {projects.length}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <AnimatePresence mode="wait">
              <Link to="/projectsolo">
                <motion.div
                  key={currentProject.id}
                  initial={{ 
                    opacity: 0, 
                    x: 200,
                    scale: 0.8,
                    rotateY: -15
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1,
                    rotateY: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -200,
                    scale: 0.8,
                    rotateY: 15
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="flex flex-col items-center"
                >
                  <motion.img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="object-cover shadow-lg rounded-sm w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-[40vh] sm:h-[55vh] md:h-[60vh]"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.h1 
                    className="text-2xl sm:text-3xl text-start md:mr-60 md:text-4xl font-serif mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {currentProject.name}
                  </motion.h1>
                  <motion.p 
                    className="text-xs sm:text-sm md:text-base md:mr-100 text-start tracking-wider mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {currentProject.location}
                  </motion.p>
                </motion.div>
              </Link>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-6 sm:gap-0">
            <div className="flex gap-6 sm:gap-8 mx-auto sm:mx-0">
              <button
                onClick={prevProject}
                className="text-xs sm:text-sm tracking-widest hover:opacity-70 hover:cursor-pointer transition"
              >
                PREV
              </button>
              <button
                onClick={nextProject}
                className="text-xs sm:text-sm tracking-widest hover:opacity-70 hover:cursor-pointer transition"
              >
                NEXT
              </button>
            </div>

            <div className="flex gap-2 items-end mx-auto sm:mx-0">
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-[2px] bg-white"
                  animate={{
                    height: current === index ? 40 : 20,
                    opacity: current === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
