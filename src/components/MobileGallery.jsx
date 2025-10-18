import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import Korarima from '../assets/korarima.jpg';
import Ginger from '../assets/ginger.jpg';
import Honey from '../assets/honey.png';
import Coffee from '../assets/coffee-tea.jpg';
import Dairy from '../assets/dairy.jpg';

import { Link } from 'react-router-dom';


const mobileImages = [Pic_1, Pic_2, Korarima, Pic_3, Pic_4, Ginger, Pic_5, Pic_6, Honey, Pic_7, Pic_8, Coffee, Pic_9, Pic_10, Dairy, Pic_11];


function MobileGallery() {
  const navigate = useNavigate();
  // Split images into 2 roughly equal rows
  const rowCount = 2;
  const imagesPerRow = Math.ceil(mobileImages.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, i) =>
    mobileImages.slice(i * imagesPerRow, (i + 1) * imagesPerRow)
  );

  return (
    <div className="block md:hidden my-8 mx-4 pt-5">
      <section id='gallery'>
        <h3 className="text-xl font-bold text-green-900 mb-4 text-center">Image Gallery</h3>
        <p className="text-green-900 mb-6 text-center">Swipe to see more images!</p>
        {rows.map((rowImages, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-row gap-2 overflow-x-auto scrollbar-hide mb-4"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {rowImages.map((image, index) => (
              <Link to="/product-detail" className="w-52 h-42 object-cover rounded-xl shadow-lg bg-gray-200 flex-shrink-0 cursor-pointer">
              <img
                key={index}
                src={image}
                alt={`Mobile Gallery Image`}
                className="w-52 h-42 object-cover rounded-xl shadow-lg bg-gray-200 flex-shrink-0 cursor-pointer"
                
                onError={e => { e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found'; }}
              />
              </Link>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default MobileGallery;
