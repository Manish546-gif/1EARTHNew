import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LetterParallax () {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');
    const container = containerRef.current;

    gsap.set(letters, {
      opacity: 0,
      rotationX: () => gsap.utils.random(45, 180),
      rotationY: () => gsap.utils.random(-90, 90),
      rotationZ: () => gsap.utils.random(-45, 45),
      scale: 0.2,
      z: () => gsap.utils.random(-2000, -500), 
      transformOrigin: "center center",
      filter: "blur(15px)",
    });

  
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "-15% 20%",
       
        end: "35% 40%",
        scrub: 1.5,
      }
    });

    
    mainTl.to(letters, {
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      z: 0, 
      filter: "blur(0px)",
      duration: 2.5,
      ease: "power2.out",
      stagger: {
        amount: 1.2,
        from: "start"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const createLetters = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="letter inline-block transform-gpu"
        style={{ 
          display: char === ' ' ? 'inline' : 'inline-block',
          width: char === ' ' ? '0.5em' : 'auto',
          transformStyle: 'preserve-3d'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef} 
      className="relative h-[70vh] bg-[#FBF0DA] overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      <div className="relative z-10 text-center" style={{ transformStyle: 'preserve-3d' }}>
        <div 
          ref={textRef}
          className="text-6xl md:text-9xl lg:text-10xl  text-black leading-tight select-none"
          style={{ 
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="block " style={{ transformStyle: 'preserve-3d' }}>
            {createLetters('CRAFTED WITH')}
          </div>
          
          <div className="block" style={{ transformStyle: 'preserve-3d' }}>
            {createLetters('PURPOSE')}
          </div>
        </div>
      </div>
    </div>
  );
}