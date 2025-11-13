import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const faqs = [
  {
    question: "What products does Yebonga Agro PLC produce?",
    answer:
      "We specialize in high-quality Ethiopian agricultural products including Corrorima (Ethiopian cardamom), organic forest honey, ginger, coffee, tea, and dairy products. Each product is cultivated and processed using sustainable and modern agricultural practices.",
  },
  {
    question: "Where are your products sourced from?",
    answer:
      "Our products are primarily sourced from the fertile highlands and forest regions of Ethiopia — including the Kaffa Zone and surrounding areas — where the environment naturally supports organic and sustainable farming.",
  },
  {
    question: "Do you export your products internationally?",
    answer:
      "Yes, Yebonga Agro PLC exports a variety of agricultural products to international markets. We ensure all export products meet international quality, safety, and certification standards.",
  },
  {
    question: "Are your products organic and chemical-free?",
    answer:
      "Absolutely. Our products are 100% natural, free from harmful chemicals, and produced using environmentally friendly and sustainable agricultural methods.",
  },
  {
    question: "How can I place an order or become a distributor?",
    answer:
      "You can reach out to us through the contact form on our website, by email, or by phone. Our export and sales team will guide you through the product catalog, pricing, and shipping process.",
  },
  {
    question: "Do you support local farmers and communities?",
    answer:
      "Yes. Supporting rural development is one of our core values. We work closely with local farmers, offering training on good agricultural practices, quality control, and sustainable production.",
  },
  {
    question: "What makes Yebonga Agro different from others?",
    answer:
      "We combine traditional Ethiopian farming knowledge with modern agribusiness practices to deliver premium, traceable, and sustainably sourced agricultural products while promoting environmental protection and community empowerment.",
  },
  {
    question: "How can I contact Yebonga Agro PLC?",
    answer:
      "You can contact us via our website’s contact page, email (info@yebongaagro.com), or by phone. Our customer service team is always ready to assist with inquiries, partnerships, and distribution requests.",
  },
];

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <motion.div
      layout
      className="border border-blue-400 rounded-xl overflow-hidden bg-white shadow-md"
    >
      <motion.button
        onClick={toggle}
        className="w-full text-left flex justify-between items-center px-6 py-4 font-semibold text-lg text-blue-500 hover:bg-blue-50 transition-colors duration-200"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold text-blue-400"
        >
          +
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4 text-gray-700 leading-relaxed bg-blue-50"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
  const isLarge = useIsLargeScreen();

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-white pt-28 pb-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl text-center font-serif font-bold text-blue-500 mb-8"
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
      >
        Find answers to the most common questions about our products, export
        process, and company values. If you have more inquiries, please reach
        out through our contact page.
      </motion.p>

      <motion.div
        layout
        className="flex flex-col gap-4 max-w-4xl mx-auto"
        transition={{ layout: { duration: 0.4 } }}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
       
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

export default FAQ;
