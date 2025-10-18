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

const Testinomial = () => {
    const testimonialsRef = useRef(null);
    const [testimonialsAnimKey, setTestimonialsAnimKey] = React.useState(0);
    const testimonialsInView = useInView(testimonialsRef, { amount: 0.5, triggerOnce: false })
    const isLarge = useIsLargeScreen();
    return (
        <div>
            <section id="testimonials" ref={testimonialsRef} className="w-full my-8 pt-25 px-4 md:px-10">
                <motion.h1
                  key={testimonialsAnimKey}
                  className="font-serif text-6xl text-center my-4"
                  initial={isLarge ? { opacity: 0, y: -40 } : false}
                  animate={isLarge && testimonialsInView ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 1.2 }}
                >
                  Testimonials
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6">
                  {[{
                    name: "Alemu T.",
                    text: "Bonga Agro's spices are the best I've ever used! Fresh, aromatic, and ethically sourced.",
                    className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg"
                  }, {
                    name: "Sara M.",
                    text: "Their coffee and tea are simply outstanding. Highly recommend to anyone who loves authentic flavors.",
                    className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg"
                  }, {
                    name: "John D.",
                    text: "Impressed by their commitment to sustainability and quality. Will buy again!",
                    className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-blue-100 rounded-lg shadow-lg"
                  }].map((testimonial, idx) => (
                    <motion.div
                      key={testimonial.name + testimonialsAnimKey}
                      className={testimonial.className}
                      initial={isLarge ? { opacity: 0, scale: 0.8, y: 40 } : false}
                      animate={isLarge && testimonialsInView ? { opacity: 1, scale: 1, y: 0 } : false}
                      transition={{ duration: 0.9, delay: idx * 0.3 }}
                      whileHover={isLarge ? { scale: 1.05 } : false}
                    >
                      <h3 className="font-serif text-2xl text-center mb-2">{testimonial.name}</h3>
                      <p className="text-blue-400 text-center">{testimonial.text}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
        </div>
    )
}
export default Testinomial;