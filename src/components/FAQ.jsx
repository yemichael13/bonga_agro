import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="border border-amber-700 rounded-xl overflow-hidden bg-white shadow-md"
    >
      <motion.button
        onClick={toggle}
        className="w-full text-left flex justify-between items-center px-6 py-4 font-semibold text-lg text-amber-800 hover:bg-amber-50 transition-colors duration-200"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold text-amber-700"
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
            className="px-6 pb-4 text-gray-700 leading-relaxed bg-amber-50"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white pt-28 pb-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl text-center font-serif font-bold text-amber-700 mb-8"
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
      <a href="/" className="flex justify-center mt-10">
        <button className="bg-amber-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-amber-700 duration-300 border-1 border-amber-700 cursor-pointer mb-10">
          Back to Home
        </button>
      </a>  
    </div>
  );
}
