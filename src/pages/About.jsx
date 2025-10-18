import React, {use, useMemo} from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Pic_10 from "../assets/img_10.jpeg";
import Pic_11 from "../assets/img_11.jpeg";
import { Link } from "react-router-dom";

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

const About = () => {
    const feature_1Ref = useRef(null);
    const feature_2Ref = useRef(null);
    const [feature_1AnimKey, setFeature_1AnimKey] = React.useState(0);
    const [feature_2AnimKey, setFeature_2AnimKey] = React.useState(0);
    const feature_1InView = useInView(feature_1Ref, { amount: 0.5, triggerOnce: false });
    const feature_2InView = useInView(feature_2Ref, { amount: 0.5, triggerOnce: false });
    const isLarge = useIsLargeScreen();
    return (
        <div>
            <section id="feature_1" ref={feature_1Ref} className="w-full md:my-8 my-4">
                <div className="w-full md:px-10 px-5 py-5 flex flex-col gap-10 md:flex-row justify-between items-center my-10">
                  <motion.img 
                    key={feature_1AnimKey}
                    src={Pic_10} 
                    alt="Bonga Agro" 
                    className="mx-auto rounded-lg shadow-lg md:w-1/2 max-h-100vh md:hover:w-3/5 duration-300"
                    initial={isLarge ? { opacity: 0, x: -40 } : false}
                    animate={isLarge && feature_1InView ? { opacity: 1, x: 0 } : false}
                    transition={{ duration: 3 }}
                  />
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="md:absolute w-0 md:w-100 h-0 border border-black rotate-90 -translate-x-1/2 -translate-y-8"
                        animate={isLarge && feature_1InView  ? { x: [0, -50, 50, 0] } : false}
                        transition={{ duration: 3 }}
                      />
                      <motion.div
                        initial={isLarge ? { opacity: 0, x: 40 } : false}
                        animate={isLarge && feature_1InView ? { opacity: 1, x: 0 } : false}
                        transition={{ duration: 3 }}
                      >
                        <h3 className="text-3xl font-serif my-4 ml-4">Ethiopian Korerima</h3>
                        <p className="mb-10 ml-4">Discover the unique and aromatic Ethiopian korerima spice for your dishes.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Sustainable Sourcing</h3>
                        <p className="mb-10 ml-4">Ethically sourced and sustainably produced spices to enhance your culinary experience.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Quality Spices</h3>
                        <p className="mb-10 ml-4">Explore our wide range of premium spices sourced directly from Ethiopia.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="my-10">
                <div className="w-9/10 md:h-60 mx-auto rounded-2xl my-8 bg-blue-100 border-1 border-gray-200 shadow-lg">
                  <div className="w-full md:h-60 mx-auto rounded-2xl px-4 md:py-10 md:px-10 bg-white border-1 border-gray-200 shadow-lg hover:rotate-1 justify-center items-center duration-200">
                    <div className="flex flex-col md:flex-row justify-between items-center py-auto gap-5 md:gap-20">
                      <div>
                        <h2 className="font-serif text-4xl my-5">Experience the Flavours of Ethiopia</h2>
                        <p className="text-lg">Explore our premium korerima and spice products, sourced directly from Ethiopia.</p>
                      </div>
                      <Link to='/product-detail'>
                      <button className="bg-blue-400 text-center text-white font-bold rounded-sm px-4 py-2 mx-2 my-2 hover:bg-white hover:text-blue-400 hover:cursor-pointer border-1 border-blue-400 transform-colors duration-300"> Discover our Products</button>
                      </Link>
                    </div>
                
                  </div>
                </div>
                
              </section>
              <section 
                id="feature_2"
                ref={feature_2Ref}
                className="w-full md:my-8 my-4"
              >
                <div className="w-full md:px-10 px-5 py-5 flex flex-col gap-10 md:flex-row justify-between items-center my-10">
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="md:absolute w-0 md:w-100 h-0 border border-black rotate-90 -translate-x-1/2 -translate-y-8"
                        animate={isLarge && feature_2InView  ? { x: [0, -50, 50, 0] } : false}
                      />
                      <motion.div
                        initial={isLarge ? { opacity: 0, x: -40 } : false}
                        animate={isLarge && feature_2InView ? { opacity: 1, x: 0 } : false}
                        transition={{ duration: 3 }}
                      >
                        <h3 className="text-3xl font-serif my-4 ml-4">Premium Quality Korerima</h3>
                        <p className="mb-10 ml-4">We source the finest korerima seeds and spices to ensure premium quality in every product.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Ethically Sourced Ingredients</h3>
                        <p className="mb-10 ml-4">Our commitment to ethical sourcing practices guarantees that our products are sustainably produced.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Global Export Reach</h3>
                        <p className="mb-10 ml-4">With a worldwide distribution network, we deliver our authentic Ethiopian spices to customers globally.</p>
                      </motion.div>
                    </div>
                  </div>
                  <motion.img 
                    src={Pic_11} 
                    alt="Bonga Agro" 
                    className="mx-auto rounded-lg shadow-lg md:w-1/2 max-h-100vh md:hover:w-3/5 duration-300"
                    key={feature_2AnimKey}
                    initial={isLarge ? { opacity: 0, x: 40 } : false}
                    animate={isLarge && feature_2InView ? { opacity: 1, x: 0 } : false}
                    transition={{ duration: 3 }} 
                  />
                </div>
              </section>
        </div>
    )
}
export default About;