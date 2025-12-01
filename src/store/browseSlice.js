import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchBrowseItems = createAsyncThunk(
  "browse/fetchBrowseItems",
  async () => {
    const { data } = await axios.get("http://37.27.29.18:8002/BrowseItems");
    return data;
  }
);

const browseSlice = createSlice({
  name: "browse",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrowseItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrowseItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBrowseItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default browseSlice.reducer;
