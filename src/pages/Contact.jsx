import React, {useMemo} from "react";
import { motion } from "framer-motion";
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
                <div className="p-4 m-4">
  <form
    action="https://formsubmit.co/info@yebongaagroplc.org.et"
    method="POST"
    className="flex flex-col px-5 md:px-20 mb-12 gap-6 max-w-3xl mx-auto justify-center"
  >
    <input
      type="hidden"
      name="_subject"
      value="New Message from Website Contact Form"
    />
    <input
      type="hidden"
      name="_captcha"
      value="true"
    />
    <input
      type="hidden"
      name="_template"
      value="table"
    />

    <input
      type="text"
      name="name"
      placeholder="Name*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <input
      type="email"
      name="email"
      placeholder="Email*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <textarea
      name="message"
      placeholder="Message*"
      required
      className="border-1 border-gray-500 px-4 py-2 rounded-2xl"
    ></textarea>

    <button
      type="submit"
      className="bg-blue-500 cursor-pointer text-white w-1/2 md:w-1/4 px-4 py-2 mx-auto rounded-xl cta-btn font-semibold hover:bg-white hover:text-blue-400 border-1 border-blue-500 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@yebongaagroplc.org.et"
                target="blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                info@yebongaagroplc.org.et
              </a>
          
              
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