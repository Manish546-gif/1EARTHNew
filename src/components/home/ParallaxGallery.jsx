import { useState, useEffect } from "react";
import img1 from "../../assets/center1.png";
import img2 from "../../assets/lefttop.png";
import img4 from "../../assets/righttop.png";
import img3 from "../../assets/leftbottom.png";
import img5 from "../../assets/rightbottom.png";
import img6 from "../../assets/centerbottom.png";
import LetterParallax from "./LetterParallax";

const ParallaxGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section
      className="relative mt-20 flex justify-center"
    >
      <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4 max-w-4xl w-full">
        <img
          src={img1}
          alt="Main landscape image"
          className="w-full h-full object-cover"
        />
        <img
          src={img2}
          alt="Top left overlay image"
          className="w-full h-full object-cover"
        />
        <img
          src={img3}
          alt="Top right overlay image"
          className="w-full h-full object-cover"
        />
        <img
          src={img4}
          alt="Bottom left overlay image"
          className="w-full h-full object-cover"
        />
        <img
          src={img5}
          alt="Bottom right overlay image"
          className="w-full h-full object-cover"
        />
        <img
          src={img6}
          alt="Center bottom overlay image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ParallaxGallery;
