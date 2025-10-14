import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


import Projects from "./pages/ProjectsSection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Projectsolo from "./pages/Projectsolo";
import Services from "./pages/Services";
import HomeLanding from "./components/home/HomeLanding";

const App = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Wait for the scroll instance to be ready before updating
    setTimeout(() => {
      scroll.update();
      scroll.scrollTo(0, { duration: 0, disableLerp: true });
    }, 100);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectsolo" element={<Projectsolo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/homelanding" element={<HomeLanding />} />
      </Routes>
    </div>
  );
};

export default App;
