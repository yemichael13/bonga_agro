import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import FAQ from "../pages/FAQ";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);

  // Smooth scroll handler
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setMenuOpen(false);
    }
  };

  return (
    <div
  className={`fixed top-0 md:top-2 md:bg-white/20 md:backdrop-blur-sm md:border md:border-white/20 md:shadow-lg md:rounded-4xl
  left-1/2 -translate-x-1/2 w-full md:w-3/4 z-50 flex justify-between items-center
  bg-white h-20 self-center px-4 transition-opacity duration-300 ${navbarHovered ? 'opacity-100' : 'md:opacity-100'}`}
>

      <a href="/" className="cursor-pointer">
        <motion.img 
          src={Logo} 
          alt="Logo" 
          className="h-12 w-12 object-contain" 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }} 
        />
      </a>
      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center ">
        {!menuOpen ? (
          <ion-icon name="menu-outline" size="large" onClick={() => setMenuOpen(true)} className="cursor-pointer mr-4"></ion-icon>
        ) : (
          <ion-icon name="close-outline" size="large" onClick={() => setMenuOpen(false)} className="cursor-pointer mr-4"></ion-icon>
        )}
      </div>
      <div className={`absolute md:static mb-4 md:bg-transparent  bg-white md:min-h-fit min-h-[20vh]  md:border-none md:shadow-none  left-0 top-20 w-full md:w-auto px-5 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}>
        <ul className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-8 px-4 py-2 text-lg md:mx-4">
          {[
            { label: "Home", href: "/", isLink: true },
            { label: "About", href: "/about", isLink: true },
            { label: "Produts", href: "/product-detail", isLink: true },
            
            { label: "Contact", href: "/contact", isLink: true },
            { label: "FAQ", href: "/faq", isLink: true }
          ].map((item, idx) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: idx * 0.5 }}
            >
              {item.isLink ? (
                <Link to={item.href} className="relative group font-semibold px-3 py-1 transition-colors text-blue-600 text-shadow-2 duration-200 rounded-xl hover:text-blue-600">
                  {item.label}
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
                </Link>
              ) : (
                <a href={item.href} onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-blue-400">
                  {item.label}
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;