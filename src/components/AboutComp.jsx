import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ColorBends from "../assets/ColorBends";


function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isLarge;
}

const AboutComp = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { amount: 0.4, triggerOnce: false });
  const [aboutAnimKey] = useState(0);
  const isLarge = useIsLargeScreen();

  return (
    <div className="relative overflow-hidden py-20">
      
      <div className="absolute inset-0 -z-10 opacity-70">
        <ColorBends
          colors={["#A7C7E7", "#7BD3EA", "#C2E9FB"]}
          rotation={30}
          speed={0.25}
          scale={1.2}
          frequency={1.3}
          warpStrength={1.1}
          mouseInfluence={0.6}
          parallax={0.5}
          noise={0.05}
          transparent
        />
      </div>

      {/* ✅ About Section */}
      <section
        id="about-us"
        ref={aboutRef}
        className="relative w-full my-8  px-6 md:px-16 z-10"
      >
        <motion.h1
          key={aboutAnimKey}
          className="text-5xl md:text-6xl my-6 font-serif font-bold text-center text-blue-900"
          initial={isLarge ? { opacity: 0, y: 40 } : false}
          animate={isLarge && aboutInView ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1.5 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-10"
          initial={isLarge ? { opacity: 0, y: 20 } : false}
          animate={isLarge && aboutInView ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Yebonga Agro PLC is a forward-looking agribusiness enterprise committed to
          unlocking Ethiopia’s agricultural potential through sustainable and innovative
          practices. We aim to produce, process, and export premium-quality organic
          products — from <span className="text-amber-600 font-semibold">spices</span> and{" "}
          <span className="text-amber-600 font-semibold">coffee</span> to{" "}
          <span className="text-amber-600 font-semibold">dairy</span> and{" "}
          <span className="text-amber-600 font-semibold">honey</span> — all crafted with care
          to bring the authentic taste of Ethiopia to the world.
        </motion.p>

        {/* ✅ Vision / Mission / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {[
            {
              title: "Vision",
              desc: `To lead Africa in the production and processing of organic spices, coffee, dairy, and honey — setting the standard for quality, sustainability, and innovation while delivering premium products to local and international consumers.`,
              bg: "bg-white",
            },
            {
              title: "Mission",
              desc: `To sustainably produce and process premium organic agricultural products by empowering local communities, preserving forests and biodiversity, and delivering ethically-sourced, high-quality goods to global markets.`,
              bg: "bg-blue-50",
            },
            {
              title: "Core Values",
              desc: `
                <ul class='text-left list-disc list-inside space-y-1 text-gray-700'>
                  <li><strong>Quality Excellence</strong></li>
                  <li><strong>Sustainability</strong></li>
                  <li><strong>Innovation & Growth</strong></li>
                  <li><strong>Integrity & Transparency</strong></li>
                  <li><strong>Inclusiveness</strong></li>
                  <li><strong>Partnership & Collaboration</strong></li>
                  <li><strong>Customer-Centric Approach</strong></li>
                </ul>
              `,
              bg: "bg-white",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title + aboutAnimKey}
              className={`${card.bg} py-10 px-6 rounded-xl border border-blue-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              initial={isLarge ? { opacity: 0, y: 40 } : false}
              animate={isLarge && aboutInView ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 1.5, delay: idx * 0.3 }}
            >
              <h2 className="text-3xl font-serif text-center mb-4 text-blue-900">
                {card.title}
              </h2>
              <p
                className="text-gray-700 text-center leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card.desc }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutComp;
