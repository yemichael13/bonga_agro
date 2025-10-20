import React, {useMemo} from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        </div>
    )
}
export default Contact;