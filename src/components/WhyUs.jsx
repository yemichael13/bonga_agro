// src/components/WhyChooseUs.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Partnership from "../assets/partnership.png";
import Quality from "../assets/quality.jpg";
import Traceability from "../assets/traceable.jpg";
import ExportReady from "../assets/export-ready.png";


const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isLarge;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs({ triggerKey = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: false });
  const isLarge = useIsLargeScreen();

  // allow retriggering when triggerKey changes (e.g., nav click)
  const [manualTrigger, setManualTrigger] = useState(false);
  useEffect(() => {
    if (triggerKey && triggerKey > 0) {
      setManualTrigger(true);
      const t = setTimeout(() => setManualTrigger(false), 1100); // animation duration + buffer
      return () => clearTimeout(t);
    }
  }, [triggerKey]);

  const shouldAnimate = inView || manualTrigger;

  const cards = [
    {
      title: "Quality & Sustainability",
      desc: "Premium, traceable spices and products grown using sustainable practices to ensure quality and environmental care.",
      icon: (
        <img src={Quality} />
      ),
    },
    {
      title: "Full Traceability",
      desc: "From farm to export — batch-level traceability and lab-tested quality for every shipment.",
      icon: (
        <img src={Traceability} />
      ),
    },
    {
      title: "Farmer Partnerships",
      desc: "We work directly with smallholder farmers — training, fair pricing and community development programs.",
      icon: (
        <img src={Partnership} />
      ),
    },
    {
      title: "Export Ready",
      desc: "Compliant packing, certification-ready produce, and reliable logistics for global distribution.",
      icon: (
        <img src={ExportReady} />
      ),
    },
  ];

  return (
    <section id="why-choose-us" ref={ref} className="relative py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          key={String(triggerKey) + (inView ? "-in" : "-out")}
          variants={containerVariants}
          initial={isLarge ? "hidden" : false}
          animate={isLarge && shouldAnimate ? "visible" : false}
        >
          <div className="text-center mb-8">
            <h3 className="text-blue-600 font-serif text-5xl md:text-8xl">Why Choose Us?</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Trusted, Sustainable & Export-Ready</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">
              We combine traditional Ethiopian farming knowledge with modern quality controls — producing premium spices, honey, coffee and tea for both local and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {cards.map((c, idx) => (
              <motion.div
                key={c.title + idx}
                variants={cardVariants}
                className="bg-white border border-amber-100 shadow-md rounded-xl p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ translateY: -6 }}
              >
                <div className="flex items-center justify-center text-center w-50 h-50 rounded-lg ">
                  {c.icon}
                </div>
                <h4 className="text-xl text-center font-semibold mt-2">{c.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
