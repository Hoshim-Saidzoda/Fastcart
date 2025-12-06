import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/wishlistSlice";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import StarRating from "./StarRating";
import { addProductToServer } from "../store/cartSlice";

const Card = ({ image, title, price, discount, id }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    const productObj = { id, title, price, image };
    dispatch(addToWishlist(productObj));
  };

  const handleAddToCart = () => {
  const productObj = { id, title, price, image };
  dispatch(addProductToServer(productObj)); 
  };

  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300  group w-[300px] relative">
   {discount > 0 && (
    <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md z-10">
      -{discount}%
    </div>
  )}

  <div className="relative">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-64 object-cover"
    />

    <div className="absolute top-3 right-3 flex flex-col gap-3 group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition">
        <FavoriteBorder
          className="text-gray-700 hover:text-red-600 cursor-pointer"
          onClick={handleAddToWishlist}
        />
      </div>
      <div className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-50 transition">
        <Visibility className="text-gray-700 hover:text-blue-600 cursor-pointer" />
      </div>
    </div>
  </div>

  <button
    onClick={handleAddToCart}
    className="text-white px-4 py-2 rounded hover:bg-black w-full mt-2"
  >
    Add to Cart
  </button>

  <div className="p-5">
    <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>
    <div className="flex items-center gap-3 mb-3">
      <span className="text-red-600 font-bold text-xl">
        ${discount ? Math.round(price * (1 - discount / 100)) : price}
      </span>
      {discount > 0 && (
        <span className="text-gray-400 line-through text-xl">${price}</span>
      )}
    </div>
    <div className="mb-3">
      <StarRating />
    </div>
  </div>
</div>

  );
};

export default React.memo(Card);
