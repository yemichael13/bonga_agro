import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Quality Corrorima and Spices",
    desc: "We source the finest corrorima and spices from Ethiopia, known for their exceptional quality and rich flavors.",
    bg: "bg-white",
    rotate: "rotate-[-2deg]"
  },
  {
    title: "Expert Production Process",
    desc: "Our state-of-the-art facilities ensure that our corrorima and spices are processed and packaged with the highest standards of hygiene and quality control.",
    bg: "bg-amber-100",
    rotate: "rotate-[3deg]"
  },
  {
    title: "Global Export Reach",
    desc: "With a focus on international markets, we export our premium corrorima and spices worldwide, bringing the authentic taste of Ethiopia to global consumers.",
    bg: "bg-white",
    rotate: "rotate-[-2deg]"
  },
  {
    title: "Customer Satisfaction Gauranteed",
    desc: "We are committed to providing our customers with top-notch products and excellent service, ensuring their satisfaction with every purchase.",
    bg: "bg-amber-100",
    rotate: "rotate-[3deg]"
  }
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};



const StepsSection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  // Only allow scroll when mouse is over the steps area

  const handleWheel = useCallback((e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setTimeout(() => { isScrolling.current = false; }, 400); // debounce
    if (e.deltaY > 0 && activeStep < steps.length - 1) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else if (e.deltaY < 0 && activeStep > 0) {
      setActiveStep((prev) => Math.max(prev - 1, 0));
    }
  }, [activeStep]);

  // Pause body scroll while not all cards are revealed and Steps is hovered/focused

  React.useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    const pauseScroll = () => {
      if (activeStep < steps.length - 1) {
        document.body.style.overflow = 'hidden';
      }
    };
    const resumeScroll = () => {
      document.body.style.overflow = '';
    };
    ref.addEventListener('mouseenter', pauseScroll);
    ref.addEventListener('mouseleave', resumeScroll);
    // Touch swipe support for mobile
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
    // Also resume scroll if last card is reached
    if (activeStep === steps.length - 1) {
      resumeScroll();
    }
    return () => {
      ref.removeEventListener('mouseenter', pauseScroll);
      ref.removeEventListener('mouseleave', resumeScroll);
      ref.removeEventListener('touchstart', handleTouchStart);
      ref.removeEventListener('touchend', handleTouchEnd);
      resumeScroll();
    };
  }, [activeStep]);

  React.useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    ref.addEventListener('wheel', handleWheel, { passive: false });
    return () => ref.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:mt-15 pt-30 px-4 md:px-4">
      <div className="flex-1 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Power of Our Products</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <button className="bg-amber-700 text-white font-semibold px-6 py-2 rounded-md">Read More</button>
      </div>
      <div className="flex-1 relative min-h-[500px] overflow-hidden" ref={containerRef}>
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={`w-80 md:w-96 p-6 rounded-xl shadow-lg ${step.bg} ${step.rotate} border absolute left-1/2 -translate-x-1/2 top-0`}
            style={{ zIndex: idx + 1, pointerEvents: idx === activeStep ? 'auto' : 'none' }}
            initial={{ y: 100 + idx * 40, opacity: 0 }}
            animate={idx <= activeStep ? { y: 0, opacity: 1 } : { y: 100 + idx * 40, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: idx * 0.1 }}
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
