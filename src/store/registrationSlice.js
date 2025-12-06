import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "./api";

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (payload) => {
    try {
      const { data } = await apiInstance.post("Account/register",
         payload, {
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (error) {
      console.error(error);
      return null; 
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload; 
      }
    });
  },
});

export default registrationSlice.reducer;
