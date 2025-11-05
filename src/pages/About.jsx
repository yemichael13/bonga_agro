import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic_10 from "../assets/img_10.jpeg";
import Pic_11 from "../assets/img_11.jpeg";
import Forest from "../assets/forest.jpg";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const About = () => {
  const companyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const qualityRef = useRef(null);

  const companyInView = useInView(companyRef, { amount: 0.3 });
  const visionInView = useInView(visionRef, { amount: 0.3 });
  const valuesInView = useInView(valuesRef, { amount: 0.3 });
  const qualityInView = useInView(qualityRef, { amount: 0.3 });

  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
  const isLarge = useIsLargeScreen();

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-green-50 to-amber-50 px-6 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold text-blue-600 mb-4"
        >
          About Yebonga Agro PLC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl text-lg md:text-xl text-gray-700"
        >
          Cultivating Ethiopia’s natural heritage through sustainable production
          of premium spices, honey, and dairy — from the forest to the world.
        </motion.p>
      </section>

      {/* Company Overview */}
      <section
        ref={companyRef}
        className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
      >
        <motion.img
          src={Pic_10}
          alt="Yebonga Agro plantation"
          className="rounded-xl shadow-lg md:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={companyInView ? "visible" : "hidden"}
        />
        <motion.div
          className="md:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={companyInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-serif text-blue-600 mb-4">
            Who We Are
          </h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            <strong>Yebonga Agro Private Limited Company</strong> is an emerging
            agribusiness enterprise dedicated to the production, processing, and
            marketing of high-quality spices, honey, and dairy products.
            Established with the vision of harnessing Ethiopia’s rich
            agricultural resources, Yebonga Agro focuses on delivering safe,
            nutritious, and premium products to both local and international
            markets.
          </p>
          <p className="leading-relaxed text-gray-700">
            We work hand-in-hand with smallholder farmers and cooperatives to
            strengthen agricultural value chains, enhance product quality, and
            promote sustainable rural development through training, inputs, and
            market linkages.
          </p>
        </motion.div>
      </section>

      {/* Vision, Mission, and Background */}
      <section
        ref={visionRef}
        className="bg-blue-50 py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10"
      >
        <motion.div
          className="md:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-serif text-blue-600 mb-4">
            Vision & Background
          </h2>
          <p className="leading-relaxed mb-4 text-gray-700">
            Yebonga Agro PLC is driven by a powerful vision — to become a
            trusted leader in sustainable agribusiness, contributing to rural
            transformation, export diversification, and environmental
            preservation. Although newly established, the company is deeply
            rooted in Ethiopia’s agricultural heritage and modern innovation.
          </p>
          <p className="leading-relaxed text-gray-700">
            Founded with an initial capital of <strong>10 million ETB</strong>,
            Yebonga Agro has identified the lush forests of the Kaffa Zone in
            South-Western Ethiopia as ideal for cultivating high-value spices,
            particularly <strong>false cardamom (Aframomum corrorima)</strong> —
            known locally as korarima. Alongside spice cultivation, the company
            is expanding into organic honey production and dairy processing,
            ensuring every product meets global quality standards.
          </p>
        </motion.div>
        <motion.img
          src={Pic_11}
          alt="Spice Processing Facility"
          className="rounded-xl shadow-lg md:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
        />
      </section>

      {/* Core Values */}
      <section
        ref={valuesRef}
        className="py-16 px-6 md:px-20 text-center bg-white"
      >
        <motion.h2
          className="text-4xl font-serif text-blue-600 mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
        >
          Our Core Values
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
        >
          {[
            "Quality Excellence",
            "Sustainability",
            "Innovation & Growth",
            "Integrity & Transparency",
            "Inclusiveness",
            "Partnership & Collaboration",
            "Customer-Centric Approach",
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {value}
              </h3>
              <p className="text-gray-600">
                {
                  [
                    "We uphold uncompromising quality from production to packaging.",
                    "We operate with deep respect for nature and future generations.",
                    "We embrace creativity, technology, and continuous improvement.",
                    "We value honesty and transparency in every relationship.",
                    "We empower local farmers and communities inclusively.",
                    "We believe in strong partnerships for sustainable success.",
                    "We always put customer satisfaction at the heart of our mission.",
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Quality Section */}
      <section
        ref={qualityRef}
        className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <motion.h2
          className="text-4xl font-serif text-blue-600 text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate={qualityInView ? "visible" : "hidden"}
        >
          Quality You Can Trust
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={fadeInUp}
          initial="hidden"
          animate={qualityInView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Spices",
              desc: "Cultivated in the fertile forests of Keficho Zone, our spices — especially korarima — are grown naturally, harvested carefully, and processed hygienically for unmatched aroma and flavor.",
            },
            {
              title: "Organic Honey",
              desc: "Sourced from Ethiopia’s highlands and forests, our honey is 100% pure and chemical-free, produced using eco-friendly and traceable organic beekeeping practices.",
            },
            {
              title: "Dairy Products",
              desc: "Our dairy line emphasizes freshness, nutrition, and hygiene — ensuring every product meets rigorous safety and quality standards.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white border border-blue-100 rounded-xl shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
          <div className="absolute inset-0 bg-black/30" />

          {/* Footer content on top */}
          <div className="relative z-10">
            <Footer />
          </div>
        </motion.footer>
    </div>
  );
};

export default About;
