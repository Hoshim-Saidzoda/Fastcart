import React from "react";
import calonka from "../assets/calonka.png";

const MusicPromo = () => (
  <section className="w-full max-w-[1400px] bg-[#000000] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div className="flex flex-col gap-20 pl-30">
      <h3 className="text-xl font-semibold text-[#00FF66]">Categories</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Enhance Your Music Experience</h2>
      <div className="flex gap-4">
        {["23 Hours", "05 Days", "59 Minutes", "35 Seconds"].map((item, idx) => (
          <div key={idx} className="bg-gray-100 rounded-full px-5 py-3 flex flex-col items-center">
            <span className="text-2xl font-bold">{item.split(" ")[0]}</span>
            <span className="text-sm text-gray-600">{item.split(" ")[1]}</span>
          </div>
        ))}
      </div>
      <button className="bg-[#00FF66] text-white py-4 px-10 rounded-lg font-medium w-max hover:bg-red-600 transition">Buy Now!</button>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={calonka} alt="Music Promo" className="w-full object-contain" />
    </div>
  </section>
);

export default MusicPromo;
