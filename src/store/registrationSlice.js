import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "./api";

 export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post("Account/register", payload, {
        headers: { "Content-Type": "application/json" },
      });

      return data;  
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    clearStatus(state) {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { clearStatus } = registrationSlice.actions;
export default registrationSlice.reducer;
