import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "./api";

 export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axiosRequest.get("Product/get-products", {
      params: { PageNumber: 1, PageSize: 20 },
    });
    return data.data.products || [];
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
