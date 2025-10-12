import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Urban Heights",
    location: "New Delhi",
    image: "https://via.placeholder.com/800x900",
  },
  {
    id: 2,
    name: "Skyline Tower",
    location: "Mumbai",
    image: "https://via.placeholder.com/800x900",
  },
  {
    id: 3,
    name: "Sea View Villa",
    location: "Goa",
    image: "https://via.placeholder.com/800x900",
  },
  {
    id: 4,
    name: "Hillside Estate",
    location: "Shimla",
    image: "https://via.placeholder.com/800x900",
  },
  {
    id: 5,
    name: "Palm Residency",
    location: "Bangalore",
    image: "https://via.placeholder.com/800x900",
  },
  {
    id: 6,
    name: "Desert Oasis",
    location: "Jaipur",
    image: "https://via.placeholder.com/800x900",
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
    <div>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden text-white flex flex-col justify-between  px-6 sm:px-10 md:px-16 lg:px-20 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center blur-md"
            style={{
              backgroundImage: `url(${currentProject.image})`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mt-20 z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start">
            <h2 className="text-lg sm:text-base md:text-xl  font-light tracking-wide">
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
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="object-cover bg-gray-300 shadow-lg rounded-sm w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-[40vh] sm:h-[55vh] md:h-[60vh]"
                  />
                  <h1 className="text-2xl sm:text-3xl text-start md:text-4xl font-serif mt-6">
                    {currentProject.name}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-start tracking-wider mt-2">
                    {currentProject.location}
                  </p>
                </motion.div>
              </Link>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-6 sm:gap-0">
            <div className="flex gap-6 sm:gap-8 mx-auto sm:mx-0">
              <button
                onClick={prevProject}
                className="text-xs sm:text-sm tracking-widest hover:opacity-70 transition"
              >
                PREV
              </button>
              <button
                onClick={nextProject}
                className="text-xs sm:text-sm tracking-widest hover:opacity-70 transition"
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
