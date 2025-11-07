import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Spice from "../assets/spicecollection.jpg";
import Spice_2 from "../assets/spece-2.avif";
import Spice_3 from "../assets/spice-3.jpg";
import Honey_1 from "../assets/honey-1.jpg";


function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isLarge;
}

const Hero = () => {
  const [homeAnimKey] = useState(0);
  const homeRef = useRef(null);
  const homeInView = useInView(homeRef, { amount: 0.5, triggerOnce: false });

  const images = [Spice, Spice_2, Spice_3, Honey_1];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(t);
  }, [images.length]);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={homeRef}
      className="relative pt-16 min-h-screen overflow-hidden md:pt-20"
    >
      {/* Background slideshow - full width/height */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`hero-${i}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      {/* Left fade to white for readability on larger screens */}
      <div className="absolute inset-y-0 left-0  md:w-1/2 pointer-events-none bg-linear-to-r from-white/95 to-transparent z-0" />

      {/* Content: overlayed on top of the background */}
      <div className="relative z-20 flex items-center justify-start h-full">
        {/* Text column - on md+ positioned left, on small screens centered */}
        <div className="w-full max-w-3xl px-6 md:px-16 py-12 md:py-10">
        <motion.h1
          key={homeAnimKey}
          className="md:text-8xl text-7xl text-blue-700 font-bold px-2 mb-6 leading-tight text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={homeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2 }}
        >
          Yebonga Agro PLC
        </motion.h1>

        <motion.h3
          className="md:text-2xl text-xl font-semibold mb-6 text-gray-900 font-serif"
          animate={{ x: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          "Bringing Ethiopia's Unique Flavours To The World"
        </motion.h3>

  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          <motion.a
            href="#contact"
            onClick={handleSmoothScroll}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-auto"
          >
            <button className="w-full sm:w-auto cursor-pointer border border-blue-400 bg-blue-400 text-white font-bold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-400 transition-colors duration-300 shadow">
              Get In Touch
            </button>
          </motion.a>

          <motion.a
            href="#footer"
            onClick={handleSmoothScroll}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-auto"
          >
            <button className="w-full cursor-pointer sm:w-auto bg-white border border-blue-400 text-blue-400 md:px-6 px-3 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 shadow-sm">
              Subscribe to Newsletter
            </button>
          </motion.a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
