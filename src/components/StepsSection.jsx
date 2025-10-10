import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Quality Korerima and Spices",
    desc: "We source the finest korerima and spices from Ethiopia, known for their exceptional quality and rich flavors.",
    bg: "bg-white",
    rotate: "rotate-[-2deg]"
  },
  {
    title: "Expert Production Process",
    desc: "Our state-of-the-art facilities ensure that our korerima and spices are processed and packaged with the highest standards of hygiene and quality control.",
    bg: "bg-blue-100",
    rotate: "rotate-[3deg]"
  },
  {
    title: "Global Export Reach",
    desc: "With a focus on international markets, we export our premium corrorima and spices worldwide, bringing the authentic taste of Ethiopia to global consumers.",
    bg: "bg-white",
    rotate: "rotate-[-2deg]"
  },
  {
    title: "Customer Satisfaction Guaranteed",
    desc: "We are committed to providing our customers with top-notch products and excellent service, ensuring their satisfaction with every purchase.",
    bg: "bg-blue-100",
    rotate: "rotate-[3deg]"
  }
];

const StepsSection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const isScrolling = useRef(false);
  const [showMore, setShowMore] = useState(false);

  const handleWheel = useCallback(
    (e) => {
      if (isScrolling.current) return;
      const ref = containerRef.current;
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const insideSection =
        e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!insideSection) return; // allow normal page scroll

      e.preventDefault(); // block only inside section
      isScrolling.current = true;

      setTimeout(() => {
        isScrolling.current = false;
      }, 400);

      if (e.deltaY > 0 && activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeStep > 0) {
        setActiveStep((prev) => prev - 1);
      }
    },
    [activeStep]
  );

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    ref.addEventListener("wheel", handleWheel, { passive: false });
    return () => ref.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:mt-15 pt-30 px-4 md:px-4">
      {/* Left Side Text */}
      <div className="flex-1 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Power of Our Products</h2>
        <p className="mb-6">
          At Yebonga Agro PLC, quality is at the heart of everything we produce and market. Our focus is on delivering products that are <span className="text-amber-700">safe, natural, and meet international standards</span> while preserving the unique flavors and authenticity of Ethiopia’s agricultural heritage.
        </p>
        {!showMore && (
          <button
            className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-400 duration-300 border-1 border-blue-400 cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            Read More
          </button>
        )}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className={`${showMore ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-500`}>
            {showMore && (
              <>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Spices</span> – Grown in the fertile forest areas of Keficho Zone, our spices, including <span className="font-semibold text-amber-600">false cardamom (korerima)</span>, are cultivated using natural and sustainable methods. Careful harvesting, proper drying, and hygienic processing ensure superior aroma, flavor, and purity.</span>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Organic Honey</span> – Our honey is sourced from forest and highland areas, free from chemicals and antibiotics. We follow organic beekeeping practices that guarantee <span className="font-semibold text-amber-600">100% natural honey</span> with high nutritional value and traceability.</span>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Dairy Products</span> – Yebonga Agro PLC’s dairy line emphasizes <span className="font-semibold text-amber-600">freshness, hygiene, and nutrition.</span> From milk collection to processing and packaging, strict quality control systems are applied to meet food safety standards.</span>
                <span className="block mt-2 text-lg font-semibold ">To maintain and assure quality, we:</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Implement Good Agricultural Practices (GAP) and Good Manufacturing Practices (GMP).</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Train and support smallholder farmers in improved production and handling methods.</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Apply rigorous quality control checks at every stage of production and supply.</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Strive for certifications (organic, fair trade, or export standards) to meet both local and global market requirements.</span>
                <button
                  className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-400 duration-300 mt-4 border-1 border-blue-400 cursor-pointer"
                  onClick={() => setShowMore(false)}
                >
                  Show Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Right Side Cards */}
      <div
        className="flex-1 relative min-h-[500px] overflow-hidden"
        ref={containerRef}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={`w-80 md:w-1/2 p-6 rounded-xl shadow-lg ${step.bg} ${step.rotate} border absolute left-1/2 -translate-x-1/2 top-0`}
            style={{
              zIndex: idx + 1,
              pointerEvents: idx === activeStep ? "auto" : "none"
            }}
            initial={{ y: 100 + idx * 40, opacity: 0 }}
            animate={
              idx <= activeStep
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: 100 + idx * 40, opacity: 0, scale: 0.95 }
            }
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.6
            }}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
            <p className="text-center">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
