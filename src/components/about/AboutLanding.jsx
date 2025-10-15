
import aboutland from '../../assets/aboutland.png';
export default function  AboutLanding() {
    return (
      <div 
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
         <img
  data-scroll
  data-scroll-speed="-0.2"
  src={aboutland}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-black/40 "></div>
  
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center">
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl md:text-4xl lg:text-4xl xl:text-4xl font-light text-white tracking-widest">
              ABOUT US
            </h1>
          </div>
  
          <div className="absolute bottom-12 left-6 lg:left-8">
            <p className="text-white text-sm font-light tracking-widest transform  origin-left">
              SCROLL
            </p>
          </div>
  
          <div className="absolute bottom-20 right-6 lg:right-8 max-w-md xl:max-w-sm">
            <div className="space-y-6 text-white">
              <p className="text-sm lg:text-base leading-relaxed font-light">
              One Earth Properties creates spaces that live in harmony with nature. Guided by sustainability, balance, and purpose, each project is designed to evolve with time while hovering the land it stands on. We don’t just build, we nurture legacies that connect with people, place, and planet.              </p>
              
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  