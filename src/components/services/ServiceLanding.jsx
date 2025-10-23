import landimgservice from '../../assets/serviceland.png';

export default function  ServiceLanding() {
  return (
    <div 
      className="relative min-h-screen overflow-hidden flex text-[#FBF0DA] items-center justify-center"
      
    >
      <img
  data-scroll
  data-scroll-speed="-0.2"
  src={landimgservice}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center">
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl md:text-4xl lg:text-4xl xl:text-6xl">
            SERVICES
          </h1>
        </div>

        <div className="absolute bottom-12 left-6 lg:left-8">
          <h5 className=" text-xl font-light tracking-widest transform  origin-left">
            SCROLL
          </h5>
        </div>

        <div className="absolute bottom-20 right-6 lg:right-8 max-w-md xl:max-w-xs">
          <div className="space-y-4 ">
            <p className="text-sm lg:text-base">
              At One Earth, service is rooted in purpose—a commitment to design, integrity, and the land itself. Our approach goes beyond development; it's about creating spaces that reflect your vision while honoring the Earth.
            </p>
            
            <p className="text-sm lg:text-base">
              Every project we undertake is guided by mindful innovation, sustainable practices, and a deep respect for natural balance. From land acquisition to design and delivery, we ensure each step contributes to a legacy of harmony, beauty, and long-term value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
