import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logoDefault from "../../assets/Property 1=Default.png";
import logoVariant from "../../assets/Property 1=Variant2.png";

const CurtainPreloader = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Refs for animated parts
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const leftEdgeLineRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const rightEdgeLineRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoFillRef = useRef(null);
  const logoCircleRef = useRef(null);
  const circleArcRef = useRef(null);
  const logoDefaultRef = useRef(null);
  const logoVariantRef = useRef(null);

  // Preload images before starting animation
  useEffect(() => {
    let isMounted = true;
    
    const preloadImages = () => {
      let loadedCount = 0;
      const totalImages = 2;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages && isMounted) {
          setImagesLoaded(true);
        }
      };

      const img1 = new Image();
      img1.onload = checkAllLoaded;
      img1.onerror = checkAllLoaded; // Still proceed even if error
      img1.src = logoDefault;

      const img2 = new Image();
      img2.onload = checkAllLoaded;
      img2.onerror = checkAllLoaded;
      img2.src = logoVariant;
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    // Don't start animation until images are loaded
    if (!imagesLoaded) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setShowContent(true);
        document.body.style.overflow = "auto";
      },
    });

    // Disable scroll during animation
    document.body.style.overflow = "hidden";

    // Set initial heights for center lines to start from circle perimeter
if (logoCircleRef.current) {
  const rect = logoCircleRef.current.getBoundingClientRect();
  const radiusPx = rect.width / 2;
  
  // Top line: starts from circle's top edge, extends upward
  gsap.set(topLineRef.current, {
    height: `calc(50% - ${radiusPx}px)`,
    bottom: `calc(50% + ${radiusPx}px)`,
    top: 'auto',
    scaleY: 1,
    opacity: 1,
    visibility: 'visible', // Make visible after positioning
    transformOrigin: 'top'
  });
  
  // Bottom line: starts from circle's bottom edge, extends downward
  gsap.set(bottomLineRef.current, {
    height: `calc(50% - ${radiusPx}px)`,
    top: `calc(50% + ${radiusPx}px)`,
    bottom: 'auto',
    scaleY: 1,
    opacity: 1,
    visibility: 'visible', // Make visible after positioning
    transformOrigin: 'bottom'
  });
}

    // Initial state - edge lines at full height (visible from start)
    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], { 
      scaleY: 1, 
      opacity: 1 
    });

    // Set logo container and images to be visible from start
    gsap.set(logoContainerRef.current, { opacity: 1 });
    gsap.set([logoDefaultRef.current, logoVariantRef.current], { opacity: 1 });

    // Initial state for circle - FULLY VISIBLE from the start
    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      gsap.set(circleArcRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: 0,
        stroke: "#FBF0DA",
        strokeWidth: 1
      });
    }

    // 1. Wait before starting logo fill animation
    tl.to({}, { duration: 0.5 });

    // 2. Animate the logo fill (bottom to top)
    tl.fromTo(
      logoFillRef.current,
      { 
        clipPath: "inset(100% 0% 0% 0%)",
        height: "80%"
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        height: "80%",
        duration: 2,
        ease: "power2.inOut",
      },
      "+=0.5"
    );

    // 3. Animate circle disappearing (erasing effect)
    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      tl.to(circleArcRef.current, {
        strokeDashoffset: circleLength,
        duration: 1.5,
        ease: "power2.inOut",
      }, "-=1");
    }

    // 4. Hide logo and shrink lines FROM PERIMETER TOWARDS EDGES
    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.5 }, "+=0.3")
      .to(
        [
          leftEdgeLineRef.current,
          rightEdgeLineRef.current,
        ],
        { scaleY: 0, duration: 1, ease: "power3.inOut", stagger: 0.1 },
        "<"
      )
      // Shrink center lines from perimeter edge (transformOrigin already set)
      .to(
        [topLineRef.current, bottomLineRef.current],
        { scaleY: 0, duration: 1, ease: "power3.inOut", stagger: 0.1 },
        "<"
      );

    // 5. Open curtains
    tl.to(
      leftCurtainRef.current,
      { x: "-100%", duration: 1.5, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightCurtainRef.current,
      { x: "100%", duration: 1.5, ease: "power3.inOut" },
      "<"
    );

    // 6. Hide the preloader container itself
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });

    const fallbackTimeout = setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = "auto";
      if (containerRef.current) containerRef.current.style.display = "none";
      tl.kill();
    }, 8000);

    return () => {
      clearTimeout(fallbackTimeout);
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [imagesLoaded]);

  // Show loading screen while images are loading
  if (!imagesLoaded) {
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#011827',
          overflow: 'hidden'
        }}
      />
    );
  }

  if (showContent) return children;

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '50%',
          height: '100%',
          backgroundColor: '#011827'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Left Edge Line */}
          <div
            ref={leftEdgeLineRef}
            style={{
              width: '1px',
              height: '100%',
              position: 'absolute',
              left: '15%',
              bottom: 0,
              transformOrigin: 'bottom',
              backgroundColor: '#FBF0DA',
              opacity: 0.8
            }}
          />

 
{/* Center Top Line */}
<div
  ref={topLineRef}
  style={{
    width: '1px',
    position: 'absolute',
    right: 0,
    backgroundColor: '#FBF0DA',
    opacity: 0, // Hidden initially - GSAP will set everything
    visibility: 'hidden' // Extra safety to prevent flash
  }}
/>

{/* Center Bottom Line */}
<div
  ref={bottomLineRef}
  style={{
    width: '1px',
    position: 'absolute',
    right: 0,
    backgroundColor: '#FBF0DA',
    opacity: 0, // Hidden initially - GSAP will set everything
    visibility: 'hidden' // Extra safety to prevent flash
  }}
/>
        </div>
      </div>

      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          backgroundColor: '#011827'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Right Edge Line */}
          <div
            ref={rightEdgeLineRef}
            style={{
              width: '1px',
              height: '100%',
              position: 'absolute',
              right: '15%',
              top: 0,
              transformOrigin: 'top',
              backgroundColor: '#FBF0DA',
              opacity: 0.8
            }}
          />
        </div>
      </div>

      {/* Logo Container */}
      <div
        ref={logoContainerRef}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '160px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          opacity: 0
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Inner fill to mask the center dividing line */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: '#011827',
              zIndex: 10001,
              pointerEvents: 'none'
            }}
          />

          {/* Base Logo Image */}
          <img
            ref={logoDefaultRef}
            src={logoDefault}
            alt="Logo"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              objectFit: 'contain',
              zIndex: 10002,
              opacity: 0
            }}
          />
          
          {/* Filling Logo Image */}
          <div
            ref={logoFillRef}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              zIndex: 10002,
              overflow: 'hidden',
              clipPath: 'inset(100% 0% 0% 0%)'
            }}
          >
            <img
              ref={logoVariantRef}
              src={logoVariant}
              alt="Logo Fill"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                opacity: 0
              }}
            />
          </div>
          
          {/* Circle SVG */}
          <svg
            ref={logoCircleRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 10003
            }}
            viewBox="0 0 100 100"
          >
            <circle
              ref={circleArcRef}
              transform="rotate(0 50 50)"
              cx="50"
              cy="50"
              r="50"
              stroke="#FBF0DA"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurtainPreloader;