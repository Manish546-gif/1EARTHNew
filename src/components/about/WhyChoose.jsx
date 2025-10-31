import React from "react";
import whychoose from "../../assets/aboutland.png";

const WhyChoose = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-8 py-16 overflow-hidden">
     
      <img
  data-scroll
  data-scroll-speed="-0.2"
  src={whychoose}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-8 text-[#FBF0DA]">
        
       
        <div className="grid grid-cols-2 gap-6 w-full">
         
          <div className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80">
            <p className="text-lg font-semibold tracking-wide mb-2">
              TRANSPARENCY & TRUST
            </p>
            <p className="text-sm text-gray-300">
              Complete clarity in pricing, approvals, and documentation.
            </p>
          </div>

          
          <div className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80">
            <p className="text-lg font-semibold tracking-wide mb-2">
              QUALITY & PLANNING
            </p>
            <p className="text-sm text-gray-300">
              Meticulous planning and infrastructure development.
            </p>
          </div>

         
          <div className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80">
            <p className="text-lg font-semibold tracking-wide mb-2">
              TIMELY DELIVERY
            </p>
            <p className="text-sm text-gray-300">
              We respect your time and deliver on commitments.
            </p>
          </div>

          <div className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80">
            <p className="text-lg font-semibold tracking-wide mb-2">
              CUSTOMER-CENTRIC APPROACH
            </p>
            <p className="text-sm text-gray-300">
              We provide continuous support and guidance.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col justify-center">
          <p className="text-lg uppercase tracking-[3px] text-gray-50 mb-6">
            Why Choose Us
          </p>
          <h2 className="text-5xl font-semibold uppercase leading-tight">
            Your Trusted
            <br /> Partner in
            <br /> Land
            <br /> Investments
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
