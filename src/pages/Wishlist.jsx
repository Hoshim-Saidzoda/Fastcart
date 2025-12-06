import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWishlist, clearWishlist } from "../store/wishlistSlice";
import { addProductToServer } from "../store/cartSlice";  
import { IMG_API } from "../store/api";
import { Trash2 } from "lucide-react";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  const moveAllToBag = async () => {
     for (const item of items) {
      const productObj = { id: item.id, title: item.title, price: item.price, image: item.image };
      try {
        await dispatch(addProductToServer(productObj)).unwrap();
      } catch (err) {
         dispatch({ type: "cart/addToCart", payload: productObj });
      }
    }

     dispatch(clearWishlist());
  };

   
  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={moveAllToBag}
          className=" border border-[#7F7F7F]   px-4 py-2 rounded hover:bg-grey-800 transition"
        >
          Move All to Bag
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-xl overflow-hidden shadow p-4 relative">
            <img
  src={item.image || "/default.png"}
  alt={item.title}
  className="w-full h-52 object-cover rounded"
/>

            <h3 className="mt-3 font-medium text-lg">{item.title}</h3>
            <p className="text-red-600 font-bold text-xl mt-1">${item.price}</p>

            <button
              onClick={() => dispatch(deleteWishlist(item.id))}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
              title="delete from Wishlist"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishlistPage;
