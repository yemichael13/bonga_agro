import React, {useMemo} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import MobileGallery from "./components/MobileGallery";
import Pic_10 from "./assets/img_10.jpeg";
import Pic_11 from "./assets/img_11.jpeg";
import Pic_4 from "./assets/img_4.jpeg";
import Pic_1 from "./assets/img_1.jpeg";
import Pic_2 from "./assets/img_2.jpeg";
import Pic_6 from "./assets/img_6.jpeg";
import Pic_7 from "./assets/img_7.jpeg";
import StepsSection from "./components/StepsSection";
import StepsMobile from "./components/StepsMobile";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ImageDetail from "./components/ProductDetail";
import { Link } from "react-router-dom"
import FAQ from "./components/FAQ";
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

const App = () => {
  const [showMoreAbout, setShowMoreAbout] = React.useState(false);
    // Animation triggers for sections
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const feature_1Ref = useRef(null);
    const feature_2Ref = useRef(null);
    const productsRef = useRef(null);
    const testimonialsRef = useRef(null);
    const footerRef = useRef(null);
    const [homeAnimKey, setHomeAnimKey] = React.useState(0);
    const [aboutAnimKey, setAboutAnimKey] = React.useState(0);
    const [feature_1AnimKey, setFeature_1AnimKey] = React.useState(0);
    const [feature_2AnimKey, setFeature_2AnimKey] = React.useState(0);
    const [productsAnimKey, setProductsAnimKey] = React.useState(0);
    const [testimonialsAnimKey, setTestimonialsAnimKey] = React.useState(0);
    const [footerAnimKey, setFooterAnimKey] = React.useState(0);
    const homeInView = useInView(homeRef, { amount: 0.5, triggerOnce: false });
    const aboutInView = useInView(aboutRef, { amount: 0.5, triggerOnce: false });
    const feature_1InView = useInView(feature_1Ref, { amount: 0.5, triggerOnce: false });
    const feature_2InView = useInView(feature_2Ref, { amount: 0.5, triggerOnce: false });
    const productsInView = useInView(productsRef, { amount: 0.5, triggerOnce: false });
    const testimonialsInView = useInView(testimonialsRef, { amount: 0.5, triggerOnce: false });
    const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
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
  const isLarge = useIsLargeScreen();
  const images = [Pic_1, Pic_2, Pic_4, Pic_6, Pic_7];
  const randomImage = useMemo(() => images[Math.floor(Math.random() * images.length)], [images]);
  return (
    <Router>
      <div className="w-full h-auto pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" ref={homeRef}  className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[80vh]">
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
              <section id="gallery" className="w-full my-8">
                {/* Mobile Gallery - hidden on desktop */}
                <MobileGallery />
                <div className="hidden md:block">
                  <Gallery className="h-100" />
                </div>
              </section>
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
                <div>
                  <motion.p
                    initial={isLarge ? { opacity: 0, scale: 0.8 } : false}
                    animate={isLarge && aboutInView ? { opacity: 1, scale: 1 } : false}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Yebonga Agro PLC is a young and dynamic agribusiness company committed to harnessing Ethiopia's abundant natural resources to produce premium and sustainable agricultural products. Despite being newly established, the company is driven by a clear vision: to foster rural development, diversify export opportunities, and enhance livelihoods through modern, innovative, and inclusive farming practices.
                  </motion.p>
                  <span
                    className="text-blue-400 cursor-pointer ml-2 underline"
                    onClick={() => setShowMoreAbout(true)}
                  >
                    Read More
                  </span>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMoreAbout ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`${showMoreAbout ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-500`}>
                      {showMoreAbout && (
                        <>
                          <span className="block mt-2 md:text-2xl text-lg font-semibold ">History</span>
                          <span className="block text-gray-700 md:text-lg text-sm py-2 font-light">Yebonga Agro PLC is a newly established agribusiness enterprise founded with the ambition of tapping into Ethiopia's rich natural resources to produce high-quality and sustainable agricultural products. Although recently formed, the company is rooted in a strong vision to contribute to rural development, export diversification, and improved livelihoods through modern and inclusive agribusiness practices.</span>
                          <span className="block mt-2 md:text-2xl text-lg font-semibold ">Background</span>
                          <span className="block text-gray-700 md:text-lg text-sm py-2 font-light">The company is a share company and established with a total capital of 10 million Eth Birr. With a strong commitment to quality, sustainability, and inclusiveness, Yebonga Agro PLC Company aims to be a trusted brand in Ethiopia and beyond. The company has identified the forest areas of Kaffa Zone, South-Western Ethiopia region as a suitable site for cultivating and processing high-value spices, including <span className="text-amber-700">false cardamom (Aframomum corrorima)</span>, a unique Ethiopian spice with growing demand in both domestic and international markets. Yebonga Agro PLC also plans to establish apiaries in forest and highland areas to produce <span className="text-amber-600">pure, organic honey</span>, leveraging Ethiopia's global reputation as a source of natural honey varieties. The company's honey production will emphasize sustainability, biodiversity conservation, and quality standards for export. The company produces quality products at its own land and collects products from the local farmers and cooperatives after giving practical training about production of good quality products and proper post-harvest management.</span>
                          <span
                            className="text-blue-400 cursor-pointer ml-2 underline block mt-2"
                            onClick={() => setShowMoreAbout(false)}
                          >
                            Show Less
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
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
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6 ">
                    {[{
                      title: "Korerima (Ethiopian Cardamom)",
                      desc: "Premium-quality Korerima (Ethiopian cardamom), grown naturally in fertile Ethiopian soil, available for both local markets and international export.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg",
                      color: '#00aeff'
                    }, {
                      title: "Ginger Production",
                      desc: "Fresh and dried Ethiopian ginger, carefully cultivated and processed to preserve flavor and aroma, supplied for food, beverage, and medicinal uses.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg",
                      color: '#00aeff'
                    }, {
                      title: "Coffee & Tea",
                      desc: "Ethiopian coffee and tea, hand-picked and processed with care, offering authentic taste experiences cherished around the world.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-blue-100  rounded-lg shadow-lg",
                      color: '#00aeff'
                    }].map((card, idx) => (
                      <motion.div
                        key={card.title + productsAnimKey}
                        className={card.className}
                        initial={isLarge ? { opacity: 0, scale: 0.8, rotateX: 90 } : false}
                        animate={isLarge && productsInView ? { opacity: 1, scale: 1, rotateX: 0 } : false}
                        transition={{ duration: 0.9, delay: idx * 0.3 }}
                        style={{ perspective: 800 }}
                      >
                        <h3 className="font-serif text-3xl text-center mb-4" style={{ color: card.color }}>{card.title}</h3>
                        <p className="text-blue-400">{card.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6 ">
                    {[{
                      title: "Export & Local Distribution",
                      desc: "Efficient supply chain for delivering spices to local markets and exporting worldwide with full compliance to quality and trade standards.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-blue-100 rounded-lg shadow-lg",
                      color: '#00aeff'
                    }, {
                      title: "Organic Forest Honey",
                      desc: "Yebonga Agro’s organic honey is collected from forest and highland apiaries where bees forage on diverse native flora. The result is a rich, flavorful, and chemical-free honey known for its purity and health benefits.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg ",
                      color: '#00aeff'
                    }, {
                      title: "Dairy Products",
                      desc: "Yebonga Agro’s dairy products are produced from fresh, high-quality milk collected from local farms. The line includes milk, yogurt, and traditional Ethiopian butter (kibe), processed with modern hygiene standards.",
                      className: "px-2 md:py-8 py-4 border-1 border-blue-400 bg-white rounded-lg shadow-lg",
                      color: '#00aeff'
                    }].map((card, idx) => (
                      <motion.div
                        key={card.title + productsAnimKey}
                        className={card.className}
                        initial={isLarge ? { opacity: 0, scale: 0.8, rotateX: 90 } : false}
                        animate={isLarge && productsInView ? { opacity: 1, scale: 1, rotateX: 0 } : false}
                        transition={{ duration: 0.9, delay: idx * 0.3 }}
                        style={{ perspective: 800 }}
                      >
                        <h3 className="font-serif text-3xl text-center mb-4" style={{ color: card.color }}>{card.title}</h3>
                        <p className="text-blue-400">{card.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
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
                      <Link to='/image-detail'>
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
              
              {/* Steps Section: desktop/tablet only */}
              <div className="hidden md:block mb-2">
                <StepsSection />
              </div>
              {/* StepsMobile: mobile only */}
              <div className="block md:hidden mb-2">
                <StepsMobile />
              </div>
              {/* Testimonials Section */}
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
              <section id="contact" className="w-full my-8 pt-25 px-4 md:px-10">
                <h1 className="font-serif text-6xl text-center my-4">Contact Us</h1>
                <h5 className="text-center">Have a question or need a quote? Feel free to reach out to us!</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-40 gap-5 text-center my-8 py-8 md:px-20 px-2 w-full">
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="call-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Call</h2>
              <p className="my-5">For urgent matters, please call us directly.</p>
              <h5 className="text-sm font-light">+251-911-258-379</h5>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="mail-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Email</h2>
              <p className="my-5">We are always happy to hear from you and assist with any inquiries.</p>
              <h5 className="text-sm font-light">info@example.com</h5>
                            
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="location-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Location</h2>
              <p className="my-5">Visit our office at our physical address.</p>
              <h5 className="text-sm font-light">123 Main Street, Addis Ababa, Ethiopia</h5>
            </div>
        </div>
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
            </>
          } />
          <Route path="/image-detail" element={<ImageDetail />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;