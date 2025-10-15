
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import whychoose from "../../assets/whychoose.png";

const TestimonialSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      
      <img
  data-scroll
  data-scroll-speed="-0.2"
  src={whychoose}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

      <div className="absolute inset-0 bg-black/60"></div>
      <FaQuoteLeft className=" text-5xl   text-white absolute mb-60 mr-60 opacity-90" />
      
      <div className="relative z-10 max-w-3xl text-white">
        
      

      
        <p className="text-gray-200 text-[15px] md:ml-40 w-70 text-start leading-relaxed md:text-base">
          Investing in One Earth Properties has been one of the most fulfilling
          decisions I’ve made. The project beautifully combines natural serenity
          with thoughtful planning — every detail reflects care, balance, and
          sustainability. It’s not just a property; it feels like being part of
          something larger, a community built with purpose.
        </p>

       
        <div className="h-px bg-gray-400/40 my-6 md:ml-40 w-60"></div>

       
        <div className="md:ml-40">
          <h3 className="text-lg font-semibold tracking-wide">
            ANANYA MEHTA
          </h3>
          <p className="text-sm text-gray-300 mt-1">Managing Director</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
