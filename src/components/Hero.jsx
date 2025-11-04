import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Aurora from "../assets/Aurora";

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
  const [homeAnimKey, setHomeAnimKey] = useState(0);
  const homeRef = useRef(null);
  const homeInView = useInView(homeRef, { amount: 0.5, triggerOnce: false });

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={homeRef}
      className="relative md:pt-20 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden md:top-0"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#B5E2FA", "#99D9EA", "#E3F8FF"]}


          blend={0.3}
          amplitude={0.5}
          speed={0.5}
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 -z-5" />

      {/* Main Content */}
      <motion.h1
        key={homeAnimKey}
        className="md:text-8xl text-5xl text-white drop-shadow-lg font-bold px-2 my-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={homeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 2 }}
      >
        Yebonga Agro PLC
      </motion.h1>

      <motion.h3
        className="md:text-4xl text-2xl my-5 text-center font-serif text-blue-600"
        animate={{ x: [0, -30, 30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        "Bringing Ethiopia's Unique Flavours To The World"
      </motion.h3>

      <div className="w-full  text-center px-5 py-6 bg-white/10 backdrop-blur-sm  border border-white/20 shadow-md">
        <motion.p
          className="text-blue-800 text-sm md:text-lg font-light leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={homeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 3 }}
        >
          Yebonga Agro PLC is a newly established agribusiness enterprise
          founded with the ambition of tapping into Ethiopia's rich natural
          resources to produce high-quality and sustainable agricultural
          products. Although recently formed, the company is rooted in a strong
          vision to contribute to rural development, export diversification, and
          improved livelihoods through modern and inclusive agribusiness
          practices.
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center my-10 gap-6">
        <motion.a
          href="#contact"
          onClick={handleSmoothScroll}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-blue-400 text-white font-bold px-6 py-3 border-2 border-white/40
           rounded-full text-lg hover:bg-white hover:text-blue-400 transition-colors duration-300 shadow-md">
            Get In Touch
          </button>
        </motion.a>

        <motion.a
          href="#footer"
          onClick={handleSmoothScroll}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="bg-white/20 backdrop-blur-sm text-blue-500 border-2 border-white/40 px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-colors duration-300 shadow-md">
            Subscribe to Newsletter
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
