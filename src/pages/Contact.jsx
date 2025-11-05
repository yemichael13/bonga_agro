import React, {useMemo} from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
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
  
const Contact = () => {

  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
  const isLarge = useIsLargeScreen();

    return (
        <div>
            <Navbar />
            <section id="contact" className="w-full my-8 pt-25 px-4 md:px-10">
                <h1 className="font-serif text-6xl text-center my-4">Contact Us</h1>
                <h5 className="text-center">Have a question or need a quote? Feel free to reach out to us!</h5>
                <div className="flex flex-col justify-center items-center bg-blue-50 px-5 md:px-20 py-10 rounded-xl mt-10">
                  <input type="text" name="name" placeholder="Name*" required className="border-b-1 p-2 border-gray-500 w-full md:w-1/2 my-4"></input>
                  <input type="email" name="email" placeholder="Email*" required className="border-b-1 p-2 border-gray-500 w-full md:w-1/2 my-4"></input>
                  <textarea type="text" name="message" placeholder="Message*" required className="border-1 p-2 rounded-lg border-gray-500 w-full md:w-1/2 my-4"></textarea>
                  <button className="bg-blue-400 text-white rounded-lg px-4 py-2 w-1/4 font-semibold hover:bg-white hover:text-blue-400 duration-300 cursor-pointer border-1 border-blue-400">Send</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-5">
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="call-outline" size="large" className="text-blue-500 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Call Us</h2>
            <p className="text-gray-600 text-lg">+251-911-258-379</p>
          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="mail-outline" size="large" className="text-blue-400 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Email Us</h2>
            <div className="space-y-2">
              <p className="text-gray-600 ">info@yebongaagroplc.org.et</p>
              
            </div>
          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="location-outline" size="large" className="text-blue-500 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Visit Us</h2>
            <p className="text-gray-600">Steet 123, Addis Ababa, Ethiopia</p>
          </div>
        </div>
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
    )
}
export default Contact;