import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import logoDefault from "../../assets/Property 1=Default.png";
import logoVariant from "../../assets/Property 1=Variant2.png";

const Stair = (props) => {
  const locate = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoFillRef = useRef(null);
  const logoDefaultRef = useRef(null);
  const logoVariantRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Show stair parent
    tl.to(stairParentRef.current, {
      display: "block",
    });

    // Stairs animation - come in first
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    // After stairs are in, show logo container
    tl.to(logoContainerRef.current, {
      display: "flex",
      opacity: 1,
      duration: 0.3,
    });

    // Show default logo
    tl.to(logoDefaultRef.current, {
      opacity: 1,
      duration: 0.3,
    });

    // Wait a moment, then start filling variant logo from bottom to top
    tl.fromTo(logoFillRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
    }, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 4,
      ease: "power2.inOut",
      delay: 0.3,
    });

    // After logo fill completes, hide logo
    tl.to(logoContainerRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.3,
    });

    // Then reveal stairs going up
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    // Page entrance
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 5,
      scale: 1.0
    });
  }, [locate]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        {/* Logo Container - Centered */}
        <div 
          ref={logoContainerRef}
          className="absolute inset-0 flex items-center justify-center z-20 opacity-0"
          style={{ display: "none" }}
        >
          <div className="relative w-38 h-38 sm:w-52 sm:h-52 md:w-64 md:h-64">
            {/* Logo Default (base layer - shows first) */}
            <img 
              ref={logoDefaultRef}
              src={logoDefault} 
              alt="Logo" 
              className="absolute inset-0 w-full h-full object-contain opacity-0"
            />
            
            {/* Logo Variant (fills from bottom on top of default) */}
            <div 
              ref={logoFillRef}
              className="absolute inset-0"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img 
                ref={logoVariantRef}
                src={logoVariant} 
                alt="Logo Variant" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stairs */}
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;