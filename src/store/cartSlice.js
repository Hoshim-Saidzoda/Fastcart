import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "./api";

const STORAGE_KEY = "cart_v1";

 const loadInitial = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], totalPrice: 0 };
    return JSON.parse(raw);
  } catch {
    return { items: [], totalPrice: 0 };
  }
};

const initialState = loadInitial();

 const recalcTotal = (items) =>
  items.reduce((sum, it) => sum + Number(it.price * (it.quantity || 1)), 0);

 const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const existing = state.items.find((it) => it.id === p.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...p, quantity: 1 });
      }

      state.totalPrice = recalcTotal(state.items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find((it) => it.id === id);

      if (existing) {
        existing.quantity > 1
          ? (existing.quantity -= 1)
          : (state.items = state.items.filter((it) => it.id !== id));
      }

      state.totalPrice = recalcTotal(state.items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((it) => it.id !== action.payload);
      state.totalPrice = recalcTotal(state.items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

 export const addProductToServer = createAsyncThunk(
  "cart/addProductToServer",
  async (product, { dispatch }) => {
    try {
      await axiosRequest.post(`Cart/add-product-to-cart?id=${product.id}`);
    } catch {
    }

    dispatch(cartSlice.actions.addToCart(product));
    return product;
  }
);

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
