import React from "react";
import iphone from "../assets/iphone.png";

const Banner = () => (
  <section className="w-full max-w-[1400px] mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col gap-2 md:col-span-1 w-full max-w-[250px]">
      {[
        "Woman’s Fashion", "Men’s Fashion", "Electronics",
        "Home & Lifestyle", "Medicine", "Sports & Outdoor"
      ].map(item => (
        <button 
          key={item} 
          className="text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition border border-gray-200 text-sm md:text-base"
        >
          {item}
        </button>
      ))}
    </div>
    <div className="relative md:col-span-2 w-full h-[400px] md:h-[400px] rounded-xl overflow-hidden bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6">
      <div className="text-white max-w-xs md:max-w-sm mb-4 md:mb-0 text-center md:text-left">
        <p className="mb-2 text-sm md:text-base opacity-80">iPhone 14 Series</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">Up to 10% off Voucher</h2>
        <button className="bg-red-500 px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition">
          Shop Now
        </button>
      </div>
      <img 
        src={iphone} 
        alt="Promo" 
        className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-contain"
      />
    </div>
  </section>
);

export default Banner;
