import React, {useMemo} from "react";

import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import MobileGallery from "../components/MobileGallery";
import StepsSection from "../components/StepsSection";
import StepsMobile from "../components/StepsMobile";
import Footer from "../components/Footer";
import AboutComp from "../components/AboutComp";
import ProductsComp from "../components/ProductsComp";
import Testimonials from "../components/Testinomial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";



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
      target.scrollIntoView({ behavior: 'smooth' });
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
    <div className="w-full h-auto pt-20">
        <Navbar />
        <section id="hero" >
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
            <ProductsComp />
        </section>
        <section id="steps" >
            {/* Steps Section: desktop/tablet only */}
            <div className="hidden md:block mb-2">
                <StepsSection />
              </div>
              {/* StepsMobile: mobile only */}
              <div className="block md:hidden mb-2">
                <StepsMobile />
        </div>
        </section>
       
        <section id="testimonials" >
            <Testimonials />
        </section>
        <section id="contact" >
            <Contact />
        </section>
       
        <motion.footer
          ref={footerRef}
          className="w-full py-8 bg-blue-400 text-white text-center mt-10"
          initial={isLarge ? { opacity: 0, y: 40 } : false}
          animate={isLarge && footerInView ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1.2 }}
>
  <Footer />
</motion.footer>
      </div>
  );
}
export default Home;
   
      
        
              
              
              