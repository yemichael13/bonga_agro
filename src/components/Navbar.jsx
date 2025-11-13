import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Yap_Logo.png";
import { NavLink } from "react-router-dom";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="flex justify-between items-center w-full px-4 md:px-8 py-2 fixed top-0 left-0 z-50">
      <a href="/" className="cursor-pointer fixed top-0 md:top-1 md:left-25 left-5 z-100">
        <motion.img
          src={Logo}
          alt="Logo"
          className="md:h-25 md:w-25 w-20 h-20 object-contain"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </a>

      <div
        className={`fixed top-0 right-4 md:top-2 md:bg-white/20 md:backdrop-blur-sm md:border md:border-white/20 md:shadow-lg md:rounded-4xl w-full md:w-auto z-50 flex justify-end items-center bg-white h-20 px-4 transition-opacity duration-300`}
      >

        {/* Mobile menu toggle - positioned to the right on small screens */}
        <div className="md:hidden absolute top-1/2 -translate-y-1/2 flex items-center">
          {!menuOpen ? (
            <ion-icon
              name="menu-outline"
              size="large"
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            ></ion-icon>
          ) : (
            <ion-icon
              name="close-outline"
              size="large"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            ></ion-icon>
          )}
        </div>

        <div
          className={`absolute md:static mb-4 md:bg-transparent bg-white md:min-h-fit min-h-[20vh] md:border-none md:shadow-none
          left-0 top-20 w-full md:w-auto px-5 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-end`}
        >
          <ul className="flex md:flex-row flex-col justify-end items-center md:gap-8 gap-6 px-4 py-2 text-lg">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Produts", href: "/product-detail" },
              { label: "Contact", href: "/contact" },
              { label: "FAQ", href: "/faq" },
            ].map((item, idx) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: idx * 0.4 }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `relative group font-semibold px-3 py-1 duration-200 rounded-xl ${
                      isActive
                        ? "text-blue-500 " 
                        : "text-gray-900 hover:text-blue-600"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
