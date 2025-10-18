import React, {useMemo} from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Korarima from '../assets/korarima.jpg';
import Ginger from '../assets/ginger.jpg';
import Honey from '../assets/honey.png';
import Coffee from '../assets/coffee-tea.jpg';
import Dairy from '../assets/dairy.jpg';
import Export from '../assets/export.jpg';

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

const ProductsComp = () => {
    const productsRef = useRef(null);
    const [productsAnimKey, setProductsAnimKey] = React.useState(0);
    const productsInView = useInView(productsRef, { amount: 0.5, triggerOnce: false });
    const isLarge = useIsLargeScreen();
    return (
        <div>
            <section id="products" ref={productsRef} className="w-full my-8 pt-25 px-4 md:px-10">
                <motion.h1
                  key={productsAnimKey}
                  className="font-serif text-6xl text-end my-4"
                  initial={isLarge ? { opacity: 0, x: 100 } : false}
                  animate={isLarge && productsInView ? { opacity: 1, x: 0 } : false}
                  transition={{ duration: 1.2 }}
                >
                  Products
                </motion.h1>
                <motion.p
                  initial={isLarge ? { opacity: 0, y: 30 } : false}
                  animate={isLarge && productsInView ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Premium Ethiopian agricultural products crafted with sustainability, quality, and authenticity at their core.
From spice farms to global markets — nature’s best, responsibly delivered.
                </motion.p>
                <div className="relative">
                  {/* Background Images Grid */}
                  <div className="absolute top-5 left-0 right-0 grid grid-cols-1 md:grid-cols-3 md:my-0 my-2 -mx-4 md:-mx-8">
                    <div 
                      className=" h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Korarima})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                    <div 
                      className="h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Ginger})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                    <div 
                      className=" h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Coffee})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </div>
                  <div className="absolute top-96 md:top-65 left-0 right-0 grid grid-cols-1 md:grid-cols-3 md:my-0 my-2 -mx-4 md:-mx-8">
                    <div 
                      className="h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Export})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                    <div 
                      className="h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Honey})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                    <div 
                      className="h-80 md:h-60"
                      style={{
                        backgroundImage: `url(${Dairy})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6 ">
                    {[{
                      title: "Korerima (Ethiopian Cardamom)",
                      desc: "Premium-quality Korerima (Ethiopian cardamom), grown naturally in fertile Ethiopian soil, available for both local markets and international export.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }, {
                      title: "Ginger Production",
                      desc: "Fresh and dried Ethiopian ginger, carefully cultivated and processed to preserve flavor and aroma, supplied for food, beverage, and medicinal uses.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }, {
                      title: "Coffee & Tea",
                      desc: "Ethiopian coffee and tea, hand-picked and processed with care, offering authentic taste experiences cherished around the world.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }].map((card, idx) => (
                      <motion.div
                        key={card.title + productsAnimKey}
                        className={card.className}
                        initial={isLarge ? { opacity: 0, scale: 0.8, rotateX: 90 } : false}
                        animate={isLarge && productsInView ? { opacity: 1, scale: 1, rotateX: 0 } : false}
                        transition={{ duration: 0.9, delay: idx * 0.3 }}
                        style={{ perspective: 800 }}
                      >
                        <div className="relative z-10">
                          <h3 className="font-serif text-3xl text-center mb-4" style={{ color: card.color }}>{card.title}</h3>
                          <p className="text-white">{card.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
                <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6 ">
                    {[{
                      title: "Export & Local Distribution",
                      desc: "Efficient supply chain for delivering spices to local markets and exporting worldwide with full compliance to quality and trade standards.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }, {
                      title: "Organic Forest Honey",
                      desc: "Yebonga Agro's organic honey is collected from forest and highland apiaries where bees forage on diverse native flora. The result is a rich, flavorful, and chemical-free honey known for its purity and health benefits.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }, {
                      title: "Dairy Products",
                      desc: "Yebonga Agro's dairy products are produced from fresh, high-quality milk collected from local farms. The line includes milk, yogurt, and traditional Ethiopian butter (kibe), processed with modern hygiene standards.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 rounded-lg shadow-lg relative overflow-hidden bg-opacity-90 backdrop-blur-sm",
                      color: '#ffffff'
                    }].map((card, idx) => (
                      <motion.div
                        key={card.title + productsAnimKey}
                        className={card.className}
                        initial={isLarge ? { opacity: 0, scale: 0.8, rotateX: 90 } : false}
                        animate={isLarge && productsInView ? { opacity: 1, scale: 1, rotateX: 0 } : false}
                        transition={{ duration: 0.9, delay: idx * 0.3 }}
                        style={{ perspective: 800 }}
                      >
                        <div className="relative z-10">
                          <h3 className="font-serif text-3xl text-center mb-4" style={{ color: card.color }}>{card.title}</h3>
                          <p className="text-white">{card.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
        </div>
    )
}
export default ProductsComp;