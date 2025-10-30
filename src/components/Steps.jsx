import React, { useState } from "react";
import ScrollStack, { ScrollStackItem } from "../assets/ScrollStack";

const Steps = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:mt-20 pt-20 px-4 md:px-10 relative overflow-hidden">
      {/* LEFT TEXT SECTION */}
      <div className="flex-1 max-w-lg z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Discover the Power of Our Products
        </h2>
        <p className="mb-6 text-gray-700">
          At Yebonga Agro PLC, quality is at the heart of everything we produce
          and market. Our focus is on delivering products that are{" "}
          <span className="text-amber-700">
            safe, natural, and meet international standards
          </span>{" "}
          while preserving the unique flavors and authenticity of Ethiopia’s
          agricultural heritage.
        </p>

        {!showMore && (
          <button
            className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-400 duration-300 border border-blue-400 cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            Read More
          </button>
        )}

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {showMore && (
            <div className="text-gray-700 text-lg leading-relaxed mt-4">
              <p>
                <strong>Spices</strong> – Grown in the fertile forest areas of
                Keficho Zone, including{" "}
                <span className="text-amber-600 font-semibold">
                  false cardamom (korerima)
                </span>
                , cultivated using natural and sustainable methods.
              </p>
              <p className="mt-3">
                <strong>Organic Honey</strong> – 100% natural and chemical-free,
                collected from forest and highland beekeeping regions.
              </p>
              <p className="mt-3">
                <strong>Dairy Products</strong> – Fresh, hygienic, and nutritious,
                ensuring safety from collection to packaging.
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Implements GAP and GMP standards.</li>
                <li>Trains smallholder farmers on quality improvement.</li>
                <li>Applies rigorous quality control checks.</li>
                <li>
                  Pursues organic and fair-trade certifications for export.
                </li>
              </ul>
              <button
                className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-400 duration-300 mt-4 border border-blue-400 cursor-pointer"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE STACK SECTION */}
      <div className="flex-1 relative w-full md:w-1/2 h-[90vh] overflow-hidden">
        <ScrollStack
          itemDistance={100}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="40%"
          scaleEndPosition="15%"
          baseScale={0.85}
          rotationAmount={1.5}
          blurAmount={1}
          useWindowScroll={true}
        >
          <ScrollStackItem itemClassName="bg-gradient-to-r from-blue-50 to-white shadow-lg border border-blue-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Quality Korerima and Spices
            </h2>
            <p className="text-gray-700">
              We source the finest korerima and spices from Ethiopia, known for
              their exceptional quality and rich flavors.
            </p>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-r from-amber-50 to-white shadow-lg border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-amber-800 mb-2">
              Expert Production Process
            </h2>
            <p className="text-gray-700">
              Our state-of-the-art facilities ensure that our korerima and
              spices are processed with the highest hygiene and quality control
              standards.
            </p>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-r from-green-50 to-white shadow-lg border border-green-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Global Export Reach
            </h2>
            <p className="text-gray-700">
              We export our premium corrorima and spices worldwide, bringing the
              authentic taste of Ethiopia to global consumers.
            </p>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-r from-blue-100 to-white shadow-lg border border-blue-300 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              Customer Satisfaction Guaranteed
            </h2>
            <p className="text-gray-700">
              We are committed to providing our customers with top-notch
              products and excellent service, ensuring satisfaction every time.
            </p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
};

export default Steps;
