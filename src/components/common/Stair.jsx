import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const locate = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
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
    gsap.from(pageRef.current, {
      opacity: 0,
      delay:1.2,
      scale:1.2
    })
  }, [locate]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        <div className="h-screen w-full  flex">
          <div className="stair h-full w-1/5  bg-[#011827]"></div>
          <div className="stair h-full w-1/5  bg-[#011827]"></div>
          <div className="stair h-full w-1/5  bg-[#011827]"></div>
          <div className="stair h-full w-1/5  bg-[#011827]"></div>
          <div className="stair h-full w-1/5  bg-[#011827]"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
