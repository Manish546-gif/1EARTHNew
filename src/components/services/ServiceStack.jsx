import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import designConsultation from "../../assets/Rectangle 104.png";
import customSolutions from "../../assets/Rectangle 107.png";
import projectManagement from "../../assets/Rectangle 109.png";
import sustainabilityConsulting from "../../assets/Rectangle 111.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: "(1)",
    title: "DESIGN CONSULTATION",
    about: "ABOUT",
    description:
      "At One Earth Properties, every project begins with understanding your relationship with the land. Our design consultation service guides you from concept to creation—shaping ideas into meaningful plans that balance aesthetics, functionality, and nature. From initial layouts to refined design strategies, we ensure every detail reflects your vision and our shared commitment to sustainable living.",
    whatIncluded: "WHAT'S INCLUDED",
    features: [
      "Initial concept meetings and workshops",
      "Sustainability assessments",
      "Site analysis and feasibility studies",
      "Design development and refinement",
    ],
    image: designConsultation,
  },
  {
    id: 2,
    number: "(2)",
    title: "CUSTOM SOLUTIONS",
    about: "ABOUT",
    description:
      "No two landscapes are alike, and neither are our creations. At One Earth Properties, we craft bespoke land development solutions tailored to your vision—whether it's designing a serene retreat, a farmland estate, or an eco-luxury community. Every plan is shaped by the land's character, blending innovation, sustainability, and cultural context to create spaces that truly belong.",
    whatIncluded: "WHAT'S INCLUDED",
    features: [
      "Tailored design and material selection",
      "Adaptable and scalable architectural solutions",
      "Integration of cultural and environmental elements",
      "Innovative design technologies and methods",
    ],
    image: customSolutions,
  },
  {
    id: 3,
    number: "(3)",
    title: "PROJECT MANAGEMENT",
    about: "ABOUT",
    description:
      "Flawless execution is at the heart of every successful development. One Earth Properties' project management ensures each phase—from site planning to plot delivery—is handled with meticulous care. We oversee timelines, maintain quality standards, and coordinate every detail, ensuring your vision is realized while honoring both the land and your investment.",
    whatIncluded: "WHAT'S INCLUDED",
    features: [
      "Full project coordination",
      "Timeline and budget management",
      "Quality control and site supervision",
      "Stakeholder communication and reporting",
    ],
    image: projectManagement,
  },
  {
    id: 4,
    number: "(4)",
    title: "SUSTAINABILITY CONSULTING",
    about: "ABOUT",
    description:
      "Sustainability guides every decision we make at One Earth Properties. Our environmental planning service brings expert guidance on integrating eco-conscious practices throughout your project. From energy-efficient infrastructure and water conservation to regenerative design and green technologies, we ensure every development nurtures the land while creating lasting value for you and future generations.",
    whatIncluded: "WHAT'S INCLUDED",
    features: [
      "Green certifications and compliance",
      "Energy efficiency planning",
      "Resource management and waste reduction",
      "Sustainable materials sourcing and recommendations",
    ],
    image: sustainabilityConsulting,
  },
];

const ServiceCard = ({ service, bgColor, textColor }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const aboutRef = useRef(null);
  const whatIncludedRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

      // Animate title
      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0
      );

      // Animate horizontal line
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.3, duration: 1.2, ease: "power2.out" },
        0.2
      );

      // Animate number
      tl.fromTo(
        numberRef.current,
        { y: 80, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 0.8, scale: 1, duration: 1.2, ease: "power3.out" },
        0.3
      );

      // Animate about section
      tl.fromTo(
        aboutRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.8, ease: "power2.out" },
        0.4
      );

      // Animate description
      tl.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 0.9, duration: 1, ease: "power3.out" },
        0.5
      );

      // Animate "What's Included" heading
      tl.fromTo(
        whatIncludedRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.8, ease: "power2.out" },
        0.6
      );

      // Animate features list
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll("li");
        tl.fromTo(
          featureItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 0.9,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.7
        );
      }

      // Animate image
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
          0.5
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 min-h-screen  flex items-center justify-center snap-start snap-always"
    >
      <div className={`relative w-full h-full overflow-hidden`} style={{ backgroundColor: bgColor, color: textColor }}>
        <div className="max-w-[1600px] mx-auto h-full px-6 lg:px-12 py-12 lg:py-16">
          {/* Header with horizontal line */}
          <div className="mb-8 lg:mb-12">
            <div className="overflow-hidden">
              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide mb-4"
              >
                {service.title}
              </h1>
            </div>
            <div
              ref={lineRef}
              className={`w-full h-px origin-left`}
              style={{ backgroundColor: textColor }}
            ></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 h-[calc(100%-120px)]">
            {/* Left Column - Number and About */}
            <div className="flex flex-col justify-between">
              {/* Large Number */}
              <div className="overflow-hidden">
                <div
                  ref={numberRef}
                  className="text-[120px] sm:text-[150px] lg:text-[180px] xl:text-[200px] font-light leading-none opacity-80"
                >
                  {service.number}
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-4">
                <h3
                  ref={aboutRef}
                  className="text-sm lg:text-base font-light tracking-[0.3em] opacity-70"
                >
                  {service.about}
                </h3>
              </div>
            </div>

            {/* Middle Column - Description and Features */}
            <div className="flex flex-col justify-between space-y-6 lg:space-y-8">
              {/* Description */}
              <div className="overflow-hidden">
                <p
                  ref={descriptionRef}
                  className="text-sm lg:text-base leading-relaxed opacity-90"
                >
                  {service.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-4">
                <h3
                  ref={whatIncludedRef}
                  className="text-sm lg:text-base font-medium tracking-wider opacity-70"
                >
                  {service.whatIncluded}
                </h3>
                <ul ref={featuresRef} className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm lg:text-base pl-4 opacity-90"
                      style={{ borderLeft: `2px solid ${textColor}30` }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-[400px] xl:h-[500px] overflow-hidden relative">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right", backgroundColor: bgColor }}
                  className="w-full origin-right absolute z-10 h-full"
                ></motion.div>
                <img
                  ref={imageRef}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mt-6">
            <div className="w-full h-[300px] overflow-hidden relative">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right", backgroundColor: bgColor }}
                className="w-full origin-right absolute z-10 h-full"
              ></motion.div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const colors = [
  { bgColor: "#0A1F2E", textColor: "#FBF0DA" },
  { bgColor: "#FBF0DA", textColor: "#000000" },
];

function ServiceStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const height = isMobile ? `${services.length * 165}vh` : `${services.length * 100}vh`;

  return (
    <div className="relative">
      <div className="relative" style={{ height }}>
        {services.map((service) => {
          const index = (service.id - 1) % 2;
          const color = colors[index];
          return (
            <ServiceCard
              key={service.id}
              service={service}
              bgColor={color.bgColor}
              textColor={color.textColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServiceStack;