import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CurtainPreloader = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  // Refs for all animated parts
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const leftEdgeLineRef = useRef(null);
  const leftCenterLineRef = useRef(null);
  const rightEdgeLineRef = useRef(null);
  const rightCenterLineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => setShowContent(true),
    });

    tl.set([leftCurtainRef.current, rightCurtainRef.current], { x: 0 }); // start from 0 for control

    tl.fromTo(
      leftCurtainRef.current,
      { x: "-100%" },
      { x: "0%", duration: 1 },
      0
    )
      .fromTo(
        rightCurtainRef.current,
        { x: "100%" },
        { x: "0%", duration: 1 },
        0
      )

      // Line draw-in animation
      .to(
        [leftCenterLineRef.current, rightCenterLineRef.current],
        { height: "50%", duration: 1.4 },
        "+=0.1"
      )
      .to(
        [leftEdgeLineRef.current, rightEdgeLineRef.current],
        { height: "100%", duration: 1.4 },
        "<"
      )

      // Hold for a moment
      .to({}, { duration: 1 })

      // Line shrink animation
      .to(
        [leftCenterLineRef.current, rightCenterLineRef.current],
        { height: 0, duration: 1.4 },
        0
      )
      .to(
        [leftEdgeLineRef.current, rightEdgeLineRef.current],
        { height: 0, duration: 1.4 },
        "<"
      )

      // Curtains slide out
      .to(
        leftCurtainRef.current,
        { x: "-100%", duration: 1 },
        "+=0.3"
      )
      .to(
        rightCurtainRef.current,
        { x: "100%", duration: 1 },
        "<"
      );

    return () => tl.kill();
  }, []);

  if (showContent) return children;

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none overflow-hidden">
      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="w-1/2 h-full bg-[#1a2332] relative"
      >
        <div
          ref={leftEdgeLineRef}
          className="w-[1px] bg-white absolute left-[10%] bottom-0 origin-bottom h-0"
        />
        <div
          ref={leftCenterLineRef}
          className="w-[1px] bg-white absolute right-[0%] bottom-0 origin-bottom h-0"
        />
      </div>

      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="w-1/2 h-full bg-[#1a2332] relative"
      >
        <div
          ref={rightEdgeLineRef}
          className="w-[1px] bg-white absolute right-[10%] top-0 origin-top h-0"
        />
        <div
          ref={rightCenterLineRef}
          className="w-[1px] bg-white absolute left-[0%] top-0 origin-top h-0"
        />
      </div>
    </div>
  );
};

export default CurtainPreloader;
