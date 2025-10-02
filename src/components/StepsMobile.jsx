import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Quality Corrorima and Spices",
    desc: "We source the finest corrorima and spices from Ethiopia, known for their exceptional quality and rich flavors.",
    bg: "bg-white"
  },
  {
    title: "Expert Production Process",
    desc: "Our state-of-the-art facilities ensure that our corrorima and spices are processed and packaged with the highest standards of hygiene and quality control.",
    bg: "bg-amber-100"
  },
  {
    title: "Global Export Reach",
    desc: "With a focus on international markets, we export our premium corrorima and spices worldwide, bringing the authentic taste of Ethiopia to global consumers.",
    bg: "bg-white"
  },
  {
    title: "Customer Satisfaction Gauranteed",
    desc: "We are committed to providing our customers with top-notch products and excellent service, ensuring their satisfaction with every purchase.",
    bg: "bg-amber-100"
  }
];

const StepsMobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);

  // Swipe up/down support
  React.useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    let touchStartY = null;
    let touchEndY = null;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      // Swipe up
      if (deltaY > 40 && activeStep < steps.length - 1) {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
      // Swipe down
      if (deltaY < -40 && activeStep > 0) {
        setActiveStep((prev) => Math.max(prev - 1, 0));
      }
      touchStartY = null;
      touchEndY = null;
    };
    ref.addEventListener('touchstart', handleTouchStart, { passive: true });
    ref.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      ref.removeEventListener('touchstart', handleTouchStart);
      ref.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeStep]);

  return (
    <div className="w-full flex flex-col items-center py-8 px-2 my-4" ref={containerRef}>
        <div className="flex-1 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Power of Our Products</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        {!showMore && (
          <button className="bg-amber-700 text-white font-semibold px-6 py-2 rounded-md mb-4" onClick={() => setShowMore(true)}>Read More</button>
        )}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`${showMore ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-500`}>
            {showMore && (
              <>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Spices</span> – Grown in the fertile forest areas of Keficho Zone, our spices, including <span className="font-semibold text-amber-600">false cardamom (korarima)</span>, are cultivated using natural and sustainable methods. Careful harvesting, proper drying, and hygienic processing ensure superior aroma, flavor, and purity.</span>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Organic Honey</span> – Our honey is sourced from forest and highland areas, free from chemicals and antibiotics. We follow organic beekeeping practices that guarantee <span className="font-semibold text-amber-600">100% natural honey</span> with high nutritional value and traceability.</span>
                <span className="block text-gray-700 text-lg py-2 font-light"><span className="font-semibold">Dairy Products</span> – Yebonga Agro PLC’s dairy line emphasizes <span className="font-semibold text-amber-600">freshness, hygiene, and nutrition.</span> From milk collection to processing and packaging, strict quality control systems are applied to meet food safety standards.</span>
                <span className="block mt-2 text-lg font-semibold ">To maintain and assure quality, we:</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Implement Good Agricultural Practices (GAP) and Good Manufacturing Practices (GMP).</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Train and support smallholder farmers in improved production and handling methods.</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Apply rigorous quality control checks at every stage of production and supply.</span>
                <span className="block mt-2 text-lg font-light py-2 text-gray-700">Strive for certifications (organic, fair trade, or export standards) to meet both local and global market requirements.</span>
                <button className="bg-amber-700 text-white font-semibold px-6 py-2 rounded-md mb-4" onClick={() => setShowMore(false)}>Show Less</button>
              </>
            )}
          </div>
        </div>
      </div>
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          className={`w-full max-w-xs p-4 rounded-xl shadow-lg ${step.bg} border mb-6 mx-auto`}
          initial={{ y: 100, opacity: 0 }}
          animate={idx === activeStep ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
          <p className="text-center leading-snug">{step.desc}</p>
        </motion.div>
      ))}
      
    </div>
  );
};

export default StepsMobile;
