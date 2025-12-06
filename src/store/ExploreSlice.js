import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ODg4IiwibmFtZSI6IlRlc3QgVXNlciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MzM2OTAwMDAsImV4cCI6MTc2NTIyNjAwMH0.qwerty12345abcdef";

const api = axios.create({
  baseURL: "http://37.27.29.18:8002",
  headers: {
    accept: "*/*",
    Authorization: TOKEN,
  },
});

export const fetchColors = createAsyncThunk(
  "explore/fetchColors",
  async ({ ColorName = "", PageNumber = 1, PageSize = 20 }) => {
    const res = await api.get("/Color/get-colors", {
      params: {
        ColorName: ColorName || undefined,
        PageNumber,
        PageSize,
      },
    });
    return res.data.data || [];
  }
);

const exploreSlice = createSlice({
  name: "explore",
  initialState: {
    colors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.loading = false;
        state.colors = action.payload;
      })
    
  },
});

export default exploreSlice.reducer;