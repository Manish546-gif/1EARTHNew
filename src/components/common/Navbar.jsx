import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import logo from "../../assets/1earthcompletelogo.svg";
import menuIcon from "../../assets/menu.svg";
import Line from "./Line";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // GSAP Refs
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const overlayRef = useRef(null);

  const isDarkPage =
    location.pathname === "/contact" || location.pathname === "";



  // Lock/Unlock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    setIsMenuOpen(true);

    
    const tl = gsap.timeline();

    tl.set([leftPanelRef.current, rightPanelRef.current], {
      display: "block",
    })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "circOut",
      })
      .fromTo(
        leftPanelRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "circOut" },
        0.1
      )
      .fromTo(
        rightPanelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.8, ease: "circOut" },
        0.1
      );
  };

  const closeMenu = () => {
    
    const tl = gsap.timeline({
      onComplete: () => setIsMenuOpen(false),
    });

    tl.to([leftPanelRef.current, rightPanelRef.current], {
      x: (index) => (index === 0 ? "-100%" : "100%"),
      duration: 1,
      ease: "circOut",
    })
      .to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.3,
          ease: "circOut",
        },
        "-=0.3"
      )
      .set([leftPanelRef.current, rightPanelRef.current], {
        display: "none",
      });
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  
  
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

 
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        ease: "circOut",
      },
    }),
  };

  const rightPanelVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "circOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <nav
        className="w-full fixed top-0 z-40 border-b  border-white"
      >
        <div className="max-w-8xl mx-auto px-8 sm:px-10 lg:px-12 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Earth logo"
                  className={`h-12 w-auto ${
                    isDarkPage ? "filter brightness-0 invert-0" : ""
                  }`}
                />
              </Link>
            </div>

            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:cursor-pointer z-50 relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <img
                  src={menuIcon}
                  alt="Open menu"
                  className={`h-8 w-8 ${
                    isDarkPage ? "filter brightness-0 invert-0" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-50  opacity-0 overflow-hidden"
        style={{
          display: isMenuOpen ? "block" : "none",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          ref={leftPanelRef}
          className="absolute top-0 left-0 w-1/2  bg-[#FBF0DA] overflow-hidden"
          style={{
            transform: "translateX(-100%)",
            height: "100vh",
          }}
        >
          <div className="h-full flex flex-col justify-center px-8 lg:px-12 xl:px-0 overflow-hidden">
            <motion.button
              onClick={closeMenu}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 text-gray-700 hover:text-gray-900 text-2xl font-light"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              ✕
            </motion.button>

            <nav className="space-y-4 lg:space-y-6">
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    <motion.div
                      className="flex items-center gap-6 lg:gap-8 cursor-pointer overflow-hidden group"
                      onClick={() => handleNavigation("/")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}

                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-xs lg:text-4xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        (01)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-4xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        HOME
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-8 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/about")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1}

                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-xs lg:text-4xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        (02)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        ABOUT
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-8 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/project")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={2}

                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-xs lg:text-4xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        (03)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.6,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        PROJECTS
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={2}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-8 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/services")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={3}

                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-xs lg:text-4xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        (04)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.7,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        SERVICES
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={3}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-8 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/contact")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={4}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-xs lg:text-4xl ml-5 font-light text-gray-600 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        (05)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.8,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        CONTACT
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={4}
                    />
                  </>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </div>

        <div
          ref={rightPanelRef}
          className="absolute top-0 right-0 w-1/2 bg-[#1a2332] overflow-hidden"
          style={{
            transform: "translateX(100%)",
            height: "100vh",
          }}
        >
          <div className="h-full flex flex-col justify-between px-8 lg:px-12 xl:px-16 py-8 lg:py-12 text-white overflow-hidden">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  variants={rightPanelVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full flex flex-col justify-between"
                >
                  <motion.div className="mb-8 lg:mb-16" variants={logoVariants}>
                    <motion.h1
                      className="text-3xl lg:text-8xl xl:text-8xl font-light ml-10  tracking-wider "
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      ONE EARTH
                    </motion.h1>
                    <motion.h2
                      className="text-base lg:text-lg xl:text-5xl ml-13 font-light tracking-[0.7em] text-gray-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      PROPERTIES
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    className="flex space-y-6 lg:space-y-8 gap-30 overflow-hidden"
                    variants={rightPanelVariants}
                  >
                    <div className="space-y-6 lg:space-y-8">
                      {" "}
                      <motion.div variants={rightContentVariants}>
                        <motion.h3
                          className="text-xs lg:text-sm font-medium tracking-wider text-gray-400 mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.0 }}
                        >
                          EMAIL
                        </motion.h3>
                        <motion.a
                          href="mailto:oneearthpropertiesllp@gmail.com"
                          className="text-xs lg:text-sm xl:text-base text-gray-300 hover:text-white transition-colors block"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1, duration: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          ONEEARTHPROPERTIESLLP@GMAIL.COM
                        </motion.a>
                      </motion.div>
                      <motion.div variants={rightContentVariants}>
                        <motion.h3
                          className="text-xs lg:text-sm font-medium tracking-wider text-gray-400 mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                        >
                          PHONE
                        </motion.h3>
                        <motion.a
                          href="tel:+919860372727"
                          className="text-xs lg:text-sm xl:text-base text-gray-300 hover:text-white transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3, duration: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          +91 9860372727
                        </motion.a>
                      </motion.div>
                      <motion.div variants={rightContentVariants}>
                        <motion.h3
                          className="text-xs lg:text-sm font-medium tracking-wider text-gray-400 mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                        >
                          OFFICE
                        </motion.h3>
                        <motion.address
                          className="text-xs lg:text-sm xl:text-base text-gray-300 not-italic leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5, duration: 0.6 }}
                        >
                          A1105, RACHALE BUSINESS BAY,
                          <br />
                          KOTHRUD, PUNE, 411038
                        </motion.address>
                        <motion.p
                          className="text-xs text-gray-400 mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        >
                          MONDAY TO FRIDAY
                          <br />
                          9:00 AM - 6:00 PM
                        </motion.p>
                      </motion.div>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                      {" "}
                      <motion.div variants={rightContentVariants}>
                        <motion.h3
                          className="text-xs lg:text-sm font-medium tracking-wider text-gray-400 mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.7 }}
                        >
                          SOCIAL
                        </motion.h3>
                        <div className="space-y-1 lg:space-y-2">
                          {["INSTAGRAM", "FACEBOOK", "LINKEDIN"].map(
                            (social, index) => (
                              <motion.a
                                key={social}
                                href="#"
                                className="block text-xs lg:text-sm text-gray-300 hover:text-white transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 1.8 + index * 0.1,
                                  duration: 0.6,
                                }}
                                whileHover={{ x: 5 }}
                              >
                                {social}
                              </motion.a>
                            )
                          )}
                        </div>
                      </motion.div>
                      <motion.div variants={rightContentVariants}>
                        <motion.h3
                          className="text-xs lg:text-sm font-medium tracking-wider text-gray-400 mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.0 }}
                        >
                          LEGAL
                        </motion.h3>
                        <div className="space-y-1 lg:space-y-2">
                          {["PRIVACY POLICY", "TERMS & CONDITIONS"].map(
                            (legal, index) => (
                              <motion.a
                                key={legal}
                                href="#"
                                className="block text-xs lg:text-sm text-gray-300 hover:text-white transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 2.1 + index * 0.1,
                                  duration: 0.6,
                                }}
                                whileHover={{ x: 5 }}
                              >
                                {legal}
                              </motion.a>
                            )
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-6 lg:mt-8 pt-4 lg:pt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                  >
                    <motion.hr
                      className="border-gray-600 mb-4 lg:mb-6 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 2.4, duration: 1.2 }}
                    />
                    <motion.p
                      className="text-xs text-gray-500 tracking-wider"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.6, duration: 0.6 }}
                    >
                      ©2025 ONE EARTH PROPERTIES - ALL RIGHT RESERVED
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
