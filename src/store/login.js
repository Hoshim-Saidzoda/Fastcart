import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance, saveToken, removeToken, axiosRequest } from "./api";

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

      const token = data.data;
      if (token) {
        saveToken(token);
      }

      return token;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      removeToken();
    },
  },


  
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
