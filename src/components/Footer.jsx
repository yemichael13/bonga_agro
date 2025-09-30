import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
    const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
    return (
        <section>
    <div className='w-full h-auto  flex md:flex-row flex-col gap-4 md:justify-between items-center  mt-2 md:mt-8 p-8'>
        <div className='flex flex-col ' >
            <a href="/" className="cursor-pointer">
                <img src={Logo} alt="Logo" className="h-10 w-10 object-contain " />
            </a>
            
        </div>
        <div className='flex flex-row justify-center items-center gap-8 md:w-1/2 ' >
            <div >
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                <li><a href="#home" onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-amber-700">
            Home
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="#about-us" onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-amber-700">
            About Us
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="#products" onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-amber-700">
            Produts/Services
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="#testinomials" onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-amber-700">
            Testinomials
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
          <li><a href="#contact" onClick={handleSmoothScroll} className="relative group px-3 py-1 transition-colors duration-200 rounded-xl hover:text-amber-700">
            Contact
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-full  transition-all duration-300"></span>
          </a></li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 md:w-1/2 border-r border-r-black' >
            <h4 className='text-2xl font-bold'>Find Us</h4>
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-facebook"></ion-icon>Facebook
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-instagram"></ion-icon>Instagram
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-youtube"></ion-icon>Youtube
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-tiktok"></ion-icon>Tiktok
                                </a>
            </ul>
        </div>
        </div>
        
        
    </div>
    <div className=' border-t border-t-black w-4/5  p-4'>
        <p className="font-light">&copy; {new Date().getFullYear()} Philadephia generation baptist church </p>
    </div>
  </section>
    );
 }
 
 export default Footer;