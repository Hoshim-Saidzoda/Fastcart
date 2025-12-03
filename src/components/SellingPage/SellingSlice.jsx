import React from "react";
import { axiosRequest } from "../../store/api";
import { useDispatch } from "react-redux";
import { addProductToServer } from "../../store/cartSlice";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import StarRating from "../StarRating";
import { addLocal } from "../../store/wishlistSlice"
const Selling = ({
  type = "product", image, title, price, discount, id,
}) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  if (type === "category") {
    return (
      <div className="bg-[#f5f5f5] rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div className="flex flex-col items-center justify-center p-10 h-full">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-28 h-28 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    const productObj = { id, title, price, image };
    try {
      await dispatch(addProductToServer(productObj)).unwrap();
    } catch (err) {
      console.error("Ошибка добавления в корзину:", err);
      dispatch({ type: "cart/addToCart", payload: productObj });
    }
  };



 const handleAddToWishlist = () => {
  const productObj = { id, title, price, image };
  try {
    dispatch(addToWishlistServer(productObj)).unwrap();
  } catch {
    dispatch(addLocal(productObj)); // добавляем локально
    localStorage.setItem("wishlist", JSON.stringify([...currentItems, productObj]));
  }
};


  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 gap-10 group">
  <div className="relative">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-64"
    />

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
      <span className="text-[#7F7F7F] line-through text-xl">${price}</span>
    </div>

    <div className="mb-3">
      <StarRating />
    </div>

    <button
      onClick={handleAddToCart}
      className="  text-white px-4 py-2 rounded hover:bg-red-700 w-full"
    >
      Add to Cart
    </button>
  </div>
</div>

  );
};

export default React.memo(Selling);
