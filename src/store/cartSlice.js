import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "./api";

const STORAGE_KEY = "cart_v1";

const loadInitial = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], totalPrice: 0 };
    const parsed = JSON.parse(raw);
    return {
      items: parsed.items || [],
      totalPrice: parsed.totalPrice || 0,
    };
  } catch (e) {
    return { items: [], totalPrice: 0 };
  }
};

const initialState = loadInitial();

const recalcTotal = (items) =>
  items.reduce((sum, it) => sum + (Number(it.price ?? 0) * (it.quantity ?? 1)), 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((it) => it.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice = recalcTotal(state.items);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items, totalPrice: state.totalPrice }));
      } catch (e) {}
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find((it) => it.id === id);
      if (existing) {
        if ((existing.quantity || 1) > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter((it) => it.id !== id);
        }
      }
      state.totalPrice = recalcTotal(state.items);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items, totalPrice: state.totalPrice }));
      } catch (e) {}
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((it) => it.id !== id);
      state.totalPrice = recalcTotal(state.items);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items, totalPrice: state.totalPrice }));
      } catch (e) {}
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    },
  },
});

export const addProductToServer = createAsyncThunk(
  "cart/addProductToServer",
  async (product, { dispatch, rejectWithValue }) => {
    try {
      await axiosRequest.post(`Cart/add-product-to-cart?id=${product.id}`, {});
       dispatch(cartSlice.actions.addToCart(product));
      return product;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
