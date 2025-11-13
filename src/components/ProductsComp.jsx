import React from "react";
import ChromaGrid from "../assets/ChromaGrid";

export default function ProdTest() {
    return (
        <section className="prod-test-section px-4 py-12 bg-white flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl my-6 font-serif font-bold text-center text-blue-900">Our Products</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-10">
        Explore our diverse range of agricultural products designed to meet the needs of modern farmers. From high-quality seeds to innovative farming equipment, we provide everything you need to succeed in agriculture.
        </p>
        <ChromaGrid />
        </section>  
    )
}