import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProductToServer } from "../../store/cartSlice";
import { addToWishlist } from "../../store/wishlistSlice";
import StarRating from "../StarRating"
const ProductCard = ({
  id,
  image,
  title,
  price, 
  onClick,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addProductToServer({ id, title, price, image }));
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    dispatch(addToWishlist({ id, title, price, image }));
  };

  
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-sm"
    >
       
      <div className="absolute top-4 right-4 z-10">
        <FavoriteBorder
          className="text-gray-700 hover:text-red-600 cursor-pointer"
          onClick={handleAddToWishlist}
        />
      </div>

      <div className="bg-gray-100 aspect-square overflow-hidden">
        <img
          src={image }
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="text-white   px-4 py-2 rounded hover:bg-gray-900 w-full mt-2"
      >
        Add to Cart
      </button>

      <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-2 mb-3">{title}</h3>

         <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
           
        </div>

  <StarRating /> 
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
