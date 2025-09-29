
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import MobileGallery from "./components/MobileGallery";
import Pic_10 from "./assets/img_10.jpeg";
// Placeholder for image detail page
const ImageDetail = () => <div className="min-h-[50vh] flex items-center justify-center text-3xl">Image Detail Page (Coming Soon)</div>;

const App = () => {
  return (
    <Router>
      <div className="w-full h-auto overflow-x-hidden pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="flex flex-col items-center justify-center bg-white">
                <h1 className="text-9xl px-2 my-10 font-bold">Bonga Agro PLC</h1>
                <h3 className="md:text-5xl px-2 text-4xl my-5 text-center font-serif text-amber-700">"Bringing Ethiopia's Unique Flavours To The World"</h3>
                <div className="w-full text-center px-10 py-5 bg-orange-200 my-4">
                  <p className="md:text-2xl text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-5 md:gap-20">
                  <button className="bg-amber-700 text-white font-bold px-6 py-3 border-2 border-amber-700 rounded-full text-xl hover:cursor-pointer hover:bg-white hover:text-amber-700  transition-colors duration-300">Get In Touch</button>
                  <button className="bg-white text-amber-700 border-2 font-bold border-amber-700 px-6 py-3 rounded-full text-xl ml-4 hover:cursor-pointer hover:bg-amber-700 hover:text-white transition-colors duration-300">Subscribe to Newsletter</button>
                </div>
              </section>
              <section id="gallery" className="w-full my-8">
                {/* Mobile Gallery - hidden on desktop */}
                <MobileGallery />
                <div className="hidden md:block">
                  <Gallery className="h-100" />
                </div>
              </section>
              <section id="about-us" className="w-full my-8 pt-25 px-4 md:px-10">
                <h1 className="text-6xl my-4 font-serif">About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<span className="text-amber-600 cursor-pointer"> Read More</span></p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6">
                  <div className="mb-6 md:mb-0 py-10 border-1 border-amber-700 p-4 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-serif text-center  mb-4">Vision</h2>
                    <p>To lead Africa in the production and processing of organic spices, coffee, dairy, and honey, setting the standard for quality, sustainability, and innovation while delivering premium products to local and international consumers.</p>
                  </div>
                  <div className="mb-6 md:mb-0 py-10 border-1 border-amber-700 bg-orange-200 p-4 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-serif text-center mb-4">Mission</h2>
                    <p>To sustainably produce and process premium organic spices, coffee, dairy, and honey by empowering local communities, preserving forests and biodiversity, adopting innovative practices, and delivering high-quality, ethically-sourced products to local and international markets</p>
                  </div>
                  <div className="mb-6 md:mb-0 py-10 border-1 border-amber-700 p-4 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-serif text-center mb-4">Values</h2>
                    <p>To lead Africa in the production and processing of organic spices, coffee, dairy, and honey, setting the standard for quality, sustainability, and innovation while delivering premium products to local and international consumers.</p>
                  </div>
                </div>

              </section>
              <section className="w-full md:my-8 my-4">
                <div className="w-full md:px-10 px-5 py-5 flex flex-col gap-10 md:flex-row justify-between items-center my-10">
                  <img src={Pic_10} alt="Bonga Agro" className="mx-auto rounded-lg shadow-lg md:w-1/2 max-h-100vh" />
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4">
                      <div className="md:absolute w-0 md:w-100 h-0 border border-black rotate-90 -translate-x-1/2 -translate-y-8"></div>
                      <div>
                        <h3 className="text-3xl font-serif my-4 ml-4">Ethiopian Corrorima</h3>
                        <p className="mb-10 ml-4">Discover the unique and aromatic Ethiopian corrorima spice for your dishes.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Sustainable Sourcing</h3>
                        <p className="mb-10 ml-4">Ethically sourced and sustainably produced spices to enhance your culinary experience.</p>
                        <h3 className="text-3xl font-serif my-4 ml-4">Quality Spices</h3>
                        <p className="mb-10 ml-4">Explore our wide range of premium spices sourced directly from Ethiopia.</p>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/gallery/:imageId" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;