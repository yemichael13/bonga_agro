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

const AboutComp = () => {
    const [showMoreAbout, setShowMoreAbout] = React.useState(false);
    const aboutRef = useRef(null);
    const feature_1Ref = useRef(null);
    const feature_2Ref = useRef(null);
    const [aboutAnimKey, setAboutAnimKey] = React.useState(0);
    const [feature_1AnimKey, setFeature_1AnimKey] = React.useState(0);
    const [feature_2AnimKey, setFeature_2AnimKey] = React.useState(0);
    const aboutInView = useInView(aboutRef, { amount: 0.5, triggerOnce: false });
    const feature_1InView = useInView(feature_1Ref, { amount: 0.5, triggerOnce: false });
    const feature_2InView = useInView(feature_2Ref, { amount: 0.5, triggerOnce: false });

    const isLarge = useIsLargeScreen();
 
    return (
        <div>
            <section id="about-us" ref={aboutRef} className="w-full my-8 pt-25 px-4 md:px-10">
                <motion.h1 
                  key={aboutAnimKey}
                  className="text-6xl my-4 font-serif"
                  initial={isLarge ? { opacity: 0, x: -40 } : false}
                  animate={isLarge && aboutInView ? { opacity: 1, x: 0 } : false}
                  transition={{ duration: 3 }}
                >
                  About Us
                </motion.h1>
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6">
                  {[{
                    title: "Vision",
                    desc: "To lead Africa in the production and processing of organic spices, coffee, dairy, and honey, setting the standard for quality, sustainability, and innovation while delivering premium products to local and international consumers.",
                    className: "mb-6 md:mb-0 py-10 border-1 border-blue-400 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  }, {
                    title: "Mission",
                    desc: "To sustainably produce and process premium organic spices, coffee, dairy, and honey by empowering local communities, preserving forests and biodiversity, adopting innovative practices, and delivering high-quality, ethically-sourced products to local and international markets",
                    className: "mb-6 md:mb-0 py-10 border-1 border-blue-400 bg-blue-100 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  }, {
                    title: "Core Values",
                    desc: "Quality Excellence <br />Sustainability<br />Innovation and Growth<br />Integrity and Transparency<br />Inclusiveness<br />Partnership and Collaboration<br />Customer-Centric Approach",
                    className: "mb-6 md:mb-0 py-10 border-1 text-center border-blue-400 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  }].map((card, idx) => (
                    <motion.div
                      key={card.title + aboutAnimKey}
                      className={card.className}
                      initial={isLarge ? { opacity: 0, y: 40 } : false}
                      animate={isLarge && aboutInView ? { opacity: 1, y: 0 } : false}
                      transition={{ duration: 3, delay: idx * 0.5 }}
                    >
                      <h2 className="text-4xl font-serif text-center mb-4">{card.title}</h2>
                      <p dangerouslySetInnerHTML={{ __html: card.desc }} />
                    </motion.div>
                  ))}
                </div>

              </section>
        </div>
    )
}
export default AboutComp;