import landimgservice from '../../assets/serviceland.png';

export default function  ServiceLanding() {
  return (
    <div 
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${landimgservice})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center">
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl md:text-4xl lg:text-4xl xl:text-4xl font-light text-white tracking-widest">
            SERVICES
          </h1>
        </div>

        <div className="absolute bottom-12 left-6 lg:left-8">
          <p className="text-white text-sm font-light tracking-widest transform  origin-left">
            SCROLL
          </p>
        </div>

        <div className="absolute bottom-20 right-6 lg:right-8 max-w-md xl:max-w-lg">
          <div className="space-y-6 text-white">
            <p className="text-sm lg:text-base leading-relaxed font-light">
              At One Earth, service is rooted in purpose—a commitment to design, integrity, and the land itself. Our approach goes beyond development; it's about creating spaces that reflect your vision while honoring the Earth.
            </p>
            
            <p className="text-sm lg:text-base leading-relaxed font-light">
              Every project we undertake is guided by mindful innovation, sustainable practices, and a deep respect for natural balance. From land acquisition to design and delivery, we ensure each step contributes to a legacy of harmony, beauty, and long-term value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
