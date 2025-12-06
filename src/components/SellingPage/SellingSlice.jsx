import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../store/wishlistSlice";
import { addProductToServer } from "../../store/cartSlice";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import StarRating from "../StarRating";

const Selling = ({ image, title, price, discount, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productObj = { id, title, price, image };
    dispatch(addProductToServer(productObj));  
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist({ id, title, price, image }));
  };

  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group">

       <div className="relative">
        <img src={image} alt={title} loading="lazy" className="w-full h-64 object-cover" />




 <button
          onClick={handleAddToCart}
          className="text-white   px-4 py-2 rounded hover:bg-red-700 w-full mt-3"
        >
          Add to Cart
        </button>
         <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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

       <div className="p-5">
        <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>

         <div className="flex items-center gap-3 mb-3">
          <span className="text-[#DB4444] text-xl">${price}</span>

          {discount && (
            <span className="text-[#7F7F7F] line-through text-xl">${discount}</span>
          )}
        </div>

        <StarRating />

       <div className=" overflow-hidden"></div>
      </div>
    </div>
  );
};

export default React.memo(Selling);
