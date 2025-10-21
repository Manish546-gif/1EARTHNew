import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CurtainPreloader = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  const leftCurtain = useAnimation();
  const rightCurtain = useAnimation();
  const leftCenterLine = useAnimation();
  const rightCenterLine = useAnimation();
  const leftEdgeLine = useAnimation();
  const rightEdgeLine = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      
      await Promise.all([
        leftCurtain.start({ x: "0%", transition: { duration: 1, ease: "easeInOut" } }),
        rightCurtain.start({ x: "0%", transition: { duration: 1, ease: "easeInOut" } }),
      ]);

     
      await Promise.all([
        leftCenterLine.start({ height: "50%", transition: { duration: 1.4, ease: "easeInOut" } }),
        leftEdgeLine.start({ height: "100%", transition: { duration: 1.4, ease: "easeInOut" } }),
        rightCenterLine.start({ height: "50%", transition: { duration: 1.4, ease: "easeInOut" } }),
        rightEdgeLine.start({ height: "100%", transition: { duration: 1.4, ease: "easeInOut" } }),
      ]);

     
      await new Promise((res) => setTimeout(res, 1000));

     
      await Promise.all([
        leftCenterLine.start({ height: "0%", transition: { duration: 1.4, ease: "easeInOut" } }),
        leftEdgeLine.start({ height: "0%", transition: { duration: 1.4, ease: "easeInOut" } }),
        rightCenterLine.start({ height: "0%", transition: { duration: 1.4, ease: "easeInOut" } }),
        rightEdgeLine.start({ height: "0%", transition: { duration: 1.4, ease: "easeInOut" } }),
      ]);

    
      await Promise.all([
        leftCurtain.start({ x: "-100%", transition: { duration: 1, ease: "easeInOut" } }),
        rightCurtain.start({ x: "100%", transition: { duration: 1, ease: "easeInOut" } }),
      ]);

      setTimeout(() => setShowContent(true), 0);
    };

    sequence();
  }, []);

  if (showContent) return children;

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none">
    
      <motion.div
        className="w-1/2 h-full bg-[#f5ebd3]  relative"
        initial={{ x: "-100%" }}
        animate={leftCurtain}
      >
        <motion.div
          className="w-[1px] bg-black absolute left-[10%] bottom-0 origin-bottom"
          initial={{ height: 0 }}
          animate={leftEdgeLine}
        />
        <motion.div
          className="w-[1px] bg-black absolute right-[0%] bottom-0 origin-bottom"
          initial={{ height: 0 }}
          animate={leftCenterLine}
        />
      </motion.div>

      
      <motion.div
        className="w-1/2 h-full bg-[#f5ebd3]  relative"
        initial={{ x: "100%" }}
        animate={rightCurtain}
      >
        <motion.div
          className="w-[1px] bg-black absolute right-[10%] top-0 origin-top"
          initial={{ height: 0 }}
          animate={rightEdgeLine}
        />
        <motion.div
          className="w-[1px] bg-black absolute left-[0%] top-0 origin-top"
          initial={{ height: 0 }}
          animate={rightCenterLine}
        />
      </motion.div>
    </div>
  );
};

export default CurtainPreloader;
