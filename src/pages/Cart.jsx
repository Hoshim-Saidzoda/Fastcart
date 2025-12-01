import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const totalPrice = useSelector((state) => state.cart.totalPrice || 0);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10">Корзина пуста</h2>;
  }

   const safeTotal = Number(totalPrice ?? 0);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">🛒 Моя корзина</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${Number(item.price ?? 0).toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity ?? 1}</span>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 font-bold text-xl"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Общая сумма: ${safeTotal.toFixed(2)}
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default Cart;
