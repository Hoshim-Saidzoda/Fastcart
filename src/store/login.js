import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance, removeToken } from "./api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post(
        "Account/login",
        {
          UserName: username,
          Password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return data.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, error: null, loading: false },
  reducers: {
    logout(state) {
      state.token = null;
      removeToken();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
        state.error = action.payload || action.error?.message || "Login failed";
        state.loading = false;
        removeToken();
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
