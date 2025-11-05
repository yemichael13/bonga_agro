import React from 'react';
import Logo from '../assets/logo.png';
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
    const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setMenuOpen(false);
    }
  };
  const footerRef = useRef(null);
  const [footerAnimKey, setFooterAnimKey] = React.useState(0);
  const footerInView = useInView(footerRef, { amount: 0.5, triggerOnce: false });
    return (
        <section id='footer'>
    <div className='w-full h-auto  flex md:flex-row flex-col gap-4 md:justify-between items-center  mt-2 md:mt-8 p-8'>
        <div className='flex flex-col ' >
            <a href="/" className="cursor-pointer w-20 h-20 ">
                <img src={Logo} alt="Logo" className="h-20 w-20 object-contain " />
            </a>
            <div> 
              <h5>Subscribe to our newsletter for the latest updates on new features and product releases.</h5>
              <div className='flex flex-row mt-4'>
                <input type="email" placeholder='Enter your email' className='border-1 bg-white border-gray-500 rounded-l-full p-2 w-2/3 outline-none text-black text-center'/>
                <button className='bg-blue-500 text-center text-white font-semibold px-2 md:px-6 py-2 border-1 w-1/3 border-blue-700 rounded-r-full hover:bg-white cursor-pointer hover:text-blue-400 duration-300'>Subscribe</button>
              </div>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-8 md:w-1/2 ' >
            <div >
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
            <li><a href="/" className="relative group px-3 py-1 transition-colors  rounded-xl ">
            Home
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="/about" className="relative group px-3 py-1 transition-colors  rounded-xl ">
            About
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="/product-detail" className="relative group px-3 py-1 transition-colors  rounded-xl ">
            Products
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          
          <li><a href="/contact" className="relative group px-3 py-1 transition-colors  rounded-xl ">
            Contact
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="/faq" className="relative group px-3 py-1 transition-colors  rounded-xl ">
            FAQ
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-400 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 md:w-1/2 md:border-r md:border-r-white' >
            <h4 className='text-2xl font-bold'>Find Us</h4>
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-facebook"></ion-icon>Facebook
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-instagram"></ion-icon>Instagram
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-linkedin"></ion-icon>LinkedIN
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-tiktok"></ion-icon>Tiktok
                                </a>
            </ul>
        </div>
        </div>
        
        
    </div>
    <div className=' border-t border-t-white w-4/5   p-4'>
        <p className="font-light text-start">&copy; {new Date().getFullYear()} Yebonga Agro PLC </p>
    </div>
  </section>
    );
 }
 
 export default Footer;