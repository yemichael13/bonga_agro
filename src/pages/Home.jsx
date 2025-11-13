import React, {useMemo} from "react";

import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import MobileGallery from "../components/MobileGallery";
import StepsSection from "../components/Steps";
import StepsMobile from "../components/StepsMobile";
import Footer from "../components/Footer";
import AboutComp from "../components/AboutComp";
import ProductsComp from "../components/ProductsComp";
import Testimonials from "../components/Testinomial";
import Contact from "../components/ContactComp";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import CEOInfo from "../components/ceoInfo";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Forest from "../assets/forest_2.jpg";



// Placeholder for image detail page

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = React.useState(window.innerWidth >= 768);
  React.useEffect(() => {
    function handleResize() {
      setIsLarge(window.innerWidth >= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isLarge;
}

const Home = () => {
  
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setMenuOpen(false);
    }
    if (targetId === "products") setProductsAnimKey((k) => k + 1);
    if (targetId === "testinomials") setTestimonialsAnimKey((k) => k + 1);
    if (targetId === "footer") setFooterAnimKey((k) => k + 1);
  };
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
  const isLarge = useIsLargeScreen();
  return (
    <div className="w-full h-auto md:pt-0 pt-20">
        <Navbar />
        <section id="hero" className="md:top-0" >
            <Hero />
        </section>

        <section id="gallery" className="w-full my-8">
            {/* Mobile Gallery - hidden on desktop */}
            <MobileGallery />
            <div className="hidden md:block">
                <Gallery className="h-100" />
            </div>
        </section>
        <section id="about-us" >
            <AboutComp />
        </section>
        <section id="products" >
            <ProductsComp/>
        </section>
        <section id="steps" className="" >
            {/* Steps Section: desktop/tablet only */}
            <div className="hidden md:block mb-2">
                <StepsSection />
              </div>
              {/* StepsMobile: mobile only */}
              <div className="block md:hidden mb-2">
                <StepsMobile />
        </div>
        
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
       
        <section id="testimonials" >
            <Testimonials />
        </section>
        <section id="ceo-info" >
            <CEOInfo />
        </section>
        <section id="contact" >
            <Contact />
        </section>
       
        <motion.footer
          ref={footerRef}
          className="w-full py-8 text-white text-center mt-10 relative overflow-hidden"
          initial={isLarge ? { opacity: 0, y: 40 } : false}
          animate={isLarge && footerInView ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1.2 }}
        >
          {/* Blurred forest background image (covers footer) */}
          <img
            src={Forest}
            alt="Forest background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75"
            style={{ transform: 'translateZ(0)' }}
          />

          {/* Optional dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Footer content on top */}
          <div className="relative z-10">
            <Footer />
          </div>
        </motion.footer>
      </div>
  );
}
export default Home;
   
      
        
              
              
              