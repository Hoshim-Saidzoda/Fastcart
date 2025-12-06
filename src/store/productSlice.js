import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "./api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const { data } = await axiosRequest.get("Product/get-products");
    return data.data.products;
    } catch (error) {
      console.error(error);
      return [];  
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});

export default productSlice.reducer;
