import React from "react";

const ProductCard = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-sm"
    >
       <div className="bg-gray-100 aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

       <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
