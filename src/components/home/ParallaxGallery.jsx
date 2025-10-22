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
      className="relative h-[80vh] mt-20 flex  justify-center "
    >
      
      <div className="relative w-[550px] h-[600px]">
        <img
          
          src={img1}
          alt="Main"
          className="w-full z-2 h-full object-cover "
        />
      </div>

      
      <img
         data-scroll
        data-scroll-speed="0.05"
        src={img2}
        alt=""
        className="absolute z-2 top-[100%] left-[5%] w-[250px] h-[170px] object-cover "
      />

     
      <img
       data-scroll
        data-scroll-speed="0.05"
        src={img3}
        alt=""
        className="absolute z-2 top-[100%] right-[5%] w-[220px] h-[150px] object-cover "
      />

      
      <img
       data-scroll
        data-scroll-speed="0.05"
        src={img4}
        alt=""
        className="absolute z-2 -bottom-[75%] left-[5%] w-[260px] h-[140px] object-cover "
      />

    
      <img
        data-scroll
        data-scroll-speed="0.05"
        src={img5}
        alt=""
        className="absolute z-2 -bottom-[75%] right-[5%] w-[260px] h-[140px] object-cover "
      />

      
      <img
            data-scroll
        data-scroll-speed="0.05"
        src={img6}
        alt=""
        className="absolute z-2 -bottom-[100%] left-[45%] w-[180px] h-[130px] object-cover "
      />
    </section>
  );
};

export default ParallaxGallery;
