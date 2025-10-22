import React from "react";
import img1 from "../../assets/center1.png";
import img2 from "../../assets/lefttop.png";
import img4 from "../../assets/righttop.png";
import img3 from "../../assets/leftbottom.png";
import img5 from "../../assets/rightbottom.png";
import img6 from "../../assets/centerbottom.png";

const ParallaxGallery = () => {
  return (
    <section
      className="relative h-[70vh] mt-20 flex  justify-center "
    >
      
      <div className="relative w-[400px] h-[400px]">
        <img
          
          src={img1}
          alt="Main"
          className="w-full z-2 h-full object-cover "
        />
      </div>

      
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={img2}
        alt=""
        className="absolute z-2 top-[20%] left-[10%] w-[160px] h-[120px] object-cover "
      />

     
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={img3}
        alt=""
        className="absolute z-2 top-[20%] right-[10%] w-[160px] h-[120px] object-cover "
      />

      
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={img4}
        alt=""
        className="absolute z-2 -bottom-[45%] left-[8%] w-[220px] h-[120px] object-cover "
      />

    
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={img5}
        alt=""
        className="absolute z-2 -bottom-[45%] right-[8%] w-[220px] h-[130px] object-cover "
      />

      
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={img6}
        alt=""
        className="absolute z-2 -bottom-[70%] left-[45%] w-[140px] h-[100px] object-cover "
      />
    </section>
  );
};

export default ParallaxGallery;
