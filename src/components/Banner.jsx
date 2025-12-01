import React from "react";
import iphone from "../assets/iphone.png";

const Banner = () => (
  <section className="w-full max-w-[1400px] mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col gap-2 md:col-span-1 w-full max-w-[250px]">
      {[
        "Woman’s Fashion", "Men’s Fashion", "Electronics",
        "Home & Lifestyle", "Medicine", "Sports & Outdoor"
      ].map(item => (
        <button key={item} className="text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition border border-gray-200">
          {item}
        </button>
      ))}
    </div>
    <div className="relative md:col-span-2 w-full h-[400px] rounded-xl overflow-hidden bg-black flex items-center justify-between px-10">
      <div className="text-white max-w-xs">
        <p className="mb-2 text-sm opacity-80">iPhone 14 Series</p>
        <h2 className="text-4xl font-bold mb-4 leading-tight">Up to 10% off Voucher</h2>
        <button className="bg-red-500 px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition">Shop Now</button>
      </div>
      <img src={iphone} alt="Promo" className="w-[450px] h-[450px] object-contain" />
    </div>
  </section>
);

export default Banner;
