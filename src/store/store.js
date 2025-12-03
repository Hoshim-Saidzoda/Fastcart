import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./login";
import registrationReducer from "./registrationSlice"
import cartReducer from "./cartSlice";
import productReducer from "./productSlice"
import categoriesReducer from "./browseSlice"
import colorsReducer from "./ExploreSlice"
import exploreReducer from "./ExploreSlice";
import wishlistReducer from "./wishlistSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    cart: cartReducer,
    products: productReducer,
    categories : categoriesReducer,
    colors: colorsReducer,
    explore: exploreReducer,
    wishlist: wishlistReducer,
  },
})