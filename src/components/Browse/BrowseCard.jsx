import React from "react";

const BrowseCard = ({ image, title }) => (
  <div className="  rounded-xl overflow-hidden shadow border  border-[#B3B3B3] hover:shadow-xl transition-all duration-300 cursor-pointer group">
    <div className="flex flex-col items-center justify-center p-10 h-full">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-23 h-23 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </div>
  </div>
);

export default React.memo(BrowseCard);
