import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./login";
import registrationReducer from "./registrationSlice"
import cartReducer from "./cartSlice";
import productReducer from "./productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    cart: cartReducer,
    products: productReducer,
  },
})