import React, { useState } from 'react';
import Pic_1 from '../assets/img_1.jpeg';
import Pic_2 from '../assets/img_2.jpeg';
import Pic_3 from '../assets/img_3.jpeg';
import Pic_4 from '../assets/img_4.jpeg';
import Pic_5 from '../assets/img_5.jpeg';
import Pic_6 from '../assets/img_6.jpeg';
import Pic_7 from '../assets/img_7.jpeg';
import Pic_8 from '../assets/img_8.jpeg';
import Pic_9 from '../assets/img_9.jpeg';
import Pic_10 from '../assets/img_10.jpeg';
import Pic_11 from '../assets/img_11.jpeg';

import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ImageDetail from './ImageDetail';

const upperMarquee = [Pic_1, Pic_2, Pic_3, Pic_4, Pic_5, Pic_6, Pic_7, Pic_8, Pic_9, Pic_10, Pic_11];
const lowerMarquee = [Pic_11, Pic_10, Pic_9, Pic_8, Pic_7, Pic_6, Pic_5, Pic_4, Pic_3, Pic_2, Pic_1];
const allImages = [...upperMarquee, ...lowerMarquee];

function Gallery() {
    const controlsUpper1 = useAnimation();
    const controlsUpper2 = useAnimation();
    const controlsLower1 = useAnimation();
    const controlsLower2 = useAnimation();
    const navigate = useNavigate();

    const startUpper = () => {
        controlsUpper1.start({
            x: "-100%",
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
        controlsUpper2.start({
            x: "-100%",
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
    };

    const startLower = () => {
        controlsLower1.start({
            x: 0,
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
        controlsLower2.start({
            x: 0,
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
    };

    // start animations on mount
    React.useEffect(() => {
        startUpper();
        startLower();
    }, []);

        // Helper for overlay effect
        const renderImageWithOverlay = (image, index) => (
            <Link to="/image-detail" key={index} className="relative group cursor-pointer w-[40vw] sm:w-1/3 h-40 sm:h-60 block">
                <img src={image} alt={`Marquee Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transition duration-300 group-hover:opacity-60" />
                {/* 4 shade overlays */}
                <div className="pointer-events-none absolute inset-0 flex">
                    {/* Top shade */}
                    <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    {/* Bottom shade */}
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    {/* Left shade */}
                    <div className="absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    {/* Right shade */}
                    <div className="absolute top-0 right-0 h-full w-1/6 bg-gradient-to-l from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                {/* Explore text */}
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300 drop-shadow-lg">Explore</span>
            </Link>
        );

    return (
        <>
            {/* Desktop Marquee Gallery */}
            <div className="md:relative hidden md:block my-8 mx-4 md:mx-0">
                {/* ...existing code... */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to right, #fafcfb 20%, #fafcfb 80%, transparent)" }} />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to left, #fafcfb 20%, #fafcfb 80%, transparent)" }} />
                <section>
                    {/* ...existing code... */}
                    {/* Upper row */}
                    <div
                        className='flex gap-2 overflow-hidden relative z-0'
                        onMouseEnter={() => {
                            controlsUpper1.stop();
                            controlsUpper2.stop();
                        }}
                        onMouseLeave={startUpper}
                    >
                        <motion.div
                            animate={controlsUpper1}
                            initial={{ x: 0 }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {upperMarquee.map((image, index) => renderImageWithOverlay(image, index))}
                        </motion.div>
                        <motion.div
                            animate={controlsUpper2}
                            initial={{ x: 0 }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {upperMarquee.map((image, index) => renderImageWithOverlay(image, index))}
                        </motion.div>
                    </div>
                    {/* Lower row */}
                    <div
                        className='flex gap-2 overflow-hidden mt-2 relative z-0'
                        onMouseEnter={() => {
                            controlsLower1.stop();
                            controlsLower2.stop();
                        }}
                        onMouseLeave={startLower}
                    >
                        <motion.div
                            animate={controlsLower1}
                            initial={{ x: "-100%" }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {lowerMarquee.map((image, index) => renderImageWithOverlay(image, index))}
                        </motion.div>
                        <motion.div
                            animate={controlsLower2}
                            initial={{ x: "-100%" }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {lowerMarquee.map((image, index) => renderImageWithOverlay(image, index))}
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Mobile Gallery - Show all upperMarquee images with fallback */}
            <div className="block md:hidden my-8 mx-4">
                <section>
                    <div className="grid grid-cols-2 gap-2">
                        {upperMarquee.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-32 object-cover rounded-xl shadow-lg bg-gray-200"
                                onError={e => { e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found'; }}
                            />
                        ))}
                    </div>
                </section>
            </div>

        </>
    );
}

export default Gallery;
