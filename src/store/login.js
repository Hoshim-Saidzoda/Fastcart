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
  initialState: {
    token: null,
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
       
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
