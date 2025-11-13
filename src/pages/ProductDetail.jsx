import React from "react";
import { motion } from "framer-motion";
import Korarima from '../assets/korarima.jpg';
import Ginger from '../assets/ginger.jpg';
import Honey from '../assets/honey.png';
import Coffee from '../assets/coffee-tea.jpg';
import Dairy from '../assets/dairy.jpg';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Forest from "../assets/forest_2.jpg";

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


const products = [
  {
    title: "Korerima (Ethiopian Cardamom)",
    img: Korarima,
    scientific: "Aframomum corrorima",
    origin: "Kaffa Zone, South-Western Ethiopia",
    description:
      "Korerima, also known as Ethiopian cardamom, is a rare spice native to Ethiopia’s lush highlands. Cultivated in forest areas using natural and sustainable practices, it offers a warm, aromatic flavor similar to true cardamom but with a distinctly Ethiopian character.",
    processing: [
      "Harvested by trained local farmers",
      "Naturally sun-dried and cleaned to preserve essential oils",
      "Processed and packed hygienically to meet export standards",
    ],
    uses: [
      "Used in Ethiopian cuisine (e.g., berbere, niter kibbeh)",
      "Ideal for teas, spice blends, and international seasoning",
    ],
    benefits: [
      "100% natural and chemical-free",
      "High essential oil content for strong aroma",
      "Supports forest conservation and rural livelihoods",
    ],
  },
  {
    title: "Organic Forest Honey",
    img: Honey,
    origin: "Highlands and forest areas of Kaffa Zone",
    description:
      "Yebonga Agro’s organic honey is collected from forest and highland apiaries where bees forage on diverse native flora. The result is a rich, flavorful, and chemical-free honey known for its purity and health benefits.",
    processing: [
      "Produced through organic beekeeping (no antibiotics or sugar feeding)",
      "Extracted and filtered under hygienic conditions",
      "Lab-tested to ensure moisture, purity, and color standards",
    ],
    uses: [
      "Natural sweetener for drinks and foods",
      "Used in skincare and wellness products",
    ],
    benefits: [
      "100% pure & organic",
      "High in antioxidants and enzymes",
      "Traceable and sustainably sourced",
    ],
  },
  {
    title: "Ginger (Fresh and Dried)",
    img: Ginger,
    origin: "Southern and Southwestern Ethiopia",
    description:
      "Ethiopian ginger is prized for its sharp flavor and aroma. Yebonga Agro produces and processes both fresh and dried ginger suitable for culinary, medicinal, and industrial use.",
    processing: [
      "Harvested at full maturity for maximum flavor",
      "Cleaned, sliced, and sun-dried under hygienic conditions",
      "Graded and packaged for both local and export markets",
    ],
    uses: [
      "Food seasoning, herbal tea, and health supplements",
      "Ingredient in pharmaceuticals and beverages",
    ],
    benefits: [
      "Rich in antioxidants and anti-inflammatory properties",
      "Chemical-free and naturally processed",
      "Strong flavor profile suitable for export markets",
    ],
  },
  {
    title: "Ethiopian Coffee and Tea",
    img: Coffee,
    origin: "Highland regions of Ethiopia",
    description:
      "Our coffee and tea lines celebrate Ethiopia’s world-renowned beverage heritage. The coffee is hand-picked from smallholder farms, while the tea is grown in fertile highlands with optimal rainfall.",
    processing: [
      "Washed and natural coffee varieties processed with care",
      "Tea leaves hand-plucked and dried for maximum aroma",
      "Strict quality control before packaging",
    ],
    uses: [
      "Premium beverages for export and local markets",
      "Ideal for cafes, hotels, and distributors",
    ],
    benefits: [
      "Authentic Ethiopian flavor and aroma",
      "Sustainably farmed and ethically sourced",
      "Freshly roasted and packed for export",
    ],
  },
  {
    title: "Dairy Products (Milk, Yogurt, Butter)",
    img: Dairy,
    origin: "Ethiopian Highlands",
    description:
      "Yebonga Agro’s dairy products are produced from fresh, high-quality milk collected from local farms. The line includes milk, yogurt, and traditional Ethiopian butter (kibe), processed with modern hygiene standards.",
    processing: [
      "Daily milk collection from healthy livestock",
      "Pasteurized and packaged under GMP standards",
      "Chilled distribution ensures freshness and safety",
    ],
    uses: [
      "Milk, yogurt, and butter for local and export markets",
      "Perfect for households, bakeries, and hospitality",
    ],
    benefits: [
      "Nutrient-rich and preservative-free",
      "Produced under strict food safety standards",
      "Promotes local dairy farming and employment",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductDetail = () => {

  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
  const isLarge = useIsLargeScreen();

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-white pt-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl md:text-6xl font-serif font-bold text-blue-500 mb-10"
      >
        Our Products
      </motion.h1>

      <div className="flex flex-col gap-20 px-6 md:px-20 pb-20">
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-r-2xl overflow-hidden "
            style={{
              backgroundImage: `url(${product.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '600px'
            }}
          >
            {/* White fade overlay - only covers left half on larger screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-1/2"></div>
            
            {/* Content with proper z-index - half width on larger screens */}
            <div className="relative z-10 p-8 md:p-12 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-blue-600 mb-2">
                {product.title}
              </h2>
              {product.scientific && (
                <p className="italic text-gray-700 mb-2">
                  Scientific name: {product.scientific}
                </p>
              )}
              <p className="text-gray-800 mb-4">
                <span className="font-semibold">Origin:</span> {product.origin}
              </p>
              <p className="text-gray-800 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <p className="font-semibold text-blue-600">Processing & Quality:</p>
                <ul className="list-disc list-inside text-gray-800">
                  {product.processing.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="font-semibold text-blue-600 mt-4">Uses:</p>
                <ul className="list-disc list-inside text-gray-800">
                  {product.uses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="font-semibold text-blue-600 mt-4">Key Benefits:</p>
                <ul className="list-disc list-inside text-gray-800">
                  {product.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
       
    </div>
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
          <div className="absolute inset-0 bg-black/30" />

          {/* Footer content on top */}
          <div className="relative z-10">
            <Footer />
          </div>
        </motion.footer>
    </div>
    
  );
}

export default ProductDetail;