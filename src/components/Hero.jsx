import React, {useMemo} from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


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

const Hero = () => {
    const [homeAnimKey, setHomeAnimKey] = React.useState(0);
    const homeRef = useRef(null);
    const homeInView = useInView(homeRef, { amount: 0.5, triggerOnce: false });

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
    return (
        <div>
            <section id="hero" ref={homeRef}  className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[80vh]">
                <motion.h1
                  key={homeAnimKey}
                  className="md:text-9xl text-8xl px-2 my-10 font-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={homeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 2 }}
                >
                  
                  Yebonga Agro PLC
                </motion.h1>
                <motion.h3
                  className="md:text-5xl px-2 text-4xl my-5 text-center font-serif text-blue-500"
                  animate={{ x: [0, -30, 30, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                  "Bringing Ethiopia's Unique Flavours To The World"
                </motion.h3>
                <div className="w-full md:text-center px-10 py-5 bg-blue-100 my-4">
                  <motion.p 
                    className="md:text-lg text-sm font-light "
                    initial={{ opacity: 0, y: 40 }}
                    animate={homeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 3 }}
                  >
                    Yebonga Agro PLC is a newly established agribusiness enterprise founded with the ambition of tapping into Ethiopia's rich natural resources to produce high-quality and sustainable agricultural products. Although recently formed, the company is rooted in a strong vision to contribute to rural development, export diversification, and improved livelihoods through modern and inclusive agribusiness practices.
                  </motion.p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-5 md:gap-20">
                  <motion.a
                    href="#contact"
                    onClick={handleSmoothScroll}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <button className="bg-blue-400 text-white font-bold px-6 py-3 border-2 border-blue-400 rounded-full text-xl hover:cursor-pointer hover:bg-white hover:text-blue-400  transition-colors duration-300">Get In Touch</button>
                  </motion.a>
                  <motion.a
                    href="#footer"
                    onClick={handleSmoothScroll}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <button className="bg-white text-blue-400 border-2 font-bold border-blue-400 px-6 py-3 rounded-full text-xl ml-4 hover:cursor-pointer hover:bg-blue-400 hover:text-white transition-colors duration-300">Subscribe to Newsletter</button>
                  </motion.a>
                </div>
              </section>
        </div>
    )
}
export default Hero;